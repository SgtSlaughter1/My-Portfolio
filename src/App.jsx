import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger when components mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-dark min-vh-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <Portfolio />
        <Skills />
        <Experience />
        <Certificates />
        <About />
        <Contact />
      </main>
      <ScrollToTop />
      <CustomCursor />
    </div>
  );
}

export default App;
