
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import SEOHead from '@/components/SEOHead';

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Precedential Law",
  "description": "Contact Dubai's premier legal consultancy for expert legal advice and representation.",
  "url": "https://precedentiallaw.com/contact",
  "mainEntity": {
    "@type": "LegalService",
    "name": "Precedential Law",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Tower 2 - Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971509014120",
    "email": "info@precedentiallaw.com"
  }
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Contact Dubai's Premier Law Firm | Precedential Law - Expert Legal Consultation"
        description="Contact Precedential Law for expert legal consultation in Dubai. Schedule your confidential consultation with our experienced legal team. Available 24/7 for urgent legal matters."
        keywords="contact Dubai lawyers, legal consultation Dubai, Dubai law firm contact, legal advice UAE, emergency legal help Dubai, Precedential Law contact"
        canonicalUrl="https://precedentiallaw.com/contact"
        pageType="website"
        structuredData={contactStructuredData}
      />
      
      <NavBar />
      <BreadcrumbNavigation />
      
      <main className="flex-grow pt-20">
        <section className="py-8 bg-precedential-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Contact Our <span className="text-gold-gradient">Legal Experts</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Ready to discuss your legal needs? Our experienced team is here to provide 
              the expert guidance and representation you deserve.
            </p>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Contact;
