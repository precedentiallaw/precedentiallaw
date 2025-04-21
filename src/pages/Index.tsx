
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LegalServiceSchema from '@/components/ui/schema-markup';
import KeywordStrip from '@/components/KeywordStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import FloatingCTA from '@/components/FloatingCTA';
import StorySection from '@/components/StorySection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <KeywordStrip />
        <StorySection />
        <AboutSection />
        <WhyChooseUs />
        <PracticeAreasSection />
        <ContactSection />
      </main>
      
      <Footer />
      <FloatingCTA />
      
      {/* SEO Schema Markup */}
      <LegalServiceSchema />
    </div>
  );
};

export default Index;
