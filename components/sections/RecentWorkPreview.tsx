import Image from "next/image";
import Link from "next/link";
import { RECENT_WORK } from "@/content/professional-profile";
const PROPERTY_PHOTOS: Record<string, {src:string; alt:string}> = {
 pinegrove: {src:"/images/properties/pinegrove.jpg",alt:"Front exterior of 5999 N Pinegrove Drive, with gray siding, a two-car garage, lawn, and tall pine trees."},
 gavin: {src:"/images/properties/gavin.jpg",alt:"Front exterior of 6643 N Gavin Loop, with blue siding, a covered porch, and an attached garage."},
 "kidd-island": {src:"/images/properties/kidd-island.webp",alt:"Living room at 5774 W Kidd Island Road, with vaulted ceilings, a stone fireplace, wood flooring, and tall windows facing trees."},
};
export default function RecentWorkPreview() {
 return <section className="section-padding" style={{backgroundColor:"var(--color-surface)"}}><div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"><div><p className="eyebrow">Local experience</p><h2 className="text-h2">A few recent moves.</h2></div><Link className="text-sm font-semibold underline underline-offset-4" href="/experience">Explore Chelsey’s recent work ↗</Link></div>
 <div className="grid md:grid-cols-3 gap-5">{RECENT_WORK.slice(0,3).map(w=><article key={w.id} className="work-card !p-0 overflow-hidden"><div className="relative aspect-[4/3]" style={{backgroundColor:"#edf0f2"}}><Image src={PROPERTY_PHOTOS[w.id].src} alt={PROPERTY_PHOTOS[w.id].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" /></div><div className="p-6"><div className="flex justify-between gap-3 items-center mb-6"><span className="closed-badge">Closed</span><span className="text-xs">{w.city}</span></div><p className="eyebrow">{w.role}</p><h3 className="text-2xl font-medium mb-5">{w.address}</h3><p className="text-sm border-t border-black/10 pt-5">Closed <time dateTime={w.closed}>{w.dateLabel}</time></p></div></article>)}</div>
 <p className="text-xs mt-5" style={{color:"var(--color-text)"}}>Selected transactions. Roles, dates, and public sources are available on the Recent Work page.</p>
 </div></section>;
}
