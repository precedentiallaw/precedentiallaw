
import React from 'react';
import { User, Mail, Phone, FileText, Video, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AppointmentFormData, ConsultationType, UrgencyLevel } from '@/types/appointment';
import TimeSlotSelector from './TimeSlotSelector';

interface AppointmentBookingFormProps {
  formData: AppointmentFormData;
  onInputChange: (field: string, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  practiceAreas: string[];
  consultationTypes: ConsultationType[];
  languages: string[];
  urgencyLevels: UrgencyLevel[];
  selectedDate: string;
  availableSlots: any[];
  onDateChange: (date: string) => void;
  today: string;
  maxDate: string;
}

const AppointmentBookingForm: React.FC<AppointmentBookingFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  practiceAreas,
  consultationTypes,
  languages,
  urgencyLevels,
  selectedDate,
  availableSlots,
  onDateChange,
  today,
  maxDate
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
            onChange={(e) => onInputChange('name', e.target.value)}
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
            onChange={(e) => onInputChange('email', e.target.value)}
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
            onChange={(e) => onInputChange('phone', e.target.value)}
            placeholder="+971 XX XXX XXXX"
            required
            className="border-gray-300 focus:border-precedential-gold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Preferred Language
          </label>
          <Select value={formData.preferredLanguage} onValueChange={(value) => onInputChange('preferredLanguage', value)}>
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
            <Select value={formData.practiceArea} onValueChange={(value) => onInputChange('practiceArea', value)}>
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
            <Select value={formData.consultationType} onValueChange={(value) => onInputChange('consultationType', value)}>
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
          <Select value={formData.urgency} onValueChange={(value) => onInputChange('urgency', value)}>
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
        
        <TimeSlotSelector
          selectedDate={selectedDate}
          selectedTime={formData.preferredTime}
          availableSlots={availableSlots}
          onDateChange={onDateChange}
          onTimeSelect={(time) => onInputChange('preferredTime', time)}
          today={today}
          maxDate={maxDate}
        />
      </div>

      {/* Additional Information */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Brief Description of Legal Matter
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => onInputChange('message', e.target.value)}
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
            onChange={(e) => onInputChange('agreedToTerms', e.target.checked)}
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
  );
};

export default AppointmentBookingForm;
