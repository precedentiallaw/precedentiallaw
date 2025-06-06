
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AppointmentBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const practiceAreas = [
    'Business Law',
    'Family Law',
    'Real Estate Law',
    'Immigration Law',
    'Civil Litigation',
    'Criminal Defense',
    'Debt Settlement',
    'Contract Disputes',
    'Will Writing',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booking:', formData);
    alert('Thank you! Your appointment request has been submitted. We will contact you within 2 hours to confirm your appointment.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Book Your <span className="text-gold-gradient">Legal Consultation</span>
            </h2>
            <p className="text-lg text-gray-600">
              Schedule a confidential consultation with our experienced legal team. Available in-person or via video call.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Schedule Your Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FileText className="w-4 h-4 inline mr-1" />
                      Practice Area *
                    </label>
                    <Select value={formData.practiceArea} onValueChange={(value) => handleInputChange('practiceArea', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select practice area" />
                      </SelectTrigger>
                      <SelectContent>
                        {practiceAreas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={today}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Time *
                    </label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brief Description of Your Legal Matter
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please provide a brief description of your legal needs..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * All consultations are confidential and protected by attorney-client privilege
              </p>
            </div>

            {/* Information Panel */}
            <div className="space-y-8">
              <div className="bg-precedential-black text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Consultation Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-precedential-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Duration: 45-60 minutes</p>
                      <p className="text-sm opacity-80">Comprehensive review of your legal matter</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-precedential-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Expert Attorney Match</p>
                      <p className="text-sm opacity-80">Paired with specialist in your practice area</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-precedential-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Confidential & Privileged</p>
                      <p className="text-sm opacity-80">All discussions fully protected</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">What to Bring</h3>
                <ul className="text-sm space-y-2">
                  <li>• Relevant documents (contracts, correspondence, etc.)</li>
                  <li>• Timeline of events related to your matter</li>
                  <li>• List of questions or concerns</li>
                  <li>• Identification documents</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Office Hours</h3>
                <div className="text-sm space-y-1">
                  <p><strong>Monday - Thursday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Friday:</strong> 9:00 AM - 12:30 PM</p>
                  <p><strong>Emergency:</strong> Available 24/7 for urgent matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
