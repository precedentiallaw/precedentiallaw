
import React, { useState } from 'react';
import { MessageSquare, X, AlertTriangle, Briefcase, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmergencyMessage {
  id: string;
  title: string;
  message: string;
  icon: React.ComponentType<any>;
  urgency: 'Critical' | 'High' | 'Medium';
}

const EnhancedWhatsAppButton: React.FC<{ phoneNumber: string }> = ({ phoneNumber }) => {
  const [showMenu, setShowMenu] = useState(false);

  const emergencyMessages: EmergencyMessage[] = [
    {
      id: 'general',
      title: 'General Legal Emergency',
      message: '🚨 URGENT LEGAL EMERGENCY - I need immediate legal assistance. Please respond as soon as possible.',
      icon: AlertTriangle,
      urgency: 'Critical'
    },
    {
      id: 'criminal',
      title: 'Criminal Case / Arrest',
      message: '🚔 CRIMINAL EMERGENCY - I need immediate criminal defense assistance. Someone has been arrested or is facing criminal charges.',
      icon: AlertTriangle,
      urgency: 'Critical'
    },
    {
      id: 'business',
      title: 'Business Legal Crisis',
      message: '💼 BUSINESS LEGAL EMERGENCY - My company is facing an urgent legal issue that requires immediate attention.',
      icon: Briefcase,
      urgency: 'High'
    },
    {
      id: 'family',
      title: 'Family Law Emergency',
      message: '👨‍👩‍👧‍👦 FAMILY LEGAL EMERGENCY - I need urgent help with a family law matter (divorce, custody, domestic violence).',
      icon: Heart,
      urgency: 'High'
    },
    {
      id: 'property',
      title: 'Property / Real Estate',
      message: '🏠 PROPERTY LEGAL ISSUE - I need immediate assistance with a real estate or rental dispute matter.',
      icon: Home,
      urgency: 'Medium'
    }
  ];

  const handleMessageSelect = (message: EmergencyMessage) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.message)}`;
    window.open(whatsappUrl, '_blank');
    (window as any).trackConversion?.('whatsapp_emergency', { type: message.id });
    setShowMenu(false);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'border-l-red-500 bg-red-50';
      case 'High': return 'border-l-orange-500 bg-orange-50';
      default: return 'border-l-yellow-500 bg-yellow-50';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Message Menu */}
      {showMenu && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border mb-2 max-h-96 overflow-y-auto">
          <div className="p-4 border-b bg-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-800">Quick Legal Help</h3>
              <button onClick={() => setShowMenu(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-1">Choose your situation for faster response</p>
          </div>
          
          <div className="p-2">
            {emergencyMessages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => handleMessageSelect(msg)}
                className={`w-full p-3 text-left hover:bg-gray-50 rounded-lg border-l-4 ${getUrgencyColor(msg.urgency)} mb-2 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <msg.icon className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{msg.title}</div>
                    <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {msg.message.substring(0, 60)}...
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    msg.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                    msg.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {msg.urgency}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-4 border-t bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              Available 24/7 for legal emergencies • Average response: 5 minutes
            </p>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <Button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center relative"
      >
        <MessageSquare size={24} />
        
        {/* Notification dot for emergency availability */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">!</span>
        </div>
      </Button>
    </div>
  );
};

export default EnhancedWhatsAppButton;
