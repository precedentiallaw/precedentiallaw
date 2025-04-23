
import React from 'react';
import { Shield, Users, Scale, Clock, Check } from 'lucide-react';

const features = [
  {
    title: "Deep UAE Expertise",
    description: "Our team possesses in-depth, practical knowledge of local laws, regulations, and court practices, ensuring informed and effective strategies.",
    icon: Shield,
  },
  {
    title: "Client-Centric Approach",
    description: "Your objectives are our priority. We listen attentively, understand your unique situation, and tailor our legal strategies to achieve optimal outcomes.",
    icon: Users,
  },
  {
    title: "Dubai Market Insight",
    description: "We possess a keen understanding of the specific challenges and opportunities facing businesses and individuals within the dynamic Dubai market.",
    icon: Scale,
  },
  {
    title: "Commitment to Clarity",
    description: "We cut through legal jargon, demystifying complex issues and providing clear, actionable advice, ensuring you are empowered throughout the process.",
    icon: Clock,
  },
  {
    title: "The Precedential Standard",
    description: "We uphold the highest benchmarks of integrity, professionalism, and dedication to achieving positive results for our clients.",
    icon: Check,
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-precedential-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
          The Precedential Advantage: <span className="text-gold-gradient">Why Clients Trust Us</span>
        </h2>
        
        <p className="text-precedential-black/80 text-center max-w-3xl mx-auto mb-12">
          We combine deep legal expertise with a client-focused approach to deliver effective solutions for your unique legal needs in Dubai and across the UAE.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex flex-col p-6 glass-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-4">
                  <feature.icon className="w-5 h-5 text-precedential-gold" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <p className="text-precedential-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
