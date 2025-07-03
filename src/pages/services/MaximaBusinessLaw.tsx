
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Scale, Shield, Users, Briefcase } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaBusinessLaw: React.FC = () => {
  const services = [
    {
      title: "Company Formation Dubai",
      description: "Complete UAE company setup including LLC, FZE, and branch office establishment",
      icon: Building2
    },
    {
      title: "Commercial Contracts",
      description: "Comprehensive contract drafting, review, and negotiation services",
      icon: FileText
    },
    {
      title: "Regulatory Compliance",
      description: "UAE commercial law compliance, licensing, and regulatory advisory",
      icon: Scale
    },
    {
      title: "Corporate Governance",
      description: "Board advisory, compliance frameworks, and corporate restructuring",
      icon: Shield
    },
    {
      title: "M&A Transactions",
      description: "Mergers, acquisitions, joint ventures, and strategic partnerships",
      icon: Briefcase
    },
    {
      title: "Employment Law",
      description: "UAE labor law compliance, employment contracts, and HR advisory",
      icon: Users
    }
  ];

  const faqData = [
    {
      question: "What types of companies can I establish in Dubai?",
      answer: "Dubai offers various business structures including Limited Liability Company (LLC), Free Zone Establishment (FZE), Public Joint Stock Company (PJSC), and branch offices of foreign companies."
    },
    {
      question: "How long does company formation take in Dubai?",
      answer: "Company formation typically takes 2-4 weeks for mainland companies and 1-2 weeks for free zone companies, depending on business activities and documentation completeness."
    },
    {
      question: "What are the minimum capital requirements?",
      answer: "Minimum capital varies by business type: LLC companies require AED 300,000, while free zone companies may have lower requirements starting from AED 50,000."
    }
  ];

  return (
    <ServicePageLayout
      title="Business Law Services Dubai | UAE Commercial Legal Experts | Precedential Law"
      description="Expert business law services in Dubai. Our UAE commercial lawyers provide comprehensive legal support for company formation, contracts, compliance, and business disputes."
      canonical="https://precedentiallaw.com/services/business-law"
    >
      <ArticleSchema
        headline="Business Law Services Dubai - UAE Commercial Legal Experts"
        description="Comprehensive business law services including company formation, commercial contracts, and corporate compliance in Dubai and UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/business-law"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Business Law Services in Dubai</h1>
          <p className="text-large">
            Comprehensive legal support for businesses operating in the UAE. From company formation 
            to complex commercial disputes, our experienced business lawyers provide strategic 
            guidance tailored to Dubai's dynamic business environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Business Legal Consultation
            </a>
            <Button variant="outline" size="lg">
              Download Business Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our Business Law Services</h2>
          <p className="text-large">Comprehensive legal support for all aspects of business operations in Dubai and the UAE</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <service.icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2>Business Law FAQ</h2>
          <p className="text-large">Common questions about business law and company formation in Dubai</p>
        </header>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <article key={index} className="service-card">
              <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <h2>Ready to Establish Your Dubai Business?</h2>
          <p className="text-large mb-8">Get expert business law guidance for your company setup and operations in Dubai.</p>
          <a href="/contact" className="hero-cta">
            Schedule Business Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default MaximaBusinessLaw;
