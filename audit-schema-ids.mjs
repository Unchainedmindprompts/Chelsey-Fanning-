#!/usr/bin/env node
/**
 * audit-schema-ids.mjs — JSON-LD @id sweep for chelseyfanning.com
 *
 * DEFINITION = the INNERMOST object containing "@id" also has "@type" AND at
 *              least one additional meaningful property (beyond "@type"/"@id").
 * REFERENCE  = everything else: bare { "@id":"..." } stubs, publisher/author
 *              inline refs, or @id lines whose enclosing object has only @type+@id.
 *
 * False-positive guards:
 *   (a) Remaining ${...} after const-resolution → dynamic/per-instance → skip.
 *   (b) Innermost-object scan prevents outer-context bleed.
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

// ── Property keywords that signal a genuine entity definition ─────────────────
// Matches both quoted JSON keys ("name":) and unquoted TS object keys (name:)
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
// Given lines[] and the index of the @id line, walk outward to find the
// INNERMOST { } block that contains the @id property, then return its source.
function innermostObject(lines, idLineIdx) {
  // Find approximate column of "@id" on the id line
  const idCol = lines[idLineIdx].indexOf('"@id"');

  // Scan backward from idCol to find opening brace at depth 0
  let depth = 0;
  let openLine = -1;
  outer: for (let j = idLineIdx; j >= Math.max(0, idLineIdx - 40); j--) {
    const line = lines[j];
    const limit = j === idLineIdx ? Math.max(0, idCol - 1) : line.length - 1;
    for (let k = limit; k >= 0; k--) {
      if (line[k] === "}") depth++;
      else if (line[k] === "{") {
        if (depth === 0) { openLine = j; break outer; }
        depth--;
      }
    }
  }
  if (openLine < 0) return "";

  // Scan forward from openLine to find matching close brace
  let closeDepth = 0;
  const objLines = [];
  let closed = false;
  for (let j = openLine; j <= Math.min(lines.length - 1, idLineIdx + 40); j++) {
    const line = lines[j];
    const start = j === openLine ? lines[openLine].indexOf("{") : 0;
    for (let k = start; k < line.length; k++) {
      if (line[k] === "{") closeDepth++;
      else if (line[k] === "}") {
        closeDepth--;
        if (closeDepth === 0) { closed = true; break; }
      }
    }
    // Slice the opening line to start at { so the wrapping property key
    // (e.g. "itemReviewed:") isn't counted as a meaningful property inside the object.
    objLines.push(j === openLine ? line.slice(start) : line);
    if (closed) break;
  }
  return objLines.join("\n");
}

// ── Per-file scanner ──────────────────────────────────────────────────────────
function scanFile(filePath) {
  const src   = fs.readFileSync(filePath, "utf8");
  const lines = src.split("\n");
  const hits  = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/"@id"\s*:\s*[`"]([^`"]+)[`"]/);
    if (!m) continue;

    const rawId = m[1];
    const id    = resolveConsts(rawId);
    if (DYNAMIC_RE.test(id)) continue; // per-instance local node — skip

    // Extract innermost object containing this @id
    const objSrc = innermostObject(lines, i);

    const hasAtType    = /"@type"\s*:/.test(objSrc);
    const defPropCount = (objSrc.match(DEF_PROPS_RE) ?? []).length;

    // DEFINITION: innermost object has @type + at least 2 meaningful properties.
    // "@type" + "@id" + name-only = type-name stub (NAP-stub ref) — NOT a def.
    // This allows itemReviewed: { @type, @id, name } to pass as a ref, which is
    // required because Google's Review snippet validator mandates name on itemReviewed.
    const isDef = hasAtType && defPropCount >= 2;

    hits.push({
      kind: isDef ? "def" : "ref",
      id,
      file: path.relative(ROOT, filePath),
      ln: i + 1,
    });
  }

  return hits;
}

// ── Main ──────────────────────────────────────────────────────────────────────
const defs = new Map();
const refs  = [];

for (const dir of SCAN_DIRS) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) continue;
  for (const f of walkTs(full)) {
    for (const hit of scanFile(f)) {
      if (hit.kind === "def") {
        if (!defs.has(hit.id)) defs.set(hit.id, []);
        defs.get(hit.id).push({ file: hit.file, ln: hit.ln });
      } else {
        refs.push(hit);
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────
let pass = true;

console.log("\n══ DEFINITIONS ════════════════════════════════════════════");
for (const [id, locs] of [...defs.entries()].sort()) {
  const dup = locs.length > 1;
  if (dup) pass = false;
  console.log(`${dup ? "✗ DUP  " : "  OK   "} ${id}`);
  for (const { file, ln } of locs)
    console.log(`         ${file}:${ln}`);
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

console.log("\n══ RESULT ══════════════════════════════════════════════════");
if (pass) {
  console.log("PASS — 0 duplicate definitions, 0 dangling site-internal refs\n");
  process.exit(0);
} else {
  console.log("FAIL — see issues above\n");
  process.exit(1);
}
