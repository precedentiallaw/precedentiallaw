
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Clock, Phone, FileText, Scale, Users, Heart } from 'lucide-react';

const ExpatLegalEmergencySection: React.FC = () => {
  const emergencyServices = [
    {
      title: "Travel Ban & Immigration Crisis",
      description: "Immediate legal action for visa cancellations, travel restrictions, and deportation threats",
      icon: AlertTriangle,
      urgency: "24hr response",
      color: "border-red-500 bg-red-50"
    },
    {
      title: "Cheque Bounce Cases",
      description: "Expert defense against criminal charges and civil claims from bounced cheques",
      icon: FileText,
      urgency: "Same day",
      color: "border-orange-500 bg-orange-50"
    },
    {
      title: "Employment Disputes",
      description: "Wrongful termination, unpaid wages, and labor law violations protection",
      icon: Users,
      urgency: "48hr action",
      color: "border-yellow-500 bg-yellow-50"
    },
    {
      title: "Family Legal Crisis",
      description: "Emergency divorce, custody, domestic violence, and child protection cases",
      icon: Heart,
      urgency: "Immediate",
      color: "border-purple-500 bg-purple-50"
    }
  ];

  const commonConcerns = [
    "What happens if I get arrested in Dubai?",
    "Can I leave UAE with a pending court case?",
    "How to handle a travel ban notification?",
    "What are my rights during police questioning?",
    "How to get bail for a friend or family member?",
    "What to do if my employer threatens deportation?"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white" id="expat-emergency">
      <div className="container mx-auto px-4">
        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white p-4 rounded-xl mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-bold text-lg">LEGAL EMERGENCY? Don't Panic - We're Here 24/7</span>
            <AlertTriangle className="w-6 h-6" />
          </div>
          <p className="text-sm opacity-90">Call +971 50 901 4120 now for immediate legal assistance</p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-red-600">Legal Emergency?</span> 
            <span className="text-gold-gradient block mt-2">We Protect Expats Like You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Living in Dubai as an expat comes with unique legal risks. From travel bans to employment disputes, 
            one wrong move can destroy your UAE dream. <strong className="text-red-600">Don't face it alone.</strong>
          </p>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {emergencyServices.map((service, index) => (
            <div key={service.title} className={`${service.color} border-2 p-6 rounded-xl hover:shadow-lg transition-shadow`}>
              <div className="flex items-start justify-between mb-4">
                <service.icon className="w-8 h-8 text-red-600" />
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.urgency}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-600 hover:text-white">
                Get Emergency Help
              </Button>
            </div>
          ))}
        </div>

        {/* Common Expat Legal Concerns */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">
            <Scale className="w-8 h-8 text-precedential-gold mx-auto mb-3" />
            Common UAE Legal Questions Expats Ask
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonConcerns.map((concern, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-2 h-2 bg-precedential-gold rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{concern}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual CTA Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Legal Protection */}
          <div className="bg-precedential-black text-white p-8 rounded-xl">
            <Shield className="w-12 h-12 text-precedential-gold mb-4" />
            <h3 className="text-2xl font-bold mb-4">Personal Legal Protection</h3>
            <p className="mb-6 opacity-90">
              Facing divorce, employment issues, or immigration problems? Get immediate legal protection 
              designed specifically for UAE expats and residents.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-precedential-gold" />
                <span className="text-sm">24/7 emergency legal hotline</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-precedential-gold" />
                <span className="text-sm">Same-day consultation available</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-precedential-gold" />
                <span className="text-sm">Fixed-fee personal legal services</span>
              </div>
            </div>
            <Button className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Get Personal Legal Help
            </Button>
          </div>

          {/* Corporate Legal Services */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <Scale className="w-12 h-12 text-precedential-gold mb-4" />
            <h3 className="text-2xl font-bold mb-4">Corporate Legal Excellence</h3>
            <p className="mb-6 text-gray-700">
              Protecting high-value businesses and executives with sophisticated legal strategies. 
              From company formation to complex commercial litigation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-precedential-gold" />
                <span className="text-sm">AED 2B+ in assets protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-precedential-gold" />
                <span className="text-sm">2000+ executives served</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-precedential-gold" />
                <span className="text-sm">Zero corporate legal disasters</span>
              </div>
            </div>
            <Button variant="outline" className="w-full border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
              Explore Corporate Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpatLegalEmergencySection;
