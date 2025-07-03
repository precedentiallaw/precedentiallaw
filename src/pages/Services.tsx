
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Building2, FileText, Scale, Shield, Heart, Plane, Users, Briefcase, Home, Gavel, Calculator, UserCheck, Eye } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Services: React.FC = () => {
  const services = [
    {
      title: "Legal Consulting",
      description: "Strategic legal advice and tailored guidance for your specific situation in Dubai. We help you understand your legal standing, evaluate potential risks, and make well-informed decisions.",
      icon: Briefcase,
      link: "/services/legal-consulting"
    },
    {
      title: "Debt Settlement",
      description: "Assistance with debt recovery, negotiating settlements, and navigating the legal recovery process under current UAE laws, including changes regarding bounced cheques.",
      icon: Calculator,
      link: "/services/debt-settlement"
    },
    {
      title: "Power of Attorney (POA)",
      description: "Creation, drafting, and registration of legally sound Powers of Attorney in the UAE for managing property, business transactions, or personal affairs.",
      icon: FileText,
      link: "/services/power-of-attorney"
    },
    {
      title: "Will Writing",
      description: "Expert guidance for expats and UAE nationals in drafting and registering legally valid Wills, ensuring your assets are protected and distributed according to your wishes.",
      icon: Shield,
      link: "/services/difc-wills"
    },
    {
      title: "Civil Rights Litigation",
      description: "Representation for clients involved in civil rights matters within the UAE legal framework, protecting your fundamental rights through strategic litigation.",
      icon: Scale,
      link: "/services/civil-litigation"
    },
    {
      title: "Criminal Defense",
      description: "Expert advisory support for potential criminal investigations or charges in the UAE, providing confidential consultations and guidance on your rights.",
      icon: Gavel,
      link: "/services/criminal-defense"
    },
    {
      title: "Civil Cases",
      description: "Comprehensive representation for diverse civil disputes before UAE courts, from breach of contract claims to property disputes and other civil matters.",
      icon: Building2,
      link: "/services/civil-litigation"
    },
    {
      title: "Commercial Law",
      description: "Comprehensive legal support for businesses operating in Dubai and the UAE, including company formation, regulatory compliance, and business dispute resolution.",
      icon: Briefcase,
      link: "/services/business-law"
    },
    {
      title: "Contract Disputes",
      description: "Resolution of contractual disagreements through analysis, negotiation, mediation, arbitration, or court litigation to enforce your contractual rights.",
      icon: FileText,
      link: "/services/contract-disputes"
    },
    {
      title: "Divorce Law",
      description: "Compassionate legal guidance for divorce proceedings in the UAE, covering asset division, spousal maintenance, and child custody arrangements.",
      icon: Heart,
      link: "/services/divorce-lawyers-dubai"
    },
    {
      title: "Immigration Law",
      description: "Assistance with UAE immigration processes, visa applications, residency permits, and compliance with evolving immigration regulations.",
      icon: Plane,
      link: "/services/immigration-law"
    },
    {
      title: "Personal Injury",
      description: "Representation for individuals who have suffered injuries due to accidents or negligence in the UAE, seeking fair compensation for damages.",
      icon: UserCheck,
      link: "/services/personal-injury"
    },
    {
      title: "Real Estate Legal Services",
      description: "Expert legal advice on all aspects of Dubai real estate, including property transactions, leasing matters, and rental dispute resolution.",
      icon: Home,
      link: "/services/real-estate-law"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Services Dubai | Comprehensive UAE Law Firm | Precedential Law</title>
        <meta name="description" content="Comprehensive legal services in Dubai & UAE. Expert lawyers for business law, family law, immigration, real estate, and more. Professional legal consultation." />
        <meta name="keywords" content="legal services Dubai, UAE lawyers, business law, family law, immigration lawyers, Dubai legal consultancy" />
        <link rel="canonical" href="https://precedentiallaw.com/services" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legal Services Dubai | Comprehensive UAE Law Firm" />
        <meta property="og:description" content="Comprehensive legal services in Dubai & UAE. Expert lawyers for business law, family law, immigration, real estate, and more." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:url" content="https://precedentiallaw.com/services" />
        <meta property="og:site_name" content="Precedential Law" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Legal Services Dubai | Comprehensive UAE Law Firm" />
        <meta property="twitter:description" content="Comprehensive legal services in Dubai & UAE. Expert lawyers for all your legal needs." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>
      
      <MaximaLayout>
        <div data-scroll-section>
          {/* Hero Section */}
          <ContentSection>
            <div className="service-hero">
              <h1>Comprehensive Legal Services Tailored for Dubai</h1>
              <p className="text-large">
                Precedential Law offers a comprehensive suite of legal consulting services tailored to the specific needs of individuals and businesses operating within Dubai and the broader UAE. Our expert team possesses in-depth knowledge across various legal domains, ensuring you receive targeted and effective advice.
              </p>
              <p className="text-large mt-4">
                We are committed to providing clarity and strategic guidance, whether you are navigating complex commercial transactions, addressing personal legal matters, or seeking resolution for disputes. Our goal is to simplify complexity and deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/contact" className="hero-cta">
                  Request Legal Consultation
                </a>
              </div>
            </div>
          </ContentSection>

          {/* Services Overview Table */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Quick Service Navigation</h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {services.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <a href={service.link} className="text-gold-600 hover:text-gold-700 font-medium">
                            {service.title}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-gray-600 text-sm">
                          {service.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ContentSection>

          {/* Detailed Services Grid */}
          <ContentSection>
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">Our Legal Expertise</h2>
              <p className="text-large mb-12">
                From business formation to family matters, from immigration to real estate - we provide expert legal counsel across all areas critical to your success in the UAE.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <article key={service.title} className="service-card">
                    <service.icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
                    <h3>
                      <a href={service.link} className="hover:text-gold-gradient transition-colors">
                        {service.title}
                      </a>
                    </h3>
                    <p>{service.description}</p>
                    <div className="mt-4">
                      <a href={service.link} className="text-gold-600 hover:text-gold-700 font-medium text-sm">
                        Learn More →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ContentSection>

          {/* Featured Services */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Featured Legal Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <article className="service-card">
                  <Building2 className="w-16 h-16 text-gold-gradient mb-6 mx-auto" />
                  <h3 className="text-xl font-bold mb-4">Business & Commercial Law</h3>
                  <p className="mb-4">
                    Comprehensive business legal support including company formation, contracts, regulatory compliance, and dispute resolution for Dubai businesses.
                  </p>
                  <a href="/services/business-law" className="hero-cta inline-block">
                    Explore Business Law
                  </a>
                </article>
                <article className="service-card">
                  <Heart className="w-16 h-16 text-gold-gradient mb-6 mx-auto" />
                  <h3 className="text-xl font-bold mb-4">Family Law & Divorce</h3>
                  <p className="mb-4">
                    Sensitive and strategic family law guidance for expatriates and UAE nationals, including divorce proceedings and child custody matters.
                  </p>
                  <a href="/services/divorce-lawyers-dubai" className="hero-cta inline-block">
                    Family Law Services
                  </a>
                </article>
              </div>
            </div>
          </ContentSection>

          {/* Contact CTA */}
          <ContentSection>
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Get Expert Legal Support?</h2>
              <p className="text-large mb-8">
                Don't navigate complex legal challenges alone. Contact Precedential Law today for expert legal services in Dubai. We offer confidential consultations to understand your situation and explore how our dedicated team can help you achieve your objectives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="service-card">
                  <h3>📞 Call Us</h3>
                  <p><a href="tel:+971509014120" className="text-gold-gradient hover:underline">+971 50 901 4120</a></p>
                </div>
                <div className="service-card">
                  <h3>✉️ Email Us</h3>
                  <p><a href="mailto:info@precedentiallaw.com" className="text-gold-gradient hover:underline">info@precedentiallaw.com</a></p>
                </div>
                <div className="service-card">
                  <h3>💬 WhatsApp</h3>
                  <p><a href="https://wa.me/971509014120" className="text-gold-gradient hover:underline">Message Us</a></p>
                </div>
              </div>
              <a href="/contact" className="hero-cta">
                Schedule Your Consultation
              </a>
            </div>
          </ContentSection>
        </div>
      </MaximaLayout>
      
      <WhatsAppButton phoneNumber="971509014120" />
    </>
  );
};

export default Services;
