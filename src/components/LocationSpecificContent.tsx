
import React from 'react';
import { MapPin, Building, Users, Briefcase, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LocationSpecificContent: React.FC = () => {
  const emirates = [
    {
      id: "dubai",
      name: "Dubai",
      description: "Global business hub with specialized free zones and international courts",
      population: "3.5M+",
      businessFocus: ["International Trade", "Finance", "Tourism", "Real Estate"],
      legalSpecialties: [
        "DIFC Courts jurisdiction",
        "Free zone regulations",
        "Real estate law",
        "Commercial litigation",
        "International arbitration"
      ],
      keyIndustries: ["Financial Services", "Tourism", "Real Estate", "Trade", "Technology"],
      icon: Building,
      highlight: "Home to DIFC and multiple specialized free zones"
    },
    {
      id: "abu-dhabi",
      name: "Abu Dhabi",
      description: "UAE capital and center for government, oil, and sovereign wealth",
      population: "1.7M+",
      businessFocus: ["Government", "Oil & Gas", "Investment", "Healthcare"],
      legalSpecialties: [
        "ADGM regulations",
        "Government contracts",
        "Energy law",
        "Healthcare law",
        "Investment regulations"
      ],
      keyIndustries: ["Oil & Gas", "Government", "Investment", "Healthcare", "Education"],
      icon: Globe,
      highlight: "Capital city with ADGM financial center"
    },
    {
      id: "sharjah",
      name: "Sharjah",
      description: "Cultural capital with growing business and manufacturing sectors",
      population: "1.8M+",
      businessFocus: ["Manufacturing", "Education", "Culture", "SMEs"],
      legalSpecialties: [
        "Manufacturing law",
        "Employment disputes",
        "SME regulations",
        "Cultural property law",
        "Educational law"
      ],
      keyIndustries: ["Manufacturing", "Education", "Publishing", "Arts", "Logistics"],
      icon: Users,
      highlight: "Cultural capital with diverse business sectors"
    },
    {
      id: "ajman",
      name: "Ajman",
      description: "Emerging business destination with cost-effective opportunities",
      population: "540K+",
      businessFocus: ["SMEs", "Manufacturing", "Tourism", "Services"],
      legalSpecialties: [
        "SME compliance",
        "Tourism law",
        "Manufacturing regulations",
        "Service sector law",
        "Contract disputes"
      ],
      keyIndustries: ["Manufacturing", "Tourism", "Services", "Construction", "Trade"],
      icon: Briefcase,
      highlight: "Cost-effective business setup with growing opportunities"
    },
    {
      id: "fujairah",
      name: "Fujairah",
      description: "Strategic port city focused on logistics and energy storage",
      population: "300K+",
      businessFocus: ["Logistics", "Energy", "Maritime", "Trade"],
      legalSpecialties: [
        "Maritime law",
        "Logistics regulations",
        "Energy storage law",
        "Port regulations",
        "International trade"
      ],
      keyIndustries: ["Logistics", "Energy", "Maritime", "Agriculture", "Mining"],
      icon: Globe,
      highlight: "Strategic port location for logistics and energy"
    },
    {
      id: "ras-al-khaimah",
      name: "Ras Al Khaimah",
      description: "Northern emirate with diverse industrial and tourism sectors",
      population: "420K+",
      businessFocus: ["Industry", "Tourism", "Agriculture", "Mining"],
      legalSpecialties: [
        "Industrial law",
        "Tourism regulations",
        "Mining law",
        "Agricultural law",
        "Environmental compliance"
      ],
      keyIndustries: ["Ceramics", "Tourism", "Agriculture", "Mining", "Manufacturing"],
      icon: Building,
      highlight: "Industrial hub with growing tourism sector"
    },
    {
      id: "umm-al-quwain",
      name: "Umm Al Quwain",
      description: "Peaceful emirate with focus on agriculture and small business",
      population: "80K+",
      businessFocus: ["Agriculture", "SMEs", "Tourism", "Marine"],
      legalSpecialties: [
        "Agricultural law",
        "SME regulations",
        "Marine law",
        "Environmental law",
        "Traditional business"
      ],
      keyIndustries: ["Agriculture", "Marine", "Tourism", "Traditional Crafts", "Services"],
      icon: Users,
      highlight: "Agricultural focus with traditional business support"
    }
  ];

  const legalServices = [
    {
      title: "Free Zone Legal Services",
      description: "Specialized legal support for businesses operating in UAE's 40+ free zones",
      emirates: ["Dubai", "Abu Dhabi", "Sharjah", "Fujairah"],
      features: ["Zone-specific regulations", "License compliance", "Cross-zone operations", "Dispute resolution"]
    },
    {
      title: "Federal Law Compliance",
      description: "Ensuring compliance with UAE Federal laws across all emirates",
      emirates: ["All Emirates"],
      features: ["Federal court representation", "Cross-emirate disputes", "Constitutional matters", "Federal licensing"]
    },
    {
      title: "Emirate-Specific Regulations",
      description: "Local law compliance and government relations in each emirate",
      emirates: ["Location-Specific"],
      features: ["Local licensing", "Municipal regulations", "Emirate courts", "Government liaison"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            UAE-Wide <span className="text-gold-gradient">Legal Coverage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services across all seven emirates, with deep understanding of local regulations, 
            business environments, and legal requirements specific to each jurisdiction.
          </p>
        </div>

        {/* Emirates Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {emirates.map((emirate) => (
            <Card key={emirate.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-precedential-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <emirate.icon className="w-8 h-8 text-precedential-gold" />
                  <span className="text-sm text-gray-500">{emirate.population}</span>
                </div>
                <CardTitle className="text-xl">{emirate.name}</CardTitle>
                <CardDescription>{emirate.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Industries</h4>
                    <div className="flex flex-wrap gap-1">
                      {emirate.keyIndustries.slice(0, 3).map((industry, idx) => (
                        <span key={idx} className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Legal Specialties</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {emirate.legalSpecialties.slice(0, 3).map((specialty, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-precedential-gold rounded-full mr-2"></div>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-precedential-gold font-medium">{emirate.highlight}</p>
                  </div>

                  <Button variant="outline" className="w-full border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                    {emirate.name} Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Services by Location */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Location-Specific Legal Services</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {legalServices.map((service, idx) => (
              <Card key={idx} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Coverage Area</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.emirates.map((emirate, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {emirate}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-precedential-gold rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Expertise */}
        <div className="glass-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Location-Specific Legal Expertise Matters</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each UAE emirate has unique regulations, business cultures, and legal requirements. Our location-specific expertise 
              ensures optimal outcomes regardless of where your legal matter is situated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-precedential-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-precedential-gold" />
              </div>
              <h4 className="font-semibold mb-2">Local Court Knowledge</h4>
              <p className="text-sm text-gray-600">Deep familiarity with local court procedures, judges, and precedents in each emirate.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-precedential-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-precedential-gold" />
              </div>
              <h4 className="font-semibold mb-2">Government Relations</h4>
              <p className="text-sm text-gray-600">Established relationships with local authorities and government departments.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-precedential-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-precedential-gold" />
              </div>
              <h4 className="font-semibold mb-2">Cultural Understanding</h4>
              <p className="text-sm text-gray-600">Appreciation for local business culture and practices that influence legal outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSpecificContent;
