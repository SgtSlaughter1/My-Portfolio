import React from 'react';

const Skills = () => {
  return (
    <section
      className="skills min-vh-100 py-5 d-flex align-items-center"
      id="skills"
      data-aos="fade-right"
    >
      <div className="container">
        <div className="row justify-content-center gy-4">
          <div className="col-12 text-center mb-3 mb-md-5">
            <h2 className="fw-bold" style={{ color: '#3f396d' }}>My Skills</h2>
          </div>

          <div
            className="col-11 col-sm-10 col-md-6 animate__animated animate__fadeInLeft"
          >
            <h3 className="c-orange mb-3 text-center text-md-start">
              My Creative Skills & Experience
            </h3>
            <p className="text-muted">
              I am committed to web development, having built a strong
              foundation in HTML and CSS for creating responsive websites. I
              have since expanded my expertise to include JavaScript and
              frameworks like Vue.js, Nuxt.js for developing dynamic user
              interfaces.
            </p>

            <p className="text-muted">
              On the backend, I work with PHP, Laravel, and databases such as
              MySQL and SQL to create robust web applications. This combination
              of front-end and back-end skills allows me to deliver seamless,
              end-to-end web solutions.
            </p>

            <p className="text-muted">
              I am dedicated to continuous learning to keep up with modern web
              development trends, ensuring that I deliver clean, efficient, and
              user-friendly solutions for every project.
            </p>
          </div>

          <div
            className="col-11 col-sm-10 col-md-5 animate__animated animate__fadeInRight"
          >
            <div className="skills-grid">
              {/* Frontend */}
              <img
                loading="lazy"
                src="/assets/react.png"
                alt="React"
                className="skill-icon"
                title="React"
              />
              <img
                loading="lazy"
                src="/assets/html5.png"
                alt="HTML5"
                className="skill-icon"
                title="HTML5"
              />
              <img
                loading="lazy"
                src="/assets/css3.png"
                alt="CSS3"
                className="skill-icon"
                title="CSS3"
              />
              <img
                loading="lazy"
                src="/assets/javascript.png"
                alt="JavaScript"
                className="skill-icon"
                title="JavaScript"
              />
              <img
                loading="lazy"
                src="/assets/bootstrap.png"
                alt="Bootstrap"
                className="skill-icon"
                title="Bootstrap"
              />
              <img
                loading="lazy"
                src="/assets/cdnlogo.com_vue-js.svg"
                alt="Vue.js"
                className="skill-icon"
                title="Vue.js"
              />
              <img
                loading="lazy"
                src="/assets/nuxt.svg"
                alt="Figma"
                className="skill-icon"
                title="Nuxt"
              />
              <img
                loading="lazy"
                src="/assets/figmalogo.png"
                alt="Figma"
                className="skill-icon"
                title="UI/UX Design"
              />

              {/* Backend */}
              <img
                loading="lazy"
                src="/assets/PHP-logo.svg.png"
                alt="PHP"
                className="skill-icon"
                title="PHP"
              />
              <img
                loading="lazy"
                src="/assets/pngimg.com - mysql_PNG9.png"
                alt="MySQL"
                className="skill-icon"
                title="MySQL"
              />
              <img
                loading="lazy"
                src="/assets/laravel.png"
                alt="Laravel"
                className="skill-icon"
                title="Laravel"
              />
              {/* Tools */}
              <img
                loading="lazy"
                src="/assets/git.png"
                alt="Git"
                className="skill-icon"
                title="Git"
              />
              <img
                loading="lazy"
                src="/assets/github.png"
                alt="GitHub"
                className="skill-icon"
                title="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
