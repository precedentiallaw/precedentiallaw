
import React from 'react';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Helmet } from 'react-helmet-async';
import { Shield, Heart, Award, Users, Scale, Target } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaAbout: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with unwavering ethical standards. Transparency, honesty, and accountability are the cornerstones of our practice, ensuring trust and reliability in all our dealings.",
      icon: Scale
    },
    {
      title: "Client Protection (Your Legal Shield)",
      description: "We see ourselves as your shield, standing resolutely between you and the complexities of the legal system. Our primary focus is safeguarding your rights, assets, and future.",
      icon: Shield
    },
    {
      title: "Excellence",
      description: "We are committed to achieving the highest quality in our legal advice, representation, and client service. This involves continuous learning and a relentless pursuit of the best outcomes.",
      icon: Award
    }
  ];

  const team = [
    {
      name: "Senior Legal Counsel",
      specialization: "Business Law & Corporate Governance",
      experience: "12+ years UAE legal experience",
      description: "Expert in UAE commercial law with extensive experience in company formation and corporate compliance."
    },
    {
      name: "Family Law Specialist",
      specialization: "Divorce & Child Custody",
      experience: "8+ years family law practice",
      description: "Compassionate advocate specializing in expatriate family law matters and cross-cultural legal issues."
    },
    {
      name: "Litigation Partner",
      specialization: "Civil & Commercial Litigation",
      experience: "15+ years court experience",
      description: "Seasoned litigator with proven success in UAE courts and alternative dispute resolution."
    }
  ];

  return (
    <MaximaLayout>
      <Helmet>
        <title>About Precedential Law | Leading Legal Consultancy Dubai UAE</title>
        <meta name="description" content="Learn about Precedential Law, Dubai's premier legal consultancy. Our mission, values, and expert team providing comprehensive legal services across the UAE." />
        <link rel="canonical" href="https://precedentiallaw.com/about" />
        
        <meta property="og:title" content="About Precedential Law - Premier Legal Consultancy Dubai" />
        <meta property="og:description" content="Discover our mission, values, and expert legal team serving expatriates and UAE nationals with comprehensive legal solutions." />
        <meta property="og:url" content="https://precedentiallaw.com/about" />
      </Helmet>

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>About Precedential Law</h1>
          <p className="text-large">
            Setting a precedential standard in legal services. Your trusted shield in Dubai's legal landscape, 
            providing expert guidance and unwavering client protection.
          </p>
        </div>
      </ContentSection>

      {/* Mission Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <header className="mb-8">
            <h2>Our Mission</h2>
          </header>
          <div className="max-w-4xl mx-auto">
            <p className="text-large">
              Our mission at Precedential Law is to provide clear, effective, and accessible legal solutions 
              that empower our clients and protect their interests within the dynamic legal landscape of Dubai and the UAE. 
              We strive to be a beacon of clarity and reliability in a complex field.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Values Section */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2>Our Values</h2>
          <p className="text-large">The principles that guide everything we do</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <article key={index} className="service-card text-center">
              <value.icon className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Philosophy Section */}
      <ContentSection background="alternate">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h2>Our Philosophy</h2>
          </header>
          <p className="text-large text-center">
            We believe in a proactive, client-centric approach. This means dedicating time to understand your objectives deeply, 
            anticipating potential challenges, and communicating complex legal matters in plain language. We aim to demystify the law, 
            empowering you with the knowledge needed to make informed decisions confidently.
          </p>
        </div>
      </ContentSection>

      {/* Founder's Vision Section */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h2>The Founder's Vision</h2>
          </header>
          <p className="text-large text-center">
            Precedential Law was founded with a distinct vision: to establish a legal consultancy in Dubai built on genuine 
            partnership with clients. The aim was to create a firm that prioritizes clarity over complexity, combining profound 
            local expertise with international standards of service excellence.
          </p>
        </div>
      </ContentSection>

      {/* Understanding Our Name Section */}
      <ContentSection background="alternate">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h2>Understanding Our Name</h2>
          </header>
          <p className="text-large text-center">
            The name 'Precedential' embodies our core aspiration: to set a new benchmark - a precedent - for legal service 
            quality and client success in Dubai. It signifies our unwavering commitment to achieving landmark results for our clients, 
            approaching each case with the diligence and strategic thinking required to establish positive outcomes.
          </p>
        </div>
      </ContentSection>

      {/* Team Section */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2>Our Expert Team</h2>
          <p className="text-large">Experienced legal professionals dedicated to your success</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <article key={index} className="service-card text-center">
              <Users className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
              <h3>{member.name}</h3>
              <p className="text-gold-gradient font-semibold mb-2">{member.specialization}</p>
              <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
              <p className="text-sm">{member.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Commitment Section */}
      <ContentSection background="alternate">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h2>Our Commitment to Client Protection</h2>
          </header>
          <p className="text-large text-center">
            Your peace of mind is paramount. We act as your dedicated shield, navigating intricate legal frameworks, 
            managing complex procedures, and standing firm to protect your rights and interests from potential pitfalls. 
            Trust us to be your steadfast protectors in the legal arena.
          </p>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection>
        <div className="text-center">
          <h2>Ready to Experience the Precedential Standard?</h2>
          <p className="text-large mb-8">Join hundreds of satisfied clients who have trusted us with their legal needs.</p>
          <a href="/contact" className="hero-cta">
            Schedule Your Consultation
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </MaximaLayout>
  );
};

export default MaximaAbout;
