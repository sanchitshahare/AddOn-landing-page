import { Reveal } from './Reveal.jsx';
import { ReelsScreen, EventsScreen, WalletScreen } from './Phones.jsx';

function PhoneFrame({ children, className = '', style }) {
  return (
    <div className={`phone-frame ${className}`} style={{ width: 230, height: 480, ...style }}>
      <div className="notch" />
      {children}
    </div>
  );
}

function StoreBadge({ top }) {
  return (
    <a href="#download" className="store-badge bg-black text-white border border-white/15 hover:border-white/35">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"/></svg>
      <span><small>{top ? 'Download on the' : 'Get it on'}</small><b>{top ? 'App Store' : 'Google Play'}</b></span>
    </a>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-mesh pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <Reveal className="relative z-10 pt-6 lg:pt-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-[#d9cfff] backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#2bd69b]" /> Your city, happening now
          </div>
          <h1 className="font-display max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-[-.055em] text-white sm:text-6xl lg:text-[4.4rem]">
            Watch ads.<br />
            Find events.<br />
            <span className="bg-gradient-to-r from-[#b9a6ff] via-[#ff7ac7] to-[#ffb020] bg-clip-text text-transparent">Earn rewards.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#b9b1de]">
            AdOn is the hyperlocal app where your neighbourhood goes reels-first. Scroll nearby ads, book local events, scan, pay, and build your daily streak.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <StoreBadge />
            <StoreBadge top />
          </div>
          <div className="mt-9 flex items-center gap-4 text-sm text-[#b9b1de]">
            <div className="flex -space-x-2">
              <span className="avatar-ring">J</span><span className="avatar-ring">M</span><span className="avatar-ring">S</span>
            </div>
            <span><b className="text-white">10k+</b> locals scrolling, booking &amp; earning daily</span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-showcase">
            <div className="hero-phone-side lg:absolute lg:-left-6 lg:top-2 phone-float-slow" style={{ transform: 'rotate(-8deg)' }}>
              <PhoneFrame><WalletScreen /></PhoneFrame>
            </div>
            <div className="hero-phone-center phone-float">
              <PhoneFrame style={{ width: 260, height: 520 }}><ReelsScreen /></PhoneFrame>
            </div>
            <div className="hero-phone-side lg:absolute lg:-right-6 lg:top-2 phone-float-slow" style={{ transform: 'rotate(8deg)' }}>
              <PhoneFrame><EventsScreen /></PhoneFrame>
            </div>

            <div className="float-chip absolute -left-2 top-40 lg:left-0">
              <span className="ico bg-gradient-to-br from-[#ffb020] to-[#ff7a5c]">🔥</span>
              <span className="text-xs font-extrabold text-white">Day 7 streak</span>
            </div>
            <div className="float-chip absolute -right-2 top-64 lg:right-0">
              <span className="ico bg-gradient-to-br from-[#7c5cff] to-[#2bd69b]">🎟️</span>
              <span className="text-xs font-extrabold text-white">Ticket booked!</span>
            </div>
            <div className="float-chip absolute bottom-6 left-4">
              <span className="ico bg-gradient-to-br from-[#2bd69b] to-[#7c5cff]">💸</span>
              <span className="text-xs font-extrabold text-white">+₹50 earned</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
