
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, DollarSign, Users, Globe, Shield, Heart } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  value: string;
  clientType: string;
  expatFocus?: boolean;
}

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 ${
    caseStudy.expatFocus ? 'border-l-green-500' : 'border-l-precedential-gold'
  }`}>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          caseStudy.expatFocus 
            ? 'bg-green-100 text-green-700' 
            : 'bg-precedential-gold/10 text-precedential-gold'
        }`}>
          {caseStudy.category}
        </span>
        {caseStudy.expatFocus && (
          <div className="flex items-center gap-1 text-green-600">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-medium">Expat Success</span>
          </div>
        )}
      </div>
      <CheckCircle className="w-8 h-8 text-green-500" />
    </div>
    
    <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
    
    <div className="space-y-4 mb-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Shield className="w-4 h-4 text-red-500" />
          Challenge
        </h4>
        <p className="text-gray-600">{caseStudy.challenge}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-500" />
          Our Solution
        </h4>
        <p className="text-gray-600">{caseStudy.solution}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Heart className="w-4 h-4 text-green-500" />
          Outcome
        </h4>
        <p className="text-gray-600">{caseStudy.outcome}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 pt-6 border-t">
      <div className="text-center">
        <Clock className="w-5 h-5 text-precedential-gold mx-auto mb-1" />
        <p className="text-sm text-gray-500">Timeline</p>
        <p className="font-semibold">{caseStudy.timeline}</p>
      </div>
      <div className="text-center">
        <DollarSign className="w-5 h-5 text-precedential-gold mx-auto mb-1" />
        <p className="text-sm text-gray-500">Value</p>
        <p className="font-semibold">{caseStudy.value}</p>
      </div>
      <div className="text-center">
        <Users className="w-5 h-5 text-precedential-gold mx-auto mb-1" />
        <p className="text-sm text-gray-500">Client</p>
        <p className="font-semibold">{caseStudy.clientType}</p>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "British Family's Complete Asset Protection & Custody Victory",
      category: "Expat Family Law",
      challenge: "A British expat family faced an urgent custody dispute while protecting substantial UAE property investments worth AED 15M. The father's visa was threatened, risking family separation and asset freezing under UAE law.",
      solution: "We immediately secured emergency custody orders through Dubai Family Court, implemented DIFC Wills for asset protection, and negotiated visa sponsorship transfer. Our bilingual team provided 24/7 support during this emotional crisis.",
      outcome: "Achieved full custody for the mother, protected all family assets through legal structures, and secured long-term UAE residency. The family now lives peacefully in Dubai with complete legal security.",
      timeline: "8 weeks",
      value: "AED 15M+",
      clientType: "British Expat Family",
      expatFocus: true
    },
    {
      id: "2",
      title: "Indian Executive's Golden Visa & Investment Recovery",
      category: "Immigration & Investment",
      challenge: "An Indian technology executive lost AED 5M in a failed Dubai startup while his family's residence visas faced cancellation. Complex corporate structures made fund recovery seem impossible.",
      solution: "We restructured his Golden Visa application highlighting his tech expertise, pursued corporate litigation for fund recovery, and protected his family's residence status through alternative sponsorship arrangements.",
      outcome: "Secured 10-year Golden Visa for the entire family, recovered 90% of lost investment through legal action, and established a new consultancy business with full legal compliance.",
      timeline: "6 months",
      value: "AED 4.5M",
      clientType: "Indian Tech Executive",
      expatFocus: true
    },
    {
      id: "3",
      title: "German Entrepreneur's Multi-Million Business Acquisition",
      category: "Corporate Law",
      challenge: "A German entrepreneur needed to acquire a UAE manufacturing business worth AED 25M but faced complex regulatory hurdles, unclear ownership structures, and tight acquisition timelines.",
      solution: "We conducted comprehensive due diligence, restructured the target company's legal framework, navigated Ministry approvals, and secured favorable financing terms with UAE banks.",
      outcome: "Successfully completed the acquisition on schedule with full regulatory compliance. The business now operates as Dubai's leading sustainable manufacturing facility.",
      timeline: "4 months",
      value: "AED 25M",
      clientType: "German Entrepreneur",
      expatFocus: true
    },
    {
      id: "4",
      title: "American Couple's Real Estate Dispute Resolution",
      category: "Property Law",
      challenge: "An American couple faced developer fraud involving their AED 8M Dubai Marina penthouse. The developer disappeared, leaving them with substantial losses and no property delivery after 3 years.",
      solution: "We pursued multiple legal avenues including RERA complaints, criminal fraud charges, and civil recovery actions. Our team traced hidden assets and negotiated with successor developers.",
      outcome: "Recovered AED 7.2M through combined legal action and negotiated settlements. The couple received a comparable property plus compensation for delayed delivery.",
      timeline: "18 months",
      value: "AED 7.2M",
      clientType: "American Couple",
      expatFocus: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Expat Legal Success Stories | Case Studies | Precedential Law Dubai</title>
        <meta name="description" content="Real success stories from expat families and international businesses. See how Precedential Law protects expat rights and achieves exceptional results in Dubai." />
        <meta name="keywords" content="expat legal success Dubai, international family law cases, expat business law UAE, Golden Visa success stories, DIFC Wills case studies" />
        <link rel="canonical" href="https://precedentiallaw.com/case-studies" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
                <Globe className="w-6 h-6 text-precedential-gold" />
                <span className="text-precedential-gold font-semibold">Expat Success Stories</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Real <span className="text-gold-gradient">Expat Victories</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how international families and businesses have achieved remarkable legal outcomes in Dubai. 
              From family protection to business success, these stories demonstrate our commitment to expat excellence.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Why Expats Choose <span className="text-precedential-gold">Precedential Law</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges facing international residents and businesses in the UAE. 
                Our track record speaks for itself.
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Your Expat Success Story Starts Here
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of expat families and international businesses who have secured their futures in Dubai. 
                Our specialized expat legal services ensure you navigate UAE law with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Book Free Expat Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-white">
                  Download Expat Legal Guide
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                ✓ Specialized in expat legal needs ✓ Multilingual support ✓ 24/7 emergency assistance
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default CaseStudies;
