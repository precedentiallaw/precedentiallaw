
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, DollarSign, Users } from 'lucide-react';

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
}

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between mb-6">
      <span className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded-full text-sm font-medium">
        {caseStudy.category}
      </span>
      <CheckCircle className="w-8 h-8 text-green-500" />
    </div>
    
    <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
    
    <div className="space-y-4 mb-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
        <p className="text-gray-600">{caseStudy.challenge}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
        <p className="text-gray-600">{caseStudy.solution}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
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
      title: "Complex Commercial Dispute Resolution",
      category: "Commercial Law",
      challenge: "A Dubai-based technology company faced a multi-million dirham contract dispute with an international supplier, threatening business operations and cash flow.",
      solution: "We developed a comprehensive litigation strategy while simultaneously pursuing mediation. Our team conducted thorough contract analysis and gathered expert testimony on industry standards.",
      outcome: "Achieved a favorable settlement of 85% of claimed damages without lengthy court proceedings, preserving the business relationship and ensuring continued operations.",
      timeline: "6 months",
      value: "AED 2.5M",
      clientType: "Tech Company"
    },
    {
      id: "2",
      title: "Expat Family Asset Protection",
      category: "Family Law",
      challenge: "A British expat family needed to secure their Dubai assets and ensure proper guardianship arrangements for their children in case of unforeseen circumstances.",
      solution: "We created a comprehensive estate plan using DIFC Wills, established guardianship arrangements, and structured asset protection mechanisms compliant with both UAE and UK law.",
      outcome: "Complete peace of mind with legally sound asset protection and guardianship arrangements, avoiding potential inheritance complications under Sharia law.",
      timeline: "2 months",
      value: "AED 15M",
      clientType: "Expat Family"
    },
    {
      id: "3",
      title: "Real Estate Investment Recovery",
      category: "Real Estate Law",
      challenge: "An investor faced significant losses due to a developer's failure to deliver a residential project in Dubai, with over AED 3 million at stake.",
      solution: "We pursued multiple legal avenues including RERA complaints, civil litigation, and negotiated settlements. Our team also explored insurance claims and alternative compensation mechanisms.",
      outcome: "Recovered 95% of the investment through a combination of legal action and negotiated settlement, plus compensation for lost opportunity costs.",
      timeline: "18 months",
      value: "AED 3.2M",
      clientType: "Property Investor"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies | Legal Success Stories | Precedential Law Dubai</title>
        <meta name="description" content="Explore our successful case studies showcasing expert legal representation and positive outcomes for clients across Dubai and the UAE." />
        <meta name="keywords" content="legal case studies Dubai, law firm success stories, legal wins UAE, litigation results, legal representation outcomes" />
        <link rel="canonical" href="https://precedentiallaw.com/case-studies" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Case <span className="text-gold-gradient">Studies</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real success stories demonstrating our commitment to achieving exceptional results for our clients across diverse legal challenges.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Achieve Your Legal Goals?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              These case studies represent just a fraction of the successful outcomes we've achieved for our clients. Let us help you resolve your legal challenges.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Discuss Your Case
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default CaseStudies;
