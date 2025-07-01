
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ModernNavBar from '@/components/ModernNavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import { Shield, CheckCircle, Users, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with unwavering ethical standards. Transparency, honesty, and accountability are the cornerstones of our practice, ensuring trust and reliability in all our dealings.",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Client Protection",
      description: "We see ourselves as your shield, standing resolutely between you and the complexities of the legal system. Our primary focus is safeguarding your rights, assets, and future.",
      icon: <Shield className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Excellence",
      description: "We are committed to achieving the highest quality in our legal advice, representation, and client service through continuous learning and meticulous preparation.",
      icon: <Award className="w-6 h-6 text-emerald-600" />
    }
  ];

  const stats = [
    { number: '40+', label: 'Years Combined Experience' },
    { number: '500+', label: 'Cases Successfully Handled' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '24hrs', label: 'Average Response Time' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Precedential Legal Consultancy – Trusted UAE Law Experts</title>
        <meta name="description" content="Meet the legal minds behind Precedential Law. Decades of UAE legal experience providing clear, effective legal solutions in Dubai and across the UAE." />
        <meta name="keywords" content="UAE legal consultancy, legal experts UAE, UAE law firm about, legal services UAE, UAE legal professionals" />
        <link rel="canonical" href="https://precedentiallaw.com/about" />
      </Helmet>
      
      <ModernNavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                About <span className="text-emerald-600">Precedential Law</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A premier legal consultancy dedicated to setting the standard in the UAE's legal landscape
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Target className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              </div>
              <div className="card-clean p-12 text-center">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our mission at Precedential Law is to provide clear, effective, and accessible legal solutions that empower our clients and protect their interests within the dynamic legal landscape of Dubai and the UAE. We strive to be a beacon of clarity and reliability in a complex field.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="section-padding bg-section">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and define our commitment to our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="card-clean p-8 text-center group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="section-padding bg-section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              </div>
              <div className="card-clean p-12">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We believe in a proactive, client-centric approach. This means dedicating time to understand your objectives deeply, anticipating potential challenges, and communicating complex legal matters in plain language. We aim to demystify the law, empowering you with the knowledge needed to make informed decisions confidently.
                  </p>
                  <p>
                    We don't just react to problems; we work with you to prevent them and chart the most efficient and effective path to resolution. This focus on clarity addresses the common need for straightforward guidance in navigating intricate legal systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Understanding Our Name */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Scale className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Understanding Our <span className="text-emerald-600">Name</span>
                </h2>
              </div>
              <div className="card-clean p-12">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The name 'Precedential' embodies our core aspiration: to set a new benchmark - a precedent - for legal service quality and client success in the UAE. It signifies our unwavering commitment to achieving landmark results for our clients, approaching each case with the diligence and strategic thinking required to establish positive outcomes.
                  </p>
                  <p>
                    It reflects our dedication to upholding the highest standards of legal practice and professional conduct, aiming to be leaders in our field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Protection */}
        <section className="section-padding bg-section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to Client Protection</h2>
              </div>
              <div className="card-clean p-12">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Your peace of mind is paramount. We act as your dedicated shield, navigating intricate legal frameworks, such as the UAE Civil Code or specific Decree-Laws governing employment or commercial transactions. We manage complex procedures, whether it involves filings with the Rental Dispute Centre, adhering to civil court protocols, or ensuring compliance with business regulations to avoid penalties.
                  </p>
                  <p>
                    We stand firm to protect your rights and interests from potential pitfalls, such as ambiguous contract terms or the complexities of cross-border legal issues. Trust us to be your steadfast protectors in the legal arena.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              </div>
              <FAQ />
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default About;
