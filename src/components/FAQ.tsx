import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ: React.FC = () => {
  // Define the comprehensive FAQ data
  const faqData = [
  // Business & Corporate
  {
    category: "Business & Corporate",
    items: [{
      question: "What are the key legal differences between setting up a business on the Dubai Mainland versus in a Free Zone?",
      answer: "The main difference lies in market access and regulation. Mainland companies (licensed by DET) can trade freely within the entire UAE market and take government contracts, while Free Zone companies are generally restricted to their zone or international trade (often needing a local distributor for mainland access). While Free Zones historically offered 100% foreign ownership (now widely available on Mainland too for many activities) and potential customs duty exemptions, they operate under specific Free Zone Authority rules, whereas Mainland firms follow standard UAE laws including VAT and Corporate Tax (currently 9% over AED 375k taxable income)."
    }, {
      question: "Do SMEs operating within UAE Free Zones need to register for and pay Corporate Tax?",
      answer: "Yes, almost all companies in the UAE, including SMEs in Free Zones, must register for UAE Corporate Tax. However, whether a Free Zone company pays the 9% tax depends on meeting strict conditions. To potentially benefit from a 0% rate, the company must be a 'Qualifying Free Zone Person' and derive only 'Qualifying Income' (which generally excludes income from Mainland UAE sources, among other criteria)."
    }]
  },
  // Employment Law
  {
    category: "Employment Law",
    items: [{
      question: "What are considered lawful reasons for terminating an employment contract in the UAE?",
      answer: "Generally, termination requires a valid reason related to work performance or operational needs, following the notice period in your contract (usually 30-90 days) as per UAE Labour Law (Federal Decree-Law No. 33 of 2021). Valid reasons can include documented poor performance (after warnings) or genuine redundancy (e.g., business closure)."
    }, {
      question: "How is the end-of-service gratuity calculated for employees in Dubai?",
      answer: "End-of-service gratuity under the current UAE Labour Law (Federal Decree-Law No. 33 of 2021) is calculated based on the employee's last basic salary and years of continuous service. For employees with over one year of service, the basic formula is 21 days' basic pay per year for the first five years, and 30 days' basic pay per year thereafter, with the total typically capped at two years' full salary."
    }]
  },
  // Family Law & Wills
  {
    category: "Family Law & Wills",
    items: [{
      question: "As a non-Muslim expat in Dubai, can I obtain a 'no-fault' divorce under the new laws?",
      answer: "Yes, Federal Decree-Law No. 41 of 2022 generally allows non-Muslim expats across the UAE to obtain a divorce based on the request of either spouse, without needing to prove fault or provide a specific reason ('no-fault'). This aims to streamline the process compared to older requirements."
    }, {
      question: "Why is it important for non-Muslim expats in the UAE to have a registered Will?",
      answer: "It's critically important because without a registered Will recognized in the UAE, the distribution of your local assets (property, bank accounts, etc.) and guardianship of minor children may automatically default to local laws, potentially including Sharia principles. This often leads to outcomes misaligned with your wishes (e.g., fixed inheritance shares) and can cause significant delays, stress, and uncertainty for your family, including potential asset freezing."
    }, {
      question: "What's the main difference between registering a Will with DIFC Wills Service versus the ADJD Civil Family Court (Abu Dhabi)?",
      answer: "The main difference lies in the underlying legal framework and scope. DIFC Wills operate under common law principles (similar to English law) within the DIFC jurisdiction, primarily covering Dubai assets (though guardianship can be worldwide). The ADJD Civil Family Court allows non-Muslims to register Wills potentially applying their chosen home country law or specific civil principles for matters handled via Abu Dhabi courts, historically focused on Abu Dhabi assets."
    }]
  },
  // Real Estate & Rental Disputes
  {
    category: "Real Estate & Rental Disputes",
    items: [{
      question: "What is the general process for filing a rental dispute online with the RDC Dubai?",
      answer: "Filing a rental dispute online with Dubai's Rental Dispute Centre (RDC) generally involves these key steps: 1. Prepare all necessary documents (IDs, Ejari, contract, evidence, translations). 2. Register or log in to the RDC/DLD online portal. 3. Initiate a new lawsuit, accurately entering lease and party details, and clearly stating your claim (e.g., rent recovery, deposit refund). 4. Upload scanned copies of all documents. 5. Pay the required fees online (typically 3.5% of annual rent + admin fees). 6. Submit the case and track its progress using the provided case number."
    }, {
      question: "Who is responsible for maintenance in a rented property in Dubai – the landlord or the tenant?",
      answer: "Generally, the landlord is responsible for major maintenance ensuring the property remains habitable (e.g., structural repairs, major AC/plumbing issues), while the tenant handles minor upkeep and repairs for damage they cause. However, the specifics should be clearly defined in your tenancy contract (lease agreement)."
    }, {
      question: "Can my landlord evict me immediately if I am late paying rent?",
      answer: "No, immediate eviction for late rent is illegal in Dubai. The landlord must follow a strict legal process. First, they must serve you a formal written notice (via Notary Public or registered mail) giving you 30 days to pay the outstanding rent. Only if you fail to pay within those 30 days can the landlord then file an eviction case with the Rental Dispute Centre (RDC)."
    }]
  },
  // Financial & Debt Cases
  {
    category: "Financial & Debt Cases",
    items: [{
      question: "Is issuing a cheque without sufficient funds still considered a criminal offence in the UAE as of 2025?",
      answer: "In many standard situations, no. Recent changes to the Commercial Transactions Law largely decriminalized issuing cheques with insufficient funds ('bounced cheques'). The primary remedy is now civil enforcement, allowing the recipient to use the bounced cheque as an 'executive bond' to claim the funds directly through the execution court."
    }, {
      question: "Can I be stopped from leaving the UAE if I have outstanding credit card debt or unpaid loans?",
      answer: "Yes, it's a possibility. While not automatic, creditors (like banks) can pursue legal action for significant unpaid debts (credit cards, loans) and obtain a court order imposing a travel ban, preventing you from leaving the UAE until the matter is resolved. This requires the creditor to file a case (usually civil) first."
    }, {
      question: "What happens if I issue a cheque from an account I knew was closed?",
      answer: "Yes, knowingly issuing a cheque from a closed account generally remains a criminal offence in the UAE, distinct from simply having insufficient funds. This action demonstrates bad faith or fraudulent intent, which was not covered by the recent partial decriminalization laws."
    }]
  }];

  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => category.items.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })))
  };
  return;
};
export default FAQ;