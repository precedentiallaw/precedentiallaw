
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import HeroSection from '@/components/maxima/HeroSection';
import { Building2, FileText, Scale, Shield, Heart, Plane } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaIndex: React.FC = () => {
  const services = [
    {
      title: "Business Law",
      description: "Comprehensive legal support for businesses operating in Dubai and the UAE.",
      icon: Building2,
      href: "/services/business-law"
    },
    {
      title: "Family Law",
      description: "Expert legal services for divorce, child custody, and family matters in the UAE.",
      icon: Heart,
      href: "/services/family-law"
    },
    {
      title: "Real Estate Law",
      description: "Legal guidance for property transactions, lease agreements, and rental disputes in Dubai.",
      icon: Shield,
      href: "/services/real-estate-law"
    },
    {
      title: "Immigration Law",
      description: "Visa applications, residency permits, and immigration legal services in the UAE.",
      icon: Plane,
      href: "/services/immigration-law"
    },
    {
      title: "Corporate Law",
      description: "Expert legal services for company formation, M&A transactions, and corporate governance in Dubai and UAE",
      icon: Scale,
      href: "/services/corporate-law-dubai"
    },
    {
      title: "Contract Disputes",
      description: "Legal representation for contract breaches, performance issues, and commercial disputes in the UAE",
      icon: FileText,
      href: "/services/contract-disputes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Precedential Law | Premier Dubai Legal Consultancy | UAE Legal Services</title>
        <meta name="description" content="Precedential Law: Expert Dubai legal services & consultation. Top business law firm, family law, divorce & immigration lawyer Dubai. Setting the standard. Contact us." />
        <meta name="keywords" content="Dubai lawyers, UAE legal services, business law Dubai, family law UAE, immigration lawyers, corporate law, precedential law" />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precedential Law | Premier Dubai Legal Consultancy" />
        <meta property="og:description" content="Expert Dubai legal services & consultation. Top business law firm, family law, divorce & immigration lawyer Dubai." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Precedential Law | Premier Dubai Legal Consultancy" />
        <meta property="twitter:description" content="Expert Dubai legal services & consultation. Setting the precedential standard." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>
      
      <MaximaLayout showLoader={true}>
        <div data-scroll-section>
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <ContentSection background="alternate" id="services">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">Comprehensive Legal Services Tailored for Dubai</h2>
              <p className="text-large mb-12">
                We offer expert legal counsel across a wide range of practice areas critical to individuals and businesses succeeding in the UAE.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <article key={service.title} className="service-card">
                    <service.icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
                    <h3>
                      <a href={service.href} className="hover:text-gold-gradient transition-colors">
                        {service.title}
                      </a>
                    </h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12">
                <a href="/services" className="hero-cta">
                  Explore All Practice Areas
                </a>
              </div>
            </div>
          </ContentSection>

          {/* Why Choose Us Section */}
          <ContentSection id="about">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">The Precedential Advantage: Why Clients Trust Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <article className="service-card">
                  <h3>Deep UAE Expertise</h3>
                  <p>Our team possesses in-depth, practical knowledge of local laws, regulations, and court practices, ensuring informed and effective strategies.</p>
                </article>
                <article className="service-card">
                  <h3>Client-Centric Approach</h3>
                  <p>Your objectives are our priority. We listen attentively, understand your unique situation, and tailor our legal strategies to achieve optimal outcomes.</p>
                </article>
                <article className="service-card">
                  <h3>Dubai Market Insight</h3>
                  <p>We possess a keen understanding of the specific challenges and opportunities facing businesses and individuals within the dynamic Dubai market.</p>
                </article>
                <article className="service-card">
                  <h3>Commitment to Clarity</h3>
                  <p>We cut through legal jargon, demystifying complex issues and providing clear, actionable advice, ensuring you are empowered throughout the process.</p>
                </article>
                <article className="service-card">
                  <h3>The Precedential Standard</h3>
                  <p>We uphold the highest benchmarks of integrity, professionalism, and dedication to achieving positive results for our clients.</p>
                </article>
                <article className="service-card">
                  <h3>Proven Results</h3>
                  <p>We measure our success by the positive outcomes, effective protection, and value we achieve for you, our valued client.</p>
                </article>
              </div>
              <div className="mt-12">
                <a href="/about" className="hero-cta">
                  Learn More About Us
                </a>
              </div>
            </div>
          </ContentSection>

          {/* Testimonials Section */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Hear From Our Clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <blockquote className="service-card">
                  <p className="text-lg italic mb-4">
                    "Precedential Law provided invaluable guidance for my business setup in Dubai. Professional, clear, and highly effective."
                  </p>
                  <footer className="text-gold-gradient font-semibold">- SME Owner, Dubai</footer>
                </blockquote>
                <blockquote className="service-card">
                  <p className="text-lg italic mb-4">
                    "Navigating my divorce felt overwhelming until I contacted Precedential Law. Their support was exceptional, explaining the process clearly and protecting my interests."
                  </p>
                  <footer className="text-gold-gradient font-semibold">- Expat Resident</footer>
                </blockquote>
              </div>
              <div className="mt-12">
                <a href="/testimonials" className="hero-cta">
                  Read More Testimonials
                </a>
              </div>
            </div>
          </ContentSection>

          {/* Contact Section */}
          <ContentSection id="contact">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
              <p className="text-large mb-8">
                Don't navigate complex legal challenges alone. Contact Precedential Law today for expert legal services in Dubai. We offer confidential consultations to understand your situation and explore how our dedicated team can help you achieve your objectives.
              </p>
              <div className="service-card max-w-md mx-auto">
                <h3>Contact Information</h3>
                <p><strong>Phone:</strong> <a href="tel:+971509014120" className="text-gold-gradient">+971 50 901 4120</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@precedentiallaw.com" className="text-gold-gradient">info@precedentiallaw.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/971509014120" className="text-gold-gradient">+971 50 901 4120</a></p>
                <p><strong>Office:</strong> City Tower 2 - Sheikh Zayed Road<br />Trade Centre - Dubai, UAE</p>
              </div>
              <div className="mt-8">
                <a href="/contact" className="hero-cta">
                  Get Legal Support Now
                </a>
              </div>
            </div>
          </ContentSection>
        </div>
      </MaximaLayout>
      
      <WhatsAppButton phoneNumber="971509014120" />
    </>
  );
};

export default MaximaIndex;
