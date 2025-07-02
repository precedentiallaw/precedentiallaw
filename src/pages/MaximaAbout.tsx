
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Shield, Users, Award, Target } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaAbout: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with unwavering ethical standards. Transparency, honesty, and accountability are the cornerstones of our practice.",
      icon: Shield
    },
    {
      title: "Client Protection",
      description: "We see ourselves as your shield, standing between you and legal complexities, safeguarding your rights and future.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We are committed to achieving the highest quality in legal advice, representation, and client service.",
      icon: Award
    },
    {
      title: "Results-Focused",
      description: "We measure our success by the positive outcomes and effective protection we achieve for our clients.",
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Precedential Law | Premier Dubai Legal Consultancy | Our Mission & Values</title>
        <meta name="description" content="Learn about Precedential Law - premier legal consultancy in Dubai. Our mission, values, and commitment to setting the precedential standard in UAE legal services." />
        <link rel="canonical" href="https://precedentiallaw.com/about" />
        
        <meta property="og:title" content="About Precedential Law | Premier Dubai Legal Consultancy" />
        <meta property="og:description" content="Premier legal consultancy in Dubai committed to delivering clear, effective legal solutions and client protection." />
        <meta property="og:url" content="https://precedentiallaw.com/about" />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:site_name" content="Precedential Law" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Precedential Law | Premier Dubai Legal Consultancy" />
        <meta property="twitter:description" content="Premier legal consultancy in Dubai committed to delivering clear, effective legal solutions." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>
      
      <MaximaLayout>
        <div data-scroll-section>
          {/* Hero Section */}
          <ContentSection>
            <div className="service-hero">
              <h1>About Precedential Law</h1>
              <p className="text-large">
                Setting a Precedential Standard in Legal Services. Your Shield in Dubai's Legal Landscape.
              </p>
            </div>
          </ContentSection>

          {/* Mission Section */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8">Our Mission</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-large mb-6">
                  Our mission at Precedential Law is to provide clear, effective, and accessible legal solutions that empower our clients and protect their interests within the dynamic legal landscape of Dubai and the UAE.
                </p>
                <p className="text-large">
                  We strive to be a beacon of clarity and reliability in a complex field, setting the precedential standard for legal excellence in the region.
                </p>
              </div>
            </div>
          </ContentSection>

          {/* Values Section */}
          <ContentSection>
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value) => (
                  <article key={value.title} className="service-card">
                    <value.icon className="w-12 h-12 text-gold-gradient mb-4 mx-auto" aria-hidden="true" />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </ContentSection>

          {/* Philosophy Section */}
          <ContentSection background="alternate">
            <div className="content-grid">
              <div className="content-text">
                <h2>Our Philosophy</h2>
                <p className="text-large mb-6">
                  We believe in a proactive, client-centric approach. This means dedicating time to understand your objectives deeply, anticipating potential challenges, and communicating complex legal matters in plain language.
                </p>
                <p className="text-large">
                  We aim to demystify the law, empowering you with the knowledge needed to make informed decisions confidently. We don't just react to problems; we work with you to prevent them and chart the most efficient path to resolution.
                </p>
              </div>
              <div className="content-image">
                <img 
                  src="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png"
                  alt="Precedential Law Philosophy"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </ContentSection>

          {/* Founder's Vision */}
          <ContentSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-8">The Founder's Vision</h2>
              <p className="text-large mb-6">
                Precedential Law was founded with a distinct vision: to establish a legal consultancy in Dubai built on genuine partnership with clients. The aim was to create a firm that prioritizes clarity over complexity, combining profound local expertise with international standards of service excellence.
              </p>
              <p className="text-large">
                Recognizing a need for advisors who not only master the intricacies of UAE law but also genuinely focus on the client's journey and desired outcomes, Precedential Law was born to fill that gap, offering a more supportive and results-oriented legal experience.
              </p>
            </div>
          </ContentSection>

          {/* Understanding Our Name */}
          <ContentSection background="alternate">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-8">Understanding Our Name</h2>
              <p className="text-large mb-6">
                The name 'Precedential' embodies our core aspiration: to set a new benchmark - a precedent - for legal service quality and client success in Dubai. It signifies our unwavering commitment to achieving landmark results for our clients.
              </p>
              <p className="text-large">
                It reflects our dedication to upholding the highest standards of legal practice and professional conduct, aiming to be leaders in our field and setting the precedential standard for others to follow.
              </p>
            </div>
          </ContentSection>

          {/* Client Protection Commitment */}
          <ContentSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-8">Our Commitment to Client Protection</h2>
              <p className="text-large mb-6">
                Your peace of mind is paramount. We act as your dedicated shield, navigating intricate legal frameworks, such as the UAE Civil Code or specific Decree-Laws governing employment or commercial transactions.
              </p>
              <p className="text-large">
                We manage complex procedures, whether it involves filings with the Rental Dispute Centre, adhering to civil court protocols, or ensuring compliance with business regulations. Trust us to be your steadfast protectors in the legal arena.
              </p>
            </div>
          </ContentSection>

          {/* CTA Section */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Experience the Precedential Standard?</h2>
              <p className="text-large mb-8">
                Contact us today for a confidential consultation and discover how our commitment to excellence can protect and advance your interests.
              </p>
              <a href="/contact" className="hero-cta">
                Schedule Consultation
              </a>
            </div>
          </ContentSection>
        </div>
      </MaximaLayout>
      
      <WhatsAppButton phoneNumber="971509014120" />
    </>
  );
};

export default MaximaAbout;
