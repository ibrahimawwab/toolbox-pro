import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools } from "@/lib/tools";
import { ToolWorkbench } from "@/components/ToolWorkbench";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
export function generateStaticParams() { return tools.map(tool => ({ slug: tool.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const tool = tools.find(item => item.slug === slug);
  return tool ? { title: tool.name, description: tool.description } : {};
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const tool = tools.find(item => item.slug === slug);
  if (!tool) notFound();
  return <><SiteHeader/><main className="mx-auto min-h-[60vh] max-w-5xl px-5 py-12"><a href="/tools" className="text-sm font-semibold text-brand">← All tools</a><div className="mt-6"><p className="text-sm font-semibold uppercase tracking-widest text-brand">{tool.category}</p><h1 className="mt-2 text-4xl font-bold tracking-tight">{tool.name}</h1><p className="mt-3 max-w-2xl text-slate-600">{tool.description}</p></div><div className="mt-8"><ToolWorkbench slug={tool.slug} available={tool.status === "available"}/></div></main><SiteFooter/></>;
}