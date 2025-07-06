import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Heart,
  Plane,
  Home,
  Scale,
  FileText,
  UserCheck,
  Briefcase,
  FileSignature
} from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Business & Commercial Law",
      description: "Company formation, contracts, regulatory compliance, and corporate governance for UAE businesses.",
      href: "/services/business-law"
    },
    {
      icon: Heart,
      title: "Family Law & Divorce",
      description: "Support for family matters, divorce proceedings, and child custody arrangements.",
      href: "/services/family-law"
    },
    {
      icon: Plane,
      title: "Immigration Law",
      description: "Visa applications, Golden Visa eligibility, residency permits, and immigration compliance.",
      href: "/services/immigration-law"
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Property transactions, rental disputes, lease agreements, and real estate compliance.",
      href: "/services/real-estate-law"
    },
    {
      icon: Scale,
      title: "Civil Litigation & Disputes",
      description: "Court representation and resolution for civil disputes, bounced cheques, debt claims, and rental disputes.",
      href: "/services/civil-litigation"
    },
    {
      icon: FileText,
      title: "Contract Disputes",
      description: "Analysis, negotiation, mediation, arbitration, or court action for contract enforcement.",
      href: "/services/contract-disputes"
    },
    {
      icon: UserCheck,
      title: "Personal Injury Claims",
      description: "Representation and compensation negotiation for accident and injury cases.",
      href: "/services/personal-injury"
    },
    {
      icon: FileSignature,
      title: "Wills & Power of Attorney",
      description: "Drafting and registration for wills, POAs, DIFC/ADGM wills, and estate planning.",
      href: "/services/will-writing"
    },
    {
      icon: FileText,
      title: "Legal Consulting",
      description: "Strategic legal advice, risk assessment, legal documentation, and compliance guidance.",
      href: "/services/legal-consulting"
    },
    {
      icon: Briefcase,
      title: "Legal Retainer",
      description: "Ongoing legal support and advisory services on a subscription basis.",
      href: "/services/legal-retainer"
    },
    {
      icon: FileSignature,
      title: "Document Creator",
      description: "Custom legal document creation — contracts, agreements, and more — tailored to your needs.",
      href: "/services/document-creator"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Our Comprehensive Legal Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            We offer a full suite of legal solutions—covering everything from consultancy, documentation & litigation, to retainers and automated services—tailored for the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow transition-shadow duration-200"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-slate-50 border border-slate-100 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Explore our services in detail—request a consultation, get your documents created, or start a legal retainer plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded transition">
                Contact Us
              </button>
            </Link>
            <Link to="/services">
              <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-6 py-2 rounded transition">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;