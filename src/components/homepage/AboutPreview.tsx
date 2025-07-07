
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                The Precedential Advantage
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Precedential Law was founded with a distinct vision: to establish a legal consultancy 
                in Dubai built on genuine partnership with clients. We prioritize clarity over complexity, 
                combining profound local expertise with international standards of service excellence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Deep UAE Expertise</h3>
                    <p className="text-slate-600">In-depth knowledge of local laws, regulations, and court practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Client-Centric Approach</h3>
                    <p className="text-slate-600">Your objectives are our priority. We tailor strategies to achieve optimal outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Commitment to Clarity</h3>
                    <p className="text-slate-600">We demystify complex legal issues, providing clear and actionable advice.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Why Clients Choose Precedential Law
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                  <div className="text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-slate-600 font-medium">Cases Handled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">24hr</div>
                  <div className="text-slate-600 font-medium">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-slate-600 font-medium">Confidential</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Licensed UAE Legal Practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
