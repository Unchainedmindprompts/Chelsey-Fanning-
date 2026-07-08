#!/usr/bin/env node
/**
 * audit-schema-ids.mjs — JSON-LD @id sweep + schema-rules audit for chelseyfanning.com
 *
 * DEFINITION = the INNERMOST object containing "@id" also has "@type" AND at
 *              least one additional meaningful property (beyond "@type"/"@id").
 * REFERENCE  = everything else: bare { "@id":"..." } stubs, publisher/author
 *              inline refs, or @id lines whose enclosing object has only @type+@id.
 *
 * @id detection — three mechanisms:
 *   (a) Literal:  "@id": "..."  or  "@id": `...`
 *   (b) Variable: "@id": identifier  → look backward for const binding, resolve
 *   (c) JSX prop: id={`...`}  (BreadcrumbSchema / FAQSchema id prop)
 *                 path="..."  (WebPageSchema path prop → NAP.url + path)
 *
 * Additional correctness checks (each exits 1 on failure):
 *   1. www-leak          — @id must use bare domain, not www.chelseyfanning.com
 *   2. no-agg-rating-biz — aggregateRating must not appear on the #business node
 *   3. agent-is-person   — #agent @type must be "Person"; no business-only props
 *   4. mep-string        — mainEntityOfPage must be a plain URL string, not an object
 *   5. faq-is-part-of    — every FAQPage must carry isPartOf → containing WebPage
 *   6. container-has-id  — WebPage / Blog / CollectionPage / Service / FAQPage must have @id
 *
 * Exit 0 = PASS. Exit 1 = FAIL.
 */

import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

// ── Known constant bindings ───────────────────────────────────────────────────
const CONST_MAP = { "NAP.url": "https://chelseyfanning.com" };
function resolveConsts(s) {
  for (const [k, v] of Object.entries(CONST_MAP))
    s = s.replaceAll(`\${${k}}`, v);
  return s;
}
const DYNAMIC_RE = /\$\{[^}]+\}/; // remaining template vars = per-instance

// ── File walker ───────────────────────────────────────────────────────────────
const SCAN_DIRS = ["app", "components", "lib"];
const SKIP = new Set(["node_modules", ".next", ".git", "dist"]);
function* walkTs(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory())                 yield* walkTs(p);
    else if (/\.(ts|tsx)$/.test(e.name)) yield p;
  }
}

// Collect all TS files upfront (shared by @id sweep and additional checks)
const ALL_TS_FILES = [];
for (const dir of SCAN_DIRS) {
  const full = path.join(ROOT, dir);
  if (fs.existsSync(full)) for (const f of walkTs(full)) ALL_TS_FILES.push(f);
}

// ── Property keywords that signal a genuine entity definition ─────────────────
const DEF_KEYS = [
  "name","url","telephone","email","description","image","sameAs",
  "address","geo","priceRange","aggregateRating","review",
  "headline","datePublished","dateModified",
  "author","publisher","founder","worksFor","hasOccupation",
  "jobTitle","hasCredential","knowsAbout","areaServed",
  "offers","subjectOf","isPartOf","mainEntityOfPage",
  "mainEntity","acceptedAnswer","itemListElement",
  "reviewBody","reviewRating","ratingValue","reviewCount",
  "provider","itemReviewed","numberOfBedrooms","floorSize","lotSize",
];
const DEF_PROPS_RE = new RegExp(
  DEF_KEYS.map(k => `(?:"${k}"|\\b${k}\\b)\\s*:`).join("|"),
  "g"
);

