
import React from 'react';
import { CheckCircle, TrendingUp, Shield, Scale, Building, Users } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  approach: string;
  outcome: string;
  value: string;
  timeline: string;
  icon: React.ComponentType<any>;
  featured?: boolean;
}

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
    caseStudy.featured 
      ? 'bg-gradient-to-br from-precedential-black to-slate-800 text-white border-2 border-precedential-gold' 
      : 'glass-card bg-white border border-gray-100'
  }`}>
    {caseStudy.featured && (
      <div className="absolute top-4 right-4 bg-precedential-gold text-precedential-black text-xs px-3 py-1 rounded-full font-bold">
        LANDMARK CASE
      </div>
    )}
    
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-3 rounded-full ${
          caseStudy.featured ? 'bg-precedential-gold text-precedential-black' : 'bg-precedential-gold/10'
        }`}>
          <caseStudy.icon className={`w-6 h-6 ${caseStudy.featured ? 'text-precedential-black' : 'text-precedential-gold'}`} />
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          caseStudy.featured 
            ? 'bg-precedential-gold/20 text-precedential-gold' 
            : 'bg-precedential-gold/10 text-precedential-gold'
        }`}>
          {caseStudy.category}
        </span>
      </div>
      
      <h3 className={`text-xl font-playfair font-bold mb-4 ${caseStudy.featured ? 'text-white' : 'text-precedential-black'}`}>
        {caseStudy.title}
      </h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className={`font-semibold mb-2 text-sm ${caseStudy.featured ? 'text-precedential-gold' : 'text-gray-900'}`}>
            CHALLENGE
          </h4>
          <p className={`text-sm leading-relaxed ${caseStudy.featured ? 'text-white/90' : 'text-gray-600'}`}>
            {caseStudy.challenge}
          </p>
        </div>
        
        <div>
          <h4 className={`font-semibold mb-2 text-sm ${caseStudy.featured ? 'text-precedential-gold' : 'text-gray-900'}`}>
            OUR APPROACH
          </h4>
          <p className={`text-sm leading-relaxed ${caseStudy.featured ? 'text-white/90' : 'text-gray-600'}`}>
            {caseStudy.approach}
          </p>
        </div>
        
        <div>
          <h4 className={`font-semibold mb-2 text-sm ${caseStudy.featured ? 'text-precedential-gold' : 'text-gray-900'}`}>
            OUTCOME
          </h4>
          <p className={`text-sm leading-relaxed ${caseStudy.featured ? 'text-white/90' : 'text-gray-600'}`}>
            {caseStudy.outcome}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-opacity-20">
        <div className="text-center">
          <TrendingUp className={`w-5 h-5 mx-auto mb-1 ${caseStudy.featured ? 'text-precedential-gold' : 'text-precedential-gold'}`} />
          <p className={`text-xs ${caseStudy.featured ? 'text-white/70' : 'text-gray-500'}`}>Value</p>
          <p className={`font-bold text-sm ${caseStudy.featured ? 'text-white' : 'text-precedential-black'}`}>
            {caseStudy.value}
          </p>
        </div>
        <div className="text-center">
          <CheckCircle className={`w-5 h-5 mx-auto mb-1 ${caseStudy.featured ? 'text-precedential-gold' : 'text-precedential-gold'}`} />
          <p className={`text-xs ${caseStudy.featured ? 'text-white/70' : 'text-gray-500'}`}>Timeline</p>
          <p className={`font-bold text-sm ${caseStudy.featured ? 'text-white' : 'text-precedential-black'}`}>
            {caseStudy.timeline}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudyShowcase: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "Landmark Commercial Arbitration Victory",
      category: "International Arbitration",
      challenge: "A multinational technology corporation faced a complex breach of contract dispute worth AED 50M involving cross-border intellectual property rights and sophisticated licensing agreements across multiple jurisdictions.",
      approach: "We developed a comprehensive arbitration strategy leveraging DIFC-LCIA rules, assembled expert witnesses in IP valuation, and crafted compelling legal arguments based on UAE Commercial Code precedents and international commercial law principles.",
      outcome: "Secured a landmark arbitration award of AED 42M for our client, establishing important precedent for IP licensing disputes in the MENA region. The decision was upheld on appeal and has been cited in subsequent commercial arbitrations.",
      value: "AED 42M Awarded",
      timeline: "18 months",
      icon: Scale,
      featured: true
    },
    {
      id: "2",
      title: "Complex Cross-Border Family Asset Protection",
      category: "Family Law & Succession",
      challenge: "A high-net-worth family required sophisticated estate planning across multiple jurisdictions, involving substantial UAE real estate holdings, international investment portfolios, and complex guardianship arrangements for minor children.",
      approach: "Implemented a comprehensive succession strategy utilizing DIFC Wills Court jurisdiction, structured international trust arrangements, and coordinated with UK and Swiss legal counsel to ensure seamless cross-border estate planning compliance.",
      outcome: "Successfully protected family assets worth over AED 100M through sophisticated legal structures, ensuring tax-efficient succession planning and comprehensive guardianship protections that withstood subsequent family law challenges.",
      value: "AED 100M+ Protected",
      timeline: "12 months",
      icon: Shield
    },
    {
      id: "3",
      title: "Mega Development Project Legal Framework",
      category: "Real Estate & Construction",
      challenge: "A major developer required comprehensive legal support for a AED 2 billion mixed-use development project, involving complex regulatory compliance, international financing arrangements, and sophisticated joint venture structuring.",
      approach: "Coordinated multi-jurisdictional legal teams, navigated Dubai Municipality approvals, structured RERA compliance frameworks, and negotiated complex financing agreements with international banks and sovereign wealth funds.",
      outcome: "Successfully launched the development project on schedule, securing all regulatory approvals and financing commitments. The project has become a landmark development in Dubai's skyline and generated exceptional returns for stakeholders.",
      value: "AED 2B Project",
      timeline: "24 months",
      icon: Building
    },
    {
      id: "4",
      title: "Fintech Regulatory Compliance Success",
      category: "Banking & Finance",
      challenge: "An international fintech company required comprehensive regulatory guidance to establish operations across UAE, DIFC, and ADGM jurisdictions while ensuring compliance with evolving Central Bank digital payment regulations.",
      approach: "Developed comprehensive regulatory compliance framework, coordinated with UAE Central Bank, DFSA, and FSRA authorities, and structured licensing strategy optimizing regulatory capital requirements across multiple financial free zones.",
      outcome: "Successfully obtained all required licenses enabling full fintech operations across UAE jurisdictions. Client achieved rapid market penetration and has become a leading digital payment provider in the region.",
      value: "AED 500M+ Revenue",
      timeline: "15 months",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-precedential-gold blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-precedential-gold/10 border border-precedential-gold/20">
              <CheckCircle className="w-8 h-8 text-precedential-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Landmark <span className="text-gold-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished case portfolio demonstrates our ability to handle the most complex legal challenges, 
            setting new precedents and delivering exceptional results for our clients across diverse practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="glass-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Track Record of <span className="text-gold-gradient">Excellence</span>
            </h3>
            <p className="text-gray-600">
              These case studies represent a fraction of our successful outcomes across various practice areas and jurisdictions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-precedential-gold mb-2">AED 5B+</div>
              <div className="text-sm text-gray-600">Total Case Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-precedential-gold mb-2">500+</div>
              <div className="text-sm text-gray-600">Cases Resolved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-precedential-gold mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-precedential-gold mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;
