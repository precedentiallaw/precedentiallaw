
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Plane, FileCheck, Users, Clock } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';

const ImmigrationLaw: React.FC = () => {
  const services = [
    {
      title: "UAE Visa Applications",
      description: "Complete assistance with tourist, business, and residence visa applications across all UAE emirates",
      icon: Plane
    },
    {
      title: "UAE Residency Permits",
      description: "Expert guidance for obtaining and renewing UAE residence permits for individuals and families",
      icon: FileCheck
    },
    {
      title: "Family Sponsorship in UAE",
      description: "Comprehensive support for sponsoring family members in the UAE under current immigration laws",
      icon: Users
    },
    {
      title: "Visa Status Changes",
      description: "Assistance with changing visa status and resolving immigration issues within the UAE",
      icon: Clock
    }
  ];

  const faqData = [
    {
      question: "What types of UAE visas can expatriates apply for?",
      answer: "Expatriates can apply for various UAE visas including tourist visas, business/visit visas, employment visas, investor visas, retirement visas, and the UAE Golden Visa for long-term residency. Each visa type has specific requirements and benefits."
    },
    {
      question: "How long does it take to process a UAE residence permit?",
      answer: "UAE residence permit processing typically takes 2-4 weeks once all required documents are submitted. However, processing times may vary depending on the emirate, visa type, and completeness of documentation."
    },
    {
      question: "Can I sponsor my family members for UAE residency?",
      answer: "Yes, UAE residents with sufficient income can sponsor their spouse, children, and in some cases parents for UAE residency. Minimum salary requirements and other conditions apply depending on the emirate and your visa type."
    },
    {
      question: "What is the UAE Golden Visa and who qualifies?",
      answer: "The UAE Golden Visa is a long-term residency program offering 5 or 10-year renewable visas. Eligible categories include investors, entrepreneurs, specialized talents, researchers, outstanding students, and certain professionals in healthcare and education."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Immigration Law Services | UAE Visa Lawyer | Golden Visa UAE | Precedential Law</title>
        <meta name="description" content="Expert UAE immigration legal services. Visa applications, residency permits, family sponsorship, Golden Visa applications, and immigration advisory for expatriates across the UAE." />
        <meta name="keywords" content="UAE immigration law, UAE visa services, residency permit UAE, family sponsorship UAE, visa applications UAE, immigration lawyer UAE, Golden Visa UAE, UAE visa consultant, expat visa services UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/services/immigration-law" />
        
        <meta property="og:title" content="UAE Immigration Law Services | Expert Visa & Residency Legal Support" />
        <meta property="og:description" content="Professional UAE immigration legal services including visa applications, residency permits, and Golden Visa support for expatriates." />
        <meta property="og:url" content="https://precedentiallaw.com/services/immigration-law" />
      </Helmet>
      
      {/* Schema Markup */}
      <ArticleSchema
        headline="UAE Immigration Law Services for Expatriates and International Professionals"
        description="Comprehensive immigration legal services including visa applications, residency permits, and family sponsorship in the UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/immigration-law"
      />
      <FAQSchema faqs={faqData} />
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                UAE Immigration Law Services for <span className="text-gold-gradient">Expatriates</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Navigate UAE immigration procedures with confidence through expert legal guidance. From visa applications to Golden Visa programs, we provide comprehensive immigration support across all UAE emirates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Get Immigration Help
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download UAE Visa Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold">Our UAE Immigration Services</h2>
              <p className="text-lg text-gray-600 mt-4">Comprehensive immigration legal support for all your UAE residency needs</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <article key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-precedential-gold mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Golden Visa Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <header className="mb-8">
                <h2 className="text-3xl font-playfair font-bold">UAE Golden Visa Program</h2>
                <p className="text-lg text-gray-600 mt-4">
                  The UAE Golden Visa offers long-term residency (5-10 years) for qualified individuals and their families, providing greater stability and opportunities in the UAE.
                </p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3">Investors & Entrepreneurs</h3>
                  <p className="text-gray-600">Real estate investors, business owners, and entrepreneurs meeting specific investment criteria.</p>
                </article>
                <article className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3">Specialized Professionals</h3>
                  <p className="text-gray-600">Doctors, engineers, scientists, researchers, and other specialized talent categories.</p>
                </article>
                <article className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3">Outstanding Students</h3>
                  <p className="text-gray-600">High-achieving students and graduates from accredited universities worldwide.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 className="text-3xl font-playfair font-bold">UAE Immigration FAQ</h2>
                <p className="text-lg text-gray-600 mt-4">Common questions about UAE immigration and visa processes</p>
              </header>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <article key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Secure Your UAE Residency?</h2>
            <p className="text-xl mb-8 opacity-90">Get expert immigration legal support for your UAE visa and residency journey.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule Immigration Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default ImmigrationLaw;
