
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Clock, Shield, FileText, Users } from 'lucide-react';

const GoldenVisaLawyers: React.FC = () => {
  const goldenVisaCategories = [
    {
      category: "Investors",
      requirement: "AED 2 Million Investment",
      details: "Real estate investment, bank deposit, or investment fund",
      processingTime: "30-60 days",
      benefits: ["10-year renewable visa", "100% business ownership", "Family sponsorship"]
    },
    {
      category: "Entrepreneurs",
      requirement: "Innovative Startup",
      details: "Approved by UAE incubators or with significant investment",
      processingTime: "45-90 days",
      benefits: ["10-year visa", "Business expansion support", "Investor network access"]
    },
    {
      category: "Professionals",
      requirement: "Specialized Skills",
      details: "Doctors, engineers, scientists, artists with proven expertise",
      processingTime: "30-45 days",
      benefits: ["Long-term stability", "Career development", "Premium healthcare"]
    },
    {
      category: "Students",
      requirement: "Academic Excellence",
      details: "Outstanding academic performance in UAE universities",
      processingTime: "15-30 days",
      benefits: ["Study completion", "Job search period", "Career transition"]
    }
  ];

  const legalRequirements = [
    "Valid passport with 6+ months validity",
    "UAE entry permit and Emirates ID",
    "Medical fitness certificate",
    "Police clearance certificate",
    "Proof of investment or qualification",
    "Bank statements and financial documents",
    "Educational certificates (apostilled)",
    "Professional licenses and certifications"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Golden Visa Lawyers Dubai | UAE Golden Visa Legal Services 2024 | Precedential Law</title>
        <meta name="description" content="Expert Golden Visa lawyers in Dubai. Get professional legal assistance for UAE Golden Visa applications, investment visas, and long-term residency. 95% success rate, fast processing." />
        <meta name="keywords" content="golden visa lawyers Dubai, UAE golden visa legal services, Dubai golden visa application, UAE investment visa lawyers, long term visa Dubai, UAE residence visa lawyers" />
        <link rel="canonical" href="https://precedentiallaw.com/services/golden-visa-lawyers" />
        
        <meta property="og:title" content="Golden Visa Lawyers Dubai | UAE Golden Visa Legal Services" />
        <meta property="og:description" content="Professional legal assistance for UAE Golden Visa applications. Expert lawyers with 95% success rate for investment visas and long-term residency." />
        <meta property="og:url" content="https://precedentiallaw.com/services/golden-visa-lawyers" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-precedential-black to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                UAE Golden <span className="text-gold-gradient">Visa Lawyers</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Expert legal guidance for UAE Golden Visa applications with 95% success rate. 
                Secure your 10-year renewable residence visa with Dubai's premier immigration lawyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Start Your Golden Visa Application
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Free Eligibility Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">500+</div>
                <div className="text-gray-600">Golden Visas Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">30</div>
                <div className="text-gray-600">Days Average Processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-precedential-gold mb-2">10</div>
                <div className="text-gray-600">Years Visa Validity</div>
              </div>
            </div>
          </div>
        </section>

        {/* Golden Visa Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              UAE Golden Visa Categories 2024
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goldenVisaCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-precedential-gold" />
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirement</h4>
                      <p className="text-precedential-gold font-medium">{category.requirement}</p>
                      <p className="text-gray-600">{category.details}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-precedential-gold" />
                      <span className="text-sm text-gray-600">Processing: {category.processingTime}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {category.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Requirements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
                Golden Visa Legal Requirements & Documentation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-precedential-gold" />
                    Required Documents
                  </h3>
                  <ul className="space-y-3">
                    {legalRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-precedential-gold" />
                    Legal Process Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-precedential-gold pl-4">
                      <h4 className="font-semibold">1. Eligibility Assessment</h4>
                      <p className="text-gray-600 text-sm">Review qualifications and investment options</p>
                    </div>
                    <div className="border-l-4 border-precedential-gold pl-4">
                      <h4 className="font-semibold">2. Document Preparation</h4>
                      <p className="text-gray-600 text-sm">Compile and authenticate required documents</p>
                    </div>
                    <div className="border-l-4 border-precedential-gold pl-4">
                      <h4 className="font-semibold">3. Application Submission</h4>
                      <p className="text-gray-600 text-sm">File application with ICP/GDRFA</p>
                    </div>
                    <div className="border-l-4 border-precedential-gold pl-4">
                      <h4 className="font-semibold">4. Visa Issuance</h4>
                      <p className="text-gray-600 text-sm">Receive Golden Visa and Emirates ID</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-precedential-gold/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Golden Visa Legal Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-precedential-gold" />
                    <div className="text-left">
                      <h4 className="font-semibold">Expert Team</h4>
                      <p className="text-sm text-gray-600">Specialized immigration lawyers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-precedential-gold" />
                    <div className="text-left">
                      <h4 className="font-semibold">Legal Protection</h4>
                      <p className="text-sm text-gray-600">Full compliance guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-precedential-gold" />
                    <div className="text-left">
                      <h4 className="font-semibold">Fast Processing</h4>
                      <p className="text-sm text-gray-600">Expedited application handling</p>
                    </div>
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

export default GoldenVisaLawyers;
