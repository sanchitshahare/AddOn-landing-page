import { Reveal } from './Reveal.jsx';

function StoreBadge({ top }) {
  return (
    <a href="#home" className="store-badge bg-black/40 text-white border border-white/25 hover:border-white/50 backdrop-blur">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"/></svg>
      <span><small>{top ? 'Download on the' : 'Get it on'}</small><b>{top ? 'App Store' : 'Google Play'}</b></span>
    </a>
  );
}

export function Cta() {
  return (
    <section id="download" className="px-5 pb-24 lg:px-8">
      <Reveal>
        <div className="cta-wrap cta-grad relative mx-auto max-w-7xl px-7 py-16 text-center text-white sm:px-12 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-white/80">Make your local move</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-[-.045em] sm:text-6xl">Your city’s waiting. Start scrolling reels &amp; earning rewards.</h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/85">Join thousands of locals discovering, booking and earning — all in your neighbourhood.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <StoreBadge />
            <StoreBadge top />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
