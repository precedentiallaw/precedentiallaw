
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Heart, Users, FileText, Shield, Scale, Home } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const DivorceLawyersDubai: React.FC = () => {
  const services = [
    {
      title: "Divorce Proceedings UAE",
      description: "Comprehensive divorce representation under UAE Personal Status Law",
      icon: Scale
    },
    {
      title: "Child Custody UAE",
      description: "Protecting children's interests in custody and visitation arrangements",
      icon: Users
    },
    {
      title: "Asset Division",
      description: "Fair distribution of marital assets and financial settlements",
      icon: Home
    },
    {
      title: "Alimony & Support",
      description: "Spousal and child support calculations and enforcement",
      icon: Shield
    },
    {
      title: "Prenuptial Agreements",
      description: "Pre-marriage contract drafting and legal protection",
      icon: FileText
    },
    {
      title: "Mediation Services",
      description: "Alternative dispute resolution for amicable family settlements",
      icon: Heart
    }
  ];

  const faqData = [
    {
      question: "What are the grounds for divorce in UAE?",
      answer: "UAE law recognizes several grounds for divorce including irreconcilable differences, abandonment, harm, imprisonment, and other specific circumstances outlined in the UAE Personal Status Law."
    },
    {
      question: "How is child custody determined in UAE divorces?",
      answer: "UAE courts prioritize the child's best interests. Generally, young children stay with the mother until a certain age, with visitation rights for the father. Each case is evaluated individually."
    },
    {
      question: "Can expatriates get divorced under their home country law?",
      answer: "In some cases, expatriates may apply their home country's law for divorce proceedings in UAE, particularly in DIFC Courts. This depends on various factors including nationality and circumstances."
    }
  ];

  return (
    <ServicePageLayout
      title="Divorce Lawyers Dubai | UAE Family Law | Expat Divorce Specialists | Precedential Law"
      description="Expert divorce lawyers in Dubai specializing in UAE family law. Compassionate legal representation for expatriate and UAE national divorce cases."
      canonical="https://precedentiallaw.com/services/divorce-lawyers-dubai"
    >
      <ArticleSchema
        headline="Expert Divorce Lawyers Dubai - UAE Family Law Specialists"
        description="Professional divorce legal services for expatriates and UAE nationals including child custody, asset division, and family mediation"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/divorce-lawyers-dubai"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Divorce Lawyers in Dubai - UAE Family Law Experts</h1>
          <p className="text-large">
            Compassionate and experienced divorce representation in Dubai. We understand the sensitive nature of family matters and provide professional legal guidance for expatriates and UAE nationals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Confidential Divorce Consultation
            </a>
            <Button variant="outline" size="lg">
              Download Divorce Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our Divorce & Family Law Services</h2>
          <p className="text-large">Comprehensive legal support for all aspects of divorce and family law in the UAE</p>
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

      {/* Expat-Specific Section */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-8">
            <h2>Divorce Services for Expatriates in Dubai</h2>
            <p className="text-large">
              Special considerations for international families going through divorce in the UAE, including cross-border custody and asset protection.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>Multi-Jurisdictional Issues</h3>
              <p>Navigate complex international divorce matters involving multiple countries, jurisdictions, and legal systems.</p>
            </article>
            <article className="service-card">
              <h3>Cross-Border Child Custody</h3>
              <p>Protect parental rights and ensure proper custody arrangements when parents reside in different countries.</p>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Divorce Law FAQ</h2>
          <p className="text-large">Common questions about divorce proceedings in the UAE</p>
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
          <h2>Need Compassionate Divorce Legal Support?</h2>
          <p className="text-large mb-8">Contact our experienced divorce lawyers for sensitive, professional guidance through this difficult time.</p>
          <a href="/contact" className="hero-cta">
            Schedule Private Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default DivorceLawyersDubai;
