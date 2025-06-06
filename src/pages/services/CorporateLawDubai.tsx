
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Scale, TrendingUp, Shield, Users, Briefcase, Calculator } from 'lucide-react';

const CorporateLawDubai: React.FC = () => {
  const corporateServices = [
    {
      icon: Building2,
      title: "Company Formation & Structuring",
      description: "Expert guidance on UAE mainland companies, free zone establishments, and offshore company setup with optimal tax structures."
    },
    {
      icon: FileText,
      title: "Corporate Governance",
      description: "Board resolutions, shareholder agreements, compliance frameworks, and corporate policy development for UAE entities."
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "UAE Corporate Tax compliance, VAT registration, WPS implementation, and ongoing regulatory adherence."
    },
    {
      icon: TrendingUp,
      title: "Mergers & Acquisitions",
      description: "Due diligence, transaction structuring, and legal documentation for M&A activities in the UAE market."
    },
    {
      icon: Shield,
      title: "Corporate Restructuring",
      description: "Business reorganization, debt restructuring, and corporate recovery strategies under UAE commercial law."
    },
    {
      icon: Briefcase,
      title: "Commercial Contracts",
      description: "Drafting and reviewing distribution agreements, joint ventures, licensing agreements, and strategic partnerships."
    }
  ];

  const complianceAreas = [
    "UAE Federal Decree-Law No. 32 of 2021 (Companies Law)",
    "UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022)",
    "UAE Commercial Transactions Law",
    "Securities and Commodities Authority (SCA) Regulations",
    "Central Bank of UAE (CBUAE) Guidelines",
    "Ministry of Economy Commercial Licensing Requirements"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Corporate Lawyers Dubai | UAE Business Law Firm | Precedential Law</title>
        <meta name="description" content="Leading corporate lawyers in Dubai providing business law services, company formation, M&A, compliance, and corporate governance. Expert UAE commercial law advice." />
        <meta name="keywords" content="corporate lawyers Dubai, business law firm UAE, Dubai corporate law, company formation Dubai, UAE commercial lawyers, business setup Dubai, corporate governance UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/services/corporate-law-dubai" />
        
        <meta property="og:title" content="Corporate Lawyers Dubai | UAE Business Law Firm" />
        <meta property="og:description" content="Expert corporate legal services in Dubai. Specializing in business law, company formation, M&A, and regulatory compliance for UAE businesses." />
        <meta property="og:url" content="https://precedentiallaw.com/services/corporate-law-dubai" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-precedential-black to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                Corporate Law <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Premier corporate lawyers in Dubai providing comprehensive business law services. 
                From company formation to complex M&A transactions and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Schedule Business Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Download Corporate Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">500+</div>
                <div className="text-gray-600">Companies Formed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">AED 2B+</div>
                <div className="text-gray-600">Transaction Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">15+</div>
                <div className="text-gray-600">Years UAE Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              Comprehensive Corporate Legal Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporateServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UAE Corporate Tax Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
                UAE Corporate Tax Compliance 2024
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Calculator className="w-8 h-8 text-precedential-gold" />
                    Corporate Tax Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-precedential-gold/10 rounded-lg p-4">
                      <h4 className="font-bold text-precedential-gold">Tax Rate: 9%</h4>
                      <p className="text-gray-700">On taxable income exceeding AED 375,000</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-700">Tax-Free Threshold</h4>
                      <p className="text-gray-700">First AED 375,000 of taxable income</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-700">Effective Date</h4>
                      <p className="text-gray-700">Financial years starting 1 June 2023 onwards</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Compliance Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2"></div>
                      <span>Tax registration within specified timeframes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2"></div>
                      <span>Quarterly tax return filing obligations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2"></div>
                      <span>Annual tax return submissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2"></div>
                      <span>Transfer pricing documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2"></div>
                      <span>Economic substance reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2"></div>
                      <span>Country-by-country reporting (for MNEs)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
                UAE Corporate Regulatory Framework
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Key Legislation & Regulations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {complianceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Scale className="w-6 h-6 text-precedential-gold flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 bg-precedential-black text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Corporate Law Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Specialized corporate lawyers with deep UAE market knowledge</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Compliance Assurance</h4>
                    <p className="text-gray-300 text-sm">Full regulatory compliance and ongoing legal support</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Business Growth</h4>
                    <p className="text-gray-300 text-sm">Strategic legal advice to drive business success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default CorporateLawDubai;
