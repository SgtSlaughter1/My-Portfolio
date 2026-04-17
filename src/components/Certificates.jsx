import React, { useEffect, useRef } from 'react';
import { revealOnScroll } from '../utils/gsap-animations';
import gsap from 'gsap';

const Certificates = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll('.certificate-item-wrapper', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certificates = [
    {
      img: '/assets/certificates/DFA.png',
      title: 'Certificate of Completion - DFA Challenge',
      desc: 'Successful completion of the Youth Intermediate Software Development Program.'
    },
    {
      img: '/assets/certificates/DFA2.png',
      title: 'Certificate of Completion - DFA Challenge',
      desc: 'Successful completion of the Youth Intermediate Data Analysis Program.'
    },
    {
      img: '/assets/certificates/Techntransit.png',
      title: 'Certificate of Completion - TechnTransit',
      desc: 'Successful completion of the 12-week Data Analysis Course.'
    },
    {
      img: '/assets/certificates/Devtown Developers Group on campus.png',
      title: 'Google Developer Student Clubs on Campus',
      desc: 'Recognition of active participation and completion for the bootcamp on building Flipkart.'
    },
    {
      img: '/assets/certificates/Devtown cert of part.png',
      title: 'Certificate of Participation - Devtown',
      desc: '5-Days Bootcamp with Devtown on building Flipkart to land your dream job.'
    },
    {
      img: '/assets/certificates/Developer student club.png',
      title: 'Microsoft Student Chapter - MSIT',
      desc: 'Recognition of participation and completion of the Flipkart bootcamp.'
    },
    {
      img: '/assets/certificates/Freecodecamp.png',
      title: 'Responsive Web Design - FreeCodeCamp',
      desc: 'For the completion of Responsive Web Design.'
    },
    {
      img: '/assets/certificates/FreecodeCamp (2).png',
      title: 'JS Algorithms & Data Structures - FreeCodeCamp',
      desc: 'For the completion of JavaScript Algorithms and Data Structures.'
    },
    {
      img: '/assets/certificates/FreeCodeCampLegacy.png',
      title: 'Legacy JS Algorithms & Data Structures - FreeCodeCamp',
      desc: 'For the completion of Legacy JavaScript Algorithms and Data Structures.'
    },
    {
      img: '/assets/certificates/AWS community cert.png',
      title: 'AWS Community Builders - Amazon Clone',
      desc: '7-Days Bootcamp with Devtown on Amazon clone using HTML, CSS and JavaScript.'
    },
    {
      img: '/assets/certificates/Developer student club.png',
      title: 'Developer Student Clubs - Amazon Clone',
      desc: '7-Days Bootcamp with Devtown on Amazon clone using HTML, CSS and JavaScript.'
    },
    {
      img: '/assets/certificates/Devtown cert of comp.png',
      title: 'Certificate of Completion - Devtown',
      desc: '7-Days Bootcamp with Devtown on Amazon clone using HTML, CSS and JavaScript.'
    },
    {
      img: '/assets/certificates/AWS comm for python.png',
      title: 'AWS Community Builders - Python & AI',
      desc: '7-Days Bootcamp with Devtown on Python and Artificial Intelligence.'
    },
    {
      img: '/assets/certificates/Developer cert for python.png',
      title: 'Developer Student Clubs - Python & AI',
      desc: '7-Days Bootcamp with Devtown on Python and Artificial Intelligence.'
    },
    {
      img: '/assets/certificates/Devtown cert for python.png',
      title: 'Certificate of Completion - Devtown',
      desc: '7-Days Bootcamp with Devtown on Python and Artificial Intelligence.'
    },
    {
      img: '/assets/certificates/Betail cert.png',
      title: 'BETAILS Engineering',
      desc: 'Attendance from BETAILS Engineering Technologies and Innovations Ltd for Online Seminar on Cloud Computing.'
    },
    {
      img: '/assets/certificates/GoogleAnalytics.png',
      title: 'Google Analytics Certification',
      desc: 'For the completion of Google Analytics.'
    },
    {
      img: '/assets/certificates/GreatLearning.png',
      title: 'UI/UX for Beginners - Great Learning',
      desc: 'Completion of an online course for beginners on UI/UX.'
    },
    {
      img: '/assets/certificates/Devtown MSIT.png',
      title: 'Microsoft Student Chapter - MSIT',
      desc: 'Recognition of excellence and completion of the professional training program.'
    }
  ];

  return (
    <section
      className="certificates py-5 min-vh-100 d-flex align-items-center"
      id="certificates"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-label">/ Certifications</span>
            <h2 className="display-4 fw-bold">Selected Certifications</h2>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '750px' }}>
              A focused selection of certifications relevant to my work and continuous growth as a developer.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {certificates.slice(0, 6).map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4 certificate-item-wrapper">
              <div className="certificate-item glass-card overflow-hidden position-relative group transition-all hover-translate-y">
                <img
                  loading="lazy"
                  src={cert.img}
                  alt={cert.title}
                  className="w-100 h-100 object-fit-cover transition-all duration-500 group-hover-scale-110"
                  style={{ height: '260px' }}
                />
                <div className="certificate-overlay position-absolute bottom-0 start-0 w-100 p-4 translate-y-full transition-transform duration-300 group-hover-translate-y-0" style={{ background: 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.8) 70%, transparent 100%)' }}>
                  <h5 className="h6 fw-bold text-white mb-2">{cert.title}</h5>
                  <p className="small text-muted mb-0" style={{ fontSize: '0.75rem' }}>{cert.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
