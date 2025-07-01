
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Users, Building, Home, Gavel, FileText, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Family Law',
    description: 'Comprehensive family law services including divorce, custody, and inheritance matters.',
    href: '/services/family-law'
  },
  {
    icon: Building,
    title: 'Business & Commercial Law',
    description: 'Corporate legal services, contracts, compliance, and business formation.',
    href: '/services/business-law'
  },
  {
    icon: FileText,
    title: 'Immigration Law',
    description: 'Visa applications, residency permits, and golden visa eligibility.',
    href: '/services/immigration-law'
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Property transactions, lease agreements, and real estate disputes.',
    href: '/services/real-estate-law'
  },
  {
    icon: Gavel,
    title: 'Civil Litigation',
    description: 'Court representation and dispute resolution services.',
    href: '/services/civil-litigation'
  },
  {
    icon: Scale,
    title: 'Legal Consultation',
    description: 'Expert legal advice and strategic counsel for all matters.',
    href: '/legal-consultation-dubai'
  }
];

const ModernServicesSection: React.FC = () => {
  return (
    <section className="section-padding bg-section" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer expert legal counsel across a wide range of practice areas critical to individuals and businesses succeeding in the UAE.
          </p>
        </div>

        <div className="grid-responsive mb-12">
          {services.map((service) => (
            <div key={service.title} className="card-clean p-8 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <service.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.href}
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
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
            className="btn-primary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModernServicesSection;
