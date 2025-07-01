import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          
          // Add staggered animation for grid items
          if (entry.target.classList.contains('service-card') || 
              entry.target.classList.contains('process-step') ||
              entry.target.classList.contains('expertise-category') ||
              entry.target.classList.contains('stat')) {
            const siblings = Array.from(entry.target.parentElement.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 100}ms`;
          }
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll(`
      .service-card,
      .process-step,
      .expertise-category,
      .stat,
      .badge-item,
      .section-title,
      .about-text,
      .process-intro
    `);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;