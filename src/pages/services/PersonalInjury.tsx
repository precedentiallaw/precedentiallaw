import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeartPulse, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalInjury: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Personal Injury Lawyers in Dubai | Precedential Law</title>
        <meta
          name="description"
          content="Injured due to negligence in the UAE? Precedential Law helps you pursue compensation for personal injury, accidents, and liability claims."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/personal-injury" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Personal Injury Claims</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              If you've suffered harm due to someone else's negligence, our expert legal team
              can help you claim rightful compensation and protect your rights.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                Precedential Law provides legal representation for clients involved in
                personal injury cases — from road traffic accidents and medical negligence
                to workplace injuries and public liability disputes.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Injury compensation and medical expense recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Legal guidance under UAE Civil Code and liability laws</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Confidential handling of sensitive health-related cases</span>
                </li>
              </ul>

              <p>
                We understand the emotional and financial toll these cases can take — that’s
                why we advocate strongly for justice, accountability, and compensation.
              </p>
            </div>

            {/* Right: Contact Box */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Speak with an Injury Lawyer</h3>
              <p className="text-slate-600 mb-6">
                Your case matters. Book a consultation to explore your options.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Book Consultation
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

export default PersonalInjury;
