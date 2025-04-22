
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
      category: "Employment Law",
      question: "Can my employer terminate my contract without a valid reason under the current UAE Labour Law?",
      answer: "The UAE Labour Law aims to protect both employer and employee rights, establishing that termination should generally be based on a legitimate reason related to work performance or operational requirements. While the concept seems straightforward, determining what constitutes a \"valid reason\" in practice involves careful interpretation of the law and the specific circumstances. Simply disagreeing with your employer or minor issues may not suffice as grounds for dismissal. The law also explicitly prohibits termination for discriminatory reasons or because an employee filed a legitimate complaint.",
      additionalInfo: "Furthermore, employers must follow specific procedures, including providing proper notice periods as stated in your contract (usually 30-90 days). Failure to adhere to these procedures or terminating employment based on grounds deemed unlawful can lead to disputes and potential claims for arbitrary dismissal compensation. Assessing whether a termination is legally sound requires analysing the stated reason against the legal benchmarks, reviewing the employer's adherence to process, and understanding the nuances of recent court interpretations.",
      disclaimer: "This information provides a general overview and does not constitute legal advice.",
      guidance: "Navigating a potential termination requires understanding your specific rights and the employer's obligations under the law. Missteps can be costly. To confidently assess your situation and explore the best course of action, securing personalized guidance from the experienced employment law team at Precedential Law is a crucial step."
    },
    {
      category: "Family Law (Expat Focus)",
      question: "Who usually gets custody of children after an expat divorce in the UAE under the latest regulations?",
      answer: "Recent UAE laws, particularly Federal Decree-Law No. 41 of 2022 for non-Muslims, have introduced concepts like joint custody following divorce, aiming to prioritize the child's well-being. The guiding principle is always the \"best interests of the child.\" While joint custody is now a default possibility, how it's implemented—or whether sole custody is awarded instead—depends heavily on the specific family situation. Factors considered include the parents' ability to cooperate, living arrangements, each parent's capacity to provide care, and importantly, ensuring the child's stability and welfare.",
      additionalInfo: "The application of these principles can become complex, especially when parents disagree or if one party intends to relocate outside the UAE. Furthermore, expats retain the option to request their home country's law apply to custody matters, adding another layer of legal consideration. Understanding which legal framework applies and how UAE courts interpret 'best interests' in a cross-cultural context is vital. Presenting a compelling case requires careful preparation and knowledge of local judicial practices.",
      disclaimer: "This information provides a general overview and does not constitute legal advice.",
      guidance: "Child custody arrangements are profoundly impactful and legally intricate. Ensuring the outcome truly serves your child's best interests while protecting your parental rights requires navigating complex legal standards. For clear, strategic advice tailored to your family's unique circumstances, consulting with Precedential Law's dedicated family law specialists is the wisest path forward."
    },
    {
      category: "Business & Commercial Law",
      question: "What are the first legal steps I should take if my business partner breaches our partnership agreement in the UAE?",
      answer: "Discovering a potential breach of your partnership agreement by a business partner is understandably concerning. The immediate steps often involve carefully reviewing the specific terms of your agreement regarding breaches, dispute resolution clauses (like mediation or arbitration), and gathering clear evidence of the alleged violation. Sending a formal notification or 'legal notice' outlining the breach and demanding rectification is a common initial step, creating a formal record.",
      additionalInfo: "However, the situation is rarely simple. The nature of the breach, the potential damages incurred, the specific legal structure of your partnership (e.g., LLC, Civil Company), and the governing laws all influence the best strategy. Acting rashly or without understanding the full legal implications could weaken your position or even expose you to counterclaims. Deciding whether to pursue negotiation, mediation, arbitration, or litigation requires a strategic assessment of the potential outcomes, costs, and timelines involved.",
      disclaimer: "This information provides a general overview and does not constitute legal advice.",
      guidance: "Partnership disputes can escalate quickly and threaten the viability of your business. Protecting your interests requires swift, informed, and strategic legal action. To understand your options fully and navigate the complexities of UAE commercial law effectively, seeking counsel from Precedential Law's experienced commercial litigation team is essential for achieving a resolution that safeguards your investment."
    },
    {
      category: "Real Estate Law",
      question: "Can my landlord increase my rent whenever they want, or are there restrictions in Dubai?",
      answer: "Landlords in Dubai cannot arbitrarily increase rent whenever they wish. Rent increases are regulated, primarily through the framework provided by the Real Estate Regulatory Agency (RERA). Generally, landlords can only propose a rent increase upon renewal of the tenancy contract, and they must provide tenants with at least 90 days' written notice before the contract expiry date if they intend to do so.",
      additionalInfo: "Crucially, the permissible amount of increase is often tied to the RERA Rental Index calculator, which compares your current rent to the average market rate for similar properties in your area. If your rent is already aligned with or above the market average indicated by the index, an increase may not be permitted. However, understanding how the RERA index applies to your specific property type and location, knowing the exceptions, and following the correct procedures for disputing an unlawful increase through the Rental Dispute Centre (RDC) involves specific knowledge of Dubai's rental laws and RDC processes.",
      disclaimer: "This information provides a general overview and does not constitute legal advice.",
      guidance: "Navigating rent increase notices and potential disputes requires clarity on your rights and the landlord's legal limitations. Ensuring you aren't subjected to unfair increases involves understanding complex regulations. For precise advice based on your tenancy contract and current RERA guidelines, consulting with Precedential Law's real estate law experts provides the clarity needed to protect your position."
    },
    {
      category: "Wills & Estates (Expat Focus)",
      question: "What happens to my assets in the UAE if I pass away without a registered will as a non-Muslim expatriate?",
      answer: "For non-Muslim expats dying in the UAE without a registered Will, the consequences can be complex and potentially distressing for their families. While recent laws offer options, the default position without a valid Will often leads to the application of local laws, potentially including Sharia principles, for the distribution of UAE-based assets (like property, bank accounts, end-of-service benefits). This involves pre-determined shares for specific relatives, which may significantly differ from your personal wishes.",
      additionalInfo: "Furthermore, the process can be lengthy, potentially involving court proceedings to determine heirs and distribute assets, during which bank accounts and other assets may be frozen. Appointing guardians for minor children also becomes subject to court decisions based on local law evaluations, creating uncertainty during a difficult time. While mechanisms exist to potentially apply home country law, invoking them without a Will is often more complicated and uncertain.",
      disclaimer: "This information provides a general overview and does not constitute legal advice.",
      guidance: "The absence of a registered Will creates significant legal uncertainty and potential hardship for your loved ones in the UAE. Proactively securing your legacy and ensuring your wishes regarding assets and guardianship are respected requires navigating specific UAE legal frameworks for Wills. To understand the best options for your situation and gain peace of mind, discussing your estate planning needs with Precedential Law's specialists is a critical step."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-precedential-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Answers to the most common legal questions our clients have about UAE law.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/[0.03] rounded-lg border border-precedential-gold/20 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-precedential-gold/10 hover:no-underline">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-precedential-gold mb-1 block">
                      {faq.category}
                    </span>
                    <span className="text-white font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white/[0.02] text-white/80">
                  <div className="space-y-4">
                    <p>{faq.answer}</p>
                    <p>{faq.additionalInfo}</p>
                    <p className="italic text-white/60">{faq.disclaimer}</p>
                    <p className="font-medium text-precedential-gold/90">{faq.guidance}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
