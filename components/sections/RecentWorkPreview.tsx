import Link from "next/link";
import { RECENT_WORK } from "@/content/professional-profile";
export default function RecentWorkPreview() {
 return <section className="section-padding" style={{backgroundColor:"var(--color-surface)"}}><div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"><div><p className="eyebrow">Local experience</p><h2 className="text-h2">A few recent moves.</h2></div><Link className="text-sm font-semibold underline underline-offset-4" href="/experience">Explore Chelsey’s recent work ↗</Link></div>
 <div className="grid md:grid-cols-3 gap-5">{RECENT_WORK.slice(0,3).map(w=><article key={w.id} className="work-card"><div className="flex justify-between gap-3 items-center mb-9"><span className="closed-badge">Closed</span><span className="text-xs">{w.city}</span></div><p className="eyebrow">{w.role}</p><h3 className="text-2xl font-medium mb-5">{w.address}</h3><p className="text-sm border-t border-black/10 pt-5">Closed <time dateTime={w.closed}>{w.dateLabel}</time></p></article>)}</div>
 <p className="text-xs mt-5" style={{color:"var(--color-text)"}}>Selected transactions. Roles, dates, and public sources are available on the Recent Work page.</p>
 </div></section>;
}
