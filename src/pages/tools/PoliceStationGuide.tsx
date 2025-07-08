
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ModernHeader from '@/components/modern/ModernHeader';
import ModernFooter from '@/components/modern/ModernFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const PoliceStationGuide: React.FC = () => {
  const policeStations = [
    {
      name: "Dubai Police General HQ",
      area: "Dubai",
      address: "Al Twar, Dubai",
      phone: "+971 4 609 4444",
      emergency: "999",
      hours: "24/7",
      services: ["General Inquiries", "Emergency Response", "Traffic Department"]
    },
    {
      name: "Abu Dhabi Police HQ",
      area: "Abu Dhabi",
      address: "Sheikh Zayed Street, Abu Dhabi",
      phone: "+971 2 512 3456",
      emergency: "999",
      hours: "24/7",
      services: ["General Inquiries", "Criminal Investigation", "Traffic Violations"]
    },
    {
      name: "Sharjah Police HQ",
      area: "Sharjah",
      address: "King Faisal Street, Sharjah",
      phone: "+971 6 563 2222",
      emergency: "999",
      hours: "24/7",
      services: ["General Services", "Traffic Department", "Criminal Records"]
    },
  ];

  return (
    <>
      <Helmet>
        <title>UAE Police Station Guide | Emergency Contacts | Precedential Law</title>
        <meta name="description" content="Complete guide to UAE police stations, emergency contacts, and legal procedures. Essential information for residents and visitors." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <ModernHeader />
        
        <main className="pt-20">
          <div className="container-premium section-premium">
            <div className="text-center mb-16">
              <h1 className="heading-premium mb-6">UAE Police Station Guide</h1>
              <p className="text-premium-large max-w-3xl mx-auto">
                Essential information about police stations, emergency contacts, and legal procedures across the UAE.
              </p>
            </div>

            <div className="mb-12 p-6 bg-red-50 rounded-xl border border-red-200">
              <h2 className="text-2xl font-bold text-red-900 mb-4">Emergency Numbers</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">999</div>
                  <div className="text-red-800">Police Emergency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">998</div>
                  <div className="text-red-800">Fire Department</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">997</div>
                  <div className="text-red-800">Ambulance</div>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              {policeStations.map((station, index) => (
                <Card key={index} className="card-premium">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{station.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-base">
                          <MapPin className="w-4 h-4" />
                          {station.address}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-gold-50 text-gold-700 border-gold-200">
                        {station.area}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gold-600" />
                          <div>
                            <div className="font-medium">Main Number</div>
                            <div className="text-navy-600">{station.phone}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-red-600" />
                          <div>
                            <div className="font-medium">Emergency</div>
                            <div className="text-red-600 font-bold">{station.emergency}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold-600" />
                        <div>
                          <div className="font-medium">Operating Hours</div>
                          <div className="text-navy-600">{station.hours}</div>
                        </div>
                      </div>

                      <div>
                        <div className="font-medium mb-2">Services Available</div>
                        <div className="flex flex-wrap gap-2">
                          {station.services.map((service, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle>Important Procedures</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Filing a Complaint</h4>
                    <p className="text-sm text-navy-600">
                      Bring valid ID, evidence, and witness information. Translation may be required for non-Arabic documents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Traffic Violations</h4>
                    <p className="text-sm text-navy-600">
                      Visit traffic department with vehicle registration, driving license, and Emirates ID.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Document Attestation</h4>
                    <p className="text-sm text-navy-600">
                      Schedule appointment online, bring original documents and copies, pay required fees.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle>Legal Rights & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Your Rights</h4>
                    <p className="text-sm text-navy-600">
                      Right to legal representation, interpreter services, and to contact your embassy if needed.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legal Assistance</h4>
                    <p className="text-sm text-navy-600">
                      Contact Precedential Law for immediate legal support and representation in police matters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Legal Hotline</h4>
                    <p className="text-sm text-navy-600 font-bold">
                      +971 50 901 4120 (24/7 Support)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <ModernFooter />
      </div>
    </>
  );
};

export default PoliceStationGuide;
