
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, AlertTriangle, Users, Newspaper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      (window as any).trackConversion?.('newsletter_signup');
      setIsSubscribed(true);
      setIsLoading(false);
      
      toast({
        title: "Successfully Subscribed!",
        description: "Welcome to UAE Legal Weekly. First issue arriving tomorrow.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-green-600 mb-2">Welcome to UAE Legal Weekly!</h3>
        <p className="text-gray-600 mb-4">
          You'll receive your first legal update tomorrow morning with this week's most important UAE legal developments.
        </p>
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-semibold mb-2">What you'll get every week:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• New UAE laws affecting expats</li>
            <li>• Case study insights</li>
            <li>• Legal emergency tips</li>
            <li>• Exclusive legal consultation offers</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-precedential-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-16 h-16 text-precedential-gold mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            UAE Legal Weekly
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stay ahead of UAE legal changes. Get weekly insights, case studies, and emergency legal tips 
            delivered to your inbox every Thursday.
          </p>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-xl">
              <Users className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
              <div className="text-2xl font-bold">8,500+</div>
              <div className="text-sm opacity-80">Expat Subscribers</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <Newspaper className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm opacity-80">Weekly Issues</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
              <div className="text-2xl font-bold">2,400+</div>
              <div className="text-sm opacity-80">Legal Crises Prevented</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-black"
                required
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight px-8"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            <p className="text-sm opacity-70">
              Free newsletter • Unsubscribe anytime • 15,000+ legal professionals trust our insights
            </p>
          </form>

          {/* Recent Newsletter Topics */}
          <div className="mt-12 bg-white/5 p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-lg font-bold mb-4">Recent Newsletter Topics:</h3>
            <div className="text-sm space-y-2 opacity-90">
              <div>📋 "New UAE Corporate Tax: What Expats Need to Know"</div>
              <div>🚨 "Travel Ban Prevention: 5 Critical Steps Every Expat Must Take"</div>
              <div>💼 "Labour Law Changes: How They Affect Your Employment Contract"</div>
              <div>🏠 "RERA Updates: New Rental Dispute Procedures Explained"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
