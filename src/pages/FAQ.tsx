
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AdvancedFAQ from '@/components/AdvancedFAQ';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Legal FAQ | Common Legal Questions Dubai | Precedential Law</title>
        <meta name="description" content="Comprehensive FAQ covering UAE legal questions. Expert answers on Dubai divorce laws, business setup, Golden Visa requirements, real estate law, and more." />
        <meta name="keywords" content="UAE legal FAQ, Dubai legal questions, UAE law answers, Dubai divorce FAQ, business setup questions UAE, golden visa FAQ, legal advice Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/faq" />
        
        <meta property="og:title" content="UAE Legal FAQ | Common Legal Questions Dubai" />
        <meta property="og:description" content="Get expert answers to common UAE legal questions covering divorce, business setup, visas, and more from Dubai's leading law firm." />
        <meta property="og:url" content="https://precedentiallaw.com/faq" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Expert answers to the most common legal questions facing individuals and businesses in Dubai and the UAE.
            </p>
          </div>
        </section>

        <AdvancedFAQ />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default FAQ;
