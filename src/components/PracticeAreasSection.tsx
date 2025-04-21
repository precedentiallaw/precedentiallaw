
import React, { useRef, useEffect } from 'react';

interface PracticeAreaCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="opacity-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="h-2 gold-gradient"></div>
      <div className="p-6">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-playfair font-bold mb-3">{title}</h3>
        <p className="text-precedential-black/70 text-sm mb-4">{description}</p>
        <a 
          href="#contact" 
          className="text-sm inline-flex items-center font-medium text-precedential-gold group-hover:text-precedential-goldDark transition-colors"
        >
          Learn More 
          <svg 
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const PracticeAreasSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const titleElement = sectionRef.current?.querySelector('.section-title');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  const practiceAreas = [
    {
      title: "Corporate & Commercial Law",
      description: "Comprehensive legal guidance for businesses operating in the UAE, including company formation, contracts, and commercial disputes.",
      icon: "🏢"
    },
    {
      title: "Litigation & Dispute Resolution",
      description: "Expert representation in civil, commercial, and criminal litigation across UAE courts and arbitration centers.",
      icon: "⚖️"
    },
    {
      title: "Real Estate & Construction",
      description: "Legal services for property transactions, development projects, and construction-related disputes in Dubai's dynamic market.",
      icon: "🏗️"
    },
    {
      title: "Family & Personal Status",
      description: "Sensitive handling of family matters including divorce, custody, inheritance and personal status issues under UAE law.",
      icon: "👪"
    },
    {
      title: "Intellectual Property",
      description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets in the UAE and internationally.",
      icon: "💡"
    },
    {
      title: "Banking & Finance",
      description: "Legal advice on banking regulations, financial transactions, Islamic finance, and compliance with UAE financial laws.",
      icon: "💰"
    },
    {
      title: "Employment & Labor",
      description: "Guidance on employment contracts, labor disputes, visa issues, and compliance with UAE labor regulations.",
      icon: "👨‍💼"
    },
    {
      title: "Criminal Defense",
      description: "Strong defense strategies for individuals and businesses facing criminal allegations in the UAE legal system.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="practice-areas" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 section-title">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Our <span className="text-gold-gradient">Practice</span> Areas
          </h2>
          <p className="text-precedential-black/70">
            Specialized legal expertise across multiple disciplines to address your complex legal challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard 
              key={area.title}
              title={area.title}
              description={area.description}
              icon={area.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
