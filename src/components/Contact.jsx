import React, { useEffect, useRef } from "react";
import { revealOnScroll } from "../utils/gsap-animations";
import gsap from "gsap";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".contact-info-reveal", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      revealOnScroll(".contact-form-reveal", {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="contact py-5"
      id="contact"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5 contact-content-reveal">
          <div className="col-12 text-center">
            <span className="section-label">/ Contact</span>
            <h2 className="display-4 fw-bold">Let’s Build Something Solid</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: 'min(750px, 90%)', fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}>
              I am open to opportunities where I can contribute to building scalable, thoughtful, and well structured digital products.
            </p>
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="row g-5 align-items-center mb-5 pb-5">
          {/* Contact Info Column */}
          <div className="col-lg-5 contact-info-reveal">
            <div className="glass-card p-4 p-md-5 h-100" style={{ backgroundColor: 'var(--secondary-bg)' }}>
              <h3 className="h2 mb-4 text-white">Reach Out!</h3>
              <p className="text-muted mb-5" style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
                Discuss a project or just want to say Hi? My inbox is open for
                all.
              </p>

              <div className="contact-details">
                <div className="d-flex align-items-center gap-4 mb-4">
                  <div className="glass-pill p-3 text-primary-cta">
                    <i className="bi bi-person fs-4"></i>
                  </div>
                  <div>
                    <div className="small text-muted text-uppercase tracking-wider">
                      Name
                    </div>
                    <div className="h6 mb-0 text-white fw-bold">
                      Habeeb Abdulsalam
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4 mb-4">
                  <div className="glass-pill p-3 text-primary-cta">
                    <i className="bi bi-geo-alt fs-4"></i>
                  </div>
                  <div>
                    <div className="small text-muted text-uppercase tracking-wider">
                      Location
                    </div>
                    <div className="h6 mb-0 text-white fw-bold">
                      Ijebu-Ode, Nigeria
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <div className="glass-pill p-3 text-primary-cta">
                    <i className="bi bi-envelope fs-4"></i>
                  </div>
                  <div>
                    <div className="small text-muted text-uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href="mailto:habeebabdulsalam86@gmail.com"
                      className="h6 mb-0 text-white fw-bold text-decoration-none hover-text-primary transition-all"
                    >
                      habeebabdulsalam86@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7 contact-form-reveal">
            <div className="glass-card p-4 p-md-5" style={{ backgroundColor: 'var(--secondary-bg)', borderRadius: '16px' }}>
              <h3 className="h3 mb-4 text-white">Message Me</h3>
              <form
                action="mailto:habeebabdulsalam86@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control glass-pill border-0 text-white px-4"
                        name="name"
                        placeholder="Name"
                        required
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      />
                      <label className="text-muted ms-2">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control glass-pill border-0 text-white px-4"
                        name="email"
                        placeholder="Email"
                        required
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      />
                      <label className="text-muted ms-2">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control glass-pill border-0 text-white px-4"
                        name="subject"
                        placeholder="Subject"
                        required
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      />
                      <label className="text-muted ms-2">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control glass-card border-0 text-white px-4 py-3"
                        name="message"
                        style={{ height: "180px", background: 'rgba(255,255,255,0.03)' }}
                        placeholder="Message"
                        required
                      ></textarea>
                      <label className="text-muted ms-2">
                        Describe your project...
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button
                      type="submit"
                      className="btn glass-pill px-5 py-3 fw-bold text-dark border-0 transition-all hover-translate-y"
                      style={{ backgroundColor: 'var(--primary-cta)' }}
                    >
                      Send Message{" "}
                      <i className="bi bi-send-fill ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="row mt-5 pt-5 border-top border-secondary border-opacity-10 opacity-75">
          <div className="col-12 text-center small">
            <p className="mb-1 text-white fw-medium">Designed and built by Habeeb Abdulsalam</p>
            <p className="text-secondary mb-0">Focused on structure, systems, and user centered web experiences</p>
            
            <div className="d-flex justify-content-center flex-wrap gap-4 mt-4 mb-4">
              <a
                href="https://www.linkedin.com/in/abdulsalam-habeeb-9909592a2/"
                target="_blank"
                rel="noreferrer"
                className="social-pill transition-all hover-translate-y"
              >
                <i className="bi bi-linkedin fs-5 text-white"></i>
              </a>
              <a
                href="https://github.com/SgtSlaughter1"
                target="_blank"
                rel="noreferrer"
                className="social-pill transition-all hover-translate-y"
              >
                <i className="bi bi-github fs-5 text-white"></i>
              </a>
              <a
                href="https://wa.me/2349076630104"
                target="_blank"
                rel="noreferrer"
                className="social-pill transition-all hover-translate-y"
              >
                <i className="bi bi-whatsapp fs-5 text-white"></i>
              </a>
              <a
                href="mailto:habeebabdulsalam86@gmail.com"
                className="social-pill transition-all hover-translate-y"
              >
                <i className="bi bi-envelope fs-5 text-white"></i>
              </a>
            </div>
            
            <p className="text-muted opacity-50 mb-0">
              © {new Date().getFullYear()} Habeeb Abdulsalam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
