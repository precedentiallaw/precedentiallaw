
import React from 'react';
import { MapPin, Phone, Mail, Clock, Building, Car, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfficeLocations: React.FC = () => {
  const offices = [
    {
      id: 1,
      name: "Dubai Main Office",
      address: "City Tower 2 - Sheikh Zayed Rd - Trade Centre - Trade Centre 1 - Dubai",
      phone: "+971 50 901 4120",
      email: "info@precedentiallaw.com",
      hours: {
        weekdays: "Monday - Thursday: 9:00 AM - 5:00 PM",
        friday: "Friday: 9:00 AM - 12:30 PM",
        weekend: "Saturday - Sunday: Closed"
      },
      features: [
        "Client meeting rooms",
        "Document preparation center",
        "Multilingual support",
        "Accessibility compliant",
        "Secure document storage",
        "Video conferencing facilities"
      ],
      directions: "Located in the heart of Dubai's business district, easily accessible via Dubai Metro (Emirates Towers Station) and major highways.",
      parking: "Valet parking available, underground parking garage with 200+ spaces",
      languages: ["English", "Arabic", "Hindi", "Urdu", "French"]
    },
    {
      id: 2,
      name: "DIFC Consultation Office",
      address: "Gate Village 10 - Dubai International Financial Centre - Dubai",
      phone: "+971 50 901 4120",
      email: "difc@precedentiallaw.com",
      hours: {
        weekdays: "Monday - Thursday: 9:00 AM - 6:00 PM",
        friday: "Friday: 9:00 AM - 1:00 PM",
        weekend: "Saturday - Sunday: By appointment"
      },
      features: [
        "DIFC Courts proximity",
        "Financial services focus",
        "International arbitration support",
        "Corporate meeting facilities",
        "Digital document processing",
        "Express consultation services"
      ],
      directions: "Within walking distance of DIFC Courts and major financial institutions. Metro accessible via Emirates Towers Station.",
      parking: "DIFC public parking available, valet service for premium clients",
      languages: ["English", "Arabic", "Mandarin", "Russian", "German"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Our <span className="text-gold-gradient">Office Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located offices providing comprehensive legal services across Dubai's key business districts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {offices.map((office) => (
            <div key={office.id} className="glass-card rounded-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Building className="w-6 h-6 text-precedential-gold mr-3" />
                  {office.name}
                </h3>
                
                {/* Address & Contact */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-precedential-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-precedential-gold mr-3" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-precedential-gold mr-3" />
                    <span className="text-gray-700">{office.email}</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-precedential-gold mr-2" />
                    Office Hours
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{office.hours.weekdays}</div>
                    <div>{office.hours.friday}</div>
                    <div>{office.hours.weekend}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Office Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {office.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-precedential-gold rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Directions */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Car className="w-5 h-5 text-precedential-gold mr-2" />
                    Getting Here
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{office.directions}</p>
                  <p className="text-sm text-gray-500">{office.parking}</p>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Globe className="w-5 h-5 text-precedential-gold mr-2" />
                    Languages Supported
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {office.languages.map((lang, idx) => (
                      <span key={idx} className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                    Schedule Visit
                  </Button>
                  <Button variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Consultations */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Virtual Consultations Available</h3>
            <p className="text-gray-600 mb-6">
              Can't visit our offices? We offer secure video consultations for clients worldwide. 
              Our virtual meeting platform ensures confidentiality and convenience for international clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Book Virtual Meeting
              </Button>
              <Button variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
