
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import SEOHead from '@/components/SEOHead';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Terms of Service | Precedential Law - Legal Service Terms & Conditions"
        description="Terms of service and conditions for legal representation by Precedential Law. Understanding your rights and obligations when engaging our Dubai legal services."
        keywords="terms of service, legal service conditions, attorney terms, Dubai law firm terms, legal representation agreement"
        canonicalUrl="https://precedentiallaw.com/terms-of-service"
        pageType="article"
      />
      
      <NavBar />
      <BreadcrumbNavigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">
                Terms of <span className="text-gold-gradient">Service</span>
              </h1>
              
              <div className="bg-precedential-gold/10 border-l-4 border-precedential-gold p-6 rounded-lg mb-8">
                <p className="text-lg">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 6, 2025
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing our website or engaging our legal services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                  from using our services.
                </p>

                <h2 className="text-2xl font-bold mb-4">2. Attorney-Client Relationship</h2>
                <p className="mb-6">
                  An attorney-client relationship is established only through a signed engagement letter or representation 
                  agreement. Browsing our website, downloading resources, or initial consultations do not create an 
                  attorney-client relationship until formally established in writing.
                </p>

                <h2 className="text-2xl font-bold mb-4">3. Scope of Services</h2>
                <p className="mb-4">Precedential Law provides legal services including but not limited to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Business and commercial law</li>
                  <li>Family law and personal status matters</li>
                  <li>Real estate and property law</li>
                  <li>Immigration and visa services</li>
                  <li>Civil litigation and dispute resolution</li>
                  <li>Criminal defense advisory</li>
                  <li>Contract drafting and review</li>
                  <li>Estate planning and will writing</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">4. Professional Standards</h2>
                <p className="mb-6">
                  Our services are provided in accordance with UAE Federal Law, Dubai local regulations, and international 
                  legal standards. We maintain the highest standards of professional conduct as required by the UAE legal 
                  profession regulations.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. Fees and Payment</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li>Legal fees are established by written agreement and may be hourly, fixed, or contingent</li>
                  <li>Payment terms are specified in the engagement letter</li>
                  <li>Expenses and costs are charged separately unless otherwise agreed</li>
                  <li>Late payment fees may apply as specified in the agreement</li>
                  <li>Retainer fees may be required before commencement of services</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">6. Client Responsibilities</h2>
                <p className="mb-4">Clients are responsible for:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Providing accurate and complete information</li>
                  <li>Timely payment of fees and expenses</li>
                  <li>Cooperation in the legal matter</li>
                  <li>Compliance with all legal requirements and court orders</li>
                  <li>Maintaining confidentiality of privileged communications</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="mb-6">
                  Our liability is limited to the extent permitted by law and professional regulations. We maintain 
                  professional indemnity insurance as required by UAE legal profession standards. Our liability shall 
                  not exceed the fees paid for the specific matter in question.
                </p>

                <h2 className="text-2xl font-bold mb-4">8. Confidentiality</h2>
                <p className="mb-6">
                  All client information is strictly confidential and protected by attorney-client privilege. We do not 
                  disclose client information except as required by law or with explicit client consent.
                </p>

                <h2 className="text-2xl font-bold mb-4">9. Conflict of Interest</h2>
                <p className="mb-6">
                  We maintain strict conflict checking procedures. If a conflict of interest arises, we will notify 
                  affected parties immediately and take appropriate action in accordance with professional conduct rules.
                </p>

                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="mb-6">
                  Either party may terminate the attorney-client relationship with written notice. Upon termination, 
                  we will return client files and property, and the client remains responsible for fees and expenses 
                  incurred up to the termination date.
                </p>

                <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution</h2>
                <p className="mb-6">
                  Any disputes arising from our services shall be resolved through negotiation, mediation, or arbitration 
                  as specified in the engagement agreement. Disputes are subject to the jurisdiction of UAE courts.
                </p>

                <h2 className="text-2xl font-bold mb-4">12. Website Terms</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li>Information on our website is for general informational purposes only</li>
                  <li>Website content does not constitute legal advice</li>
                  <li>We reserve the right to modify website content without notice</li>
                  <li>Intellectual property rights are protected</li>
                  <li>Website use is subject to our Privacy Policy</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
                <p className="mb-6">
                  These Terms of Service are governed by UAE Federal Law and Dubai local regulations. Any legal proceedings 
                  shall be conducted in the appropriate UAE courts.
                </p>

                <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Precedential Law</strong><br />
                  City Tower 2 - Sheikh Zayed Road<br />
                  Dubai, United Arab Emirates<br />
                  Email: info@precedentiallaw.com<br />
                  Phone: +971 50 901 4120</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
