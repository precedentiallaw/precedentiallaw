
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, FileText, Scale, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

const BusinessLaw: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Business Law Dubai | Commercial Legal Services UAE | Company Formation</title>
        <meta name="description" content="Expert business law services in Dubai. Company formation, commercial contracts, regulatory compliance, and corporate legal advice. Experienced commercial lawyers UAE." />
        <meta name="keywords" content="business law Dubai, commercial lawyers UAE, company formation Dubai, corporate legal services, business setup UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/services/business-law" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Business & Commercial Law Services
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Comprehensive legal support for businesses operating in Dubai and the UAE. 
                  From company formation to regulatory compliance, we protect your business interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                    Schedule Business Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8">
                    Download Business Guide
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Our Business Law Services
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-xl p-8">
                    <Building2 className="w-12 h-12 text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Company Formation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Complete setup of LLC, FZE, and other business entities in Dubai with full 
                      regulatory compliance and ongoing support.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-8">
                    <FileText className="w-12 h-12 text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Contract Drafting & Review</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Comprehensive commercial agreements, employment contracts, and vendor 
                      agreements tailored to UAE law.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-8">
                    <Scale className="w-12 h-12 text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Regulatory Compliance</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ongoing compliance with UAE commercial laws, licensing requirements, 
                      and corporate governance standards.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-8">
                    <Shield className="w-12 h-12 text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Business Dispute Resolution</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Expert representation in commercial litigation and alternative 
                      dispute resolution proceedings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  How We Support Your Business
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Initial Assessment</h3>
                      <p className="text-slate-600">Comprehensive review of your business objectives and legal requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Strategic Planning</h3>
                      <p className="text-slate-600">Development of customized legal strategy aligned with your business goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Implementation</h3>
                      <p className="text-slate-600">Preparation and filing of all necessary legal documents and registrations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Ongoing Support</h3>
                      <p className="text-slate-600">Continuous compliance monitoring and legal advisory support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Ready to Protect Your Business?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Get expert legal advice tailored to your business needs in Dubai and the UAE.
                </p>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                  Contact Our Business Law Team
                </Button>
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

export default BusinessLaw;
