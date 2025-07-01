
import React from 'react';
import { ArrowRight, Shield, Award, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumHero: React.FC = () => {
  const trustIndicators = [
    { icon: Users, text: "Trusted by Expats" },
    { icon: Award, text: "Licensed UAE Practice" },
    { icon: Shield, text: "Bilingual Support" }
  ];

  const keyServices = [
    { name: "Family Law", description: "Including divorce, custody, inheritance, and personal status matters", href: "/services/family-law" },
    { name: "Immigration Law", description: "Visa applications, golden visa eligibility, and legal residency", href: "/services/immigration-law" },
    { name: "Business & Commercial Law", description: "Contract formation, compliance, company setup", href: "/services/business-law" },
    { name: "Real Estate Law", description: "Property disputes, lease agreements, and transactions", href: "/services/real-estate-law" },
    { name: "Civil Litigation", description: "Dispute resolution and representation in UAE courts", href: "/services/civil-litigation" }
  ];

  const whyChooseUs = [
    "Licensed legal consultancy in the UAE",
    "Bilingual support (English + Arabic)",
    "Transparent legal processes",
    "Trusted by expats and corporate clients"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-gold-50/30"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold-400 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-navy-400 blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container-premium relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 opacity-80">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-navy-700 font-medium">
                <indicator.icon className="w-4 h-4 text-gold-600" />
                <span>{indicator.text}</span>
              </div>
            ))}
          </div>

          {/* Main Heading - SEO Optimized */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-8 leading-tight tracking-tight">
              Trusted Legal 
              <span className="block text-gold-600">Consultancy</span>
              <span className="block text-4xl md:text-5xl font-medium text-navy-800 mt-4">
                in the UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Precedential Law, we provide reliable and personalized legal guidance for individuals, families, and businesses 
              across the UAE. As a leading <Link to="/services" className="text-gold-600 hover:text-gold-700 underline">legal consultancy</Link> in Dubai, 
              our mission is to help expatriates and UAE nationals navigate the region's legal landscape with clarity and confidence.
            </p>

            <div className="text-left max-w-4xl mx-auto mb-8">
              <p className="text-lg text-navy-700 mb-6 font-medium">Our experienced legal consultants offer tailored solutions in:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {keyServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white/80 hover:bg-gold-50/50 transition-colors duration-300 border border-navy-100">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to={service.href} className="font-semibold text-navy-900 hover:text-gold-600 transition-colors">
                        {service.name}
                      </Link>
                      <p className="text-navy-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy-50 border border-navy-200 rounded-xl p-6 mb-8">
                <h3 className="text-gold-600 font-bold text-xl mb-4">Why Choose Precedential Law:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <span className="text-navy-800">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <Link
                to="/contact"
                className="btn-premium-large group bg-gold-600 hover:bg-gold-700 text-white"
              >
                <span>Request Your Confidential Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+971509014120"
                className="btn-secondary-large text-navy-800 border-navy-300 hover:border-gold-500 hover:text-gold-600"
              >
                Call +971 50 901 4120
              </a>
            </div>

            {/* External Link */}
            <div className="text-center">
              <a 
                href="https://u.ae/en/information-and-services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-navy-600 hover:text-gold-600 underline text-sm"
              >
                UAE Government Services Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
