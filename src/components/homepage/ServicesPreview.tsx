import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, Home, UserCheck, Globe2, ShieldCheck, Scale,
  Landmark, Users2, Building2, Gavel
} from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-6 h-6 text-amber-600" />,
    title: 'Business Law',
    description: 'Company formation, contracts, corporate compliance.',
    link: '/services/business-law',
  },
  {
    icon: <UserCheck className="w-6 h-6 text-amber-600" />,
    title: 'Family Law',
    description: 'Divorce, custody, inheritance, and personal status.',
    link: '/services/family-law',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-amber-600" />,
    title: 'Immigration Law',
    description: 'Visas, Golden Visa, legal residency solutions.',
    link: '/services/immigration-law',
  },
  {
    icon: <Home className="w-6 h-6 text-amber-600" />,
    title: 'Real Estate Law',
    description: 'Property disputes, leases, transactions.',
    link: '/services/real-estate-law',
  },
  {
    icon: <Scale className="w-6 h-6 text-amber-600" />,
    title: 'Civil Litigation',
    description: 'UAE court disputes, representation, settlements.',
    link: '/services/civil-cases',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    title: 'Criminal Defense',
    description: 'Advisory legal protection and defense strategy.',
    link: '/services/criminal-defense',
  },
];

const clients = [
  {
    icon: <Users2 className="w-6 h-6 text-amber-600" />,
    title: 'Expat Residents',
    text: 'Navigating family matters, visas, property, or disputes.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-amber-600" />,
    title: 'Business Owners',
    text: 'Corporate setup, shareholder agreements, and contracts.',
  },
  {
    icon: <Landmark className="w-6 h-6 text-amber-600" />,
    title: 'UAE Nationals',
    text: 'Legal clarity with bilingual services and strategic guidance.',
  },
  {
    icon: <Gavel className="w-6 h-6 text-amber-600" />,
    title: 'Litigation Clients',
    text: 'Facing civil, commercial, or criminal legal disputes.',
  },
];

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Services Grid */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Legal Services</h2>
          <p className="text-slate-600 text-lg">
            Expert legal support for life and business in the UAE — from startups to family matters and litigation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              aria-label={`Learn more about ${service.title}`}
              className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Who We Help */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Who We Help</h2>
          <p className="text-slate-600">
            Tailored legal support for expats, entrepreneurs, families, and UAE nationals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm"
            >
              <div className="flex justify-center mb-3">{client.icon}</div>
              <h4 className="font-semibold text-slate-800 mb-1">{client.title}</h4>
              <p className="text-sm text-slate-600">{client.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
