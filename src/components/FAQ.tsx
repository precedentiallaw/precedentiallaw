
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, ChevronRight, Info, Scale, Building, Users, Home, CreditCard, Gavel } from 'lucide-react';
import { expandedFAQData } from '@/components/BlogContentData';

const categoryIcons = {
  "Business & Corporate Law": Building,
  "Employment Law": Users,
  "Family Law & Divorce": Home,
  "Real Estate & Property Law": Home,
  "Immigration & Visa Law": Gavel,
  "Financial & Banking Law": CreditCard,
};

const FAQ: React.FC = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": expandedFAQData.flatMap(category => 
      category.items.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 w-full bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-precedential-gold/10 border border-precedential-gold/20">
              <Scale className="w-8 h-8 text-precedential-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-gold-gradient">Frequently Asked</span> Legal Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive answers to the most important legal questions facing businesses and individuals in the UAE. 
            Expert guidance on complex legal matters from Dubai's premier legal consultancy.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {expandedFAQData.map((category, index) => {
            const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons] || Info;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 animate-fade-up transform transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center">
                    <IconComponent className="text-precedential-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-precedential-black">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {category.items.length} essential questions answered
                    </p>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.items.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${category.category}-${faqIndex}`}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-precedential-gold/30 transition-colors"
                    >
                      <AccordionTrigger 
                        className="text-left font-semibold px-5 md:px-6 py-4 md:py-5 hover:bg-gray-50 text-sm md:text-base leading-relaxed"
                        iconComponent={mounted && !isMobile ? 
                          <ChevronDown className="h-5 w-5 text-precedential-gold shrink-0 transition-transform duration-200" /> : 
                          <ChevronRight className="h-5 w-5 text-precedential-gold shrink-0 transition-transform duration-200" />
                        }
                      >
                        <span className="pr-6">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 md:px-6 py-4 md:py-5 text-sm md:text-base bg-gray-50/50">
                        <div className="prose prose-sm md:prose-base max-w-none">
                          <p className="text-precedential-black/80 leading-relaxed mb-0">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-precedential-black text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Need Specific Legal Guidance?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              While our FAQ covers common legal questions, every situation is unique. Our expert legal team 
              provides personalized advice tailored to your specific circumstances and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-precedential-gold text-precedential-black px-8 py-3 rounded-xl font-semibold hover:bg-precedential-goldLight transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-precedential-gold text-precedential-gold px-8 py-3 rounded-xl font-semibold hover:bg-precedential-gold hover:text-precedential-black transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
