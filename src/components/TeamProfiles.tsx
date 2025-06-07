
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Users, Globe } from 'lucide-react';

const TeamProfiles: React.FC = () => {
  return (
    <section className="py-16 bg-precedential-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Our <span className="text-gold-gradient">Legal Team</span>
          </h2>
          <p className="text-lg text-precedential-black/70 max-w-2xl mx-auto mb-8">
            Our experienced legal professionals bring decades of combined expertise in UAE law to protect and serve your interests with proven dedication and results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">Experienced Legal Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Star className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">Proven Track Record</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">UAE Legal Expertise</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Globe className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">Multilingual Support</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-playfair font-bold mb-6 text-center">Professional Legal Excellence</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 text-precedential-gold mr-2" />
                Our Expertise Areas
              </h4>
              <ul className="space-y-2 text-precedential-black/70">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-precedential-gold rounded-full mr-3"></div>
                  Commercial & Business Law
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-precedential-gold rounded-full mr-3"></div>
                  Family Law & Personal Status
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-precedential-gold rounded-full mr-3"></div>
                  Real Estate & Property Law
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-precedential-gold rounded-full mr-3"></div>
                  Civil Litigation & Disputes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-precedential-gold rounded-full mr-3"></div>
                  Immigration & Visa Services
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Globe className="w-5 h-5 text-precedential-gold mr-2" />
                Languages Supported
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {['English', 'Arabic', 'Hindi', 'Urdu', 'French', 'Russian'].map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs border-precedential-gold/30 text-precedential-black/70">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-precedential-offWhite p-6 rounded-lg">
            <p className="text-precedential-black/70 mb-6">
              Our legal team consists of qualified professionals with extensive experience in UAE law and procedures. We maintain strict confidentiality and provide personalized attention to each client's unique legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-precedential-gold text-precedential-black font-medium rounded-lg hover:bg-precedential-goldLight transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="https://wa.me/971509014120" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-precedential-gold text-precedential-gold font-medium rounded-lg hover:bg-precedential-gold hover:text-precedential-black transition-colors"
              >
                WhatsApp: +971 50 901 4120
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
