
import React from 'react';
import { Scale, Shield, Award, Calendar, Users, Globe2 } from 'lucide-react';

const EnhancedAbout: React.FC = () => {
  const milestones = [
    {
      year: "2015",
      title: "Firm Establishment",
      description: "Founded with a vision to provide exceptional legal services in Dubai's growing business landscape."
    },
    {
      year: "2018",
      title: "Practice Expansion",
      description: "Extended services to cover comprehensive legal areas including family law and real estate."
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description: "Implemented cutting-edge legal technology to enhance client service delivery."
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Recognized as a trusted legal authority serving diverse communities across the UAE."
    }
  ];

  const principles = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Excellence",
      description: "Unwavering commitment to delivering sophisticated legal solutions with precision and expertise."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Client Protection",
      description: "Your interests are our priority. We serve as your dedicated shield in all legal matters."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Integrity",
      description: "Maintaining the highest ethical standards in every aspect of our legal practice."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Firm History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Our <span className="text-gold-gradient">Journey</span>
              </h2>
              <p className="text-lg text-gray-600">
                Building legal excellence in Dubai through dedication, expertise, and client-focused service
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-precedential-gold/30"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-precedential-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className={`bg-white p-6 rounded-xl shadow-sm ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-5/12`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-precedential-gold" />
                        <span className="text-precedential-gold font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-precedential-offWhite">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Our Core <span className="text-gold-gradient">Principles</span>
              </h2>
              <p className="text-lg text-gray-600">
                The fundamental values that guide our legal practice and client relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-precedential-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-precedential-gold">
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Professional <span className="text-gold-gradient">Recognition</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our commitment to excellence recognized across the legal community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Users className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-precedential-gold mb-2">500+</div>
                <p className="text-sm text-gray-600">Clients Served</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Scale className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-precedential-gold mb-2">95%</div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Globe2 className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-precedential-gold mb-2">7</div>
                <p className="text-sm text-gray-600">UAE Emirates</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Award className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-precedential-gold mb-2">9+</div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedAbout;
