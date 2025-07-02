
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';

const MaximaBusinessLaw: React.FC = () => {
  return (
    <ServicePageLayout
      title="Business Law Services Dubai | UAE Commercial Legal Experts | Precedential Law"
      description="Expert business law services in Dubai. Our UAE commercial lawyers provide comprehensive legal support for company formation, contracts, compliance, and business disputes."
      canonical="https://precedentiallaw.com/services/business-law"
    >
      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Business Law Services in Dubai</h1>
          <p className="text-large">
            Comprehensive legal support for businesses operating in the UAE. From company formation 
            to complex commercial disputes, our experienced business lawyers provide strategic 
            guidance tailored to Dubai's dynamic business environment.
          </p>
        </div>
      </ContentSection>

      {/* Service Details */}
      <ContentSection background="alternate">
        <div className="content-grid">
          <div className="content-text">
            <h2>Comprehensive Business Legal Services</h2>
            <p>
              Our business law practice encompasses all aspects of commercial operations in the UAE, 
              providing clients with strategic legal guidance that protects their interests and 
              supports their growth objectives.
            </p>
            
            <h3>Our Business Law Services Include:</h3>
            <ul>
              <li>Company formation and business setup</li>
              <li>Commercial contract drafting and review</li>
              <li>Regulatory compliance and licensing</li>
              <li>Mergers and acquisitions</li>
              <li>Joint ventures and partnerships</li>
              <li>Employment law and HR compliance</li>
              <li>Intellectual property protection</li>
              <li>Commercial dispute resolution</li>
            </ul>
          </div>
          
          <div className="content-image">
            <img 
              src="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png"
              alt="Business Law Services Dubai"
              width={600}
              height={400}
            />
          </div>
        </div>
      </ContentSection>

      {/* Contact CTA */}
      <ContentSection>
        <div className="text-center">
          <h2>Need Business Legal Support?</h2>
          <p className="text-large mb-large">
            Contact our experienced business lawyers today for a confidential consultation 
            about your commercial legal needs in the UAE.
          </p>
          <a href="/contact" className="hero-cta">
            Schedule Consultation
          </a>
        </div>
      </ContentSection>
    </ServicePageLayout>
  );
};

export default MaximaBusinessLaw;
