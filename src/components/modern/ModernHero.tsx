
import React from 'react';
import { ArrowRight, Shield, Users, Scale, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernHero: React.FC = () => {
  const trustIndicators = [
    { icon: Users, label: "500+ Clients Served" },
    { icon: Scale, label: "Licensed UAE Practice" },
    { icon: Shield, label: "95% Success Rate" }
  ];

  const keyServices = [
    "Business & Commercial Law",
    "Family Law & Divorce",
    "Immigration & Visa Services",
    "Real Estate Transactions",
    "Civil Litigation"
  ];

  return (
    <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
              <Shield className="w-4 h-4 mr-2" />
              Premier Legal Consultancy in Dubai
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted
                <span className="text-amber-600 block">Legal Shield</span>
                in Dubai
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Navigate UAE's legal landscape with confidence. Expert guidance for expatriates, 
                families, and businesses seeking clarity, protection, and results.
              </p>
            </div>

            {/* Key Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Expertise:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 px-8 py-4 text-lg font-semibold"
              >
                Call: +971 50 901 4120
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {trustIndicators.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              {/* Consultation Form Preview */}
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Free Legal Consultation</h3>
                  <p className="text-gray-600">Get expert advice tailored to your situation</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Legal Matter</label>
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description</label>
                    <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    Schedule Consultation
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>✓ Confidential & Free</p>
                  <p>✓ Response within 24 hours</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
