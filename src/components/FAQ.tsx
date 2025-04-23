
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  // Define the comprehensive FAQ data
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
    },
    {
      question: "How quickly can I expect a response to my legal inquiry?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we have an expedited response protocol to address time-sensitive legal issues promptly."
    },
    {
      question: "Can you handle international legal matters?",
      answer: "Yes, we have experience in international legal matters, particularly those involving UAE law and cross-border transactions. We can coordinate with international counsel when needed for comprehensive legal solutions."
    },
    {
      question: "What is your approach to client confidentiality?",
      answer: "We maintain strict client confidentiality in accordance with UAE legal standards and international best practices. All client information and case details are handled with the utmost discretion and security."
    },
    {
      question: "Do you provide emergency legal services?",
      answer: "Yes, we offer emergency legal services for urgent matters. Our team can be reached 24/7 for critical legal situations through our emergency contact protocol."
    },
    {
      question: "What experience does your team have in UAE law?",
      answer: "Our legal team comprises highly experienced professionals with extensive knowledge of UAE law and local legal procedures. Many of our lawyers have practiced in the UAE for over a decade."
    },
    {
      question: "How do you handle complex business disputes?",
      answer: "We approach complex business disputes through thorough analysis, strategic planning, and skilled negotiation. When necessary, we provide robust representation in litigation while always seeking the most efficient resolution."
    },
    {
      question: "What is your success rate in court cases?",
      answer: "While each case is unique and past results don't guarantee future outcomes, we maintain a strong track record of successful resolutions through both litigation and negotiation."
    },
    {
      question: "Can you assist with business setup in Dubai?",
      answer: "Yes, we provide comprehensive business setup services including company formation, licensing, regulatory compliance, and all necessary legal documentation for establishing businesses in Dubai and the UAE."
    },
    {
      question: "Do you handle property disputes?",
      answer: "Yes, we handle all types of property disputes including tenant-landlord issues, property sale disputes, construction disputes, and real estate development matters."
    },
    {
      question: "What is your approach to family law cases?",
      answer: "We handle family law cases with sensitivity and discretion, focusing on achieving amicable resolutions while protecting our clients' rights and interests, particularly in matters involving children."
    },
    {
      question: "How do you handle immigration cases?",
      answer: "Our immigration law services cover visa applications, residency permits, employment visas, and citizenship matters. We ensure compliance with current UAE immigration regulations and procedures."
    },
    {
      question: "What documents do I need for my first consultation?",
      answer: "For your first consultation, bring any relevant documentation related to your legal matter, including contracts, correspondence, official documents, and any court papers if applicable."
    },
    {
      question: "How long do typical cases take to resolve?",
      answer: "Case duration varies significantly depending on complexity and type. During initial consultation, we provide estimated timelines based on our experience with similar cases and current court schedules."
    },
    {
      question: "Do you offer pro bono services?",
      answer: "We maintain a limited pro bono program for qualifying cases and individuals. Please contact us to discuss eligibility for pro bono legal services."
    },
    {
      question: "What are your office hours?",
      answer: "Our office is open Monday to Thursday from 9:00 AM to 5:00 PM, and Friday from 9:00 AM to 12:30 PM. Appointments outside these hours can be arranged for urgent matters."
    },
    {
      question: "Can you represent me in other emirates?",
      answer: "Yes, we provide legal representation across all UAE emirates, with experience in various local courts and regulatory bodies throughout the country."
    },
    {
      question: "What is your policy on client communication?",
      answer: "We maintain regular client communication through preferred channels (email, phone, or in-person meetings) and provide updates at every significant stage of your case."
    },
    {
      question: "Do you provide legal documentation services?",
      answer: "Yes, we offer comprehensive legal documentation services including contract drafting, document review, authentication, and notarization services."
    },
    {
      question: "How do you handle conflict of interest situations?",
      answer: "We conduct thorough conflict checks before accepting new cases and maintain strict ethical standards in accordance with UAE legal practice requirements."
    },
    {
      question: "What types of corporate services do you offer?",
      answer: "Our corporate services include company formation, corporate restructuring, mergers and acquisitions, corporate governance, and ongoing legal compliance support."
    },
    {
      question: "Can you assist with regulatory compliance?",
      answer: "Yes, we provide comprehensive regulatory compliance services across various sectors, helping businesses navigate UAE regulatory requirements and maintain compliance."
    },
    {
      question: "Do you handle intellectual property matters?",
      answer: "Yes, we handle intellectual property matters including trademark registration, patent applications, copyright protection, and IP dispute resolution."
    },
    {
      question: "What is your approach to dispute resolution?",
      answer: "We prioritize efficient dispute resolution through negotiation and mediation when possible, while maintaining readiness for litigation when necessary to protect client interests."
    },
    {
      question: "How do you handle criminal defense cases?",
      answer: "Our criminal defense practice provides strategic representation, ensuring clients' rights are protected throughout the legal process while maintaining strict confidentiality."
    },
    {
      question: "Can you assist with debt collection?",
      answer: "Yes, we provide comprehensive debt collection services, including legal notices, negotiation, and court representation when necessary."
    },
    {
      question: "Do you handle labor disputes?",
      answer: "Yes, we handle all types of labor disputes, representing both employers and employees in matters related to UAE labor law."
    },
    {
      question: "What is your experience with financial crimes?",
      answer: "We have extensive experience handling financial crime cases, including fraud, embezzlement, and regulatory violations, providing both advisory and defense services."
    },
    {
      question: "Can you help with inheritance matters?",
      answer: "Yes, we handle inheritance matters under both UAE law and Sharia law, including will preparation, estate planning, and inheritance disputes."
    },
    {
      question: "Do you provide legal training services?",
      answer: "Yes, we offer legal training and workshops for corporate clients on various aspects of UAE law and compliance requirements."
    },
    {
      question: "How do you handle maritime law cases?",
      answer: "We handle maritime law cases including shipping disputes, maritime liens, vessel arrests, and related commercial matters in UAE waters."
    },
    {
      question: "What is your policy on fees and billing?",
      answer: "We maintain transparent billing practices with detailed invoicing and various payment arrangements to suit client needs. All fee structures are discussed and agreed upon upfront."
    },
    {
      question: "Can you assist with arbitration proceedings?",
      answer: "Yes, we have extensive experience in both domestic and international arbitration proceedings, representing clients across various dispute types."
    }
  ];

  // FAQPage Schema for SEO
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
    <div className="py-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h3 className="text-xl md:text-2xl font-playfair font-bold mb-6 text-center">Frequently Asked Questions</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="text-left font-medium px-4 py-3 hover:bg-gray-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <p className="text-precedential-black/70">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + Math.ceil(faqData.length / 2)}`} className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="text-left font-medium px-4 py-3 hover:bg-gray-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <p className="text-precedential-black/70">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
