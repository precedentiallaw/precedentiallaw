
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Privacy Policy | Precedential Law - Client Data Protection & Confidentiality"
        description="Our comprehensive privacy policy detailing how Precedential Law protects your personal information and maintains attorney-client privilege in compliance with UAE data protection laws."
        keywords="privacy policy, data protection UAE, attorney client privilege, legal confidentiality, GDPR compliance Dubai"
        canonicalUrl="https://precedentiallaw.com/privacy-policy"
        pageType="article"
      />
      
      <NavBar />
      <BreadcrumbNavigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center">
                Privacy <span className="text-gold-gradient">Policy</span>
              </h1>
              
              <div className="bg-precedential-gold/10 border-l-4 border-precedential-gold p-6 rounded-lg mb-8">
                <p className="text-lg">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 6, 2025
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-6">
                  Precedential Law ("we," "our," or "us") is committed to protecting your privacy and maintaining 
                  the confidentiality of your personal information. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website or use our legal services.
                </p>

                <h2 className="text-2xl font-bold mb-4">2. Attorney-Client Privilege</h2>
                <p className="mb-6">
                  All communications between you and Precedential Law are protected by attorney-client privilege 
                  under UAE Federal Law No. 35 of 1992 (UAE Civil Procedures Law) and applicable international 
                  legal standards. This privilege ensures that your confidential communications remain protected 
                  and cannot be disclosed without your express consent.
                </p>

                <h2 className="text-2xl font-bold mb-4">3. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">3.1 Personal Information</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, email address, phone number, mailing address)</li>
                  <li>Professional information (company name, job title, industry)</li>
                  <li>Legal matter details and case-specific information</li>
                  <li>Financial information for billing purposes</li>
                  <li>Government-issued identification (as required for legal representation)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.2 Technical Information</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>IP address and geolocation data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li>Providing legal consultation and representation services</li>
                  <li>Communicating about your legal matters and case updates</li>
                  <li>Processing payments and maintaining billing records</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our website and services</li>
                  <li>Sending relevant legal updates and firm communications (with your consent)</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">5. Information Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>With your consent:</strong> When you explicitly authorize disclosure</li>
                  <li><strong>Legal compliance:</strong> To comply with court orders, legal processes, or regulatory requirements</li>
                  <li><strong>Professional consultation:</strong> With other legal professionals when necessary for your representation</li>
                  <li><strong>Service providers:</strong> With trusted third-party vendors who assist in our operations (subject to confidentiality agreements)</li>
                  <li><strong>Emergency situations:</strong> To prevent harm to you or others when legally permitted</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                <p className="mb-6">
                  We implement industry-standard security measures to protect your information, including:
                  encryption of sensitive data, secure servers, access controls, regular security audits, 
                  and staff training on confidentiality protocols. However, no method of transmission over 
                  the internet is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p className="mb-6">
                  We retain your personal information for as long as necessary to provide our services and 
                  comply with legal obligations. Client files are typically retained for a minimum of 7 years 
                  after case closure, in accordance with UAE legal profession requirements and international 
                  best practices.
                </p>

                <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your information (subject to legal and professional obligations)</li>
                  <li>Withdraw consent for non-essential communications</li>
                  <li>Lodge complaints with relevant data protection authorities</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="mb-6">
                  Our website uses cookies to enhance your browsing experience and provide personalized content. 
                  You can control cookie settings through your browser preferences. Disabling cookies may affect 
                  certain website functionalities.
                </p>

                <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
                <p className="mb-6">
                  As a UAE-based law firm, your information is primarily processed within the United Arab Emirates. 
                  If we transfer data internationally, we ensure appropriate safeguards are in place to protect 
                  your information in accordance with UAE data protection laws and international standards.
                </p>

                <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                  personal information from children without parental consent.
                </p>

                <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal 
                  requirements. We will notify you of significant changes through our website or direct communication.
                </p>

                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="mb-4">For privacy-related inquiries or to exercise your rights, contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Precedential Law</strong><br />
                  City Tower 2 - Sheikh Zayed Road<br />
                  Dubai, United Arab Emirates<br />
                  Email: privacy@precedentiallaw.com<br />
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

export default PrivacyPolicy;
