import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolCard } from "@/components/ToolCard";
import { tools, categories } from "@/lib/tools";
export const metadata: Metadata = { title: "All Online Tools", description: "Browse free text, developer, security, PDF, image and calculator tools." };
export default function ToolsPage() {
  return <><SiteHeader/><main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-12"><p className="text-sm font-semibold uppercase tracking-widest text-brand">Tool directory</p><h1 className="mt-2 text-4xl font-bold tracking-tight">All tools</h1><p className="mt-3 max-w-2xl text-slate-600">Browse the current collection. Tools marked “Coming soon” are listed for discovery but are not yet functional.</p>
    <nav aria-label="Jump to category" className="my-7 flex flex-wrap gap-2">{categories.map(c=><a key={c.name} href={`#category-${encodeURIComponent(c.name)}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm hover:border-brand">{c.name}</a>)}</nav>
    <div className="space-y-12">{categories.map(category=>{const group=tools.filter(tool=>tool.category===category.name);return <section key={category.name} id={`category-${encodeURIComponent(category.name)}`} className="scroll-mt-8"><div className="mb-4 flex items-end justify-between gap-3"><div><h2 className="text-2xl font-bold">{category.name}</h2><p className="mt-1 text-sm text-slate-500">{category.description}</p></div><span className="text-sm text-slate-500">{group.length} {group.length===1?"tool":"tools"}</span></div>{group.length?<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{group.map(tool=><ToolCard key={tool.slug} tool={tool}/>)}</div>:<p className="rounded-xl border border-dashed p-5 text-sm text-slate-500">More tools in this category are planned.</p>}</section>})}</div>
    <p className="mt-12 text-sm text-slate-500">Looking for a specific tool? <Link href="/" className="text-brand underline">Return to the homepage</Link>.</p>
  </main><SiteFooter/></>;
}