import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable GSAP reveal animation
 * @param {string|HTMLElement} target - The element to animate
 * @param {object} options - Custom GSAP properties
 */
export const revealOnScroll = (target, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    y = 50,
    opacity = 0,
    stagger = 0.2,
    trigger = target,
    start = 'top 85%',
    ...rest
  } = options;

  return gsap.from(target, {
    y,
    opacity,
    duration,
    delay,
    stagger,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none none',
      ...rest.scrollTrigger
    },
    ...rest
  });
};

/**
 * Magnetic element effect
 * @param {string|HTMLElement} target - The element to make magnetic
 * @param {number} strength - Strength of the magnetic pull
 */
export const createMagneticEffect = (target, strength = 0.5) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const moveElement = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;

    gsap.to(element, {
      x,
      y,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const resetElement = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  element.addEventListener('mousemove', moveElement);
  element.addEventListener('mouseleave', resetElement);

  return () => {
    element.removeEventListener('mousemove', moveElement);
    element.removeEventListener('mouseleave', resetElement);
  };
};

/**
 * Floating animation
 * @param {string|HTMLElement} target - The element to float
 */
export const floatAnimation = (target) => {
  return gsap.to(target, {
    y: '-=20',
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  });
};
