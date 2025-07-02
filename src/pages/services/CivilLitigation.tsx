
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Scale, FileText, Users, Shield, Clock, Gavel } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const CivilLitigation: React.FC = () => {
  const services = [
    {
      title: "Contract Disputes",
      description: "Resolution of commercial and personal contract breaches and enforcement actions",
      icon: FileText
    },
    {
      title: "Tort Claims",
      description: "Personal injury, property damage, and civil wrong compensation claims",
      icon: Shield
    },
    {
      title: "Property Disputes",
      description: "Real estate conflicts, boundary disputes, and ownership challenges",
      icon: Users
    },
    {
      title: "Employment Disputes",
      description: "Workplace conflicts, wrongful termination, and labor law violations",
      icon: Scale
    },
    {
      title: "Debt Recovery",
      description: "Collection proceedings and enforcement of judgments",
      icon: Clock
    },
    {
      title: "Civil Appeals",
      description: "Appellate court representation and judicial review proceedings",
      icon: Gavel
    }
  ];

  return (
    <ServicePageLayout
      title="Civil Litigation Lawyers Dubai | UAE Court Representation | Legal Disputes | Precedential Law"
      description="Expert civil litigation lawyers in Dubai. Professional court representation for contract disputes, tort claims, property disputes, and debt recovery in UAE courts."
      canonical="https://precedentiallaw.com/services/civil-litigation"
    >
      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Civil Litigation Lawyers in Dubai</h1>
          <p className="text-large">
            Expert court representation for civil disputes. Protecting your rights through strategic litigation and skilled advocacy in UAE courts.
          </p>
          <div className="mt-8">
            <a href="/contact" className="hero-cta">
              Case Evaluation
            </a>
          </div>
        </div>
      </ContentSection>

      {/* Services Grid */}
      <ContentSection background="alternate">
        <h2 className="text-center mb-12">Civil Litigation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="service-card">
              <service.icon className="w-12 h-12 text-gold-gradient mb-4" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Court System Section */}
      <ContentSection>
        <div className="text-center">
          <h2 className="mb-12">UAE Civil Court System</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="service-card">
              <h3>Federal Courts</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Court of First Instance</li>
                <li>Court of Appeal</li>
                <li>Federal Supreme Court</li>
                <li>Specialized divisions</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Local Courts</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Dubai Courts</li>
                <li>Abu Dhabi Courts</li>
                <li>DIFC Courts</li>
                <li>ADGM Courts</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <h2>Need Civil Litigation Support?</h2>
          <p className="text-large mb-8">Get expert legal representation for your civil dispute.</p>
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
