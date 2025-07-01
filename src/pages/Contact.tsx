
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ModernNavBar from '@/components/ModernNavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQ from '@/components/FAQ';
import { Mail, Phone, Clock, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consent: false
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Precedential Law – UAE Legal Help</title>
        <meta name="description" content="Contact Precedential Law for expert legal services in the UAE. Schedule a consultation with our team for business, family, real estate, immigration, or criminal law matters." />
        <meta name="keywords" content="contact UAE lawyer, legal consultation UAE, UAE legal help, legal services contact UAE" />
        <link rel="canonical" href="https://precedentiallaw.com/contact" />
      </Helmet>
      
      <ModernNavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                Contact Our Legal <span className="text-emerald-600">Experts</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to discuss your legal needs? Our team is here to help. Contact us today to schedule a confidential consultation with experienced UAE legal professionals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in Touch</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+971509014120" className="hover:text-emerald-600 transition-colors">+971 50 901 4120</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@precedentiallaw.com" className="hover:text-emerald-600 transition-colors">info@precedentiallaw.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-600">
                        <a href="https://wa.me/971509014120" className="hover:text-emerald-600 transition-colors">+971 50 901 4120</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                      <p className="text-gray-600 leading-relaxed">
                        City Tower 2 - Sheikh Zayed Road<br />
                        Trade Centre - Trade Centre 1<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Thursday: 9:00 AM - 5:00 PM<br />
                        Friday: 9:00 AM - 12:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/971509014120" 
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp Now</span>
                  </a>
                  <a 
                    href="tel:+971509014120" 
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Send Us a Message</h2>
                
                <div className="card-clean p-8">
                  {formSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-lg text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                      <p>Thank you for contacting Precedential Law. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email Address *</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            placeholder="+971 XX XXX XXXX"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">Legal Service Required *</label>
                        <select 
                          id="service" 
                          name="service" 
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="Family Law">Family Law</option>
                          <option value="Business Law">Business & Commercial Law</option>
                          <option value="Immigration Law">Immigration Law</option>
                          <option value="Real Estate Law">Real Estate Law</option>
                          <option value="Civil Litigation">Civil Litigation</option>
                          <option value="Legal Consultation">Legal Consultation</option>
                          <option value="Other">Other Legal Services</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">Your Message *</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={6} 
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                          placeholder="Please describe your legal matter in detail..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                          I consent to having my data processed in accordance with the <a href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 underline">privacy policy</a>
                        </label>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Request Free Case Evaluation</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
              <p className="text-gray-600">Located in the heart of Dubai's business district</p>
            </div>
            <div className="rounded-xl overflow-hidden h-96 border border-gray-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.849968906363!2d55.28207412537764!3d25.204781831864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428f71bbb7b7%3A0xf60cac23f6c2e27b!2sCity%20Tower%202%20-%20Sheikh%20Zayed%20Rd%20-%20Trade%20Centre%20-%20Trade%20Centre%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1649247014287!5m2!1sen!2sae"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Precedential Law office location" 
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Common questions about our legal services</p>
              </div>
              <FAQ />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Contact;
