
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, FileText, Scale, Home, DollarSign, Baby } from 'lucide-react';

const DivorceLawyersDubai: React.FC = () => {
  const services = [
    {
      title: "Divorce Proceedings",
      description: "Complete legal representation for contested and uncontested divorce cases in UAE courts",
      icon: Heart
    },
    {
      title: "Child Custody & Support",
      description: "Protecting children's rights and securing fair custody arrangements and financial support",
      icon: Baby
    },
    {
      title: "Asset Division",
      description: "Fair distribution of marital assets, property, and financial settlements",
      icon: DollarSign
    },
    {
      title: "Alimony & Maintenance",
      description: "Securing appropriate spousal support and maintenance arrangements",
      icon: Scale
    },
    {
      title: "Domestic Violence Protection",
      description: "Emergency protection orders and legal safeguards against domestic abuse",
      icon: Shield
    },
    {
      title: "International Custody",
      description: "Cross-border custody disputes and international family law matters",
      icon: Users
    }
  ];

  const divorceProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Confidential assessment of your situation and legal options available under UAE law"
    },
    {
      step: "2", 
      title: "Mediation Attempt",
      description: "Court-mandated family guidance and mediation sessions as required by UAE Personal Status Law"
    },
    {
      step: "3",
      title: "Filing Petition",
      description: "Formal divorce petition filing with supporting documentation and evidence"
    },
    {
      step: "4",
      title: "Court Proceedings",
      description: "Representation during hearings, evidence presentation, and legal arguments"
    },
    {
      step: "5",
      title: "Final Decree",
      description: "Obtaining final divorce decree and implementing custody and financial arrangements"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Divorce Lawyers Dubai | UAE Family Law Experts | Child Custody | Precedential Law</title>
        <meta name="description" content="Expert divorce lawyers in Dubai specializing in UAE family law. Child custody, asset division, alimony, and domestic violence protection. Confidential consultations available." />
        <meta name="keywords" content="divorce lawyers Dubai, family law UAE, child custody Dubai, divorce attorney, UAE divorce law, family court Dubai, alimony UAE, domestic violence lawyer" />
        <link rel="canonical" href="https://precedentiallaw.com/services/divorce-lawyers-dubai" />
        
        <meta property="og:title" content="Expert Divorce Lawyers Dubai | UAE Family Law Specialists" />
        <meta property="og:description" content="Compassionate and effective divorce representation in Dubai. Expert family law attorneys handling custody, asset division, and protection orders." />
        <meta property="og:url" content="https://precedentiallaw.com/services/divorce-lawyers-dubai" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Divorce Lawyers Dubai - Precedential Law",
            "description": "Expert divorce and family law services in Dubai, UAE",
            "provider": {
              "@type": "LegalService",
              "name": "Precedential Law",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "City Tower 2 - Sheikh Zayed Rd",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            },
            "areaServed": "Dubai, UAE",
            "serviceType": "Divorce and Family Law"
          })}
        </script>
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Expert Divorce Lawyers in <span className="text-gold-gradient">Dubai</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Compassionate legal representation for family law matters. Protecting your rights and your children's future during difficult times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Confidential Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Emergency Protection
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Comprehensive Divorce & Family Law Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Understanding UAE Divorce Law</h2>
              <div className="prose max-w-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">For UAE Nationals</h3>
                    <p className="text-gray-600 mb-4">UAE nationals are subject to UAE Personal Status Law based on Islamic Sharia principles. This includes specific procedures for:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Talaq (husband-initiated divorce)</li>
                      <li>Khula (wife-initiated divorce)</li>
                      <li>Mubarat (mutual consent divorce)</li>
                      <li>Iddah period observance</li>
                      <li>Mahr (dower) arrangements</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">For Expats & Non-Muslims</h3>
                    <p className="text-gray-600 mb-4">Non-Muslim expatriates have options under UAE law:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Personal Status Court jurisdiction</li>
                      <li>Home country law application</li>
                      <li>DIFC Courts for qualifying cases</li>
                      <li>Civil law procedures</li>
                      <li>International treaty considerations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">The Divorce Process in Dubai</h2>
              <div className="space-y-8">
                {divorceProcess.map((step, index) => (
                  <div key={step.step} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Child Custody in UAE</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Custody Principles</h3>
                  <p className="text-gray-600 mb-4">UAE courts prioritize the child's best interests when determining custody arrangements:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Child's age and gender considerations</li>
                    <li>Financial stability of parents</li>
                    <li>Moral fitness and character</li>
                    <li>Continuity of care and education</li>
                    <li>Child's expressed preferences (age-dependent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">International Considerations</h3>
                  <p className="text-gray-600 mb-4">For expat families, additional factors apply:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Travel restrictions and exit permits</li>
                    <li>Hague Convention implications</li>
                    <li>Embassy notification requirements</li>
                    <li>Cross-border enforcement</li>
                    <li>Cultural sensitivity assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Immediate Legal Support?</h2>
            <p className="text-xl mb-8 opacity-90">
              Family law matters require urgent attention. Contact our experienced divorce lawyers for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Emergency Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Protection Order Help
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default DivorceLawyersDubai;
