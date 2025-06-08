
import React from 'react';
import { CheckCircle, TrendingUp, Shield, Scale, Building, Users, Globe, Heart } from 'lucide-react';

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
  expatFocus?: boolean;
}

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
    caseStudy.featured 
      ? 'bg-gradient-to-br from-precedential-black to-slate-800 text-white border-2 border-precedential-gold' 
      : caseStudy.expatFocus
      ? 'bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200'
      : 'glass-card bg-white border border-gray-100'
  }`}>
    {caseStudy.featured && (
      <div className="absolute top-4 right-4 bg-precedential-gold text-precedential-black text-xs px-3 py-1 rounded-full font-bold">
        LANDMARK CASE
      </div>
    )}
    
    {caseStudy.expatFocus && !caseStudy.featured && (
      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
        <Globe className="w-3 h-3" />
        EXPAT SUCCESS
      </div>
    )}
    
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-3 rounded-full ${
          caseStudy.featured 
            ? 'bg-precedential-gold text-precedential-black' 
            : caseStudy.expatFocus
            ? 'bg-green-500 text-white'
            : 'bg-precedential-gold/10'
        }`}>
          <caseStudy.icon className={`w-6 h-6 ${
            caseStudy.featured 
              ? 'text-precedential-black' 
              : caseStudy.expatFocus 
              ? 'text-white'
              : 'text-precedential-gold'
          }`} />
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          caseStudy.featured 
            ? 'bg-precedential-gold/20 text-precedential-gold' 
            : caseStudy.expatFocus
            ? 'bg-green-100 text-green-700'
            : 'bg-precedential-gold/10 text-precedential-gold'
        }`}>
          {caseStudy.category}
        </span>
      </div>
      
      <h3 className={`text-xl font-playfair font-bold mb-4 ${
        caseStudy.featured 
          ? 'text-white' 
          : caseStudy.expatFocus 
          ? 'text-gray-800'
          : 'text-precedential-black'
      }`}>
        {caseStudy.title}
      </h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className={`font-semibold mb-2 text-sm flex items-center gap-2 ${
            caseStudy.featured 
              ? 'text-precedential-gold' 
              : caseStudy.expatFocus
              ? 'text-green-600'
              : 'text-gray-900'
          }`}>
            <Shield className="w-4 h-4" />
            CHALLENGE
          </h4>
          <p className={`text-sm leading-relaxed ${
            caseStudy.featured 
              ? 'text-white/90' 
              : caseStudy.expatFocus
              ? 'text-gray-700'
              : 'text-gray-600'
          }`}>
            {caseStudy.challenge}
          </p>
        </div>
        
        <div>
          <h4 className={`font-semibold mb-2 text-sm flex items-center gap-2 ${
            caseStudy.featured 
              ? 'text-precedential-gold' 
              : caseStudy.expatFocus
              ? 'text-green-600'
              : 'text-gray-900'
          }`}>
            <Users className="w-4 h-4" />
            OUR APPROACH
          </h4>
          <p className={`text-sm leading-relaxed ${
            caseStudy.featured 
              ? 'text-white/90' 
              : caseStudy.expatFocus
              ? 'text-gray-700'
              : 'text-gray-600'
          }`}>
            {caseStudy.approach}
          </p>
        </div>
        
        <div>
          <h4 className={`font-semibold mb-2 text-sm flex items-center gap-2 ${
            caseStudy.featured 
              ? 'text-precedential-gold' 
              : caseStudy.expatFocus
              ? 'text-green-600'
              : 'text-gray-900'
          }`}>
            <Heart className="w-4 h-4" />
            OUTCOME
          </h4>
          <p className={`text-sm leading-relaxed ${
            caseStudy.featured 
              ? 'text-white/90' 
              : caseStudy.expatFocus
              ? 'text-gray-700'
              : 'text-gray-600'
          }`}>
            {caseStudy.outcome}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-opacity-20">
        <div className="text-center">
          <TrendingUp className={`w-5 h-5 mx-auto mb-1 ${
            caseStudy.featured || caseStudy.expatFocus ? 'text-precedential-gold' : 'text-precedential-gold'
          }`} />
          <p className={`text-xs ${
            caseStudy.featured 
              ? 'text-white/70' 
              : caseStudy.expatFocus
              ? 'text-gray-600'
              : 'text-gray-500'
          }`}>Value</p>
          <p className={`font-bold text-sm ${
            caseStudy.featured 
              ? 'text-white' 
              : caseStudy.expatFocus
              ? 'text-gray-800'
              : 'text-precedential-black'
          }`}>
            {caseStudy.value}
          </p>
        </div>
        <div className="text-center">
          <CheckCircle className={`w-5 h-5 mx-auto mb-1 ${
            caseStudy.featured || caseStudy.expatFocus ? 'text-precedential-gold' : 'text-precedential-gold'
          }`} />
          <p className={`text-xs ${
            caseStudy.featured 
              ? 'text-white/70' 
              : caseStudy.expatFocus
              ? 'text-gray-600'
              : 'text-gray-500'
          }`}>Timeline</p>
          <p className={`font-bold text-sm ${
            caseStudy.featured 
              ? 'text-white' 
              : caseStudy.expatFocus
              ? 'text-gray-800'
              : 'text-precedential-black'
          }`}>
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
      title: "British Expat Family's AED 15M Asset Protection Victory",
      category: "International Family Law",
      challenge: "A high-net-worth British family required urgent protection of substantial UAE real estate holdings while navigating a complex custody dispute that threatened their long-term residency status.",
      approach: "Implemented emergency DIFC Wills jurisdiction, coordinated with UK legal counsel for cross-border compliance, secured immediate custody protection orders, and structured comprehensive asset protection mechanisms.",
      outcome: "Successfully protected family assets worth over AED 15M, achieved favorable custody arrangements, and secured permanent UAE residency status for the entire family through strategic legal planning.",
      value: "AED 15M Protected",
      timeline: "8 weeks",
      icon: Shield,
      expatFocus: true
    },
    {
      id: "2",
      title: "Indian Tech Executive's Golden Visa & Investment Recovery",
      category: "Immigration & Investment",
      challenge: "An Indian technology executive faced visa cancellation while pursuing recovery of AED 5M lost in fraudulent business dealings, requiring urgent immigration protection and civil litigation.",
      approach: "Fast-tracked Golden Visa application leveraging exceptional talent criteria, pursued aggressive civil litigation for fund recovery, and coordinated with Central Bank authorities for regulatory compliance.",
      outcome: "Secured 10-year Golden Visa approval for entire family, recovered 90% of lost investment through successful litigation, and established new consultancy business with full legal compliance.",
      value: "AED 4.5M Recovered",
      timeline: "6 months",
      icon: TrendingUp,
      expatFocus: true
    },
    {
      id: "3",
      title: "Multi-Billion Development Project Legal Framework",
      category: "Real Estate & Construction",
      challenge: "A major developer required comprehensive legal support for a AED 2 billion mixed-use development project, involving complex regulatory compliance and international financing arrangements.",
      approach: "Coordinated multi-jurisdictional legal teams, navigated Dubai Municipality approvals, structured RERA compliance frameworks, and negotiated complex financing agreements with international banks.",
      outcome: "Successfully launched the development project on schedule, securing all regulatory approvals and financing commitments. The project has become a landmark development in Dubai's skyline.",
      value: "AED 2B Project",
      timeline: "24 months",
      icon: Building,
      featured: true
    },
    {
      id: "4",
      title: "American Couple's Real Estate Fraud Recovery",
      category: "Property Litigation",
      challenge: "An American couple faced developer fraud involving their AED 8M Dubai Marina penthouse, with the developer disappearing and leaving them with substantial losses after 3 years.",
      approach: "Pursued multiple legal avenues including RERA complaints, criminal fraud charges, and civil recovery actions. Traced hidden assets and negotiated with successor developers for resolution.",
      outcome: "Recovered AED 7.2M through combined legal action and negotiated settlements. The couple received a comparable property plus compensation for their ordeal.",
      value: "AED 7.2M Recovered",
      timeline: "18 months",
      icon: Scale,
      expatFocus: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-green-500 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-precedential-gold/10 to-green-100 border border-precedential-gold/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-precedential-gold" />
                <Globe className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Expat Success <span className="text-gold-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real victories for international families and businesses in Dubai. Our specialized approach to expat legal challenges 
            delivers exceptional results across the most complex cross-border legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-white to-green-50 border border-green-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-4 flex items-center justify-center gap-2">
              <Globe className="w-6 h-6 text-green-500" />
              Proven Expat <span className="text-gold-gradient">Excellence</span>
            </h3>
            <p className="text-gray-600">
              These success stories represent our dedication to protecting international families and businesses in the UAE.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">AED 50M+</div>
              <div className="text-sm text-gray-600">Expat Assets Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-precedential-gold mb-2">300+</div>
              <div className="text-sm text-gray-600">Expat Families Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Expat Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-precedential-gold mb-2">50+</div>
              <div className="text-sm text-gray-600">Nationalities Represented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;
