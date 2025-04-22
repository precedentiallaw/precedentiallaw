import React from 'react';

export const LegalServiceSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "description": "Top-tier Dubai-based legal consultancy providing premium legal services across family law, immigration, business, real estate, and criminal defense.",
    "url": "https://precedentiallaw.com",
    "logo": "/lovable-uploads/3264ca05-2871-450a-8753-cf69e759e918.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "UAE",
      "streetAddress": "Business Bay, Sheikh Zayed Road"
    },
    "telephone": "+971-4-456-7890",
    "email": "info@precedentiallaw.com",
    "openingHours": "Su-Th 09:00-18:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    },
    "keywords": "most trusted law firm in Dubai, legal advice UAE, Dubai legal consultation, best criminal lawyer in Dubai, family law Dubai, immigration lawyer UAE, business law firm Dubai",
    "sameAs": [
      "https://www.facebook.com/precedentiallaw",
      "https://www.linkedin.com/company/precedentiallaw",
      "https://twitter.com/precedentiallaw",
      "https://www.instagram.com/precedentiallaw"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Law Services",
            "description": "Comprehensive business and corporate legal services for companies in Dubai and UAE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Law",
            "description": "Expert legal services for divorce, child custody, and matrimonial issues in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Law",
            "description": "Legal advice and representation for property transactions in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Criminal Defense",
            "description": "Professional legal defense services for criminal cases in UAE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Immigration Services",
            "description": "Visa and immigration legal services for individuals and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dispute Resolution",
            "description": "Mediation and legal representation for conflict resolution"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the key differences between fixed-term and flexible employment contracts under the new UAE Labour Law?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The UAE Labour Law (Federal Decree-Law No. 33 of 2021) introduced more flexibility in employment contracts. A Fixed-Term Contract has a specific end date (maximum 3 years, but renewable). A Flexible Work Contract allows work hours or days to change based on the employer's needs and volume of work. Other models like part-time or temporary work contracts also exist. Key differences lie in duration, renewal terms, notice periods for termination (which apply even in fixed-term contracts now), and potentially how end-of-service gratuity accrues. Choosing the right contract type depends on the nature of the role and the business requirements. The shift away from 'unlimited' contracts under the old law means all contracts now require careful attention to their specific terms and conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Who usually gets custody of children after an expat divorce in the UAE under the latest regulations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recent UAE laws, particularly Federal Decree-Law No. 41 of 2022 for non-Muslims, have introduced concepts like joint custody following divorce, aiming to prioritize the child's well-being. The guiding principle is always the \"best interests of the child.\" While joint custody is now a default possibility, how it's implemented—or whether sole custody is awarded instead—depends heavily on the specific family situation. Factors considered include the parents' ability to cooperate, living arrangements, each parent's capacity to provide care, and importantly, ensuring the child's stability and welfare. The application of these principles can become complex, especially when parents disagree or if one party intends to relocate outside the UAE. Furthermore, expats retain the option to request their home country's law apply to custody matters, adding another layer of legal consideration. Understanding which legal framework applies and how UAE courts interpret 'best interests' in a cross-cultural context is vital. Presenting a compelling case requires careful preparation and knowledge of local judicial practices. This information provides a general overview and does not constitute legal advice. Child custody arrangements are profoundly impactful and legally intricate. Ensuring the outcome truly serves your child's best interests while protecting your parental rights requires navigating complex legal standards. For clear, strategic advice tailored to your family's unique circumstances, consulting with Precedential Law's dedicated family law specialists is the wisest path forward."
        }
      },
      {
        "@type": "Question",
        "name": "What are the first legal steps I should take if my business partner breaches our partnership agreement in the UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Discovering a potential breach of your partnership agreement by a business partner is understandably concerning. The immediate steps often involve carefully reviewing the specific terms of your agreement regarding breaches, dispute resolution clauses (like mediation or arbitration), and gathering clear evidence of the alleged violation. Sending a formal notification or 'legal notice' outlining the breach and demanding rectification is a common initial step, creating a formal record. However, the situation is rarely simple. The nature of the breach, the potential damages incurred, the specific legal structure of your partnership (e.g., LLC, Civil Company), and the governing laws all influence the best strategy. Acting rashly or without understanding the full legal implications could weaken your position or even expose you to counterclaims. Deciding whether to pursue negotiation, mediation, arbitration, or litigation requires a strategic assessment of the potential outcomes, costs, and timelines involved. This information provides a general overview and does not constitute legal advice. Partnership disputes can escalate quickly and threaten the viability of your business. Protecting your interests requires swift, informed, and strategic legal action. To understand your options fully and navigate the complexities of UAE commercial law effectively, seeking counsel from Precedential Law's experienced commercial litigation team is essential for achieving a resolution that safeguards your investment."
        }
      },
      {
        "@type": "Question",
        "name": "Can my landlord increase my rent whenever they want, or are there restrictions in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Landlords in Dubai cannot arbitrarily increase rent whenever they wish. Rent increases are regulated, primarily through the framework provided by the Real Estate Regulatory Agency (RERA). Generally, landlords can only propose a rent increase upon renewal of the tenancy contract, and they must provide tenants with at least 90 days' written notice before the contract expiry date if they intend to do so. Crucially, the permissible amount of increase is often tied to the RERA Rental Index calculator, which compares your current rent to the average market rate for similar properties in your area. If your rent is already aligned with or above the market average indicated by the index, an increase may not be permitted. However, understanding how the RERA index applies to your specific property type and location, knowing the exceptions, and following the correct procedures for disputing an unlawful increase through the Rental Dispute Centre (RDC) involves specific knowledge of Dubai's rental laws and RDC processes. This information provides a general overview and does not constitute legal advice. Navigating rent increase notices and potential disputes requires clarity on your rights and the landlord's legal limitations. Ensuring you aren't subjected to unfair increases involves understanding complex regulations. For precise advice based on your tenancy contract and current RERA guidelines, consulting with Precedential Law's real estate law experts provides the clarity needed to protect your position."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to my assets in the UAE if I pass away without a registered will as a non-Muslim expatriate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For non-Muslim expats dying in the UAE without a registered Will, the consequences can be complex and potentially distressing for their families. While recent laws offer options, the default position without a valid Will often leads to the application of local laws, potentially including Sharia principles, for the distribution of UAE-based assets (like property, bank accounts, end-of-service benefits). This involves pre-determined shares for specific relatives, which may significantly differ from your personal wishes. Furthermore, the process can be lengthy, potentially involving court proceedings to determine heirs and distribute assets, during which bank accounts and other assets may be frozen. Appointing guardians for minor children also becomes subject to court decisions based on local law evaluations, creating uncertainty during a difficult time. While mechanisms exist to potentially apply home country law, invoking them without a Will is often more complicated and uncertain. This information provides a general overview and does not constitute legal advice. The absence of a registered Will creates significant legal uncertainty and potential hardship for your loved ones in the UAE. Proactively securing your legacy and ensuring your wishes regarding assets and guardianship are respected requires navigating specific UAE legal frameworks for Wills. To understand the best options for your situation and gain peace of mind, discussing your estate planning needs with Precedential Law's specialists is a critical step."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}></script>
    </>
  );
};

export default LegalServiceSchema;
