import React from 'react';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Helmet } from 'react-helmet-async';
import { Shield, Heart, Award, Users, Scale } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaAbout: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We operate with unwavering ethical standards. Transparency, honesty, and accountability are the cornerstones of our practice, ensuring trust and reliability in all our dealings.",
      icon: Scale
    },
    {
      title: "Client Protection",
      description:
        "We serve as your legal shield, standing between you and the legal system’s complexity. Our focus is protecting your rights, assets, and future at all costs.",
      icon: Shield
    },
    {
      title: "Excellence",
      description:
        "We pursue the highest quality in legal advice, representation, and client service—through continuous learning and tireless dedication to your outcomes.",
      icon: Award
    }
  ];

  const team = [
    {
      name: "Senior Legal Counsel",
      specialization: "Business Law & Corporate Governance",
      experience: "12+ years UAE legal experience",
      description:
        "Expert in UAE commercial law with extensive experience in company formation and corporate compliance."
    },
    {
      name: "Family Law Specialist",
      specialization: "Divorce & Child Custody",
      experience: "8+ years family law practice",
      description:
        "Compassionate advocate specializing in expatriate family law matters and cross-cultural legal issues."
    },
    {
      name: "Litigation Partner",
      specialization: "Civil & Commercial Litigation",
      experience: "15+ years court experience",
      description:
        "Seasoned litigator with proven success in UAE courts and alternative dispute resolution."
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

      {/* Hero */}
      <ContentSection>
        <header className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold mb-4">About Precedential Law</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Setting a precedential standard in legal services. Your trusted shield in Dubai's legal landscape — offering expert guidance and unwavering client protection.
          </p>
        </header>
      </ContentSection>

      {/* Mission */}
      <ContentSection background="alternate">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Mission</h2>
          <p className="text-large">
            To provide clear, effective, and accessible legal solutions that empower our clients and protect their interests. We aim to be a beacon of clarity and reliability within the dynamic legal landscape of Dubai and the UAE.
          </p>
        </div>
      </ContentSection>

      {/* Values */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold">Our Core Values</h2>
          <p className="text-large">The principles that define our firm’s identity</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <article key={idx} className="service-card text-center">
              <value.icon className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Philosophy */}
      <ContentSection background="alternate">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Philosophy</h2>
          <p className="text-large">
            We believe in a proactive, client-centric approach. We invest time in deeply understanding your objectives, demystify complex legal matters, and empower you with transparent communication throughout your journey.
          </p>
        </div>
      </ContentSection>

      {/* Founder's Vision */}
      <ContentSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-4">Founder's Vision</h2>
          <p className="text-large">
            Precedential Law was founded to offer a legal consultancy grounded in transparency and trust. Our aim is to merge profound local knowledge with international-grade service — raising the bar for legal consultancies in the UAE.
          </p>
        </div>
      </ContentSection>

      {/* Name Meaning */}
      <ContentSection background="alternate">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-4">Why “Precedential”?</h2>
          <p className="text-large">
            The name reflects our goal to set new legal precedents — not just for cases, but for the quality of service clients should expect from their legal advisors. It symbolizes excellence, strategy, and client-first thinking.
          </p>
        </div>
      </ContentSection>

      {/* Team */}
      <ContentSection>
        <header className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold">Meet Our Expert Team</h2>
          <p className="text-large">Professionals committed to your legal success</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <article key={idx} className="service-card text-center">
              <Users className="w-12 h-12 text-gold-gradient mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gold-gradient font-medium mb-1">{member.specialization}</p>
              <p className="text-sm text-gray-600">{member.experience}</p>
              <p className="text-sm mt-2">{member.description}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Client Commitment */}
      <ContentSection background="alternate">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Commitment to You</h2>
          <p className="text-large">
            We serve as your dedicated legal shield — simplifying complex laws, managing your risks, and ensuring your peace of mind. From first consultation to final resolution, we’re in your corner.
          </p>
        </div>
      </ContentSection>

      {/* Call to Action */}
      <ContentSection>
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Set a Legal Precedent?</h2>
          <p className="text-large mb-6">Experience Dubai’s most trusted legal consultancy firsthand.</p>
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