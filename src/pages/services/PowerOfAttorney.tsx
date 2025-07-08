import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, PenLine, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PowerOfAttorney: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Power of Attorney Services in Dubai | Precedential Law</title>
        <meta
          name="description"
          content="Draft, legalize, and register Power of Attorney (POA) documents in Dubai and the UAE. Precedential Law offers bilingual support and full legal compliance."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/power-of-attorney" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Power of Attorney (POA) Drafting & Legalization</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Precedential Law provides comprehensive Power of Attorney services to ensure your legal rights and responsibilities are protected across the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Legal Info */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                We draft and legalize POAs for personal, business, property, and family-related matters—ensuring your documents are valid and recognized by Dubai Notary Public.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Special POA and General POA drafting with bilingual (Arabic + English) text</span>
                </li>
                <li className="flex items-start gap-3">
                  <PenLine className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Remote POA execution for overseas clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Legal translation, notarization, and court registration handled end-to-end</span>
                </li>
              </ul>
              <p>
                Whether you need a POA for property transfer, family affairs, or business matters, our legal consultants make the process seamless and secure.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Speak to Our POA Experts</h3>
              <p className="text-slate-600 mb-6">
                Protect your interests with a professionally drafted and registered Power of Attorney.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Schedule a POA Consultation
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
    </>
  );
};

export default PowerOfAttorney;
