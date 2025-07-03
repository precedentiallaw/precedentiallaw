
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const MaximaFooter: React.FC = () => {
  return (
    <footer className="footer" data-scroll-section>
      <div className="container">
        <div className="footer-content">
          {/* Logo and About */}
          <div className="footer-section">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"
                alt="Precedential Law Logo"
                width={32}
                height={32}
              />
              <span className="font-playfair font-bold text-xl text-gold-gradient">Precedential Law</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premier legal consultancy in Dubai delivering expert guidance across business law, 
              family law, immigration, real estate, and civil litigation. Your shield in UAE's legal landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-gradient hover:text-precedential-black transition-colors"
                aria-label="Follow us on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-gradient hover:text-precedential-black transition-colors"
                aria-label="Follow us on Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-gradient hover:text-precedential-black transition-colors"
                aria-label="Follow us on Twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="footer-section">
            <h4 className="footer-title">Practice Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/services/business-law" className="footer-link">Business Law</Link></li>
              <li><Link to="/services/family-law" className="footer-link">Family Law</Link></li>
              <li><Link to="/services/immigration-law" className="footer-link">Immigration Law</Link></li>
              <li><Link to="/services/real-estate-law" className="footer-link">Real Estate Law</Link></li>
              <li><Link to="/services/civil-litigation" className="footer-link">Civil Litigation</Link></li>
              <li><Link to="/services/divorce-lawyers-dubai" className="footer-link">Divorce Law</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-gradient mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  City Tower 2 - Sheikh Zayed Road<br />
                  Trade Centre - Dubai, UAE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-gradient flex-shrink-0" />
                <a href="tel:+971509014120" className="footer-link">
                  +971 50 901 4120
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-gradient flex-shrink-0" />
                <a href="mailto:info@precedentiallaw.com" className="footer-link">
                  info@precedentiallaw.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-gradient mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Monday - Thursday: 9:00 AM - 5:00 PM<br />
                  Friday: 9:00 AM - 12:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Precedential Law. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MaximaFooter;
