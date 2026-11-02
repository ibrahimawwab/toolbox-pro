export function SiteFooter() {
  return <footer className="mt-20 border-t border-slate-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} ToolBox Pro. Built for useful everyday work.</p>
      <p>Founded by <a className="font-medium text-slate-700 underline underline-offset-4" href="https://github.com/ibrahimawwab">Ibrahim Awwab</a>.</p>
      <nav aria-label="Legal" className="flex gap-4"><a href="/privacy">Privacy</a><a href="/about">About</a></nav>
    </div>
  </footer>;
}