
import React from 'react';
import { Award, Star, Shield, Users } from 'lucide-react';

const AwardsSection: React.FC = () => {
  const awards = [
    {
      title: "Best Legal Firm Dubai 2024",
      organization: "Dubai Business Awards",
      year: "2024",
      icon: Award
    },
    {
      title: "Client Excellence Award",
      organization: "UAE Legal Association",
      year: "2023",
      icon: Star
    },
    {
      title: "Professional Excellence",
      organization: "Dubai Chamber",
      year: "2023",
      icon: Shield
    },
    {
      title: "Top Rated Law Firm",
      organization: "Legal500 Middle East",
      year: "2024",
      icon: Users
    }
  ];

  const certifications = [
    "Dubai Bar Association Member",
    "UAE Federal Courts Licensed",
    "DIFC Courts Registered",
    "ISO 9001:2015 Certified",
    "Legal Aid Society Member"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Awards & <span className="text-gold-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading legal organizations and industry bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <award.icon className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2">{award.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
              <p className="text-sm font-medium text-precedential-gold">{award.year}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-6">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <span key={index} className="bg-precedential-gold/10 text-precedential-gold px-4 py-2 rounded-full text-sm font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
