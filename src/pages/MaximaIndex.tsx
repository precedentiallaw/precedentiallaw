
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
    {
      title: "Commercial & Business Law",
      description: "Safeguard your business interests with our expert guidance. From navigating company formation and drafting robust contracts to ensuring regulatory compliance and resolving complex disputes.",
      icon: Building2,
      href: "/services/business-law"
    },
    {
      title: "Family Law & Wills",
      description: "Receive sensitive and strategic advice tailored for expats and nationals alike. We handle divorce proceedings, child custody arrangements, and UAE-compliant Wills.",
      icon: Heart,
      href: "/services/family-law"
    },
    {
      title: "Real Estate Law",
      description: "Navigate Dubai's property market with confidence. We assist with property transactions, lease agreements, Ejari registration, and resolving rental disputes.",
      icon: Shield,
      href: "/services/real-estate-law"
    },
    {
      title: "Immigration Law",
      description: "Comprehensive visa applications, residency permits, and immigration legal services to help you establish your life in the UAE.",
      icon: Plane,
      href: "/services/immigration-law"
    },
    {
      title: "Debt Settlement & Civil Litigation",
      description: "Address financial challenges proactively. We assist with debt recovery, negotiate settlements, and guide clients through civil court proceedings in the UAE.",
      icon: Scale,
      href: "/services/debt-settlement"
    },
    {
      title: "Contract Disputes",
      description: "Resolve contractual disagreements effectively through meticulous analysis, negotiation, mediation, arbitration, or court litigation as needed.",
      icon: FileText,
      href: "/services/contract-disputes"
    }
  ];

  const advantages = [
    {
      title: "Deep UAE Expertise",
      description: "Our team possesses in-depth, practical knowledge of local laws, regulations, and court practices, ensuring informed and effective strategies. Rely on expert lawyers in Dubai."
    },
    {
      title: "Client-Centric Approach", 
      description: "Your objectives are our priority. We listen attentively, understand your unique situation, and tailor our legal strategies to achieve optimal outcomes, reflecting a genuine partnership."
    },
    {
      title: "Dubai Market Insight",
      description: "We possess a keen understanding of the specific challenges and opportunities facing businesses and individuals within the dynamic Dubai market."
    },
    {
      title: "Commitment to Clarity",
      description: "We cut through legal jargon, demystifying complex issues and providing clear, actionable advice, ensuring you are empowered throughout the process."
    },
    {
      title: "The Precedential Standard",
      description: "We uphold the highest benchmarks of integrity, professionalism, and dedication to achieving positive results for our clients."
    },
    {
      title: "Proven Results",
      description: "We measure our success by the positive outcomes, effective protection, and value we achieve for you, our valued client."
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
      
      <MaximaLayout showLoader={false}>
        <div data-scroll-section>
          {/* Hero Section */}
          <HeroSection />

          {/* Introduction Section */}
          <ContentSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Your Trusted Legal Partners in Dubai</h2>
              <p className="text-large mb-8">
                Navigating legal matters in Dubai, whether for your business or personal life, requires knowledgeable guidance. 
                At Precedential Law, we combine deep expertise in UAE law with an unwavering commitment to understanding your specific needs. 
                We offer strategic advice and robust representation, striving to be more than just legal consultants; we aim to be your trusted legal partners in Dubai.
              </p>
              <p className="text-large">
                Our focus is on demystifying the law, providing actionable advice that empowers you to make informed decisions. 
                As a leading Dubai legal consultancy, we provide comprehensive legal services in Dubai tailored to meet the challenges and opportunities of this vibrant hub.
              </p>
            </div>
          </ContentSection>

          {/* Services Section */}
          <ContentSection background="alternate" id="services">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">Comprehensive Legal Services Tailored for Dubai</h2>
              <p className="text-large mb-12">
                We offer expert legal counsel across a wide range of practice areas critical to individuals and businesses succeeding in the UAE. 
                Our team is equipped to handle diverse legal needs with precision and care.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <article key={service.title} className="service-card">
                    <service.icon className="w-12 h-12 text-gold-gradient mb-4" aria-hidden="true" />
                    <h3>
                      <Link to={service.href} className="hover:text-gold-gradient transition-colors">
                        {service.title}
                      </Link>
                    </h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/services" className="hero-cta">
                  Explore All Practice Areas
                </Link>
              </div>
            </div>
          </ContentSection>

          {/* Why Choose Us Section */}
          <ContentSection id="about">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">The Precedential Advantage: Why Clients Trust Us</h2>
              <p className="text-large mb-12">
                Choosing the right legal partner in Dubai is crucial. Precedential Law offers a unique combination of expertise, focus, and client commitment that sets us apart.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                  <article key={index} className="service-card">
                    <h3>{advantage.title}</h3>
                    <p>{advantage.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/about" className="hero-cta">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </ContentSection>

          {/* Testimonials Section */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Hear From Our Clients</h2>
              <p className="text-large mb-12">
                At Precedential Law, client satisfaction is our ultimate measure of success. We are proud to have assisted numerous individuals and businesses in successfully navigating Dubai's complex legal landscape.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <blockquote className="service-card">
                  <p className="text-lg italic mb-4">
                    "Setting up our technology business in a Dubai free zone seemed daunting initially, but Precedential Law made the entire process remarkably seamless. 
                    They expertly handled everything from navigating the licensing requirements to drafting robust shareholder agreements. 
                    We found their commercial lawyers in Dubai to be exceptionally professional, clear in their communication, and highly effective."
                  </p>
                  <footer className="text-gold-gradient font-semibold">- CEO, Tech Startup</footer>
                </blockquote>
                <blockquote className="service-card">
                  <p className="text-lg italic mb-4">
                    "Going through a divorce is incredibly stressful, particularly when navigating a different legal system as an expat. 
                    Precedential Law provided sensitive, clear, and strong representation throughout. They patiently explained the UAE legal process concerning divorce and custody and fought diligently for a fair outcome. 
                    I felt genuinely supported and protected during a very difficult time."
                  </p>
                  <footer className="text-gold-gradient font-semibold">- Expat Professional</footer>
                </blockquote>
              </div>
              <div className="mt-12">
                <Link to="/testimonials" className="hero-cta">
                  Read More Testimonials
                </Link>
              </div>
            </div>
          </ContentSection>

          {/* Contact Section */}
          <ContentSection id="contact">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
              <p className="text-large mb-8">
                Don't navigate complex legal challenges alone. Contact Precedential Law today for expert legal services in Dubai. 
                We offer confidential consultations to understand your situation and explore how our dedicated team can help you achieve your objectives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div className="service-card">
                  <h3>Contact Information</h3>
                  <div className="space-y-3">
                    <p><strong>Phone:</strong> <a href="tel:+971509014120" className="text-gold-gradient hover:underline">+971 50 901 4120</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@precedentiallaw.com" className="text-gold-gradient hover:underline">info@precedentiallaw.com</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/971509014120" className="text-gold-gradient hover:underline">+971 50 901 4120</a></p>
                  </div>
                </div>
                <div className="service-card">
                  <h3>Office Location</h3>
                  <div className="space-y-3">
                    <p><strong>Address:</strong><br />
                    City Tower 2 - Sheikh Zayed Road<br />
                    Trade Centre - Dubai, UAE</p>
                    <p><strong>Working Hours:</strong><br />
                    Monday - Thursday: 9:00 AM - 5:00 PM<br />
                    Friday: 9:00 AM - 12:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="hero-cta">
                  Get Legal Support Now
                </Link>
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
