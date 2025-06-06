
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Heart, FileText, Users, Shield } from 'lucide-react';

const FamilyLaw: React.FC = () => {
  const services = [
    {
      title: "Divorce Proceedings",
      description: "Sensitive handling of divorce cases with focus on fair asset division and child welfare",
      icon: Heart
    },
    {
      title: "Child Custody",
      description: "Protecting children's best interests in custody arrangements and visitation rights",
      icon: Users
    },
    {
      title: "Will Writing & Estate Planning",
      description: "UAE-compliant wills and guardianship planning for expats and nationals",
      icon: FileText
    },
    {
      title: "Family Mediation",
      description: "Alternative dispute resolution for family matters to avoid lengthy court proceedings",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Family Law Dubai | Divorce Lawyer UAE | Child Custody | Precedential Law</title>
        <meta name="description" content="Compassionate family law services in Dubai. Expert divorce lawyers, child custody specialists, and estate planning attorneys. Protecting families across the UAE." />
        <meta name="keywords" content="family law Dubai, divorce lawyer UAE, child custody Dubai, family lawyer, will writing Dubai, estate planning UAE, expat family law" />
        <link rel="canonical" href="https://precedentiallaw.com/services/family-law" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Family Law Services in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Compassionate legal support for family matters. We understand the sensitive nature of family disputes and provide caring, effective representation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Confidential Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Family Law Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Family Law Services</h2>
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

        {/* Expat-Specific Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8">Specialized Support for Expat Families</h2>
              <p className="text-lg text-gray-600 mb-8">
                Living in the UAE as an expat family comes with unique legal considerations. Our team understands the complexities of cross-cultural family law and provides specialized guidance for international families.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Will Writing for Expats</h3>
                  <p className="text-gray-600">Ensure your assets are protected and your children's guardianship is secured under UAE law.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Cross-Border Custody</h3>
                  <p className="text-gray-600">Navigate international custody arrangements and jurisdictional challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Compassionate Legal Support?</h2>
            <p className="text-xl mb-8 opacity-90">Contact our family law experts for sensitive, professional guidance.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule Private Consultation
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

export default FamilyLaw;
