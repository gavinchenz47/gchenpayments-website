import React, { useEffect } from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Expertise from './components/Expertise';
import TrustBadges from './components/TrustBadges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimations from './components/ScrollAnimations';

function App() {
  useScrollAnimations();
  
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add scroll effect to header
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Expertise />
      <TrustBadges />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;