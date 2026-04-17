import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch devices
    if (window.matchMedia("(max-width: 991px)").matches) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Precision Dot moves instantly
      gsap.set(dotRef.current, {
        x: clientX,
        y: clientY,
      });

      // Trailing Ring moves with a slight lag
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseDown = () => {
      gsap.to([dotRef.current, ringRef.current], {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const onMouseUp = () => {
      gsap.to([dotRef.current, ringRef.current], {
        scale: 1,
        duration: 0.2,
      });
    };

    const handleLinkHover = (e) => {
      const target = e.target;
      const isLink = target.closest("a, button, .btn, .glass-pill, input, textarea");
      
      if (isLink) {
        setIsHovered(true);
        gsap.to(ringRef.current, {
          scale: 1.5,
          borderColor: "#30B0F0",
          backgroundColor: "rgba(56, 189, 248, 0.1)",
          duration: 0.3,
        });
        gsap.to(dotRef.current, {
          scale: 1.5,
          duration: 0.3,
        });
      } else {
        setIsHovered(false);
        gsap.to(ringRef.current, {
          scale: 1,
          borderColor: "#38BDF8",
          backgroundColor: "transparent",
          duration: 0.3,
        });
        gsap.to(dotRef.current, {
          scale: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleLinkHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleLinkHover);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
