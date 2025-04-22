
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AchievementsSection from '@/components/AchievementsSection';
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
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <AchievementsSection />
        <ServicesSection />
        <KeywordStrip />
        <StorySection />
        <AboutSection />
        <WhyChooseUs />
        <PracticeAreasSection />
        <FAQ />
        <ContactSection />
        <FinalCTA />
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971501234567" />
      
      {/* SEO Schema Markup */}
      <LegalServiceSchema />
    </div>
  );
};

export default Index;
