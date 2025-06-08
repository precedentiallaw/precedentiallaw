
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import EnhancedTestimonials from '@/components/EnhancedTestimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import LegalServiceSchema from '@/components/ui/schema-markup';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import PerformanceMonitor from '@/components/PerformanceMonitor';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Precedential Law - Premier Dubai Legal Consultancy | Expert Legal Services UAE</title>
        <meta name="description" content="Leading Dubai law firm providing expert legal services across business law, family law, real estate, immigration, and commercial litigation. Schedule your consultation today." />
        <meta name="keywords" content="Dubai law firm, legal services UAE, business lawyer Dubai, family law Dubai, divorce lawyer Dubai, immigration lawyer UAE, real estate lawyer Dubai, commercial litigation" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:title" content="Precedential Law - Premier Dubai Legal Consultancy" />
        <meta property="og:description" content="Expert legal services in Dubai and UAE. Comprehensive business law, family law, and litigation support." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:site_name" content="Precedential Law" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://precedentiallaw.com/" />
        <meta property="twitter:title" content="Precedential Law - Premier Dubai Legal Consultancy" />
        <meta property="twitter:description" content="Expert legal services in Dubai and UAE. Comprehensive business law, family law, and litigation support." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Precedential Law" />
        <link rel="apple-touch-icon" href="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png"
          type="image/png"
        />
        
        {/* Critical CSS for above-the-fold content */}
        <style>{`
          .hero-section {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          .gold-gradient {
            background: linear-gradient(45deg, #D4AF37, #FFD700, #B8860B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out forwards;
          }
          .stagger-1 { animation-delay: 0.3s; }
          .stagger-2 { animation-delay: 0.6s; }
          .stagger-3 { animation-delay: 0.9s; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </Helmet>
      
      <LegalServiceSchema />
      <PerformanceMonitor />
      
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <EnhancedTestimonials />
      <ContactSection />
      <Footer />
      
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
