
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ModernHeader from '@/components/modern/ModernHeader';
import ModernFooter from '@/components/modern/ModernFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, Phone, Clock } from 'lucide-react';

const ArrestWarrantCheck: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Arrest Warrant Check | UAE Legal Services | Precedential Law</title>
        <meta name="description" content="Check for arrest warrants in UAE. Professional legal assistance for warrant verification and resolution services." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <ModernHeader />
        
        <main className="pt-20">
          <div className="container-premium section-premium">
            <div className="text-center mb-16">
              <h1 className="heading-premium mb-6">Arrest Warrant Verification</h1>
              <p className="text-premium-large max-w-3xl mx-auto">
                Professional legal assistance for warrant verification and resolution in the UAE.
              </p>
            </div>

            <Alert className="max-w-4xl mx-auto mb-12 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Important Notice:</strong> This service is for verification purposes only. If you suspect an active warrant, 
                contact our legal team immediately for proper legal guidance and representation.
              </AlertDescription>
            </Alert>

            <div className="max-w-2xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-gold-600" />
                    Warrant Verification Request
                  </CardTitle>
                  <CardDescription>
                    Submit your information for professional warrant verification services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="Enter full legal name"
                        className="input-premium"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emiratesId">Emirates ID</Label>
                      <Input 
                        id="emiratesId" 
                        placeholder="784-XXXX-XXXXXXX-X"
                        className="input-premium"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="passport">Passport Number</Label>
                      <Input 
                        id="passport" 
                        placeholder="Passport number"
                        className="input-premium"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input 
                        id="nationality" 
                        placeholder="Your nationality"
                        className="input-premium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number *</Label>
                    <Input 
                      id="phone" 
                      placeholder="+971 XX XXX XXXX"
                      className="input-premium"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="input-premium"
                      required
                    />
                  </div>

                  <Button className="btn-premium w-full">
                    <Shield className="w-4 h-4 mr-2" />
                    Submit Verification Request
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <Card className="card-premium">
                  <CardContent className="pt-6">
                    <Clock className="w-8 h-8 text-gold-600 mb-4" />
                    <h3 className="font-semibold mb-2">Processing Time</h3>
                    <p className="text-sm text-navy-600">
                      Standard verification: 24-48 hours<br/>
                      Urgent cases: Same day service available
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium">
                  <CardContent className="pt-6">
                    <Phone className="w-8 h-8 text-gold-600 mb-4" />
                    <h3 className="font-semibold mb-2">Emergency Contact</h3>
                    <p className="text-sm text-navy-600">
                      24/7 legal hotline available<br/>
                      +971 50 901 4120
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-200">
                <h3 className="font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  If You Have an Active Warrant
                </h3>
                <div className="space-y-4 text-red-800">
                  <p>• Do not ignore the situation - seek immediate legal assistance</p>
                  <p>• Contact our emergency legal team for urgent representation</p>
                  <p>• We provide 24/7 support for warrant-related legal issues</p>
                  <p>• Professional guidance on surrender procedures and bail applications</p>
                </div>
                <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
                  Emergency Legal Assistance
                </Button>
              </div>
            </div>
          </div>
        </main>

        <ModernFooter />
      </div>
    </>
  );
};

export default ArrestWarrantCheck;
