
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-precedential-black py-16 sm:py-20 lg:py-24 border-t border-precedential-gold/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-precedential-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-precedential-gold opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Urgent Alert Banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 text-center flex items-center justify-center gap-2 text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-medium">FINAL WARNING: Only 24 hours left to claim your FREE legal protection assessment</span>
          <AlertTriangle className="w-4 h-4" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white animate-fade-in">
          Don't Gamble With Your Future
          <span className="text-gold-gradient block sm:inline mt-2 sm:mt-0 sm:ml-2">
            Get Precedential Protection Now
          </span>
        </h2>
        
        <div className="bg-red-600/10 border border-red-400/30 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            Time-Sensitive Legal Risks in Dubai:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="text-white/90 text-sm">• New UAE Corporate Tax penalties (up to AED 50M)</div>
            <div className="text-white/90 text-sm">• Updated Labor Law violations (business closure)</div>
            <div className="text-white/90 text-sm">• Visa compliance changes (deportation risk)</div>
            <div className="text-white/90 text-sm">• Contract law updates (asset seizure)</div>
          </div>
        </div>
        
        <p className="text-white/80 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in stagger-1 text-base md:text-lg">
          <strong className="text-red-400">WARNING:</strong> Every day you delay costs an average of AED 15,000 in preventable legal fees. 
          Your competitors are already protected. <strong className="text-precedential-gold">Don't be the one left exposed.</strong>
        </p>

        {/* Enhanced Value Stack */}
        <div className="bg-white/10 backdrop-blur-sm border border-precedential-gold/30 rounded-2xl p-8 mb-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">🛡️ Your Complete Legal Shield Package (Normally AED 250,000)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Emergency Legal Risk Scan</span>
                  <span className="text-white/70 text-sm">Identify hidden legal time bombs (Worth AED 50,000)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Asset Protection Strategy</span>
                  <span className="text-white/70 text-sm">Bulletproof wealth protection plan (Worth AED 75,000)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Compliance Fortress Audit</span>
                  <span className="text-white/70 text-sm">Avoid crushing penalties (Worth AED 100,000)</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-semibold block">24/7 Legal Emergency Hotline</span>
                  <span className="text-white/70 text-sm">Direct access to senior partners (Worth AED 25,000)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Legal Document Vault Setup</span>
                  <span className="text-white/70 text-sm">Secure critical documents (Worth AED 15,000)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-precedential-gold mt-1 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Legal Crisis Action Plan</span>
                  <span className="text-white/70 text-sm">Step-by-step protection guide (Worth AED 35,000)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-precedential-gold/20 rounded-xl">
            <p className="text-white text-lg">
              <span className="line-through text-red-300">Normal Investment: AED 250,000</span>
            </p>
            <p className="text-precedential-gold font-bold text-3xl">
              Your Investment Today: <span className="text-4xl">COMPLETELY FREE</span>
            </p>
            <p className="text-white/90 text-sm mt-2">
              + We guarantee to find at least AED 100,000 in legal savings or the assessment is FREE
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 opacity-0 animate-fade-in stagger-2">
          <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-precedential-gold/20 transition-all duration-300 hover:border-precedential-gold/50">
            <PhoneCall className="text-precedential-gold mr-3 h-5 w-5" />
            <a href="tel:+971509014120" className="text-white hover:text-precedential-gold transition-colors">+971 50 901 4120</a>
          </div>
          <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-precedential-gold/20 transition-all duration-300 hover:border-precedential-gold/50">
            <Mail className="text-precedential-gold mr-3 h-5 w-5" />
            <a href="mailto:info@precedentiallaw.com" className="text-white hover:text-precedential-gold transition-colors">info@precedentiallaw.com</a>
          </div>
        </div>
        
        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          variant="gold"
          size="xl"
          className="animate-fade-in stagger-3 transform hover:scale-105 transition-all duration-300 px-8 py-6 h-auto rounded-xl relative text-lg"
        >
          Claim Your FREE Legal Shield Assessment Now
          <Shield className="ml-2 h-5 w-5" />
          <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            RISK-FREE
          </div>
        </Button>

        {/* Triple Guarantee */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white/5 rounded-xl p-4 border border-precedential-gold/20">
            <Shield className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-1">Iron-Clad Guarantee</h4>
            <p className="text-white/70 text-sm">Find legal risks or get 6 months FREE monitoring</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-precedential-gold/20">
            <Clock className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-1">24-Hour Response</h4>
            <p className="text-white/70 text-sm">Emergency legal support within 24 hours</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-precedential-gold/20">
            <CheckCircle className="w-8 h-8 text-precedential-gold mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-1">Zero Risk Promise</h4>
            <p className="text-white/70 text-sm">100% satisfaction or AED 5,000 credit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
