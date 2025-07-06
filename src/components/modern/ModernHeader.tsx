
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"
              alt="Precedential Law"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Precedential</span>
              <span className="text-xl font-light text-amber-600 ml-1">Law</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <a href="tel:+971509014120" className="flex items-center space-x-1 hover:text-amber-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+971 50 901 4120</span>
              </a>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
            <nav className="py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-3 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-3 border-t border-gray-100 space-y-3">
                <a href="tel:+971509014120" className="flex items-center space-x-2 text-gray-600 hover:text-amber-600">
                  <Phone className="w-4 h-4" />
                  <span>+971 50 901 4120</span>
                </a>
                <a href="mailto:info@precedentiallaw.com" className="flex items-center space-x-2 text-gray-600 hover:text-amber-600">
                  <Mail className="w-4 h-4" />
                  <span>info@precedentiallaw.com</span>
                </a>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Free Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ModernHeader;
