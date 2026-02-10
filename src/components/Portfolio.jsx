import React from 'react';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <section
      className="portfolio min-vh-100 py-5"
      id="portfolio"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row justify-content-center gy-4">
          <div className="col-12 text-center mb-3 mb-md-5">
            <h2 className="fw-bold" style={{ color: '#3f396d' }}>My Portfolio</h2>
          </div>

          <div className="row g-4">
            <PortfolioCard
                imageSrc="/assets/ummah-cic.png"
                title="Across Ummah CIC - Community Support Platform"
                description="Across Ummah CIC is a comprehensive web application designed to facilitate community engagement, charitable giving, and social impact initiatives. As a Full Stack Developer, I collaborated with stakeholders to design and implement a modern platform using Next.js 14 with App Router, TypeScript, and Tailwind CSS."
                moreText="My responsibilities included architecting the component structure, implementing responsive UI components, integrating Redux for state management, and ensuring optimal performance and accessibility. The platform offers features such as dynamic focus area showcases, event galleries, donation processing, community project tracking, mental health resources, and volunteer coordination. Key functionalities include interactive image carousels, animated UI components, mobile-responsive navigation, form validation with React Hook Form, and real-time state management with Redux Toolkit. I also implemented SEO optimization techniques, structured data for better search visibility, and integrated Vercel Analytics for performance monitoring. The website serves as the digital hub for a UK-based community interest company focused on mental health support, family empowerment, and community development programs in Manchester."
                techStack="Next.js 14 (App Router), TypeScript, Tailwind CSS, Redux Toolkit, React Hook Form, Framer Motion, Radix UI, Lucide React Icons, Vercel Analytics, Zod, React Email, Resend, Google Maps API"
                liveDemoLink="https://www.acrossummah.com/"
                sourceCodeLink={null}
            />

            <PortfolioCard
                imageSrc="/assets/nutureprime.png"
                title="Nurture Prime Foundation Website"
                description="The Nurture Prime Foundation website is a modern, responsive web application designed to showcase the charitable work of a non-political, purpose-driven organization dedicated to improving the quality of life for older adults, underprivileged children, and vulnerable families across Nigeria. As the frontend developer, I collaborated with stakeholders to design and implement a compelling digital presence using Next.js 15 and Tailwind CSS."
                moreText="My responsibilities included building responsive layouts, implementing smooth animations with Framer Motion and GSAP, optimizing performance, and ensuring a seamless user experience across all devices. The platform offers features such as program showcases, mission and vision presentation, founder's message, beneficiary stories, and donation pathways. Key sections include an engaging hero section with video integration, interactive service cards highlighting the foundation's four core programs (Education Support, Elderly Care & Wellness, Healthcare & Medical Outreach, and Emergency Relief & Resilience), and structured data for improved SEO. I implemented dark mode capabilities, responsive navigation, and optimized the site for accessibility and performance. The website effectively communicates the foundation's commitment to nurturing childhood dreams and creating senior smiles while bridging gaps in wellness, education, healthcare, and community support."
                techStack="Next.js (React framework), TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis (smooth scrolling), React 19, RESTful APIs, SVG & PNG assets, Git"
                liveDemoLink="https://www.nurtureprimefoundation.org"
                sourceCodeLink={null}
            />

            <PortfolioCard
                imageSrc="/assets/nebula.png"
                title="The Nebula"
                description="The Nebula Talent is a modern web application designed to facilitate talent development, community engagement, and project collaboration. As a Frontend Developer, I collaborated with a cross-functional team to design and implement user interfaces using Nuxt.js and Tailwind CSS."
                moreText="My responsibilities included building responsive layouts, integrating real-time features with Socket.io, optimizing performance, and ensuring a seamless user experience. The platform offers features such as user authentication, career path tracking, task management, team chat, wallet services, and conference participation, all supported by real-time notifications, interactive dashboards, and a responsive interface. I contributed to code reviews, UI/UX improvements, and worked closely with backend developers to consume RESTful APIs securely and efficiently, making it ideal for users seeking to grow their skills and connect with like-minded individuals."
                techStack="Nuxt.js (Vue.js framework), TypeScript, Tailwind CSS, Socket.io, RESTful APIs, SVG & PNG assets, Vite or Webpack, Git"
                liveDemoLink="https://work.thenebula.tech/"
                sourceCodeLink={null}
            />

            <PortfolioCard
                imageSrc="/assets/v2.png"
                title="Edutams Essential V2"
                description="Edutams Essential v2 is a comprehensive educational management platform designed to streamline school administration, academic processes, and digital learning. As a Fullstack Developer, I contributed by building both the backend APIs using Laravel (PHP) and the frontend interface using Vue.js with Inertia.js."
                moreText="The system supports multiple user roles (students, teachers, administrators, ministry officials) and provides features for managing enrolment, results, payments, school calendars, and more. I implemented user authentication, role-based access control, payment gateway integrations, real-time updates, and responsive UI components. The platform features a modern SPA interface, robust backend APIs, and seamless user experience across all devices."
                techStack="Laravel (PHP), Vue.js, Inertia.js, Bootstrap 4, Sass/SCSS, MySQL, Eloquent ORM, Axios, SweetAlert2, FontAwesome, Composer, NPM, Git"
                liveDemoLink="https://v2.edutams.net/"
                sourceCodeLink={null}
            />

            <PortfolioCard
                imageSrc="/assets/ogsera.png"
                title="OGSERA"
                description="OGSERA is a comprehensive Educational Management System developed for the Ogun State Ministry of Education, Nigeria. As a Fullstack Developer, I contributed to building a centralized platform for managing schools, students, teachers, and administrative processes across the state."
                moreText="The system features multi-level school and student management, digital learning tools, financial and administrative modules, and robust reporting. I worked on both backend (Laravel, PHP, MySQL, Redis, Docker) and frontend (Vue.js, Inertia.js, Bootstrap, Vuetify, Sass/SCSS), implementing secure authentication, real-time features, and scalable architecture to support thousands of institutions and users."
                techStack="Laravel, PHP, MySQL, Redis, Docker, Vue.js, Inertia.js, Bootstrap, Vuetify, Sass/SCSS, ApexCharts, Vuex, Axios, SweetAlert2, CKEditor, Leaflet, Node.js, NPM, Git"
                liveDemoLink="https://ogsera.ogunstate.gov.ng/"
                sourceCodeLink={null}
            />

            <PortfolioCard
                imageSrc="/assets/hamavet.png"
                title="HAMA Vet - Comprehensive Veterinary Care Platform"
                description="HAMA Vet is a full-stack veterinary platform designed to streamline clinical services, pet product commerce, and appointment management for veterinary practices. As the Lead Full Stack Developer, I architected and implemented a modern solution using Laravel 11 with Inertia.js and Vue 3, creating seamless experiences for both pet owners and veterinary staff."
                moreText="My key contributions included designing the complete system architecture with separate user flows for clients and administrators, implementing real-time appointment scheduling with status tracking, building a comprehensive pet store with inventory management and order processing, and creating responsive dashboards for both user roles. The platform features advanced authentication with role-based access control, RESTful API integration for payment processing, and mobile-responsive interfaces using Tailwind CSS. Core functionalities include appointment booking with calendar integration, pet profile management with medical history tracking, product catalog with category filtering, shopping cart with checkout flow, admin panel for business analytics and inventory control, and responsive design ensuring optimal experience across all devices. I also implemented server-side rendering for improved SEO, toast notifications for user feedback, and comprehensive form validation throughout the application. The platform serves veterinary clinics in Nigeria, managing everything from clinical appointments to commercial pet product sales."
                techStack="Laravel 11, Vue 3, Inertia.js, Tailwind CSS, MySQL, Vite, Axios, Vue Toastification, Font Awesome, Google Fonts, Responsive Design"
                liveDemoLink="https://hamavet.gt.tc/"
                sourceCodeLink={null}
            />

            <PortfolioCard
                imageSrc="/assets/project3.png"
                title="My Portfolio"
                description="This is a modern, responsive personal portfolio website built with a clean and professional design."
                moreText="The website showcases a developer's skills, projects, and contact information through multiple sections including Home, About, Skills, Portfolio, and Contact."
                techStack="HTML5, CSS3, JavaScript, Bootstrap, Font Awesome, Bootstrap Icons, Animate.css, Git"
                liveDemoLink="https://habeeb-abdulsalam.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/My-Portfolio"
            />

            <PortfolioCard
                imageSrc="/assets/project1.jpg"
                title="E-commerce"
                description="This project is a front-end coding challenge from Frontend Mentor, aimed at building a responsive e-commerce product page for a sneaker brand."
                moreText="The goal is to create a visually appealing and functional web page that closely resembles the provided design specifications. The project emphasizes the use of modern web technologies and best practices in front-end development."
                techStack="HTML5, CSS3, JavaScript, Bootstrap , Git"
                liveDemoLink="https://e-commerce-sand-ten-75.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/e-commerce"
            />

            <PortfolioCard
                imageSrc="/assets/project2.jpg"
                title="Product list with cart"
                description="The Dessert Shop Cart Application is a responsive e-commerce web application designed to showcase a variety of gourmet desserts."
                moreText="This project was developed as part of the Frontend Mentor challenges. The application allows users to browse through a selection of desserts, add them to a shopping cart, and proceed to an order confirmation process."
                techStack="HTML5, CSS3, JavaScript, Bootstrap, Git"
                liveDemoLink="https://product-card-ten-psi.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/product_card"
            />

            <PortfolioCard
                imageSrc="/assets/desktop-design-form.jpg"
                title="Conference Ticket Generator"
                description="This project is a front-end coding challenge from Frontend Mentor, focused on creating a responsive ticket generation form for a coding conference."
                moreText="Users can upload their avatar, fill in their details, and receive validation messages for any errors. The project showcases the ability to generate a conference ticket dynamically upon successful form submission, ensuring a user-friendly experience across various devices."
                techStack="HTML5, CSS3, JavaScript, Bootstrap"
                liveDemoLink="https://conferenceticket-alpha.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/conferenceticket"
            />

            <PortfolioCard
                imageSrc="/assets/project4.png"
                title="Advice Generator"
                description='The "Advise Generator" is an interactive web application designed to provide users with random pieces of advice.'
                moreText="It aims to offer a light-hearted and engaging experience, encouraging users to seek inspiration or motivation through the advice displayed."
                techStack="HTML5, CSS3, JavaScript, Git"
                liveDemoLink="https://advice-generator-chi-gules.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/advice_generator"
            />

            <PortfolioCard
                imageSrc="/assets/project5.png"
                title="Static Job Listing"
                description="The application serves as a platform for users to view and filter job listings."
                moreText="It is structured to provide a clean and responsive interface, making it accessible on various devices. The main features include a filter bar for refining job searches and a dynamic display of job listings."
                techStack="HTML5, CSS3, JavaScript, Git"
                liveDemoLink="https://job-listing-eta-sandy.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/job_listing"
            />

            <PortfolioCard
                imageSrc="/assets/project6.png"
                title="Social links profile"
                description="This is a personal profile card/landing page project that showcases social media links and basic information. It's a clean, modern design that serves as a digital business card or link aggregator (similar to Linktree)."
                moreText={null}
                techStack="HTML5, CSS3, Font-Awesome, Git"
                liveDemoLink="https://social-links-iota-five.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/social_links"
            />

            <PortfolioCard
                imageSrc="/assets/project7.png"
                title="Infinion Campaign App"
                description="The infinion_cohort project is a comprehensive frontend application that leverages modern web technologies to provide a robust user experience while effectively managing campaign data through CRUD operations. The collaborative nature of the project ensures that all team members can contribute effectively, leading to a high-quality final product that connects seamlessly with the backend API.."
                moreText={null}
                techStack="Vue 3, Axios, Pinia, Vuetify, Vue Router, Git"
                liveDemoLink="https://infinion-cohort.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/infinion_cohort/tree/main"
            />

            <PortfolioCard
                imageSrc="/assets/project8.png"
                title="Food Ordering App"
                description="A Vue.js-based single-page application designed for restaurant food ordering, providing an intuitive interface for customers to browse menu items, manage their cart, and place delivery orders."
                moreText={null}
                techStack="Vue 3, Vue Router, Git"
                liveDemoLink="https://food-ordering-ruddy.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/food_ordering"
            />

            <PortfolioCard
                imageSrc="/assets/master.png"
                title="Mastermind Gadget E-commerce"
                description="A modern e-commerce platform featuring a responsive product catalog, dynamic shopping cart, and an engaging checkout process with animated order confirmation. The application provides a seamless shopping experience with features like category filtering, product details, and real-time cart updates."
                moreText={null}
                techStack="Vue.js 3, Vuex, Vue Router, Bootstrap 5, CSS3 Animations, Vue.js, Git, Free Store API"
                liveDemoLink="https://mastermindgadget.netlify.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/ecommerce"
            />

            <PortfolioCard
                imageSrc="/assets/project9.png"
                title="Space Tourism"
                description="This project is a multi-page space tourism website designed as part of a challenge from Frontend Mentor. The website allows users to explore different aspects of space travel, including crew members, destinations, and technology. The design is responsive, ensuring an optimal layout across various devices."
                moreText={null}
                techStack="HTML5, CSS3, JavaScript, Animate.css,. Bootstrap, Git"
                liveDemoLink="https://space-tourism-chi-orcin.vercel.app/"
                sourceCodeLink="https://github.com/SgtSlaughter1/space-tourism"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
