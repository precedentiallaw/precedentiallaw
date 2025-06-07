import React, { useEffect, useRef } from 'react';
import { Shield, Award, Scale, CheckCircle } from 'lucide-react';
import Logo from './Logo';
const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.2');
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-precedential-black" id="hero">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      {/* Elegant Geometric Elements */}
      <div className="absolute inset-0 opacity-20 parallax" data-speed="0.1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-precedential-gold blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-precedential-gold blur-[100px]"></div>
      </div>

      {/* Prestigious Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 parallax" data-speed="0.15">
        <Scale className="w-96 h-96 text-precedential-gold" />
      </div>

      {/* Premium Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Prestigious Logo & Credentials */}
          <div className="mb-12 sm:mb-16 opacity-0 animate-fade-in flex flex-col items-center">
            <Logo variant="new-gold-wings" size="large" className="w-40 h-40 mb-6 animate-gleaming" />
            <div className="flex items-center gap-4 text-precedential-gold/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Clients First, Always.</span>
              </div>
              <div className="w-1 h-4 bg-precedential-gold/40"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>15+ Years Experience</span>
              </div>
              <div className="w-1 h-4 bg-precedential-gold/40"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-in text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 sm:mb-10 leading-tight">
            UAE's <span className="text-gold-gradient">Premier</span> Legal Authority
          </h1>
          
          <p className="opacity-0 animate-fade-in stagger-1 text-white/90 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto font-light">
            Setting the Precedential Standard in Legal Excellence
          </p>

          <p className="opacity-0 animate-fade-in stagger-1 text-white/80 text-base sm:text-lg mb-10 sm:mb-12 max-w-3xl mx-auto">
            Distinguished legal counsel serving corporations, high-net-worth individuals, and families across Dubai and the UAE. Our expertise spans complex commercial litigation, sophisticated business structuring, and intricate family law matters under UAE jurisdiction.
          </p>
          
          <div className="opacity-0 animate-fade-in stagger-2 flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="#contact" className="group bg-precedential-gold hover:bg-precedential-goldLight text-precedential-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-precedential-gold/30 transform hover:-translate-y-1">
              <Shield className="w-5 h-5 mr-2 inline-block transition-transform group-hover:scale-110" />
              Schedule Confidential Consultation
            </a>
            
            <a href="#practice-areas" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 
                       text-white border-2 border-white/30 hover:border-precedential-gold 
                       hover:text-precedential-gold hover:bg-white/5">
              Explore Legal Expertise
            </a>
          </div>

          {/* Premium Trust Indicators */}
          <div className="opacity-0 animate-fade-in stagger-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">500+</div>
                <div className="text-white/70 text-sm">Cases Successfully Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">AED 2B+</div>
                <div className="text-white/70 text-sm">Client Assets Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">15+</div>
                <div className="text-white/70 text-sm">Years UAE Practice</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">95%</div>
                <div className="text-white/70 text-sm">Client Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-precedential-gold/70 flex flex-col items-center text-sm transition-colors duration-300 hover:text-precedential-gold">
          <span className="font-medium">Discover Our Expertise</span>
          <Scale className="w-6 h-6 mt-2" />
        </a>
      </div>
    </section>;
};
export default HeroSection;