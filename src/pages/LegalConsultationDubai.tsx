
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import { MessageCircle, Shield, Clock, Users, CheckCircle, ExternalLink } from 'lucide-react';

const LegalConsultationDubai: React.FC = () => {
  const consultationServices = [
    {
      title: "Initial Legal Assessment",
      description: "Comprehensive review of your legal situation and identification of potential issues or opportunities.",
      icon: <Shield className="w-6 h-6 text-precedential-gold" />
    },
    {
      title: "Strategic Legal Planning",
      description: "Development of tailored legal strategies aligned with your personal or business objectives.",
      icon: <MessageCircle className="w-6 h-6 text-precedential-gold" />
    },
    {
      title: "Risk Management Consultation",
      description: "Proactive identification and mitigation of legal risks before they become costly problems.",
      icon: <Clock className="w-6 h-6 text-precedential-gold" />
    },
    {
      title: "Ongoing Legal Support",
      description: "Continuous legal guidance and support as your needs evolve over time.",
      icon: <Users className="w-6 h-6 text-precedential-gold" />
    }
  ];

  const faqs = [
    {
      question: "What should I bring to my first legal consultation?",
      answer: "Bring any relevant documents related to your legal matter, a list of questions, and a clear understanding of your objectives. We'll guide you through what's needed during our initial discussion."
    },
    {
      question: "How long does a typical consultation last?",
      answer: "Initial consultations typically last 45-60 minutes, allowing sufficient time to understand your situation and provide meaningful guidance."
    },
    {
      question: "Can consultations be conducted virtually?",
      answer: "Yes, we offer both in-person and virtual consultations to accommodate your schedule and preferences."
    },
    {
      question: "What areas of law do you provide consultation for?",
      answer: "We provide consultation across all our practice areas including family law, business law, immigration, real estate, and civil litigation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Consultation Dubai | Expert UAE Legal Advice | Precedential Law</title>
        <meta name="description" content="Professional legal consultation in Dubai. Expert UAE legal advice for individuals and businesses. Trusted legal consultants providing clear guidance and strategic planning." />
        <meta name="keywords" content="legal consultation Dubai, UAE legal advice, legal consultants Dubai, legal guidance UAE, professional legal advice Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/legal-consultation-dubai" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-precedential-black py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              Legal Consultation <span className="text-gold-gradient">Dubai</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Expert legal consultation services in Dubai providing clear guidance, strategic planning, and professional advice for individuals and businesses across the UAE.
            </p>
          </div>
        </div>
        
        {/* Introduction Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6">Professional Legal Consultation in Dubai</h2>
                <div className="prose prose-lg max-w-none text-precedential-black/80 space-y-4">
                  <p>
                    At Precedential Law, we understand that navigating the UAE's legal landscape can be complex and overwhelming. Our legal consultation services in Dubai are designed to provide you with clear, actionable advice tailored to your specific situation.
                  </p>
                  <p>
                    Whether you're an expatriate seeking guidance on personal legal matters, a business owner looking to ensure compliance, or an individual facing a specific legal challenge, our experienced legal consultants are here to help you make informed decisions with confidence.
                  </p>
                  <p>
                    Our consultation approach focuses on understanding your unique circumstances, explaining your options in plain language, and developing practical strategies that align with your objectives while ensuring full compliance with UAE law.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Services Section */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-offWhite">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">Our Consultation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {consultationServices.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-precedential-gold/10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-precedential-black/70">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Process Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">Our Consultation Process</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-precedential-gold text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Contact & Scheduling</h3>
                    <p className="text-precedential-black/70">Contact us to schedule your consultation at a time that works for you, whether in-person or virtually.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-precedential-gold text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Discussion</h3>
                    <p className="text-precedential-black/70">We'll discuss your situation in detail, review relevant documents, and understand your objectives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-precedential-gold text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Analysis & Advice</h3>
                    <p className="text-precedential-black/70">Receive clear, actionable advice based on our analysis of your situation and UAE legal requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-precedential-gold text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic Planning & Next Steps</h3>
                    <p className="text-precedential-black/70">Develop a clear action plan with defined next steps and ongoing support options.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Why Choose Us */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-black text-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">
                Why Choose Our <span className="text-gold-gradient">Legal Consultation</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">UAE Legal Expertise</h3>
                      <p className="text-white/80">Deep understanding of UAE federal and local laws across all emirates.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Clear Communication</h3>
                      <p className="text-white/80">Complex legal concepts explained in plain language you can understand.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Confidential & Professional</h3>
                      <p className="text-white/80">All consultations conducted with strict confidentiality and professionalism.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Practical Solutions</h3>
                      <p className="text-white/80">Actionable advice focused on achieving your specific objectives.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* External Link Section */}
        <ScrollReveal>
          <section className="py-12 px-4 bg-precedential-offWhite">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-precedential-gold/20">
                <h3 className="text-xl font-bold mb-4">Official UAE Government Resources</h3>
                <p className="text-precedential-black/70 mb-4">
                  For additional information about UAE legal processes and government services:
                </p>
                <a 
                  href="https://www.dha.gov.ae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-precedential-gold hover:text-precedential-goldLight font-medium"
                >
                  Dubai Health Authority Official Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* FAQ Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">Frequently Asked Questions</h2>
              <FAQ customFaqs={faqs} />
            </div>
          </section>
        </ScrollReveal>
        
        {/* Final CTA */}
        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default LegalConsultationDubai;
