
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, Shield } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-precedential-black py-16 sm:py-20 lg:py-24 border-t border-precedential-gold/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-precedential-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-precedential-gold opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white animate-fade-in">
          Ready to Discuss Your Legal Needs?
          <span className="text-gold-gradient block sm:inline mt-2 sm:mt-0 sm:ml-2">
            Choose Precedential Protection.
          </span>
        </h2>
        
        <p className="text-white/80 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in stagger-1 text-base md:text-lg">
          When You Need More Than a Lawyer—You Need Precedential Protection. Contact Precedential Law today for expert legal services in Dubai. We offer confidential consultations to understand your situation and explore how our dedicated team can help you achieve your objectives.
        </p>
        
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
          className="animate-fade-in stagger-3 transform hover:scale-105 transition-all duration-300 px-8 py-6 h-auto rounded-xl"
        >
          Request Precedential Protection
          <Shield className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
