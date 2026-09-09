import { Reveal } from './Reveal.jsx';

const events = [
  ['Tonight', 'Open Mic & Coffee', 'The Terrace · 7:30 PM', '🎙️'],
  ['Saturday', 'Nagpur Night Market', 'Civil Lines · 5:00 PM', '✨'],
  ['Sunday', 'Sunrise Run Club', 'Futala Lake · 6:00 AM', '🏃'],
  ['Next week', 'Creators Connect', 'AddOn Studio · 4:00 PM', '🎨'],
];

function PageHero({ eyebrow, title, copy, action, aside }) {
  return <section className="page-hero"><div className="page-shell page-hero-grid"><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p><a className="page-button" href={action.href}>{action.label} <span>→</span></a></Reveal><Reveal delay={90} className="page-hero-aside">{aside}</Reveal></div></section>;
}

export function EventsPage() {
  return <><PageHero eyebrow="DISCOVER LOCAL" title={<>Plans worth<br/><em>leaving home for.</em></>} copy="Find events, offers and people around your city. Save a spot, buy your ticket and get the details in one place." action={{ href: '#home', label: 'Get the app' }} aside={<div className="event-hero-card"><span className="event-sticker">THIS WEEKEND</span><b>Find your next<br/>favourite plan.</b><small>Personalised for Nagpur</small><div className="event-bubbles"><i>🎵</i><i>🍜</i><i>🎟️</i></div></div>} /><section className="page-section"><div className="page-shell"><div className="page-heading"><div><p className="eyebrow">WHAT'S ON</p><h2>Make your next plan local.</h2></div><a href="#home">Open AddOn →</a></div><div className="event-grid">{events.map(([date, name, details, emoji]) => <article className="event-card" key={name}><div className="event-art">{emoji}<span>{date}</span></div><h3>{name}</h3><p>{details}</p><a href="#home">View event <span>→</span></a></article>)}</div></div></section></>;
}

export function BusinessPage() {
  const points = ['Create attention-grabbing ad reels', 'Publish and sell tickets in minutes', 'Reach people close to your business', 'Track performance in one dashboard'];
  return <><PageHero eyebrow="FOR BUSINESSES" title={<>Be seen by the<br/><em>right local crowd.</em></>} copy="Create campaigns, promote an event and turn local attention into real customers—without the usual complexity." action={{ href: '#contact', label: 'Talk to our team' }} aside={<div className="business-preview"><div><small>Campaign reach</small><b>24,860</b><span>↗ 18.4% this month</span></div><div className="business-chart"><i/><i/><i/><i/><i/><i/><i/></div><p>People discovered your business nearby</p></div>} /><section className="page-section soft-section"><div className="page-shell business-grid"><Reveal><p className="eyebrow">ONE SIMPLE PLATFORM</p><h2>Everything you need to grow locally.</h2><p className="page-copy">From your first ad to a sold-out event, AddOn keeps your local marketing and ticketing in one clear workflow.</p><ul className="business-list">{points.map((point, index) => <li key={point}><b>0{index + 1}</b>{point}</li>)}</ul></Reveal><Reveal delay={90} className="business-steps"><article><span>01</span><h3>Create</h3><p>Build an ad or event with your own visuals and details.</p></article><article><span>02</span><h3>Reach</h3><p>Show up in the feeds of people nearby who care.</p></article><article><span>03</span><h3>Grow</h3><p>Measure interest, bookings and the results that matter.</p></article></Reveal></div></section></>;
}

export function AboutPage() {
  return <><PageHero eyebrow="ABOUT ADDON" title={<>Your city has more.<br/><em>We help you find it.</em></>} copy="AddOn brings neighbourhood discovery, local businesses and memorable experiences together in one useful everyday app." action={{ href: '#events', label: 'Explore events' }} aside={<div className="about-mark"><div>+</div><b>Local is<br/>everything.</b><span>Built for the moments around you.</span></div>} /><section className="page-section"><div className="page-shell"><div className="page-heading"><div><p className="eyebrow">OUR BELIEF</p><h2>Good things happen closer to home.</h2></div></div><div className="value-grid"><article><b>01</b><h3>Stay curious</h3><p>There is always a new corner, maker or event worth finding.</p></article><article><b>02</b><h3>Keep it local</h3><p>We make it easier for great neighbourhood businesses to be seen.</p></article><article><b>03</b><h3>Show up together</h3><p>Shared plans make cities feel more connected and alive.</p></article></div></div></section></>;
}
