
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Heart, FileText, Users, Shield } from 'lucide-react';
import { ArticleSchema, FAQSchema } from '@/components/ui/enhanced-schema-markup';

const FamilyLaw: React.FC = () => {
  const services = [
    {
      title: "UAE Divorce Proceedings",
      description: "Sensitive handling of divorce cases with focus on fair asset division and child welfare under UAE law",
      icon: Heart
    },
    {
      title: "Child Custody in UAE",
      description: "Protecting children's best interests in custody arrangements and visitation rights according to UAE family law",
      icon: Users
    },
    {
      title: "DIFC Wills & Estate Planning",
      description: "UAE-compliant wills and guardianship planning for expats and nationals, including DIFC Wills registration",
      icon: FileText
    },
    {
      title: "Family Mediation Services",
      description: "Alternative dispute resolution for family matters to avoid lengthy court proceedings in UAE family courts",
      icon: Shield
    }
  ];

  const faqData = [
    {
      question: "What is the divorce process for expatriates in the UAE?",
      answer: "Expatriates in the UAE can file for divorce under UAE law or their home country's law in certain circumstances. The process involves filing a case with the UAE family court, attending mediation sessions, and if unsuccessful, proceeding to court hearings for asset division and child custody arrangements."
    },
    {
      question: "How does child custody work in the UAE for expat families?",
      answer: "UAE family law generally grants custody of young children to the mother until a certain age, with visitation rights for the father. However, expat families may have options to apply their home country's law in certain situations. Each case is evaluated individually based on the child's best interests."
    },
    {
      question: "Do I need a DIFC Will as an expatriate in the UAE?",
      answer: "Yes, expatriates in the UAE should strongly consider having a DIFC Will or ADGM Will to ensure their assets are distributed according to their wishes rather than UAE Sharia inheritance law. This is particularly important for non-Muslim expatriates who want to maintain control over their estate planning."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Family Law Services | Expat Divorce Lawyer | Child Custody UAE | Precedential Law</title>
        <meta name="description" content="Expert UAE family law services for expatriates and nationals. Specialized divorce lawyers, child custody specialists, DIFC wills, and estate planning attorneys across the UAE." />
        <meta name="keywords" content="UAE family law, expat divorce lawyer UAE, child custody UAE, family lawyer UAE, DIFC wills, estate planning UAE, UAE divorce process, expat family law UAE, UAE marriage law" />
        <link rel="canonical" href="https://precedentiallaw.com/services/family-law" />
        
        <meta property="og:title" content="UAE Family Law Services | Expert Expat Divorce & Child Custody Lawyers" />
        <meta property="og:description" content="Compassionate UAE family law services for expatriates and nationals. Expert divorce, child custody, and estate planning legal support." />
        <meta property="og:url" content="https://precedentiallaw.com/services/family-law" />
      </Helmet>
      
      {/* Schema Markup */}
      <ArticleSchema
        headline="UAE Family Law Services for Expatriates and UAE Nationals"
        description="Comprehensive family law services including divorce, child custody, and estate planning in the UAE"
        datePublished="2025-07-01"
        dateModified="2025-07-01"
        authorName="Precedential Law"
        url="https://precedentiallaw.com/services/family-law"
      />
      <FAQSchema faqs={faqData} />
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                UAE Family Law Services for <span className="text-gold-gradient">Expatriates</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Compassionate legal support for family matters across the UAE. We understand the sensitive nature of family disputes and provide caring, effective representation for expatriates and UAE nationals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Confidential Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download Family Law Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold">Our UAE Family Law Services</h2>
              <p className="text-lg text-gray-600 mt-4">Comprehensive legal support for all family law matters in the UAE</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-precedential-gold mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Expat-Specific Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <header className="mb-8">
                <h2 className="text-3xl font-playfair font-bold">Specialized Support for Expat Families in the UAE</h2>
                <p className="text-lg text-gray-600 mt-4">
                  Living in the UAE as an expatriate family comes with unique legal considerations. Our team understands the complexities of cross-cultural family law and provides specialized guidance for international families.
                </p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">DIFC Wills for UAE Expatriates</h3>
                  <p className="text-gray-600">Ensure your assets are protected and your children's guardianship is secured under UAE law with proper estate planning.</p>
                </article>
                <article className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Cross-Border Custody Issues</h3>
                  <p className="text-gray-600">Navigate international custody arrangements and jurisdictional challenges between the UAE and your home country.</p>
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
                <h2 className="text-3xl font-playfair font-bold">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 mt-4">Common questions about family law in the UAE</p>
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
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Compassionate Legal Support in the UAE?</h2>
            <p className="text-xl mb-8 opacity-90">Contact our UAE family law experts for sensitive, professional guidance tailored to expatriate and UAE national families.</p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule Private Consultation
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

export default FamilyLaw;
