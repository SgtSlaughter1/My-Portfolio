import React, { useEffect, useRef } from "react";
import { revealOnScroll } from "../utils/gsap-animations";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".about-content", { y: 30 });
      revealOnScroll(".strength-card", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const strengths = [
    "Backend architecture",
    "Frontend integration",
    "Database driven systems",
  ];

  return (
    <section className="about py-5" id="about" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-label">/ About</span>
            <h2 className="display-4 fw-bold">About Me</h2>
          </div>
        </div>

        <div className="row align-items-center gy-5">
          <div className="col-lg-6 about-content">
            <p className="text-secondary body-large mb-4">
              I am a{" "}
              <span className="text-white fw-semibold">
                full stack developer
              </span>{" "}
              focused on building digital products that combine clean backend
              architecture, reliable data handling, and solid user experience.
            </p>
            <p className="text-muted mb-5">
              I enjoy working on systems where structure, logic, and usability
              must work together. My approach is centered around maintainability
              and scalability, ensuring that every project I touch is built to
              last and provides real value to users.
            </p>

            <div className="row g-3">
              {strengths.map((strength, index) => (
                <div key={index} className="col-12 strength-card">
                  <div
                    className="d-flex align-items-center gap-3 p-3 glass-card border-0"
                    style={{
                      background: "rgba(56, 189, 248, 0.05)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      className="rounded-circle bg-primary-cta p-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "var(--primary-cta)",
                      }}
                    >
                      <i
                        className="bi bi-check2 text-dark"
                        style={{ fontSize: "18px" }}
                      ></i>
                    </div>
                    <span className="text-white fw-medium">{strength}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div
              className="glass-card p-4 p-md-5 position-relative overflow-hidden"
              style={{
                backgroundColor: "var(--secondary-bg)",
                borderRadius: "16px",
              }}
            >
              <p
                className="h4 text-white mb-4 position-relative"
                style={{ lineHeight: 1.5, fontWeight: 500 }}
              >
                "I don't just write code; I design systems that solve problems
                and scale with growth."
              </p>
              <div className="d-flex align-items-center gap-3">
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "var(--primary-cta)",
                  }}
                ></div>
                <span className="font-mono text-primary-cta" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
                  Focus on Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
