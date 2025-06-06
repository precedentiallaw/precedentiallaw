
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
import EnhancedTestimonials from '@/components/EnhancedTestimonials';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import LegalInsights from '@/components/LegalInsights';

// Sample FAQ data for schema - would be dynamically populated in a real app
const faqData = [
  {
    question: "What distinguishes Precedential Law from other legal firms in Dubai?",
    answer: "Precedential Law sets the standard for legal excellence in the UAE through our sophisticated approach to complex legal matters, deep expertise in UAE law, and unwavering commitment to achieving exceptional results for our distinguished clientele."
  },
  {
    question: "How can I schedule a confidential consultation with your legal team?",
    answer: "You can schedule a confidential consultation by calling us at +971509014120, using our secure contact form, or messaging us on WhatsApp. We offer initial consultations to understand your legal needs and discuss how our expertise can serve your interests."
  },
  {
    question: "Do you handle high-value commercial litigation and complex business matters?",
    answer: "Yes, Precedential Law specializes in sophisticated commercial litigation, complex business transactions, and high-stakes legal matters. Our expertise spans DIFC Courts, ADGM Courts, and UAE Federal Court systems, handling matters worth millions of dirhams."
  },
  {
    question: "What makes your approach to UAE legal matters distinctive?",
    answer: "Our approach combines deep understanding of UAE Federal Law, DIFC regulations, and international best practices. We don't just follow established procedures—we set new standards, establishing precedents that define excellence in legal representation across the Emirates."
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
        <title>UAE's Premier Legal Authority | Precedential Law Dubai</title>
        <meta name="description" content="Distinguished legal counsel serving corporations and high-net-worth individuals across Dubai and the UAE. Expert representation in complex commercial litigation, sophisticated business structuring, and intricate family law matters. Setting the precedential standard in legal excellence." />
        <meta name="keywords" content="premier Dubai legal services, UAE law firm, sophisticated legal counsel, commercial litigation Dubai, high-net-worth legal representation, complex business law UAE, distinguished legal consultancy, precedential legal standards, Dubai legal authority, UAE corporate law" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="UAE's Premier Legal Authority | Precedential Law Dubai" />
        <meta property="og:description" content="Distinguished legal counsel for corporations and high-net-worth individuals. Expert representation in complex commercial litigation and sophisticated legal matters across Dubai and the UAE." />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UAE's Premier Legal Authority | Precedential Law Dubai" />
        <meta name="twitter:description" content="Distinguished legal counsel for corporations and high-net-worth individuals across Dubai and the UAE." />
        
        {/* Preload critical resources */}
        <link rel="preload" fetchPriority="high" as="image" href="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" type="image/png" />
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
          <CaseStudyShowcase />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <AwardsSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <PracticeAreasSection />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <EnhancedTestimonials />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <LegalInsights />
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
