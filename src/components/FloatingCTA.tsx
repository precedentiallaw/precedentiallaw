
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-precedential-gold/20 transform transition-transform duration-300 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <p className="text-lg font-medium">Need legal help in Dubai? Let's talk.</p>
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-precedential-gold hover:bg-precedential-goldDark text-white"
        >
          Get Legal Consultation
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