// ── Innermost-object extractor ────────────────────────────────────────────────
// Finds the INNERMOST { } block enclosing the given line.
// anchorCol: the column to start the backward brace search from.
//   · Default (undefined): uses the position of '"@id"' on that line.
//   · Pass lines[i].indexOf('"@type"') when scanning from a @type line.
function innermostObject(lines, lineIdx, anchorCol) {
  const idCol = anchorCol !== undefined
    ? anchorCol
    : lines[lineIdx].indexOf('"@id"');

  let depth = 0;
  let openLine = -1;
  outer: for (let j = lineIdx; j >= Math.max(0, lineIdx - 40); j--) {
    const line = lines[j];
    const limit = j === lineIdx ? Math.max(0, idCol - 1) : line.length - 1;
    for (let k = limit; k >= 0; k--) {
      if (line[k] === "}") depth++;
      else if (line[k] === "{") {
        if (depth === 0) { openLine = j; break outer; }
        depth--;
      }
    }
  }
  if (openLine < 0) return "";

  let closeDepth = 0;
  const objLines = [];
  let closed = false;
  for (let j = openLine; j <= Math.min(lines.length - 1, lineIdx + 40); j++) {
    const line = lines[j];
    const start = j === openLine ? lines[openLine].indexOf("{") : 0;
    for (let k = start; k < line.length; k++) {
      if (line[k] === "{") closeDepth++;
      else if (line[k] === "}") {
        closeDepth--;
        if (closeDepth === 0) { closed = true; break; }
      }
    }
    objLines.push(j === openLine ? line.slice(start) : line);
    if (closed) break;
  }
  return objLines.join("\n");
}

// ── Variable binding resolver ─────────────────────────────────────────────────
function resolveVarBinding(lines, fromLine, varName) {
  const re = new RegExp(
    `(?:const|let|var)\\s+${varName}\\s*=\\s*\`([^\`]+)\``
  );
  for (let j = fromLine; j >= Math.max(0, fromLine - 40); j--) {
    const m = lines[j].match(re);
    if (m) return m[1];
  }
  return null;
}

// ── Per-file scanner (literal + variable @id patterns) ────────────────────────
function scanFile(filePath) {
  const src   = fs.readFileSync(filePath, "utf8");
  const lines = src.split("\n");
  const hits  = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // (a) Literal @id
    const mLit = line.match(/"@id"\s*:\s*[`"]([^`"]+)[`"]/);
    if (mLit) {
      const rawId = mLit[1];
      const id    = resolveConsts(rawId);
      if (DYNAMIC_RE.test(id)) continue;

      const objSrc = innermostObject(lines, i);
      const hasAtType    = /"@type"\s*:/.test(objSrc);
      const defPropCount = (objSrc.match(DEF_PROPS_RE) ?? []).length;
      const isDef = hasAtType && defPropCount >= 2;

      hits.push({ kind: isDef ? "def" : "ref", id,
        file: path.relative(ROOT, filePath), ln: i + 1 });
      continue;
    }

    // (b) Variable @id: "@id": identifier
    const mVar = line.match(/"@id"\s*:\s*([a-zA-Z_$]\w*)\b/);
    if (mVar) {
      const varName = mVar[1];
      const rawVal  = resolveVarBinding(lines, i, varName);
      if (rawVal === null) continue;

      const id = resolveConsts(rawVal);
      if (DYNAMIC_RE.test(id)) continue;

      const objSrc = innermostObject(lines, i);
      const hasAtType    = /"@type"\s*:/.test(objSrc);
      const defPropCount = (objSrc.match(DEF_PROPS_RE) ?? []).length;
      const isDef = hasAtType && defPropCount >= 2;

      hits.push({ kind: isDef ? "def" : "ref", id,
        file: path.relative(ROOT, filePath), ln: i + 1, via: "var" });
    }
  }

  return hits;
}

// ── JSX prop scanner ──────────────────────────────────────────────────────────
function scanJsxProps(filePath) {
  const src   = fs.readFileSync(filePath, "utf8");
  const lines = src.split("\n");
  const hits  = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // BreadcrumbSchema / FAQSchema: id={`${NAP.url}/...`}
    const mId = line.match(/\bid\s*=\s*\{`([^`]+)`\}/);
    if (mId) {
      const id = resolveConsts(mId[1]);
      if (!DYNAMIC_RE.test(id) && id.startsWith("https://chelseyfanning.com")) {
        hits.push({ kind: "def", id,
          file: path.relative(ROOT, filePath), ln: i + 1, via: "jsx-id" });
      }
    }

    // WebPageSchema: path="..." or path={"..."} → "@id" = NAP.url + path
    const mPath = line.match(/\bpath\s*=\s*(?:"([^"]*)"|\.{"([^"]*)"\})/);
    if (mPath) {
      const pathVal = mPath[1] ?? mPath[2];
      if (pathVal === "" || pathVal.startsWith("/")) {
        const id = `https://chelseyfanning.com${pathVal}`;
        hits.push({ kind: "def", id,
          file: path.relative(ROOT, filePath), ln: i + 1, via: "jsx-path" });
      }
    }
  }

  return hits;
}

