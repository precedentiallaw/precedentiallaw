import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
import ScrollReveal from '@/components/ScrollReveal';

const Index: React.FC = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta name="description" content="Precedential Law: Expert Dubai legal services & consultation. Top business law firm, family law, divorce & immigration lawyer Dubai. Setting the standard. Contact us." />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <ScrollReveal>
          <AchievementsSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <ServicesSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <KeywordStrip />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-left">
          <StorySection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-right">
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal animation="zoom-in">
          <WhyChooseUs />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <PracticeAreasSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <FAQ />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <ContactSection />
        </ScrollReveal>
        
        <ScrollReveal animation="zoom-in">
          <FinalCTA />
        </ScrollReveal>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
      
      <LegalServiceSchema />
    </div>
  );
};

export default Index;
