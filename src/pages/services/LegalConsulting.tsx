import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ShieldCheck, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalConsulting: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Legal Consulting Services Dubai | Precedential Law</title>
        <meta
          name="description"
          content="Expert legal consulting in Dubai. Trusted advice and legal strategy for individuals, entrepreneurs, and businesses in the UAE."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/legal-consulting" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Legal Consulting in Dubai</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Personalized legal strategy, risk assessment, and compliance support tailored to your unique legal challenges in the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                Precedential Law provides strategic legal advice and consulting for individuals and businesses. Whether you’re navigating corporate structures, employment concerns, or local regulations, our licensed team offers reliable insight.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Business setup, licensing, contracts, and regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Confidential advisory for dispute prevention and resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gavel className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Tailored legal strategies for litigation or negotiation scenarios</span>
                </li>
              </ul>

              <p>
                Our consultants combine in-depth UAE law knowledge with international legal standards to offer meaningful legal clarity.
              </p>
            </div>

            {/* Right Column - Contact CTA */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Start with Expert Advice</h3>
              <p className="text-slate-600 mb-6">
                Book a confidential consultation to receive clear and effective legal direction from our Dubai-based team.
              </p>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Book a Legal Consultation
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

export default LegalConsulting;
