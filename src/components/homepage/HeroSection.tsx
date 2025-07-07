
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Scale, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Setting a Precedential Standard
            <span className="text-amber-600 block">in Legal Services</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your Shield in Dubai's Legal Landscape. Expert guidance, clear solutions, 
            and client protection for individuals and businesses across the UAE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                Request Confidential Consultation
              </Button>
            </Link>
            <a href="tel:+971509014120">
              <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call +971 50 901 4120
              </Button>
            </a>
          </div>

          {/* Key Services Preview */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
              Comprehensive Legal Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Business & Commercial Law</h3>
                <p className="text-sm text-slate-600">Company formation, contracts, compliance</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Family Law & Divorce</h3>
                <p className="text-sm text-slate-600">Divorce proceedings, custody, inheritance</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Immigration Law</h3>
                <p className="text-sm text-slate-600">Visa applications, Golden Visa, residency</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Real Estate Law</h3>
                <p className="text-sm text-slate-600">Property disputes, rental issues, transactions</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Civil Litigation</h3>
                <p className="text-sm text-slate-600">Court representation, dispute resolution</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-2">Criminal Defense</h3>
                <p className="text-sm text-slate-600">Legal representation, case advisory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