// ── @id sweep (existing checks) ───────────────────────────────────────────────
const defs = new Map();
const refs  = [];

for (const f of ALL_TS_FILES) {
  for (const hit of scanFile(f)) {
    if (hit.kind === "def") {
      if (!defs.has(hit.id)) defs.set(hit.id, []);
      defs.get(hit.id).push({ file: hit.file, ln: hit.ln, via: hit.via });
    } else {
      refs.push(hit);
    }
  }
  for (const hit of scanJsxProps(f)) {
    if (!defs.has(hit.id)) defs.set(hit.id, []);
    defs.get(hit.id).push({ file: hit.file, ln: hit.ln, via: hit.via });
  }
}

let pass = true;

console.log("\n══ DEFINITIONS ════════════════════════════════════════════");
for (const [id, locs] of [...defs.entries()].sort()) {
  const dup = locs.length > 1;
  if (dup) pass = false;
  console.log(`${dup ? "✗ DUP  " : "  OK   "} ${id}`);
  for (const { file, ln, via } of locs)
    console.log(`         ${file}:${ln}${via ? `  [${via}]` : ""}`);
}

console.log("\n══ REFERENCES → definition check ══════════════════════════");
const refMap = new Map();
for (const r of refs) {
  if (!refMap.has(r.id)) refMap.set(r.id, []);
  refMap.get(r.id).push(r);
}
for (const [id, locs] of [...refMap.entries()].sort()) {
  const hasDef   = defs.has(id);
  const external = !id.startsWith("https://chelseyfanning.com");
  if (!hasDef && !external) pass = false;
  const tag = !hasDef && !external
    ? "✗ DANGLING"
    : hasDef ? "  OK      " : "  EXTERNAL";
  console.log(`${tag} ${id}`);
  if (!hasDef && !external)
    for (const { file, ln } of locs)
      console.log(`            referenced at ${file}:${ln}`);
}

// ── Additional correctness checks ─────────────────────────────────────────────

// Check 1: www-leak — @id must use bare domain
{
  const violations = [];
  for (const f of ALL_TS_FILES) {
    const src = fs.readFileSync(f, "utf8");
    const lines = src.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (/"@id"/.test(lines[i]) && lines[i].includes("www.chelseyfanning.com")) {
        violations.push(`  ${path.relative(ROOT, f)}:${i + 1}`);
      }
    }
  }
  console.log("\n══ CHECK 1: www-leak in @id ════════════════════════════════");
  if (violations.length === 0) {
    console.log("  OK  — no @id contains www.chelseyfanning.com");
  } else {
    pass = false;
    console.log("✗ FAIL — @id must use bare domain, not www:");
    violations.forEach(v => console.log(v));
  }
}

// Check 2: no aggregateRating on #business
{
  const BUSINESS_ID = `${CONST_MAP["NAP.url"]}/#business`;
  const violations = [];
  for (const f of ALL_TS_FILES) {
    const src = fs.readFileSync(f, "utf8");
    const lines = src.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const mLit = lines[i].match(/"@id"\s*:\s*[`"]([^`"]+)[`"]/);
      if (!mLit) continue;
      if (resolveConsts(mLit[1]) !== BUSINESS_ID) continue;
      const objSrc = innermostObject(lines, i);
      if (/aggregateRating\s*:/.test(objSrc)) {
        violations.push(
          `  ${path.relative(ROOT, f)}:${i + 1} — aggregateRating on #business (Google 2019 policy)`
        );
      }
    }
  }
  console.log("\n══ CHECK 2: no aggregateRating on #business ════════════════");
  if (violations.length === 0) {
    console.log("  OK  — #business has no aggregateRating");
  } else {
    pass = false;
    console.log("✗ FAIL:");
    violations.forEach(v => console.log(v));
  }
}

