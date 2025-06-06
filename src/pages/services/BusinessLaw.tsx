
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Scale, Shield } from 'lucide-react';

const BusinessLaw: React.FC = () => {
  const services = [
    {
      title: "Company Formation",
      description: "Complete setup of LLC, FZE, and other business entities in Dubai with full compliance",
      icon: Building2
    },
    {
      title: "Contract Drafting & Review",
      description: "Comprehensive commercial agreements, employment contracts, and vendor agreements",
      icon: FileText
    },
    {
      title: "Regulatory Compliance",
      description: "Ongoing compliance with UAE commercial laws, licensing, and corporate governance",
      icon: Scale
    },
    {
      title: "Business Dispute Resolution",
      description: "Expert representation in commercial litigation and alternative dispute resolution",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Business Law Services Dubai | Commercial Legal Advice UAE | Precedential Law</title>
        <meta name="description" content="Expert business law services in Dubai. Company formation, contract drafting, regulatory compliance, and commercial dispute resolution. Contact our experienced business lawyers today." />
        <meta name="keywords" content="business law Dubai, commercial lawyer UAE, company formation Dubai, contract law, corporate legal services, business dispute resolution Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/services/business-law" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Business Law Services in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive commercial legal support for businesses operating in the UAE. From formation to expansion, we protect your business interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download Business Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Business Law Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Choose Our Business Law Team?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-precedential-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">UAE Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of UAE commercial laws and regulations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-precedential-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Fast Response</h3>
                  <p className="text-gray-600">Quick turnaround on urgent business matters</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-precedential-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Business Focus</h3>
                  <p className="text-gray-600">Dedicated commercial law practice with proven results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Protect Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">Get expert legal advice tailored to your business needs in Dubai.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Contact Our Business Law Team
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

export default BusinessLaw;
