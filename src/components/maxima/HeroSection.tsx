
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    // Enhanced title animation with sophisticated easing
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('span');
      
      // Initial setup
      gsap.set(words, { 
        opacity: 0, 
        y: 120,
        rotationX: 90,
        transformOrigin: "bottom"
      });

      // Animate words with advanced easing
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

    // Subtitle animation with elegant entrance
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

    // CTA button animation with sophisticated entrance
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

    // Parallax effect on scroll
    const handleScroll = () => {
      if (titleRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        gsap.set(titleRef.current, {
          transform: `translateY(${parallax}px)`
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section" data-scroll-section ref={heroRef}>
      <div className="container">
        <h1 className="hero-title" ref={titleRef}>
          <span data-scroll data-scroll-speed="1">Setting</span>{' '}
          <span data-scroll data-scroll-speed="2">a</span>{' '}
          <span data-scroll data-scroll-speed="1.5">Precedential</span>{' '}
          <span data-scroll data-scroll-speed="2.5">Standard</span>{' '}
          <span data-scroll data-scroll-speed="1.8">in</span>{' '}
          <span data-scroll data-scroll-speed="3">Legal</span>{' '}
          <span data-scroll data-scroll-speed="2.2">Services</span>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          Your Shield in Dubai's Legal Landscape: Expert Guidance, Clear Solutions, Client Protection. 
          Welcome to Precedential Law, a premier Dubai-based legal consultancy committed to delivering 
          clear, effective, and client-focused legal solutions.
        </p>
        
        <a 
          href="#contact" 
          className="hero-cta"
          ref={ctaRef}
          onClick={(e) => { e.preventDefault(); scrollToContact(); }}
        >
          Request a Confidential Consultation
        </a>
      </div>
      
      {/* Subtle background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1,
        animation: 'float 8s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(26, 26, 26, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: -1,
        animation: 'float 6s ease-in-out infinite reverse'
      }} />
    </section>
  );
};

export default HeroSection;
