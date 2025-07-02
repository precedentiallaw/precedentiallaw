
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { initializeScroll, destroyScroll } from '@/utils/scroll';
import PageLoader from '@/components/maxima/PageLoader';
import NavHeader from '@/components/maxima/NavHeader';
import HeroSection from '@/components/maxima/HeroSection';

const MaximaIndex: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Locomotive Scroll after loading is complete
    if (!isLoading) {
      const scrollInstance = initializeScroll();
      
      return () => {
        if (scrollInstance) {
          destroyScroll();
        }
      };
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Legal Consultancy UAE | Trusted Legal Experts in Dubai | Precedential Law</title>
        <meta name="description" content="Looking for trusted legal consultants in the UAE? Precedential Law offers expert legal services in family, business, immigration, and litigation for expats and locals." />
        <link rel="canonical" href="https://precedentiallaw.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:title" content="Legal Consultancy UAE | Trusted Legal Experts in Dubai | Precedential Law" />
        <meta property="og:description" content="Looking for trusted legal consultants in the UAE? Precedential Law offers expert legal services in family, business, immigration, and litigation for expats and locals." />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:site_name" content="Precedential Law" />
        <meta property="og:locale" content="en_US" />

        {/* Enhanced Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://precedentiallaw.com/" />
        <meta property="twitter:title" content="Legal Consultancy UAE | Trusted Legal Experts in Dubai | Precedential Law" />
        <meta property="twitter:description" content="Looking for trusted legal consultants in the UAE? Precedential Law offers expert legal services in family, business, immigration, and litigation for expats and locals." />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Precedential Law",
            "url": "https://precedentiallaw.com/",
            "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
            "image": "https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png",
            "description": "Premier UAE-based legal consultancy providing expert legal services across business law, family law, real estate, immigration, and civil litigation.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "City Tower 2 - Sheikh Zayed Road",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971509014120", 
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Arabic"]
            },
            "areaServed": "AE",
            "serviceType": [
              "UAE Business Law",
              "UAE Family Law",
              "UAE Immigration Law", 
              "UAE Real Estate Law",
              "UAE Civil Litigation"
            ]
          })}
        </script>
      </Helmet>

      {/* Page Loader */}
      {isLoading && <PageLoader onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      {!isLoading && (
        <div id="main-scroll-wrapper" data-scroll-container>
          <NavHeader />
          <main>
            <HeroSection />
            
            {/* About Section Placeholder */}
            <section id="about" className="content-section" data-scroll-section>
              <div className="container">
                <div className="content-grid">
                  <div className="content-text" data-scroll data-scroll-speed="2">
                    <h2>About Precedential Law</h2>
                    <p>
                      We are a premier Dubai-based legal consultancy committed to delivering 
                      clear, effective, and client-focused legal solutions. We understand the 
                      unique and dynamic legal environment of Dubai and the wider UAE.
                    </p>
                    <p>
                      Our dedication lies in protecting your interests, acting as your trusted 
                      shield against legal complexities.
                    </p>
                  </div>
                  <div className="content-image" data-scroll data-scroll-speed="1">
                    <img 
                      src="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" 
                      alt="Precedential Law Office" 
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section Placeholder */}
            <section id="services" className="content-section" data-scroll-section>
              <div className="container">
                <div className="content-text" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h2>Our Legal Services</h2>
                  <p>
                    Comprehensive legal support across key domains tailored to the specific 
                    needs of individuals and businesses in the UAE.
                  </p>
                </div>
                
                <div className="services-grid">
                  <div className="service-card fade-up">
                    <h3>Family Law</h3>
                    <p>Including divorce, custody, inheritance, and personal status matters</p>
                  </div>
                  <div className="service-card fade-up stagger-delay-1">
                    <h3>Business Law</h3>
                    <p>Contract formation, compliance, company setup and commercial law</p>
                  </div>
                  <div className="service-card fade-up stagger-delay-2">
                    <h3>Immigration Law</h3>
                    <p>Visa applications, golden visa eligibility, and legal residency</p>
                  </div>
                  <div className="service-card fade-up stagger-delay-3">
                    <h3>Real Estate Law</h3>
                    <p>Property disputes, lease agreements, and transactions</p>
                  </div>
                  <div className="service-card fade-up stagger-delay-4">
                    <h3>Civil Litigation</h3>
                    <p>Dispute resolution and representation in UAE courts</p>
                  </div>
                  <div className="service-card fade-up">
                    <h3>Debt Settlement</h3>
                    <p>Financial dispute resolution and debt recovery services</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section Placeholder */}
            <section id="contact" className="content-section" data-scroll-section>
              <div className="container">
                <div className="content-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2>Get in Touch</h2>
                  <p>
                    Ready to discuss your legal needs? Contact us today for expert legal 
                    support in the UAE.
                  </p>
                </div>
                
                <div className="contact-form">
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" required />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea rows={5} required></textarea>
                    </div>
                    <button type="submit" className="form-submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </main>
          
          {/* Footer */}
          <footer className="footer" data-scroll-section>
            <div className="container">
              <p>&copy; 2024 Precedential Law. All rights reserved.</p>
              <p>City Tower 2 - Sheikh Zayed Road, Dubai, UAE</p>
              <p>Phone: +971 50 901 4120 | Email: info@precedentiallaw.com</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default MaximaIndex;
