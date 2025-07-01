
import React from 'react';
import { Shield, Users, Scale, Clock, CheckCircle, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Deep UAE Expertise',
    description: 'Our team possesses in-depth, practical knowledge of local laws, regulations, and court practices.'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We listen attentively, understand your unique situation, and tailor our legal strategies to achieve optimal outcomes.'
  },
  {
    icon: Scale,
    title: 'Dubai Market Insight',
    description: 'We understand the specific challenges facing businesses and individuals within the dynamic Dubai market.'
  },
  {
    icon: Clock,
    title: 'Commitment to Clarity',
    description: 'We demystify complex legal issues and provide clear, actionable advice throughout the process.'
  },
  {
    icon: CheckCircle,
    title: 'Licensed Practice',
    description: 'Licensed legal consultancy in the UAE with bilingual support in English and Arabic.'
  },
  {
    icon: Star,
    title: 'The Precedential Standard',
    description: 'We uphold the highest benchmarks of integrity, professionalism, and dedication to achieving results.'
  }
];

const ModernWhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Precedential Law
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep legal expertise with a client-focused approach to deliver effective solutions for your unique legal needs in Dubai and across the UAE.
          </p>
        </div>

        <div className="grid-responsive">
          {features.map((feature) => (
            <div key={feature.title} className="card-clean p-8 text-center group hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernWhyChooseUs;
