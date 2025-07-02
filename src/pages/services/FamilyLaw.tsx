
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Heart, FileText, Users, Shield } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const FamilyLaw: React.FC = () => {
  const services = [
    {
      title: "UAE Divorce Proceedings",
      description: "Sensitive handling of divorce cases with focus on fair asset division and child welfare under UAE law",
      icon: Heart
    },
    {
      title: "Child Custody in UAE",
      description: "Protecting children's best interests in custody arrangements and visitation rights according to UAE family law",
      icon: Users
    },
    {
      title: "DIFC Wills & Estate Planning",
      description: "UAE-compliant wills and guardianship planning for expats and nationals, including DIFC Wills registration",
      icon: FileText
    },
    {
      title: "Family Mediation Services",
      description: "Alternative dispute resolution for family matters to avoid lengthy court proceedings in UAE family courts",
      icon: Shield
    }
  ];

  const faqData = [
    {
      question: "What is the divorce process for expatriates in the UAE?",
      answer: "Expatriates in the UAE can file for divorce under UAE law or their home country's law in certain circumstances. The process involves filing a case with the UAE family court, attending mediation sessions, and if unsuccessful, proceeding to court hearings for asset division and child custody arrangements."
    },
    {
      question: "How does child custody work in the UAE for expat families?",
      answer: "UAE family law generally grants custody of young children to the mother until a certain age, with visitation rights for the father. However, expat families may have options to apply their home country's law in certain situations. Each case is evaluated individually based on the child's best interests."
    },
    {
      question: "Do I need a DIFC Will as an expatriate in the UAE?",
      answer: "Yes, expatriates in the UAE should strongly consider having a DIFC Will or ADGM Will to ensure their assets are distributed according to their wishes rather than UAE Sharia inheritance law. This is particularly important for non-Muslim expatriates who want to maintain control over their estate planning."
    }
  ];

  return (
    <ServicePageLayout
      title="UAE Family Law Services | Expat Divorce Lawyer | Child Custody UAE | Precedential Law"
      description="Expert UAE family law services for expatriates and nationals. Specialized divorce lawyers, child custody specialists, DIFC wills, and estate planning attorneys across the UAE."
      canonical="https://precedentiallaw.com/services/family-law"
    >
      {/* Schema Markup */}
      <ArticleSchema
        headline="UAE Family Law Services for Expatriates and UAE Nationals"
        description="Comprehensive family law services including divorce, child custody, and estate planning in the UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/family-law"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>UAE Family Law Services for Expatriates</h1>
          <p className="text-large">
            Compassionate legal support for family matters across the UAE. We understand the sensitive nature of family disputes and provide caring, effective representation for expatriates and UAE nationals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Confidential Consultation
            </a>
            <Button variant="outline" size="lg">
              Download Family Law Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our UAE Family Law Services</h2>
          <p className="text-large">Comprehensive legal support for all family law matters in the UAE</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
            <h2>Specialized Support for Expat Families in the UAE</h2>
            <p className="text-large">
              Living in the UAE as an expatriate family comes with unique legal considerations. Our team understands the complexities of cross-cultural family law and provides specialized guidance for international families.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>DIFC Wills for UAE Expatriates</h3>
              <p>Ensure your assets are protected and your children's guardianship is secured under UAE law with proper estate planning.</p>
            </article>
            <article className="service-card">
              <h3>Cross-Border Custody Issues</h3>
              <p>Navigate international custody arrangements and jurisdictional challenges between the UAE and your home country.</p>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Frequently Asked Questions</h2>
          <p className="text-large">Common questions about family law in the UAE</p>
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
          <h2>Need Compassionate Legal Support in the UAE?</h2>
          <p className="text-large mb-8">Contact our UAE family law experts for sensitive, professional guidance tailored to expatriate and UAE national families.</p>
          <a href="/contact" className="hero-cta">
            Schedule Private Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default FamilyLaw;
