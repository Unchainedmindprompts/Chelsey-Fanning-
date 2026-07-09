<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:dev-only-components -->
# Dev-only placeholder components MUST gate on NODE_ENV

Any component that exists to surface a content gap (e.g. `InsiderSlot`, editorial TODOs, data-refresh reminders) **must return null in production**:

```tsx
if (process.env.NODE_ENV === "production") return null;
```

Next.js evaluates this at build time — the component is dead code in production bundles. Without the guard, placeholder UI ships to live visitors and undercuts page credibility. Apply this rule to every such component before it is committed, not as a follow-up fix.
<!-- END:dev-only-components -->
