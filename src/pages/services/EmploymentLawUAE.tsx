
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Users, FileText, Shield, DollarSign, Clock, AlertTriangle } from 'lucide-react';

const EmploymentLawUAE: React.FC = () => {
  const services = [
    {
      title: "Employment Contracts",
      description: "Drafting, reviewing, and negotiating employment agreements under UAE Labour Law",
      icon: FileText
    },
    {
      title: "Wrongful Termination",
      description: "Legal representation for unfair dismissal and termination disputes",
      icon: AlertTriangle
    },
    {
      title: "Workplace Discrimination",
      description: "Protection against discrimination and harassment in the workplace",
      icon: Shield
    },
    {
      title: "End of Service Benefits",
      description: "Ensuring proper calculation and payment of gratuity and benefits",
      icon: DollarSign
    },
    {
      title: "Labour Disputes",
      description: "Resolution of employer-employee conflicts through MOL and courts",
      icon: Users
    },
    {
      title: "Working Time Issues",
      description: "Overtime, leave entitlements, and working hours compliance",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Employment Law UAE | Labour Lawyers Dubai | Workplace Rights | Precedential Law</title>
        <meta name="description" content="Expert employment law services in UAE. Labour lawyers specializing in workplace rights, employment contracts, wrongful termination, and labour disputes." />
        <meta name="keywords" content="employment law UAE, labour lawyers Dubai, workplace rights, employment contracts, wrongful termination, labour disputes UAE, end of service benefits" />
        <link rel="canonical" href="https://precedentiallaw.com/services/employment-law-uae" />
        
        <meta property="og:title" content="Employment Law UAE | Expert Labour Lawyers Dubai" />
        <meta property="og:description" content="Professional employment law services in UAE. Expert legal representation for workplace rights and labour disputes." />
        <meta property="og:url" content="https://precedentiallaw.com/services/employment-law-uae" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-precedential-black to-precedential-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Employment Law Services in <span className="text-gold-gradient">UAE</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Protecting workplace rights and resolving employment disputes. Expert legal guidance for employees and employers under UAE Labour Law.
              </p>
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Employment Rights Consultation
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Employment Law Services</h2>
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
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">UAE Labour Law Framework</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Federal Labour Law</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>UAE Federal Decree-Law No. 33/2021</li>
                    <li>Employment contract requirements</li>
                    <li>Working hours and overtime</li>
                    <li>Annual leave and sick leave</li>
                    <li>End of service gratuity</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Recent Amendments</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Flexible working arrangements</li>
                    <li>Remote work provisions</li>
                    <li>Enhanced anti-discrimination measures</li>
                    <li>Improved dispute resolution</li>
                    <li>Gender equality provisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Common Employment Issues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-bold mb-3 text-red-800">Unlawful Termination</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Dismissal without notice</li>
                      <li>Termination during sick leave</li>
                      <li>Pregnancy-related dismissal</li>
                      <li>Retaliatory termination</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                    <h3 className="text-xl font-bold mb-3 text-orange-800">Wage Disputes</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Unpaid salaries</li>
                      <li>Overtime compensation</li>
                      <li>Commission disputes</li>
                      <li>Bonus and incentive issues</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold mb-3 text-blue-800">Benefits & Entitlements</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>End of service gratuity</li>
                      <li>Annual leave disputes</li>
                      <li>Medical insurance coverage</li>
                      <li>Repatriation expenses</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold mb-3 text-green-800">Workplace Issues</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Harassment and discrimination</li>
                      <li>Unsafe working conditions</li>
                      <li>Contract violations</li>
                      <li>Disciplinary actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Employment Law Assistance</h2>
            <p className="text-xl mb-8 opacity-90">
              Protect your workplace rights with expert employment law representation in the UAE.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Labour Law Consultation
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

export default EmploymentLawUAE;
