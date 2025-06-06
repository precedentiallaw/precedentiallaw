
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Scale, FileText, Users, Shield, Clock, Gavel } from 'lucide-react';

const CivilLitigation: React.FC = () => {
  const services = [
    {
      title: "Contract Disputes",
      description: "Resolution of commercial and personal contract breaches and enforcement actions",
      icon: FileText
    },
    {
      title: "Tort Claims",
      description: "Personal injury, property damage, and civil wrong compensation claims",
      icon: Shield
    },
    {
      title: "Property Disputes",
      description: "Real estate conflicts, boundary disputes, and ownership challenges",
      icon: Users
    },
    {
      title: "Employment Disputes",
      description: "Workplace conflicts, wrongful termination, and labor law violations",
      icon: Scale
    },
    {
      title: "Debt Recovery",
      description: "Collection proceedings and enforcement of judgments",
      icon: Clock
    },
    {
      title: "Civil Appeals",
      description: "Appellate court representation and judicial review proceedings",
      icon: Gavel
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Civil Litigation Lawyers Dubai | UAE Court Representation | Legal Disputes | Precedential Law</title>
        <meta name="description" content="Expert civil litigation lawyers in Dubai. Professional court representation for contract disputes, tort claims, property disputes, and debt recovery in UAE courts." />
        <meta name="keywords" content="civil litigation Dubai, court representation UAE, legal disputes Dubai, contract disputes, tort claims, property disputes, debt recovery UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/services/civil-litigation" />
        
        <meta property="og:title" content="Expert Civil Litigation Lawyers Dubai | UAE Court Representation" />
        <meta property="og:description" content="Professional civil litigation services in Dubai. Expert court representation for all types of civil disputes in UAE courts." />
        <meta property="og:url" content="https://precedentiallaw.com/services/civil-litigation" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Civil Litigation Lawyers in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Expert court representation for civil disputes. Protecting your rights through strategic litigation and skilled advocacy in UAE courts.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Case Evaluation
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Civil Litigation Services</h2>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">UAE Civil Court System</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Federal Courts</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Court of First Instance</li>
                    <li>Court of Appeal</li>
                    <li>Federal Supreme Court</li>
                    <li>Specialized divisions</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Local Courts</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Dubai Courts</li>
                    <li>Abu Dhabi Courts</li>
                    <li>DIFC Courts</li>
                    <li>ADGM Courts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Civil Litigation Support?</h2>
            <p className="text-xl mb-8 opacity-90">Get expert legal representation for your civil dispute.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule Litigation Consultation
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

export default CivilLitigation;
