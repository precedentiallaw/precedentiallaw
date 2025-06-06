
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Home, FileText, Gavel, Shield } from 'lucide-react';

const RealEstateLaw: React.FC = () => {
  const services = [
    {
      title: "Property Transactions",
      description: "Complete legal support for buying, selling, and transferring property in Dubai",
      icon: Home
    },
    {
      title: "Lease Agreements",
      description: "Comprehensive lease drafting, review, and Ejari registration services",
      icon: FileText
    },
    {
      title: "Rental Disputes",
      description: "Expert representation at Dubai Rental Dispute Centre (RDC)",
      icon: Gavel
    },
    {
      title: "Property Investment",
      description: "Legal guidance for real estate investment and development projects",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Real Estate Law Dubai | Property Lawyer UAE | Rental Disputes | Precedential Law</title>
        <meta name="description" content="Expert real estate legal services in Dubai. Property transactions, lease agreements, rental disputes, and investment advice. Contact our property lawyers today." />
        <meta name="keywords" content="real estate law Dubai, property lawyer UAE, rental disputes Dubai, lease agreements, property transactions, Ejari registration" />
        <link rel="canonical" href="https://precedentiallaw.com/services/real-estate-law" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Real Estate Law Services in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Navigate Dubai's dynamic property market with expert legal guidance for all your real estate needs.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Get Property Legal Advice
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Real Estate Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Real Estate Legal Support?</h2>
            <p className="text-xl mb-8 opacity-90">Protect your property investments with expert legal advice.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule Property Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default RealEstateLaw;
