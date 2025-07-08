import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WillWriting: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Will Writing Services in Dubai | Precedential Law</title>
        <meta
          name="description"
          content="Expert will drafting and registration services for UAE residents and expats. Precedential Law offers secure, bilingual legal will guidance in Dubai."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/will-writing" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Will Drafting & Legal Succession</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ensure your assets and family are protected through properly executed Wills compliant with UAE laws. Our bilingual experts guide you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Legal Info */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                Precedential Law helps expats and UAE nationals create legally binding Wills tailored to their faith, family structure, and asset portfolio. We assist with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Drafting English and Arabic Wills per Dubai Courts & DIFC standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Sharia-compliant Will options for Muslim clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Appointing guardians and assigning estate beneficiaries legally</span>
                </li>
              </ul>
              <p>
                We work with Dubai Notary Public and DIFC Wills Centre to ensure your Will is enforceable, translated, and registered.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Start Your Will with Legal Confidence</h3>
              <p className="text-slate-600 mb-6">
                Get tailored legal assistance and bilingual support for securing your family’s future.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Request Will Consultation
                </Link>
                <a
                  href="tel:+971509014120"
                  className="block text-center border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition"
                >
                  Call: +971 50 901 4120
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WillWriting;
