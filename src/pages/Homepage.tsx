
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/homepage/HeroSection';
import ServicesPreview from '@/components/homepage/ServicesPreview';
import AboutPreview from '@/components/homepage/AboutPreview';
import ContactCTA from '@/components/homepage/ContactCTA';
import WhatsAppButton from '@/components/WhatsAppButton';

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Precedential Law | Premier Legal Consultancy Dubai | UAE Legal Services</title>
        <meta name="description" content="Precedential Law - Premier legal consultancy in Dubai providing expert legal services for business law, family law, immigration, real estate, and civil litigation in UAE." />
        <meta name="keywords" content="Dubai lawyer, UAE legal services, legal consultancy Dubai, business law UAE, family law Dubai, immigration lawyer UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precedential Law | Premier Legal Consultancy Dubai" />
        <meta property="og:description" content="Expert legal services in Dubai and UAE. Comprehensive legal support for individuals and businesses." />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precedential Law | Premier Legal Consultancy Dubai" />
        <meta name="twitter:description" content="Expert legal services in Dubai and UAE. Comprehensive legal support for individuals and businesses." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesPreview />
          <AboutPreview />
          <ContactCTA />
        </main>

        <Footer />
        <WhatsAppButton phoneNumber="971509014120" />
      </div>
    </>
  );
};

export default Homepage;
