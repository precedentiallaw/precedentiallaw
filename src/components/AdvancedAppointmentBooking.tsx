
import React, { useState } from 'react';
import { Calendar, Video, MapPin, Phone } from 'lucide-react';
import { AppointmentFormData, TimeSlot, ConsultationType, UrgencyLevel } from '@/types/appointment';
import AppointmentBookingForm from './appointment/AppointmentBookingForm';
import AppointmentInfoPanel from './appointment/AppointmentInfoPanel';

const AdvancedAppointmentBooking: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
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

  const consultationTypes: ConsultationType[] = [
    { value: 'in-person', label: 'In-Person Meeting', icon: <MapPin className="w-4 h-4" /> },
    { value: 'video', label: 'Video Consultation', icon: <Video className="w-4 h-4" /> },
    { value: 'phone', label: 'Phone Consultation', icon: <Phone className="w-4 h-4" /> }
  ];

  const languages = [
    'English', 'Arabic', 'Hindi', 'Urdu', 'French', 'Russian'
  ];

  const urgencyLevels: UrgencyLevel[] = [
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
                
                <AppointmentBookingForm
                  formData={formData}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                  practiceAreas={practiceAreas}
                  consultationTypes={consultationTypes}
                  languages={languages}
                  urgencyLevels={urgencyLevels}
                  selectedDate={selectedDate}
                  availableSlots={availableSlots}
                  onDateChange={handleDateChange}
                  today={today}
                  maxDate={maxDateString}
                />
              </div>
            </div>

            {/* Information Panel - 1/3 width */}
            <AppointmentInfoPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAppointmentBooking;
