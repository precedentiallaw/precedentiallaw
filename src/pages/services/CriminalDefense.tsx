
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, FileText, Users, Clock, Phone } from 'lucide-react';

const CriminalDefense: React.FC = () => {
  const services = [
    {
      title: "White Collar Crime",
      description: "Financial crimes, fraud, embezzlement, and corporate criminal matters",
      icon: FileText
    },
    {
      title: "Bounced Cheque Cases",
      description: "Defense against dishonored cheque prosecutions under UAE Federal Law",
      icon: AlertTriangle
    },
    {
      title: "Cyber Crimes",
      description: "Digital offenses, online fraud, and technology-related criminal charges",
      icon: Shield
    },
    {
      title: "Drug Offenses",
      description: "Substance-related charges and rehabilitation program advocacy",
      icon: Users
    },
    {
      title: "Traffic Violations",
      description: "Serious traffic offenses and driving-related criminal charges",
      icon: Clock
    },
    {
      title: "Emergency Defense",
      description: "24/7 immediate legal assistance for arrests and urgent criminal matters",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Criminal Defense Lawyers Dubai | UAE Criminal Law | Legal Defense | Precedential Law</title>
        <meta name="description" content="Expert criminal defense lawyers in Dubai. Specialized in white collar crime, bounced cheques, cyber crimes, and emergency legal defense in UAE courts." />
        <meta name="keywords" content="criminal defense Dubai, criminal lawyers UAE, white collar crime, bounced cheque defense, cyber crime lawyer, UAE criminal law" />
        <link rel="canonical" href="https://precedentiallaw.com/services/criminal-defense" />
        
        <meta property="og:title" content="Criminal Defense Lawyers Dubai | Expert Legal Defense UAE" />
        <meta property="og:description" content="Professional criminal defense services in Dubai. Expert legal representation for all criminal matters in UAE courts." />
        <meta property="og:url" content="https://precedentiallaw.com/services/criminal-defense" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Criminal Defense Lawyers in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Experienced criminal defense representation. Protecting your rights and freedom with skilled advocacy in UAE criminal courts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                  Emergency Defense
                </Button>
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Case Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Criminal Defense Services</h2>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">UAE Criminal Law System</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Federal Crimes</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Serious felonies and misdemeanors</li>
                    <li>Drug-related offenses</li>
                    <li>Financial crimes and fraud</li>
                    <li>Cybercrime violations</li>
                    <li>Immigration violations</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Local Offenses</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Traffic violations</li>
                    <li>Municipal law breaches</li>
                    <li>Commercial law violations</li>
                    <li>Public morality offenses</li>
                    <li>Local regulatory crimes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-red-800">Emergency Criminal Defense</h2>
              <p className="text-lg text-gray-700 mb-8">
                If you or someone you know has been arrested or is under criminal investigation in the UAE, immediate legal representation is crucial.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-3 text-red-800">What to Do if Arrested</h3>
                  <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
                    <li>Remain silent except to request a lawyer</li>
                    <li>Contact embassy/consulate if you're a foreign national</li>
                    <li>Do not sign any documents without legal review</li>
                    <li>Request immediate legal representation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-3 text-orange-800">Your Legal Rights</h3>
                  <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
                    <li>Right to legal representation</li>
                    <li>Right to interpreter services</li>
                    <li>Right to contact embassy</li>
                    <li>Protection against self-incrimination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Immediate Criminal Defense?</h2>
            <p className="text-xl mb-8 opacity-90">
              Criminal charges require immediate expert legal intervention. Contact our defense team now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                24/7 Emergency Line
              </Button>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Defense Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default CriminalDefense;
