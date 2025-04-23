
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { Helmet } from 'react-helmet';
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
      description: "We uphold the highest ethical standards in all interactions, maintaining honesty, transparency, and unwavering professional conduct throughout our practice.",
      icon: <CheckCircle className="w-5 h-5 text-precedential-gold" />
    },
    {
      title: "Client Protection",
      description: "We are steadfastly committed to safeguarding our clients' interests, approaching each case with diligence, thorough preparation, and strategic thinking.",
      icon: <Shield className="w-5 h-5 text-precedential-gold" />
    },
    {
      title: "Excellence",
      description: "We pursue excellence in every aspect of our legal practice, from meticulous research and thoughtful analysis to clear communication and effective representation.",
      icon: <CheckCircle className="w-5 h-5 text-precedential-gold" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Precedential Law | Dubai's Trusted Legal Consultancy</title>
        <meta name="description" content="Learn about Precedential Law, our mission, values, and commitment to providing clear, effective legal solutions in Dubai and across the UAE." />
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
              A premier legal consultancy dedicated to setting the standard in Dubai's legal landscape
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
                  We believe in a proactive, client-centric approach to legal consulting. Legal challenges often arise from insufficient foresight and planning; therefore, we emphasize preventative strategies that anticipate and mitigate potential issues before they develop into costly disputes. When conflicts do arise, we commit to seeking efficient resolution paths that align with our clients' best interests and objectives.
                </p>
                <p className="text-lg text-precedential-black/80">
                  Our practice is built on clear communication, strategic thinking, and a deep understanding of the UAE's unique legal landscape. We recognize that the law serves people, not the other way around, and we work tirelessly to make legal processes accessible and understandable for those we represent.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Founder's Vision */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-black text-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
                The Founder's <span className="text-gold-gradient">Vision</span>
              </h2>
              <div className="glass-card border border-precedential-gold/20 p-8">
                <p className="text-lg text-white/90 mb-4">
                  Precedential Law was founded with a distinct vision: to create a legal consultancy that combines deep expertise in UAE law with an unwavering commitment to client protection. Having observed the challenges many individuals and businesses face when navigating Dubai's legal landscape, our founder recognized the need for a firm that would prioritize clear communication, strategic guidance, and client-centered solutions.
                </p>
                <p className="text-lg text-white/90">
                  This vision continues to guide our practice today, informing every client interaction and legal strategy we develop. We remain dedicated to setting a precedential standard in legal services—one that emphasizes both exceptional results and an exceptional client experience.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Understanding Our Name */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Understanding Our Name</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-lg text-precedential-black/80 mb-4">
                  The name 'Precedential' embodies our core aspiration: to establish and maintain the highest standards in legal practice across Dubai. In law, a precedent represents an established pattern or standard that guides future actions and decisions. Similarly, our firm strives to set the benchmark for excellence in legal services, creating a precedential standard that elevates expectations throughout the legal community.
                </p>
                <p className="text-lg text-precedential-black/80">
                  This name reflects our dual commitment: honoring established legal principles while pioneering innovative approaches that address the evolving needs of our clients in Dubai's dynamic environment. It serves as a constant reminder of our responsibility to deliver legal counsel and representation that stands as an example of what clients should expect from their legal advisors.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Client Protection */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-offWhite">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Our Commitment to Client Protection</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-lg text-precedential-black/80 mb-4">
                  Your peace of mind is paramount to us at Precedential Law. We recognize that seeking legal assistance often comes during challenging and uncertain times. Our commitment to client protection encompasses not only safeguarding your legal interests but also ensuring you feel supported, informed, and confident throughout the process.
                </p>
                <p className="text-lg text-precedential-black/80">
                  This commitment manifests in our thorough case preparation, strategic approach to legal challenges, transparent communication, and unwavering advocacy. We serve as your shield in Dubai's legal landscape, employing our expertise and resources to protect what matters most to you—whether that's your business interests, family welfare, personal rights, or financial security.
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

export default About;
