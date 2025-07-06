
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, Award, Scale } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Precedential Law | Dubai Legal Consultancy | UAE Law Firm</title>
        <meta name="description" content="Learn about Precedential Law - Dubai's premier legal consultancy. Our mission, values, and commitment to providing expert legal services across the UAE." />
        <meta name="keywords" content="about Precedential Law, Dubai law firm, UAE legal consultancy, legal services Dubai, law firm mission" />
        <link rel="canonical" href="https://precedentiallaw.com/about" />
        
        <meta property="og:title" content="About Precedential Law | Dubai Legal Consultancy" />
        <meta property="og:description" content="Premier legal consultancy in Dubai providing expert legal services across the UAE. Learn about our mission and values." />
        <meta property="og:url" content="https://precedentiallaw.com/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  About Precedential Law
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Setting a new benchmark for legal service quality and client success in Dubai
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Mission</h2>
                <div className="bg-slate-50 rounded-xl p-8">
                  <p className="text-lg text-slate-700 leading-relaxed text-center">
                    Our mission at Precedential Law is to provide clear, effective, and accessible legal solutions 
                    that empower our clients and protect their interests within the dynamic legal landscape of Dubai 
                    and the UAE. We strive to be a beacon of clarity and reliability in a complex field.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Integrity</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We operate with unwavering ethical standards. Transparency, honesty, and accountability 
                      are the cornerstones of our practice, ensuring trust and reliability in all our dealings.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Client Protection</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We see ourselves as your shield, standing resolutely between you and the complexities 
                      of the legal system. Our primary focus is safeguarding your rights, assets, and future.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Excellence</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We are committed to achieving the highest quality in our legal advice, representation, 
                      and client service through continuous learning and meticulous preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Philosophy</h2>
                <div className="bg-slate-50 rounded-xl p-8">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    We believe in a proactive, client-centric approach. This means dedicating time to understand 
                    your objectives deeply, anticipating potential challenges, and communicating complex legal matters 
                    in plain language. We aim to demystify the law, empowering you with the knowledge needed to make 
                    informed decisions confidently. We don't just react to problems; we work with you to prevent them 
                    and chart the most efficient and effective path to resolution.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Founder's Vision */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Founder's Vision</h2>
                <div className="bg-white rounded-xl p-8">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Precedential Law was founded with a distinct vision: to establish a legal consultancy in Dubai 
                    built on genuine partnership with clients. The aim was to create a firm that prioritizes clarity 
                    over complexity, combining profound local expertise with international standards of service excellence.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Recognizing a need for advisors who not only master the intricacies of UAE law but also genuinely 
                    focus on the client's journey and desired outcomes, Precedential Law was born to fill that gap, 
                    offering a more supportive and results-oriented legal experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Understanding Our Name */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Understanding Our Name</h2>
                <div className="bg-slate-50 rounded-xl p-8">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    The name 'Precedential' embodies our core aspiration: to set a new benchmark - a precedent - 
                    for legal service quality and client success in Dubai. It signifies our unwavering commitment 
                    to achieving landmark results for our clients, approaching each case with the diligence and 
                    strategic thinking required to establish positive outcomes. It reflects our dedication to upholding 
                    the highest standards of legal practice and professional conduct, aiming to be leaders in our field.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Commitment to Client Protection</h2>
                <div className="bg-white rounded-xl p-8">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Your peace of mind is paramount. We act as your dedicated shield, navigating intricate legal 
                    frameworks, such as the UAE Civil Code or specific Decree-Laws governing employment or commercial 
                    transactions. We manage complex procedures, whether it involves filings with the Rental Dispute 
                    Centre, adhering to civil court protocols, or ensuring compliance with business regulations to 
                    avoid penalties. We stand firm to protect your rights and interests from potential pitfalls, 
                    such as ambiguous contract terms or the complexities of cross-border legal issues. Trust us to 
                    be your steadfast protectors in the legal arena.
                  </p>
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

export default About;
