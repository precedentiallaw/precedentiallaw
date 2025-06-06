
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Users, Heart, Clock, CheckCircle } from 'lucide-react';

const DIFCWills: React.FC = () => {
  const services = [
    {
      title: "DIFC Will Drafting",
      description: "Professional drafting of wills under DIFC jurisdiction with English common law principles",
      icon: FileText
    },
    {
      title: "Asset Protection",
      description: "Safeguarding UAE and international assets through proper will planning",
      icon: Shield
    },
    {
      title: "Guardianship Arrangements",
      description: "Securing child guardianship appointments for minor children",
      icon: Users
    },
    {
      title: "Inheritance Planning",
      description: "Strategic estate planning to minimize disputes and ensure proper distribution",
      icon: Heart
    },
    {
      title: "Will Registration",
      description: "Complete registration process with DIFC Wills Service Centre",
      icon: CheckCircle
    },
    {
      title: "Ongoing Support",
      description: "Annual reviews and updates to reflect changing circumstances",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DIFC Wills Dubai | Estate Planning UAE | Will Writing Service | Precedential Law</title>
        <meta name="description" content="Expert DIFC wills services in Dubai. Professional estate planning, will drafting, and asset protection for expats and UAE residents under English common law." />
        <meta name="keywords" content="DIFC wills Dubai, estate planning UAE, will writing service, expat wills Dubai, inheritance planning, guardianship Dubai, asset protection UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/services/difc-wills" />
        
        <meta property="og:title" content="DIFC Wills Dubai | Expert Estate Planning Services UAE" />
        <meta property="og:description" content="Professional DIFC wills and estate planning services in Dubai. Protecting your assets and family under English common law." />
        <meta property="og:url" content="https://precedentiallaw.com/services/difc-wills" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                DIFC Wills & Estate Planning in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Protect your family's future with professionally drafted DIFC wills. Ensure your assets are distributed according to your wishes under English common law.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Will Planning Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download Will Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">DIFC Wills Services</h2>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Choose DIFC Wills?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">English Common Law</h3>
                  <p className="text-gray-600 mb-4">DIFC operates under English common law principles, providing:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Freedom of disposition for non-Muslim expatriates</li>
                    <li>Familiar legal framework for international families</li>
                    <li>Comprehensive asset coverage</li>
                    <li>Flexible inheritance arrangements</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Asset Protection Benefits</h3>
                  <p className="text-gray-600 mb-4">DIFC wills offer extensive protection for:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>UAE real estate and properties</li>
                    <li>Bank accounts and investments</li>
                    <li>Business interests and shares</li>
                    <li>Personal belongings and valuables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">DIFC Will Registration Process</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">Discussion of your estate planning needs and asset structure</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Will Drafting</h3>
                    <p className="text-gray-600">Professional preparation of your will in accordance with DIFC laws</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Review & Approval</h3>
                    <p className="text-gray-600">Careful review of the will with you to ensure accuracy and completeness</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Official Registration</h3>
                    <p className="text-gray-600">Registration with DIFC Wills Service Centre and issuance of probate certificate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Guardianship for Expat Families</h2>
              <div className="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 text-yellow-800">Critical Importance for Expat Parents</h3>
                <p className="text-gray-700 mb-4">
                  For expatriate families living in the UAE, appointing guardians for minor children is crucial. Without a properly registered DIFC will:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-yellow-800">Risks Without a Will:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Children may become wards of the state</li>
                      <li>Lengthy court proceedings</li>
                      <li>Uncertain guardianship arrangements</li>
                      <li>Financial complications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-yellow-800">Benefits of DIFC Will:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Clear guardian appointment</li>
                      <li>Immediate effect upon registration</li>
                      <li>Financial provision for children</li>
                      <li>Peace of mind for parents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Secure Your Family's Future</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't leave your family's future to chance. Create a comprehensive DIFC will today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Start Will Planning
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Family Protection Guide
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

export default DIFCWills;
