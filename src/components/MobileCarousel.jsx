import { useRef, useState } from 'react';

export function MobileCarousel({ items, label, className = '' }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const goTo = (index) => setActive((index + items.length) % items.length);
  const finishSwipe = (endX) => {
    if (touchStart.current === null) return;
    const distance = endX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 35) return;
    goTo(active + (distance < 0 ? 1 : -1));
  };
  return <section className={`mobile-carousel ${className}`} aria-label={label}>
    <div className="mobile-carousel-viewport" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}><div className="mobile-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
      {items.map((item, index) => <div className="mobile-carousel-slide" key={index}>{item}</div>)}
    </div></div>
    <div className="mobile-carousel-controls"><div className="mobile-carousel-dots" aria-label="Choose a preview">{items.map((_, index) => <button type="button" key={index} aria-label={`Show preview ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={active === index ? 'active' : ''} onClick={() => goTo(index)} />)}</div></div>
  </section>;
}
