
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { MessageCircle, PhoneCall, Shield, Clock, AlertTriangle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
      setIsCompact(scrollPosition > 1200);
      
      // Increase urgency as user scrolls without converting
      setUrgencyLevel(Math.min(Math.floor(scrollPosition / 2000), 3));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const urgencyMessages = [
    "Need legal protection in Dubai?",
    "Don't let legal risks destroy your business!",
    "URGENT: Your business may be at legal risk!",
    "CRITICAL: Get legal protection before it's too late!"
  ];

  const urgencyColors = [
    "bg-white/95",
    "bg-yellow-50/95 border-yellow-400/50",
    "bg-orange-50/95 border-orange-400/50", 
    "bg-red-50/95 border-red-400/50"
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 backdrop-blur-lg border-t border-precedential-gold/30 transform transition-all duration-500 shadow-lg z-50 ${urgencyColors[urgencyLevel]} ${isCompact ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex-1 flex items-center gap-2">
          {urgencyLevel >= 2 && <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />}
          <div>
            <p className={`font-medium ${urgencyLevel >= 2 ? 'text-red-700' : 'text-precedential-black'} ${isCompact ? 'text-sm' : 'text-lg'}`}>
              {urgencyMessages[urgencyLevel]}
            </p>
            {!isCompact && (
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-semibold text-red-600">Only 3 priority slots left this week</span>
                <span className="hidden sm:inline">• 100% Risk-Free Assessment</span>
              </p>
            )}
          </div>
        </div>
        
        <div className="flex flex-row gap-3 w-full sm:w-auto">
          <Button 
            onClick={() => window.location.href = "tel:+971509014120"}
            variant="goldOutline"
            className="flex-1 sm:flex-none text-sm sm:text-base relative"
          >
            <PhoneCall className="w-4 h-4" />
            Emergency Call
            {urgencyLevel >= 1 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </Button>
          
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="gold"
            className="flex-1 sm:flex-none text-sm sm:text-base relative"
          >
            <Shield className="w-4 h-4" />
            {isCompact ? "Get Protected" : "FREE Risk Assessment"}
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded text-[10px]">
              RISK-FREE
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
