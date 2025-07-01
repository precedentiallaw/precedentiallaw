
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import PremiumHero from '@/components/sections/PremiumHero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import HowItWorksSection from '@/components/HowItWorksSection';
import ModernWhyChooseUs from '@/components/ModernWhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileCTA from '@/components/MobileCTA';
import { LegalServiceSchema, FAQSchema, LocalBusinessSchema, OrganizationSchema } from '@/components/ui/enhanced-schema-markup';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import ExpatLegalEmergencySection from '@/components/ExpatLegalEmergencySection';
import MobileEmergencyOverlay from '@/components/MobileEmergencyOverlay';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import DownloadableGuides from '@/components/DownloadableGuides';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import AnalyticsTracking from '@/components/AnalyticsTracking';
import { WebVitalsMonitor, ServiceWorkerRegistration } from '@/components/AdvancedPerformanceOptimization';

const Index: React.FC = () => {
  // FAQ data for schema markup
  const faqData = [
    {
      question: "What legal services does Precedential Law provide in the UAE?",
      answer: "We provide comprehensive legal services including UAE business law, family law and divorce, real estate law, immigration and visa services, civil litigation, criminal defense advisory, employment law, and DIFC wills for expatriates and UAE nationals."
    },
    {
      question: "Do you provide legal services for expatriates living in the UAE?",
      answer: "Yes, we specialize in providing legal services for expatriates living in the UAE, including family law matters, visa and immigration issues, property transactions, employment law, and estate planning with DIFC wills."
    },
    {
      question: "What areas of the UAE do you serve?",
      answer: "We serve clients throughout the UAE including Dubai, Abu Dhabi, Sharjah, and all other emirates. Our office is located in Dubai but we handle cases across the entire UAE."
    },
    {
      question: "How can I schedule a consultation with Precedential Law?",
      answer: "You can schedule a consultation by calling +971509014120, sending a WhatsApp message, emailing info@precedentiallaw.com, or using our online contact form. We offer both in-person and virtual consultations."
    }
  ];

  // Enhanced structured data for homepage
  const legalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "url": "https://precedentiallaw.com",
    "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
    "description": "UAE-based legal consultancy providing expert support in family law, business law, immigration, and litigation for expats and locals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Tower 2 - Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971509014120",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Arabic"]
    },
    "areaServed": "AE",
    "sameAs": [
      "https://www.linkedin.com/company/precedentiallaw",
      "https://www.facebook.com/precedentiallaw"
    ]
  };

  return (
    <div className="min-h-screen bg-premium-gradient">
      <Helmet>
        <title>Premier Legal Consultancy UAE | Expert Legal Services Dubai | Precedential Law</title>
        <meta name="description" content="Precedential Law offers premier legal consultancy services in the UAE. Expert legal guidance for families, businesses, and individuals across Dubai and the Emirates." />
        <meta name="keywords" content="legal consultancy UAE, premier law firm Dubai, family lawyer UAE, business legal services, immigration legal advice, UAE legal experts, expat legal services" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:title" content="Premier Legal Consultancy UAE | Expert Legal Services Dubai" />
        <meta property="og:description" content="Expert legal consultancy services in the UAE for families, businesses, and individuals. Premier legal guidance across Dubai and the Emirates." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:site_name" content="Precedential Law" />
        <meta property="og:locale" content="en_US" />

        {/* Enhanced Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://precedentiallaw.com/" />
        <meta property="twitter:title" content="Premier Legal Consultancy UAE | Expert Legal Services Dubai" />
        <meta property="twitter:description" content="Expert legal consultancy services in the UAE for families, businesses, and individuals." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />

        {/* PWA and Mobile Optimization */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Precedential Law" />
        <link rel="apple-touch-icon" href="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png" />

        {/* Performance Optimization */}
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png"
          type="image/png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(legalServiceStructuredData)}
        </script>
      </Helmet>
      
      {/* Enhanced Schema Markup */}
      <LegalServiceSchema />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <FAQSchema faqs={faqData} />
      
      {/* Performance and Analytics */}
      <PerformanceMonitor />
      <WebVitalsMonitor />
      <ServiceWorkerRegistration />
      <AnalyticsTracking />
      
      {/* Main Content with semantic HTML */}
      <header>
        <Header />
      </header>
      
      <main id="main-content" role="main">
        <PremiumHero />
        <ExpatLegalEmergencySection />
        <ServicesShowcase />
        <HowItWorksSection />
        <DownloadableGuides />
        <ModernWhyChooseUs />
        <FAQ />
        <NewsletterSubscription />
        <ContactSection />
        <FinalCTA />
      </main>
      
      <Footer />
      
      {/* Interactive Elements */}
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
      <MobileCTA />
      <PWAInstallPrompt />
      <MobileEmergencyOverlay />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
