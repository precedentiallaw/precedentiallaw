
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const ModernFooter: React.FC = () => {
  const quickLinks = [
    { name: 'Business Law', href: '#services' },
    { name: 'Family Law', href: '#services' },
    { name: 'Immigration Law', href: '#services' },
    { name: 'Real Estate Law', href: '#services' },
    { name: 'Civil Litigation', href: '#services' },
    { name: 'Legal Documentation', href: '#services' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"
                alt="Precedential Law"
                className="h-10 w-auto"
              />
              <div>
                <span className="text-2xl font-bold">Precedential</span>
                <span className="text-2xl font-light text-amber-400 ml-1">Law</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Premier legal consultancy in Dubai providing expert guidance across business law, 
              family law, immigration, and more. Your trusted legal shield in the UAE.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+971509014120" className="hover:text-white transition-colors">
                  +971 50 901 4120
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@precedentiallaw.com" className="hover:text-white transition-colors">
                  info@precedentiallaw.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p>City Tower 2, Sheikh Zayed Road</p>
                  <p>Trade Centre, Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Monday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p>Friday: 9:00 AM - 12:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Legal Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Legal Information</h4>
            <ul className="space-y-3 mb-6">
              {legalPages.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <h5 className="font-semibold text-white">Emergency Legal Support</h5>
              <p className="text-gray-400 text-sm">
                For urgent legal matters requiring immediate attention, 
                call our emergency consultation line.
              </p>
              <a 
                href="tel:+971509014120"
                className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                Emergency: +971 50 901 4120
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Precedential Law. All rights reserved. Licensed legal consultancy in Dubai, UAE.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Licensed by UAE Ministry of Justice</span>
              <span>•</span>
              <span>Regulated Practice</span>
              <span>•</span>
              <span>Professional Indemnity Insured</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong className="text-gray-300">Legal Disclaimer:</strong> The information provided on this website 
              is for general informational purposes only and does not constitute legal advice. Every legal situation 
              is unique, and you should consult with a qualified attorney for advice specific to your circumstances. 
              Precedential Law is a licensed legal consultancy operating under UAE jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
