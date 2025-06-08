
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Users, Heart, Home, Briefcase, FileText, Shield, Globe, CheckCircle, AlertTriangle, Clock, Phone, DollarSign } from 'lucide-react';

const ExpatLegalServicesDubaiEnhanced: React.FC = () => {
  const urgentServices = [
    {
      title: "Travel Ban Emergency",
      description: "Immediate action for travel restrictions and visa cancellations",
      price: "AED 2,500",
      time: "Same Day",
      icon: AlertTriangle,
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700"
    },
    {
      title: "Cheque Bounce Defense",
      description: "Criminal defense and civil settlement negotiations",
      price: "AED 3,500",
      time: "24 Hours",
      icon: FileText,
      color: "bg-orange-50 border-orange-200", 
      textColor: "text-orange-700"
    },
    {
      title: "Employment Crisis",
      description: "Wrongful termination and labor dispute resolution",
      price: "AED 2,000",
      time: "48 Hours",
      icon: Briefcase,
      color: "bg-yellow-50 border-yellow-200",
      textColor: "text-yellow-700"
    },
    {
      title: "Family Emergency",
      description: "Divorce, custody, and domestic violence protection",
      price: "AED 4,000",
      time: "Immediate",
      icon: Heart,
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700"
    }
  ];

  const personalLegalPackages = [
    {
      name: "Basic Protection",
      price: "AED 1,999",
      period: "/month",
      description: "Essential legal protection for individuals",
      features: [
        "Unlimited legal consultations",
        "Document review and drafting",
        "Emergency legal hotline",
        "Basic court representation",
        "Visa and immigration guidance"
      ],
      popular: false
    },
    {
      name: "Family Guardian", 
      price: "AED 3,999",
      period: "/month",
      description: "Comprehensive protection for expatriate families",
      features: [
        "Everything in Basic Protection",
        "Family law specialist access",
        "Child custody representation",
        "Education and school legal issues",
        "Cross-border legal coordination",
        "Emergency family relocation support"
      ],
      popular: true
    },
    {
      name: "Executive Shield",
      price: "AED 7,999", 
      period: "/month",
      description: "Premium protection for high-net-worth expats",
      features: [
        "Everything in Family Guardian",
        "Senior partner dedicated support",
        "Asset protection planning",
        "International legal coordination",
        "Reputation management",
        "VIP court representation",
        "24/7 personal legal concierge"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "British Expat, Marketing Director",
      quote: "When my employer tried to terminate me without cause, Precedential Law recovered my full benefits plus compensation. They understood exactly what expats face.",
      case: "Employment Dispute"
    },
    {
      name: "Ahmed Hassan",
      role: "Egyptian Engineer",
      quote: "Facing a travel ban was my worst nightmare. The team got it lifted in 3 days and saved my career. Worth every dirham.",
      case: "Travel Ban Emergency"
    },
    {
      name: "Maria Santos",
      role: "Filipino Nurse",
      quote: "Going through divorce as an expat felt impossible until I found this firm. They protected my children's custody and my residence status.",
      case: "Family Law Crisis"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Expat Legal Services Dubai | Personal Legal Protection | Fixed-Fee Services</title>
        <meta name="description" content="Specialized legal services for UAE expats. Fixed-fee personal legal protection including emergency response, family law, employment disputes, and immigration." />
        <meta name="keywords" content="expat legal services Dubai, personal legal protection UAE, fixed fee legal services, expat family lawyer Dubai, UAE immigration lawyer" />
        <link rel="canonical" href="https://precedentiallaw.com/expat-legal-services-enhanced" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-precedential-black via-gray-900 to-precedential-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* Urgency Banner */}
              <div className="bg-red-600 text-white py-3 px-6 rounded-full inline-block mb-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-semibold">Legal Emergency? Call +971 50 901 4120 NOW</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                Personal Legal Protection 
                <span className="text-gold-gradient block mt-2">For UAE Expats</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                <strong className="text-red-400">Don't let legal problems destroy your UAE dream.</strong> Get immediate, 
                affordable legal protection designed specifically for expatriates and their families.
              </p>

              {/* Social Proof */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Users className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold">3,000+</div>
                  <div className="text-sm opacity-80">Expats Protected</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <Clock className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Emergency Response</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Get Emergency Legal Help
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                  Download Free Legal Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Emergency Legal Services - <span className="text-red-600">Fixed Fees</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for urgent legal matters. No hidden costs, no hourly billing surprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {urgentServices.map((service, index) => (
                <div key={service.title} className={`${service.color} border-2 p-6 rounded-xl hover:shadow-lg transition-shadow`}>
                  <div className="text-center mb-4">
                    <service.icon className={`w-12 h-12 mx-auto mb-3 ${service.textColor}`} />
                    <div className="text-2xl font-bold text-precedential-black">{service.price}</div>
                    <div className="text-sm text-gray-600">{service.time} Response</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Get Help Now
                  </Button>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600 text-white p-6 rounded-xl text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Legal Emergency Hotline</h3>
              <div className="text-3xl font-bold mb-2">+971 50 901 4120</div>
              <p className="opacity-90">Available 24/7 for immediate legal assistance</p>
            </div>
          </div>
        </section>

        {/* Monthly Protection Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Monthly Legal Protection Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proactive legal protection with predictable monthly fees. Choose the plan that fits your family's needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {personalLegalPackages.map((pkg, index) => (
                <div key={pkg.name} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  pkg.popular ? 'border-precedential-gold bg-gradient-to-br from-yellow-50 to-white' : 'border-gray-200'
                } relative`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-precedential-gold text-precedential-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-precedential-gold mb-1">
                      {pkg.price}<span className="text-lg text-gray-600">{pkg.period}</span>
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full ${
                    pkg.popular 
                      ? 'bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    Choose {pkg.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">
              Real Stories from Protected Expats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="mb-4">
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="italic text-gray-700">"{testimonial.quote}"</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-precedential-gold font-medium mt-1">{testimonial.case}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Don't Wait for Legal Problems to Find You
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Every day in Dubai, expats face unexpected legal challenges. Be prepared with professional 
              legal protection that understands your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Start Protection Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Schedule Free Consultation
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

export default ExpatLegalServicesDubaiEnhanced;
