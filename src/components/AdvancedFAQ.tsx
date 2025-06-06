
import React, { useState } from 'react';
import { Search, TrendingUp, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  trending: boolean;
  relatedQuestions: string[];
  tags: string[];
}

const AdvancedFAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'How do I get divorced in Dubai as an expat?',
      answer: 'Expatriate divorce in Dubai follows Federal Decree-Law No. 41 of 2022, which allows non-Muslims to obtain divorce under their home country law or through UAE civil courts. The process typically involves: 1) Filing a petition with the relevant court (Personal Status Court for Muslims, Civil Court for non-Muslims), 2) Mandatory mediation attempts, 3) Asset and custody discussions, 4) Final decree issuance. Timeline varies from 4-12 months depending on case complexity. For DIFC-registered marriages, DIFC Courts may have jurisdiction. We recommend immediate legal consultation to determine the most advantageous jurisdiction and strategy for your specific circumstances.',
      category: 'Family Law',
      trending: true,
      relatedQuestions: ['What are child custody laws in UAE?', 'How is alimony calculated in Dubai?', 'Can I get married again after divorce in UAE?'],
      tags: ['divorce', 'expat', 'family law', 'Dubai courts']
    },
    {
      id: '2',
      question: 'What are the legal requirements for UAE Golden Visa 2024?',
      answer: 'The UAE Golden Visa (long-term residence visa) for 2024 requires meeting specific criteria in one of several categories: 1) Investors: AED 2 million investment in real estate, AED 2 million deposit in UAE bank, or establishing a company with AED 500,000 capital, 2) Professionals: PhD holders, doctors, engineers, scientists with valid licenses, 3) Entrepreneurs: Innovative startup owners with government approval, 4) Students: Outstanding academic achievers. The visa provides 10-year renewable residence, allows family sponsorship, permits multiple entry/exit, and enables 100% business ownership in certain sectors. Documentation includes passport copies, medical certificates, Emirates ID, proof of investment/qualification, and security clearance. Processing time is typically 30-60 days through ICP or GDRFA.',
      category: 'Immigration Law',
      trending: true,
      relatedQuestions: ['How much does Golden Visa cost?', 'Can Golden Visa holders sponsor parents?', 'What happens if Golden Visa investment is sold?'],
      tags: ['golden visa', 'immigration', 'UAE residency', 'investment visa']
    },
    {
      id: '3',
      question: 'What is the difference between UAE mainland company and free zone company?',
      answer: 'Key differences between UAE mainland and free zone companies: MAINLAND: 100% foreign ownership available for most activities (under Federal Decree-Law No. 32 of 2021), can trade freely in UAE market, can take government contracts, follows UAE Commercial Companies Law, subject to 9% Corporate Tax on profits above AED 375,000, requires local service agent for some activities. FREE ZONE: 100% foreign ownership guaranteed, restricted trading (usually zone-to-zone or international), cannot directly access UAE mainland market without distributor, follows specific free zone regulations, may qualify for 0% Corporate Tax if meeting strict conditions, no local agent required. Choose mainland for UAE market access and government contracts; choose free zone for international trading, specific industry clusters, and potential tax advantages.',
      category: 'Business Law',
      trending: true,
      relatedQuestions: ['How to convert free zone company to mainland?', 'What are UAE Corporate Tax rates?', 'Which is better for trading business?'],
      tags: ['company formation', 'mainland', 'free zone', 'business setup']
    },
    {
      id: '4',
      question: 'Can I be arrested for bounced cheques in UAE 2024?',
      answer: 'Under the amended Commercial Transactions Law (Federal Decree-Law No. 50 of 2022), bounced cheques due to insufficient funds are largely decriminalized. However, criminal liability remains for: 1) Issuing cheques from closed accounts (knowing the account is closed), 2) Cheques issued with fraudulent intent, 3) Bad faith or dishonest practices. For insufficient funds, the remedy is now primarily civil - the payee can use the bounced cheque as an "executive title" for direct enforcement through execution courts. Criminal cases may still apply if fraud, forgery, or deliberate deception is proven. The law aims to reduce imprisonment for commercial disputes while maintaining protection against intentional fraud. Immediate legal consultation is recommended if facing cheque-related legal action.',
      category: 'Criminal Law',
      trending: true,
      relatedQuestions: ['What happens to existing bounced cheque cases?', 'How to defend against cheque fraud allegations?', 'Can banks report bounced cheques?'],
      tags: ['bounced cheques', 'criminal law', 'commercial law', 'fraud']
    },
    {
      id: '5',
      question: 'How much does it cost to set up a business in Dubai 2024?',
      answer: 'Dubai business setup costs vary significantly based on license type, location, and business activities: MAINLAND TRADING LICENSE: AED 15,000-25,000 (license fee) + AED 3,000-5,000 (initial approval) + AED 2,000-10,000 (office/ejari) + AED 3,000-5,000 per visa. FREE ZONE (DMCC/DIFC): AED 15,000-50,000 (license fee) + AED 2,000-15,000 (visa fees) + AED 5,000-20,000 (office space). PROFESSIONAL LICENSE: AED 12,000-20,000 + qualification attestation costs. Additional costs include: Emirates ID (AED 1,070), medical fitness (AED 320), security deposit (varies), PRO services (AED 5,000-15,000). Total typical range: AED 25,000-75,000 for basic setup. Ongoing costs include annual license renewal (70% of initial fee), visa renewals, office rent, and compliance requirements. Free zone costs often higher initially but may offer tax advantages.',
      category: 'Business Law',
      trending: false,
      relatedQuestions: ['What documents needed for business setup?', 'How long does business registration take?', 'Can I change business activity later?'],
      tags: ['business setup cost', 'Dubai license', 'company formation', 'business expenses']
    },
    {
      id: '6',
      question: 'What are tenant rights in Dubai rental disputes?',
      answer: 'Dubai tenants have comprehensive rights under Law No. 26 of 2007 and RERA regulations: RENT PROTECTION: Landlord cannot increase rent by more than 20% if current rent is 40%+ below RERA index; 15% if 30-40% below; 10% if 20-30% below; 5% if 10-20% below; no increase if within 10% of index. EVICTION PROTECTION: Landlord must provide 12-month notice for personal use, 24-month notice for property sale to third party, 90-day notice for redevelopment. MAINTENANCE RIGHTS: Landlord responsible for major repairs, AC maintenance, structural issues. Tenant handles minor repairs and damages caused by misuse. DEPOSIT RIGHTS: Security deposit (typically 5-10% of annual rent) refundable within 14 days if no damages. DISPUTE RESOLUTION: File complaints with Rental Dispute Centre (RDC) online. Legal fees typically 3.5% of annual rent value. Decisions can be appealed within 15 days.',
      category: 'Real Estate Law',
      trending: false,
      relatedQuestions: ['How to file RDC complaint online?', 'What happens if landlord sells property?', 'Can tenant break lease early?'],
      tags: ['tenant rights', 'rental disputes', 'RDC', 'Dubai rent law']
    }
  ];

  const categories = ['All', 'Family Law', 'Immigration Law', 'Business Law', 'Criminal Law', 'Real Estate Law', 'Employment Law'];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const trendingFAQs = faqData.filter(faq => faq.trending);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-gold-gradient">Comprehensive</span> Legal FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find immediate answers to your legal questions. Our comprehensive FAQ covers the most common 
            legal queries for businesses and individuals in the UAE.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search legal questions... (e.g., 'divorce process', 'golden visa', 'business setup')"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-precedential-gold focus:border-transparent text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
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

        {/* Trending Questions */}
        {!searchTerm && selectedCategory === 'All' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold">Trending Legal Questions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingFAQs.map((faq) => (
                <div 
                  key={faq.id}
                  className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSearchTerm(faq.question)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                      {faq.category}
                    </span>
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  </div>
                  <h4 className="font-medium text-precedential-black hover:text-precedential-gold transition-colors">
                    {faq.question}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="glass-card rounded-xl border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                  <div className="flex items-start gap-4 w-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded text-xs font-medium">
                          {faq.category}
                        </span>
                        {faq.trending && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-precedential-black">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50/50">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    
                    {/* Related Questions */}
                    {faq.relatedQuestions.length > 0 && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-gray-900 mb-3">Related Questions:</h4>
                        <ul className="space-y-2">
                          {faq.relatedQuestions.map((question, idx) => (
                            <li key={idx}>
                              <button 
                                className="text-precedential-gold hover:text-precedential-goldLight text-sm cursor-pointer"
                                onClick={() => setSearchTerm(question)}
                              >
                                • {question}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs cursor-pointer hover:bg-precedential-gold/10 hover:text-precedential-gold"
                          onClick={() => setSearchTerm(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">No questions found matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Contact for More Help */}
        <div className="glass-card p-8 rounded-2xl text-center mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Need Specific Legal Advice?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our legal experts are ready to provide 
            personalized guidance for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              <MessageCircle className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
              <Phone className="w-4 h-4 mr-2" />
              Call +971 50 901 4120
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Initial consultation available • Response within 2 hours • Confidential discussion
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFAQ;
