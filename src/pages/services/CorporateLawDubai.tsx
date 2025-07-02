
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Scale, TrendingUp, Shield, Users, Briefcase, Calculator } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const CorporateLawDubai: React.FC = () => {
  const corporateServices = [
    {
      icon: Building2,
      title: "Company Formation & Structuring",
      description: "Expert guidance on UAE mainland companies, free zone establishments, and offshore company setup with optimal tax structures."
    },
    {
      icon: FileText,
      title: "Corporate Governance",
      description: "Board resolutions, shareholder agreements, compliance frameworks, and corporate policy development for UAE entities."
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "UAE Corporate Tax compliance, VAT registration, WPS implementation, and ongoing regulatory adherence."
    },
    {
      icon: TrendingUp,
      title: "Mergers & Acquisitions",
      description: "Due diligence, transaction structuring, and legal documentation for M&A activities in the UAE market."
    },
    {
      icon: Shield,
      title: "Corporate Restructuring",
      description: "Business reorganization, debt restructuring, and corporate recovery strategies under UAE commercial law."
    },
    {
      icon: Briefcase,
      title: "Commercial Contracts",
      description: "Drafting and reviewing distribution agreements, joint ventures, licensing agreements, and strategic partnerships."
    }
  ];

  const complianceAreas = [
    "UAE Federal Decree-Law No. 32 of 2021 (Companies Law)",
    "UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022)",
    "UAE Commercial Transactions Law",
    "Securities and Commodities Authority (SCA) Regulations",
    "Central Bank of UAE (CBUAE) Guidelines",
    "Ministry of Economy Commercial Licensing Requirements"
  ];

  return (
    <ServicePageLayout
      title="Corporate Lawyers Dubai | UAE Business Law Firm | Precedential Law"
      description="Leading corporate lawyers in Dubai providing business law services, company formation, M&A, compliance, and corporate governance. Expert UAE commercial law advice."
      canonical="https://precedentiallaw.com/services/corporate-law-dubai"
    >
      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Corporate Law Dubai</h1>
          <p className="text-large">
            Premier corporate lawyers in Dubai providing comprehensive business law services. 
            From company formation to complex M&A transactions and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Schedule Business Consultation
            </a>
            <Button variant="outline" size="lg">
              Download Corporate Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Key Metrics */}
      <ContentSection background="alternate">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gold-gradient mb-2">500+</div>
            <div className="text-secondary">Companies Formed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gold-gradient mb-2">AED 2B+</div>
            <div className="text-secondary">Transaction Value</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gold-gradient mb-2">15+</div>
            <div className="text-secondary">Years UAE Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gold-gradient mb-2">98%</div>
            <div className="text-secondary">Client Satisfaction</div>
          </div>
        </div>
      </ContentSection>

      {/* Corporate Services */}
      <ContentSection>
        <h2 className="text-center mb-12">Comprehensive Corporate Legal Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service, index) => (
            <div key={index} className="service-card">
              <service.icon className="w-12 h-12 text-gold-gradient mb-4" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* UAE Corporate Tax Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <h2 className="mb-12">UAE Corporate Tax Compliance 2024</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
                <Calculator className="w-8 h-8 text-gold-gradient" />
                Corporate Tax Overview
              </h3>
              <div className="space-y-4">
                <div className="service-card">
                  <h4 className="font-bold text-gold-gradient">Tax Rate: 9%</h4>
                  <p>On taxable income exceeding AED 375,000</p>
                </div>
                <div className="service-card">
                  <h4 className="font-bold text-green-700">Tax-Free Threshold</h4>
                  <p>First AED 375,000 of taxable income</p>
                </div>
                <div className="service-card">
                  <h4 className="font-bold text-blue-700">Effective Date</h4>
                  <p>Financial years starting 1 June 2023 onwards</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Compliance Requirements</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2"></div>
                  <span>Tax registration within specified timeframes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2"></div>
                  <span>Quarterly tax return filing obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2"></div>
                  <span>Annual tax return submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2"></div>
                  <span>Transfer pricing documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2"></div>
                  <span>Economic substance reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2"></div>
                  <span>Country-by-country reporting (for MNEs)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Regulatory Compliance */}
      <ContentSection>
        <div className="text-center">
          <h2 className="mb-12">UAE Corporate Regulatory Framework</h2>
          
          <div className="service-card">
            <h3 className="text-xl font-bold mb-6">Key Legislation & Regulations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Scale className="w-6 h-6 text-gold-gradient flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-background-dark text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Corporate Law Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
                <h4 className="font-bold mb-2">Expert Team</h4>
                <p className="text-gray-300 text-sm">Specialized corporate lawyers with deep UAE market knowledge</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
                <h4 className="font-bold mb-2">Compliance Assurance</h4>
                <p className="text-gray-300 text-sm">Full regulatory compliance and ongoing legal support</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
                <h4 className="font-bold mb-2">Business Growth</h4>
                <p className="text-gray-300 text-sm">Strategic legal advice to drive business success</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <h2>Ready to Elevate Your Business?</h2>
          <p className="text-large mb-8">Get expert corporate legal support for your UAE business ventures.</p>
          <a href="/contact" className="hero-cta">
            Schedule Corporate Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default CorporateLawDubai;
