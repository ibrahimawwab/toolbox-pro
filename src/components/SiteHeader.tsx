import Link from "next/link";
export function SiteHeader() {
  return <header className="border-b border-slate-200 bg-white/90">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
      <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-ink" aria-label="ToolBox Pro home">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-lg text-white">T</span>
        <span>ToolBox <span className="text-brand">Pro</span></span>
      </Link>
      <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm font-medium text-slate-600">
        <Link href="/tools">All tools</Link><Link href="/about">About</Link>
        <a href="https://github.com/ibrahimawwab/toolbox-pro" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </div>
  </header>;
}