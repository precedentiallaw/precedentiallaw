
import React from 'react';
import { Shield, Users, Scale, Clock } from 'lucide-react';

const features = [
  {
    title: "Trusted",
    description: "Respected throughout the UAE legal community",
    icon: Shield,
  },
  {
    title: "Client-Focused",
    description: "Your success is our priority",
    icon: Users,
  },
  {
    title: "Transparent",
    description: "Clear communication and pricing",
    icon: Scale,
  },
  {
    title: "Experienced",
    description: "Years of proven expertise",
    icon: Clock,
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-precedential-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
          Why Choose <span className="text-gold-gradient">Precedential</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex flex-col items-center text-center p-6 glass-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-precedential-gold" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-precedential-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
