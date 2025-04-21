
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-precedential-black py-12 border-t border-precedential-gold/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white">
          Legal Security Starts With a Standard. <span className="text-gold-gradient">Choose Precedential Protection.</span>
        </h2>
        
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-precedential-gold hover:bg-precedential-goldDark text-precedential-black px-8 py-6 text-lg rounded-xl"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
