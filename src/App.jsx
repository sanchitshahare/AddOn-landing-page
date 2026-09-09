import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Features } from './components/Features.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { Categories } from './components/Categories.jsx';
import { Screenshots } from './components/Screenshots.jsx';
import { Cta } from './components/Cta.jsx';
import { Footer } from './components/Footer.jsx';
import { AboutPage, BusinessPage, EventsPage } from './components/Pages.jsx';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const getPage = () => ['events', 'business', 'about'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
  const [page, setPage] = useState(getPage);
  useEffect(() => { const f = () => setScrolled(scrollY > 10); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  useEffect(() => { const changePage = () => { setPage(getPage()); scrollTo(0, 0); }; addEventListener('hashchange', changePage); return () => removeEventListener('hashchange', changePage); }, []);
  const content = page === 'events' ? <EventsPage /> : page === 'business' ? <BusinessPage /> : page === 'about' ? <AboutPage /> : <><Hero /><Features /><Screenshots /><HowItWorks /><Categories /><Cta /></>;
  return <><Header scrolled={scrolled} page={page} /><main>{content}</main><Footer /></>;
}

export default App;
