
import React, { useEffect, useRef } from 'react';

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
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-precedential-black overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20 parallax" data-speed="0.1">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-precedential-gold blur-3xl"></div>
      </div>

      {/* Large Logo Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 parallax" data-speed="0.15">
        <img src="/lovable-uploads/3264ca05-2871-450a-8753-cf69e759e918.png" alt="" className="w-2/3 max-w-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-24 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="opacity-0 animate-fade-in text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6">
            Setting a <span className="text-gold-gradient">Precedential</span> Standard in Legal Services
          </h1>
          
          <p className="opacity-0 animate-fade-in stagger-1 text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Your Shield in Dubai's Legal Landscape: Expert Guidance, Clear Solutions, Client Protection
          </p>
          
          <div className="opacity-0 animate-fade-in stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary text-sm sm:text-base"
            >
              Request Confidential Consultation
            </a>
            
            <a 
              href="#services" 
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 
                       text-white border-2 border-white/30 hover:border-precedential-gold 
                       hover:text-precedential-gold text-sm sm:text-base"
            >
              Explore Our Services
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 opacity-0 animate-fade-in stagger-3">
            <p className="text-white/60 italic text-sm sm:text-base">Trusted by clients across UAE</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-6">
              {['Premium', 'Reliable', 'Experienced', 'Trusted'].map((trait) => (
                <div 
                  key={trait}
                  className="text-white/80 text-sm sm:text-base font-medium px-3 sm:px-4 py-1 sm:py-2 
                           rounded-full bg-white/5 border border-white/10"
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/70 flex flex-col items-center text-xs sm:text-sm">
          <span>Scroll Down</span>
          <svg className="w-4 h-4 sm:w-6 sm:h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
