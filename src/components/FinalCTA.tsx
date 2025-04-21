
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-precedential-black py-12 sm:py-16 border-t border-precedential-gold/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white opacity-0 animate-fade-in">
          Legal Security Starts With a Standard. 
          <span className="text-gold-gradient block sm:inline mt-2 sm:mt-0 sm:ml-2">
            Choose Precedential Protection.
          </span>
        </h2>
        
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-precedential-gold hover:bg-precedential-goldDark text-precedential-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl opacity-0 animate-fade-in stagger-1 transform hover:scale-105 transition-all duration-300"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