// Check 3: #agent must be Person — no business type or business-only props
{
  const AGENT_SUFFIX   = "/#agent";
  const BIZ_TYPES      = new Set([
    "LocalBusiness", "RealEstateAgent", "Organization",
    "Corporation", "ProfessionalService", "FinancialService",
  ]);
  const BIZ_ONLY_PROPS = [
    "areaServed", "aggregateRating", "priceRange", "openingHours", "hasOfferCatalog",
  ];
  const violations = [];
  for (const f of ALL_TS_FILES) {
    const src = fs.readFileSync(f, "utf8");
    const lines = src.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const mLit = lines[i].match(/"@id"\s*:\s*[`"]([^`"]+)[`"]/);
      if (!mLit) continue;
      const id = resolveConsts(mLit[1]);
      if (!id.endsWith(AGENT_SUFFIX)) continue;

      const objSrc = innermostObject(lines, i);
      const rel    = path.relative(ROOT, f);

      // (a) @type must be "Person" only — flag any business subtype
      const tm = objSrc.match(/"@type"\s*:\s*(?:"([^"]+)"|\[([^\]]+)\])/);
      if (tm) {
        const types = tm[2]
          ? (tm[2].match(/"([^"]+)"/g) ?? []).map(s => s.replace(/"/g, ""))
          : [tm[1]];
        for (const t of types) {
          if (BIZ_TYPES.has(t))
            violations.push(`  ${rel}:${i + 1} — @type "${t}" is a business type; #agent must be "Person"`);
        }
      }

      // (b) No business-only props on #agent Person node
      for (const prop of BIZ_ONLY_PROPS) {
        if (new RegExp(`(?:"${prop}"|\\b${prop}\\b)\\s*:`).test(objSrc))
          violations.push(`  ${rel}:${i + 1} — business-only prop "${prop}" on #agent Person node`);
      }
    }
  }
  console.log("\n══ CHECK 3: #agent is Person (no biz type / biz-only props) ");
  if (violations.length === 0) {
    console.log('  OK  — #agent @type is "Person", no business-only props');
  } else {
    pass = false;
    console.log("✗ FAIL:");
    violations.forEach(v => console.log(v));
  }
}

// Check 4: mainEntityOfPage must be a plain URL string, not an object
{
  const MEP_RE = /(?:"mainEntityOfPage"|\bmainEntityOfPage\b)\s*:/;
  const violations = [];
  for (const f of ALL_TS_FILES) {
    const src = fs.readFileSync(f, "utf8");
    const lines = src.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (!MEP_RE.test(lines[i])) continue;
      // Violation if value starts with { on same line
      if (/(?:"mainEntityOfPage"|\bmainEntityOfPage\b)\s*:\s*\{/.test(lines[i])) {
        violations.push(`  ${path.relative(ROOT, f)}:${i + 1} — mainEntityOfPage is an object (must be plain URL string)`);
        continue;
      }
      // Or if next non-empty line opens an object
      for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
        if (lines[j].trim() === "") continue;
        if (/^\s*\{/.test(lines[j]))
          violations.push(`  ${path.relative(ROOT, f)}:${i + 1} — mainEntityOfPage is an object (must be plain URL string)`);
        break;
      }
    }
  }
  console.log("\n══ CHECK 4: mainEntityOfPage is plain URL string ═══════════");
  if (violations.length === 0) {
    console.log("  OK  — mainEntityOfPage is a plain string everywhere");
  } else {
    pass = false;
    console.log("✗ FAIL:");
    violations.forEach(v => console.log(v));
  }
}

