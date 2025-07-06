
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  const toolsLinks = [
    { href: '/tools/track-case', label: 'Track Your Case' },
    { href: '/tools/travel-ban-check', label: 'Travel Ban Check' },
    { href: '/tools/arrest-warrant-check', label: 'Warrant Check' },
    { href: '/tools/police-station-guide', label: 'Police Station Guide' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-sm border-b border-gray-200' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800">Precedential</span>
              <span className="text-xl font-light text-amber-600 ml-1">Law</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200 ${
                  location.pathname === link.href ? 'text-amber-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200">
                Legal Tools
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {toolsLinks.map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:text-amber-600 hover:bg-gray-50"
                  >
                    {tool.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-slate-600">
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
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-amber-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-6 py-3 text-slate-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 mt-2 pt-2">
                <div className="px-6 py-2 text-sm font-medium text-slate-500">Legal Tools</div>
                {toolsLinks.map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="block px-6 py-2 text-sm text-slate-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {tool.label}
                  </Link>
                ))}
              </div>
              
              <div className="px-6 py-3 border-t border-gray-200 space-y-3">
                <a href="tel:+971509014120" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600">
                  <Phone className="w-4 h-4" />
                  <span>+971 50 901 4120</span>
                </a>
                <a href="mailto:info@precedentiallaw.com" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600">
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

export default Header;
