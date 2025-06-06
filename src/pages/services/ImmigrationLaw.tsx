
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Plane, FileCheck, Users, Clock } from 'lucide-react';

const ImmigrationLaw: React.FC = () => {
  const services = [
    {
      title: "Visa Applications",
      description: "Complete assistance with tourist, business, and residence visa applications",
      icon: Plane
    },
    {
      title: "Residency Permits",
      description: "Expert guidance for obtaining and renewing UAE residence permits",
      icon: FileCheck
    },
    {
      title: "Family Sponsorship",
      description: "Comprehensive support for sponsoring family members in the UAE",
      icon: Users
    },
    {
      title: "Status Changes",
      description: "Assistance with changing visa status and resolving immigration issues",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Immigration Law UAE | Visa Services Dubai | Residency Permit | Precedential Law</title>
        <meta name="description" content="Expert immigration legal services in Dubai. Visa applications, residency permits, family sponsorship, and status changes. Contact our immigration lawyers today." />
        <meta name="keywords" content="immigration law UAE, visa services Dubai, residency permit UAE, family sponsorship, visa applications, immigration lawyer Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/services/immigration-law" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Immigration Law Services in <span className="text-gold-gradient">UAE</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Navigate UAE immigration procedures with confidence through expert legal guidance.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Get Immigration Help
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Immigration Services</h2>
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
            <h2 className="text-3xl font-playfair font-bold mb-6">Immigration Issues?</h2>
            <p className="text-xl mb-8 opacity-90">Get expert immigration legal support for your UAE journey.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule Immigration Consultation
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

export default ImmigrationLaw;
