
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How soon will I hear back from a lawyer?",
      answer: "We pride ourselves on swift responses. You'll typically receive a response within 24 hours, and urgent matters are addressed even sooner."
    },
    {
      question: "Can I get advice without visiting the office?",
      answer: "Yes, we offer virtual consultations via video call, phone, or WhatsApp for your convenience. In-person meetings are also available when needed."
    },
    {
      question: "Do you handle business setups or visa issues?",
      answer: "Yes, our commercial law team specializes in business setup and our immigration experts handle all visa-related matters in the UAE."
    },
    {
      question: "Do you provide legal support in Arabic?",
      answer: "Yes, our team provides legal services in both Arabic and English, ensuring clear communication in your preferred language."
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-playfair font-bold mb-6 text-center">Got Questions Before We Begin?</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
