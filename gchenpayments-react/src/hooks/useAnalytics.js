import { useEffect } from 'react';

const useAnalytics = () => {
  useEffect(() => {
    // Track button clicks
    const handleButtonClick = (event) => {
      const button = event.target.closest('button, a, [role="button"]');
      if (button) {
        const buttonText = button.textContent?.trim() || 'Unknown';
        const buttonId = button.id || 'no-id';
        const buttonClass = button.className || 'no-class';
        const section = button.closest('section')?.id || 'unknown';
        
        // Send to Google Analytics
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'Button',
            event_label: buttonText,
            custom_map: {
              button_id: buttonId,
              button_class: buttonClass,
              section: section,
              page_url: window.location.href
            }
          });
        }
        
        console.log('Button clicked:', {
          text: buttonText,
          id: buttonId,
          class: buttonClass,
          section: section
        });
      }
    };

    // Track scroll depth and time spent
    let maxScrollDepth = 0;
    let sectionTimeTracking = {};
    let currentSection = null;
    let sectionStartTime = Date.now();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track max scroll depth
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Send scroll milestones
        if (maxScrollDepth % 25 === 0 && window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'Engagement',
            event_label: `${maxScrollDepth}%`,
            value: maxScrollDepth
          });
        }
      }

      // Track which section is in focus
      const sections = document.querySelectorAll('section, [data-section]');
      let activeSection = null;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        const visibilityPercentage = (visibleHeight / sectionHeight) * 100;
        
        if (visibilityPercentage > 50) {
          activeSection = section.id || section.dataset.section || 'unknown';
        }
      });

      // Track time spent in sections
      if (activeSection !== currentSection) {
        if (currentSection) {
          const timeSpent = Date.now() - sectionStartTime;
          sectionTimeTracking[currentSection] = (sectionTimeTracking[currentSection] || 0) + timeSpent;
          
          if (window.gtag && timeSpent > 1000) { // Only track if spent more than 1 second
            window.gtag('event', 'timing_complete', {
              event_category: 'Section Engagement',
              event_label: currentSection,
              value: Math.round(timeSpent / 1000)
            });
          }
        }
        
        currentSection = activeSection;
        sectionStartTime = Date.now();
      }
    };

    // Track mouse movement and idle time
    let mouseIdleTimer;
    let isIdle = false;
    
    const handleMouseMove = () => {
      if (isIdle) {
        isIdle = false;
        if (window.gtag) {
          window.gtag('event', 'user_engagement', {
            event_category: 'User Activity',
            event_label: 'resumed'
          });
        }
      }
      
      clearTimeout(mouseIdleTimer);
      mouseIdleTimer = setTimeout(() => {
        isIdle = true;
        if (window.gtag) {
          window.gtag('event', 'user_engagement', {
            event_category: 'User Activity',
            event_label: 'idle'
          });
        }
      }, 30000); // 30 seconds idle time
    };

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          event_category: 'Page Visibility',
          event_label: document.hidden ? 'hidden' : 'visible'
        });
      }
    };

    // Track window focus/blur
    const handleWindowFocus = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          event_category: 'Window Focus',
          event_label: 'focused'
        });
      }
    };

    const handleWindowBlur = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          event_category: 'Window Focus',
          event_label: 'blurred'
        });
      }
    };

    // Add event listeners
    document.addEventListener('click', handleButtonClick);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('blur', handleWindowBlur);

    // Initial scroll tracking
    handleScroll();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleButtonClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('blur', handleWindowBlur);
      clearTimeout(mouseIdleTimer);
    };
  }, []);
};

export default useAnalytics;