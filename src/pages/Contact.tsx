
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQ from '@/components/FAQ';
import ScrollReveal from '@/components/ScrollReveal';
import { Helmet } from 'react-helmet';
import { Map, MessageSquare, Mail, Phone, Clock, MapPin } from 'lucide-react';

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
        <title>Contact Precedential Law | Dubai Legal Consultancy</title>
        <meta name="description" content="Contact Precedential Law for expert legal services in Dubai. Schedule a consultation with our team for business, family, real estate, immigration, or criminal law matters." />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-precedential-black py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Ready to discuss your legal needs? Our team is here to help. Contact us today to schedule a confidential consultation.
            </p>
          </div>
        </div>
        
        {/* Contact Information & Form */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-5">
                        <Phone className="w-5 h-5 text-precedential-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Phone</h3>
                        <p className="text-precedential-black/70">
                          <a href="tel:+971509014120" className="hover:text-precedential-gold">+971 50 901 4120</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-5">
                        <Mail className="w-5 h-5 text-precedential-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Email</h3>
                        <p className="text-precedential-black/70">
                          <a href="mailto:info@uaeprecedentiallaw.com" className="hover:text-precedential-gold">info@uaeprecedentiallaw.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-5">
                        <MessageSquare className="w-5 h-5 text-precedential-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                        <p className="text-precedential-black/70">
                          <a href="https://wa.me/971509014120" className="hover:text-precedential-gold">+971 50 901 4120</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-5">
                        <MapPin className="w-5 h-5 text-precedential-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Office Location</h3>
                        <p className="text-precedential-black/70">
                          City Tower 2 - Sheikh Zayed Rd<br />
                          Trade Centre - Trade Centre 1<br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-precedential-gold/10 flex items-center justify-center mr-5">
                        <Clock className="w-5 h-5 text-precedential-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Working Hours</h3>
                        <p className="text-precedential-black/70">
                          Monday - Thursday: 9:00 AM - 5:00 PM<br />
                          Friday: 9:00 AM - 12:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Map */}
                  <div className="mt-12">
                    <h3 className="text-lg font-bold mb-4">Find Us</h3>
                    <div className="rounded-xl overflow-hidden h-[300px] border border-gray-200">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.849968906363!2d55.28207412537764!3d25.204781831864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428f71bbb7b7%3A0xf60cac23f6c2e27b!2sCity%20Tower%202%20-%20Sheikh%20Zayed%20Rd%20-%20Trade%20Centre%20-%20Trade%20Centre%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1649247014287!5m2!1sen!2sae"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Precedential Law office location" 
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* FAQ Section */}
                  <div className="mt-12">
                    <h3 className="text-lg font-bold mb-4">Frequently Asked Questions</h3>
                    <FAQ />
                  </div>
                </div>
                
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-8">Send Us a Message</h2>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    {formSubmitted ? (
                      <div className="bg-green-50 text-green-700 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                        <p>Thank you for contacting Precedential Law. We'll get back to you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                              placeholder="Your email"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                              placeholder="Your phone number"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium mb-1">Service Interest *</label>
                          <select 
                            id="service" 
                            name="service" 
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                          >
                            <option value="">Select a service</option>
                            <option value="Commercial Law">Commercial & Business Law</option>
                            <option value="Family Law">Family Law & Wills</option>
                            <option value="Real Estate Law">Real Estate Law</option>
                            <option value="Debt Settlement">Debt Settlement & Civil Litigation</option>
                            <option value="Immigration Law">Immigration Law</option>
                            <option value="Criminal Defense">Criminal Defense</option>
                            <option value="Other">Other Legal Services</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                          <textarea 
                            id="message" 
                            name="message" 
                            rows={5} 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                            placeholder="Please describe your legal concern or inquiry"
                          ></textarea>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                          <label htmlFor="consent" className="text-sm text-gray-600">
                            I consent to having my data processed in accordance with the <a href="/privacy-policy" className="text-precedential-gold hover:underline">privacy policy</a>
                          </label>
                        </div>
                        
                        <button 
                          type="submit" 
                          className="w-full py-3 rounded-xl font-medium transition-all duration-300 
                                  bg-precedential-black text-white border-2 border-precedential-gold 
                                  hover:bg-precedential-gold hover:text-precedential-black"
                        >
                          Submit Request
                        </button>
                      </form>
                    )}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-precedential-black/70">
                      We value your inquiry and aim to respond promptly. We look forward to hearing from you and exploring how Precedential Law can assist you in achieving your legal objectives in the UAE.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Contact;
