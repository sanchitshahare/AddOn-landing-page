import logo from '../assets/addon-logo.svg';

export function Header({ scrolled }) {
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-[#dcebf4] bg-white/90 backdrop-blur-lg shadow-sm' : 'border-transparent'}`}>
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#12263a]">
        <img src={logo} alt="AddOn" className="h-9 w-9 rounded-xl shadow-lg shadow-[#168ed2]/30" />
        AddOn
      </a>
      <div className="hidden items-center gap-8 text-sm font-medium text-[#526a7e] md:flex">
        <a href="#features" className="transition hover:text-[#0879c7]">Features</a>
        <a href="#how-it-works" className="transition hover:text-[#0879c7]">How it works</a>
        <a href="#categories" className="transition hover:text-[#0879c7]">Explore</a>
      </div>
      <a href="#download" className="rounded-full bg-[#138fda] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0879c7]">Get the app</a>
    </nav>
  </header>;
}
