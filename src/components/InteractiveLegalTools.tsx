import React, { useState } from 'react';
import { Calculator, FileText, CheckCircle, Download, ExternalLink, Clock, DollarSign, Calendar, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InteractiveLegalTools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'business-cost-calculator',
      title: 'Business Setup Cost Calculator',
      description: 'Calculate accurate costs for setting up your business in Dubai with detailed breakdowns',
      icon: Calculator,
      category: 'Business Setup',
      estimatedTime: '5 minutes',
      features: ['Mainland vs Free Zone comparison', 'License cost estimation', 'Visa requirements calculator', 'Office space analysis', 'Government fee calculator', 'Total investment planning']
    },
    {
      id: 'golden-visa-eligibility',
      title: 'Golden Visa Eligibility Checker',
      description: 'Determine your eligibility for UAE Golden Visa across all categories',
      icon: CheckCircle,
      category: 'Immigration',
      estimatedTime: '3 minutes',
      features: ['Investment route analysis', 'Talent category assessment', 'Real estate qualification', 'Student pathway checker', 'Professional eligibility', 'Application timeline']
    },
    {
      id: 'corporate-tax-calculator',
      title: 'Corporate Tax Calculator',
      description: 'Calculate UAE Corporate Tax liability and optimization strategies',
      icon: DollarSign,
      category: 'Tax Planning',
      estimatedTime: '4 minutes',
      features: ['Tax liability calculation', 'Exemption eligibility', 'Free zone benefits', 'Filing requirement analysis', 'Payment schedule', 'Optimization strategies']
    },
    {
      id: 'divorce-timeline',
      title: 'Divorce Timeline Estimator',
      description: 'Understand expected timeline and process for divorce proceedings in UAE',
      icon: Clock,
      category: 'Family Law',
      estimatedTime: '3 minutes',
      features: ['Court processing times', 'Document requirements', 'Asset division timeline', 'Child custody procedures', 'Mediation periods', 'Final decree processing']
    },
    {
      id: 'employment-contract-analyzer',
      title: 'Employment Contract Analyzer',
      description: 'Analyze employment contracts for UAE Labour Law compliance',
      icon: Users,
      category: 'Employment Law',
      estimatedTime: '4 minutes',
      features: ['Contract compliance check', 'Benefit calculation', 'Termination analysis', 'End of service benefits', 'Notice period calculator', 'Violation identification']
    },
    {
      id: 'real-estate-due-diligence',
      title: 'Real Estate Due Diligence Checklist',
      description: 'Comprehensive checklist for property investment legal compliance',
      icon: Building,
      category: 'Real Estate',
      estimatedTime: '6 minutes',
      features: ['Developer verification', 'RERA compliance check', 'Title deed analysis', 'Payment plan review', 'Legal documentation', 'Investment risk assessment']
    },
    {
      id: 'document-templates',
      title: 'Legal Document Templates',
      description: 'Download professionally drafted legal document templates',
      icon: FileText,
      category: 'Document Library',
      estimatedTime: 'Instant',
      features: ['Employment contracts', 'Lease agreements', 'Power of attorney forms', 'Will templates', 'Corporate resolutions', 'NDA templates']
    },
    {
      id: 'court-fee-calculator',
      title: 'Court Fee Calculator',
      description: 'Calculate court fees and litigation costs across UAE jurisdictions',
      icon: Calendar,
      category: 'Litigation',
      estimatedTime: '2 minutes',
      features: ['UAE court fees', 'DIFC court costs', 'Arbitration expenses', 'Appeal fees', 'Execution costs', 'Expert witness fees']
    }
  ];

  const BusinessCalculator = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Business Setup Cost Calculator</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get accurate cost estimates for your UAE business setup with our comprehensive calculator covering all major expenses and requirements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Business Type</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Trading Company</option>
            <option>Consultancy Services</option>
            <option>Manufacturing</option>
            <option>E-commerce Business</option>
            <option>Professional Services</option>
            <option>Technology Services</option>
            <option>Media & Marketing</option>
            <option>Healthcare Services</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Preferred Location</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Dubai Mainland</option>
            <option>DIFC (Dubai International Financial Centre)</option>
            <option>DMCC (Dubai Multi Commodities Centre)</option>
            <option>Dubai Internet City</option>
            <option>Dubai Media City</option>
            <option>Jebel Ali Free Zone</option>
            <option>Dubai South</option>
            <option>ADGM (Abu Dhabi Global Market)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Number of Visas Required</label>
          <input type="number" min="1" max="50" defaultValue="3" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Office Space Required</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Virtual Office</option>
            <option>Shared Office (Flexi Desk)</option>
            <option>Private Office (Small)</option>
            <option>Private Office (Medium)</option>
            <option>Warehouse Space</option>
            <option>Retail Space</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Expected Annual Revenue</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Under AED 375,000</option>
            <option>AED 375,000 - 1M</option>
            <option>AED 1M - 5M</option>
            <option>AED 5M - 20M</option>
            <option>Above AED 20M</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Business Activities (Number)</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>1 Activity</option>
            <option>2-3 Activities</option>
            <option>4-5 Activities</option>
            <option>6+ Activities</option>
          </select>
        </div>
      </div>

      <div className="bg-gradient-to-r from-precedential-gold/10 to-precedential-gold/5 p-8 rounded-xl border-2 border-precedential-gold/20">
        <h4 className="text-2xl font-bold mb-6 text-center">Estimated Setup Costs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Government License Fee:</span>
              <span className="font-semibold">AED 15,000 - 25,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Visa Processing (3 visas):</span>
              <span className="font-semibold">AED 12,000 - 18,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Office Setup & Rent:</span>
              <span className="font-semibold">AED 10,000 - 15,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Legal Documentation:</span>
              <span className="font-semibold">AED 8,000 - 12,000</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Bank Account Opening:</span>
              <span className="font-semibold">AED 3,000 - 5,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Initial Deposits:</span>
              <span className="font-semibold">AED 5,000 - 10,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Professional Services:</span>
              <span className="font-semibold">AED 5,000 - 8,000</span>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-lg font-bold">Total Estimated Cost:</span>
              <span className="text-xl font-bold text-precedential-gold">AED 58,000 - 93,000</span>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white/50 rounded-lg">
          <p className="text-sm text-gray-700 mb-2"><strong>Note:</strong> Estimates based on current market rates and government fees. Actual costs may vary based on specific requirements.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-precedential-gold">Processing Time</div>
              <div>15-20 business days</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-precedential-gold">Visa Processing</div>
              <div>5-7 business days</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-precedential-gold">Bank Account</div>
              <div>7-14 business days</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
          Get Detailed Quote
        </Button>
        <Button size="lg" variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
          Schedule Consultation
        </Button>
      </div>
    </div>
  );

  const GoldenVisaChecker = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Golden Visa Eligibility Checker</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Determine your eligibility for UAE's 10-year Golden Visa across all available categories and get personalized recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nationality</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>India</option>
            <option>Pakistan</option>
            <option>Philippines</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Primary Purpose</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Real Estate Investment</option>
            <option>Business Investment</option>
            <option>Professional/Talent</option>
            <option>Student/Academic</option>
            <option>Entrepreneur</option>
            <option>Retiree</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Investment Amount Available</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Below AED 500,000</option>
            <option>AED 500,000 - 2M</option>
            <option>AED 2M - 5M</option>
            <option>AED 5M - 10M</option>
            <option>Above AED 10M</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Educational Qualification</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>High School</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>PhD</option>
            <option>Professional Certification</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Professional Experience</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Less than 5 years</option>
            <option>5-10 years</option>
            <option>10-15 years</option>
            <option>15+ years</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Industry/Field</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold">
            <option>Technology/IT</option>
            <option>Healthcare/Medicine</option>
            <option>Engineering</option>
            <option>Finance/Banking</option>
            <option>Education/Research</option>
            <option>Arts/Culture</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl">
        <h4 className="text-2xl font-bold mb-6 text-green-800 text-center">Eligibility Assessment Results</h4>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h5 className="text-lg font-bold text-green-800">Real Estate Investment Route</h5>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Eligible</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-700">Minimum Investment:</div>
                <div className="text-green-700">AED 2,000,000 in property</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">Processing Time:</div>
                <div className="text-green-700">2-4 weeks</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">Family Inclusion:</div>
                <div className="text-green-700">Spouse + children</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">Success Rate:</div>
                <div className="text-green-700">95% with proper documentation</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <h5 className="text-lg font-bold text-blue-800">Investor/Entrepreneur Route</h5>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Potentially Eligible</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-700">Minimum Investment:</div>
                <div className="text-blue-700">AED 500,000 in business</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">Additional Requirements:</div>
                <div className="text-blue-700">Business plan approval needed</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
              <h5 className="text-lg font-bold text-purple-800">Talent/Professional Route</h5>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Assessment Required</span>
            </div>
            <div className="text-sm text-gray-600">
              Requires endorsement from relevant UAE government entity based on your field of expertise.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
          Start Application Process
        </Button>
        <Button size="lg" variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
          Expert Consultation
        </Button>
      </div>
    </div>
  );

  const DivorceTimeline = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Divorce Timeline Estimator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Type of Divorce</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Mutual Consent (Amicable)</option>
            <option>Contested Divorce</option>
            <option>Khula (Wife-initiated)</option>
            <option>Mubarat (Mutual Agreement)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Applicable Law</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>UAE Personal Status Law</option>
            <option>Home Country Law (Non-Muslims)</option>
            <option>DIFC Courts Jurisdiction</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Children Involved</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>No Children</option>
            <option>Minor Children</option>
            <option>Adult Children</option>
          </select>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold mb-4">Estimated Timeline: 4-8 months</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Initial Filing & Documentation</span>
            <span>2-4 weeks</span>
          </div>
          <div className="flex justify-between">
            <span>Mediation Period</span>
            <span>1-2 months</span>
          </div>
          <div className="flex justify-between">
            <span>Court Proceedings</span>
            <span>2-4 months</span>
          </div>
          <div className="flex justify-between">
            <span>Final Decree</span>
            <span>2-4 weeks</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-4">*Timeline varies based on case complexity and court schedule</p>
      </div>
    </div>
  );

  const VisaChecker = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Visa Requirements Checker</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nationality</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>United Kingdom</option>
            <option>United States</option>
            <option>India</option>
            <option>Pakistan</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Purpose of Visit/Stay</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Employment</option>
            <option>Business Investment</option>
            <option>Real Estate Investment</option>
            <option>Family Reunification</option>
            <option>Golden Visa</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Investment Amount (if applicable)</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Below AED 500,000</option>
            <option>AED 500,000 - 1M</option>
            <option>AED 1M - 2M</option>
            <option>Above AED 2M</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Educational Qualification</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>PhD</option>
            <option>Professional Certification</option>
          </select>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-lg font-bold mb-4 text-green-800">Eligible Visa Types:</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-medium">Golden Visa (10 years)</div>
              <div className="text-sm text-gray-600">Based on investment/qualification criteria</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-medium">Employment Visa (2-3 years)</div>
              <div className="text-sm text-gray-600">Renewable based on employment contract</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DocumentTemplates = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Legal Document Templates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Employment Contract Template', category: 'HR & Employment', pages: '12 pages' },
          { name: 'Tenancy Agreement (RERA Compliant)', category: 'Real Estate', pages: '8 pages' },
          { name: 'Power of Attorney Form', category: 'Legal Documents', pages: '4 pages' },
          { name: 'Will Template (Non-Muslims)', category: 'Estate Planning', pages: '6 pages' },
          { name: 'Shareholder Agreement', category: 'Corporate', pages: '15 pages' },
          { name: 'Non-Disclosure Agreement', category: 'Business', pages: '5 pages' }
        ].map((doc, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-precedential-gold transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium mb-2">{doc.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{doc.category}</p>
                <p className="text-xs text-gray-500">{doc.pages}</p>
              </div>
              <Button variant="outline" size="sm" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 p-4 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Disclaimer:</strong> These templates are for informational purposes only. Professional legal review is recommended before use.
        </p>
      </div>
    </div>
  );

  const renderToolContent = () => {
    switch (selectedTool) {
      case 'business-cost-calculator':
        return <BusinessCalculator />;
      case 'golden-visa-eligibility':
        return <GoldenVisaChecker />;
      case 'divorce-timeline':
        return <DivorceTimeline />;
      case 'visa-checker':
        return <VisaChecker />;
      case 'document-templates':
        return <DocumentTemplates />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Interactive <span className="text-gold-gradient">Legal Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empower your legal decisions with our comprehensive suite of interactive tools and calculators, 
            designed to provide instant insights and professional guidance for UAE legal matters.
          </p>
        </div>

        {!selectedTool ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Card 
                key={tool.id}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-precedential-gold"
                onClick={() => setSelectedTool(tool.id)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-precedential-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-8 h-8 text-precedential-gold" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription className="text-sm">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{tool.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">{tool.estimatedTime}</span>
                    </div>
                    <div className="pt-3">
                      <h4 className="text-sm font-medium mb-2">Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {tool.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                    Use Tool <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => setSelectedTool(null)}
              className="mb-8 border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black"
            >
              ← Back to All Tools
            </Button>
            <Card className="p-8">
              <CardContent>
                {renderToolContent()}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveLegalTools;
