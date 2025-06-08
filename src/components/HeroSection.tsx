
import React, { useEffect, useRef } from 'react';
import { Shield, Award, Scale, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';
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

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-precedential-black" id="hero">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Urgent Scarcity Banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 text-white py-2 z-20">
        <div className="container mx-auto px-4 text-center flex items-center justify-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span className="font-medium">URGENT: Only 3 Priority Consultation Slots Available This Week</span>
          <Clock className="w-4 h-4" />
        </div>
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
      <div className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Risk Alert */}
          <div className="mb-8 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-6 py-3 rounded-full font-semibold">
              <Shield className="w-5 h-5" />
              <span>WARNING: One Legal Mistake Could Cost Millions</span>
            </div>
          </div>

          {/* Prestigious Logo & Social Proof */}
          <div className="mb-12 sm:mb-16 opacity-0 animate-fade-in flex flex-col items-center">
            <Logo variant="new-gold-wings" size="large" className="w-32 h-32 mb-6 animate-gleaming" />
            <div className="flex items-center gap-4 text-precedential-gold/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2,000+ Executives Protected</span>
              </div>
              <div className="w-1 h-4 bg-precedential-gold/40"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>AED 2B+ Assets Secured</span>
              </div>
              <div className="w-1 h-4 bg-precedential-gold/40"></div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Zero Client Disasters</span>
              </div>
            </div>
          </div>

          {/* Outcome-Focused Headlines */}
          <h1 className="opacity-0 animate-fade-in text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            Protect Your <span className="text-gold-gradient">Million-Dollar</span> UAE Investment
          </h1>
          
          <h2 className="opacity-0 animate-fade-in stagger-1 text-white/90 text-xl sm:text-2xl md:text-3xl mb-6 max-w-4xl mx-auto font-light">
            Before One Legal Mistake Destroys Everything You've Built
          </h2>

          <p className="opacity-0 animate-fade-in stagger-1 text-white/80 text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-precedential-gold">95% of business failures in Dubai</strong> stem from preventable legal oversights. 
            Don't become another statistic. Get bulletproof legal protection from Dubai's most trusted corporate defenders.
          </p>

          {/* Value Stack Box */}
          <div className="opacity-0 animate-fade-in stagger-2 bg-white/10 backdrop-blur-sm border border-precedential-gold/30 rounded-2xl p-8 mb-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get in Your Emergency Legal Shield Assessment:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Immediate Risk Analysis</span>
                  <p className="text-white/70 text-sm">Identify hidden legal time bombs (Worth AED 50,000)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Asset Protection Strategy</span>
                  <p className="text-white/70 text-sm">Bulletproof your wealth from lawsuits (Worth AED 75,000)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Compliance Audit</span>
                  <p className="text-white/70 text-sm">Avoid crushing government penalties (Worth AED 100,000)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Emergency Action Plan</span>
                  <p className="text-white/70 text-sm">Step-by-step crisis prevention guide (Worth AED 25,000)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white/90">
                <span className="line-through text-red-300">Total Value: AED 250,000</span>
                <span className="text-precedential-gold font-bold text-2xl ml-4">Your Investment: FREE</span>
              </p>
            </div>
          </div>
          
          {/* Risk Reversal CTA */}
          <div className="opacity-0 animate-fade-in stagger-2 flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="#contact" className="group bg-precedential-gold hover:bg-precedential-goldLight text-precedential-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-precedential-gold/30 transform hover:-translate-y-1 relative">
              <Shield className="w-5 h-5 mr-2 inline-block transition-transform group-hover:scale-110" />
              Claim Your FREE Legal Shield Assessment
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                RISK-FREE
              </div>
            </a>
            
            <a href="tel:+971509014120" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 
                       text-white border-2 border-white/30 hover:border-precedential-gold 
                       hover:text-precedential-gold hover:bg-white/5 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Emergency Hotline: +971 50 901 4120
            </a>
          </div>

          {/* Guarantee Statement */}
          <div className="opacity-0 animate-fade-in stagger-3 bg-precedential-gold/10 border border-precedential-gold/30 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
            <h3 className="text-precedential-gold font-bold text-xl mb-3">
              🛡️ Our Iron-Clad Protection Promise
            </h3>
            <p className="text-white/90 leading-relaxed">
              If we don't identify at least <strong>3 critical legal vulnerabilities</strong> in your business during our assessment, 
              we'll provide <strong>6 months of legal monitoring absolutely FREE</strong>. Plus, if you're not completely satisfied 
              with our consultation, we'll refund your time with a AED 5,000 consultation credit.
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="opacity-0 animate-fade-in stagger-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">2,000+</div>
                <div className="text-white/70 text-sm">Executives Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">AED 2B+</div>
                <div className="text-white/70 text-sm">Assets Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">0</div>
                <div className="text-white/70 text-sm">Client Legal Disasters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-precedential-gold mb-2">24hrs</div>
                <div className="text-white/70 text-sm">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-precedential-gold/70 flex flex-col items-center text-sm transition-colors duration-300 hover:text-precedential-gold">
          <span className="font-medium">See How We Protect You</span>
          <Scale className="w-6 h-6 mt-2" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
