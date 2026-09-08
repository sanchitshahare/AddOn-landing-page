export function Header({ scrolled }) {
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-white/10 bg-[#0e0a1c]/80 backdrop-blur-lg' : 'border-transparent'}`}>
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#ff5c8a] text-lg text-white shadow-lg shadow-[#7c5cff]/30">A</span>
        AdOn
      </a>
      <div className="hidden items-center gap-8 text-sm font-medium text-[#cfc9ec] md:flex">
        <a href="#features" className="transition hover:text-white">Features</a>
        <a href="#how-it-works" className="transition hover:text-white">How it works</a>
        <a href="#categories" className="transition hover:text-white">Explore</a>
      </div>
      <a href="#download" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1a0b2e] transition hover:bg-[#dcd5ff]">Get the app</a>
    </nav>
  </header>;
}
