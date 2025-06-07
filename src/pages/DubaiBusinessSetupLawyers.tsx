
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Building, Users, FileText, Shield, Globe, CheckCircle, Star, Award, Clock } from 'lucide-react';

const DubaiBusinessSetupLawyers: React.FC = () => {
  const setupServices = [
    {
      title: "Mainland Company Formation",
      description: "LLC setup with 100% foreign ownership for local market access",
      features: ["Local market trading", "Government contracts eligible", "Multiple business activities", "No currency restrictions"],
      timeline: "15-20 days",
      investment: "From AED 300K"
    },
    {
      title: "Free Zone Establishment",
      description: "Tax-optimized structures in Dubai's premier free zones",
      features: ["0% corporate tax", "100% profit repatriation", "Easy visa processing", "Modern facilities"],
      timeline: "5-10 days",
      investment: "From AED 15K"
    },
    {
      title: "DIFC Company Setup",
      description: "International financial services with common law framework",
      features: ["Independent legal system", "Zero tax on qualifying income", "DIFC Courts access", "International arbitration"],
      timeline: "10-15 days",
      investment: "From USD 35K"
    },
    {
      title: "Professional License",
      description: "Consultancy and professional services licensing",
      features: ["Individual or corporate", "Home office options", "Flexible visa allocation", "Professional activities"],
      timeline: "7-12 days",
      investment: "From AED 20K"
    }
  ];

  const industries = [
    "Technology & IT Services", "Trading & Import/Export", "Manufacturing & Industrial", 
    "Real Estate & Construction", "Healthcare & Medical", "Education & Training",
    "Tourism & Hospitality", "Financial Services", "Media & Advertising",
    "Food & Beverage", "Retail & E-commerce", "Consulting & Professional Services"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dubai Business Setup Lawyers | Expert Company Formation Legal Services | Top Business Law Firm</title>
        <meta name="description" content="Leading Dubai business setup lawyers with 15+ years experience. Expert company formation, business licensing, and corporate legal services. 500+ successful setups." />
        <meta name="keywords" content="Dubai business setup lawyers, company formation Dubai, business licensing Dubai, corporate lawyers Dubai, business setup legal services, Dubai business law firm" />
        <link rel="canonical" href="https://precedentiallaw.com/dubai-business-setup-lawyers" />
        
        <meta property="og:title" content="Dubai Business Setup Lawyers | Expert Company Formation Legal Services" />
        <meta property="og:description" content="Top Dubai business setup lawyers specializing in company formation, business licensing, and corporate legal services with proven track record." />
        <meta property="og:url" content="https://precedentiallaw.com/dubai-business-setup-lawyers" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="flex justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-precedential-gold" />
                  <span>500+ Companies Formed</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-precedential-gold" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                Dubai Business Setup <span className="text-gold-gradient">Lawyers</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Your trusted legal partners for seamless Dubai business formation. From startup to enterprise, we provide comprehensive business setup legal services with guaranteed compliance and optimal structuring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Free Business Setup Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Complete Business Setup Solutions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  End-to-end business formation services tailored to your industry and business model
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {setupServices.map((service, index) => (
                  <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-precedential-gold hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <div className="text-right text-sm">
                        <div className="text-precedential-gold font-semibold">{service.timeline}</div>
                        <div className="text-gray-500">{service.investment}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-4 w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Industries We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <p className="text-sm font-medium">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Business Setup Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    phase: "Planning & Consultation",
                    steps: ["Business model analysis", "Jurisdiction selection", "License type determination", "Cost structure planning"],
                    icon: Users
                  },
                  {
                    phase: "Documentation & Approvals",
                    steps: ["Legal documentation", "Government submissions", "Approval processing", "License issuance"],
                    icon: FileText
                  },
                  {
                    phase: "Setup & Operations",
                    steps: ["Bank account opening", "Visa processing", "Office setup assistance", "Ongoing compliance"],
                    icon: Building
                  }
                ].map((phase, index) => (
                  <div key={phase.phase} className="text-center">
                    <div className="bg-precedential-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-precedential-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{phase.phase}</h3>
                    <ul className="text-left space-y-2">
                      {phase.steps.map((step) => (
                        <li key={step} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Businesses Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">500+ successful business setups across all Dubai jurisdictions with 99.8% approval rate.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Risk-Free Service</h3>
                      <p className="text-gray-600">Money-back guarantee if we cannot secure your business license within agreed timeframe.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Fast Processing</h3>
                      <p className="text-gray-600">Express setup services available with government fast-track options.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">International Expertise</h3>
                      <p className="text-gray-600">Specialists in setting up businesses for international clients and cross-border operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Dedicated Support Team</h3>
                      <p className="text-gray-600">Personal business setup consultant assigned to guide you through every step.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Transparent Pricing</h3>
                      <p className="text-gray-600">All-inclusive packages with no hidden fees. Complete cost breakdown provided upfront.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Start Your Dubai Business Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful businesses we've helped establish in Dubai. Get expert legal guidance from consultation to operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Get Free Setup Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Download Setup Checklist
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

export default DubaiBusinessSetupLawyers;
