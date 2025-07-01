
import React from 'react';
import { ArrowRight, Shield, Award, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumHero: React.FC = () => {
  const trustIndicators = [
    { icon: Users, text: "Trusted by 500+ Clients" },
    { icon: Award, text: "Licensed UAE Practice" },
    { icon: Shield, text: "40+ Years Experience" }
  ];

  const keyServices = [
    "Family Law & Divorce",
    "Business & Commercial Law", 
    "Immigration & Visa Services",
    "Real Estate Transactions",
    "Civil Litigation",
    "Legal Consultation"
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
              <div key={index} className="flex items-center space-x-2 text-sm text-navy-600">
                <indicator.icon className="w-4 h-4 text-gold-600" />
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-8 leading-tight tracking-tight">
              Premier Legal 
              <span className="block text-gold-600">Consultancy</span>
              <span className="block text-4xl md:text-5xl font-medium text-navy-700 mt-4">
                in the UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Precedential Law delivers exceptional legal guidance for individuals, families, and businesses 
              across the UAE. Our mission is to provide clarity and confidence in navigating the region's legal landscape.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
              <Link
                to="/contact"
                className="btn-premium-large group"
              >
                <span>Schedule Legal Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+971509014120"
                className="btn-secondary-large"
              >
                Call +971 50 901 4120
              </a>
            </div>
          </div>

          {/* Services Preview */}
          <div className="card-premium p-12 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Star className="w-8 h-8 text-gold-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
                Comprehensive Legal Services
              </h3>
              <p className="text-lg text-navy-600">
                Expert counsel across all critical areas of UAE law
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-navy-50/50 hover:bg-gold-50/50 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="font-medium text-navy-800">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
