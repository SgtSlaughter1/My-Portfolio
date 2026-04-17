import React, { useEffect, useRef } from "react";
import { revealOnScroll } from "../utils/gsap-animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  const sectionRef = useRef(null);
  const experienceRowRef = useRef(null);
  const educationColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Standard reveal animations
      revealOnScroll(".experience-item", {
        x: window.innerWidth < 768 ? 0 : -50,
        y: window.innerWidth < 768 ? 20 : 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".experience-items",
          start: "top 80%",
        },
      });

      // MatchMedia for Pinning (Deskton only)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        // Pin Education Column
        ScrollTrigger.create({
          trigger: experienceRowRef.current,
          start: "top 100px",
          end: "bottom bottom",
          pin: educationColRef.current,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            // Optional: add some opacity or parallax effect based on scroll
          },
        });
      });

      revealOnScroll(".education-item", {
        x: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".education-timeline",
          start: "top 85%",
        },
      });

      revealOnScroll(".hobby-card", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".hobbies-section",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="experience-education py-5"
      id="experience"
      ref={sectionRef}
    >
      <div className="container py-lg-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-label">/ Experience</span>
            <h2 className="display-4 fw-bold">Professional Experience</h2>
            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "min(750px, 90%)" }}
            >
              My journey building and contributing to web applications and
              structured digital systems.
            </p>
          </div>
        </div>

        <div
          className="row gx-4 gx-lg-5 gy-5 align-items-start"
          ref={experienceRowRef}
        >
          {/* Experience Column */}
          <div className="col-lg-6">
            <h3 className="h2 mb-4 text-white d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
              <i className="bi bi-briefcase text-primary-cta"></i> Work
              Experience
            </h3>
            <div className="experience-items">
              <div
                className="experience-item glass-card p-3 p-md-4 mb-4"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <div className="d-sm-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold mb-2 mb-sm-0 text-white">
                    Graduate Developer
                  </h4>
                  <span
                    className="badge glass-pill text-primary-cta py-2 px-3 fw-normal"
                    style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                  >
                    2026 - Present
                  </span>
                </div>
                <h5
                  className="h6 text-muted mb-3"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
                >
                  Edutams
                </h5>
                <ul className="list-unstyled ps-0 mb-0 opacity-75">
                  {[
                    "Work collaboratively with the tech team lead and other developers on software projects and initiatives.",
                    "Assist in designing and developing software components for the EduTAMS platform.",
                    "Write clean and maintainable code, following best coding practices and standards.",
                    "Conduct testing and debugging of software components to ensure functionality and reliability.",
                    "Participate in code reviews and incorporate feedback to improve coding skills.",
                    "Learn and implement software development methodologies and tools used in the organization.",
                    "Collaborate with cross-functional teams to understand project requirements and contribute to project success.",
                    "Stay updated with emerging technologies and industry trends to enhance knowledge and skills.",
                    "Support the team in troubleshooting technical issues and providing timely solutions.",
                    "Contribute to the documentation of software development processes and projects.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 d-flex align-items-start gap-2"
                      style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
                    >
                      <i className="bi bi-check2-circle text-primary-cta pt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="experience-item glass-card p-3 p-md-4 mb-4"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <div className="d-sm-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold mb-2 mb-sm-0 text-white">
                    Intern (Software Development)
                  </h4>
                  <span
                    className="badge glass-pill text-primary-cta py-2 px-3 fw-normal"
                    style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                  >
                    2024 - 2025
                  </span>
                </div>
                <h5
                  className="h6 text-muted mb-3"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
                >
                  Edutams
                </h5>
                <ul className="list-unstyled ps-0 mb-0 opacity-75">
                  {[
                    "Assisted in the development and maintenance of web applications using HTML, CSS, JavaScript, and Vue.js",
                    "Collaborated with senior developers to optimize website performance and enhance user experience",
                    "Fixed bugs, troubleshot technical issues, and contributed to UI/UX improvements",
                    "Worked on API integration and database connections for dynamic web content",
                    "Worked with Laravel on backend development for RESTful APIs and database management",
                    "Engaged in Agile development processes, including daily stand-ups and code reviews",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 d-flex align-items-start gap-2"
                      style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
                    >
                      <i className="bi bi-check2-circle text-primary-cta pt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="experience-item glass-card p-3 p-md-4 mb-4"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <div className="d-sm-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold mb-2 mb-sm-0 text-white">
                    Computer Engineer
                  </h4>
                  <span
                    className="badge glass-pill text-muted py-2 px-3 fw-normal"
                    style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                  >
                    2020 - 2024
                  </span>
                </div>
                <h5
                  className="h6 text-muted mb-3"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
                >
                  {" "}
                  Babakawo Computer Services{" "}
                </h5>
                <ul className="list-unstyled ps-0 mb-0 opacity-75">
                  {[
                    "Installed, repaired, and maintained computer hardware and software to ensure smooth operations",
                    "Monitored and analyzed updates to hardware and operating systems to ensure compatibility and efficiency",
                    "Managed and analyzed sales data of computer hardware and software to identify trends and inform purchasing decisions",
                    "Provided technical support and maintenance for clients, improving system uptime and reliability",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 d-flex align-items-start gap-2"
                      style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
                    >
                      <i className="bi bi-check2-circle text-primary-cta pt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="experience-item glass-card p-3 p-md-4 mb-4"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <div className="d-sm-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold mb-2 mb-sm-0 text-white">
                    Science Teacher and ICT CDS President
                  </h4>
                  <span
                    className="badge glass-pill text-muted py-2 px-3 fw-normal"
                    style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                  >
                    2022 - 2023
                  </span>
                </div>
                <h5
                  className="h6 text-muted mb-3"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
                >
                  {" "}
                  Fridaus Model School, Igbore{" "}
                </h5>
                <ul className="list-unstyled ps-0 mb-0 opacity-75">
                  {[
                    "Collected and analyzed student performance data to identify areas for improvement, resulting in a 70% improvement in overall performance",
                    "Developed data-driven strategies to enhance the learning environment and optimize educational outcomes",
                    "Led a team to educate students on the positive impact of ICT on education, using data to demonstrate improvements in academic performance",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 d-flex align-items-start gap-2"
                      style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
                    >
                      <i className="bi bi-check2-circle text-primary-cta pt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="experience-item glass-card p-3 p-md-4 mb-4"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <div className="d-sm-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold mb-2 mb-sm-0 text-white">
                    Computer Engineer Intern
                  </h4>
                  <span
                    className="badge glass-pill text-muted py-2 px-3 fw-normal"
                    style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                  >
                    2020
                  </span>
                </div>
                <h5
                  className="h6 text-muted mb-3"
                  style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
                >
                  {" "}
                  Central Tech Computer Services, Babcock University{" "}
                </h5>
                <ul className="list-unstyled ps-0 mb-0 opacity-75">
                  {[
                    "Assisted in the installation, maintenance, and repair of computer hardware and networking systems",
                    "Conducted system updates and security patches to ensure compliance with industry standards",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 d-flex align-items-start gap-2"
                      style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
                    >
                      <i className="bi bi-check2-circle text-primary-cta pt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Hobbies Column (Pinned) */}
          <div className="col-lg-6 mt-0 mt-lg-0" ref={educationColRef}>
            <div className="sticky-content-wrapper">
              <h3 className="h2 mb-4 text-white d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <i className="bi bi-mortarboard text-primary-cta"></i> Education
              </h3>
              <div className="education-timeline ps-4 border-start border-primary-cta border-2 ms-2 ms-lg-0">
                <div className="education-item position-relative mb-5">
                  <div
                    className="glass-card p-3 p-md-4"
                    style={{ backgroundColor: "var(--secondary-bg)" }}
                  >
                    <span
                      className="year glass-pill px-3 py-1 text-primary-cta mb-3 d-inline-block"
                      style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                    >
                      2018 - 2023
                    </span>
                    <h4 className="h5 fw-bold text-white mb-2">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
                    >
                      Olabisi Onabanjo University, Ago-Iwoye (OOU)
                    </p>
                  </div>
                </div>
              </div>

              {/* Hobbies Section */}
              <div className="hobbies-section mt-5 text-center text-lg-start">
                <h3 className="h3 mb-4 text-white">Outside of Code</h3>
                <div className="row g-3">
                  <div className="col-12">
                    <div
                      className="hobby-card glass-card p-3 d-flex align-items-center gap-3 transition-all hover-translate-x"
                      style={{ backgroundColor: "var(--secondary-bg)" }}
                    >
                      <i className="bi bi-puzzle h3 text-primary-cta mb-0"></i>
                      <div>
                        <h4 className="h6 fw-bold text-white mb-1">
                          Chess Playing
                        </h4>
                        <p
                          className="small text-muted mb-0"
                          style={{ fontSize: "clamp(12px, 1.2vw, 13px)" }}
                        >
                          Strategic thinking & problem-solving
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="hobby-card glass-card p-3 d-flex align-items-center gap-3 transition-all hover-translate-x"
                      style={{ backgroundColor: "var(--secondary-bg)" }}
                    >
                      <i className="bi bi-spellcheck h3 text-primary-cta mb-0"></i>
                      <div>
                        <h4 className="h6 fw-bold text-white mb-1">Scrabble</h4>
                        <p
                          className="small text-muted mb-0"
                          style={{ fontSize: "clamp(12px, 1.2vw, 13px)" }}
                        >
                          Word-based strategic gameplay
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="hobby-card glass-card p-3 d-flex align-items-center gap-3 transition-all hover-translate-x"
                      style={{ backgroundColor: "var(--secondary-bg)" }}
                    >
                      <i className="bi bi-pencil-square h3 text-primary-cta mb-0"></i>
                      <div>
                        <h4 className="h6 fw-bold text-white mb-1">
                          Crossword Puzzles
                        </h4>
                        <p
                          className="small text-muted mb-0"
                          style={{ fontSize: "clamp(12px, 1.2vw, 13px)" }}
                        >
                          Cognitive challenges & vocabulary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
