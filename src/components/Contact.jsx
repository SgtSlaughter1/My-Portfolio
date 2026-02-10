import React from 'react';

const Contact = () => {
  return (
    <section className="contact min-vh-100 py-5" id="contact" data-aos="zoom-in">
      <div className="container">
        <div className="row justify-content-center gy-5">
          <div className="col-12 text-center mb-3">
            <h2 className="section-title">Contact Me</h2>
          </div>

          {/* Contact Info Column */}
          <div className="col-12 col-md-6 animate__animated animate__fadeInLeft">
            <div className="contact-info">
              <h3 className="contact-heading">Reach Out to me!</h3>
              <p className="text-muted mb-4">
                Discuss a Project or just want to say Hi? My inbox is open for
                all.
              </p>

              {/* Contact Details */}
              <div className="contact-details mb-5">
                <div className="contact-item d-flex align-items-center gap-2">
                  <i className="fas fa-user"></i>
                  <div>
                    <div className="contact-label">Name</div>
                    <div className="contact-text">Habeeb Abdulsalam</div>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <div className="contact-label">Address</div>
                    <div className="contact-text">Lagos, Nigeria</div>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center gap-2">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <div className="contact-label">Email</div>
                    <div>
                      <a
                        href="mailto:habeebabdulsalam86@gmail.com"
                        className="contact-link"
                      >
                        habeebabdulsalam86@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h4 className="social-heading">Stay Connected</h4>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/abdulsalam-habeeb-9909592a2/"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </a>

                <a href="https://github.com/SgtSlaughter1" className="social-btn" aria-label="GitHub Profile" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                  <span>Github</span>
                </a>


                <a
                  href="https://wa.me/2349076630104"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Contact on WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-12 col-md-6 animate__animated animate__fadeInRight">
            <div className="contact-form">
              <h3 className="contact-heading">Message me</h3>
              <form
                action="mailto:habeebabdulsalam86@gmail.com"
                method="POST"
                enctype="text/plain"
              >
                <div className="row g-4">
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required
                      />
                      <label htmlFor="nameInput">Name</label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required
                      />
                      <label htmlFor="emailInput">Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                      <label htmlFor="subjectInput">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        name="message"
                        style={{ height: '150px' }}
                        placeholder="Describe Project..."
                        required
                      ></textarea>
                      <label htmlFor="messageInput">Describe Project...</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="submit-btn">
                      Send Message
                      <i className="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
