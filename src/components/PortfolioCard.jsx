import React, { useState } from "react";

const PortfolioCard = ({
  imageSrc,
  title,
  description,
  moreText,
  techStack,
  liveDemoLink,
  sourceCodeLink,
}) => {
  const [showMore, setShowMore] = useState(false);
  const techs = techStack ? techStack.split(",").map(t => t.trim()) : [];

  return (
    <div className="portfolio-card glass-card h-100 d-flex flex-column p-0 overflow-hidden border-0 shadow-lg" style={{ backgroundColor: 'var(--secondary-bg)', borderRadius: '16px' }}>
      {/* Project Image */}
      <div className="portfolio-image-wrapper overflow-hidden position-relative group" style={{ height: '220px' }}>
        <img
          src={imageSrc}
          alt={title}
          className="w-100 h-100 object-fit-cover transition-all duration-500 group-hover-scale-110"
          loading="lazy"
        />
        <div 
          className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-opacity duration-300" 
          style={{ background: 'rgba(11, 16, 32, 0.8)', backdropFilter: 'blur(4px)' }}
        >
          <div className="d-flex gap-2">
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noreferrer"
              className="btn glass-pill px-4 py-2 text-white fw-bold d-flex align-items-center gap-2"
              style={{ fontSize: '14px', backgroundColor: 'var(--primary-cta)', border: 'none', color: '#0B1020' }}
            >
              Live Preview <i className="bi bi-arrow-up-right"></i>
            </a>
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noreferrer"
                className="btn glass-pill px-3 py-2 text-white"
                style={{ fontSize: '14px', border: '1px solid var(--border)' }}
              >
                <i className="bi bi-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="portfolio-content p-4 d-flex flex-column flex-grow-1">
        <h3 className="h4 fw-bold mb-3 text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
        
        <p className="text-secondary mb-4 flex-grow-1" style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', lineHeight: '1.6' }}>
          {description}
        </p>

        {/* Tech Stack */}
        <div className="tech-stack mb-4 d-flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span 
              key={index} 
              className="badge font-mono" 
              style={{ 
                background: 'rgba(56, 189, 248, 0.08)', 
                color: '#7DD3FC', 
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '999px',
                padding: '4px 12px',
                fontSize: 'clamp(11px, 1.2vw, 12px)',
                fontWeight: '400'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-4 border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between">
          <button
            type="button"
            className="btn p-0 text-primary-cta fw-semibold d-flex align-items-center gap-2 transition-all hover-translate-x"
            onClick={(e) => {
              e.preventDefault();
              setShowMore(!showMore);
            }}
            style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: 'var(--primary-cta)', border: 'none', background: 'none' }}
          >
            {showMore ? 'Show Less' : 'View Details'} 
            <i className={`bi bi-chevron-${showMore ? 'up' : 'right'}`}></i>
          </button>

          <div className="d-flex gap-3">
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover-text-white transition-all"
                title="Source Code"
                style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}
              >
                <i className="bi bi-github"></i>
              </a>
            )}
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noreferrer"
              className="text-primary-cta fw-bold d-flex align-items-center gap-1 text-decoration-none hover-underline"
              style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: 'var(--primary-cta)' }}
            >
              Live Link <i className="bi bi-arrow-up-right" style={{ fontSize: 'clamp(11px, 1.2vw, 12px)' }}></i>
            </a>
          </div>
        </div>

        {showMore && (
          <div className="mt-3 py-3 border-top border-secondary border-opacity-10 animate-fade-in">
            <p className="text-secondary small mb-0" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', lineHeight: '1.6' }}>
              {moreText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
