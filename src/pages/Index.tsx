
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
import LegalServiceSchema, { LocalBusinessSchema, FAQSchema } from '@/components/ui/schema-markup';
import KeywordStrip from '@/components/KeywordStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import FloatingCTA from '@/components/FloatingCTA';
import StorySection from '@/components/StorySection';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import ScrollReveal from '@/components/ScrollReveal';
import AwardsSection from '@/components/AwardsSection';
import AnalyticsTracking from '@/components/AnalyticsTracking';
import { OptimizedTeamProfiles, OptimizedTestimonials } from '@/components/PerformanceOptimization';
import LiveChat from '@/components/LiveChat';
import AppointmentBooking from '@/components/AppointmentBooking';

// Sample FAQ data for schema - would be dynamically populated in a real app
const faqData = [
  {
    question: "What legal services does Precedential Law offer in Dubai?",
    answer: "Precedential Law offers comprehensive legal services in Dubai including business law, family law, real estate law, immigration law, civil litigation, contract disputes, and more."
  },
  {
    question: "How can I schedule a consultation with a lawyer at Precedential Law?",
    answer: "You can schedule a consultation by calling us at +971509014120, using our contact form on the website, or messaging us on WhatsApp."
  },
  {
    question: "Do you offer legal services for both individuals and businesses?",
    answer: "Yes, Precedential Law provides legal services for both individuals and businesses across Dubai and the UAE."
  }
];

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
        <title>Premier Dubai Legal Services & Consultancy | Precedential Law</title>
        <meta name="description" content="Precedential Law offers expert legal services in Dubai including business law, family law, real estate, immigration, and civil litigation. Contact our experienced attorneys for professional legal advice and representation." />
        <meta name="keywords" content="Dubai legal services, UAE law firm, legal consultation Dubai, family law Dubai, business law firm Dubai, immigration lawyer UAE, real estate lawyer Dubai, legal representation UAE, civil litigation attorney Dubai, contract disputes UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Premier Dubai Legal Services & Consultancy | Precedential Law" />
        <meta property="og:description" content="Expert legal services in Dubai including business law, family law, real estate, immigration, and civil litigation. Professional legal advice and representation." />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premier Dubai Legal Services & Consultancy | Precedential Law" />
        <meta name="twitter:description" content="Expert legal services in Dubai including business law, family law, real estate, immigration, and civil litigation." />
        
        {/* Preload critical resources */}
        <link rel="preload" fetchpriority="high" as="image" href="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" type="image/png" />
      </Helmet>
      
      <AnalyticsTracking />
      <NavBar />
      
      <main className="flex-grow" id="main-content">
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
          <OptimizedTeamProfiles />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <AwardsSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <PracticeAreasSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <OptimizedTestimonials />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <AppointmentBooking />
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
      <LiveChat />
      <WhatsAppButton phoneNumber="971509014120" />
      
      <LegalServiceSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqData} />
    </div>
  );
};

export default Index;
