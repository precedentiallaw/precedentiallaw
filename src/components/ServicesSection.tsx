
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <div 
      className="glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-precedential-gold/10 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center gold-gradient text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-bold mb-3">{title}</h3>
      <p className="text-precedential-black/70">{description}</p>
      <a 
        href="#contact" 
        className="mt-4 inline-block text-precedential-gold hover:text-precedential-goldDark font-medium group"
      >
        Learn More
        <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.glass-card');
            cards.forEach((card) => card.classList.add('animate-fade-in'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Commercial & Business Law",
      description: "Expert legal guidance for business formation, contracts, compliance, and corporate governance in Dubai's dynamic commercial environment.",
      icon: "🏢"
    },
    {
      title: "Family Law & Wills",
      description: "Compassionate legal support for divorce, custody, inheritance, and succession planning that protects your family's interests.",
      icon: "👪"
    },
    {
      title: "Real Estate Law",
      description: "Navigate property transactions, leasing disputes, development contracts, and regulatory compliance with expert legal guidance.",
      icon: "🏗️"
    },
    {
      title: "Debt Settlement & Civil Litigation",
      description: "Strategic representation for debt resolution, contract disputes, and civil claims to protect your financial interests.",
      icon: "⚖️"
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Comprehensive Legal Services <span className="text-gold-gradient">Tailored for Dubai</span>
          </h2>
          <p className="text-precedential-black/70">
            From business protection to personal matters, our legal team delivers the expertise, clarity, and results that Dubai's unique landscape demands.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={() => window.location.href = "#practice-areas"}
            className="bg-precedential-black hover:bg-precedential-black/90 text-white px-8 py-6 text-base rounded-xl"
          >
            Explore All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
