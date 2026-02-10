import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Certificates />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
