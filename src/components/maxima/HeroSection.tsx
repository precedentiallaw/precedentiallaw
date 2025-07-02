
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate title words
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('span');
      tl.fromTo(words, 
        { 
          opacity: 0, 
          y: 100,
          rotation: 2
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out"
        }
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Animate CTA button
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" data-scroll-section ref={heroRef}>
      <div className="container">
        <h1 className="hero-title" ref={titleRef}>
          <span data-scroll data-scroll-speed="1">Law</span>{' '}
          <span data-scroll data-scroll-speed="2">with</span>{' '}
          <span data-scroll data-scroll-speed="1.5">a</span>{' '}
          <span data-scroll data-scroll-speed="2.5">special</span>{' '}
          <span data-scroll data-scroll-speed="1.8">touch.</span>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          At Precedential Law, we provide reliable and personalized legal guidance for 
          individuals, families, and businesses across the UAE. As a leading legal 
          consultancy in Dubai, our mission is to help expatriates and UAE nationals 
          navigate the region's legal landscape with clarity and confidence.
        </p>
        
        <a 
          href="#contact" 
          className="hero-cta"
          ref={ctaRef}
          onClick={(e) => { e.preventDefault(); scrollToContact(); }}
        >
          Request Your Confidential Consultation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
