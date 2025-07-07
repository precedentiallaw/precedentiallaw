
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    { name: 'Business Law', href: '/services/business-law' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Immigration Law', href: '/services/immigration-law' },
    { name: 'Real Estate Law', href: '/services/real-estate-law' },
    { name: 'Civil Cases', href: '/services/civil-cases' },
    { name: 'Criminal Defense', href: '/services/criminal-defense' }
  ];

  const tools = [
    { name: 'Track Your Case', href: '/tools/track-case' },
    { name: 'Travel Ban Check', href: '/tools/travel-ban-check' },
    { name: 'Arrest Warrant Check', href: '/tools/arrest-warrant-check' },
    { name: 'Police Station Guide', href: '/tools/police-station-guide' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <span className="text-xl font-bold">Precedential</span>
                <span className="text-xl font-light text-amber-400 ml-1">Law</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier legal consultancy in Dubai providing comprehensive legal services 
              for individuals and businesses across the UAE.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Legal Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Legal Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Link 
                    to={tool.href} 
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  City Tower 2, Sheikh Zayed Road<br />
                  Trade Centre, Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+971509014120" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  +971 50 901 4120
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@precedentiallaw.com" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  info@precedentiallaw.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-amber-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <div>Mon - Thu: 9:00 AM - 5:00 PM</div>
                  <div>Fri: 9:00 AM - 12:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Precedential Law. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. 
              Each legal situation is unique and requires individual assessment. Precedential Law does not guarantee specific outcomes. 
              Consultation with a qualified attorney is recommended for specific legal matters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
