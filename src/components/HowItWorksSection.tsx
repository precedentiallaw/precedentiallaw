
import React from 'react';
import { MessageCircle, Calendar, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: MessageCircle,
    title: 'Initial Consultation',
    description: 'Contact us to discuss your legal needs. We offer confidential consultations to understand your situation.'
  },
  {
    icon: Calendar,
    title: 'Case Assessment',
    description: 'Our legal experts analyze your case and develop a strategic approach tailored to your specific requirements.'
  },
  {
    icon: Scale,
    title: 'Legal Resolution',
    description: 'We provide expert representation and guidance throughout the process to achieve the best possible outcome.'
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you receive professional legal support every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 bg-white" />
                </div>
              )}
              <div className="relative z-10">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Speak to a Legal Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
