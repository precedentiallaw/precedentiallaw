
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Ensure content is visible immediately
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('span');
      gsap.set(words, { opacity: 1, y: 0, rotationX: 0 });
    }
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
    }
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 1, y: 0, scale: 1 });
    }

    // Delayed animation for enhancement
    const timer = setTimeout(() => {
      const tl = gsap.timeline();

      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('span');
        
        gsap.set(words, { 
          opacity: 0, 
          y: 120,
          rotationX: 90,
          transformOrigin: "bottom"
        });

        tl.to(words, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.4,
          stagger: 0.12,
          ease: "power3.out",
          transformOrigin: "bottom"
        });
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { 
            opacity: 0, 
            y: 60,
            filter: "blur(10px)"
          },
          { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)",
            duration: 1.2, 
            ease: "power2.out" 
          },
          "-=0.8"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(ctaRef.current,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.9
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1.0, 
            ease: "power2.out" 
          },
          "-=0.6"
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" data-scroll-section ref={heroRef}>
      <div className="container">
        <h1 className="hero-title" ref={titleRef}>
          <span>Setting</span>{' '}
          <span>a</span>{' '}
          <span>Precedential</span>{' '}
          <span>Standard</span>{' '}
          <span>in</span>{' '}
          <span>Legal</span>{' '}
          <span>Services</span>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          Your Shield in Dubai's Legal Landscape: Expert Guidance, Clear Solutions, Client Protection. 
          Welcome to Precedential Law, a premier Dubai-based legal consultancy committed to delivering 
          clear, effective, and client-focused legal solutions.
        </p>
        
        <Link 
          to="/contact" 
          className="hero-cta"
          ref={ctaRef}
        >
          Request a Confidential Consultation
        </Link>
      </div>
      
      {/* Subtle background elements */}
      <div 
        className="absolute top-1/5 right-1/10 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }} 
      />
      
      <div 
        className="absolute bottom-1/3 left-1/20 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26, 26, 26, 0.05) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite reverse'
        }} 
      />
    </section>
  );
};

export default HeroSection;
