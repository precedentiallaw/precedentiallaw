
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    setFormSubmitted(true);
    
    // Reset form after submission (in a real app you might want different behavior)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-precedential-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-precedential-gold blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">
              Contact <span className="text-gold-gradient">Precedential</span> Law
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ready to experience precedential legal services? Contact us today for a consultation with our expert team.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl overflow-hidden border border-precedential-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-precedential-black p-8 md:p-10">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-white">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 text-precedential-gold mr-4">📍</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Visit Us</h4>
                      <p className="text-white/70">
                        Business Bay, Sheikh Zayed Road<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 text-precedential-gold mr-4">📱</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="text-white/70">
                        +971 4 456 7890<br />
                        +971 50 123 4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 text-precedential-gold mr-4">✉️</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="text-white/70">
                        info@precedentiallaw.com<br />
                        legal@precedentiallaw.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 text-precedential-gold mr-4">⏰</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Working Hours</h4>
                      <p className="text-white/70">
                        Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-bold text-white mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                      <a 
                        key={social} 
                        href={`#${social}`} 
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-precedential-gold transition-colors"
                        aria-label={`Follow us on ${social}`}
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10">
                <h3 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h3>
                
                {formSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-xl">
                    <h4 className="font-bold mb-2">Thank You!</h4>
                    <p>Your message has been received. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="Corporate Law">Corporate Law</option>
                        <option value="Litigation">Litigation</option>
                        <option value="Real Estate Law">Real Estate Law</option>
                        <option value="Family Law">Family Law</option>
                        <option value="Intellectual Property">Intellectual Property</option>
                        <option value="Criminal Defense">Criminal Defense</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold transition-colors"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit" 
                        className="w-full py-3 rounded-xl font-medium transition-all duration-300 
                                bg-precedential-black text-white border-2 border-precedential-gold 
                                hover:bg-precedential-gold hover:text-precedential-black"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
