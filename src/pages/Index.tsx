
import React, { useEffect } from 'react';
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
import LegalResourceCenter from '@/components/LegalResourceCenter';
import ServiceWorker from '@/components/ServiceWorker';
import SEOHead from '@/components/SEOHead';

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

// Comprehensive structured data for homepage
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://precedentiallaw.com/#legalservice",
      "name": "Precedential Law",
      "url": "https://precedentiallaw.com",
      "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
      "description": "Premier legal consultancy in Dubai providing expert legal services across business law, family law, immigration, real estate, and civil litigation.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "City Tower 2 - Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "",
        "addressCountry": "AE"
      },
      "telephone": "+971509014120",
      "email": "info@precedentiallaw.com",
      "areaServed": [
        {
          "@type": "Place",
          "name": "Dubai"
        },
        {
          "@type": "Place", 
          "name": "United Arab Emirates"
        }
      ],
      "serviceType": [
        "Business Law",
        "Corporate Law",
        "Family Law",
        "Divorce Law",
        "Immigration Law",
        "Real Estate Law",
        "Civil Litigation",
        "Criminal Defense",
        "Employment Law",
        "Contract Law"
      ],
      "openingHours": [
        "Mo-Th 09:00-17:00",
        "Fr 09:00-12:30"
      ],
      "priceRange": "$$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://precedentiallaw.com/#localbusiness",
      "name": "Precedential Law",
      "alternateName": "Precedential Law Dubai",
      "url": "https://precedentiallaw.com",
      "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
      "description": "Dubai's premier legal consultancy offering comprehensive legal services to businesses and individuals across the UAE.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "City Tower 2 - Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "telephone": "+971509014120",
      "email": "info@precedentiallaw.com",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "openingHours": [
        "Mo-Th 09:00-17:00",
        "Fr 09:00-12:30"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/precedential-law",
        "https://twitter.com/precedential_law"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://precedentiallaw.com/#website",
      "url": "https://precedentiallaw.com",
      "name": "Precedential Law - Dubai Legal Services",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://precedentiallaw.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

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
      <SEOHead
        title="Dubai's Premier Legal Authority | Precedential Law - UAE Lawyers | Business, Family, Immigration Law"
        description="UAE's leading legal consultancy serving corporations & high-net-worth individuals. Expert Dubai lawyers specializing in business law, golden visa, expat divorce, real estate, and complex commercial litigation. 15+ years UAE expertise, 95% success rate."
        keywords="Dubai lawyers, UAE legal services, business law Dubai, golden visa lawyer, expat divorce Dubai, immigration lawyer UAE, real estate law Dubai, commercial litigation, DIFC wills, UAE company formation, Dubai legal consultancy, family law UAE, corporate lawyer Dubai, legal advice UAE"
        canonicalUrl="https://precedentiallaw.com/"
        pageType="website"
        structuredData={homepageStructuredData}
      />
      
      <ServiceWorker />
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
        
        <ScrollReveal animation="fade-up">
          <LegalResourceCenter />
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
      
      <FAQSchema faqs={enhancedFaqData} />
    </div>
  );
};

export default Index;
