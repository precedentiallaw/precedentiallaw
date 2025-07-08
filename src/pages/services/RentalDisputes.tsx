import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, Scale, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const RentalDisputes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rental Dispute Lawyers in Dubai | Precedential Law</title>
        <meta
          name="description"
          content="Resolve rental and tenancy disputes in Dubai through expert legal advice and RDC representation. Precedential Law handles eviction, non-payment, and landlord-tenant disputes."
        />
        <link rel="canonical" href="https://precedentiallaw.com/services/rental-disputes" />
      </Helmet>

      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Rental & Tenancy Disputes</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Navigate the Rental Dispute Centre (RDC) and Dubai tenancy laws with confidence.
              Whether you're a landlord or a tenant, our legal team ensures your rights are protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Legal Info */}
            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <p>
                Dubai’s real estate landscape can often result in disagreements between landlords
                and tenants. At Precedential Law, we offer professional assistance in resolving:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Eviction notices and renewal disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gavel className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Security deposit and non-payment conflicts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-amber-600 mt-1" />
                  <span>Representation before the Dubai Rental Dispute Centre (RDC)</span>
                </li>
              </ul>

              <p>
                Our legal consultants provide guidance on Decree No. 26 of 2013, tenancy contracts,
                rental caps, and dispute mediation – all while ensuring minimal disruption and
                financial risk.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Facing a Rental Dispute?</h3>
              <p className="text-slate-600 mb-6">
                Our legal team can help you resolve tenancy issues quickly and fairly.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Book Legal Consultation
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

export default RentalDisputes;
