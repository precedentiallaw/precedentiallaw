
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { MessageCircle, PhoneCall } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
      setIsCompact(scrollPosition > 1200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-precedential-gold/30 transform transition-all duration-500 shadow-lg z-50 ${isCompact ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {!isCompact && (
          <div className="flex-1">
            <p className="text-lg font-medium text-precedential-black">Need legal help in Dubai? <span className="hidden sm:inline text-precedential-gold">Let's talk.</span></p>
          </div>
        )}
        <div className="flex flex-row gap-3 w-full sm:w-auto">
          <Button 
            onClick={() => window.location.href = "tel:+971509014120"}
            variant="goldOutline"
            className="flex-1 sm:flex-none text-sm sm:text-base"
          >
            <PhoneCall className="w-4 h-4" />
            Call Now
          </Button>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="gold"
            className="flex-1 sm:flex-none text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            Get Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
