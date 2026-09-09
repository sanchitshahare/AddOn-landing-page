import { Reveal } from './Reveal.jsx';

const screenshots = [
  '/screenshots/home.jpg',
  '/screenshots/reels.jpg',
  '/screenshots/profile.jpg',
];

function Screen({ image, label, main }) {
  return (
    <div className={`screen ${main ? 'screen-main' : ''}`}>
      <div className="screen-body">
        <img
          src={image}
          alt={label}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
      <p className="cap">{label}</p>
    </div>
  );
}

export function Screenshots() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-wrap">

        <Reveal className="section-intro centered">
          <p className="eyebrow">THE ADON EXPERIENCE</p>
          <h2 className="section-title">
            Everything local,<br />
            made effortless.
          </h2>
          <p>
            One familiar place to see what’s on, watch offers,
            and make plans.
          </p>
        </Reveal>

        <Reveal className="screen-gallery">
          <Screen
            image={screenshots[0]}
            label="Home Experience"
          />

          <Screen
            image={screenshots[1]}
            label="Ads Reels"
            main
          />

          <Screen
            image={screenshots[2]}
            label="Profile & Rewards"
          />
        </Reveal>

      </div>
    </section>
  );
}