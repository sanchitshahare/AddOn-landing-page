import { Reveal } from './Reveal.jsx';

const features = [
  ['▶️', 'linear-gradient(145deg,#ff2d78,#ff7a5c)', 'Ads Reels', 'Scroll your city as short, swipeable video ads. Discover what is on offer one reel at a time.'],
  ['🎟️', 'linear-gradient(145deg,#7c5cff,#8b23f0)', 'Event Booking', 'Find concerts, meetups and shows nearby and lock in your ticket in seconds.'],
  ['📍', 'linear-gradient(145deg,#2bd69b,#0aa86f)', 'Local Discovery', 'Explore businesses, offers and happenings that are actually close to you.'],
  ['👛', 'linear-gradient(145deg,#ffb020,#ff7a5c)', 'Wallet', 'Keep your balance, add money and pay for tickets and services from one simple wallet.'],
  ['🔳', 'linear-gradient(145deg,#8b23f0,#0ea5e9)', 'QR Access', 'Scan to enter events, redeem offers and validate tickets — no paper, no queues.'],
  ['🔔', 'linear-gradient(145deg,#ff5c8a,#f43f5e)', 'Notifications', 'Get pinged about flash offers and new local events the moment they drop.'],
  ['🔥', 'linear-gradient(145deg,#ffb020,#ff2d78)', 'Daily Rewards', 'Check in every day, grow your streak and earn rewards for being a regular.'],
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Everything local, one app</p>
          <h2 className="section-title mt-4">Your neighbourhood, now in reels.</h2>
          <p className="mt-5 text-lg leading-8 text-[#b9b1de]">From scrolling nearby ads to booking shows and earning streaks — AdOn turns everyday local moments into something fun.</p>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([icon, grad, title, body], i) => (
            <Reveal key={title} delay={i * 45} className="h-full">
              <article className="feature-card h-full" style={{ '--glow': grad }}>
                <span className="icon-badge" style={{ background: grad }}>{icon}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
