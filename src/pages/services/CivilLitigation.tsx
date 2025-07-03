
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Scale, FileText, Users, Shield, Clock, Gavel, Building } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const CivilLitigation: React.FC = () => {
  const services = [
    {
      title: "Contract Disputes UAE",
      description: "Resolution of commercial and personal contract breaches and enforcement actions",
      icon: FileText
    },
    {
      title: "Tort Claims & Personal Injury",
      description: "Personal injury, property damage, and civil wrong compensation claims",
      icon: Shield
    },
    {
      title: "Property Disputes Dubai",
      description: "Real estate conflicts, boundary disputes, and ownership challenges",
      icon: Building
    },
    {
      title: "Employment Disputes UAE",
      description: "Workplace conflicts, wrongful termination, and labor law violations",
      icon: Users
    },
    {
      title: "Debt Recovery UAE",
      description: "Collection proceedings and enforcement of judgments in UAE courts",
      icon: Clock
    },
    {
      title: "Civil Appeals",
      description: "Appellate court representation and judicial review proceedings",
      icon: Gavel
    }
  ];

  const faqData = [
    {
      question: "What types of cases does civil litigation cover in the UAE?",
      answer: "Civil litigation in the UAE covers contract disputes, tort claims, property disputes, employment matters, debt recovery, family law issues, and commercial conflicts. We handle both federal and local court proceedings."
    },
    {
      question: "How long do civil cases take in UAE courts?",
      answer: "Civil cases in UAE courts typically take 6-18 months depending on complexity. Commercial courts and specialized divisions like DIFC Courts may resolve cases faster, often within 3-6 months."
    },
    {
      question: "Can I enforce a foreign judgment in the UAE?",
      answer: "Yes, foreign judgments can be enforced in the UAE through specific legal procedures. This requires meeting certain conditions and following UAE enforcement laws, which our litigation team can navigate for you."
    }
  ];

  return (
    <ServicePageLayout
      title="Civil Litigation Lawyers Dubai | UAE Court Representation | Legal Disputes | Precedential Law"
      description="Expert civil litigation lawyers in Dubai. Professional court representation for contract disputes, tort claims, property disputes, and debt recovery in UAE courts."
      canonical="https://precedentiallaw.com/services/civil-litigation"
    >
      <ArticleSchema
        headline="Civil Litigation Lawyers Dubai - UAE Court Representation Experts"
        description="Professional civil litigation services including contract disputes, tort claims, and court representation in Dubai and UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/civil-litigation"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Civil Litigation Lawyers in Dubai</h1>
          <p className="text-large">
            Expert court representation for civil disputes. Protecting your rights through strategic litigation and skilled advocacy in UAE courts with proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Case Evaluation
            </a>
            <Button variant="outline" size="lg">
              Download Litigation Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Civil Litigation Services</h2>
          <p className="text-large">Comprehensive legal representation for all types of civil disputes in UAE courts</p>
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

      {/* Court System Section */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-12">
            <h2>UAE Civil Court System</h2>
            <p className="text-large">Understanding the UAE court structure for effective legal representation</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>Federal Courts</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Court of First Instance</li>
                <li>Court of Appeal</li>
                <li>Federal Supreme Court</li>
                <li>Commercial divisions</li>
                <li>Labor courts</li>
              </ul>
            </article>
            <article className="service-card">
              <h3>Local & Specialized Courts</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Dubai Courts</li>
                <li>Abu Dhabi Courts</li>
                <li>DIFC Courts (Common Law)</li>
                <li>ADGM Courts</li>
                <li>Rental Dispute Centre</li>
              </ul>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Civil Litigation FAQ</h2>
          <p className="text-large">Common questions about civil litigation and court proceedings in the UAE</p>
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
          <h2>Need Civil Litigation Support?</h2>
          <p className="text-large mb-8">Get expert legal representation for your civil dispute with our experienced litigation team.</p>
          <a href="/contact" className="hero-cta">
            Schedule Litigation Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default CivilLitigation;
