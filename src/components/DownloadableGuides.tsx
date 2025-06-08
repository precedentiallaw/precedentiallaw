
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, FileText, AlertTriangle, Shield, Users, Heart } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  downloadCount: string;
  urgency: 'Critical' | 'High' | 'Medium';
}

const DownloadableGuides: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const guides: Guide[] = [
    {
      id: 'cheque-bounce',
      title: 'UAE Cheque Bounce Emergency Guide',
      description: 'Complete defense strategies and legal procedures for bounced cheque cases',
      icon: AlertTriangle,
      downloadCount: '2,847',
      urgency: 'Critical'
    },
    {
      id: 'travel-ban',
      title: 'Travel Ban & Immigration Crisis Handbook',
      description: 'Step-by-step guide for handling travel restrictions and visa issues',
      icon: Shield,
      downloadCount: '1,923',
      urgency: 'Critical'
    },
    {
      id: 'employment-rights',
      title: 'UAE Employment Rights for Expats',
      description: 'Protecting your workplace rights and handling labor disputes',
      icon: Users,
      downloadCount: '3,156',
      urgency: 'High'
    },
    {
      id: 'family-law',
      title: 'Family Law Crisis Management',
      description: 'Emergency guide for divorce, custody, and family legal issues',
      icon: Heart,
      downloadCount: '1,764',
      urgency: 'High'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGuide && formData.name && formData.email) {
      console.log('Guide download request:', { guide: selectedGuide.id, ...formData });
      (window as any).trackConversion?.('guide_download');
      setIsSubmitted(true);
      
      // Simulate download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '#'; // In real implementation, this would be the actual PDF URL
        link.download = `${selectedGuide.title}.pdf`;
        link.click();
      }, 1000);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Free UAE Legal Emergency Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download comprehensive legal guides to protect yourself and your family. 
            Over 10,000 expats have used these guides to handle legal emergencies successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <guide.icon className="w-8 h-8 text-red-600" />
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getUrgencyColor(guide.urgency)}`}>
                    {guide.urgency}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">{guide.downloadCount} downloads</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
              <p className="text-gray-600 mb-6">{guide.description}</p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    onClick={() => {
                      setSelectedGuide(guide);
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '' });
                    }}
                    className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free Guide
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="max-w-md mx-4">
                  {!isSubmitted ? (
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <FileText className="w-12 h-12 text-precedential-gold mx-auto mb-3" />
                        <h3 className="text-xl font-bold mb-2">Download Your Free Guide</h3>
                        <p className="text-gray-600 text-sm">{selectedGuide?.title}</p>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number (Optional)"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        
                        <Button type="submit" className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                          <Download className="w-4 h-4 mr-2" />
                          Download Now
                        </Button>
                      </form>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        We'll also send you our weekly UAE legal updates newsletter (unsubscribe anytime)
                      </p>
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Download className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-green-600">Download Starting...</h3>
                      <p className="text-gray-600 mb-4">
                        Your guide is downloading. Check your email for additional resources and legal updates.
                      </p>
                      <p className="text-sm text-gray-500">
                        Need immediate legal help? Call +971 50 901 4120
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadableGuides;
