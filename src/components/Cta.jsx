import { Reveal } from './Reveal.jsx';

function StoreIcon({ google }) {
  return google ? <svg className="store-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="#34a853" d="M3 2.6v18.8L13.7 12z"/><path fill="#fbbc04" d="m13.7 12 3.4-3.4-10-5.8L3 2.6z"/><path fill="#ea4335" d="m13.7 12 3.4 3.4-10 5.8L3 21.4z"/><path fill="#4285f4" d="M17.1 8.6 21 10.8c1.3.8 1.3 1.6 0 2.4l-3.9 2.2L13.7 12z"/></svg> : <svg className="store-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.7 12.9c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.9-1 2.6-2 .8-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.4ZM14.6 6.6c.6-.8 1-1.8.9-2.9-.9 0-2.1.6-2.7 1.4-.5.6-1 1.7-.9 2.7 1 .1 2.1-.5 2.7-1.2Z"/></svg>;
}

function StoreBadge({ top }) {
  return (
    <a href="#home" className="store-badge bg-black/40 text-white border border-white/25 hover:border-white/50 backdrop-blur">
      <StoreIcon google={!top} />
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
