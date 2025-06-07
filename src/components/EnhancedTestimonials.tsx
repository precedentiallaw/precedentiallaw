
import React from 'react';
import { Star, Quote, Shield, Award } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  location: string;
  rating: number;
  text: string;
  practiceArea: string;
  verified: boolean;
  premium?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Business Owner",
    title: "CEO",
    location: "DIFC, Dubai",
    rating: 5,
    text: "Precedential Law's expertise in commercial law proved invaluable for our business setup in Dubai. Their strategic approach and deep understanding of UAE regulations made the entire process smooth and efficient. Truly exceptional legal counsel that exceeded our expectations.",
    practiceArea: "Commercial Law",
    verified: true,
    premium: true
  },
  {
    id: 2,
    name: "Dubai Resident",
    title: "Managing Director",
    location: "Dubai",
    rating: 5,
    text: "Navigating family law matters required sophisticated legal expertise. Precedential Law's handling of our legal requirements was exemplary. Their attention to detail and sensitivity during a difficult period was remarkable and professional.",
    practiceArea: "Family Law",
    verified: true,
    premium: true
  },
  {
    id: 3,
    name: "Property Investor",
    title: "Real Estate Professional",
    location: "Dubai Marina",
    rating: 5,
    text: "Their expertise in real estate law is unmatched. From complex property transactions to dispute resolution, Precedential Law demonstrated why they're considered Dubai's trusted legal authority in property matters.",
    practiceArea: "Real Estate Law",
    verified: true
  },
  {
    id: 4,
    name: "Corporate Executive",
    title: "Regional Director",
    location: "Business Bay, Dubai",
    rating: 5,
    text: "When facing regulatory compliance challenges in the UAE's business environment, Precedential Law provided the sophisticated guidance we needed. Their deep understanding of UAE regulations was instrumental in our successful operations.",
    practiceArea: "Corporate Law",
    verified: true
  },
  {
    id: 5,
    name: "Entrepreneur",
    title: "Founder",
    location: "Dubai",
    rating: 5,
    text: "Precedential Law's corporate expertise facilitated our business expansion seamlessly. Their ability to navigate UAE business law while accommodating international requirements was extraordinary and professional.",
    practiceArea: "Business Law",
    verified: true
  },
  {
    id: 6,
    name: "Expat Professional",
    title: "Senior Manager",
    location: "Abu Dhabi",
    rating: 5,
    text: "Their immigration and employment law expertise proved crucial during our visa process. Precedential Law's strategic approach ensured full compliance with UAE regulations while protecting our interests throughout the process.",
    practiceArea: "Immigration Law",
    verified: true
  }
];

const EnhancedTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-precedential-black relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-precedential-gold blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-precedential-gold/20 border border-precedential-gold/30">
              <Award className="w-8 h-8 text-precedential-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
            Client <span className="text-gold-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our clients' experiences reflect our unwavering commitment to excellence, sophisticated legal strategies, 
            and the professional standards that define our practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                testimonial.premium 
                  ? 'bg-gradient-to-br from-precedential-gold/10 to-precedential-gold/5 border-2 border-precedential-gold/30' 
                  : 'glass-card bg-white/10 backdrop-blur-lg border border-white/20'
              }`}
            >
              {testimonial.premium && (
                <div className="absolute top-4 right-4 bg-precedential-gold text-precedential-black text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  VERIFIED
                </div>
              )}

              {/* Header */}
              <div className="mb-4">
                <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                <p className="text-sm text-white/70">{testimonial.title}</p>
                <p className="text-xs text-precedential-gold">{testimonial.location}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-precedential-gold text-precedential-gold" />
                ))}
                <span className="ml-2 text-sm text-white/60">({testimonial.rating}/5)</span>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-precedential-gold/30 absolute -top-2 -left-1" />
                <p className="text-white/90 italic pl-8 leading-relaxed">{testimonial.text}</p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs pt-4 border-t border-white/10">
                <span className="bg-precedential-gold/20 text-precedential-gold px-3 py-1 rounded-full font-medium">
                  {testimonial.practiceArea}
                </span>
                {testimonial.verified && (
                  <span className="text-green-400">✓ Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="glass-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 fill-precedential-gold text-precedential-gold mr-2" />
                <span className="font-bold text-2xl text-white">4.9/5</span>
              </div>
              <span className="text-white/70 text-sm">Client Satisfaction</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-precedential-gold mb-2">200+</div>
              <span className="text-white/70 text-sm">Successful Cases</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-precedential-gold mb-2">15+</div>
              <span className="text-white/70 text-sm">Years Experience</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-precedential-gold mb-2">7</div>
              <span className="text-white/70 text-sm">UAE Emirates Covered</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-white/60">
              All testimonials are from verified clients. Individual results may vary based on case specifics and circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
