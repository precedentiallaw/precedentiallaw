
import React from 'react';
import { Award, Shield, Star } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-precedential-black to-precedential-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Trophy Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-precedential-gold/20 to-transparent rounded-3xl blur-3xl"></div>
            <img 
              src="/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png"
              alt="Precedential Law Achievement"
              className="relative w-full max-w-md mx-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">
              Setting the <span className="text-gold-gradient">Gold Standard</span> in Legal Excellence
            </h2>
            <p className="text-white/80">
              Our commitment to excellence and client success has earned us recognition as one of Dubai's most trusted legal consultancies.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Award, text: "Excellence in Legal Services 2024" },
                { icon: Shield, text: "Top-Rated Client Protection" },
                { icon: Star, text: "Distinguished Legal Practice" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-precedential-gold/10">
                    <item.icon className="w-6 h-6 text-precedential-gold" />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
