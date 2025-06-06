
import React, { useState } from 'react';
import { Calculator, FileText, CheckCircle, Download, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InteractiveLegalTools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'business-cost-calculator',
      title: 'Business Setup Cost Calculator',
      description: 'Calculate accurate costs for setting up your business in Dubai',
      icon: Calculator,
      category: 'Business Setup',
      estimatedTime: '3 minutes',
      features: ['Mainland vs Free Zone comparison', 'License cost estimation', 'Visa requirements', 'Office space analysis']
    },
    {
      id: 'divorce-timeline',
      title: 'Divorce Timeline Estimator',
      description: 'Understand the expected timeline for divorce proceedings in UAE',
      icon: Clock,
      category: 'Family Law',
      estimatedTime: '2 minutes',
      features: ['Court processing times', 'Document requirements', 'Asset division timeline', 'Child custody procedures']
    },
    {
      id: 'visa-checker',
      title: 'Visa Requirements Checker',
      description: 'Check specific visa requirements based on your situation',
      icon: CheckCircle,
      category: 'Immigration',
      estimatedTime: '1 minute',
      features: ['Golden Visa eligibility', 'Work permit requirements', 'Family visa criteria', 'Investment visa options']
    },
    {
      id: 'document-templates',
      title: 'Legal Document Templates',
      description: 'Download professionally drafted legal document templates',
      icon: FileText,
      category: 'Document Library',
      estimatedTime: 'Instant',
      features: ['Employment contracts', 'Lease agreements', 'Power of attorney forms', 'Will templates']
    }
  ];

  const BusinessCalculator = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Business Setup Cost Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Business Type</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Trading Company</option>
            <option>Consultancy</option>
            <option>Manufacturing</option>
            <option>E-commerce</option>
            <option>Professional Services</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Preferred Location</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Dubai Mainland</option>
            <option>DIFC</option>
            <option>DMCC</option>
            <option>Dubai Internet City</option>
            <option>Jebel Ali Free Zone</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Number of Visas Required</label>
          <input type="number" min="1" max="50" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 3" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Office Space Required</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Virtual Office</option>
            <option>Shared Office</option>
            <option>Private Office</option>
            <option>Warehouse</option>
          </select>
        </div>
      </div>
      <div className="bg-precedential-gold/10 p-6 rounded-lg">
        <h4 className="text-lg font-bold mb-4">Estimated Total Cost: AED 45,000 - 65,000</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>• License Fee: AED 15,000 - 25,000</div>
          <div>• Visa Processing: AED 12,000 - 18,000</div>
          <div>• Office Setup: AED 10,000 - 15,000</div>
          <div>• Legal Documentation: AED 8,000 - 12,000</div>
        </div>
        <p className="text-xs text-gray-600 mt-4">*Estimates based on current market rates. Contact us for detailed quotation.</p>
      </div>
      <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
        Get Detailed Quote
      </Button>
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your legal decisions with our comprehensive suite of interactive tools and calculators, 
            designed to provide instant insights and professional guidance.
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
                        {tool.features.slice(0, 2).map((feature, idx) => (
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
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => setSelectedTool(null)}
              className="mb-6 border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black"
            >
              ← Back to Tools
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
