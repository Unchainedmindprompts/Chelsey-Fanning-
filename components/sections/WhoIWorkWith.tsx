import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
const paths = [
  { title: "Your first home", label: "FIRST-TIME BUYERS", body: "Big questions. A new chapter. Get clear guidance from your first conversation to the moment you get the keys.", href: "/buyers", action: "Explore the buying process", icon: "M3 10 12 3l9 7v11H3Z M9 21v-8h6v8" },
  { title: "Your next chapter", label: "BUYING & SELLING", body: "More space, a different pace, or a fresh start. Make sense of the timing when one move depends on another.", href: "/blog/buying-selling-same-time-north-idaho", action: "Plan your next move", icon: "M3 7h16m-5-5 5 5-5 5 M21 17H5m5-5-5 5 5 5" },
  { title: "Your home, ready to sell", label: "HOME SELLERS", body: "From setting the price to navigating offers, understand the steps that put your home’s best foot forward.", href: "/sellers", action: "Explore the selling process", icon: "M5 21V3h14v11H5 M9 7h6 M9 10h4" },
];
export default function WhoIWorkWith() {
 return <SectionWrapper background="base" id="who-i-work-with">
  <div className="max-w-2xl mb-10"><p className="eyebrow">A move that feels right</p><h2 className="text-h2 mb-4">Where are you headed next?</h2><p>Start with what matters to you. We’ll work through the next steps together.</p></div>
  <div className="grid md:grid-cols-3 gap-5">{paths.map(p=><Link key={p.href} href={p.href} className="intent-card group">
   <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={p.icon}/></svg>
   <p className="eyebrow mt-7">{p.label}</p><h3 className="text-2xl font-medium mb-4">{p.title}</h3><p className="text-sm leading-relaxed flex-1">{p.body}</p><span className="mt-7 text-sm font-semibold">{p.action} <span aria-hidden="true">↗</span></span>
  </Link>)}</div>
 </SectionWrapper>;
}
