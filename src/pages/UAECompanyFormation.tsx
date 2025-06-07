
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Building, FileText, Users, Shield, Clock, CheckCircle, AlertTriangle, Globe } from 'lucide-react';

const UAECompanyFormation: React.FC = () => {
  const jurisdictions = [
    {
      title: "Dubai Mainland",
      description: "100% foreign ownership, access to local market, no currency restrictions",
      icon: Building,
      benefits: ["Local market access", "Government contracts eligible", "Multiple business activities"]
    },
    {
      title: "Dubai Free Zones",
      description: "Tax exemptions, 100% repatriation, simplified procedures",
      icon: Globe,
      benefits: ["0% corporate tax", "No import/export duties", "Easy visa processing"]
    },
    {
      title: "Abu Dhabi Global Market",
      description: "English common law, international regulatory framework",
      icon: Shield,
      benefits: ["Common law jurisdiction", "Financial services focus", "International arbitration"]
    },
    {
      title: "Dubai International Financial Centre",
      description: "Independent legal system, zero tax on qualifying activities",
      icon: Users,
      benefits: ["Independent courts", "Zero tax regime", "World-class infrastructure"]
    }
  ];

  const companyTypes = [
    {
      name: "Limited Liability Company (LLC)",
      description: "Most popular business structure for trading and commercial activities",
      requirements: "2-50 shareholders, AED 300,000 minimum capital",
      timeline: "15-20 business days"
    },
    {
      name: "Free Zone Establishment (FZE)",
      description: "Single shareholder company in designated free zones",
      requirements: "1 shareholder, varies by free zone",
      timeline: "5-10 business days"
    },
    {
      name: "Free Zone Company (FZC)",
      description: "Multiple shareholders company in free zones",
      requirements: "2-50 shareholders, varies by free zone",
      timeline: "7-12 business days"
    },
    {
      name: "Representative Office",
      description: "Marketing and liaison activities only, no trading",
      requirements: "Parent company established 2+ years",
      timeline: "10-15 business days"
    },
    {
      name: "Branch Office",
      description: "Extension of foreign company operations",
      requirements: "Parent company financial statements",
      timeline: "20-30 business days"
    },
    {
      name: "Public Joint Stock Company",
      description: "Large-scale operations with public shareholding",
      requirements: "Minimum AED 10 million capital",
      timeline: "45-60 business days"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Company Formation Lawyers Dubai | Business Setup Legal Services | Expert Company Registration</title>
        <meta name="description" content="Expert UAE company formation lawyers in Dubai. Complete business setup legal services, company registration, free zone establishment, and corporate structuring with 15+ years experience." />
        <meta name="keywords" content="UAE company formation, Dubai business setup lawyers, company registration UAE, free zone establishment, LLC formation Dubai, business incorporation UAE, corporate lawyers Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/uae-company-formation" />
        
        <meta property="og:title" content="UAE Company Formation Lawyers Dubai | Expert Business Setup Legal Services" />
        <meta property="og:description" content="Professional UAE company formation and business setup legal services. Expert guidance on company registration, free zone establishment, and corporate structuring." />
        <meta property="og:url" content="https://precedentiallaw.com/uae-company-formation" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                UAE Company Formation <span className="text-gold-gradient">Legal Experts</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Navigate UAE's complex business setup landscape with confidence. Our experienced lawyers provide comprehensive company formation services across all UAE jurisdictions, ensuring full legal compliance and optimal business structure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Free Company Formation Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download Setup Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">UAE Business Formation Jurisdictions</h2>
              <p className="text-lg text-gray-600">
                Choose the optimal jurisdiction for your business needs with expert legal guidance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jurisdictions.map((jurisdiction, index) => (
                <div key={jurisdiction.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <jurisdiction.icon className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">{jurisdiction.title}</h3>
                  <p className="text-gray-600 mb-4">{jurisdiction.description}</p>
                  <ul className="space-y-2">
                    {jurisdiction.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">Company Types & Structures</h2>
              <div className="space-y-6">
                {companyTypes.map((type, index) => (
                  <div key={type.name} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-precedential-gold">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Requirements:</h4>
                        <p className="text-sm text-gray-600">{type.requirements}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Timeline:</h4>
                        <p className="text-sm text-precedential-gold font-medium">{type.timeline}</p>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Complete Company Formation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Initial Consultation", desc: "Business structure analysis and jurisdiction selection" },
                  { step: "02", title: "Document Preparation", desc: "Legal documentation, MOA, shareholding structure" },
                  { step: "03", title: "Government Approvals", desc: "License applications, approvals, and registrations" },
                  { step: "04", title: "Bank Account Setup", desc: "Corporate banking facilitation and compliance" }
                ].map((phase) => (
                  <div key={phase.step} className="text-center">
                    <div className="w-16 h-16 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-600">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Choose Our Company Formation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">15+ Years UAE Experience</h3>
                      <p className="text-gray-600">Deep understanding of UAE corporate law, regulations, and business practices across all emirates.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Fast-Track Processing</h3>
                      <p className="text-gray-600">Streamlined procedures and government relationships ensure quickest possible company formation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">End-to-End Support</h3>
                      <p className="text-gray-600">Complete business setup including banking, visas, office space, and ongoing compliance.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Transparent Pricing</h3>
                      <p className="text-gray-600">No hidden fees. Complete cost breakdown provided upfront with payment milestones.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">100% Compliance Guarantee</h3>
                      <p className="text-gray-600">Full regulatory compliance assured with ongoing legal support and advisory services.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">International Expertise</h3>
                      <p className="text-gray-600">Cross-border structuring for international businesses and foreign investment optimization.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Establish Your UAE Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert legal guidance for your UAE company formation. Free consultation to discuss your business goals and optimal structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Schedule Formation Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Get Instant Quote
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

export default UAECompanyFormation;
