import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than half the page height
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (window.scrollY > scrollHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.to('.floating-back-to-top', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
        pointerEvents: 'all'
      });
    } else {
      gsap.to('.floating-back-to-top', {
        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.in',
        pointerEvents: 'none'
      });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="floating-back-to-top"
      onClick={scrollToTop}
      aria-label="Back to Top"
      style={{ opacity: 0, transform: 'translateY(20px) scale(0.8)', pointerEvents: 'none' }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
};

export default ScrollToTop;
