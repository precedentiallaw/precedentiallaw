
import React from 'react';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Helmet } from 'react-helmet-async';
import { Star, Quote, Building, User, Heart } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, Tech Startup",
      company: "InnovateX Solutions",
      rating: 5,
      quote: "Setting up our technology business in Dubai free zone seemed daunting initially, but Precedential Law made the entire process remarkably seamless. They expertly handled everything from navigating the licensing requirements to drafting robust shareholder agreements. Their proactive advice on ongoing compliance matters was invaluable for avoiding future pitfalls.",
      service: "Commercial Law & Company Formation",
      icon: Building
    },
    {
      name: "Ahmed Al Rashid",
      role: "Expat Professional",
      company: "Banking Sector",
      rating: 5,
      quote: "Going through a divorce is incredibly stressful, particularly when navigating a different legal system as an expat. Precedential Law provided sensitive, clear, and strong representation throughout. They patiently explained the UAE legal process concerning divorce and custody and fought diligently for a fair outcome regarding the division of assets and arrangements for our children.",
      service: "Divorce Law",
      icon: Heart
    },
    {
      name: "Maria Gonzalez",
      role: "Property Landlord",
      company: "Real Estate Investment",
      rating: 4,
      quote: "I encountered a complex rental dispute with a tenant regarding unpaid rent and property damage. Precedential Law provided expert guidance, navigating me through the Dubai Rental Dispute Centre (RDC) procedures efficiently. They demonstrated a strong understanding of Dubai tenancy law and were highly responsive to my queries.",
      service: "Real Estate Legal Services",
      icon: Building
    },
    {
      name: "The Johnson Family",
      role: "Expat Family",
      company: "Dubai Residents",
      rating: 5,
      quote: "As an expatriate family living in Dubai, ensuring our children's guardianship arrangements and the distribution of our assets were legally secured under UAE law was a top priority. Precedential Law clearly explained the various options available, including the DIFC Wills service, and helped us draft and register our Wills efficiently.",
      service: "Will Writing",
      icon: User
    },
    {
      name: "Hassan Al Mahmoud",
      role: "Business Owner",
      company: "Trading Company",
      rating: 5,
      quote: "When we faced a complex commercial dispute with a supplier, Precedential Law's litigation team provided exceptional representation. Their deep knowledge of UAE commercial law and strategic approach helped us achieve a favorable settlement without lengthy court proceedings. Professional and results-driven.",
      service: "Commercial Litigation",
      icon: Building
    },
    {
      name: "Jennifer Thompson",
      role: "HR Director",
      company: "Multinational Corporation",
      rating: 5,
      quote: "Our company needed comprehensive employment law guidance for our UAE operations. Precedential Law provided clear advice on UAE labor law compliance, helped draft employment contracts, and supported us through several HR matters. Their expertise saved us from potential legal complications.",
      service: "Employment Law",
      icon: User
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <MaximaLayout>
      <Helmet>
        <title>Client Testimonials | Legal Services Reviews Dubai | Precedential Law</title>
        <meta name="description" content="Read genuine client testimonials and reviews for Precedential Law's legal services in Dubai. Real experiences from business owners, expatriates, and UAE residents." />
        <link rel="canonical" href="https://precedentiallaw.com/testimonials" />
        
        <meta property="og:title" content="Client Testimonials - Precedential Law Dubai" />
        <meta property="og:description" content="Discover what our clients say about our legal services in Dubai. Genuine testimonials from satisfied clients." />
        <meta property="og:url" content="https://precedentiallaw.com/testimonials" />
      </Helmet>

      {/* Hero Section */}
      <ContentSection>
        <div className="service-hero">
          <h1>Client Testimonials</h1>
          <p className="text-large">
            Valued feedback from our clients. At Precedential Law, client satisfaction is our ultimate measure of success. 
            Here's what our clients have to say about their journey with us.
          </p>
        </div>
      </ContentSection>

      {/* Testimonials Grid */}
      <ContentSection background="alternate">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="service-card">
              <div className="flex items-start gap-4 mb-4">
                <testimonial.icon className="w-12 h-12 text-gold-gradient flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-sm text-gray-600 ml-2">{testimonial.service}</span>
              </div>
              
              <blockquote className="relative">
                <Quote className="w-8 h-8 text-gold-gradient opacity-20 absolute -top-2 -left-2" />
                <p className="italic text-gray-700 leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </blockquote>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Statistics Section */}
      <ContentSection>
        <div className="text-center">
          <header className="mb-12">
            <h2>Our Track Record</h2>
            <p className="text-large">Numbers that reflect our commitment to client success</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="service-card">
              <div className="text-3xl font-bold text-gold-gradient mb-2">500+</div>
              <p>Successful Cases</p>
            </div>
            <div className="service-card">
              <div className="text-3xl font-bold text-gold-gradient mb-2">98%</div>
              <p>Client Satisfaction</p>
            </div>
            <div className="service-card">
              <div className="text-3xl font-bold text-gold-gradient mb-2">10+</div>
              <p>Years Experience</p>
            </div>
            <div className="service-card">
              <div className="text-3xl font-bold text-gold-gradient mb-2">50+</div>
              <p>Nationalities Served</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="alternate">
        <div className="text-center">
          <h2>Ready to Join Our Satisfied Clients?</h2>
          <p className="text-large mb-8">Experience the Precedential standard of legal service excellence.</p>
          <a href="/contact" className="hero-cta">
            Start Your Legal Journey
          </a>
        </div>
      </ContentSection>

      <WhatsAppButton phoneNumber="971509014120" />
    </MaximaLayout>
  );
};

export default Testimonials;
