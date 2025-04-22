
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg py-2 shadow-lg' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 animate-fade-in">
          <Logo size="medium" className="transition-all duration-300" />
          <span className="text-white font-playfair font-bold text-xl md:text-2xl">
            Precedential Law
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-precedential-gold transition-colors relative group text-sm font-medium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-precedential-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-4 py-2 rounded-lg bg-precedential-gold text-precedential-black font-medium hover:bg-precedential-goldLight transition-colors animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 z-50 animate-fade-in"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300',
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-precedential-gold text-2xl font-playfair transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 text-center rounded-lg bg-precedential-gold text-precedential-black font-medium hover:bg-precedential-goldLight transition-colors animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
