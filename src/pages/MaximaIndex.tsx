import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import HeroSection from '@/components/maxima/HeroSection';
import { Building2, FileText, Scale, Shield, Heart, Plane } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaIndex: React.FC = () => {
  const services = [
    { title: "Commercial & Business Law", description: "Safeguard your business interests...", icon: Building2, href: "/services/business-law" },
    { title: "Family Law & Wills", description: "Receive sensitive and strategic advice...", icon: Heart, href: "/services/family-law" },
    { title: "Real Estate Law", description: "Navigate Dubai's property market...", icon: Shield, href: "/services/real-estate-law" },
    { title: "Immigration Law", description: "Comprehensive visa applications...", icon: Plane, href: "/services/immigration-law" },
    { title: "Debt Settlement & Civil Litigation", description: "Address financial challenges...", icon: Scale, href: "/services/debt-settlement" },
    { title: "Contract Disputes", description: "Resolve contractual disagreements...", icon: FileText, href: "/services/contract-disputes" }
  ];

  const advantages = [
    { title: "Deep UAE Expertise", description: "Our team possesses in-depth knowledge..." },
    { title: "Client-Centric Approach", description: "Your objectives are our priority..." },
    { title: "Dubai Market Insight", description: "We understand the specific challenges..." },
    { title: "Commitment to Clarity", description: "We provide clear, actionable advice..." },
    { title: "The Precedential Standard", description: "We uphold the highest benchmarks..." },
    { title: "Proven Results", description: "Our success is measured by your outcomes..." }
  ];

  return (
    <>
      <Helmet>
        <title>Precedential Law | Premier Dubai Legal Consultancy | UAE Legal Services</title>
        <meta name="description" content="Expert Dubai legal services. Business law, family law, divorce & immigration. Contact us." />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precedential Law | Premier Dubai Legal Consultancy" />
        <meta property="og:description" content="Expert Dubai legal services & consultation." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precedential Law | Premier Dubai Legal Consultancy" />
        <meta name="twitter:description" content="Expert Dubai legal services & consultation." />
        <meta name="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>

      <MaximaLayout showLoader={false}>
        <div data-scroll-section>
          <HeroSection />

          <ContentSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Your Trusted Legal Partners in Dubai</h2>
              <p className="text-large mb-8">Navigating legal matters in Dubai requires knowledgeable guidance. We combine UAE law expertise with personalized attention.</p>
              <p className="text-large">Our mission is to empower you with clarity, strategy, and results-driven representation.</p>
            </div>
          </ContentSection>

          <ContentSection background="alternate" id="services">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">Comprehensive Legal Services</h2>
              <p className="text-large mb-12">Expert counsel for UAE-based individuals and businesses. Trusted legal guidance tailored for Dubai's dynamic environment.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(({ title, description, icon: Icon, href }) => (
                  <article key={title} className="service-card text-center">
                    <Icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
                    <h3><Link to={href} className="hover:text-gold-gradient transition-colors">{title}</Link></h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/services" className="hero-cta">Explore All Practice Areas</Link>
              </div>
            </div>
          </ContentSection>

          <ContentSection id="about">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">Why Clients Trust Us</h2>
              <p className="text-large mb-12">We offer a rare combination of local expertise, client dedication, and proven results.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map(({ title, description }, index) => (
                  <article key={index} className="service-card text-center">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/about" className="hero-cta">Learn More About Us</Link>
              </div>
            </div>
          </ContentSection>

          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Hear From Our Clients</h2>
              <p className="text-large mb-12">Client satisfaction defines our legacy. Here's what they have to say:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <blockquote className="service-card">
                  <p className="text-lg italic mb-4">"They expertly handled our free zone setup, from licensing to legal compliance. Truly professional team."</p>
                  <footer className="text-gold-gradient font-semibold">- CEO, Tech Startup</footer>
                </blockquote>
                <blockquote className="service-card">
                  <p className="text-lg italic mb-4">"Their sensitive and clear support made my expat divorce manageable and fair. Highly recommend."</p>
                  <footer className="text-gold-gradient font-semibold">- Expat Professional</footer>
                </blockquote>
              </div>
              <div className="mt-12">
                <Link to="/testimonials" className="hero-cta">Read More Testimonials</Link>
              </div>
            </div>
          </ContentSection>

          <ContentSection id="contact">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Let's Talk Legal Strategy</h2>
              <p className="text-large mb-8">Precedential Law offers strategic clarity and protective legal counsel. Get in touch today.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div className="service-card">
                  <h3>Contact Us</h3>
                  <p><strong>Phone:</strong> <a href="tel:+971509014120" className="text-gold-gradient">+971 50 901 4120</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@precedentiallaw.com" className="text-gold-gradient">info@precedentiallaw.com</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/971509014120" className="text-gold-gradient">+971 50 901 4120</a></p>
                </div>
                <div className="service-card">
                  <h3>Visit Us</h3>
                  <p><strong>Address:</strong><br />City Tower 2, Sheikh Zayed Road, Dubai</p>
                  <p><strong>Hours:</strong><br />Mon–Thu: 9AM–5PM | Fri: 9AM–12:30PM</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="hero-cta">Get Legal Support Now</Link>
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