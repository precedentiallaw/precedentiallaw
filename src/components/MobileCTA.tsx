
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const MobileCTA: React.FC = () => {
  return (
    <div className="mobile-cta md:hidden">
      <div className="flex items-center space-x-3">
        <Link
          to="/contact"
          className="flex-1 bg-white text-navy-700 px-4 py-3 rounded-lg font-medium text-center text-sm"
        >
          Book Consultation
        </Link>
        <a
          href="tel:+971509014120"
          className="bg-gold-500 text-navy-900 px-4 py-3 rounded-lg font-medium flex items-center space-x-2 text-sm"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
