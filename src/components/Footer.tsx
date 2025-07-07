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
    <footer className="bg-slate-900 text-white" aria-label="Footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Summary */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h2 className="text-xl font-bold">
                Precedential <span className="font-light text-amber-400">Law</span>
              </h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premier legal consultancy in Dubai offering strategic legal services to individuals and businesses across the UAE.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Legal Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Legal Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    to={tool.href}
                    className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>
                  City Tower 2, Sheikh Zayed Road<br />
                  Trade Centre, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+971509014120" className="hover:text-amber-400 transition">
                  +971 50 901 4120
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@precedentiallaw.com" className="hover:text-amber-400 transition">
                  info@precedentiallaw.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <p>Mon - Thu: 9:00 AM – 5:00 PM</p>
                  <p>Fri: 9:00 AM – 12:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Precedential Law. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-amber-400 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-amber-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 border-t border-gray-800 pt-6 text-xs text-gray-500 leading-relaxed">
            <strong>Legal Disclaimer:</strong> Information on this website is for general purposes only and does not constitute legal advice.
            Every legal matter is unique and requires tailored professional guidance.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
