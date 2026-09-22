"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
type CardPost = Pick<BlogPost,"slug"|"title"|"description"|"category"|"imageUrl"|"imageAlt"|"readingTime"|"date">;
export default function BlogGrid({posts}:{posts:CardPost[]}) {
 const [category,setCategory]=useState("All articles");
 const categories=["All articles",...new Set(posts.map(p=>p.category))];
 const visible=category==="All articles"?posts:posts.filter(p=>p.category===category);
 return <><div role="group" aria-label="Filter articles by topic" className="flex flex-wrap gap-2 mb-6">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} aria-pressed={category===c} className="rounded-full px-4 py-2 text-sm font-medium border transition-colors" style={{backgroundColor:category===c?"var(--color-primary-dark)":"#fff",color:category===c?"#fff":"var(--color-text)",borderColor:category===c?"var(--color-primary-dark)":"#d7d0c6"}}>{c}</button>)}</div>
 <p className="text-sm mb-7" aria-live="polite">{visible.length} {visible.length===1?"article":"articles"}{category!=="All articles"?` · ${category}`:" to help you plan your next move"}</p>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{visible.map(post=><article key={post.slug} className="group bg-white rounded-2xl overflow-hidden flex flex-col border border-black/10">
 <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true" className="relative block aspect-video overflow-hidden shrink-0">{post.imageUrl&&<Image src={post.imageUrl} alt={post.imageAlt??post.title} fill sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw" className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"/>}</Link>
 <div className="p-6 flex flex-col flex-1"><p className="eyebrow">{post.category}</p><h2 className="text-xl font-medium leading-snug mb-4"><Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link></h2><p className="text-sm leading-relaxed line-clamp-3 mb-5">{post.description}</p><div className="mt-auto pt-4 border-t border-black/10 flex justify-between gap-3 text-xs"><time dateTime={post.date}>{new Date(post.date+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}</time><span>{post.readingTime} min read</span></div></div>
 </article>)}</div></>;
}
