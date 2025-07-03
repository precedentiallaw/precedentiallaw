
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Home, FileText, Gavel, Shield, MapPin, Scale } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const RealEstateLaw: React.FC = () => {
  const services = [
    {
      title: "Property Transactions Dubai",
      description: "Complete legal support for buying, selling, and transferring property in Dubai and UAE",
      icon: Home
    },
    {
      title: "Lease Agreements & Ejari",
      description: "Comprehensive lease drafting, review, and Ejari registration services",
      icon: FileText
    },
    {
      title: "Rental Dispute Centre (RDC)",
      description: "Expert representation at Dubai Rental Dispute Centre for landlord-tenant disputes",
      icon: Gavel
    },
    {
      title: "Property Investment Advisory",
      description: "Legal guidance for real estate investment and development projects in UAE",
      icon: Shield
    },
    {
      title: "Off-Plan Property Law",
      description: "Protection for off-plan property purchases and developer disputes",
      icon: MapPin
    },
    {
      title: "Property Litigation",
      description: "Court representation for complex real estate disputes and conflicts",
      icon: Scale
    }
  ];

  const faqData = [
    {
      question: "What is Ejari registration and why is it important?",
      answer: "Ejari is mandatory registration of tenancy contracts with Dubai Land Department. It's required for utility connections, visa applications, and legal protection for both landlords and tenants in Dubai."
    },
    {
      question: "How does the Dubai Rental Dispute Centre (RDC) work?",
      answer: "The RDC is a specialized court for rental disputes in Dubai. Cases are typically resolved within 1-2 months through mediation or adjudication, providing faster resolution than traditional courts."
    },
    {
      question: "Can foreigners buy property in Dubai?",
      answer: "Yes, foreigners can buy property in designated freehold areas in Dubai. This includes areas like Dubai Marina, Downtown Dubai, and Jumeirah Beach Residence, with full ownership rights."
    }
  ];

  return (
    <ServicePageLayout
      title="Real Estate Law Dubai | Property Lawyer UAE | Rental Disputes RDC | Precedential Law"
      description="Expert real estate legal services in Dubai. Property transactions, lease agreements, rental disputes at RDC, and property investment advice. Contact our property lawyers today."
      canonical="https://precedentiallaw.com/services/real-estate-law"
    >
      <ArticleSchema
        headline="Real Estate Law Services Dubai - UAE Property Legal Experts"
        description="Comprehensive real estate legal services including property transactions, rental disputes, and property investment advice in Dubai and UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/real-estate-law"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Real Estate Law Services in Dubai</h1>
          <p className="text-large">
            Navigate Dubai's dynamic property market with expert legal guidance. From property transactions to rental disputes at the RDC, we provide comprehensive real estate legal support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Get Property Legal Advice
            </a>
            <Button variant="outline" size="lg">
              Download Property Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our Real Estate Legal Services</h2>
          <p className="text-large">Comprehensive property law support for all your real estate needs in Dubai and the UAE</p>
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

      {/* Dubai Property Market Section */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-8">
            <h2>Dubai Property Market Legal Guidance</h2>
            <p className="text-large">
              Understanding Dubai's unique property laws and regulations for successful real estate transactions.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>Freehold vs Leasehold</h3>
              <p>Navigate the differences between freehold and leasehold properties in Dubai, understanding your ownership rights and obligations.</p>
            </article>
            <article className="service-card">
              <h3>RERA Compliance</h3>
              <p>Ensure full compliance with Real Estate Regulatory Agency (RERA) requirements for property transactions and management.</p>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Real Estate Law FAQ</h2>
          <p className="text-large">Common questions about property law and real estate transactions in Dubai</p>
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
          <h2>Need Real Estate Legal Support?</h2>
          <p className="text-large mb-8">Protect your property investments with expert legal advice tailored to Dubai's market.</p>
          <a href="/contact" className="hero-cta">
            Schedule Property Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default RealEstateLaw;
