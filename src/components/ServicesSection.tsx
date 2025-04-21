
import React, { useRef, useEffect } from 'react';

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
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses, from startups to multinational corporations operating in the UAE.",
      icon: "🏢"
    },
    {
      title: "Litigation",
      description: "Expert representation in courts across the UAE, ensuring your legal rights are protected at every stage.",
      icon: "⚖️"
    },
    {
      title: "Real Estate Law",
      description: "Navigate complex property transactions and disputes with our specialized real estate legal expertise.",
      icon: "🏗️"
    },
    {
      title: "Family Law",
      description: "Sensitive and professional handling of family matters, including divorce, custody and inheritance issues.",
      icon: "👪"
    },
    {
      title: "Intellectual Property",
      description: "Protect your innovations and creative works with our comprehensive IP registration and enforcement services.",
      icon: "💡"
    },
    {
      title: "Criminal Defense",
      description: "Strong defense strategies and representation for those facing criminal charges in the UAE legal system.",
      icon: "🛡️"
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Our <span className="text-gold-gradient">Premium</span> Legal Services
          </h2>
          <p className="text-precedential-black/70">
            Accessible legal protection with impact. We provide comprehensive legal solutions tailored to your specific needs.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      </div>
    </section>
  );
};

export default ServicesSection;
