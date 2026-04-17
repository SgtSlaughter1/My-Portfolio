import React, { useEffect, useRef } from 'react';
import { revealOnScroll } from '../utils/gsap-animations';
import gsap from 'gsap';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll('.skills-group', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Vue', src: '/assets/cdnlogo.com_vue-js.svg' },
        { name: 'React', src: '/assets/react.png' },
        { name: 'Next Js', src: '/assets/nextjs.png' },
        { name: 'JavaScript', src: '/assets/javascript.png' },
        { name: 'Tailwind CSS', src: '/assets/tailwind-css.png' },
        { name: 'HTML', src: '/assets/html5.png' },
        { name: 'CSS', src: '/assets/css3.png' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', src: '/assets/laravel.png' },
        { name: 'PHP', src: '/assets/PHP-logo.svg.png' },
        { name: 'REST APIs', src: '/assets/node-js.png' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', src: '/assets/pngimg.com - mysql_PNG9.png' },
        { name: 'Postgres', src: '/assets/postgres.png' } // Placeholder path, I'll assume assets exist or use generic
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', src: '/assets/git.png' },
        { name: 'GitHub', src: '/assets/github.png' },
        { name: 'Postman', src: '/assets/node-js.png' }, // Placeholder icons
        { name: 'Vercel', src: '/assets/react.png' } // Placeholder
      ]
    }
  ];

  return (
    <section className="skills py-5" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-label">/ Skills</span>
            <h2 className="display-4 fw-bold">Tech Stack</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: 'min(750px, 90%)' }}>
              My journey building and contributing to web applications and structured digital systems.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {skillGroups.map((group, gIndex) => (
            <div key={gIndex} className="col-md-6 col-lg-3 skills-group">
              <div className="glass-card h-100 p-4" style={{ backgroundColor: 'var(--secondary-bg)', borderRadius: '16px' }}>
                <h3 className="h5 fw-bold mb-4 text-primary-cta font-mono" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {group.title}
                </h3>
                <div className="d-flex flex-wrap gap-3">
                  {group.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="d-flex align-items-center gap-2 group p-2 rounded-3 transition-all hover-translate-y" style={{ background: 'rgba(255,255,255,0.03)', width: '100%' }}>
                      <img
                        src={skill.src}
                        alt={skill.name}
                        style={{ width: 'clamp(20px, 2vw, 24px)', height: 'clamp(20px, 2vw, 24px)', objectFit: 'contain' }}
                      />
                      <span className="text-secondary" style={{ fontSize: 'clamp(13px, 1.2vw, 14px)', fontWeight: '500' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
