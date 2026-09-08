import { Reveal } from './Reveal.jsx';

const categories = [
  ['🍜', 'Food & Cafes', 'cat-food'],
  ['🎶', 'Nightlife & Music', 'cat-night'],
  ['🎧', 'Concerts & Gigs', 'cat-music'],
  ['🏋️', 'Fitness & Sport', 'cat-fitness'],
  ['🛍️', 'Shopping & Style', 'cat-shopping'],
  ['🎨', 'Art & Culture', 'cat-art'],
];

export function Categories() {
  return (
    <section id="categories" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Explore your city</p>
            <h2 className="section-title mt-4 text-white">See what's around you.</h2>
          </div>
          <a href="#download" className="font-semibold text-[#b9a6ff]">Browse all categories →</a>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map(([icon, name, color], i) => (
            <Reveal key={name} delay={i * 60} className="h-full">
              <a href="#download" className={`category-card h-full ${color}`}>
                <span className="big">{icon}</span>
                <b>{name}</b>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
