import { useEffect, useState } from 'react';

export function Reveal({ children, className = '', delay = 0 }) {
  const [node, setNode] = useState(null), [visible, setVisible] = useState(false);
  useEffect(() => { if (!node) return; const o = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); o.disconnect(); } }, { threshold: .12 }); o.observe(node); return () => o.disconnect(); }, [node]);
  return <div ref={setNode} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}