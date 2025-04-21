
import React, { useRef, useEffect } from 'react';

const AboutSection: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = aboutRef.current?.querySelectorAll('.reveal');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-precedential-black text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-precedential-gold blur-3xl rounded-l-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div ref={aboutRef} className="order-2 md:order-1">
            <h2 className="reveal opacity-0 text-3xl md:text-4xl font-playfair font-bold mb-6">
              About <span className="text-gold-gradient">Precedential</span> Law
            </h2>
            
            <p className="reveal opacity-0 mb-6 text-white/80">
              Founded on principles of excellence and integrity, Precedential Law has emerged as one of Dubai's premier legal consultancies. Our team of experienced attorneys brings together decades of expertise across multiple practice areas, offering clients unparalleled legal representation.
            </p>
            
            <p className="reveal opacity-0 mb-6 text-white/80">
              We understand that legal challenges require not just expertise, but empathy and clear communication. That's why we pride ourselves on our client-centered approach, ensuring you're informed and comfortable throughout the legal process.
            </p>
            
            <div className="reveal opacity-0 grid grid-cols-2 gap-4 my-8">
              <div className="border border-precedential-gold/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-playfair text-precedential-gold mb-2">15+</div>
                <div className="text-sm text-white/70">Years of Experience</div>
              </div>
              <div className="border border-precedential-gold/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-playfair text-precedential-gold mb-2">500+</div>
                <div className="text-sm text-white/70">Satisfied Clients</div>
              </div>
              <div className="border border-precedential-gold/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-playfair text-precedential-gold mb-2">98%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
              <div className="border border-precedential-gold/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-playfair text-precedential-gold mb-2">25+</div>
                <div className="text-sm text-white/70">Legal Experts</div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="reveal opacity-0 inline-block btn-primary"
            >
              Schedule a Consultation
            </a>
          </div>
          
          <div className="order-1 md:order-2 perspective-1000">
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-2xl overflow-hidden transform rotate-3 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-precedential-gold to-precedential-goldLight opacity-30"></div>
              </div>
              <div className="glass-card absolute w-full h-full rounded-2xl overflow-hidden transform -rotate-3 shadow-xl border border-precedential-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Legal professionals at Precedential Law" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
