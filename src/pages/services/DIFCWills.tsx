
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Users, Home, Heart, CheckCircle } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const DIFCWills: React.FC = () => {
  const services = [
    {
      title: "DIFC Will Drafting",
      description: "Professional DIFC Will preparation for expatriate estate planning in UAE",
      icon: FileText
    },
    {
      title: "Asset Protection",
      description: "Comprehensive asset protection strategies for UAE-based expatriates",
      icon: Shield
    },
    {
      title: "Guardianship Planning",
      description: "Child guardianship arrangements and minor protection provisions",
      icon: Users
    },
    {
      title: "Property Succession",
      description: "UAE real estate succession planning and property transfer arrangements",
      icon: Home
    },
    {
      title: "Family Trust Services",
      description: "Trust establishment and management for complex family structures",
      icon: Heart
    },
    {
      title: "Will Registration",
      description: "Official DIFC Will registration and notarization services",
      icon: CheckCircle
    }
  ];

  const faqData = [
    {
      question: "What is a DIFC Will and why do I need one as an expatriate?",
      answer: "A DIFC Will is a legal document registered with DIFC Courts that allows non-Muslim expatriates to distribute their UAE assets according to their wishes, rather than UAE Sharia inheritance law. It's essential for expatriates who want control over their estate distribution."
    },
    {
      question: "What assets can be covered by a DIFC Will?",
      answer: "DIFC Wills can cover UAE-based assets including real estate, bank accounts, investments, business interests, and personal property. It provides comprehensive coverage for expatriate assets within the UAE."
    },
    {
      question: "How does a DIFC Will differ from my home country will?",
      answer: "A DIFC Will specifically covers UAE assets and is recognized by UAE courts, while your home country will covers assets in that jurisdiction. You may need both to ensure comprehensive estate planning coverage."
    },
    {
      question: "Can I appoint guardians for my children in a DIFC Will?",
      answer: "Yes, DIFC Wills allow you to appoint guardians for minor children, ensuring their care and protection according to your wishes if both parents are unable to care for them."
    }
  ];

  return (
    <ServicePageLayout
      title="DIFC Wills Dubai | UAE Estate Planning | Expat Will Services | Precedential Law"
      description="Expert DIFC Will services in Dubai. Professional estate planning for UAE expatriates including will drafting, asset protection, and guardianship arrangements."
      canonical="https://precedentiallaw.com/services/difc-wills"
    >
      <ArticleSchema
        headline="DIFC Wills Dubai - Expert Estate Planning for UAE Expatriates"
        description="Professional DIFC Will services including estate planning, asset protection, and guardianship arrangements for expatriates in UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/difc-wills"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>DIFC Wills Dubai - Estate Planning for UAE Expatriates</h1>
          <p className="text-large">
            Secure your family's future with expert DIFC Will services. Professional estate planning ensuring your UAE assets are distributed according to your wishes, not UAE inheritance law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Estate Planning Consultation
            </a>
            <Button variant="outline" size="lg">
              Download DIFC Will Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our DIFC Will & Estate Planning Services</h2>
          <p className="text-large">Comprehensive estate planning solutions for expatriate families in the UAE</p>
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

      {/* Why DIFC Wills */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-8">
            <h2>Why Choose DIFC Wills for UAE Estate Planning?</h2>
            <p className="text-large">
              DIFC Wills provide expatriates with the security and control they need for effective estate planning in the UAE.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>Sharia Law Alternative</h3>
              <p>Non-Muslim expatriates can distribute assets according to their wishes rather than UAE Sharia inheritance law, providing family security and peace of mind.</p>
            </article>
            <article className="service-card">
              <h3>DIFC Court Recognition</h3>
              <p>DIFC Wills are recognized and enforced by DIFC Courts, providing legal certainty and streamlined probate processes for expatriate estates.</p>
            </article>
            <article className="service-card">
              <h3>Comprehensive Asset Coverage</h3>
              <p>Cover all UAE-based assets including real estate, bank accounts, investments, and business interests under one comprehensive will document.</p>
            </article>
            <article className="service-card">
              <h3>Guardianship Provisions</h3>
              <p>Appoint guardians for minor children and establish care arrangements, ensuring your children's welfare according to your specific wishes and values.</p>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* DIFC vs ADGM */}
      <ContentSection background="alternate">
        <div className="text-center">
          <header className="mb-8">
            <h2>DIFC Wills vs ADGM Wills</h2>
            <p className="text-large">Understanding your options for expatriate estate planning in the UAE</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>DIFC Wills</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Established longer with proven track record</li>
                <li>Covers UAE assets outside DIFC jurisdiction</li>
                <li>Recognized by Dubai Courts and other UAE courts</li>
                <li>Comprehensive probate process</li>
                <li>Suitable for most expatriate situations</li>
              </ul>
            </article>
            <article className="service-card">
              <h3>ADGM Wills</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Abu Dhabi-based alternative option</li>
                <li>Similar asset coverage capabilities</li>
                <li>ADGM Court jurisdiction and recognition</li>
                <li>May be preferred for Abu Dhabi residents</li>
                <li>Newer but growing acceptance</li>
              </ul>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2>DIFC Wills FAQ</h2>
          <p className="text-large">Common questions about DIFC Wills and expatriate estate planning in the UAE</p>
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
          <h2>Protect Your Family's Future with DIFC Wills</h2>
          <p className="text-large mb-8">Get expert estate planning assistance and secure your UAE assets with a professionally drafted DIFC Will.</p>
          <a href="/contact" className="hero-cta">
            Schedule Will Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default DIFCWills;
