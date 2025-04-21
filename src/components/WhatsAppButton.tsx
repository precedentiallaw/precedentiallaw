
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hello, I need legal assistance"
}) => {
  const isMobile = useIsMobile();
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all hover:bg-green-700 ${
        isMobile 
          ? 'bottom-20 right-4 h-12 w-12'
          : 'bottom-8 right-8 h-14 w-14'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className={`${isMobile ? 'h-6 w-6' : 'h-7 w-7'}`} />
    </a>
  );
};

export default WhatsAppButton;
