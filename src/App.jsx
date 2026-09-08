import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Features } from './components/Features.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { Categories } from './components/Categories.jsx';
import { Screenshots } from './components/Screenshots.jsx';
import { Cta } from './components/Cta.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 10); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return <><Header scrolled={scrolled} /><main><Hero /><Features /><Screenshots /><HowItWorks /><Categories /><Cta /></main><Footer /></>;
}

export default App;
