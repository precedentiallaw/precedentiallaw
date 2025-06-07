
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, Building, Shield, TrendingUp, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';

const UAECorporateTaxLawyers: React.FC = () => {
  const taxServices = [
    {
      title: "Corporate Tax Compliance",
      description: "Complete UAE corporate tax registration, filing, and compliance services",
      icon: FileText,
      services: ["Tax registration with FTA", "Quarterly/annual tax returns", "Compliance monitoring", "Audit support"]
    },
    {
      title: "Tax Planning & Strategy",
      description: "Optimize your tax position with expert strategic planning",
      icon: TrendingUp,
      services: ["Tax efficiency planning", "Structure optimization", "Group company strategies", "International tax planning"]
    },
    {
      title: "Transfer Pricing",
      description: "Complex transfer pricing documentation and compliance",
      icon: Building,
      services: ["Transfer pricing studies", "Documentation preparation", "Economic analysis", "Compliance reviews"]
    },
    {
      title: "Tax Advisory & Consultation",
      description: "Expert guidance on UAE corporate tax implications",
      icon: Shield,
      services: ["Tax law interpretation", "Transaction structuring", "Risk assessment", "Regulatory updates"]
    }
  ];

  const taxThresholds = [
    {
      category: "Small Business Relief",
      threshold: "AED 3 million or below",
      rate: "0%",
      description: "Qualifying small businesses are exempt from corporate tax"
    },
    {
      category: "Standard Rate",
      threshold: "Above AED 3 million",
      rate: "9%",
      description: "Standard corporate tax rate applies to taxable income"
    },
    {
      category: "Free Zone Qualifying Income",
      threshold: "Qualifying activities only",
      rate: "0%",
      description: "Specific free zone activities remain tax-exempt"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Corporate Tax Lawyers | Expert Tax Compliance & Planning | Business Tax Advisory Dubai</title>
        <meta name="description" content="Expert UAE corporate tax lawyers providing comprehensive tax compliance, planning, and advisory services. Navigate new corporate tax regulations with confidence." />
        <meta name="keywords" content="UAE corporate tax lawyers, corporate tax compliance UAE, business tax advisory Dubai, UAE tax planning, FTA registration, corporate tax filing UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/uae-corporate-tax-lawyers" />
        
        <meta property="og:title" content="UAE Corporate Tax Lawyers | Expert Tax Compliance & Planning Services" />
        <meta property="og:description" content="Professional UAE corporate tax legal services. Expert guidance on tax compliance, planning, and regulatory requirements under new UAE corporate tax law." />
        <meta property="og:url" content="https://precedentiallaw.com/uae-corporate-tax-lawyers" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="flex justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full text-sm">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span>New Tax Law Effective June 2023</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                UAE Corporate Tax <span className="text-gold-gradient">Lawyers</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Navigate UAE's new corporate tax landscape with confidence. Expert legal guidance on tax compliance, planning, and optimization strategies to protect your business and ensure full regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Tax Compliance Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download Tax Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-50 border-l-4 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Important: UAE Corporate Tax Implementation</h2>
                  <p className="text-gray-700 mb-4">
                    The UAE Corporate Tax Law came into effect on <strong>June 1, 2023</strong>. Businesses with financial years starting on or after this date must comply with new corporate tax obligations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-sm mb-2">Registration Deadline</h3>
                      <p className="text-xs text-gray-600">Within 3 months of meeting threshold or by tax period end</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-sm mb-2">First Returns</h3>
                      <p className="text-xs text-gray-600">Due 9 months after first tax period end</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-sm mb-2">Penalties</h3>
                      <p className="text-xs text-gray-600">Significant penalties for non-compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">UAE Corporate Tax Rates</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Understanding the new tax structure and thresholds for UAE businesses
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {taxThresholds.map((threshold, index) => (
                  <div key={threshold.category} className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-precedential-gold">
                    <div className="text-3xl font-bold text-precedential-gold mb-2">{threshold.rate}</div>
                    <h3 className="text-xl font-bold mb-3">{threshold.category}</h3>
                    <p className="text-sm text-gray-500 mb-3">{threshold.threshold}</p>
                    <p className="text-sm text-gray-600">{threshold.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Comprehensive Tax Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Full-service corporate tax support from registration to ongoing compliance
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {taxServices.map((service, index) => (
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Corporate Tax Compliance Timeline</h2>
              <div className="space-y-8">
                {[
                  {
                    phase: "Assessment & Registration",
                    timeframe: "Immediate",
                    tasks: ["Determine tax obligations", "Register with FTA", "Obtain Tax Registration Number", "Set up tax accounting systems"],
                    urgency: "high"
                  },
                  {
                    phase: "Quarterly Obligations",
                    timeframe: "Every 3 months",
                    tasks: ["Review taxable income", "Prepare quarterly assessments", "Maintain tax records", "Monitor compliance requirements"],
                    urgency: "medium"
                  },
                  {
                    phase: "Annual Tax Return",
                    timeframe: "9 months after year-end",
                    tasks: ["Prepare annual tax return", "Calculate final tax liability", "Submit to FTA", "Pay any outstanding tax"],
                    urgency: "high"
                  },
                  {
                    phase: "Ongoing Compliance",
                    timeframe: "Continuous",
                    tasks: ["Maintain tax records", "Monitor law changes", "Review business structure", "Plan tax optimization"],
                    urgency: "low"
                  }
                ].map((phase, index) => (
                  <div key={phase.phase} className={`p-6 rounded-xl border-l-4 ${
                    phase.urgency === 'high' ? 'bg-red-50 border-red-400' :
                    phase.urgency === 'medium' ? 'bg-yellow-50 border-yellow-400' :
                    'bg-green-50 border-green-400'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        phase.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        phase.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {phase.timeframe}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {task}
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Choose Our Tax Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calculator className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Tax Optimization Specialists</h3>
                      <p className="text-gray-600">Strategic tax planning to minimize liability while ensuring full compliance with UAE tax law.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Comprehensive Documentation</h3>
                      <p className="text-gray-600">Complete preparation of all required tax documentation and record-keeping systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Audit Protection</h3>
                      <p className="text-gray-600">Full audit support and representation before Federal Tax Authority when required.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Business Growth Focus</h3>
                      <p className="text-gray-600">Tax strategies aligned with business growth objectives and expansion plans.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Multi-Entity Expertise</h3>
                      <p className="text-gray-600">Complex group structures, transfer pricing, and international tax coordination.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Cost-Effective Solutions</h3>
                      <p className="text-gray-600">Efficient tax compliance processes that minimize costs and administrative burden.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Ensure Corporate Tax Compliance</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't risk penalties or non-compliance. Get expert legal guidance on UAE corporate tax obligations and optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Schedule Tax Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Tax Compliance Checklist
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

export default UAECorporateTaxLawyers;
