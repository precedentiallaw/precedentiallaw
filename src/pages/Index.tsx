
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
import ScrollReveal from '@/components/ScrollReveal';
import AwardsSection from '@/components/AwardsSection';
import AnalyticsTracking from '@/components/AnalyticsTracking';
import LiveChat from '@/components/LiveChat';
import AppointmentBooking from '@/components/AppointmentBooking';
import EnhancedTestimonials from '@/components/EnhancedTestimonials';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import LegalInsights from '@/components/LegalInsights';
import LegalInsightsBlog from '@/components/LegalInsightsBlog';
import InteractiveLegalTools from '@/components/InteractiveLegalTools';
import AdvancedFAQ from '@/components/AdvancedFAQ';

// Enhanced FAQ data optimized for GenAI search
const enhancedFaqData = [
  {
    question: "How do I get divorced in Dubai as an expat in 2024?",
    answer: "Expatriate divorce in Dubai follows Federal Decree-Law No. 41 of 2022, allowing non-Muslims to obtain divorce under their home country law or through UAE civil courts. The process involves filing a petition, mandatory mediation, asset/custody discussions, and final decree issuance. Timeline: 4-12 months depending on complexity. DIFC Courts may have jurisdiction for DIFC-registered marriages. Immediate legal consultation recommended for jurisdiction strategy."
  },
  {
    question: "What are the UAE Golden Visa legal requirements for 2024?",
    answer: "UAE Golden Visa 2024 requires meeting criteria in: 1) Investment (AED 2M real estate/bank deposit, AED 500K company capital), 2) Professionals (PhD, doctors, engineers with licenses), 3) Entrepreneurs (innovative startups), 4) Students (outstanding academics). Provides 10-year renewable residence, family sponsorship, multiple entry, 100% business ownership. Processing: 30-60 days through ICP/GDRFA."
  },
  {
    question: "What's the difference between UAE mainland company vs free zone company setup?",
    answer: "Mainland: 100% foreign ownership (most activities), UAE market access, government contracts, 9% Corporate Tax above AED 375K. Free Zone: 100% foreign ownership guaranteed, restricted trading, international focus, potential 0% Corporate Tax, no local agent. Choose mainland for UAE market; free zone for international trading and tax advantages."
  },
  {
    question: "Can I be arrested for bounced cheques in UAE 2024?",
    answer: "Under amended Commercial Transactions Law 2022, bounced cheques due to insufficient funds are largely decriminalized. Criminal liability remains for: closed account cheques, fraudulent intent, bad faith practices. Civil remedy: bounced cheque as 'executive title' for direct court enforcement. Criminal cases still apply if fraud/deception proven."
  },
  {
    question: "How much does business setup cost in Dubai 2024?",
    answer: "Dubai business setup costs: Mainland Trading (AED 25K-45K total), Free Zone DMCC/DIFC (AED 35K-85K), Professional License (AED 20K-35K). Includes license fees, visas, office, documentation. Ongoing: annual renewals (70% initial fee), visa renewals, compliance. Free zones higher initially but potential tax advantages."
  },
  {
    question: "What are tenant rights in Dubai rental disputes?",
    answer: "Dubai tenant rights under Law 26/2007 & RERA: Rent protection (max increases based on RERA index), eviction protection (12-24 month notices required), maintenance rights (landlord handles major repairs), deposit refund (14 days), dispute resolution through RDC online (3.5% annual rent fee)."
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
        <title>Dubai's Premier Legal Authority | Precedential Law - UAE Lawyers | Business, Family, Immigration Law</title>
        <meta name="description" content="UAE's leading legal consultancy serving corporations & high-net-worth individuals. Expert Dubai lawyers specializing in business law, golden visa, expat divorce, real estate, and complex commercial litigation. 15+ years UAE expertise, 95% success rate." />
        <meta name="keywords" content="Dubai lawyers, UAE legal services, business law Dubai, golden visa lawyer, expat divorce Dubai, immigration lawyer UAE, real estate law Dubai, commercial litigation, DIFC wills, UAE company formation, Dubai legal consultancy, family law UAE, corporate lawyer Dubai, legal advice UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        {/* Enhanced Open Graph tags for social sharing */}
        <meta property="og:title" content="Dubai's Premier Legal Authority | Precedential Law - Expert UAE Lawyers" />
        <meta property="og:description" content="Distinguished legal counsel for corporations and high-net-worth individuals. Expert representation in business law, golden visa, divorce, and commercial litigation across Dubai and UAE." />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@precedential_law" />
        <meta name="twitter:title" content="Dubai's Premier Legal Authority | Precedential Law" />
        <meta name="twitter:description" content="Expert UAE lawyers for business law, golden visa, divorce, and commercial litigation. 15+ years expertise, 95% success rate." />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Precedential Law" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo-targeting */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Language and localization */}
        <meta name="language" content="English" />
        <meta http-equiv="content-language" content="en-us" />
        
        {/* Preload critical resources for performance */}
        <link rel="preload" fetchPriority="high" as="image" href="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" type="image/png" />
        <link rel="preload" as="font" href="/fonts/playfair-display.woff2" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Additional structured data hints */}
        <meta name="theme-color" content="#d4af37" />
        <meta name="apple-mobile-web-app-title" content="Precedential Law" />
        <meta name="application-name" content="Precedential Law" />
        
        {/* Enhanced mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
        
        <ScrollReveal animation="fade-up">
          <InteractiveLegalTools />
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
          <LegalInsightsBlog />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <LegalInsights />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <AdvancedFAQ />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up">
          <AppointmentBooking />
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
      <FAQSchema faqs={enhancedFaqData} />
    </div>
  );
};

export default Index;
