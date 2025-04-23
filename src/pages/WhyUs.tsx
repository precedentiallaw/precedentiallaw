
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { Helmet } from 'react-helmet';
import { Shield, Users, Clock, Scale, Check } from 'lucide-react';

const AdvantageCard: React.FC<{ title: string; description: React.ReactNode; icon: React.ReactNode }> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-precedential-gold/10 h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="text-precedential-black/70 space-y-3">
        {description}
      </div>
    </div>
  );
};

const StandardItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start">
    <Check className="w-5 h-5 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
    <span className="text-white/90">{text}</span>
  </li>
);

const WhyUs: React.FC = () => {
  const advantages = [
    {
      title: "Deep UAE Legal Acumen",
      description: (
        <p>
          Our team possesses extensive knowledge of UAE legal frameworks, procedures, and precedents. This deep understanding allows us to navigate the complexities of Dubai's legal system efficiently, identifying the optimal approaches for each unique case. We stay continually updated on legal developments, ensuring our strategies reflect the current legal landscape.
        </p>
      ),
      icon: <Shield className="w-6 h-6 text-precedential-gold" />
    },
    {
      title: "Dedicated Dubai Focus & Experts",
      description: (
        <p>
          Focusing specifically on Dubai's legal environment has allowed us to develop specialized expertise in the areas most relevant to our clients. Our team includes legal professionals with deep experience in Dubai's courts, regulatory bodies, and administrative systems. This focused experience translates into practical, effective legal strategies tailored to Dubai's unique legal culture.
        </p>
      ),
      icon: <Users className="w-6 h-6 text-precedential-gold" />
    },
    {
      title: "Commitment to Efficient Resolution",
      description: (
        <p>
          We recognize the value of timely resolution in legal matters. Our approach emphasizes efficiency without compromising effectiveness, seeking the most direct path to achieving your objectives. When appropriate, we utilize alternative dispute resolution methods to avoid costly, time-consuming litigation, though we remain fully prepared to vigorously represent you in court when necessary.
        </p>
      ),
      icon: <Clock className="w-6 h-6 text-precedential-gold" />
    },
    {
      title: "Steadfast Client-First Approach",
      description: (
        <p>
          Your goals and concerns remain our primary focus throughout our representation. We take the time to thoroughly understand your specific situation, explain your options clearly, and develop strategies aligned with your objectives. Our communication remains transparent and accessible, ensuring you're informed and empowered at every stage of the process.
        </p>
      ),
      icon: <Scale className="w-6 h-6 text-precedential-gold" />
    }
  ];

  const standards = [
    "Thorough case assessment and strategic planning from the outset",
    "Proactive approach to anticipating and addressing potential challenges",
    "Clear, jargon-free explanation of legal concepts and processes",
    "Regular, timely communication regarding case developments",
    "Transparency regarding timelines, costs, and potential outcomes",
    "Diligent attention to detail in all documentation and submissions",
    "Strategic advocacy focused on achieving optimal results",
    "Ethical, professional conduct in all interactions",
    "Respect for client confidentiality and privacy",
    "Commitment to continuing professional development"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Why Choose Precedential Law | Dubai Legal Excellence</title>
        <meta name="description" content="Discover what sets Precedential Law apart as a leading legal consultancy in Dubai, delivering expert representation with a client-focused approach." />
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
              What Sets Us <span className="text-gold-gradient">Apart</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Precedential Law stands as a trusted legal partner in Dubai through our steadfast commitment to excellence, client protection, and results-driven strategies.
            </p>
          </div>
        </div>
        
        {/* Advantages Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">The Precedential Advantage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advantages.map((advantage) => (
                  <AdvantageCard 
                    key={advantage.title}
                    title={advantage.title}
                    description={advantage.description}
                    icon={advantage.icon}
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Standards Section */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-black">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center text-white">
                Defining the <span className="text-gold-gradient">Precedential Standard</span>
              </h2>
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                Our name reflects our commitment to establishing a new benchmark in legal services across Dubai. The Precedential Standard encompasses our pledge to uphold the following principles in every client engagement:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {standards.map((standard, index) => (
                  <StandardItem key={index} text={standard} />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Leadership Section */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Leadership in Law</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-lg text-precedential-black/80 mb-4">
                  At Precedential Law, we believe leadership in the legal field extends beyond case outcomes. True legal leadership means setting standards of practice that elevate the entire profession. Our team is committed to representing our clients with distinction while also contributing to the advancement of legal practice in Dubai through thought leadership, professional development, and ethical conduct.
                </p>
                <p className="text-lg text-precedential-black/80">
                  This commitment to leadership informs how we approach each case, interact with clients and colleagues, and engage with the broader legal community. It drives us to continuously refine our skills, expand our knowledge, and improve our processes—all with the goal of delivering an exceptional standard of legal service that clients can rely upon with confidence.
                </p>
              </div>
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

export default WhyUs;
