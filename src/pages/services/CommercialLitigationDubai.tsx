
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Building, FileText, DollarSign, Shield, Users, Gavel } from 'lucide-react';

const CommercialLitigationDubai: React.FC = () => {
  const services = [
    {
      title: "Contract Disputes",
      description: "Complex commercial contract breaches, performance issues, and enforcement actions",
      icon: FileText
    },
    {
      title: "Partnership Disputes",
      description: "Business partnership conflicts, dissolution proceedings, and shareholder disputes",
      icon: Users
    },
    {
      title: "Corporate Litigation",
      description: "Company law disputes, director liability, and corporate governance issues",
      icon: Building
    },
    {
      title: "Debt Recovery",
      description: "Commercial debt collection, insolvency proceedings, and asset recovery",
      icon: DollarSign
    },
    {
      title: "Intellectual Property",
      description: "IP infringement claims, trademark disputes, and trade secret protection",
      icon: Shield
    },
    {
      title: "Arbitration",
      description: "Alternative dispute resolution through DIAC, ADCCAC, and international arbitration",
      icon: Gavel
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Commercial Litigation Dubai | Business Dispute Lawyers UAE | Corporate Law | Precedential Law</title>
        <meta name="description" content="Expert commercial litigation lawyers in Dubai. Specialized in business disputes, contract litigation, corporate governance, and commercial arbitration in UAE." />
        <meta name="keywords" content="commercial litigation Dubai, business dispute lawyers, corporate litigation UAE, contract disputes, commercial arbitration, business law Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/services/commercial-litigation-dubai" />
        
        <meta property="og:title" content="Commercial Litigation Experts Dubai | Business Dispute Resolution" />
        <meta property="og:description" content="Specialized commercial litigation services in Dubai. Expert business dispute resolution and corporate litigation representation." />
        <meta property="og:url" content="https://precedentiallaw.com/services/commercial-litigation-dubai" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Commercial Litigation Experts in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Strategic business dispute resolution. Protecting your commercial interests through expert litigation and arbitration services.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Business Dispute Assessment
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Commercial Litigation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">UAE Commercial Courts & Arbitration</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Court Litigation</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Dubai Commercial Courts</li>
                    <li>DIFC Courts (English common law)</li>
                    <li>ADGM Courts</li>
                    <li>Federal commercial divisions</li>
                    <li>Specialized business courts</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Arbitration Centers</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>DIAC (Dubai International Arbitration Centre)</li>
                    <li>ADCCAC (Abu Dhabi Commercial Conciliation & Arbitration Centre)</li>
                    <li>DIFC-LCIA Arbitration Centre</li>
                    <li>ICC arbitration</li>
                    <li>Ad hoc arbitration proceedings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Business Dispute Resolution</h2>
            <p className="text-xl mb-8 opacity-90">Protect your business interests with expert commercial litigation support.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Commercial Legal Consultation
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

export default CommercialLitigationDubai;
