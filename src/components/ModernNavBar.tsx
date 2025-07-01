
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const ModernNavBar: React.FC = () => {
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
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <Logo variant="black-on-white" size="medium" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-gold-600'
                    : 'text-navy-700 hover:text-gold-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+971509014120"
              className="flex items-center space-x-2 text-navy-600 hover:text-gold-600 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+971 50 901 4120</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary text-sm px-6 py-3"
            >
              Book a Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom pt-20">
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-medium text-navy-900 hover:text-gold-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <a
                href="tel:+971509014120"
                className="flex items-center space-x-3 text-navy-600"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">+971 50 901 4120</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary inline-block w-full text-center"
              >
                Book a Legal Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ModernNavBar;
