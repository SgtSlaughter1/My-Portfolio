import React from 'react';

const Home = () => {
  return (
    <section className="home pt-md-5 pb-5" id="home" data-aos="fade-down">
      <div className="container">
        <div className="row justify-content-evenly align-items-center gy-4">
          <div
            className="col-11 col-sm-10 col-md-6 text-center text-md-start animate__animated animate__fadeInLeft"
          >
            <h1 className="mb-3">
              Hello! I Am <br /><span className="c-orange">Habeeb Abdulsalam</span>
            </h1>

            <p className="text-muted">
              "I'm a curious and creative Web Developer who loves building
              websites that don't just look good, but feel great to use. Whether
              it's clean code, responsive design, or adding that little extra
              magic ✨ — I'm all about bringing ideas to life.
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/2349076630104"
                className="c-btn h-btn py-2 py-md-3 text-dark px-4 px-md-5 rounded-pill animate__animated animate__pulse animate__infinite"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="link d-inline-block mt-3 mt-sm-0 ms-sm-4"
                >See My Work</a
              >
            </div>
          </div>
          <div
            className="col-11 col-sm-10 col-md-4 text-center animate__animated animate__fadeInRight"
          >
            <div className="profile-image-wrapper">
              <div className="profile-image-ring">
                <img
                  loading="lazy"
                  src="/assets/profile-img.jpeg"
                  className="img-fluid profile-image-effect"
                  alt="Habeeb Abdulsalam Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
