import { Reveal } from './Reveal.jsx';
import { ReelsScreen, WalletScreen, QRScreen, EventsScreen } from './Phones.jsx';

function Screen({ children, label, main }) {
  return (
    <div className={`screen ${main ? 'screen-main' : ''}`}>
      <div className="screen-body">{children}</div>
      <p className="cap">{label}</p>
    </div>
  );
}

export function Screenshots() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="orb orb-two" style={{ opacity: .3 }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">A peek inside</p>
          <h2 className="section-title mt-4 text-white">Your local life, one swipe at a time.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#b9b1de]">Scroll ad reels, book events, drain your wallet into good times, and scan your way in.</p>
        </Reveal>
        <Reveal className="mt-16 flex items-end justify-center gap-5 lg:gap-8">
          <Screen label="Scroll nearby ads"><ReelsScreen /></Screen>
          <Screen main label="Wallet & daily streak"><WalletScreen /></Screen>
          <Screen label="Scan to enter 👌"><QRScreen /></Screen>
        </Reveal>
      </div>
    </section>
  );
}
