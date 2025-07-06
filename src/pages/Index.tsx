
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ModernHero from '@/components/modern/ModernHero';
import ModernServices from '@/components/modern/ModernServices';
import ModernAbout from '@/components/modern/ModernAbout';
import ModernTestimonials from '@/components/modern/ModernTestimonials';
import ModernFAQ from '@/components/modern/ModernFAQ';
import ModernContact from '@/components/modern/ModernContact';
import ModernHeader from '@/components/modern/ModernHeader';
import ModernFooter from '@/components/modern/ModernFooter';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Precedential Law | Premier Dubai Legal Consultancy | UAE Legal Services</title>
        <meta name="description" content="Expert Dubai legal services & consultation. Premier business law firm, family law, divorce & immigration lawyers in Dubai. Setting the precedential standard." />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precedential Law | Premier Dubai Legal Consultancy" />
        <meta property="og:description" content="Expert Dubai legal services & consultation. Premier business law firm serving expatriates and UAE nationals." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precedential Law | Premier Dubai Legal Consultancy" />
        <meta name="twitter:description" content="Expert Dubai legal services & consultation. Premier business law firm serving expatriates and UAE nationals." />
        <meta name="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <ModernHeader />
        
        <main>
          <ModernHero />
          <ModernServices />
          <ModernAbout />
          <ModernTestimonials />
          <ModernFAQ />
          <ModernContact />
        </main>

        <ModernFooter />
        <WhatsAppButton phoneNumber="971509014120" />
      </div>
    </>
  );
};

export default Index;
