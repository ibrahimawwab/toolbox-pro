import Link from "next/link";
import type { Tool } from "@/lib/tools";
export function ToolCard({ tool }: { tool: Tool }) {
  return <Link href={tool.status === "available" ? `/tools/${tool.slug}` : `/tools/${tool.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-soft focus-visible:outline-brand">
    <div className="mb-5 flex items-center justify-between">
      <span className="grid h-11 min-w-11 place-items-center rounded-xl bg-indigo-50 px-2 font-bold text-brand">{tool.icon}</span>
      {tool.status === "coming-soon" && <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">Coming soon</span>}
    </div>
    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{tool.category}</p>
    <h3 className="font-semibold text-ink group-hover:text-brand">{tool.name}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-500">{tool.description}</p>
  </Link>;
}