
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { AlertTriangle, FileText, Shield, Clock, Download, ExternalLink } from 'lucide-react';

const ExpatLegalGuides: React.FC = () => {
  const guides = [
    {
      title: "Complete Guide to Cheque Bounce Cases in UAE",
      description: "Everything expats need to know about bounced cheques, criminal liability, and legal defenses",
      downloadSize: "PDF - 2.3MB",
      urgency: "High Priority",
      topics: ["Criminal vs Civil liability", "New UAE bounced cheque laws", "Defense strategies", "Settlement options"],
      color: "border-red-500"
    },
    {
      title: "UAE Travel Ban & Immigration Emergency Guide",
      description: "Step-by-step guide for handling travel restrictions, visa cancellations, and deportation threats",
      downloadSize: "PDF - 1.8MB", 
      urgency: "Critical",
      topics: ["Travel ban types", "Emergency procedures", "Legal remedies", "Airport detention rights"],
      color: "border-orange-500"
    },
    {
      title: "Expat Employment Rights & Labor Disputes",
      description: "Protecting your workplace rights, handling wrongful termination, and recovering unpaid wages",
      downloadSize: "PDF - 2.1MB",
      urgency: "Medium Priority",
      topics: ["UAE Labor Law basics", "Wrongful termination claims", "End of service benefits", "Ministry of Labour procedures"],
      color: "border-yellow-500"
    },
    {
      title: "Family Law Crisis Management for Expats",
      description: "Emergency guide for divorce, child custody, domestic violence, and family visa issues",
      downloadSize: "PDF - 2.5MB",
      urgency: "High Priority", 
      topics: ["Divorce procedures", "Child custody laws", "Domestic violence protection", "Cross-border family disputes"],
      color: "border-purple-500"
    },
    {
      title: "Dubai Real Estate & Rental Disputes",
      description: "Tenant rights, landlord disputes, RERA procedures, and property investment protection",
      downloadSize: "PDF - 1.9MB",
      urgency: "Medium Priority",
      topics: ["Rental Dispute Centre procedures", "Tenant protection rights", "Security deposit recovery", "Ejari compliance"],
      color: "border-blue-500"
    },
    {
      title: "Criminal Defense Emergency Handbook",
      description: "Your rights during arrest, police questioning, detention, and criminal proceedings in UAE",
      downloadSize: "PDF - 2.7MB",
      urgency: "Critical",
      topics: ["Arrest procedures", "Police questioning rights", "Bail applications", "Criminal court process"],
      color: "border-red-600"
    }
  ];

  const emergencyContacts = [
    { service: "Legal Emergency Hotline", contact: "+971 50 901 4120", available: "24/7" },
    { service: "Police Emergency", contact: "999", available: "24/7" },
    { service: "UAE Embassy (Your Country)", contact: "Contact your embassy", available: "Business hours" },
    { service: "Ministry of Labour", contact: "800 665", available: "Working hours" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Legal Emergency Guides for Expats | Free Downloads | Precedential Law</title>
        <meta name="description" content="Free comprehensive legal guides for UAE expats. Emergency procedures for cheque bounce, travel bans, employment disputes, family law, and criminal defense." />
        <meta name="keywords" content="UAE legal guide expats, cheque bounce UAE, travel ban Dubai, employment rights UAE, expat legal emergency, Dubai legal help" />
        <link rel="canonical" href="https://precedentiallaw.com/expat-legal-guides" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              UAE Legal Emergency Guides
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Free comprehensive legal guides to protect yourself and your family in the UAE. 
              Download now and know your rights before you need them.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <Clock className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Legal Emergency? Call Now</h3>
              <p className="text-2xl font-bold">+971 50 901 4120</p>
              <p className="text-sm opacity-80">24/7 Emergency Legal Hotline</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Essential Legal Guides for UAE Expats
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each guide contains step-by-step procedures, legal rights, emergency contacts, and proven strategies 
                used by our legal team to protect thousands of expats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {guides.map((guide, index) => (
                <div key={guide.title} className={`bg-white p-6 rounded-xl shadow-lg border-2 ${guide.color} hover:shadow-xl transition-shadow`}>
                  <div className="flex justify-between items-start mb-4">
                    <FileText className="w-8 h-8 text-red-600" />
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        guide.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                        guide.urgency === 'High Priority' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {guide.urgency}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{guide.downloadSize}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {guide.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-precedential-gold rounded-full mr-2 flex-shrink-0"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                    <Button variant="outline" className="px-4">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contacts */}
            <div className="bg-precedential-black text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-center mb-8">
                <Shield className="w-8 h-8 mx-auto mb-3 text-precedential-gold" />
                UAE Emergency Legal Contacts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <div key={contact.service} className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">{contact.service}</h4>
                    <p className="text-precedential-gold font-semibold">{contact.contact}</p>
                    <p className="text-sm opacity-80">{contact.available}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Schedule Legal Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default ExpatLegalGuides;
