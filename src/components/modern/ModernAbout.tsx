
import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const ModernAbout: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Client Protection First",
      description: "We serve as your legal shield, standing between you and complex legal challenges."
    },
    {
      icon: Award,
      title: "Excellence & Integrity",
      description: "Unwavering ethical standards and pursuit of the highest quality legal solutions."
    },
    {
      icon: Users,
      title: "Dubai Market Expertise",
      description: "Deep understanding of UAE laws and the unique challenges facing expatriates."
    },
    {
      icon: Clock,
      title: "Clarity & Communication",
      description: "We demystify complex legal matters and keep you informed every step of the way."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Cases Handled" },
    { number: "95%", label: "Success Rate" },
    { number: "24hr", label: "Response Time" }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Setting a Precedential Standard
            <span className="text-amber-600 block">in Legal Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded on the principle of putting clients first, Precedential Law combines 
            deep UAE legal expertise with international standards of service excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Your Trusted Legal Partners in Dubai
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Precedential Law, we understand that navigating the UAE's legal landscape 
                  can be complex and overwhelming. That's why we've built our practice around 
                  one simple principle: being your trusted shield in every legal matter.
                </p>
                <p>
                  Our team combines years of UAE legal experience with a genuine commitment 
                  to client success. We don't just provide legal advice – we become your 
                  strategic partners, working tirelessly to protect your interests and 
                  achieve your objectives.
                </p>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Why Clients Choose Us:</h4>
              <div className="space-y-3">
                {[
                  "Licensed legal practice with bilingual support (English & Arabic)",
                  "Specialized expertise in expatriate legal matters",
                  "Transparent pricing with no hidden fees",
                  "24-hour response guarantee for urgent matters",
                  "Proven track record with 95% client satisfaction"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Track Record</h4>
                <p className="text-gray-600">Numbers that speak to our commitment</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-center text-gray-600 mt-2 text-sm">
                  Rated 5/5 by our clients
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <value.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
