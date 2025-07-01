
import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernHeroSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 md:mb-12 text-xs md:text-sm text-navy-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gold-600" />
              <span>Trusted by Expats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-gold-600" />
              <span>Licensed UAE Practice</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-gold-600" />
              <span>40+ Years Experience</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 md:mb-8 leading-tight">
            Trusted Legal Consultancy in the <span className="text-gold-600">UAE</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            At Precedential Law, we provide reliable and personalized legal guidance for individuals, families, and businesses across the UAE. As a leading legal consultancy in Dubai, our mission is to help expatriates and UAE nationals navigate the region's legal landscape with clarity and confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 md:mb-16">
            <Link
              to="/contact"
              className="btn-primary flex items-center space-x-2 text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              <span>Book a Legal Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+971509014120"
              className="btn-secondary flex items-center space-x-2 text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              <span>Call +971 50 901 4120</span>
            </a>
          </div>

          {/* Key Services Grid */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 max-w-6xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-6 md:mb-8 text-center">
              Our Legal Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Family Law</h4>
                  <p className="text-sm text-gray-600">Divorce, custody, inheritance, and personal status matters</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Immigration Law</h4>
                  <p className="text-sm text-gray-600">Visa applications, golden visa eligibility, legal residency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Business Law</h4>
                  <p className="text-sm text-gray-600">Contract formation, compliance, company setup</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Real Estate Law</h4>
                  <p className="text-sm text-gray-600">Property disputes, lease agreements, transactions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Civil Litigation</h4>
                  <p className="text-sm text-gray-600">Dispute resolution and UAE court representation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Legal Consultation</h4>
                  <p className="text-sm text-gray-600">Expert advice on UAE legal matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
