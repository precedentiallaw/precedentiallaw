
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClientPortal from '@/components/ClientPortal';

const ClientPortalPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Client Portal | Secure Legal Document Access | Case Management | Precedential Law</title>
        <meta name="description" content="Secure client portal for Precedential Law clients. Access your legal documents, case updates, billing information, and communicate with your legal team." />
        <meta name="keywords" content="client portal, legal document access, case management, secure communication, legal billing, client dashboard" />
        <link rel="canonical" href="https://precedentiallaw.com/client-portal" />
        
        <meta property="og:title" content="Secure Client Portal | Legal Document & Case Management" />
        <meta property="og:description" content="Access your legal matters securely. View documents, track cases, and communicate with your legal team through our client portal." />
        <meta property="og:url" content="https://precedentiallaw.com/client-portal" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Client <span className="text-gold-gradient">Portal</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Secure access to your legal matters, documents, and case updates. Stay connected with your legal team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <ClientPortal />
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default ClientPortalPage;
