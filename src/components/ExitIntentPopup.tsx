
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Phone, Clock, Shield } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !localStorage.getItem('exit-intent-shown')) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('exit-intent-shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      console.log('Emergency consultation request:', { name, email });
      (window as any).trackConversion?.('exit_intent_consultation');
      setIsOpen(false);
      alert('Thank you! Our legal team will contact you within 15 minutes for your emergency consultation.');
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+971509014120';
    (window as any).trackConversion?.('exit_intent_call');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-4">
        <div className="text-center p-6">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-red-600">
            Wait! Legal Emergency?
          </h2>
          
          <p className="text-gray-600 mb-6">
            Don't leave without getting the legal help you need. Get a 
            <strong className="text-red-600"> FREE 15-minute emergency consultation</strong> now.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-precedential-gold" />
              <span>15min response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-precedential-gold" />
              <span>100% confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-precedential-gold" />
              <span>24/7 available</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Get FREE Emergency Consultation
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">Or call immediately:</p>
            <Button onClick={handleCall} variant="outline" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              +971 50 901 4120
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
