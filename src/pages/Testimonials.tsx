import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { MessageSquare } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, position, service }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-precedential-gold/10">
      <div className="flex justify-center mb-6">
        <MessageSquare className="w-12 h-12 text-precedential-gold opacity-70" />
      </div>
      <blockquote className="text-lg italic text-precedential-black/80 text-center mb-6">
        "{quote}"
      </blockquote>
      <div className="text-center">
        <div className="font-bold">{author}</div>
        {position && <div className="text-precedential-black/60 text-sm">{position}</div>}
        <div className="mt-4">
          <span className="bg-precedential-gold/10 text-precedential-black/70 text-xs px-3 py-1 rounded-full">
            {service}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Precedential Law provided invaluable guidance for my business setup in Dubai. Their team demonstrated exceptional knowledge of UAE commercial regulations and streamlined what could have been an overwhelming process. Professional, clear, and highly effective.",
      author: "Ahmed H.",
      position: "SME Owner, Dubai",
      service: "Business & Commercial Law"
    },
    {
      quote: "Navigating my divorce felt overwhelming until I contacted Precedential Law. Their support was exceptional, explaining the process clearly and protecting my interests at every stage. They managed complex negotiations with sensitivity and strength, achieving an outcome that exceeded my expectations.",
      author: "Sarah M.",
      position: "Expat Resident",
      service: "Family Law"
    },
    {
      quote: "When facing unexpected immigration issues that threatened my residency status, Precedential Law provided immediate, expert guidance. They clearly explained my options and developed a strategic approach that resolved the situation efficiently. Their knowledge of UAE immigration procedures was impressive.",
      author: "James K.",
      position: "Finance Professional",
      service: "Immigration Law"
    },
    {
      quote: "After encountering complications with a property purchase in Dubai, I engaged Precedential Law to review the contract and represent my interests. Their attention to detail identified several issues that could have caused significant problems later. Their negotiation skills secured favorable terms, and the transaction proceeded smoothly.",
      author: "Layla T.",
      position: "Property Investor",
      service: "Real Estate Law"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Client Testimonials | Precedential Law Dubai</title>
        <meta name="description" content="Read what our clients say about their experience with Precedential Law, Dubai's trusted legal consultancy delivering exceptional legal services." />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-precedential-black py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              Client <span className="text-gold-gradient">Testimonials</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Hear directly from those we've had the privilege to represent. Our clients' experiences reflect our commitment to excellence, clarity, and results.
            </p>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <p className="text-lg text-precedential-black/80 text-center max-w-3xl mx-auto mb-12">
                At Precedential Law, we measure our success through the positive outcomes and experiences of our clients. We're proud of the relationships we've built and the trust we've earned across Dubai and the UAE.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    service={testimonial.service}
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        
        {/* Client Trust Section */}
        <ScrollReveal>
          <section className="py-16 px-4 bg-precedential-offWhite">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6">Our Commitment to You</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-lg text-precedential-black/80 mb-4">
                  These testimonials represent more than just successful cases—they embody our commitment to being trusted advisors who deliver both legal results and peace of mind. We approach each client relationship with the same level of dedication, expertise, and personalized attention.
                </p>
                <p className="text-lg text-precedential-black/80">
                  Whether you're facing complex business challenges, navigating personal legal matters, or seeking preventative legal guidance, our team is ready to provide the same caliber of service that has earned the trust of clients across Dubai.
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

export default Testimonials;
