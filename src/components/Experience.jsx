import React from 'react';

const Experience = () => {
  return (
    <section
      className="experience-education min-vh-100 py-5"
      id="experience"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row justify-content-center gy-4">
          {/* Experience Column */}
          <div className="col-12 col-lg-6 pe-lg-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Work Experience</h2>
            </div>

            {/* Experience Items */}
            <div className="experience-items">
              {/* Experience Item 1 */}
              <div
                className="experience-item p-4 mb-4 rounded-3 shadow-sm animate__animated animate__fadeInLeft"
              >
                <div
                  className="d-flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 className="mb-0" style={{ color: '#3f396d' }}>
                    Intern (Software Development)
                  </h4>
                  <span className="badge bg-primary">2024 - Present</span>
                </div>
                <h5 className="c-orange mb-3">Edutams</h5>
                <ul className="text-muted">
                  <li>
                    Assisted in the development and maintenance of web
                    applications using HTML, CSS, JavaScript, and Vue.js
                  </li>
                  <li>
                    Collaborated with senior developers to optimize website
                    performance and enhance user experience
                  </li>
                  <li>
                    Fixed bugs, troubleshot technical issues, and contributed to
                    UI/UX improvements
                  </li>
                  <li>
                    Worked on API integration and database connections for
                    dynamic web content
                  </li>
                  <li>
                    Worked with Laravel on backend development for RESTful APIs
                    and database management
                  </li>
                  <li>
                    Engaged in Agile development processes, including daily
                    stand-ups and code reviews
                  </li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div
                className="experience-item p-4 mb-4 rounded-3 shadow-sm animate__animated animate__fadeInLeft"
              >
                <div
                  className="d-flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 className="mb-0" style={{ color: '#3f396d' }}>Computer Engineer</h4>
                  <span className="badge bg-primary">2020 - 2024</span>
                </div>
                <h5 className="c-orange mb-3">Babakawo Computer Services</h5>
                <ul className="text-muted">
                  <li>
                    Installed, repaired, and maintained computer hardware and
                    software to ensure smooth operations
                  </li>
                  <li>
                    Monitored and analyzed updates to hardware and operating
                    systems to ensure compatibility and efficiency
                  </li>
                  <li>
                    Managed and analyzed sales data of computer hardware and
                    software to identify trends and inform purchasing decisions
                  </li>
                  <li>
                    Provided technical support and maintenance for clients,
                    improving system uptime and reliability
                  </li>
                </ul>
              </div>

              {/* Experience Item 3 */}
              <div
                className="experience-item p-4 mb-4 rounded-3 shadow-sm animate__animated animate__fadeInLeft"
              >
                <div
                  className="d-flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 className="mb-0" style={{ color: '#3f396d' }}>
                    Science Teacher and ICT CDS President
                  </h4>
                  <span className="badge bg-primary">2022 - 2023</span>
                </div>
                <h5 className="c-orange mb-3">Fridaus Model School, Igbore</h5>
                <ul className="text-muted">
                  <li>
                    Collected and analyzed student performance data to identify
                    areas for improvement, resulting in a 70% improvement in
                    overall performance
                  </li>
                  <li>
                    Developed data-driven strategies to enhance the learning
                    environment and optimize educational outcomes
                  </li>
                  <li>
                    Led a team to educate students on the positive impact of ICT
                    on education, using data to demonstrate improvements in
                    academic performance
                  </li>
                </ul>
              </div>

              {/* Experience Item 4 */}
              <div
                className="experience-item p-4 mb-4 rounded-3 shadow-sm animate__animated animate__fadeInLeft"
              >
                <div
                  className="d-flex flex-wrap justify-content-between align-items-center mb-3"
                >
                  <h4 className="mb-0" style={{ color: '#3f396d' }}>
                    Computer Engineer Intern
                  </h4>
                  <span className="badge bg-primary">2020</span>
                </div>
                <h5 className="c-orange mb-3">
                  Central Tech Computer Services, Babcock University
                </h5>
                <ul className="text-muted">
                  <li>
                    Assisted in the installation, maintenance, and repair of
                    computer hardware and networking systems
                  </li>
                  <li>
                    Conducted system updates and security patches to ensure
                    compliance with industry standards
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education and Hobbies Column */}
          <div className="col-12 col-lg-6 ps-lg-4">
            {/* Education Section */}
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: 'var(--main-text)' }}>Education</h2>
            </div>

            <div
              className="education-timeline animate__animated animate__fadeInRight mb-5"
            >
              <div className="education-item">
                <span className="year">2017 - 2022</span>
                <h4>B.Sc. Computer Science</h4>
                <p>Olabisi Onabanjo University</p>
              </div>
            </div>

            {/* Hobbies Section */}
            <div className="hobbies-section mt-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: 'var(--main-text)' }}>Hobbies</h2>
              </div>
              <div className="row g-4">
                {/* Chess */}
                <div className="col-sm-6 animate__animated animate__fadeInUp">
                  <div className="hobby-card text-center p-4 rounded-3 shadow-sm">
                    <i className="fas fa-chess fa-3x mb-3"></i>
                    <h4 className="mb-3">Chess Playing</h4>
                    <p className="text-muted mb-3">
                      Enhancing strategic thinking and problem-solving skills
                      through chess
                    </p>
                    <a
                      href="https://www.chess.com/member/slaughter124"
                      target="_blank"
                      rel="noreferrer"
                      className="social-btn d-inline-flex align-items-center"
                    >
                      <i className="fas fa-chess-knight me-2"></i>
                      Chess.com Profile
                    </a>
                  </div>
                </div>

                {/* Scrabble */}
                <div className="col-sm-6 animate__animated animate__fadeInUp">
                  <div className="hobby-card text-center p-4 rounded-3 shadow-sm">
                    <i className="fas fa-font fa-3x mb-3"></i>
                    <h4 className="mb-3">Scrabble</h4>
                    <p className="text-muted">
                      Expanding vocabulary and enjoying word-based strategic
                      gameplay
                    </p>
                  </div>
                </div>

                {/* Crossword */}
                <div className="col-sm-6 animate__animated animate__fadeInUp">
                  <div className="hobby-card text-center p-4 rounded-3 shadow-sm">
                    <i className="fas fa-th fa-3x mb-3"></i>
                    <h4 className="mb-3">Crossword Puzzles</h4>
                    <p className="text-muted">
                      Challenging my mind with word puzzles while improving
                      vocabulary and cognitive skills
                    </p>
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
