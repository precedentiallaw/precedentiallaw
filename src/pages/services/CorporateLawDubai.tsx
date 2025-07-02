
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Scale, Users, Briefcase, Shield } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const CorporateLawDubai: React.FC = () => {
  const services = [
    {
      title: "Company Formation Dubai",
      description: "Complete UAE company setup including LLC, FZE, and branch office establishment",
      icon: Building2
    },
    {
      title: "Corporate Governance",
      description: "Board advisory, compliance frameworks, and corporate restructuring services",
      icon: Scale
    },
    {
      title: "M&A Transactions",
      description: "Mergers, acquisitions, joint ventures, and strategic partnerships",
      icon: Briefcase
    },
    {
      title: "Commercial Contracts",
      description: "Comprehensive contract drafting, review, and negotiation services",
      icon: FileText
    },
    {
      title: "Regulatory Compliance", 
      description: "UAE commercial law compliance, licensing, and regulatory advisory",
      icon: Shield
    },
    {
      title: "Shareholder Disputes",
      description: "Corporate dispute resolution and shareholder rights protection",
      icon: Users
    }
  ];

  const faqData = [
    {
      question: "What types of companies can I establish in Dubai?",
      answer: "Dubai offers various business structures including Limited Liability Company (LLC), Free Zone Establishment (FZE), Free Zone Company (FZC), Public Joint Stock Company (PJSC), and branch offices of foreign companies."
    },
    {
      question: "What are the minimum capital requirements for Dubai companies?",
      answer: "Minimum capital varies by business type: LLC companies typically require AED 300,000, while free zone companies may have lower requirements starting from AED 50,000 depending on the specific free zone."
    },
    {
      question: "Can foreign investors own 100% of a Dubai company?",
      answer: "Yes, foreign investors can own 100% of companies in Dubai free zones and many mainland business activities under the new UAE Commercial Companies Law amendments."
    }
  ];

  return (
    <ServicePageLayout
      title="Corporate Law Dubai | UAE Company Formation | Business Setup Lawyers | Precedential Law"
      description="Expert corporate law services in Dubai. Company formation, M&A transactions, corporate governance, and UAE business legal advisory. Professional corporate lawyers."
      canonical="https://precedentiallaw.com/services/corporate-law-dubai"
    >
      <ArticleSchema
        headline="Corporate Law Services Dubai - UAE Company Formation & Business Legal Advisory"
        description="Comprehensive corporate law services including company formation, M&A, and corporate governance in Dubai and UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/corporate-law-dubai"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Corporate Law Services in Dubai</h1>
          <p className="text-large">
            Comprehensive corporate legal support for businesses in Dubai and the UAE. From company formation to complex M&A transactions, we provide strategic legal guidance for corporate success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Corporate Legal Consultation
            </a>
            <Button variant="outline" size="lg">
              Download Company Formation Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our Corporate Law Services</h2>
          <p className="text-large">Comprehensive legal support for all aspects of corporate operations in Dubai and the UAE</p>
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

      {/* Company Formation Section */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-8">
            <h2>Dubai Company Formation Options</h2>
            <p className="text-large">
              Choose the right business structure for your operations in Dubai with expert legal guidance.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>Mainland Companies</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Limited Liability Company (LLC)</li>
                <li>Public Joint Stock Company (PJSC)</li>
                <li>Partnership Companies</li>
                <li>Sole Proprietorship</li>
              </ul>
            </article>
            <article className="service-card">
              <h3>Free Zone Companies</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Free Zone Establishment (FZE)</li>
                <li>Free Zone Company (FZC)</li>
                <li>Branch Office</li>
                <li>Representative Office</li>
              </ul>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Corporate Law FAQ</h2>
          <p className="text-large">Common questions about corporate law and company formation in Dubai</p>
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
      <ContentSection>
        <div className="text-center">
          <h2>Ready to Establish Your Dubai Business?</h2>
          <p className="text-large mb-8">Get expert corporate law guidance for your business setup and operations in Dubai.</p>
          <a href="/contact" className="hero-cta">
            Schedule Corporate Law Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default CorporateLawDubai;
