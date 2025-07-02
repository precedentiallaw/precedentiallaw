
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

const MaximaContact: React.FC = () => {
  const contactInfo = [
    {
      title: "Office Location",
      details: "City Tower 2 - Sheikh Zayed Road\nTrade Centre - Trade Centre 1\nDubai, UAE",
      icon: MapPin
    },
    {
      title: "Phone",
      details: "+971 50 901 4120",
      icon: Phone
    },
    {
      title: "Email",
      details: "info@precedentiallaw.com",
      icon: Mail
    },
    {
      title: "Working Hours",
      details: "Monday - Thursday: 9:00 AM - 5:00 PM\nFriday: 9:00 AM - 12:30 PM",
      icon: Clock
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Precedential Law | Dubai Legal Consultancy | Get Expert Legal Advice</title>
        <meta name="description" content="Contact Precedential Law for expert legal services in Dubai. Schedule a consultation with our experienced UAE lawyers. Phone: +971 50 901 4120" />
        <link rel="canonical" href="https://precedentiallaw.com/contact" />
        
        <meta property="og:title" content="Contact Precedential Law | Dubai Legal Consultancy" />
        <meta property="og:description" content="Get in touch with Dubai's premier legal consultancy. Expert legal advice and representation across the UAE." />
        <meta property="og:url" content="https://precedentiallaw.com/contact" />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:site_name" content="Precedential Law" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact Precedential Law | Dubai Legal Consultancy" />
        <meta property="twitter:description" content="Get expert legal advice from Dubai's premier legal consultancy." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>
      
      <MaximaLayout>
        <div data-scroll-section>
          {/* Hero Section */}
          <ContentSection>
            <div className="service-hero">
              <h1>Contact Precedential Law</h1>
              <p className="text-large">
                Get in Touch for Expert Legal Support in Dubai. Ready to discuss your legal needs? Let's connect.
              </p>
            </div>
          </ContentSection>

          {/* Contact Information */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-12">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info) => (
                  <article key={info.title} className="service-card text-center">
                    <info.icon className="w-12 h-12 text-gold-gradient mb-4 mx-auto" aria-hidden="true" />
                    <h3>{info.title}</h3>
                    <p className="whitespace-pre-line">{info.details}</p>
                  </article>
                ))}
              </div>
            </div>
          </ContentSection>

          {/* Contact Form */}
          <ContentSection>
            <div className="max-w-4xl mx-auto">
              <div className="content-grid">
                <div className="content-text">
                  <h2>Send Us Your Inquiry</h2>
                  <p className="text-large mb-6">
                    Facing a legal challenge? Need clarity on your rights? We're here to help with expert legal guidance tailored to your specific situation.
                  </p>
                  <p className="text-large">
                    We value your inquiry and aim to respond promptly. We look forward to hearing from you and exploring how Precedential Law can assist you in achieving your legal objectives in the UAE.
                  </p>
                </div>
                <div className="service-card">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-precedential-gold focus:border-precedential-gold transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-precedential-gold focus:border-precedential-gold transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-precedential-gold focus:border-precedential-gold transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-precedential-gold focus:border-precedential-gold transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="business-law">Business Law</option>
                        <option value="family-law">Family Law</option>
                        <option value="real-estate">Real Estate Law</option>
                        <option value="immigration">Immigration Law</option>
                        <option value="civil-litigation">Civil Litigation</option>
                        <option value="criminal-defense">Criminal Defense</option>
                        <option value="debt-settlement">Debt Settlement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-precedential-gold focus:border-precedential-gold transition-colors"
                        placeholder="Please describe your legal matter or inquiry..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the <a href="/privacy-policy" className="text-precedential-gold hover:underline">Privacy Policy</a> *
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-precedential-gold text-white hover:bg-precedential-goldLight"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </ContentSection>

          {/* Map Section */}
          <ContentSection background="alternate">
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8">Visit Our Office</h2>
              <div className="max-w-4xl mx-auto">
                <div className="service-card">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gold-gradient mx-auto mb-4" />
                      <h3>Office Location</h3>
                      <p>City Tower 2 - Sheikh Zayed Road<br />Trade Centre - Trade Centre 1<br />Dubai, UAE</p>
                      <p className="mt-4 text-sm text-gray-600">
                        Interactive map integration available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentSection>

          {/* CTA Section */}
          <ContentSection>
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-large mb-8">
                Don't navigate complex legal challenges alone. Contact Precedential Law today for expert legal services in Dubai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+971509014120" className="hero-cta">
                  Call Now: +971 50 901 4120
                </a>
                <a href="https://wa.me/971509014120" className="hero-cta" style={{background: '#25D366'}}>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ContentSection>
        </div>
      </MaximaLayout>
      
      <WhatsAppButton phoneNumber="971509014120" />
    </>
  );
};

export default MaximaContact;
