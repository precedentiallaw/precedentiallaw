
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-precedential-black py-12 sm:py-16 border-t border-precedential-gold/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white opacity-0 animate-fade-in">
          Ready to Discuss Your Legal Needs?
          <span className="text-gold-gradient block sm:inline mt-2 sm:mt-0 sm:ml-2">
            Choose Precedential Protection.
          </span>
        </h2>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in stagger-1">
          Don't navigate complex legal challenges alone. Contact Precedential Law today for expert legal services in Dubai. We offer confidential consultations to understand your situation and explore how our dedicated team can help you achieve your objectives.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in stagger-2">
          <div className="text-white/90">Contact: <a href="tel:+971509014120" className="text-precedential-gold hover:underline">+971 50 901 4120</a></div>
          <div className="hidden sm:block text-white/50">|</div>
          <div className="text-white/90">Email: <a href="mailto:info@uaeprecedentiallaw.com" className="text-precedential-gold hover:underline">info@uaeprecedentiallaw.com</a></div>
        </div>
        
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-precedential-gold hover:bg-precedential-goldDark text-precedential-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl opacity-0 animate-fade-in stagger-3 transform hover:scale-105 transition-all duration-300"
        >
          Get Legal Support Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
