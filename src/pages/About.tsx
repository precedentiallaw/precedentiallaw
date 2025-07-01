
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import { Shield, CheckCircle } from 'lucide-react';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-precedential-gold/10">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-precedential-black/70">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with unwavering ethical standards. Transparency, honesty, and accountability are the cornerstones of our practice, ensuring trust and reliability in all our dealings.",
      icon: <CheckCircle className="w-5 h-5 text-precedential-gold" />
    },
    {
      title: "Client Protection (Your Legal Shield)",
      description: "We see ourselves as your shield, standing resolutely between you and the complexities of the legal system. Our primary focus is safeguarding your rights, assets, and future, offering robust protection against legal challenges.",
      icon: <Shield className="w-5 h-5 text-precedential-gold" />
    },
    {
      title: "Excellence",
      description: "We are committed to achieving the highest quality in our legal advice, representation, and client service. This involves continuous learning, meticulous preparation, and a relentless pursuit of the best possible outcomes for those we serve.",
      icon: <CheckCircle className="w-5 h-5 text-precedential-gold" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Precedential Legal Consultancy – Trusted UAE Law Experts</title>
        <meta name="description" content="Meet the legal minds behind Precedential Law. Decades of UAE legal experience providing clear, effective legal solutions in Dubai and across the UAE." />
        <meta name="keywords" content="UAE legal consultancy, legal experts UAE, UAE law firm about, legal services UAE, UAE legal professionals" />
        <link rel="canonical" href="https://precedentiallaw.com/about" />
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
              About <span className="text-gold-gradient">Precedential Law</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              A premier legal consultancy dedicated to setting the standard in the UAE's legal landscape
            </p>
          </div>
        </div>
        
        {/* Mission Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Our Mission</h2>
              <div className="glass-card p-8 text-center">
                <p className="text-lg text-precedential-black/80">
                  Our mission at Precedential Law is to provide clear, effective, and accessible legal solutions that empower our clients and protect their interests within the dynamic legal landscape of Dubai and the UAE. We strive to be a beacon of clarity and reliability in a complex field.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Values Section */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-offWhite">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => (
                  <ValueCard 
                    key={value.title}
                    title={value.title}
                    description={value.description}
                    icon={value.icon}
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Philosophy Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Our Philosophy</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-lg text-precedential-black/80 mb-4">
                  We believe in a proactive, client-centric approach. This means dedicating time to understand your objectives deeply, anticipating potential challenges, and communicating complex legal matters in plain language. We aim to demystify the law, empowering you with the knowledge needed to make informed decisions confidently.
                </p>
                <p className="text-lg text-precedential-black/80">
                  We don't just react to problems; we work with you to prevent them and chart the most efficient and effective path to resolution. This focus on clarity addresses the common need for straightforward guidance in navigating intricate legal systems.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Understanding Our Name */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-black text-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
                Understanding Our <span className="text-gold-gradient">Name</span>
              </h2>
              <div className="glass-card border border-precedential-gold/20 p-8">
                <p className="text-lg text-white/90 mb-4">
                  The name 'Precedential' embodies our core aspiration: to set a new benchmark - a precedent - for legal service quality and client success in the UAE. It signifies our unwavering commitment to achieving landmark results for our clients, approaching each case with the diligence and strategic thinking required to establish positive outcomes.
                </p>
                <p className="text-lg text-white/90">
                  It reflects our dedication to upholding the highest standards of legal practice and professional conduct, aiming to be leaders in our field.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Client Protection */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Our Commitment to Client Protection</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-lg text-precedential-black/80 mb-4">
                  Your peace of mind is paramount. We act as your dedicated shield, navigating intricate legal frameworks, such as the UAE Civil Code or specific Decree-Laws governing employment or commercial transactions. We manage complex procedures, whether it involves filings with the Rental Dispute Centre, adhering to civil court protocols, or ensuring compliance with business regulations to avoid penalties.
                </p>
                <p className="text-lg text-precedential-black/80">
                  We stand firm to protect your rights and interests from potential pitfalls, such as ambiguous contract terms or the complexities of cross-border legal issues. Trust us to be your steadfast protectors in the legal arena.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-offWhite">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">Frequently Asked Questions</h2>
              <FAQ />
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

export default About;
