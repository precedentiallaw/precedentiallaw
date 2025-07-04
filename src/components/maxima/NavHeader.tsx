
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const NavHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      // Opening animation
      gsap.set('.mobile-menu-overlay', { display: 'flex' });
      gsap.fromTo('.mobile-menu-overlay', 
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.4,
          ease: "power2.out"
        }
      );
      
      // Stagger animation for menu items
      gsap.fromTo('.mobile-menu-item', 
        { 
          opacity: 0, 
          y: 50,
          rotationX: 90
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          duration: 0.6, 
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    } else {
      // Closing animation
      gsap.to('.mobile-menu-item', {
        opacity: 0,
        y: -30,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in"
      });
      
      gsap.to('.mobile-menu-overlay', {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set('.mobile-menu-overlay', { display: 'none' });
        }
      });
    }
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="header-logo">
          <img 
            src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png" 
            alt="Precedential Law"
            width={48}
            height={48}
            style={{ transition: 'all 0.3s ease' }}
          />
        </Link>
        
        <nav className="nav__list">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="burger" onClick={toggleMobileMenu}>
          <span style={{ 
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            background: isMobileMenuOpen ? '#D4AF37' : 'var(--text-primary)'
          }}></span>
          <span style={{ 
            opacity: isMobileMenuOpen ? 0 : 1,
            background: 'var(--text-primary)'
          }}></span>
          <span style={{ 
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
            background: isMobileMenuOpen ? '#D4AF37' : 'var(--text-primary)'
          }}></span>
        </div>
      </header>

      {/* Enhanced Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        style={{ display: 'none' }}
        ref={mobileMenuRef}
      >
        <div className="mobile-menu">
          <div className="mobile-menu-item">
            <Link to="/about" onClick={closeMobileMenu}>About</Link>
          </div>
          <div className="mobile-menu-item">
            <Link to="/services" onClick={closeMobileMenu}>Services</Link>
          </div>
          <div className="mobile-menu-item">
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </div>
          
          {/* Contact Info in Mobile Menu */}
          <div className="mobile-menu-item" style={{ marginTop: '3rem' }}>
            <div style={{ 
              color: '#999', 
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.6
            }}>
              <p>+971 50 901 4120</p>
              <p>info@precedentiallaw.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
