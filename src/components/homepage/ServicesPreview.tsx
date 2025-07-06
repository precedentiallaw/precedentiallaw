
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Heart, Plane, Home, Scale, FileText } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: "Business & Commercial Law",
      description: "Company formation, contracts, regulatory compliance, and corporate governance for UAE businesses.",
      href: "/services/business-law"
    },
    {
      icon: Heart,
      title: "Family Law & Divorce",
      description: "Sensitive legal support for family matters, divorce proceedings, and child custody arrangements.",
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
      title: "Civil Litigation",
      description: "Expert court representation, dispute resolution, and civil case management in UAE courts.",
      href: "/services/civil-cases"
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Professional drafting of wills, power of attorney, contracts, and legal agreements.",
      href: "/services/legal-consulting"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Legal Services Tailored for Dubai
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer expert legal counsel across a wide range of practice areas critical 
            to individuals and businesses succeeding in the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Need Legal Guidance? We're Here to Help
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Every legal situation is unique. Let our experienced team provide personalized 
            advice tailored to your specific needs and circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
