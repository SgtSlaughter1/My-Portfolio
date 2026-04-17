import React, { useEffect, useRef } from "react";
import { createMagneticEffect, floatAnimation } from "../utils/gsap-animations";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const descriptionRef = useRef(null);
  const btnContainerRef = useRef(null);
  const imageRef = useRef(null);
  const magneticBtnRef = useRef(null);
  const badgeContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Initial reveal of background decoration
      tl.from(
        ".hero-glow",
        {
          opacity: 0,
          scale: 0.8,
          duration: 2,
          ease: "power2.out",
        },
        0,
      );

      // 2. Staggered reveal of text blocks
      tl.from(
        ".reveal-text",
        {
          y: "110%",
          duration: 1.2,
          stagger: 0.08,
        },
        0.5,
      )

        // 3. Reveal Lead Description
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.8"
        )

        // 4. Staggered reveal of buttons
        .from(
          btnContainerRef.current.children,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.6",
        )

        // 5. Staggered reveal of quick badges
        .from(
          badgeContainerRef.current.children,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.05,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )

        // 6. Terminal UI Card entrance
        .from(
          imageRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          0.8
        )
        .from(
          ".hero-svg-illustration",
          {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );

      // Floating animation for terminal card
      floatAnimation(imageRef.current);

      // Elliptical Orbit Animation for SVG
      gsap.to(".hero-svg-illustration", {
        duration: 20,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: [
            { x: -300, y: -50 },
            { x: 0, y: 150 },
            { x: 300, y: -50 },
            { x: 0, y: -250 },
            { x: -300, y: -50 }
          ],
          curviness: 1.5,
          autoRotate: true
        }
      });

      // Secondary floating/rotation
      gsap.to(".hero-svg-illustration svg", {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none"
      });

      // Magnetic effect for button
      if (magneticBtnRef.current) {
        createMagneticEffect(magneticBtnRef.current, 0.3);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="home min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      id="home"
      ref={sectionRef}
    >
      {/* Hero background decoration */}
      <div
        className="hero-glow position-absolute top-0 end-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(56,189,248,0.12), transparent 40%)",
          zIndex: -1,
        }}
      ></div>

      <div className="container">
        <div className="row justify-content-between align-items-center gy-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="overflow-hidden mb-2">
              <span
                className="section-label d-inline-block reveal-text"
                ref={introRef}
              >
                / Introduction
              </span>
            </div>

            <div className="overflow-hidden mb-3">
              <h1
                className="display-1 fw-bold mb-0 reveal-text"
                ref={titleRef}
                style={{ lineHeight: 1.1 }}
              >
                Building <span className="text-gradient">scalable</span>{" "}
                <br className="d-none d-md-block" /> web applications
              </h1>
            </div>

            <p
              className="text-secondary mb-5 mx-auto mx-lg-0"
              style={{
                maxWidth: "600px",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: "1.7",
              }}
              ref={descriptionRef}
            >
              Full Stack Developer crafting structured, high-performance digital
              solutions with a focus on clean architecture and seamless user
              experiences.
            </p>

            <div
              className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start mb-5"
              ref={btnContainerRef}
            >
              <a
                href="#portfolio"
                className="btn glass-pill px-5 py-3 fw-bold text-dark border-0 transition-all hover-translate-y"
                ref={magneticBtnRef}
                style={{
                  backgroundColor: "var(--primary-cta)",
                  color: "#0B1020",
                  borderRadius: "12px",
                  minWidth: "180px",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn glass-pill px-5 py-3 fw-bold text-white transition-all bg-transparent"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  minWidth: "180px",
                }}
              >
                Contact Me
              </a>
            </div>

            {/* Quick Badges */}
            <div
              className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start"
              ref={badgeContainerRef}
            >
              {[
                "Laravel",
                "Vue",
                "React",
                "Next Js",
                "Postgres",
                "REST APIs",
              ].map((badge) => (
                <span
                  key={badge}
                  className="badge glass-pill font-mono bg-opacity-10 border-opacity-20"
                  style={{
                    fontSize: "clamp(11px, 1vw, 13px)",
                    padding: "8px 16px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div
              className="mx-auto position-relative"
              style={{ maxWidth: "450px" }}
              ref={imageRef}
            >
              {/* Animated SVG Decoration */}
              <div
                className="hero-svg-illustration position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  zIndex: 10,
                  opacity: 0.6,
                  width: "120px",
                  height: "120px",
                  pointerEvents: "none",
                }}
              >
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="var(--primary-cta)"
                    strokeWidth="0.5"
                    strokeDasharray="5 5"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    stroke="var(--accent-soft)"
                    strokeWidth="1"
                  />
                  <path
                    d="M100 20V180M20 100H180"
                    stroke="var(--primary-cta)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  <rect
                    x="80"
                    y="80"
                    width="40"
                    height="40"
                    rx="4"
                    stroke="var(--primary-cta)"
                    strokeWidth="1"
                    className="rotating-rect"
                  />
                  <circle cx="100" cy="20" r="4" fill="var(--primary-cta)" />
                  <circle cx="180" cy="100" r="4" fill="var(--accent-soft)" />
                  <circle cx="100" cy="180" r="4" fill="var(--primary-cta)" />
                  <circle cx="20" cy="100" r="4" fill="var(--accent-soft)" />
                </svg>
              </div>

              <div
                className="glass-card p-0 overflow-hidden border-0 shadow-2xl"
                style={{
                  backgroundColor: "#111827",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="d-flex align-items-center gap-2 px-4 py-3 border-bottom"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div
                    className="rounded-circle"
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#EF4444",
                    }}
                  ></div>
                  <div
                    className="rounded-circle"
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#F59E0B",
                    }}
                  ></div>
                  <div
                    className="rounded-circle"
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#22C55E",
                    }}
                  ></div>
                  <span
                    className="ms-auto small opacity-50 font-mono"
                    style={{ fontSize: "12px" }}
                  >
                    developer.json
                  </span>
                </div>
                <div
                  className="p-4 text-start font-mono"
                  style={{ fontSize: "14px", lineHeight: "1.8" }}
                >
                  <div className="mb-2">
                    <span style={{ color: "#38BDF8" }}>const</span>{" "}
                    <span style={{ color: "#F8FAFC" }}>developer</span> = {"{"}
                  </div>
                  <div className="ms-4 mb-1">
                    <span style={{ color: "#94A3B8" }}>name:</span>{" "}
                    <span style={{ color: "#7DD3FC" }}>
                      'Habeeb Abdulsalam'
                    </span>
                    ,
                  </div>
                  <div className="ms-4 mb-1">
                    <span style={{ color: "#94A3B8" }}>role:</span>{" "}
                    <span style={{ color: "#7DD3FC" }}>
                      'Full Stack Developer'
                    </span>
                    ,
                  </div>
                  <div className="ms-4 mb-1">
                    <span style={{ color: "#94A3B8" }}>focus:</span>{" "}
                    <span style={{ color: "#7DD3FC" }}>
                      'Scalable Web Apps'
                    </span>
                    ,
                  </div>
                  <div className="ms-4 mb-1">
                    <span style={{ color: "#94A3B8" }}>status:</span>{" "}
                    <span style={{ color: "#22C55E" }}>
                      'Available for Hire'
                    </span>
                  </div>
                  <div className="ms-4 mb-1">
                    <span style={{ color: "#94A3B8" }}>location:</span>{" "}
                    <span style={{ color: "#F8FAFC" }}>'Nigeria'</span>
                  </div>
                  <div>{"}"};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
