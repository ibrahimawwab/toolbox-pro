import Link from "next/link";
import { Search, ShieldCheck, Zap, Globe2, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolCard } from "@/components/ToolCard";
import { categories, tools } from "@/lib/tools";
export default function HomePage() {
  const featured = tools.filter(t => t.status === "available");
  return <><SiteHeader/><main>
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl"/>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_.8fr] md:items-center md:py-24">
        <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Useful tools, without the fuss</div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">Small tasks.<br/><span className="text-brand">Solved simply.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Free online utilities for text, coding, security and everyday calculations. Clear interfaces, quick results and privacy-conscious design.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/tools" className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-sm hover:bg-indigo-700">Explore all tools <ArrowRight size={18}/></Link><Link href="#categories" className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">Browse categories</Link></div>
          <div className="mt-7 flex flex-wrap gap-4 text-sm text-slate-500"><span className="flex items-center gap-2"><ShieldCheck size={17}/> Privacy-conscious</span><span className="flex items-center gap-2"><Zap size={17}/> Straightforward</span><span className="flex items-center gap-2"><Globe2 size={17}/> Built for everyone</span></div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft sm:p-7">
          <div className="mb-5 flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand shadow-sm"><Search size={20}/></div><div><h2 className="font-semibold">Your everyday toolkit</h2><p className="text-sm text-slate-500">Start with a popular utility</p></div></div>
          <div className="grid grid-cols-2 gap-3">{featured.slice(0,4).map(tool=><Link key={tool.slug} href={`/tools/${tool.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-300"><span className="mb-3 block text-lg font-bold text-brand">{tool.icon}</span><span className="font-semibold">{tool.name}</span><span className="mt-1 block text-xs text-slate-500">{tool.category}</span></Link>)}</div>
        </div>
      </div>
    </section>
    <section id="categories" className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-brand">Explore by need</p><h2 className="mt-2 text-3xl font-bold tracking-tight">One place for useful tools</h2></div><Link href="/tools" className="hidden items-center gap-2 font-semibold text-brand sm:flex">All tools <ArrowRight size={16}/></Link></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map(c=><Link key={c.name} href={`/tools?category=${encodeURIComponent(c.name)}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-soft"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 font-bold text-brand">{c.icon}</span><h3 className="mt-4 font-semibold">{c.name}</h3><p className="mt-1 text-sm text-slate-500">{c.description}</p></Link>)}</div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-8"><div className="mb-7"><p className="text-sm font-semibold uppercase tracking-widest text-brand">Get started</p><h2 className="mt-2 text-3xl font-bold tracking-tight">Available tools</h2><p className="mt-2 text-slate-500">The first set of tools is ready to use. More categories are being built.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featured.map(tool=><ToolCard key={tool.slug} tool={tool}/>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-12"><div className="rounded-3xl bg-ink px-6 py-9 text-white sm:px-10"><h2 className="text-2xl font-bold">Practical by design. Honest by default.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">ToolBox Pro is being developed around useful functionality, transparent limitations and browser-side processing wherever practical. We do not publish invented usage numbers or fake reviews.</p></div></section>
  </main><SiteFooter/></>;
}