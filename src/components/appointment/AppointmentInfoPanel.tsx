
import React from 'react';
import { Clock, Shield, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppointmentInfoPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Consultation Info */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold mb-4">What to Expect</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <Clock className="w-4 h-4 text-precedential-gold mr-2 mt-0.5" />
            <div>
              <p className="font-medium">45-60 minute consultation</p>
              <p className="text-gray-600">Comprehensive review of your legal matter</p>
            </div>
          </li>
          <li className="flex items-start">
            <Shield className="w-4 h-4 text-precedential-gold mr-2 mt-0.5" />
            <div>
              <p className="font-medium">Confidential & Privileged</p>
              <p className="text-gray-600">All discussions fully protected by law</p>
            </div>
          </li>
          <li className="flex items-start">
            <User className="w-4 h-4 text-precedential-gold mr-2 mt-0.5" />
            <div>
              <p className="font-medium">Expert Attorney Match</p>
              <p className="text-gray-600">Paired with specialist in your area</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Legal Matters</h3>
        <p className="text-sm text-red-700 mb-4">
          For urgent legal situations requiring immediate attention, contact us directly.
        </p>
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          <Phone className="w-4 h-4 mr-2" />
          Emergency Line: +971 50 901 4120
        </Button>
      </div>

      {/* Office Hours */}
      <div className="bg-precedential-gold/10 p-6 rounded-xl">
        <h3 className="text-lg font-bold mb-3">Office Hours</h3>
        <div className="text-sm space-y-1">
          <p><strong>Monday - Thursday:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>Friday:</strong> 9:00 AM - 12:30 PM</p>
          <p><strong>Weekend:</strong> By appointment only</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfoPanel;
