
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, ChevronRight, Info, Scale, Building, Users, Home, CreditCard, Gavel, Globe, Heart } from 'lucide-react';

const expatFAQData = [
  {
    category: "Expat Family Law & Personal Legal Issues",
    items: [
      {
        question: "What happens to my assets if I die in Dubai without a Will?",
        answer: "Without a Will, your assets will be distributed according to UAE Sharia law, regardless of your religion or nationality. This could mean your spouse receives only 1/8 of your estate, and the remainder goes to your children or other relatives. For expats, this often conflicts with your home country's inheritance expectations and can create significant hardship for surviving family members."
      },
      {
        question: "Can I get divorced in Dubai if I'm not Emirati?",
        answer: "Yes, expats can file for divorce in Dubai through either the Dubai Courts or DIFC Courts (if eligible). The process varies depending on your nationality, religion, and where you were married. We help expats navigate these complex jurisdictional issues to ensure the most favorable outcome under applicable law, including asset division and child custody arrangements."
      },
      {
        question: "How can I protect my children's custody rights as an expat in Dubai?",
        answer: "Child custody in Dubai follows specific legal frameworks that may differ significantly from your home country. We help establish clear custody arrangements through DIFC Courts when eligible, ensure proper guardianship documentation, and create legally binding agreements that protect your parental rights while complying with UAE law and international conventions."
      },
      {
        question: "What is a DIFC Will and why do I need one as an expat?",
        answer: "A DIFC Will allows non-Muslim expats to distribute their UAE assets according to their wishes, bypassing Sharia inheritance law. It covers UAE real estate, bank accounts, and other local assets. This is crucial for expats who want to ensure their spouse and children inherit according to their intentions, not UAE default law which may drastically differ from their expectations."
      }
    ]
  },
  {
    category: "UAE Business Setup & Corporate Law for Expats",
    items: [
      {
        question: "What's the fastest way to set up a business in Dubai as a foreigner?",
        answer: "The fastest route is typically through Dubai's free zones, which allow 100% foreign ownership and can be completed in 3-7 days. However, the best option depends on your business type, target market, and long-term goals. We evaluate mainland vs. free zone options, handle all licensing requirements, and ensure compliance with UAE commercial regulations to get your business operational quickly."
      },
      {
        question: "Can I own 100% of a company in Dubai as an expat?",
        answer: "Yes, through several routes: Dubai free zones, DIFC, ADGM, or mainland companies under the new UAE Commercial Companies Law. Each option has different benefits and restrictions. We help you choose the optimal structure based on your business activities, whether you need a local presence, and your expansion plans within the UAE and region."
      },
      {
        question: "What are the new UAE Corporate Tax implications for my business?",
        answer: "UAE Corporate Tax applies to businesses with annual profits exceeding AED 375,000, with rates up to 9%. However, numerous exemptions and free zone benefits may apply. We provide comprehensive tax planning, ensure compliance with new reporting requirements, and structure your business to optimize tax efficiency while maintaining full legal compliance."
      },
      {
        question: "How do I protect my business from UAE commercial disputes?",
        answer: "Protection starts with properly drafted contracts, clear partnership agreements, and understanding UAE commercial law. We draft robust commercial agreements, advise on dispute resolution mechanisms (courts vs. arbitration), and provide ongoing legal support to prevent disputes. When conflicts arise, we offer aggressive representation to protect your business interests."
      }
    ]
  },
  {
    category: "UAE Visa & Immigration Law for Expats",
    items: [
      {
        question: "How can I get a UAE Golden Visa and what are the benefits?",
        answer: "UAE Golden Visa offers 5-10 year residency for investors, entrepreneurs, skilled professionals, and exceptional students. Benefits include multiple entry, family sponsorship, and no sponsor requirement. We assess your eligibility across different categories, prepare comprehensive applications, and handle the entire process to secure your long-term UAE residency status."
      },
      {
        question: "What happens if my UAE visa is cancelled while I'm outside the country?",
        answer: "Visa cancellation while abroad can create serious complications for re-entry and can affect your assets, bank accounts, and family's residence status. We provide emergency legal assistance to resolve visa issues, coordinate with immigration authorities, and protect your UAE interests while you're outside the country. Time is critical in these situations."
      },
      {
        question: "Can I sponsor my parents and family members for UAE residence?",
        answer: "Yes, under specific conditions related to your salary, accommodation, and family circumstances. Requirements vary by emirate and visa type. We handle family sponsorship applications, ensure all documentation meets current requirements, and advise on the most efficient approach for bringing your family to the UAE legally and permanently."
      },
      {
        question: "What legal protections do I have as an expat employee in the UAE?",
        answer: "UAE Labour Law provides comprehensive protections including salary guarantees, end-of-service benefits, annual leave, and protection against arbitrary termination. We review employment contracts, advise on your rights, handle workplace disputes, and ensure you receive all legally mandated benefits. We also assist with labour ban issues and wrongful termination claims."
      }
    ]
  },
  {
    category: "UAE Property & Real Estate Law for Expats",
    items: [
      {
        question: "Can expats buy property in Dubai and what are the risks?",
        answer: "Expats can buy freehold property in designated areas of Dubai. However, risks include developer delays, payment plan defaults, and unclear title transfers. We conduct comprehensive due diligence, review all purchase agreements, ensure proper Ejari registration, and protect your investment through every stage of the property acquisition process."
      },
      {
        question: "What should I do if my Dubai landlord refuses to return my security deposit?",
        answer: "Security deposit disputes are common and can be resolved through Dubai's Rental Dispute Centre (RDC). We help gather evidence, file RDC complaints, and represent you in hearings. Most cases can be resolved quickly when proper procedures are followed. We also negotiate directly with landlords when possible to achieve faster resolution."
      },
      {
        question: "How do I handle property inheritance as an expat in Dubai?",
        answer: "Property inheritance for expats requires careful planning through DIFC Wills or other legal structures. Without proper planning, your Dubai property may be subject to Sharia inheritance law regardless of your religion. We create comprehensive estate plans that ensure your Dubai property transfers to your intended beneficiaries according to your wishes."
      },
      {
        question: "What are my rights as a tenant in Dubai if my landlord wants to evict me?",
        answer: "Dubai tenancy law provides specific protections against arbitrary eviction. Landlords must follow legal procedures and provide proper notice. We review your tenancy contract, advise on your rights, negotiate with landlords, and represent you in rental disputes to ensure you're treated fairly under UAE law."
      }
    ]
  }
];

