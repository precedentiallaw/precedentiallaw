import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BouncedCheque: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bounced Cheque Legal Help | Precedential Law Dubai</title>
        <meta
          name="description"
          content="Facing bounced cheque charges in the UAE? Precedential Law offers expert legal support for cheque-related offenses under new UAE laws."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/bounced-cheque" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Bounced Cheque Legal Services</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understand your rights and obligations under updated UAE cheque laws. We offer
              legal clarity, protection, and representation.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text Info */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                Cheque bounce cases are taken seriously in the UAE, but recent reforms have
                introduced new procedures and reduced the criminal penalties for many cases.
                At Precedential Law, we help clients resolve cheque disputes efficiently and
                legally — whether you’re the issuer or the recipient.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Legal representation in police or court cases</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Defense for falsely accused or delayed payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Guidance on new 2022 Federal Decree Law No. 14 amendments</span>
                </li>
              </ul>

              <p>
                We’ll help you understand your options, avoid escalation, and resolve the
                matter either through court or alternative dispute channels.
              </p>
            </div>

            {/* Right: Contact Box */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Need Help Now?</h3>
              <p className="text-slate-600 mb-6">
                Schedule a confidential consultation with our legal experts today.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Request Consultation
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

export default BouncedCheque;
