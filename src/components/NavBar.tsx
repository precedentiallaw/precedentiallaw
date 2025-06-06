
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: "Business & Corporate",
      services: [
        { name: "Business Law", href: "/services/business-law" },
        { name: "Corporate Law Dubai", href: "/services/corporate-law-dubai" },
        { name: "Commercial Litigation", href: "/services/commercial-litigation-dubai" },
        { name: "Contract Disputes", href: "/services/contract-disputes" },
        { name: "Employment Law UAE", href: "/services/employment-law-uae" },
      ]
    },
    {
      title: "Family & Personal",
      services: [
        { name: "Family Law", href: "/services/family-law" },
        { name: "Divorce Lawyers Dubai", href: "/services/divorce-lawyers-dubai" },
        { name: "DIFC Wills", href: "/services/difc-wills" },
        { name: "Civil Litigation", href: "/services/civil-litigation" },
      ]
    },
    {
      title: "Immigration & Visas",
      services: [
        { name: "Immigration Law", href: "/services/immigration-law" },
        { name: "Golden Visa Lawyers", href: "/services/golden-visa-lawyers" },
        { name: "UAE Company Formation", href: "/uae-company-formation" },
        { name: "Expat Legal Services", href: "/expat-legal-services-dubai" },
      ]
    }
  ];

  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
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
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <Logo 
            variant={isScrolled ? "gold-on-black" : "gold-on-black"} 
            size="medium" 
            className="transition-all duration-300" 
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {mainNavLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link to={link.href}>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-white/90 hover:text-precedential-gold",
                    location.pathname === link.href && "text-precedential-gold"
                  )}>
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/90 hover:text-precedential-gold">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] gap-3 p-6 md:grid-cols-3">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-3">
                      <h4 className="text-sm font-medium text-precedential-gold">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link to={service.href}>
                              <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm">
                                {service.name}
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link 
          to="/contact" 
          className="hidden md:block ml-2 px-4 py-2 rounded-lg bg-precedential-gold text-precedential-black font-medium hover:bg-precedential-goldLight transition-colors animate-fade-in"
        >
          Get Legal Help
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 z-50 animate-fade-in"
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
          'lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300',
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-6">
          <Logo variant="gold-on-black" size="medium" className="mb-8" />
          
          {mainNavLinks.map((link, index) => (
            <Link 
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-precedential-gold text-2xl font-playfair transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-precedential-gold text-2xl font-playfair transition-colors animate-fade-in"
          >
            Services
          </Link>
          
          <Link 
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 text-center rounded-lg bg-precedential-gold text-precedential-black font-medium hover:bg-precedential-goldLight transition-colors animate-fade-in"
          >
            Get Legal Help
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
