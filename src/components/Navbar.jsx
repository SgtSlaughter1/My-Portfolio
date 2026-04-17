import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { createMagneticEffect } from '../utils/gsap-animations';

const Navbar = () => {
  const navRef = useRef(null);
  const brandRef = useRef(null);
  const contactBtnRef = useRef(null);

  useEffect(() => {
    // Scroll background effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: '#111827e6', // Surface color with transparency
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
          duration: 0.3
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          borderBottom: '1px solid transparent',
          duration: 0.3
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Magnetic effects
    if (brandRef.current) createMagneticEffect(brandRef.current, 0.2);
    if (contactBtnRef.current) createMagneticEffect(contactBtnRef.current, 0.2);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="navbar navbar-expand-lg fixed-top py-3 transition-all"
      style={{ 
        background: 'rgba(11, 16, 32, 0.8)', 
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.12)'
      }}
    >
      <div className="container px-3 px-md-5">
        <a 
          ref={brandRef}
          className="navbar-brand fw-bold text-white mb-0" 
          href="#"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}
        >
          <span className="text-gradient">Abdulsalam</span>
        </a>
        
        <button
          className="navbar-toggler border-0 shadow-none p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-3 mt-3 mt-lg-0">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Projects', href: '#portfolio' },
              { label: 'Experience', href: '#experience' },
              { label: 'Skills', href: '#skills' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <li key={link.label} className="nav-item">
                <a 
                  className="nav-link text-white opacity-75 hover-opacity-100 transition-all text-center text-lg-start" 
                  href={link.href}
                  style={{ fontSize: 'clamp(14px, 1.2vw, 15px)', fontWeight: '500' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-3 mt-lg-0 text-center text-lg-end">
            <a
              ref={contactBtnRef}
              href="#contact"
              className="btn glass-pill px-4 py-2 text-white fw-bold d-inline-flex align-items-center"
              style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}
            >
              Let's Talk <i className="bi bi-chat-dots ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
