
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Scale, Home, Shield, Briefcase, Users, FileText, Gavel } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  index: number;
  premium?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index, premium = false }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in ${
        premium ? 'bg-gradient-to-br from-precedential-black to-slate-800 text-white border-2 border-precedential-gold' : 'glass-card'
      }`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {premium && (
        <div className="absolute top-4 right-4 bg-precedential-gold text-precedential-black text-xs px-2 py-1 rounded-full font-semibold">
          FLAGSHIP
        </div>
      )}
      
      <div className="p-8">
        <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${
          premium ? 'bg-precedential-gold text-precedential-black' : 'bg-precedential-gold/10'
        }`}>
          <Icon className={`w-8 h-8 ${premium ? 'text-precedential-black' : 'text-precedential-gold'}`} />
        </div>
        
        <h3 className="text-xl font-playfair font-bold mb-4">{title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${premium ? 'text-white/90' : 'text-precedential-black/70'}`}>
          {description}
        </p>
        
        <a 
          href="#contact" 
          className={`inline-flex items-center font-medium group transition-colors ${
            premium ? 'text-precedential-gold hover:text-precedential-goldLight' : 'text-precedential-gold hover:text-precedential-goldDark'
          }`}
        >
          Explore Practice Area
          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
      
      {/* Premium service overlay effect */}
      {premium && (
        <div className="absolute inset-0 bg-gradient-to-r from-precedential-gold/5 to-transparent pointer-events-none"></div>
      )}
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
            const cards = entry.target.querySelectorAll('.glass-card, .bg-gradient-to-br');
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
      title: "Complex Commercial Litigation",
      description: "Sophisticated representation in high-stakes commercial disputes, multi-jurisdictional conflicts, and complex contractual matters. Our expertise encompasses DIFC Courts, ADGM Courts, and UAE Federal Court systems.",
      icon: Building,
      premium: true
    },
    {
      title: "Corporate Law & M&A",
      description: "Strategic counsel for mergers, acquisitions, corporate restructuring, and sophisticated business transactions. We guide multinational corporations through complex UAE regulatory frameworks.",
      icon: Briefcase,
      premium: true
    },
    {
      title: "High-Value Real Estate",
      description: "Comprehensive legal services for luxury property transactions, commercial real estate investments, and complex development projects across Dubai's premier locations and free zones.",
      icon: Home
    },
    {
      title: "Family Wealth & Succession",
      description: "Discreet counsel on family law matters, sophisticated estate planning, and wealth preservation strategies. Specializing in DIFC Wills, guardianship arrangements, and cross-border family issues.",
      icon: Users
    },
    {
      title: "Regulatory Compliance",
      description: "Comprehensive guidance on UAE regulatory requirements, licensing, and compliance frameworks. Ensuring your business operations align with federal and emirate-specific regulations.",
      icon: Shield
    },
    {
      title: "Dispute Resolution",
      description: "Alternative dispute resolution through mediation, arbitration, and sophisticated negotiation strategies. Minimizing exposure while maximizing favorable outcomes.",
      icon: Scale
    },
    {
      title: "Banking & Finance Law",
      description: "Expert counsel on Islamic finance, conventional banking regulations, fintech compliance, and complex financial transactions within UAE's evolving financial landscape.",
      icon: FileText
    },
    {
      title: "Criminal Defense",
      description: "Vigorous representation in white-collar criminal matters, regulatory investigations, and complex criminal proceedings. Protecting reputations and securing favorable outcomes.",
      icon: Gavel
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Premium Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-precedential-gold blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-precedential-gold/10 border border-precedential-gold/20">
              <Scale className="w-8 h-8 text-precedential-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Distinguished Legal <span className="text-gold-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From sophisticated commercial litigation to complex family matters, our distinguished practice areas 
            represent the pinnacle of legal excellence in the UAE, delivering results that set new precedents 
            in client advocacy and protection.
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
              premium={service.premium}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Require Specialized Legal Counsel?
            </h3>
            <p className="text-gray-600 mb-6">
              Our distinguished practice extends beyond traditional boundaries. Contact us to discuss your unique legal requirements 
              and discover how our expertise can serve your specific needs.
            </p>
            <Button 
              onClick={() => window.location.href = "#contact"}
              className="bg-precedential-gold hover:bg-precedential-goldLight text-precedential-black px-8 py-6 text-base rounded-xl font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
