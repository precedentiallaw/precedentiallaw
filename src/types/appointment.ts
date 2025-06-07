
export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  preferredLanguage: string;
  practiceArea: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  urgency: string;
  message: string;
  agreedToTerms: boolean;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  type: 'standard' | 'priority' | 'emergency';
}

export interface ConsultationType {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface UrgencyLevel {
  value: string;
  label: string;
  color: string;
}
