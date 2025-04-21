
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
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg py-2 shadow-lg' 
        : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Logo size="medium" className="transition-all duration-300" />
          <span className="text-white font-playfair font-bold text-xl md:text-2xl">Precedential Law</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-precedential-gold transition-colors relative group text-sm font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-precedential-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-4 py-2 rounded-lg bg-precedential-gold text-precedential-black font-medium hover:bg-precedential-goldLight transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/95 backdrop-blur-lg absolute w-full left-0 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-precedential-gold py-2 transition-colors border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 py-3 text-center rounded-lg bg-precedential-gold text-precedential-black font-medium hover:bg-precedential-goldLight transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
