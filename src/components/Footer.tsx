
import React from 'react';
import Logo from './Logo';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-precedential-black text-white py-12 border-t border-precedential-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo variant="gold-on-black" size="small" />
              <span className="font-playfair font-bold text-xl">Precedential Law</span>
            </div>
            <p className="text-white/70 text-sm">
              Precedential Law delivers elite legal protection across Dubai, including family law, immigration, business, real estate, and criminal defense.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-precedential-gold hover:text-precedential-black transition-colors"
                aria-label="Follow us on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-precedential-gold hover:text-precedential-black transition-colors"
                aria-label="Follow us on Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-precedential-gold hover:text-precedential-black transition-colors"
                aria-label="Follow us on Twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-precedential-gold hover:text-precedential-black transition-colors"
                aria-label="Follow us on Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-precedential-gold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Practice Areas', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 hover:text-precedential-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-precedential-gold">Practice Areas</h4>
            <ul className="space-y-2">
              {['Corporate Law', 'Family Law', 'Criminal Defense', 'Real Estate', 'Immigration', 'Dispute Resolution', 'Personal Injury'].map((area) => (
                <li key={area}>
                  <a href="#practice-areas" className="text-white/70 hover:text-precedential-gold transition-colors text-sm">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-precedential-gold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <span className="text-precedential-gold mr-2">📍</span>
                <span className="text-white/70">City Tower 2 - Sheikh Zayed Rd - Trade Centre - Trade Centre 1 - Dubai</span>
              </p>
              <p className="flex items-start">
                <span className="text-precedential-gold mr-2">📱</span>
                <a href="tel:+971509014120" className="text-white/70 hover:text-precedential-gold transition-colors">
                  +971 50 901 4120
                </a>
              </p>
              <p className="flex items-start">
                <span className="text-precedential-gold mr-2">✉️</span>
                <a href="mailto:info@precedentiallaw.com" className="text-white/70 hover:text-precedential-gold transition-colors">
                  info@precedentiallaw.com
                </a>
              </p>
              <p className="flex items-start">
                <span className="text-precedential-gold mr-2">⏰</span>
                <span className="text-white/70">Sunday - Thursday: 9am - 6pm</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Precedential Law. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
