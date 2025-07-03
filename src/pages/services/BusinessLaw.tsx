
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Scale, Shield } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const BusinessLaw: React.FC = () => {
  const services = [
    {
      title: "Company Formation",
      description: "Complete setup of LLC, FZE, and other business entities in Dubai with full compliance",
      icon: Building2
    },
    {
      title: "Contract Drafting & Review",
      description: "Comprehensive commercial agreements, employment contracts, and vendor agreements",
      icon: FileText
    },
    {
      title: "Regulatory Compliance",
      description: "Ongoing compliance with UAE commercial laws, licensing, and corporate governance",
      icon: Scale
    },
    {
      title: "Business Dispute Resolution",
      description: "Expert representation in commercial litigation and alternative dispute resolution",
      icon: Shield
    }
  ];

  return (
    <ServicePageLayout
      title="Business Law Services Dubai | Commercial Legal Advice UAE | Precedential Law"
      description="Expert business law services in Dubai. Company formation, contract drafting, regulatory compliance, and commercial dispute resolution. Contact our experienced business lawyers today."
      canonical="https://precedentiallaw.com/services/business-law"
    >
      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Business Law Services in Dubai</h1>
          <p className="text-large">
            Comprehensive commercial legal support for businesses operating in the UAE. From formation to expansion, we protect your business interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Schedule Consultation
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
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <service.icon className="w-12 h-12 text-gold-gradient mb-4" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Why Choose Us */}
      <ContentSection>
        <div className="text-center">
          <h2 className="mb-12">Why Choose Our Business Law Team?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="service-card">
              <h3>🏆 UAE Expertise</h3>
              <p>Deep knowledge of UAE commercial laws and regulations</p>
            </article>
            <article className="service-card">
              <h3>⚡ Fast Response</h3>
              <p>Quick turnaround on urgent business matters</p>
            </article>
            <article className="service-card">
              <h3>💼 Business Focus</h3>
              <p>Dedicated commercial law practice with proven results</p>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <h2>Ready to Protect Your Business?</h2>
          <p className="text-large mb-8">Get expert legal advice tailored to your business needs in Dubai.</p>
          <a href="/contact" className="hero-cta">
            Contact Our Business Law Team
          </a>
        </div>
      </ContentSection>
      
      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default BusinessLaw;
