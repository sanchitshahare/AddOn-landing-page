export function Footer() {
  return <footer className="border-t border-[#dcebf4] py-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-[#738398] sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <a href="#home" className="flex items-center gap-2 text-lg font-bold text-[#12263a]">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#0879c7] to-[#17a7eb] text-sm text-white">A</span>
        AddOn
      </a>
      <p>© 2026 AddOn. Discover local, together.</p>
      <div className="flex gap-5">
        <a href="#home" className="transition hover:text-[#0879c7]">Instagram</a>
        <a href="#home" className="transition hover:text-[#0879c7]">LinkedIn</a>
        <a href="#home" className="transition hover:text-[#0879c7]">Privacy</a>
      </div>
    </div>
  </footer>;
}
