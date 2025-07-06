
import React from 'react';
import { Building2, Heart, Plane, Home, Scale, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernServices: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: "Business & Commercial Law",
      description: "Company formation, contracts, compliance, and corporate governance for UAE businesses.",
      features: ["Company Setup", "Contract Drafting", "Regulatory Compliance", "Mergers & Acquisitions"],
      color: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Family Law & Divorce",
      description: "Sensitive legal support for family matters, divorce proceedings, and child custody.",
      features: ["Divorce Proceedings", "Child Custody", "Prenuptial Agreements", "Inheritance Planning"],
      color: "text-rose-600"
    },
    {
      icon: Plane,
      title: "Immigration & Visa Services",
      description: "Comprehensive visa applications, residency permits, and Golden Visa eligibility.",
      features: ["Golden Visa", "Residence Permits", "Visa Applications", "Sponsorship Support"],
      color: "text-purple-600"
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Property transactions, lease agreements, and Dubai rental dispute resolution.",
      features: ["Property Transactions", "Lease Agreements", "Rental Disputes", "RERA Compliance"],
      color: "text-green-600"
    },
    {
      icon: Scale,
      title: "Civil Litigation",
      description: "Expert representation in civil disputes and UAE court proceedings.",
      features: ["Court Representation", "Dispute Resolution", "Debt Recovery", "Contract Disputes"],
      color: "text-indigo-600"
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Professional drafting of wills, power of attorney, and legal agreements.",
      features: ["Will Writing", "Power of Attorney", "Legal Agreements", "Document Review"],
      color: "text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Legal Services
            <span className="text-amber-600 block">Tailored for Dubai</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From business formation to family matters, we provide expert legal guidance 
            across all areas critical to your success in the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-amber-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Need Legal Guidance? We're Here to Help
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every legal situation is unique. Let our experienced team provide personalized 
            advice tailored to your specific needs and circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
