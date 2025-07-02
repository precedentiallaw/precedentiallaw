
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Plane, FileCheck, Users, Clock } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const ImmigrationLaw: React.FC = () => {
  const services = [
    {
      title: "UAE Visa Applications",
      description: "Complete assistance with tourist, business, and residence visa applications across all UAE emirates",
      icon: Plane
    },
    {
      title: "UAE Residency Permits",
      description: "Expert guidance for obtaining and renewing UAE residence permits for individuals and families",
      icon: FileCheck
    },
    {
      title: "Family Sponsorship in UAE",
      description: "Comprehensive support for sponsoring family members in the UAE under current immigration laws",
      icon: Users
    },
    {
      title: "Visa Status Changes",
      description: "Assistance with changing visa status and resolving immigration issues within the UAE",
      icon: Clock
    }
  ];

  const faqData = [
    {
      question: "What types of UAE visas can expatriates apply for?",
      answer: "Expatriates can apply for various UAE visas including tourist visas, business/visit visas, employment visas, investor visas, retirement visas, and the UAE Golden Visa for long-term residency. Each visa type has specific requirements and benefits."
    },
    {
      question: "How long does it take to process a UAE residence permit?",
      answer: "UAE residence permit processing typically takes 2-4 weeks once all required documents are submitted. However, processing times may vary depending on the emirate, visa type, and completeness of documentation."
    },
    {
      question: "Can I sponsor my family members for UAE residency?",
      answer: "Yes, UAE residents with sufficient income can sponsor their spouse, children, and in some cases parents for UAE residency. Minimum salary requirements and other conditions apply depending on the emirate and your visa type."
    },
    {
      question: "What is the UAE Golden Visa and who qualifies?",
      answer: "The UAE Golden Visa is a long-term residency program offering 5 or 10-year renewable visas. Eligible categories include investors, entrepreneurs, specialized talents, researchers, outstanding students, and certain professionals in healthcare and education."
    }
  ];

  return (
    <ServicePageLayout
      title="UAE Immigration Law Services | UAE Visa Lawyer | Golden Visa UAE | Precedential Law"
      description="Expert UAE immigration legal services. Visa applications, residency permits, family sponsorship, Golden Visa applications, and immigration advisory for expatriates across the UAE."
      canonical="https://precedentiallaw.com/services/immigration-law"
    >
      {/* Schema Markup */}
      <ArticleSchema
        headline="UAE Immigration Law Services for Expatriates and International Professionals"
        description="Comprehensive immigration legal services including visa applications, residency permits, and family sponsorship in the UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/immigration-law"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>UAE Immigration Law Services for Expatriates</h1>
          <p className="text-large">
            Navigate UAE immigration procedures with confidence through expert legal guidance. From visa applications to Golden Visa programs, we provide comprehensive immigration support across all UAE emirates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Get Immigration Help
            </a>
            <Button variant="outline" size="lg">
              Download UAE Visa Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Our UAE Immigration Services</h2>
          <p className="text-large">Comprehensive immigration legal support for all your UAE residency needs</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <service.icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Golden Visa Section */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-8">
            <h2>UAE Golden Visa Program</h2>
            <p className="text-large">
              The UAE Golden Visa offers long-term residency (5-10 years) for qualified individuals and their families, providing greater stability and opportunities in the UAE.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="service-card">
              <h3>Investors & Entrepreneurs</h3>
              <p>Real estate investors, business owners, and entrepreneurs meeting specific investment criteria.</p>
            </article>
            <article className="service-card">
              <h3>Specialized Professionals</h3>
              <p>Doctors, engineers, scientists, researchers, and other specialized talent categories.</p>
            </article>
            <article className="service-card">
              <h3>Outstanding Students</h3>
              <p>High-achieving students and graduates from accredited universities worldwide.</p>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>UAE Immigration FAQ</h2>
          <p className="text-large">Common questions about UAE immigration and visa processes</p>
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
          <h2>Ready to Secure Your UAE Residency?</h2>
          <p className="text-large mb-8">Get expert immigration legal support for your UAE visa and residency journey.</p>
          <a href="/contact" className="hero-cta">
            Schedule Immigration Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default ImmigrationLaw;
