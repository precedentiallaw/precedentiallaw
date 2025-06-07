
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import EnhancedAbout from '@/components/EnhancedAbout';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import SEOHead from '@/components/SEOHead';
import { MultilingualBanner } from '@/components/MultilingualSupport';

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Precedential Law",
  "description": "Learn about Precedential Law - Dubai's premier legal consultancy with 9+ years of experience serving businesses and individuals across the UAE.",
  "url": "https://precedentiallaw.com/about",
  "mainEntity": {
    "@type": "LegalService",
    "name": "Precedential Law",
    "foundingDate": "2015",
    "description": "Premier legal consultancy in Dubai providing expert legal services across business law, family law, immigration, and civil litigation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Tower 2 - Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  }
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="About Precedential Law | Dubai's Premier Legal Consultancy | 9+ Years UAE Experience"
        description="Learn about Precedential Law - Dubai's trusted legal consultancy since 2015. Our history, values, and commitment to providing exceptional legal services across the UAE with 95% success rate."
        keywords="about precedential law, dubai legal consultancy history, uae lawyers experience, law firm values, professional legal team dubai, legal expertise uae"
        canonicalUrl="https://precedentiallaw.com/about"
        pageType="website"
        structuredData={aboutStructuredData}
      />
      
      <NavBar />
      <BreadcrumbNavigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Banner */}
        <div className="bg-precedential-black py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              About <span className="text-gold-gradient">Precedential Law</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg mb-8">
              A premier legal consultancy dedicated to setting the standard in Dubai's legal landscape since 2015
            </p>
            <ScrollReveal>
              <MultilingualBanner />
            </ScrollReveal>
          </div>
        </div>
        
        {/* Enhanced About Content */}
        <ScrollReveal>
          <EnhancedAbout />
        </ScrollReveal>
        
        {/* Legal Disclaimers */}
        <ScrollReveal>
          <LegalDisclaimer />
        </ScrollReveal>
        
        {/* Final CTA */}
        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default About;
