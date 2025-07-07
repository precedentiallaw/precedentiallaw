import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Scale, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Licensed UAE Practice</span>
            </div>
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Expert Legal Counsel</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-amber-600" />
              <span>Serving Dubai & UAE</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Setting a <span className="text-amber-600">Precedential Standard</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Your Shield in the UAE Legal Landscape — Strategic legal guidance for individuals, families, and businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg text-base font-medium transition">
                Request Confidential Consultation
              </button>
            </Link>
            <a href="tel:+971509014120">
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg text-base font-medium transition flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call +971 50 901 4120
              </button>
            </a>
          </div>

          {/* Quick Services Grid */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Our Legal Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left text-sm text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-900">Business & Commercial</h3>
                <p>Company formation, contracts, compliance</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Family & Divorce Law</h3>
                <p>Custody, separation, inheritance law</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Immigration & Residency</h3>
                <p>Visa applications, Golden Visa, UAE entry</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Real Estate Disputes</h3>
                <p>Rental, sales, and property transactions</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Civil Litigation</h3>
                <p>UAE court representation, dispute resolution</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Criminal Advisory</h3>
                <p>Legal defense and expert guidance</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
