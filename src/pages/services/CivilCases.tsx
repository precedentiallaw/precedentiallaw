import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Gavel, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CivilCases: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Civil Case Lawyers Dubai | Civil Litigation UAE | Precedential Law</title>
        <meta
          name="description"
          content="Professional representation for civil case disputes in the UAE. Precedential Law provides expert litigation support in Dubai for individuals and businesses."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/civil-cases" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Civil Case Representation</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Precedential Law offers comprehensive support for civil disputes, representing clients in UAE courts with clarity, professionalism, and strategic insight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Legal Info */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                Civil litigation in the UAE can involve a broad range of legal issues—from contract breaches to defamation and property disputes. At Precedential Law, we provide:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Representation before Dubai Courts and relevant UAE judicial bodies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gavel className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Dispute resolution for commercial, real estate, employment, and personal matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Client-first strategy focused on settlement or litigation success</span>
                </li>
              </ul>
              <p>
                Whether you are an individual or a business, our lawyers tailor the legal process to your goals—ensuring full understanding of your case and options.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Get Expert Civil Case Advice</h3>
              <p className="text-slate-600 mb-6">
                Our experienced legal team is ready to protect your interests and provide clear direction on your UAE civil matter.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Request Legal Consultation
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

export default CivilCases;
