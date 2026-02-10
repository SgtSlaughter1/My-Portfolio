import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar-top" className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid px-3 px-sm-5">
        <a className="navbar-brand fw-bold fs-2" href="#">Abdulsalam</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4" style={{ fontSize: '1.1rem' }}>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certificates">Certificates</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
          </ul>
          <a
            href="https://wa.me/2349076630104"
            className="c-btn text-dark h-btn py-2 px-4 rounded-pill"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
