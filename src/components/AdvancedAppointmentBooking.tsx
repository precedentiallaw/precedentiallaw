
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, Video, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TimeSlot {
  time: string;
  available: boolean;
  type: 'standard' | 'priority' | 'emergency';
}

const AdvancedAppointmentBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredLanguage: '',
    practiceArea: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    urgency: '',
    message: '',
    agreedToTerms: false
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);

  const practiceAreas = [
    'Business & Commercial Law',
    'Family Law & Personal Status',
    'Real Estate & Property Law',
    'Immigration & Visa Services',
    'Civil Litigation & Disputes',
    'Criminal Defense & Advisory',
    'Employment Law',
    'Debt Settlement & Recovery',
    'Will Writing & Estate Planning',
    'Contract Drafting & Review',
    'Intellectual Property',
    'Banking & Finance Law'
  ];

  const consultationTypes = [
    { value: 'in-person', label: 'In-Person Meeting', icon: <MapPin className="w-4 h-4" /> },
    { value: 'video', label: 'Video Consultation', icon: <Video className="w-4 h-4" /> },
    { value: 'phone', label: 'Phone Consultation', icon: <Phone className="w-4 h-4" /> }
  ];

  const languages = [
    'English', 'Arabic', 'Hindi', 'Urdu', 'French', 'Russian'
  ];

  const urgencyLevels = [
    { value: 'standard', label: 'Standard (3-5 business days)', color: 'text-green-600' },
    { value: 'priority', label: 'Priority (Within 24 hours)', color: 'text-orange-600' },
    { value: 'emergency', label: 'Emergency (Immediate attention)', color: 'text-red-600' }
  ];

  // Generate time slots based on selected date
  const generateTimeSlots = (date: string) => {
    const slots: TimeSlot[] = [];
    const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
    
    times.forEach(time => {
      slots.push({
        time,
        available: Math.random() > 0.3, // Simulate availability
        type: 'standard'
      });
    });

    setAvailableSlots(slots);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, preferredDate: date }));
    generateTimeSlots(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booking:', formData);
    alert('Thank you! Your appointment request has been submitted. Our team will contact you within 2 hours to confirm the details and provide further instructions.');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Schedule Your <span className="text-gold-gradient">Legal Consultation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Book a comprehensive legal consultation with our experienced team. Available in multiple languages 
              with flexible scheduling options to accommodate your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-precedential-gold mr-3" />
                  Appointment Details
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
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
                        placeholder="Your complete legal name"
                        required
                        className="border-gray-300 focus:border-precedential-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-300 focus:border-precedential-gold"
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
                        className="border-gray-300 focus:border-precedential-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Language
                      </label>
                      <Select value={formData.preferredLanguage} onValueChange={(value) => handleInputChange('preferredLanguage', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-precedential-gold">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((language) => (
                            <SelectItem key={language} value={language}>
                              {language}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Legal Matter Details */}
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-4">Legal Matter Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <FileText className="w-4 h-4 inline mr-1" />
                          Practice Area *
                        </label>
                        <Select value={formData.practiceArea} onValueChange={(value) => handleInputChange('practiceArea', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-precedential-gold">
                            <SelectValue placeholder="Select legal area" />
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
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Consultation Type *
                        </label>
                        <Select value={formData.consultationType} onValueChange={(value) => handleInputChange('consultationType', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-precedential-gold">
                            <SelectValue placeholder="Select consultation type" />
                          </SelectTrigger>
                          <SelectContent>
                            {consultationTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center gap-2">
                                  {type.icon}
                                  {type.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Urgency Level *
                      </label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-precedential-gold">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              <span className={level.color}>{level.label}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-4">Preferred Schedule</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Preferred Date *
                        </label>
                        <Input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => handleDateChange(e.target.value)}
                          min={today}
                          max={maxDateString}
                          required
                          className="border-gray-300 focus:border-precedential-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Available Time Slots
                        </label>
                        {selectedDate ? (
                          <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                            {availableSlots.map((slot) => (
                              <button
                                key={slot.time}
                                type="button"
                                onClick={() => handleInputChange('preferredTime', slot.time)}
                                disabled={!slot.available}
                                className={`p-2 text-xs rounded border transition-colors ${
                                  formData.preferredTime === slot.time
                                    ? 'bg-precedential-gold text-precedential-black border-precedential-gold'
                                    : slot.available
                                    ? 'bg-white text-gray-700 border-gray-300 hover:border-precedential-gold'
                                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">Select a date to view available times</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Brief Description of Legal Matter
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide a brief overview of your legal situation. This helps us prepare for your consultation and assign the most appropriate attorney."
                      rows={4}
                      className="border-gray-300 focus:border-precedential-gold"
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div className="border-t pt-6">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.agreedToTerms}
                        onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                        className="mt-1"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-precedential-gold hover:underline">Terms of Service</a> and 
                        <a href="#" className="text-precedential-gold hover:underline ml-1">Privacy Policy</a>. 
                        I understand that this consultation request does not create an attorney-client relationship.
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight"
                    size="lg"
                    disabled={!formData.agreedToTerms}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Secure Consultation Request
                  </Button>
                </form>
              </div>
            </div>

            {/* Information Panel - 1/3 width */}
            <div className="space-y-6">
              {/* Consultation Info */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 text-precedential-gold mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">45-60 minute consultation</p>
                      <p className="text-gray-600">Comprehensive review of your legal matter</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-precedential-gold mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Confidential & Privileged</p>
                      <p className="text-gray-600">All discussions fully protected by law</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <User className="w-4 h-4 text-precedential-gold mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Expert Attorney Match</p>
                      <p className="text-gray-600">Paired with specialist in your area</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Legal Matters</h3>
                <p className="text-sm text-red-700 mb-4">
                  For urgent legal situations requiring immediate attention, contact us directly.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Line: +971 50 901 4120
                </Button>
              </div>

              {/* Office Hours */}
              <div className="bg-precedential-gold/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Office Hours</h3>
                <div className="text-sm space-y-1">
                  <p><strong>Monday - Thursday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Friday:</strong> 9:00 AM - 12:30 PM</p>
                  <p><strong>Weekend:</strong> By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAppointmentBooking;
