
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Don't navigate complex legal challenges alone. Contact Precedential Law today 
              for expert legal services in Dubai. We offer confidential consultations to understand 
              your situation and explore how our dedicated team can help you achieve your objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                  Get Legal Support Now
                </Button>
              </Link>
              <a href="tel:+971509014120">
                <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-50 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                <a href="tel:+971509014120" className="text-slate-600 hover:text-amber-600 transition-colors">
                  +971 50 901 4120
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                <a href="mailto:info@precedentiallaw.com" className="text-slate-600 hover:text-amber-600 transition-colors">
                  info@precedentiallaw.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Office</h3>
                <p className="text-slate-600">
                  City Tower 2, Sheikh Zayed Road<br />
                  Trade Centre, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
