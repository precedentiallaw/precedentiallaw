
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { DollarSign, FileText, Scale, Shield, Clock, CheckCircle } from 'lucide-react';

const DebtSettlement: React.FC = () => {
  const services = [
    {
      title: "Debt Negotiation",
      description: "Strategic negotiations with creditors to reduce outstanding debt amounts",
      icon: DollarSign
    },
    {
      title: "Payment Plans",
      description: "Structured repayment arrangements tailored to your financial capacity",
      icon: Clock
    },
    {
      title: "Bounced Cheque Issues",
      description: "Resolution of dishonored cheque matters under UAE Federal Law amendments",
      icon: FileText
    },
    {
      title: "Asset Protection",
      description: "Safeguarding essential assets during debt resolution proceedings",
      icon: Shield
    },
    {
      title: "Court Representation",
      description: "Expert legal representation in debt-related court proceedings",
      icon: Scale
    },
    {
      title: "Credit Rehabilitation",
      description: "Strategies to restore creditworthiness and financial standing",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Debt Settlement Lawyers Dubai | UAE Debt Relief | Bounced Cheque | Precedential Law</title>
        <meta name="description" content="Expert debt settlement services in Dubai. Professional debt negotiation, bounced cheque resolution, and financial relief solutions under UAE law." />
        <meta name="keywords" content="debt settlement Dubai, debt relief UAE, bounced cheque lawyer, debt negotiation, financial distress UAE, debt recovery Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/services/debt-settlement" />
        
        <meta property="og:title" content="Debt Settlement Services Dubai | UAE Financial Relief Solutions" />
        <meta property="og:description" content="Professional debt settlement and financial relief services in Dubai. Expert negotiation and legal representation for debt matters." />
        <meta property="og:url" content="https://precedentiallaw.com/services/debt-settlement" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Debt Settlement Services in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Professional debt relief and financial restructuring. Helping individuals and businesses overcome financial challenges with expert legal guidance.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Financial Assessment
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Debt Relief Services</h2>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">UAE Debt Laws & Recent Changes</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">New Bounced Cheque Laws</h3>
                  <p className="text-gray-600 mb-4">Recent amendments to UAE Federal Law No. 14/2020 have significantly changed bounced cheque regulations:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Decriminalization of insufficient funds cases</li>
                    <li>Civil enforcement mechanisms</li>
                    <li>Exceptions for fraud and bad faith</li>
                    <li>Alternative dispute resolution encouraged</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Debt Settlement Options</h3>
                  <p className="text-gray-600 mb-4">Multiple pathways available for debt resolution:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Voluntary settlement agreements</li>
                    <li>Court-supervised arrangements</li>
                    <li>Mediation and arbitration</li>
                    <li>Restructuring and payment plans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Debt Settlement Process</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Financial Assessment</h3>
                    <p className="text-gray-600">Comprehensive review of your debts, assets, and financial capacity</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                    <p className="text-gray-600">Creation of customized debt resolution strategy based on your situation</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Creditor Negotiations</h3>
                    <p className="text-gray-600">Professional negotiations with creditors to secure favorable terms</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Agreement Implementation</h3>
                    <p className="text-gray-600">Documentation and implementation of settlement agreements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Struggling with Debt?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional debt settlement assistance and regain financial stability.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Debt Relief Consultation
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

export default DebtSettlement;
