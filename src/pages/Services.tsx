
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Services: React.FC = () => {
  const services = [
    {
      title: "Legal Consulting",
      description: "Strategic legal advice and tailored guidance for your specific situation in Dubai. Expert consultation UAE services.",
      href: "/services/legal-consulting"
    },
    {
      title: "Debt Settlement",
      description: "Navigate financial difficulties and pursue unpaid debts in the UAE. Professional debt settlement services Dubai.",
      href: "/services/debt-settlement"
    },
    {
      title: "Power of Attorney (POA)",
      description: "Creation, drafting, and registration of legally sound Powers of Attorney in the UAE. Power of attorney Dubai services.",
      href: "/services/power-of-attorney"
    },
    {
      title: "Will Writing",
      description: "Expert guidance for drafting and registering legally valid Wills. Essential will writing UAE expats services.",
      href: "/services/will-writing"
    },
    {
      title: "Civil Rights Litigation",
      description: "Representation for civil rights matters within the UAE legal framework. Civil rights lawyer UAE services.",
      href: "/services/civil-cases"
    },
    {
      title: "Criminal Defense",
      description: "Expert advisory support for criminal investigations and charges in the UAE. Criminal law advice Dubai.",
      href: "/services/criminal-defense"
    },
    {
      title: "Civil Cases",
      description: "Robust representation for diverse civil disputes before UAE courts. Civil litigation lawyer Dubai services.",
      href: "/services/civil-cases"
    },
    {
      title: "Commercial Law",
      description: "Comprehensive legal support for businesses operating in Dubai and the UAE. Commercial lawyers Dubai expertise.",
      href: "/services/business-law"
    },
    {
      title: "Contract Disputes",
      description: "Resolution of disputes from contractual disagreements in the UAE. Contract dispute lawyer Dubai services.",
      href: "/services/contract-disputes"
    },
    {
      title: "Divorce Law",
      description: "Compassionate legal guidance for divorce proceedings in the UAE. Leading divorce law firm Dubai services.",
      href: "/services/family-law"
    },
    {
      title: "Immigration Law",
      description: "Assistance with UAE immigration processes, visa applications, and residency permits. Immigration lawyer Dubai.",
      href: "/services/immigration-law"
    },
    {
      title: "Personal Injury",
      description: "Representation for personal injury compensation claims in the UAE. Personal injury lawyer Dubai services.",
      href: "/services/personal-injury"
    },
    {
      title: "Real Estate Legal Services",
      description: "Expert legal advice on all aspects of Dubai real estate. Property lawyer Dubai and rental dispute services.",
      href: "/services/real-estate-law"
    },
    {
      title: "Bounced Cheque Legal Help",
      description: "Legal assistance for bounced cheque cases under UAE law. Expert guidance on recent legislative changes.",
      href: "/services/bounced-cheque"
    },
    {
      title: "Rental Disputes",
      description: "Expert resolution of landlord-tenant disputes through Dubai Rental Dispute Centre (RDC).",
      href: "/services/rental-disputes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Services Dubai | UAE Law Firm | Precedential Law Services</title>
        <meta name="description" content="Comprehensive legal services in Dubai and UAE. Expert lawyers for business law, family law, immigration, real estate, civil litigation, and criminal defense." />
        <meta name="keywords" content="legal services Dubai, UAE law firm, Dubai lawyers, business law UAE, family law Dubai, immigration lawyer, real estate law" />
        <link rel="canonical" href="https://precedentiallaw.com/services" />
        
        <meta property="og:title" content="Legal Services Dubai | UAE Law Firm | Precedential Law" />
        <meta property="og:description" content="Comprehensive legal services across Dubai and UAE. Expert legal counsel for all your legal needs." />
        <meta property="og:url" content="https://precedentiallaw.com/services" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Comprehensive Legal Services
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Precedential Law offers a comprehensive suite of legal consulting services tailored 
                  to the specific needs of individuals and businesses operating within Dubai and the broader UAE.
                </p>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Expert Legal Counsel Across Key Domains
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Our expert team possesses in-depth knowledge across various legal domains, ensuring you receive 
                    targeted and effective advice. We are committed to providing clarity and strategic guidance.
                  </p>
                </div>

                {/* Services Table */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Service</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Description</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Learn More</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {services.map((service, index) => (
                          <tr key={service.title} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="font-semibold text-slate-900">{service.title}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-slate-600">{service.description}</div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Link 
                                to={service.href}
                                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
                              >
                                View Details
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Need Legal Assistance?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our experienced legal team is ready to help you navigate your legal challenges 
                  with confidence and clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <a 
                    href="tel:+971509014120"
                    className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Call +971 50 901 4120
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton phoneNumber="971509014120" />
      </div>
    </>
  );
};

export default Services;
