
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const NavHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    if (!isMobileMenuOpen) {
      // Animate menu items in with stagger
      gsap.fromTo('.mobile-menu-item', 
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          stagger: 0.1,
          delay: 0.2
        }
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-logo">
          <img 
            src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png" 
            alt="Precedential Law"
            width={40}
            height={40}
          />
        </div>
        
        <nav className="nav__list">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            About
          </a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            Services
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact
          </a>
        </nav>

        <div className="burger" onClick={toggleMobileMenu}>
          <span style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }}></span>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-item">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </div>
            <div className="mobile-menu-item">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
            </div>
            <div className="mobile-menu-item">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavHeader;
