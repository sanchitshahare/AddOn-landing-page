export function Footer() {
  return <footer className="border-t border-white/10 py-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-[#9f97c4] sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <a href="#home" className="flex items-center gap-2 text-lg font-bold text-white">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#7c5cff] to-[#ff5c8a] text-sm text-white">A</span>
        AdOn
      </a>
      <p>© 2026 AdOn. Discover local, together.</p>
      <div className="flex gap-5">
        <a href="#home" className="transition hover:text-white">Instagram</a>
        <a href="#home" className="transition hover:text-white">LinkedIn</a>
        <a href="#home" className="transition hover:text-white">Privacy</a>
      </div>
    </div>
  </footer>;
}
