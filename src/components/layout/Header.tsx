
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
          ? 'bg-white/95 backdrop-blur-xl shadow-elegant border-b border-navy-100/50' 
          : 'bg-transparent'
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
              className="btn-premium"
            >
              Schedule Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy-700 hover:text-gold-600 transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-premium pt-24">
          <nav className="space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-medium text-navy-900 hover:text-gold-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 space-y-6">
              <a
                href="tel:+971509014120"
                className="flex items-center space-x-3 text-navy-600 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+971 50 901 4120</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-premium block text-center"
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
