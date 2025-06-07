
import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular: boolean;
  related: string[];
}

const AdvancedFAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "What are the differences between Dubai Mainland and Free Zone company setup?",
      answer: "Dubai Mainland companies can trade directly with the UAE market, enter government contracts, and have no restrictions on business activities within the UAE. However, they require a local UAE national partner (51% ownership) for most activities. Free Zone companies offer 100% foreign ownership, tax exemptions, and easier setup procedures, but are restricted in direct UAE market access and must operate primarily from their free zone location. Free zones are ideal for export businesses, regional headquarters, and specific industries like technology or media.",
      category: "Business Setup",
      popular: true,
      related: ["licensing", "ownership", "taxation"]
    },
    {
      id: "2",
      question: "How long does the Golden Visa application process take and what are the requirements?",
      answer: "The Golden Visa application typically takes 2-4 weeks for approval after submitting complete documentation. Requirements vary by category: Real estate investors need property worth AED 2 million+, entrepreneurs require innovative projects with AED 500K investment, specialists need approval from relevant authorities, and students require outstanding academic achievement. All applicants must have valid health insurance, clear criminal record, and meet financial stability criteria. The process involves medical testing, Emirates ID issuance, and residence permit stamping.",
      category: "Immigration",
      popular: true,
      related: ["investment", "residency", "requirements"]
    },
    {
      id: "3",
      question: "What are the Corporate Tax implications for UAE businesses in 2024?",
      answer: "UAE Corporate Tax applies to businesses with annual profits exceeding AED 375,000, with a standard rate of 9%. Small businesses under this threshold are exempt. Free zone entities remain exempt if they don't conduct business with UAE mainland and meet substance requirements. The tax applies to accounting periods starting from June 1, 2023. Businesses must register, maintain proper accounting records, file annual returns, and make advance payments. Transfer pricing rules apply to transactions between related entities. Professional advice is essential for compliance and optimization strategies.",
      category: "Tax Law",
      popular: true,
      related: ["compliance", "filing", "exemptions"]
    },
    {
      id: "4",
      question: "How does divorce law work for expatriates in the UAE?",
      answer: "Expatriate couples can choose to apply their home country's law or UAE law for divorce proceedings. UAE courts have jurisdiction over divorces filed in the UAE. For non-Muslims, DIFC Courts offer an alternative using international family law principles. Key issues include asset division, child custody, and alimony. UAE law generally favors joint custody arrangements and equitable asset distribution. The process typically takes 3-6 months for uncontested cases. Mediation is encouraged before litigation. International enforcement of decisions may require additional legal steps in other jurisdictions.",
      category: "Family Law",
      popular: true,
      related: ["jurisdiction", "custody", "assets"]
    },
    {
      id: "5",
      question: "What is the difference between DIFC Wills and UAE Mainland Wills?",
      answer: "DIFC Wills operate under DIFC law (based on English common law) and are only for non-Muslims, covering assets in Dubai and other UAE emirates with proper registration. They offer more flexibility in asset distribution and executor appointments. UAE Mainland Wills follow Sharia law principles for Muslims and UAE Civil Code for non-Muslims. DIFC Wills are generally faster to probate (2-3 months vs 6-12 months), more predictable in outcomes, and better for complex international estates. However, UAE Mainland Wills may be more cost-effective for simple estates and are automatically recognized across all emirates.",
      category: "Estate Planning",
      popular: true,
      related: ["inheritance", "probate", "sharia"]
    },
    {
      id: "6",
      question: "What are the key employment law changes in UAE for 2024?",
      answer: "Major updates include expanded remote work regulations allowing up to 50% remote work with employer agreement, enhanced maternal leave benefits (14 weeks), paternal leave introduction (5 days), and stricter overtime regulations. New whistleblower protection laws safeguard employees reporting violations. Termination procedures now require more detailed documentation and justification. Salary payment timelines are more strictly enforced with penalties for delays. End-of-service benefits calculations have been clarified for remote workers. Companies must update employment contracts to reflect these changes and ensure HR policy compliance.",
      category: "Employment Law",
      popular: false,
      related: ["contracts", "benefits", "termination"]
    },
    {
      id: "7",
      question: "How do I enforce a foreign judgment in the UAE courts?",
      answer: "Foreign judgment enforcement requires filing an enforcement petition in competent UAE courts. The foreign court must have had proper jurisdiction, the judgment must be final and enforceable in the originating jurisdiction, and the defendant must have been properly notified. The judgment cannot violate UAE public policy or Sharia principles. Bilateral treaty countries have streamlined procedures. Required documents include certified copies of the judgment, proof of finality, evidence of proper service, and Arabic translations. The process typically takes 6-12 months. DIFC and ADGM courts have separate enforcement mechanisms for qualifying judgments.",
      category: "Commercial Litigation",
      popular: false,
      related: ["enforcement", "jurisdiction", "treaties"]
    },
    {
      id: "8",
      question: "What are the requirements for opening a bank account for a UAE company?",
      answer: "Required documents include trade license, MOA, board resolution, passport copies of signatories, visa copies, Emirates ID, NOC from sponsors, and salary certificates. Minimum deposit varies by bank (AED 3,000-100,000). Processing takes 1-3 weeks. Some banks require physical presence of all signatories, while others accept video calls. Free zone companies may have additional requirements. Banks increasingly require proof of business activity and source of funds. Professional services companies often need client contracts. Having an established relationship with the bank expedites the process. Consider using business banking specialists for complex structures.",
      category: "Banking",
      popular: false,
      related: ["documentation", "deposits", "compliance"]
    },
    {
      id: "9",
      question: "What are the legal requirements for real estate investment in Dubai?",
      answer: "Foreign investors can purchase freehold properties in designated areas including Downtown Dubai, Dubai Marina, and Jumeirah Beach Residence. Leasehold properties (99-year terms) are available in other areas. Due diligence includes verifying developer credentials, checking RERA registration, reviewing payment plans, and ensuring plot/building permits. Purchase process involves reservation, SPA signing, DLD registration, and title deed issuance. Buyers must register with DLD, pay 4% transfer fees, and obtain NOC from developers. Off-plan purchases have additional protections under Law No. 8 of 2007. Professional legal review is recommended for all transactions.",
      category: "Real Estate",
      popular: false,
      related: ["freehold", "RERA", "registration"]
    },
    {
      id: "10",
      question: "How does commercial arbitration work in the UAE?",
      answer: "UAE recognizes arbitration under UAE Arbitration Law (Federal Law No. 6 of 2018) and is a signatory to the New York Convention. Arbitration agreements must be in writing and clearly define scope. DIAC (Dubai International Arbitration Centre) is the leading institution, offering rules in Arabic and English. Proceedings can be conducted in any language, with flexible procedures. Typical timeline is 6-18 months depending on complexity. Awards are binding and enforceable like court judgments. Appeals are limited to specific procedural grounds. International arbitrators are permitted, and seat of arbitration can be UAE or elsewhere. Interim measures are available through UAE courts.",
      category: "Arbitration",
      popular: false,
      related: ["DIAC", "enforcement", "procedures"]
    },
    {
      id: "11",
      question: "What are the legal implications of cryptocurrency and digital assets in UAE?",
      answer: "UAE has comprehensive virtual asset regulations through Dubai Virtual Asset Regulation (DVAR) and ADGM's Virtual Asset Framework. Activities require licensing from respective authorities (VARA for Dubai, FSRA for ADGM). Authorized activities include trading, exchange, custody, and advisory services. All operators must meet capital requirements, implement AML/CFT controls, and ensure consumer protection. Marketing restrictions apply to retail clients. Tax treatment follows general UAE tax principles. Criminal penalties exist for unlicensed activities. International compliance considerations apply for cross-border operations. Regular regulatory updates require ongoing monitoring and compliance adjustments.",
      category: "Fintech Law",
      popular: false,
      related: ["licensing", "compliance", "VARA"]
    },
    {
      id: "12",
      question: "How do I resolve a rental dispute in Dubai?",
      answer: "Rental disputes are resolved through the Rental Dispute Centre (RDC), part of Dubai Courts. First, attempt direct negotiation with the landlord/tenant. If unsuccessful, file a case with RDC providing tenancy contract, Ejari certificate, and supporting documents. Mediation is mandatory before litigation. Common disputes include rent increases (limited to 5-20% based on RERA index), security deposit returns, maintenance responsibilities, and early termination. Decisions can be appealed to Appeal Committee within 15 days. Enforcement orders are issued for compliance. Legal representation is recommended for complex cases. Alternative dispute resolution through Dubai Courts mediation center is also available.",
      category: "Real Estate Disputes",
      popular: false,
      related: ["RDC", "mediation", "RERA"]
    }
  ];

  const categories = ["All", "Business Setup", "Immigration", "Tax Law", "Family Law", "Estate Planning", "Employment Law", "Commercial Litigation", "Banking", "Real Estate", "Arbitration", "Fintech Law", "Real Estate Disputes"];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqData.filter(faq => faq.popular);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search legal questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 
                  "bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight" : 
                  "border-precedential-gold/30 text-precedential-gold hover:bg-precedential-gold/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Questions */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Most Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularFAQs.slice(0, 4).map((faq) => (
                <div key={faq.id} className="glass-card p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">{faq.question}</h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{faq.answer}</p>
                      <span className="text-xs text-precedential-gold font-medium">{faq.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="glass-card rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-start w-full">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded text-xs font-medium">
                          {faq.category}
                        </span>
                        {faq.popular && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                    {faq.related.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2">Related Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {faq.related.map((topic, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No questions found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
            <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Ask a Question
            </Button>
          </div>
        )}

        {/* Contact for More Questions */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="glass-card p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Didn't Find Your Answer?</h3>
            <p className="text-gray-600 mb-6">
              Our legal experts are available to provide personalized answers to your specific questions. 
              Contact us for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +971 50 901 4120
              </Button>
              <Button variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                <Mail className="w-4 h-4 mr-2" />
                Email Consultation
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Average response time: 2 hours during business hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFAQ;
