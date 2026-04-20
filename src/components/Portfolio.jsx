import React, { useEffect, useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import { revealOnScroll } from "../utils/gsap-animations";
import gsap from "gsap";

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".portfolio-card-wrapper", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      imageSrc: "/assets/amiableagro.png",
      title: "Amiable Agro Allied",
      description:
        "Amiable Agro is a comprehensive E-commerce and Agricultural Management System designed to bridge the gap between farm products and consumers.",
      moreText:
        "Built a centralized platform for managing an extensive product catalog, customer orders, and agricultural insights via an integrated blog. Features include a robust admin dashboard with real-time sales analytics, inventory tracking, multi-level category management, and secure payment integrations (Paystack/Flutterwave).",
      techStack:
        "Next Js (App Router), React, TypeScript, Prisma, Postgres, TailwindCSS, Recharts, Tiptap, Cloudinary, Zod, Nodemailer, Paystack API, Flutterwave API, Git",
      liveDemoLink: "https://amiableagro.com/",
    },

    {
      imageSrc: "/assets/hama.png",
      title: "HAMA Vet - Veterinary Platform",
      description:
        "Full-stack veterinary platform designed to streamline clinical services, pet product commerce, and appointment management.",
      moreText:
        "Lead Full Stack Developer. Architected a modern solution using Laravel 11 with Inertia.js and Vue 3, creating seamless experiences for pet owners and staff.",
      techStack:
        "Laravel 11, Vue 3, Inertia.js, Tailwind CSS, MySQL, Vite, Axios, Vue Toastification, Font Awesome, Google Fonts",
      liveDemoLink: "https://hamavet.gt.tc/",
    },

    {
      imageSrc: "/assets/ummah-cic.png",
      title: "Across Ummah CIC - Community Support Platform",
      description:
        "A comprehensive web application designed to facilitate community engagement, charitable giving, and social impact initiatives.",
      moreText:
        "As a Full Stack Developer, I collaborated with stakeholders to design and implement a modern platform using Next.js 14 with App Router, TypeScript, and Tailwind CSS.",
      techStack:
        "Next Js 14, TypeScript, Tailwind CSS, Redux Toolkit, React Hook Form, Framer Motion, Radix UI, Lucide React Icons, Vercel Analytics, Zod, React Email, Resend, Google Maps API",
      liveDemoLink: "https://www.acrossummah.com/",
    },
    {
      imageSrc: "/assets/nutureprime.png",
      title: "Nurture Prime Foundation",
      description:
        "A modern, responsive web application designed to showcase the charitable work of a purpose-driven organization dedicated to improving quality of life.",
      moreText:
        "Dedicated to improving life for older adults, underprivileged children, and vulnerable families across Nigeria. As the frontend developer, I implemented a compelling digital presence using Next.js 15 and Tailwind CSS.",
      techStack:
        "Next Js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, React 19, RESTful APIs, Git",
      liveDemoLink: "https://www.nurtureprimefoundation.org",
    },
    {
      imageSrc: "/assets/v2.png",
      title: "Edutams Essential V2",
      description:
        "A comprehensive educational management platform designed to streamline school administration, academic processes, and digital learning.",
      moreText:
        "As a Fullstack Developer, I contributed by building both the backend APIs using Laravel (PHP) and the frontend interface using Vue.js with Inertia.js.",
      techStack:
        "Laravel, Vue.js, Inertia.js, Bootstrap 4, Sass, MySQL, Eloquent ORM, Axios, SweetAlert2, FontAwesome, Composer, NPM, Git",
      liveDemoLink: "https://diper.ogunstate.gov.ng/",
    },
    {
      imageSrc: "/assets/ogsera.png",
      title: "OGSERA",
      description:
        "A comprehensive Educational Management System developed for the Ogun State Ministry of Education, Nigeria.",
      moreText:
        "Centralized platform for managing schools, students, teachers, and administrative processes across the state.",
      techStack:
        "Laravel, PHP, MySQL, Redis, Docker, Vue.js, Inertia.js, Bootstrap, Vuetify, Sass, ApexCharts, Vuex, Axios, CKEditor, Leaflet, Node.js, NPM, Git",
      liveDemoLink: "https://ogsera.ogunstate.gov.ng/",
    },
    {
      imageSrc: "/assets/nebula.png",
      title: "The Nebula",
      description:
        "A modern web application designed to facilitate talent development, community engagement, and project collaboration.",
      moreText:
        "As a Frontend Developer, I collaborated with a cross-functional team to design and implement user interfaces using Nuxt.js and Tailwind CSS.",
      techStack:
        "Nuxt.js, TypeScript, Tailwind CSS, Socket.io, RESTful APIs, Vite, Webpack, Git",
      liveDemoLink: "https://work.thenebula.tech/",
    },
    {
      imageSrc: "/assets/project3.png",
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio website built with a clean and professional design to showcase my skills and projects.",
      techStack:
        "HTML5, CSS3, JavaScript, Bootstrap, Font Awesome, Bootstrap Icons, Animate.css, Git",
      liveDemoLink: "https://habeeb-abdulsalam.vercel.app/",
    },
    {
      imageSrc: "/assets/desktop-design-ticket.jpg",
      title: "Conference Ticket Generator",
      description:
        "A responsive ticket generation form for a coding conference, allowing users to generate and download their own event tickets.",
      techStack: "HTML5, CSS3, JavaScript, Bootstrap",
      liveDemoLink: "https://conferenceticket-alpha.vercel.app/",
    },
  ];

  return (
    <section
      className="portfolio py-5 min-vh-100 d-flex align-items-center"
      id="portfolio"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-label">/ Projects</span>
            <h2 className="display-4 fw-bold">Featured Work</h2>
            <p
              className="text-secondary lead mx-auto"
              style={{ maxWidth: "750px" }}
            >
              A selection of projects focused on full stack systems, product
              thinking, backend structure, and user experience.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 portfolio-card-wrapper"
            >
              <PortfolioCard
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                moreText={project.moreText}
                techStack={project.techStack}
                liveDemoLink={project.liveDemoLink}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/SgtSlaughter1"
            target="_blank"
            rel="noreferrer"
            className="btn glass-pill px-5 py-3 text-white fw-bold transition-all hover-translate-y"
          >
            View More on GitHub <i className="bi bi-github ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