// Check 5: FAQPage must carry isPartOf
{
  const violations = [];
  for (const f of ALL_TS_FILES) {
    const src = fs.readFileSync(f, "utf8");
    const lines = src.split("\n");

    // (a) Inline "@type": "FAQPage" objects must include isPartOf
    for (let i = 0; i < lines.length; i++) {
      if (!/"@type"\s*:\s*"FAQPage"/.test(lines[i])) continue;
      const col    = lines[i].indexOf('"@type"');
      const objSrc = innermostObject(lines, i, col < 0 ? 0 : col);
      if (!/"isPartOf"|isPartOf\s*:/.test(objSrc)) {
        violations.push(`  ${path.relative(ROOT, f)}:${i + 1} — FAQPage missing isPartOf`);
      }
    }

    // (b) <FAQSchema component calls must pass pageId prop
    // Skip files that define their own local FAQSchema (handles isPartOf internally)
    if (/(?:function|const)\s+FAQSchema\b/.test(src)) continue;
    for (let i = 0; i < lines.length; i++) {
      if (!/<FAQSchema\b/.test(lines[i])) continue;
      const block = lines.slice(i, Math.min(i + 6, lines.length)).join("\n");
      if (!/pageId\s*=/.test(block)) {
        violations.push(
          `  ${path.relative(ROOT, f)}:${i + 1} — <FAQSchema> missing pageId prop (isPartOf won't emit)`
        );
      }
    }
  }
  console.log("\n══ CHECK 5: FAQPage has isPartOf ═══════════════════════════");
  if (violations.length === 0) {
    console.log("  OK  — all FAQPage nodes have isPartOf");
  } else {
    pass = false;
    console.log("✗ FAIL:");
    violations.forEach(v => console.log(v));
  }
}

// Check 6: container nodes (WebPage / Blog / CollectionPage / Service / FAQPage) must have @id
{
  const CONTAINER = new Set(["WebPage", "Blog", "CollectionPage", "Service", "FAQPage"]);

  // "@id" must appear at the SAME indentation level as "@type" so nested refs
  // (e.g. provider: { "@id": ".../#business" }) don't satisfy the check.
  function hasTopLevelId(objSrc) {
    const lines = objSrc.split("\n");
    let typeIndent = -1;
    for (const line of lines) {
      if (/"@type"\s*:/.test(line)) {
        typeIndent = (line.match(/^(\s*)/) ?? ["", ""])[1].length;
        break;
      }
    }
    if (typeIndent < 0) return true; // @type not found — can't determine, pass
    for (const line of lines) {
      if (/"@id"\s*:/.test(line)) {
        const indent = (line.match(/^(\s*)/) ?? ["", ""])[1].length;
        if (indent === typeIndent) return true;
      }
    }
    return false;
  }

  const violations = [];
  for (const f of ALL_TS_FILES) {
    const src = fs.readFileSync(f, "utf8");
    const lines = src.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const tm = lines[i].match(/"@type"\s*:\s*(?:"([^"]+)"|\[([^\]]+)\])/);
      if (!tm) continue;
      const types = tm[2]
        ? (tm[2].match(/"([^"]+)"/g) ?? []).map(s => s.replace(/"/g, ""))
        : [tm[1]];
      if (!types.some(t => CONTAINER.has(t))) continue;

      const col    = lines[i].indexOf('"@type"');
      const objSrc = innermostObject(lines, i, col < 0 ? 0 : col);
      if (!hasTopLevelId(objSrc)) {
        violations.push(
          `  ${path.relative(ROOT, f)}:${i + 1} — ${types.join("/")} missing @id`
        );
      }
    }
  }
  console.log("\n══ CHECK 6: container nodes have @id ═══════════════════════");
  if (violations.length === 0) {
    console.log("  OK  — WebPage / Blog / CollectionPage / Service / FAQPage all have @id");
  } else {
    pass = false;
    console.log("✗ FAIL:");
    violations.forEach(v => console.log(v));
  }
}

// ── Final result ──────────────────────────────────────────────────────────────
console.log("\n══ RESULT ══════════════════════════════════════════════════");
if (pass) {
  console.log("PASS — all checks passed\n");
  process.exit(0);
} else {
  console.log("FAIL — see issues above\n");
  process.exit(1);
}
