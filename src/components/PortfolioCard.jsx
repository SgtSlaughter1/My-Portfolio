import React, { useState } from 'react';

const PortfolioCard = ({ imageSrc, title, description, moreText, techStack, liveDemoLink, sourceCodeLink }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="col-11 col-sm-6 col-lg-4 portfolio-item animate__animated animate__fadeInUp"
      data-aos="fade-up"
    >
      <div className="card border-0 shadow-sm h-100">
        <img
          loading="lazy"
          src={imageSrc}
          className="card-img-top"
          alt={title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted card-text-min-height">
            {description}
            {moreText && (
                <>
                    <span className={showMore ? "" : "d-none"}>
                    {moreText}
                    </span>
                    {" "}
                    <a href="#" className="small" onClick={(e) => { e.preventDefault(); setShowMore(!showMore); }}>
                    {showMore ? "Read Less" : "Read More"}
                    </a>
                </>
            )}
          </p>
          <p className="card-text text-muted">
            <strong>Technologies Used:</strong> {techStack}
          </p>
          <div className="d-flex gap-2">
            <a
              href={liveDemoLink}
              className="btn c-btn"
              target="_blank"
              rel="noreferrer"
            >Live Demo</a>
            {sourceCodeLink ? (
               <a
               href={sourceCodeLink}
               className="btn btn-outline-secondary"
               target="_blank"
               rel="noreferrer"
               >Source Code</a>
            ) : (
                <span className="text-muted align-center small"
                >Source code is private</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
