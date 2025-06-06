
import React from 'react';
import { Scale, Shield, Award, Building, Users, Trophy } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: Scale,
      title: "Legal Excellence",
      description: "Recognized for outstanding legal advocacy and client representation across UAE courts"
    },
    {
      icon: Shield,
      title: "Client Protection",
      description: "Unwavering commitment to safeguarding client interests with strategic legal solutions"
    },
    {
      icon: Building,
      title: "Corporate Authority",
      description: "Trusted advisor to Fortune 500 companies and multinational corporations"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Landmark victories in complex commercial disputes and high-stakes litigation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-precedential-gold blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Prestigious Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-precedential-gold/10 border border-precedential-gold/20">
                <Scale className="w-8 h-8 text-precedential-gold" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Distinguished Legal <span className="text-gold-gradient">Heritage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established as Dubai's premier legal consultancy, we represent the pinnacle of legal excellence in the UAE, 
              serving discerning clients who demand nothing less than exceptional results.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-precedential-black">
                  Our Distinguished Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Precedential Law, our mission transcends conventional legal practice. We are dedicated to establishing 
                  new benchmarks in legal excellence, providing sophisticated counsel that protects and advances our clients' 
                  most critical interests within the dynamic landscape of UAE jurisprudence.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our approach combines deep understanding of UAE Federal Law, DIFC regulations, and ADGM frameworks with 
                  international best practices, ensuring our clients receive counsel that is both locally authoritative and 
                  globally sophisticated.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-precedential-black">
                  The Precedential Standard
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The name 'Precedential' embodies our unwavering commitment to setting new standards in legal practice. 
                  We don't merely follow established procedures—we create them, establishing precedents that define excellence 
                  in legal representation across the Emirates.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-precedential-gold mb-2">500+</div>
                    <div className="text-sm text-gray-600">Complex Cases Resolved</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-precedential-gold mb-2">15+</div>
                    <div className="text-sm text-gray-600">Years UAE Expertise</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-precedential-gold mb-2">AED 2B+</div>
                    <div className="text-sm text-gray-600">Assets Protected</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-precedential-gold mb-2">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values & Achievements */}
          <div>
            <h3 className="text-3xl font-playfair font-bold text-center mb-12">
              Pillars of <span className="text-gold-gradient">Excellence</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-precedential-gold/10 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-precedential-gold" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
