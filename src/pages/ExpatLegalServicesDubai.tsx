
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Users, Heart, Home, Briefcase, FileText, Shield, Globe, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const ExpatLegalServicesDubai: React.FC = () => {
  const expatServices = [
    {
      title: "Visa & Immigration Support",
      description: "Complete visa processing, residence permits, and family sponsorship",
      icon: Globe,
      services: ["Golden Visa applications", "Employment visa transfers", "Family visa sponsorship", "Visa renewals & cancellations"]
    },
    {
      title: "Family & Personal Matters",
      description: "Protecting family interests and personal legal affairs",
      icon: Heart,
      services: ["Divorce & separation", "Child custody arrangements", "Marriage contracts", "Personal status issues"]
    },
    {
      title: "Property & Real Estate",
      description: "Property transactions, rentals, and real estate investments",
      icon: Home,
      services: ["Property purchase/sale", "Rental agreements", "RERA disputes", "Property investment advice"]
    },
    {
      title: "Employment & Labor",
      description: "Workplace rights, employment contracts, and labor disputes",
      icon: Briefcase,
      services: ["Employment contract review", "Workplace disputes", "End of service benefits", "Labor law compliance"]
    },
    {
      title: "Wills & Estate Planning",
      description: "Securing your family's future with proper estate planning",
      icon: FileText,
      services: ["DIFC Wills registration", "Guardianship arrangements", "Asset protection", "Inheritance planning"]
    },
    {
      title: "Legal Protection Services",
      description: "Comprehensive legal protection and emergency support",
      icon: Shield,
      services: ["Legal emergency hotline", "Document authentication", "Power of attorney", "Legal translation services"]
    }
  ];

  const expatChallenges = [
    {
      challenge: "Visa Complications",
      description: "Complex immigration procedures and changing regulations",
      solution: "Expert guidance through UAE immigration system with success guarantee"
    },
    {
      challenge: "Employment Issues",
      description: "Unfair treatment, contract disputes, and labor law violations",
      solution: "Strong advocacy for workplace rights and compensation claims"
    },
    {
      challenge: "Family Separation",
      description: "Divorce, custody battles, and cross-border family issues",
      solution: "Sensitive handling of family matters with cultural understanding"
    },
    {
      challenge: "Property Disputes",
      description: "Landlord-tenant conflicts and property investment problems",
      solution: "Effective dispute resolution through negotiation and legal action"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Expat Legal Services Dubai | International Family Lawyers | UAE Immigration Law Experts</title>
        <meta name="description" content="Specialized legal services for expatriates in Dubai. Expert immigration, family law, employment, property, and personal legal support for international residents." />
        <meta name="keywords" content="expat legal services Dubai, international lawyers Dubai, UAE immigration lawyers, expat family law, employment law expats, property lawyers Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/expat-legal-services-dubai" />
        
        <meta property="og:title" content="Expat Legal Services Dubai | Specialized International Legal Support" />
        <meta property="og:description" content="Comprehensive legal services for expatriates in Dubai. Immigration, family law, employment, and personal legal matters handled by international law experts." />
        <meta property="og:url" content="https://precedentiallaw.com/expat-legal-services-dubai" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="flex justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <Globe className="w-4 h-4" />
                  <span>50+ Nationalities Served</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  <span>1000+ Expat Families Helped</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                Expat Legal Services <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Your trusted legal guardians in the UAE. Specialized legal services for expatriates, international families, and foreign professionals navigating Dubai's legal landscape with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Free Expat Legal Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  24/7 Emergency Legal Hotline
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Comprehensive Expat Legal Support</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Specialized legal services designed for the unique needs of international residents in the UAE
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expatServices.map((service, index) => (
                  <div key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <service.icon className="w-12 h-12 text-precedential-gold mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.services.map((item) => (
                        <li key={item} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Common Expat Legal Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {expatChallenges.map((item, index) => (
                  <div key={item.challenge} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-400">
                    <div className="flex items-start mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.challenge}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Our Solution:</h4>
                          <p className="text-sm text-gray-600">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Expats Choose Our Legal Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">International Understanding</h3>
                      <p className="text-gray-600">Deep understanding of cross-cultural legal issues and international law implications.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Multilingual Support</h3>
                      <p className="text-gray-600">Legal services in English, Arabic, Hindi, French, and Russian languages.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">24/7 Emergency Support</h3>
                      <p className="text-gray-600">Round-the-clock legal emergency hotline for urgent expat legal matters.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Confidential & Sensitive</h3>
                      <p className="text-gray-600">Discrete handling of personal matters with complete client confidentiality.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Document Support</h3>
                      <p className="text-gray-600">Complete assistance with document authentication, attestation, and translation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Home className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Home Country Coordination</h3>
                      <p className="text-gray-600">Liaison with home country legal systems for cross-border legal matters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8">Expat Legal Protection Package</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-precedential-gold">
                <h3 className="text-2xl font-bold mb-4">Complete Annual Legal Protection</h3>
                <p className="text-gray-600 mb-6">Comprehensive legal support package designed specifically for expatriate families</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold mb-3">Included Services:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Unlimited legal consultations</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Document review & drafting</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Emergency legal support</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Court representation (discounted)</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-3">Additional Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Priority appointment booking</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Multi-language support</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Legal document templates</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Quarterly legal updates</li>
                    </ul>
                  </div>
                </div>
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Get Protection Package Details
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Protect Your Expat Journey</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't navigate UAE's legal system alone. Get expert legal support designed specifically for international residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Schedule Expat Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Emergency Legal Hotline
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

export default ExpatLegalServicesDubai;
