import React, { useEffect, useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import { revealOnScroll } from "../utils/gsap-animations";
import { projectsData } from "../data/projectsData";
import gsap from "gsap";

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".portfolio-card-wrapper", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="portfolio py-5 min-vh-100 d-flex align-items-center"
      id="portfolio"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-label">/ Projects</span>
            <h2 className="display-4 fw-bold">Featured Work</h2>
            <p
              className="text-secondary lead mx-auto"
              style={{ maxWidth: "750px" }}
            >
              A selection of projects focused on full stack systems, product
              thinking, backend structure, and user experience.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 portfolio-card-wrapper"
            >
              <PortfolioCard
                id={project.id}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                moreText={project.moreText}
                techStack={project.techStack}
                liveDemoLink={project.liveDemoLink}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/SgtSlaughter1"
            target="_blank"
            rel="noreferrer"
            className="btn glass-pill px-5 py-3 text-white fw-bold transition-all hover-translate-y"
          >
            View More on GitHub <i className="bi bi-github ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
