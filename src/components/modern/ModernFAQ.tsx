
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ModernFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What legal services do you provide for expatriates in Dubai?",
      answer: "We provide comprehensive legal services for expatriates including family law (divorce, custody), immigration (visa applications, Golden Visa), real estate transactions, business setup, employment law, and will writing. Our bilingual team understands the unique challenges expats face in the UAE legal system."
    },
    {
      question: "How much does a legal consultation cost?",
      answer: "We offer a free initial consultation to understand your legal needs and provide preliminary guidance. For ongoing legal services, our fees are transparent and competitive, with no hidden costs. We'll provide a clear fee structure before beginning any work."
    },
    {
      question: "Can you help with Dubai business setup and licensing?",
      answer: "Yes, we specialize in UAE business formation including mainland companies, free zone setups, and offshore companies. We handle licensing, regulatory compliance, contract drafting, and ongoing corporate governance to ensure your business operates smoothly in Dubai."
    },
    {
      question: "How long does it take to get a response to my inquiry?",
      answer: "We guarantee a response within 24 hours for all inquiries. For urgent legal matters, we often respond much faster. Our team is available during UAE business hours and can arrange emergency consultations when necessary."
    },
    {
      question: "Do you handle family law cases for non-Muslim expatriates?",
      answer: "Absolutely. Our family law team has extensive experience with expatriate family matters, including divorce proceedings, child custody arrangements, and inheritance planning. We understand both UAE law and international family law principles that may affect your case."
    },
    {
      question: "What is the process for writing a will in the UAE?",
      answer: "We help draft, review, and register wills through various UAE jurisdictions including DIFC Wills and ADGM Wills for non-Muslims, and Sharia-compliant wills for Muslims. The process typically takes 2-4 weeks and ensures your assets are distributed according to your wishes."
    },
    {
      question: "Can you assist with Golden Visa applications?",
      answer: "Yes, we provide comprehensive Golden Visa services including eligibility assessment, document preparation, and application submission. We help investors, entrepreneurs, skilled professionals, and students navigate the Golden Visa requirements and application process."
    },
    {
      question: "What languages do you provide legal services in?",
      answer: "We provide legal services in English and Arabic, ensuring clear communication regardless of your preferred language. Our bilingual capabilities help bridge any language barriers in legal proceedings and documentation."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="text-amber-600 block">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get quick answers to common legal questions. Can't find what you're looking for? 
            Contact us for personalized guidance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <AccordionTrigger 
                    className="px-8 py-6 text-left hover:bg-gray-50 text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                    iconComponent={
                      <div className="ml-4">
                        <Plus className="h-5 w-5 text-amber-600 group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 text-amber-600 hidden group-data-[state=open]:block" />
                      </div>
                    }
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our legal experts are here to provide personalized answers to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+971509014120"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call: +971 50 901 4120
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;
