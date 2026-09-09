import { Reveal } from './Reveal.jsx';
import { MobileCarousel } from './MobileCarousel.jsx';
import { HomeScreen, ReelsScreen, ProfileScreen } from './Phones.jsx';

function Screen({ children, label, main }) { return <div className={`screen ${main ? 'screen-main' : ''}`}><div className="screen-body">{children}</div><p className="cap">{label}</p></div>; }

export function Screenshots() {
  const slides = [<Screen key="profile" label="Manage your local presence"><ProfileScreen/></Screen>, <Screen key="home" main label="Explore rewards and events"><HomeScreen/></Screen>, <Screen key="reels" label="Watch local ads"><ReelsScreen/></Screen>];
  return <section id="experience" className="experience-section"><div className="section-wrap"><Reveal className="section-intro centered"><p className="eyebrow">THE ADDON EXPERIENCE</p><h2 className="section-title">Everything local,<br/>made effortless.</h2><p>One familiar place to see what’s on, watch offers, and make plans.</p></Reveal><Reveal className="screen-gallery"><Screen label="Manage your local presence"><ProfileScreen/></Screen><Screen main label="Explore rewards and events"><HomeScreen/></Screen><Screen label="Watch local ads"><ReelsScreen/></Screen></Reveal><Reveal><MobileCarousel className="experience-carousel" label="AddOn experience previews" items={slides} /></Reveal></div></section>;
}
