import { Reveal } from './Reveal.jsx';

const data = [
  {
    tag: 'For you',
    emoji: '✨',
    title: 'Find your next favourite thing.',
    body: 'From tonight’s best gig to your new go-to cafe — your city’s good stuff is just one scroll away.',
    steps: ['Swipe through nearby ad reels', 'Discover events just around you', 'Book, scan, pay and earn'],
    extra: 'consumer',
    cta: 'Explore your city',
  },
  {
    tag: 'For businesses',
    emoji: '📣',
    title: 'Get seen by the right local crowd.',
    body: 'Create image or video ads, promote your event and reach people ready to act — right nearby.',
    steps: ['Create an ad or event in minutes', 'Reach a hyperlocal, relevant audience', 'Sell tickets and track your growth'],
    extra: 'business',
    cta: 'Start promoting',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Made for everyone local</p>
          <h2 className="section-title mt-4 max-w-2xl text-white">One app, two great sides of your neighbourhood.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {data.map((item, i) => (
            <Reveal key={item.tag} delay={i * 90}>
              <article className={`dual-card ${item.extra}`}>
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${item.extra === 'consumer' ? 'bg-[#7c5cff]/30 text-[#cfc3ff]' : 'bg-[#2bd69b]/25 text-[#9ff0cf]'}`}>{item.tag}</span>
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ol className="step-list">
                  {item.steps.map((s, j) => (
                    <li key={s} className="step-item">
                      <span className={`n ${item.extra === 'consumer' ? 'bg-gradient-to-br from-[#7c5cff] to-[#ff5c8a]' : 'bg-gradient-to-br from-[#2bd69b] to-[#7c5cff]'}`}>0{j + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
                <a href="#download" className={`inline-flex rounded-full px-5 py-2.5 text-sm font-bold text-white ${item.extra === 'consumer' ? 'bg-gradient-to-r from-[#7c5cff] to-[#ff5c8a]' : 'bg-gradient-to-r from-[#2bd69b] to-[#0ea5e9]'}`}>{item.cta} <span className="ml-1">→</span></a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
