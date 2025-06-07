
import React from 'react';
import { Shield, Users, Scale, Globe } from 'lucide-react';

const AwardsSection: React.FC = () => {
  const credentials = [
    {
      title: "UAE Legal Practice",
      description: "Licensed to practice law in the United Arab Emirates",
      icon: Scale
    },
    {
      title: "Dubai Courts",
      description: "Qualified to represent clients in Dubai court system",
      icon: Shield
    },
    {
      title: "Multilingual Services",
      description: "Legal services available in multiple languages",
      icon: Globe
    },
    {
      title: "Client-Focused",
      description: "Dedicated to achieving optimal client outcomes",
      icon: Users
    }
  ];

  const practiceAreas = [
    "Commercial & Business Law",
    "Family Law & Personal Status",
    "Real Estate & Property Law",
    "Civil Litigation & Disputes",
    "Immigration & Visa Services",
    "Debt Settlement & Recovery",
    "Contract Drafting & Review",
    "Legal Consultation & Advice"
  ];

  return (
    <section className="py-16 bg-precedential-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Our Legal <span className="text-gold-gradient">Qualifications</span>
          </h2>
          <p className="text-lg text-precedential-black/70 max-w-2xl mx-auto">
            Our commitment to professional excellence and comprehensive legal knowledge serves our clients across Dubai and the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <credential.icon className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2">{credential.title}</h3>
              <p className="text-sm text-precedential-black/60">{credential.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-6">Practice Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {practiceAreas.map((area, index) => (
              <span key={index} className="bg-precedential-gold/10 text-precedential-black/70 px-4 py-2 rounded-full text-sm font-medium text-center">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
