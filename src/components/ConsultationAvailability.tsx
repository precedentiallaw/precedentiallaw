
import React, { useState, useEffect } from 'react';
import { Clock, Users, CheckCircle, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AvailabilityStatus {
  isAvailable: boolean;
  nextSlot: string;
  consultationsToday: number;
  averageWaitTime: string;
}

const ConsultationAvailability: React.FC = () => {
  const [status, setStatus] = useState<AvailabilityStatus>({
    isAvailable: true,
    nextSlot: 'Next 15 minutes',
    consultationsToday: 23,
    averageWaitTime: '12 minutes'
  });

  useEffect(() => {
    // Simulate real-time availability updates
    const updateAvailability = () => {
      const hour = new Date().getHours();
      const isBusinessHours = hour >= 9 && hour < 17;
      const consultationsToday = Math.floor(Math.random() * 30) + 15;
      
      setStatus({
        isAvailable: isBusinessHours,
        nextSlot: isBusinessHours ? 'Next 15 minutes' : 'Tomorrow 9:00 AM',
        consultationsToday,
        averageWaitTime: isBusinessHours ? `${Math.floor(Math.random() * 20) + 5} minutes` : 'Next business day'
      });
    };

    updateAvailability();
    const interval = setInterval(updateAvailability, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+971509014120';
    (window as any).trackConversion?.('consultation_call');
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'd like to book a free legal consultation. Please let me know your next available slot.";
    window.open(`https://wa.me/971509014120?text=${encodeURIComponent(message)}`, '_blank');
    (window as any).trackConversion?.('consultation_whatsapp');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg max-w-sm">
      <div className="flex items-center gap-3 mb-4">
        {status.isAvailable ? (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-green-600">Available Now</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-orange-600">After Hours</span>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">Next slot: </span>
          <span className="font-semibold">{status.nextSlot}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">Consultations today: </span>
          <span className="font-semibold">{status.consultationsToday}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">Avg. wait time: </span>
          <span className="font-semibold">{status.averageWaitTime}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Link to="/contact">
          <Button 
            className={`w-full ${
              status.isAvailable 
                ? 'bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            {status.isAvailable ? 'Book Free Consultation' : 'Schedule for Tomorrow'}
          </Button>
        </Link>

        <div className="flex gap-2">
          <Button
            onClick={handleCall}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            size="sm"
            className="flex-1 text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
          >
            <MessageSquare className="w-4 h-4 mr-1" />
            WhatsApp
          </Button>
        </div>
      </div>

      {!status.isAvailable && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700 font-medium">Legal Emergency?</p>
          <p className="text-xs text-red-600">Call +971 50 901 4120 for 24/7 support</p>
        </div>
      )}
    </div>
  );
};

export default ConsultationAvailability;
