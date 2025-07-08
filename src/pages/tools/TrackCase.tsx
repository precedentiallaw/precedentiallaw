
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ModernHeader from '@/components/modern/ModernHeader';
import ModernFooter from '@/components/modern/ModernFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, FileText, Clock, AlertCircle } from 'lucide-react';

const TrackCase: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Track Your Case | Precedential Law</title>
        <meta name="description" content="Track the status of your legal case with Precedential Law. Get real-time updates on your case progress." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <ModernHeader />
        
        <main className="pt-20">
          <div className="container-premium section-premium">
            <div className="text-center mb-16">
              <h1 className="heading-premium mb-6">Track Your Case</h1>
              <p className="text-premium-large max-w-2xl mx-auto">
                Stay updated on your case progress with our secure case tracking system.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-gold-600" />
                    Case Search
                  </CardTitle>
                  <CardDescription>
                    Enter your case reference number or client ID to track your case status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="caseNumber">Case Reference Number</Label>
                    <Input 
                      id="caseNumber" 
                      placeholder="e.g., PL-2024-001234"
                      className="input-premium"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="clientId">Client ID (Optional)</Label>
                    <Input 
                      id="clientId" 
                      placeholder="Your client identification number"
                      className="input-premium"
                    />
                  </div>

                  <Button className="btn-premium w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Track Case
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <Card className="card-premium text-center">
                  <CardContent className="pt-6">
                    <FileText className="w-8 h-8 text-gold-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Case Documents</h3>
                    <p className="text-sm text-navy-600">Access and download case-related documents</p>
                  </CardContent>
                </Card>

                <Card className="card-premium text-center">
                  <CardContent className="pt-6">
                    <Clock className="w-8 h-8 text-gold-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Timeline Updates</h3>
                    <p className="text-sm text-navy-600">View detailed timeline of case progress</p>
                  </CardContent>
                </Card>

                <Card className="card-premium text-center">
                  <CardContent className="pt-6">
                    <AlertCircle className="w-8 h-8 text-gold-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Important Notices</h3>
                    <p className="text-sm text-navy-600">Receive alerts for critical case updates</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-navy-50 rounded-xl">
                <h3 className="font-semibold text-navy-900 mb-4">Need Help?</h3>
                <p className="text-navy-700 mb-4">
                  If you cannot find your case reference number or need assistance, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <ModernFooter />
      </div>
    </>
  );
};

export default TrackCase;
