
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-navy-100/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <Logo variant="navy-gold" size="medium" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'text-navy-900'
                    : 'text-navy-600 hover:text-navy-900'
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === link.href ? 'after:w-full' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+971509014120"
              className="flex items-center space-x-2 text-navy-600 hover:text-gold-600 transition-all duration-300 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+971 50 901 4120</span>
            </a>
            <Link
              to="/contact"
              className="btn-premium bg-navy-800 hover:bg-navy-900 text-white"
            >
              Schedule Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button - Fixed contrast */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy-800 hover:text-gold-600 transition-colors duration-300 bg-white/90 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed visibility and contrast */}
      <div 
        className={`lg:hidden fixed inset-0 bg-navy-900/95 backdrop-blur-lg z-40 transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-premium pt-24 h-full">
          <nav className="space-y-8 flex flex-col h-full">
            <div className="text-center mb-8">
              <Logo variant="white-gold" size="large" />
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-medium text-white hover:text-gold-400 transition-colors duration-300 text-center py-2"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-8 space-y-6 text-center">
              <a
                href="tel:+971509014120"
                className="flex items-center justify-center space-x-3 text-white text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+971 50 901 4120</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-premium bg-gold-600 hover:bg-gold-700 text-white block text-center mx-auto max-w-xs"
              >
                Schedule Legal Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
