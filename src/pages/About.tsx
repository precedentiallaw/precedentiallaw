
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import EnhancedAbout from '@/components/EnhancedAbout';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import { MultilingualBanner } from '@/components/MultilingualSupport';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Precedential Law | Dubai's Premier Legal Consultancy | Professional Legal Services UAE</title>
        <meta name="description" content="Learn about Precedential Law - Dubai's trusted legal consultancy. Our history, values, and commitment to providing exceptional legal services across the UAE since 2015." />
        <meta name="keywords" content="about precedential law, dubai legal consultancy, uae lawyers, legal services dubai, law firm history, professional legal team" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
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
              A premier legal consultancy dedicated to setting the standard in Dubai's legal landscape
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
