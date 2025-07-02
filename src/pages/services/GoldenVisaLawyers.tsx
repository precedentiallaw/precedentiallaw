
import React from 'react';
import ServicePageLayout from '@/components/maxima/ServicePageLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Button } from '@/components/ui/button';
import { Award, Users, Briefcase, GraduationCap, Building, Star } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';
import WhatsAppButton from '@/components/WhatsAppButton';

const GoldenVisaLawyers: React.FC = () => {
  const categories = [
    {
      title: "Investors & Real Estate",
      description: "Property investment and business investment pathways to UAE Golden Visa",
      icon: Building
    },
    {
      title: "Entrepreneurs & Business Owners",
      description: "Startup founders and established business owners seeking long-term residency",
      icon: Briefcase
    },
    {
      title: "Specialized Professionals",
      description: "Doctors, engineers, scientists, and other specialized talent categories",
      icon: Award
    },
    {
      title: "Outstanding Students",
      description: "High-achieving students and graduates from top universities worldwide",
      icon: GraduationCap
    },
    {
      title: "Artists & Creatives",
      description: "Talented individuals in arts, culture, and creative industries",
      icon: Star
    },
    {
      title: "Family Sponsorship",
      description: "Sponsor family members including spouse, children, and parents",
      icon: Users
    }
  ];

  const faqData = [
    {
      question: "What is the UAE Golden Visa program?",
      answer: "The UAE Golden Visa is a long-term residency program offering 5 or 10-year renewable visas to qualified individuals and their families, providing greater stability and opportunities in the UAE."
    },
    {
      question: "What are the minimum investment requirements for Golden Visa?",
      answer: "Investment requirements vary by category: Real estate investors need minimum AED 2 million, while business investors may need AED 10 million. Requirements can change based on current regulations."
    },
    {
      question: "Can I include my family members in my Golden Visa application?",
      answer: "Yes, Golden Visa holders can sponsor their spouse, children of any age, and in some cases parents, providing long-term security for the entire family."
    },
    {
      question: "How long does the Golden Visa application process take?",
      answer: "Processing time typically ranges from 2-6 months depending on the category and completeness of documentation. We help expedite the process through proper preparation."
    }
  ];

  return (
    <ServicePageLayout
      title="Golden Visa Lawyers UAE | Dubai Golden Visa Application | Long-term Residency | Precedential Law"
      description="Expert UAE Golden Visa lawyers. Specialized assistance for Golden Visa applications, investor visas, and long-term residency permits in Dubai and UAE."
      canonical="https://precedentiallaw.com/services/golden-visa-lawyers"
    >
      <ArticleSchema
        headline="UAE Golden Visa Lawyers - Expert Long-term Residency Services"
        description="Professional legal assistance for UAE Golden Visa applications including investor visas, entrepreneur visas, and family sponsorship"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/golden-visa-lawyers"
      />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>UAE Golden Visa Lawyers - Long-term Residency Experts</h1>
          <p className="text-large">
            Secure your UAE Golden Visa with expert legal guidance. We specialize in long-term residency applications for investors, entrepreneurs, professionals, and their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="hero-cta">
              Golden Visa Assessment
            </a>
            <Button variant="outline" size="lg">
              Download Golden Visa Guide
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Categories Grid */}
      <ContentSection background="alternate">
        <header className="text-center mb-12">
          <h2>Golden Visa Categories We Serve</h2>
          <p className="text-large">Comprehensive support for all UAE Golden Visa pathways and eligibility categories</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <article key={category.title} className="service-card">
              <category.icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Investment Requirements */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-8">
            <h2>Golden Visa Investment Requirements</h2>
            <p className="text-large">
              Understanding the financial commitments and investment thresholds for UAE Golden Visa eligibility.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="service-card">
              <h3>Real Estate Investment</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Minimum AED 2 million property investment</li>
                <li>Property must be completed or off-plan</li>
                <li>Can include residential or commercial properties</li>
                <li>Joint ownership arrangements possible</li>
              </ul>
            </article>
            <article className="service-card">
              <h3>Business Investment</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Minimum AED 10 million business investment</li>
                <li>Established or new business ventures</li>
                <li>Partnership with UAE nationals may be required</li>
                <li>Job creation and economic contribution factors</li>
              </ul>
            </article>
          </div>
        </div>
      </ContentSection>

      {/* Process Timeline */}
      <ContentSection background="alternate">
        <div className="text-center">
          <header className="mb-8">
            <h2>Golden Visa Application Process</h2>
            <p className="text-large">Step-by-step guidance through the UAE Golden Visa application journey</p>
          </header>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-gradient text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Eligibility Assessment</h3>
                <p className="text-gray-600">Comprehensive review of your qualifications and documentation requirements</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-gradient text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Document Preparation</h3>
                <p className="text-gray-600">Professional assistance with all required documentation and attestations</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-gradient text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Application Submission</h3>
                <p className="text-gray-600">Strategic submission and follow-up with relevant UAE authorities</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-gradient text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Visa Issuance</h3>
                <p className="text-gray-600">Final processing and issuance of your UAE Golden Visa</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2>Golden Visa FAQ</h2>
          <p className="text-large">Common questions about UAE Golden Visa applications and requirements</p>
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
          <h2>Ready to Secure Your UAE Golden Visa?</h2>
          <p className="text-large mb-8">Get expert legal assistance for your UAE Golden Visa application and long-term residency planning.</p>
          <a href="/contact" className="hero-cta">
            Start Golden Visa Application
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </ServicePageLayout>
  );
};

export default GoldenVisaLawyers;
