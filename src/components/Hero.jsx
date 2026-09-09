import { Reveal } from './Reveal.jsx';
import { MobileCarousel } from './MobileCarousel.jsx';
import { HomeScreen, ReelsScreen, ProfileScreen } from './Phones.jsx';

function PhoneFrame({ children, className = '' }) { return <div className={`phone-frame ${className}`}><div className="phone-speaker" />{children}</div>; }
function StoreBadge({ android = false }) { return <a href="#download" className="store-badge"><span className="store-mark">{android ? '▶' : '●'}</span><span><small>{android ? 'GET IT ON' : 'Download on the'}</small><b>{android ? 'Google Play' : 'App Store'}</b></span></a>; }

export function Hero() {
  const slides = [<PhoneFrame key="profile"><ProfileScreen /></PhoneFrame>, <PhoneFrame key="home"><HomeScreen /></PhoneFrame>, <PhoneFrame key="reels"><ReelsScreen /></PhoneFrame>];
  return <section id="home" className="hero-mesh"><div className="hero-layout"><Reveal className="hero-copy"><div className="app-kicker"><i /> YOUR CITY. IN YOUR HAND.</div><h1>Discover what’s<br/><span>happening near you.</span></h1><p>Watch local ad reels, find events worth stepping out for, and get rewarded for every day you show up.</p><div className="hero-buttons"><a className="primary-button" href="#download">Get AddOn <span>↓</span></a><a className="text-link" href="#experience">Explore the app <span>→</span></a></div><div className="download-row"><StoreBadge android/><StoreBadge/></div></Reveal><Reveal delay={120} className="hero-phones"><div className="blue-halo"/><PhoneFrame className="hero-side profile-phone"><ProfileScreen /></PhoneFrame><PhoneFrame className="hero-main"><HomeScreen /></PhoneFrame><PhoneFrame className="hero-side home-phone"><ReelsScreen /></PhoneFrame><div className="floating-streak"><span>✦</span><div><b>Daily rewards</b><small>Keep your streak going</small></div></div><div className="floating-ticket"><span>✓</span><b>Ticket booked</b></div></Reveal><Reveal delay={120}><MobileCarousel className="hero-carousel" label="AddOn app previews" items={slides} /></Reveal></div></section>;
}