const categoryIcons = {
  "Expat Family Law & Personal Legal Issues": Heart,
  "UAE Business Setup & Corporate Law for Expats": Building,
  "UAE Visa & Immigration Law for Expats": Globe,
  "UAE Property & Real Estate Law for Expats": Home,
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
    "mainEntity": expatFAQData.flatMap(category => 
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
    <section id="faq" className="py-12 md:py-16 lg:py-20 w-full bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-precedential-gold/10 to-green-100 border border-green-200">
              <div className="flex items-center gap-2">
                <Scale className="w-6 h-6 text-precedential-gold" />
                <Globe className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-green-600">Expat Legal</span> <span className="text-gold-gradient">Questions Answered</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert answers to the most critical legal questions facing expat families and international businesses in Dubai. 
            Get clarity on UAE law from lawyers who specialize in expat legal needs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {expatFAQData.map((category, index) => {
            const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons] || Info;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-green-100 animate-fade-up transform transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8 pb-4 border-b border-green-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
                    <IconComponent className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-gray-800">
                      {category.category}
                    </h3>
                    <p className="text-sm text-green-600 mt-1">
                      {category.items.length} essential questions answered by expat law specialists
                    </p>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.items.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${category.category}-${faqIndex}`}
                      className="border border-green-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors"
                    >
                      <AccordionTrigger 
                        className="text-left font-semibold px-5 md:px-6 py-4 md:py-5 hover:bg-green-50 text-sm md:text-base leading-relaxed"
                        iconComponent={mounted && !isMobile ? 
                          <ChevronDown className="h-5 w-5 text-green-600 shrink-0 transition-transform duration-200" /> : 
                          <ChevronRight className="h-5 w-5 text-green-600 shrink-0 transition-transform duration-200" />
                        }
                      >
                        <span className="pr-6">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 md:px-6 py-4 md:py-5 text-sm md:text-base bg-green-50/30">
                        <div className="prose prose-sm md:prose-base max-w-none">
                          <p className="text-gray-700 leading-relaxed mb-0">
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
          <div className="bg-gradient-to-r from-precedential-black to-gray-800 text-white rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Expat Legal Specialists</span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Still Have Questions About UAE Law?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Every expat situation is unique. Our specialized legal team provides personalized advice 
              tailored to your specific circumstances, nationality, and legal objectives in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                Free Expat Legal Consultation
              </button>
              <button className="border border-precedential-gold text-precedential-gold px-8 py-3 rounded-xl font-semibold hover:bg-precedential-gold hover:text-precedential-black transition-colors">
                Download Expat Legal Guide
              </button>
            </div>
            <div className="mt-6 text-sm opacity-75">
              ✓ Specialized in expat needs ✓ Multilingual support ✓ 24/7 emergency help
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
