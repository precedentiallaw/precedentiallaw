
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import LegalCalculatorTools from '@/components/LegalCalculatorTools';

const LegalToolsEnhanced: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Calculator Tools Dubai | Business Setup Cost Calculator | Property Fee Calculator | Precedential Law</title>
        <meta name="description" content="Free legal calculator tools for Dubai. Calculate business setup costs, property transaction fees, and family law estimates. Expert legal tools for informed decisions." />
        <meta name="keywords" content="legal calculator Dubai, business setup cost calculator, property fee calculator Dubai, family law calculator UAE, legal tools, cost estimation" />
        <link rel="canonical" href="https://precedentiallaw.com/legal-tools-enhanced" />
        
        <meta property="og:title" content="Free Legal Calculator Tools Dubai | Cost Estimation Tools" />
        <meta property="og:description" content="Calculate legal costs and fees for Dubai business setup, property transactions, and family law matters with our expert tools." />
        <meta property="og:url" content="https://precedentiallaw.com/legal-tools-enhanced" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Legal Calculator <span className="text-gold-gradient">Tools</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Make informed legal decisions with our comprehensive calculator tools designed for Dubai and UAE legal matters.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <LegalCalculatorTools />
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default LegalToolsEnhanced;
