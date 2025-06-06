
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InteractiveLegalTools from '@/components/InteractiveLegalTools';

const LegalTools: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free Legal Tools & Calculators Dubai | UAE Legal Resources | Precedential Law</title>
        <meta name="description" content="Free legal tools and calculators for Dubai businesses and residents. Business setup cost calculator, visa checker, divorce timeline estimator, and legal document templates." />
        <meta name="keywords" content="legal tools Dubai, business setup calculator UAE, visa requirements checker, legal document templates, Dubai legal resources, UAE legal calculators" />
        <link rel="canonical" href="https://precedentiallaw.com/legal-tools" />
        
        <meta property="og:title" content="Free Legal Tools & Calculators Dubai | UAE Legal Resources" />
        <meta property="og:description" content="Access free legal tools and calculators for UAE legal matters. Business setup costs, visa requirements, and legal document templates." />
        <meta property="og:url" content="https://precedentiallaw.com/legal-tools" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Legal <span className="text-gold-gradient">Tools</span> & Calculators
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Free interactive tools to help you navigate UAE legal requirements, estimate costs, 
              and access professional legal document templates.
            </p>
          </div>
        </section>

        <InteractiveLegalTools />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default LegalTools;
