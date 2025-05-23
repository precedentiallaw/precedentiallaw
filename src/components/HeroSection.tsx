
import React, { useEffect, useRef } from 'react';
import { Shield, Award } from 'lucide-react';
import Logo from './Logo';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.2');
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      id="hero"
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-precedential-black via-precedential-black/85 to-precedential-black/70"></div>

      {/* Background Elements with improved styling */}
      <div className="absolute inset-0 opacity-20 parallax" data-speed="0.1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-precedential-gold blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-precedential-gold blur-[100px]"></div>
      </div>

      {/* Large Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 parallax" data-speed="0.15">
        <Logo variant="new-gold-wings" size="large" className="w-3/4 max-w-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Badge */}
          <div className="mb-12 sm:mb-16 opacity-0 animate-fade-in flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <Logo variant="new-gold-wings" size="large" className="w-32 h-32 animate-gleaming" />
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-in text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 sm:mb-10">
            Top-Rated <span className="text-gold-gradient">Legal Services</span> in Dubai
          </h1>
          
          <p className="opacity-0 animate-fade-in stagger-1 text-white/90 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto">
            Your Shield in Dubai's Legal Landscape: Expert Guidance, Clear Solutions, Client Protection
          </p>

          <div className="hidden md:block opacity-0 animate-fade-in stagger-1">
            <p className="text-white/80 text-base sm:text-lg mb-10 sm:mb-12 max-w-3xl mx-auto">
              Welcome to Precedential Law, a premier Dubai-based legal consultancy committed to delivering clear, effective, and client-focused legal solutions. Our team of experienced lawyers provides expert representation in business law, family law, real estate, immigration, and civil litigation across the UAE.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in stagger-2 flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="btn-primary group"
            >
              <Shield className="w-5 h-5 mr-2 inline-block transition-transform group-hover:scale-110" />
              Request Legal Consultation
            </a>
            
            <a 
              href="#services" 
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 
                       text-white border-2 border-white/30 hover:border-precedential-gold 
                       hover:text-precedential-gold"
            >
              Explore Our Legal Services
            </a>
          </div>

          {/* Trust Indicators with improved styling */}
          <div className="mt-20 opacity-0 animate-fade-in stagger-3">
            <p className="text-white/60 italic text-sm mb-6">Trusted by clients across UAE for legal representation</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Expert Attorneys', 'Client Protection', 'Experienced Counsel', 'Trusted Advisors'].map((trait) => (
                <div 
                  key={trait}
                  className="text-white/80 text-sm font-medium px-5 py-2.5 
                           rounded-full bg-white/5 border border-white/10
                           hover:border-precedential-gold/30 transition-colors"
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/70 flex flex-col items-center text-sm transition-colors duration-300 hover:text-precedential-gold">
          <span>Explore Legal Services</span>
          <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
