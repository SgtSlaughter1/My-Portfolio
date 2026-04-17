# Habeeb Abdulsalam | Full Stack Developer Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

A premium, high-performance developer portfolio built with a focus on technical identity, clean architecture, and modern motion design. This portfolio showcases full-stack expertise with a structured, professional aesthetic.

## 🚀 Key Modernization Features

### 1. Fluid Typography & Spacing System
Implemented a zero-breakpoint responsive design using a sophisticated `clamp()`-based system.
- **Dynamic Scaling**: Headings and body text scale smoothly between mobile and desktop based on the viewport width.
- **Consistent Layout**: Section padding and component margins are derived from a unified CSS variable design system.

### 2. Premium Technical Animations
Leveraged **GSAP (GreenSock Animation Platform)** to create a high-end, alive interaction layer:
- **Masked Hero Reveals**: Text elements emerge from behind invisible masks for a technical entrance.
- **Pinned Experience Timeline**: A desktop-only "Experience Pinned" effect where education and hobbies stay in view while scrolling through work history.
- **Staggered Orchestration**: Coordinated reveal sequences for project cards, skill icons, and labels.

### 3. Glassmorphism UI
- **Translucent Components**: Navbar and cards utilize backdrop-blur filters for a modern "glass" feel.
- **Technical Color Palette**: Deep navy backgrounds (`#0B1020`) with vibrant cyan accents (`#38BDF8`) for a professional developer identity.
- **Subtle Micro-interactions**: Hover-triggered translation and glow effects on interactive elements.

## 🛠️ Tech Stack

- **Frontend**: React (Functional Components + Hooks)
- **Build Tool**: Vite (Lightning fast HMR)
- **Styling**: Bootstrap 5 + Custom Vanilla CSS (Design Tokens)
- **Motion**: GSAP 3 (ScrollTrigger, matchMedia, Context)
- **Icons**: Bootstrap Icons

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Home.jsx         # Premium Hero with motion sequences
│   ├── Experience.jsx   # Scroll-pinned timeline layout
│   ├── PortfolioCard.jsx# Fluid-typography project cards
│   └── ...
├── utils/
│   └── gsap-animations.js# Centralized GSAP reveal logic
├── index.css            # Global design system & fluid variables
└── App.jsx              # Main entry point with ScrollToTop integration
```

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ⚖️ License
Distributed under the MIT License. See `LICENSE` for more information.

---
Built with 💙 by **Habeeb Abdulsalam**
