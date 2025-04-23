
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  // Define the FAQ data
  const faqData = [
    {
      question: "What areas of law does Precedential Law practice?",
      answer: "Precedential Law specializes in multiple practice areas including Commercial & Business Law, Family Law & Wills, Real Estate Law, Debt Settlement & Civil Litigation, Immigration Law, and Criminal Defense Advisory in Dubai and the UAE."
    },
    {
      question: "How can I schedule a consultation with your legal team?",
      answer: "You can schedule a consultation by calling +971509014120, emailing info@uaeprecedentiallaw.com, using our online contact form, or messaging us via WhatsApp. We offer both in-person and virtual consultations to accommodate your needs."
    },
    {
      question: "What makes Precedential Law different from other Dubai law firms?",
      answer: "Precedential Law stands out through our deep UAE legal acumen, dedicated Dubai market focus, commitment to efficient resolution, client-first approach, and our precedential standard of protection that ensures your legal matters are handled with expertise and precision."
    },
    {
      question: "Do you offer legal services in Arabic?",
      answer: "Yes, Precedential Law offers legal services in both English and Arabic to ensure clear communication and comprehensive understanding between our team and clients regardless of language preference."
    },
    {
      question: "What are your payment options and fee structures?",
      answer: "We offer transparent fee structures with options including hourly rates, fixed fees for specific services, and retainer arrangements for ongoing legal support. We discuss all fee expectations upfront before commencing work on your case."
    }
  ];

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h3 className="text-xl md:text-2xl font-playfair font-bold mb-4">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-precedential-black/70 py-2">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
