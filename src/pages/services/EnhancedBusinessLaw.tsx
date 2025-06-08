
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import ComprehensiveServiceContent from '@/components/ComprehensiveServiceContent';

const EnhancedBusinessLaw: React.FC = () => {
  const serviceData = {
    title: "Business Law",
    description: "Comprehensive legal support for businesses operating in Dubai and the UAE. Our expert business lawyers provide strategic guidance from company formation to complex commercial transactions, ensuring your business operates within legal compliance while maximizing growth opportunities.",
    keyPoints: [
      "Complete UAE business law expertise",
      "Company formation and structuring",
      "Commercial contract drafting and review",
      "Regulatory compliance consulting",
      "Merger and acquisition support",
      "Corporate governance advisory",
      "Employment law compliance",
      "Intellectual property protection",
      "Tax optimization strategies",
      "International business structuring"
    ],
    process: [
      "Initial consultation to understand your business objectives and legal requirements",
      "Comprehensive analysis of UAE business laws applicable to your industry and structure",
      "Development of customized legal strategy aligned with your business goals",
      "Preparation and filing of all necessary legal documents and registrations",
      "Ongoing compliance monitoring and legal advisory support",
      "Regular reviews and updates to ensure continued legal compliance"
    ],
    benefits: [
      "Expert knowledge of UAE Federal Law No. 32 of 2021 (Companies Law)",
      "Deep understanding of Dubai Economic Department regulations",
      "Experience with free zone and mainland business structures",
      "Proven track record with 500+ successful company formations",
      "Multilingual support in English, Arabic, and other languages",
      "Fixed-fee pricing for most standard business law services",
      "24/7 emergency legal support for urgent business matters",
      "Strategic partnerships with accounting and business setup firms"
    ],
    faq: [
      {
        question: "What types of business entities can I establish in Dubai?",
        answer: "Dubai offers several business structures including Limited Liability Company (LLC), Free Zone Establishment (FZE), Public Joint Stock Company (PJSC), and branch offices of foreign companies. Each has different ownership requirements, capital needs, and operational benefits."
      },
      {
        question: "How long does company formation take in Dubai?",
        answer: "Company formation typically takes 2-4 weeks for mainland companies and 1-2 weeks for free zone companies, depending on the business activities and documentation completeness. We expedite the process through our government relationships."
      },
      {
        question: "What are the minimum capital requirements for Dubai companies?",
        answer: "Minimum capital varies by business type and location. LLC companies require minimum AED 300,000 capital, while free zone companies may have lower requirements starting from AED 50,000 depending on the specific free zone."
      },
      {
        question: "Can foreign investors own 100% of a Dubai company?",
        answer: "Yes, foreign investors can own 100% of companies in Dubai free zones and specific mainland business activities under the new Commercial Companies Law. Some mainland activities still require UAE national partnerships."
      }
    ],
    relatedServices: [
      "Corporate Law Dubai",
      "Employment Law UAE", 
      "Contract Disputes",
      "Commercial Litigation",
      "Real Estate Law",
      "Immigration Law"
    ],
    caseStudyTitle: "Tech Startup Expansion to Dubai",
    caseStudyDescription: "Successfully guided a European technology startup through establishing their Middle East headquarters in Dubai Internet City, including corporate structuring, employment compliance, and intellectual property protection. The company achieved 300% revenue growth within 18 months of establishment."
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Business Law Services Dubai | Company Formation & Corporate Legal Advice | Precedential Law</title>
        <meta name="description" content="Expert business law services in Dubai. Complete company formation, commercial contracts, regulatory compliance, and corporate legal advisory. 500+ successful formations." />
        <meta name="keywords" content="business law Dubai, company formation Dubai, corporate lawyer UAE, commercial law, business setup Dubai, LLC formation, free zone company, corporate compliance" />
        <link rel="canonical" href="https://precedentiallaw.com/services/business-law" />
        
        <meta property="og:title" content="Expert Business Law Services Dubai | Company Formation Specialists" />
        <meta property="og:description" content="Comprehensive business law services in Dubai. Expert guidance for company formation, commercial contracts, and corporate compliance." />
        <meta property="og:url" content="https://precedentiallaw.com/services/business-law" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Business Law Experts in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive legal support for business success in the UAE. From startup to expansion, we protect your business interests.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <ComprehensiveServiceContent {...serviceData} />
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default EnhancedBusinessLaw;
