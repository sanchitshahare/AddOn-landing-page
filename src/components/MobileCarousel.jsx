import { useState } from 'react';

export function MobileCarousel({ items, label, className = '' }) {
  const [active, setActive] = useState(0);
  const goTo = (index) => setActive((index + items.length) % items.length);
  return <section className={`mobile-carousel ${className}`} aria-label={label}>
    <div className="mobile-carousel-viewport"><div className="mobile-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
      {items.map((item, index) => <div className="mobile-carousel-slide" key={index}>{item}</div>)}
    </div></div>
    <div className="mobile-carousel-controls"><button type="button" aria-label="Previous preview" onClick={() => goTo(active - 1)}>←</button><div className="mobile-carousel-dots" aria-label="Choose a preview">{items.map((_, index) => <button type="button" key={index} aria-label={`Show preview ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={active === index ? 'active' : ''} onClick={() => goTo(index)} />)}</div><button type="button" aria-label="Next preview" onClick={() => goTo(active + 1)}>→</button></div>
  </section>;
}
