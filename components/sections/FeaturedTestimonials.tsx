import Link from "next/link";
import { TESTIMONIALS } from "@/content/testimonials";
import { PROFILE_LINKS } from "@/content/professional-profile";
export default function FeaturedTestimonials() {
 const client = TESTIMONIALS.find(t=>t.id==="haley-mindt")!;
 const quote = "She truly advocated for us and made sure we felt confident in every decision.";
 return <section className="review-spotlight section-padding" id="testimonials-preview">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
   <div><p className="eyebrow">In their own words</p><h2 className="text-h2 mb-6">What it’s like to work with Chelsey.</h2><p className="mb-7">The questions, the big decisions, the keys in hand. Here’s how one first-time buyer describes the experience.</p><Link href="/testimonials" className="inline-flex border border-white/50 rounded-full px-6 py-3 font-semibold hover:bg-white/10">Read more client stories ↗</Link></div>
   <figure className="border-t border-white/30 pt-7 lg:pt-0 lg:border-t-0"><div className="text-xl tracking-widest mb-6" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="text-2xl sm:text-3xl lg:text-4xl leading-snug font-light">“{client.fullText.includes(quote) ? quote : client.fullText}”</blockquote><figcaption className="mt-8"><span className="font-semibold">{client.name}</span><span className="block text-sm mt-1">First-time buyer · March 2026</span><a className="inline-block mt-4 text-sm underline underline-offset-4" href={PROFILE_LINKS.google}>Google review excerpt · view profile</a></figcaption></figure>
  </div>
 </section>;
}
