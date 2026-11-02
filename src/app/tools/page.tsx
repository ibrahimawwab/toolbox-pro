import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolCard } from "@/components/ToolCard";
import { tools, categories } from "@/lib/tools";
export const metadata: Metadata = { title: "All Online Tools", description: "Browse free text, developer, security, PDF, image and calculator tools." };
export default async function ToolsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const selected = params.category;
  const shown = selected ? tools.filter(t => t.category === selected) : tools;
  return <><SiteHeader/><main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-12"><p className="text-sm font-semibold uppercase tracking-widest text-brand">Tool directory</p><h1 className="mt-2 text-4xl font-bold tracking-tight">All tools</h1><p className="mt-3 max-w-2xl text-slate-600">Browse the current collection. Tools marked “Coming soon” are listed for discovery but are not yet functional.</p>
    <nav aria-label="Filter by category" className="my-7 flex flex-wrap gap-2"><a href="/tools" className={`rounded-full border px-4 py-2 text-sm ${!selected?"border-brand bg-brand text-white":"border-slate-200 bg-white"}`}>All</a>{categories.map(c=><a key={c.name} href={`/tools?category=${encodeURIComponent(c.name)}`} className={`rounded-full border px-4 py-2 text-sm ${selected===c.name?"border-brand bg-brand text-white":"border-slate-200 bg-white"}`}>{c.name}</a>)}</nav>
    {shown.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{shown.map(tool=><ToolCard key={tool.slug} tool={tool}/>)}</div>:<p>No tools in this category yet.</p>}
  </main><SiteFooter/></>;
}