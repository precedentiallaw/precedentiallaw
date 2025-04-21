
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-precedential-black text-white py-12 border-t border-precedential-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="small" />
              <span className="font-playfair font-bold text-xl">Precedential Law</span>
            </div>
            <p className="text-white/70 text-sm">
              Setting a precedential standard in legal services across Dubai and the UAE.
            </p>
            <div className="flex space-x-4 pt-2">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-precedential-gold hover:text-precedential-black transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-precedential-gold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Practice Areas', 'Our Team', 'Contact'].map((link) => (
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
              {['Corporate Law', 'Family Law', 'Criminal Defense', 'Real Estate', 'Intellectual Property', 'Litigation'].map((area) => (
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
                <span className="text-white/70">Business Bay, Dubai, United Arab Emirates</span>
              </p>
              <p className="flex items-start">
                <span className="text-precedential-gold mr-2">📱</span>
                <a href="tel:+97144567890" className="text-white/70 hover:text-precedential-gold transition-colors">
                  +971 4 456 7890
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
