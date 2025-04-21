
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LegalServiceSchema from '@/components/ui/schema-markup';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PracticeAreasSection />
        <TeamSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* SEO Schema Markup */}
      <LegalServiceSchema />
    </div>
  );
};

export default Index;
