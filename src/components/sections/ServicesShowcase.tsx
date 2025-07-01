
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, FileText, Home, Gavel, Scale, ArrowRight, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Family Law',
    description: 'Comprehensive family law services including divorce, custody, inheritance, and personal status matters for expatriates and UAE nationals.',
    href: '/services/family-law',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building,
    title: 'Business & Commercial Law',
    description: 'Corporate legal services, contract formation, compliance guidance, and business formation for companies operating in the UAE.',
    href: '/services/business-law',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: FileText,
    title: 'Immigration Law',
    description: 'Visa applications, residency permits, golden visa eligibility, and comprehensive immigration support services.',
    href: '/services/immigration-law',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Property transactions, lease agreements, rental disputes, and comprehensive real estate legal guidance.',
    href: '/services/real-estate-law',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Gavel,
    title: 'Civil Litigation',
    description: 'Court representation, dispute resolution, and comprehensive litigation support in UAE courts.',
    href: '/services/civil-litigation',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Scale,
    title: 'Legal Consultation',
    description: 'Expert legal advice and strategic counsel for all personal and business legal matters in the UAE.',
    href: '/legal-consultation-dubai',
    color: 'from-gold-500 to-gold-600'
  }
];

const ServicesShowcase: React.FC = () => {
  return (
    <section className="section-premium bg-gradient-to-b from-white to-navy-50/30" id="services">
      <div className="container-premium">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 mb-8">
            <Briefcase className="w-8 h-8 text-gold-600" />
          </div>
          <h2 className="heading-premium mb-8">
            Expert Legal Services
          </h2>
          <p className="text-xl md:text-2xl text-navy-600 max-w-4xl mx-auto leading-relaxed font-light">
            We offer comprehensive legal counsel across all critical areas of UAE law, 
            providing strategic guidance for individuals and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="card-premium-hover p-10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-navy-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                to={service.href}
                className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="btn-premium-outline"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
