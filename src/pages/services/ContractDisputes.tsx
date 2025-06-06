
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { FileText, Scale, AlertTriangle, Shield, Clock, CheckCircle } from 'lucide-react';

const ContractDisputes: React.FC = () => {
  const services = [
    {
      title: "Breach of Contract",
      description: "Legal action for contract violations and performance failures",
      icon: AlertTriangle
    },
    {
      title: "Contract Review",
      description: "Professional analysis of contract terms and potential disputes",
      icon: FileText
    },
    {
      title: "Dispute Resolution",
      description: "Mediation, arbitration, and litigation for contractual conflicts",
      icon: Scale
    },
    {
      title: "Performance Issues",
      description: "Resolution of contract performance and delivery disputes",
      icon: Clock
    },
    {
      title: "Contract Termination",
      description: "Legal guidance for contract cancellation and exit strategies",
      icon: Shield
    },
    {
      title: "Enforcement Actions",
      description: "Court proceedings to enforce contractual rights and remedies",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contract Dispute Lawyers Dubai | UAE Contract Law | Breach of Contract | Precedential Law</title>
        <meta name="description" content="Expert contract dispute lawyers in Dubai. Specialized in breach of contract cases, contract enforcement, and commercial dispute resolution under UAE law." />
        <meta name="keywords" content="contract dispute Dubai, breach of contract UAE, contract lawyers, commercial disputes, contract enforcement, UAE contract law" />
        <link rel="canonical" href="https://precedentiallaw.com/services/contract-disputes" />
        
        <meta property="og:title" content="Contract Dispute Lawyers Dubai | Expert Contract Law Services" />
        <meta property="og:description" content="Professional contract dispute resolution services in Dubai. Expert legal representation for breach of contract and commercial disputes." />
        <meta property="og:url" content="https://precedentiallaw.com/services/contract-disputes" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Contract Dispute Lawyers in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Expert contract law representation. Resolving commercial and personal contract disputes with strategic legal solutions.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Contract Review
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Contract Dispute Services</h2>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">UAE Contract Law Framework</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Civil Code Provisions</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Contract formation requirements</li>
                    <li>Performance obligations</li>
                    <li>Breach remedies and damages</li>
                    <li>Force majeure provisions</li>
                    <li>Contract interpretation rules</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Commercial Law Applications</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Business-to-business contracts</li>
                    <li>Supply and distribution agreements</li>
                    <li>Service provider contracts</li>
                    <li>Employment contracts</li>
                    <li>International trade agreements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Common Contract Disputes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Performance Disputes</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Non-delivery or late delivery</li>
                      <li>Quality and specification issues</li>
                      <li>Service standard disputes</li>
                      <li>Payment delays</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Contract Interpretation</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Ambiguous terms and clauses</li>
                      <li>Scope of work disagreements</li>
                      <li>Price and payment terms</li>
                      <li>Termination conditions</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Breach Remedies</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Monetary damages</li>
                      <li>Specific performance orders</li>
                      <li>Contract rescission</li>
                      <li>Injunctive relief</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-3">International Contracts</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Choice of law issues</li>
                      <li>Jurisdiction disputes</li>
                      <li>Cross-border enforcement</li>
                      <li>Currency and payment issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Contract Dispute Resolution</h2>
            <p className="text-xl mb-8 opacity-90">
              Protect your contractual rights with expert legal representation and strategic dispute resolution.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Contract Legal Consultation
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

export default ContractDisputes;
