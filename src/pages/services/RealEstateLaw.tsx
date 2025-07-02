
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Home, FileText, Gavel, Shield } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const RealEstateLaw: React.FC = () => {
  const services = [
    {
      title: "Property Transactions",
      description: "Complete legal support for buying, selling, and transferring property in Dubai",
      icon: Home
    },
    {
      title: "Lease Agreements",
      description: "Comprehensive lease drafting, review, and Ejari registration services",
      icon: FileText
    },
    {
      title: "Rental Disputes",
      description: "Expert representation at Dubai Rental Dispute Centre (RDC)",
      icon: Gavel
    },
    {
      title: "Property Investment",
      description: "Legal guidance for real estate investment and development projects",
      icon: Shield
    }
  ];

  return (
    <ServicePageLayout
      title="Real Estate Law Dubai | Property Lawyer UAE | Rental Disputes | Precedential Law"
      description="Expert real estate legal services in Dubai. Property transactions, lease agreements, rental disputes, and investment advice. Contact our property lawyers today."
      canonical="https://precedentiallaw.com/services/real-estate-law"
    >
      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Real Estate Law Services in Dubai</h1>
          <p className="text-large">
            Navigate Dubai's dynamic property market with expert legal guidance for all your real estate needs.
          </p>
          <div className="mt-8">
            <a href="/contact" className="hero-cta">
              Get Property Legal Advice
            </a>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <h2 className="text-center mb-12">Our Real Estate Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <service.icon className="w-12 h-12 text-gold-gradient mb-4" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection>
        <div className="text-center">
          <h2>Need Real Estate Legal Support?</h2>
          <p className="text-large mb-8">Protect your property investments with expert legal advice.</p>
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
