
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQ from '@/components/FAQ';
import { Phone, MessageCircle, Clock, Shield, Users, Scale } from 'lucide-react';

const LegalConsultationDubai: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Consultation Dubai | Expert UAE Legal Advice | Precedential Law</title>
        <meta name="description" content="Get expert legal consultation in Dubai from qualified UAE legal consultants. Professional legal advice for individuals and businesses. Contact Precedential Law today." />
        <meta name="keywords" content="legal consultation Dubai, UAE legal advice, Dubai legal consultants, legal help Dubai, UAE law firm consultation, Dubai legal services" />
        <link rel="canonical" href="https://precedentiallaw.com/legal-consultation-dubai" />
        
        <meta property="og:title" content="Legal Consultation Dubai | Expert UAE Legal Advice" />
        <meta property="og:description" content="Professional legal consultation services in Dubai. Expert UAE legal advice for individuals and businesses from qualified legal consultants." />
        <meta property="og:url" content="https://precedentiallaw.com/legal-consultation-dubai" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Expert Legal Consultation in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Get professional legal advice from qualified UAE legal consultants. We provide comprehensive legal guidance for individuals, families, and businesses across all areas of UAE law.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +971509014120
                </button>
                <button className="border border-precedential-gold text-precedential-gold px-8 py-4 rounded-xl font-semibold hover:bg-precedential-gold hover:text-precedential-black transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Legal Consultation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Why Choose Our Legal Consultation Services?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our experienced legal consultants provide clear, actionable advice tailored to your specific needs under UAE law.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">UAE Legal Expertise</h3>
                  <p className="text-gray-600">
                    Deep knowledge of UAE federal and local laws, regulations, and court procedures across all emirates.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expat-Focused Service</h3>
                  <p className="text-gray-600">
                    Specialized support for expatriates navigating UAE legal requirements and cultural considerations.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gold-50 rounded-xl">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-precedential-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Confidential & Professional</h3>
                  <p className="text-gray-600">
                    Strict confidentiality standards and professional ethics in all legal consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Legal Consultation Areas
                </h2>
                <p className="text-lg text-gray-600">
                  We provide expert consultation across all major areas of UAE law
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Family Law Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Divorce, custody, marriage contracts, inheritance, and personal status matters under UAE law.
                  </p>
                  <a href="/services/family-law" className="text-green-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Business Law Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Company formation, commercial contracts, licensing, and regulatory compliance advice.
                  </p>
                  <a href="/services/business-law" className="text-blue-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">Immigration Law Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Visa applications, residency permits, golden visa eligibility, and immigration procedures.
                  </p>
                  <a href="/services/immigration-law" className="text-purple-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 text-red-600">Real Estate Law Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Property transactions, lease agreements, rental disputes, and real estate regulations.
                  </p>
                  <a href="/services/real-estate-law" className="text-red-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">Civil Litigation Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Dispute resolution, civil claims, contract disputes, and court representation advice.
                  </p>
                  <a href="/services/civil-litigation" className="text-indigo-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">Employment Law Consultation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Labor disputes, employment contracts, workplace rights, and termination matters.
                  </p>
                  <a href="/services/employment-law-uae" className="text-orange-600 font-semibold text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  How Our Legal Consultation Works
                </h2>
                <p className="text-lg text-gray-600">
                  Simple, straightforward process to get the legal advice you need
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Contact Us</h3>
                  <p className="text-sm text-gray-600">Call, WhatsApp, or email to schedule your consultation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-sm text-gray-600">We review your case and understand your legal needs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Expert Consultation</h3>
                  <p className="text-sm text-gray-600">Detailed discussion with our qualified legal consultant</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-precedential-gold font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Action Plan</h3>
                  <p className="text-sm text-gray-600">Receive clear legal advice and next steps</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Get Expert Legal Advice?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Don't navigate UAE legal matters alone. Contact our experienced legal consultants for professional guidance tailored to your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +971509014120
                </button>
                <button className="border border-precedential-gold text-precedential-gold px-8 py-4 rounded-xl font-semibold hover:bg-precedential-gold hover:text-precedential-black transition-colors">
                  Request Consultation
                </button>
              </div>
              <div className="mt-6 text-sm opacity-75">
                <Clock className="w-4 h-4 inline mr-2" />
                Available 24/7 for urgent legal matters
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default LegalConsultationDubai;
