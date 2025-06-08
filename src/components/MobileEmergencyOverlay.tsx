
import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileEmergencyOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      const hasScrolled = window.scrollY > 300;
      const dismissed = localStorage.getItem('emergency-overlay-dismissed');
      
      if (isMobile && hasScrolled && !dismissed && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', checkMobile);
    checkMobile();

    return () => window.removeEventListener('scroll', checkMobile);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('emergency-overlay-dismissed', 'true');
  };

  const handleCall = () => {
    window.location.href = 'tel:+971509014120';
    (window as any).trackConversion?.('emergency_call');
  };

  const handleWhatsApp = () => {
    const message = "🚨 LEGAL EMERGENCY - I need immediate legal assistance. Please respond ASAP.";
    window.open(`https://wa.me/971509014120?text=${encodeURIComponent(message)}`, '_blank');
    (window as any).trackConversion?.('emergency_whatsapp');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-red-600 text-white p-4 shadow-2xl md:hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-300" />
          <span className="font-bold text-sm">Legal Emergency?</span>
        </div>
        <button onClick={handleDismiss} className="text-white/80">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex gap-3">
        <Button 
          onClick={handleCall}
          className="flex-1 bg-white text-red-600 hover:bg-gray-100 text-sm py-2"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        <Button 
          onClick={handleWhatsApp}
          className="flex-1 bg-green-600 text-white hover:bg-green-700 text-sm py-2"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default MobileEmergencyOverlay;
