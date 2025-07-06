
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertTriangle, Search, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

const TravelBanCheck: React.FC = () => {
  const [formData, setFormData] = useState({
    emiratesId: '',
    passport: '',
    fullName: '',
    phoneNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission - in real implementation, this would connect to backend
    alert('Thank you for your inquiry. Our legal team will contact you within 24 hours to assist with your travel ban check.');
  };

  return (
    <>
      <Helmet>
        <title>Check Travel Ban UAE | Travel Ban Status Dubai | Remove Travel Ban</title>
        <meta name="description" content="Check if you have a travel ban in UAE. Expert legal assistance to remove travel ban Dubai, Sharjah, Abu Dhabi. Free consultation on travel restrictions." />
        <meta name="keywords" content="travel ban UAE, travel ban check Dubai, remove travel ban, travel restriction UAE, exit ban Dubai, travel ban status" />
        <link rel="canonical" href="https://precedentiallaw.com/tools/travel-ban-check" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Check If You Have a Travel Ban in UAE
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Uncertain about your travel status? Our legal experts can help you check for travel bans 
                  and provide guidance on removal procedures if needed.
                </p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-slate-50 rounded-xl p-8">
                  <div className="text-center mb-8">
                    <Search className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Travel Ban Check Form</h2>
                    <p className="text-slate-600">
                      Fill out the form below and our legal team will investigate your travel ban status
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Emirates ID Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.emiratesId}
                        onChange={(e) => setFormData({...formData, emiratesId: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="784-XXXX-XXXXXXX-X"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Passport Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.passport}
                        onChange={(e) => setFormData({...formData, passport: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Your passport number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Full name as per passport"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <div className="text-sm text-amber-800">
                          <strong>Privacy Notice:</strong> All information provided is strictly confidential 
                          and will only be used for legal assessment purposes. We do not share personal 
                          information with third parties.
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Check Travel Ban Status
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  What Happens After You Submit the Form?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-amber-600 font-bold">1</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Legal Review</h3>
                    <p className="text-slate-600">Our legal team reviews your information and initiates official checks</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-amber-600 font-bold">2</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Status Check</h3>
                    <p className="text-slate-600">We conduct thorough investigations through official UAE channels</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Report & Guidance</h3>
                    <p className="text-slate-600">You receive a detailed report with next steps if action is needed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  If you suspect you have a travel ban or need urgent legal assistance, 
                  contact our emergency legal support line.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+971509014120">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                      <Phone className="w-5 h-5 mr-2" />
                      Emergency Legal Support
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton phoneNumber="971509014120" />
      </div>
    </>
  );
};

export default TravelBanCheck;
