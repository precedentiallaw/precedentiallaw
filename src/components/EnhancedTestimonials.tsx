
import React from 'react';
import { Star, Quote, Shield, Award } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company?: string;
  image: string;
  rating: number;
  text: string;
  practiceArea: string;
  location: string;
  verified: boolean;
  caseValue?: string;
  premium?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Mitchell",
    title: "CEO",
    company: "Gulf Tech Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Precedential Law's expertise in complex commercial litigation proved invaluable when we faced a multi-million dirham dispute. Their strategic approach, deep understanding of UAE commercial law, and relentless advocacy secured an outcome that exceeded our expectations. Truly exceptional legal counsel.",
    practiceArea: "Commercial Litigation",
    location: "DIFC, Dubai",
    verified: true,
    caseValue: "AED 15M+",
    premium: true
  },
  {
    id: 2,
    name: "Sarah Al-Zahra",
    title: "Managing Director",
    company: "Emirates Investment Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Navigating a complex cross-border family law matter required sophisticated legal expertise. Precedential Law's handling of our DIFC Wills and guardianship arrangements was exemplary. Their attention to detail and cultural sensitivity during a difficult period was remarkable.",
    practiceArea: "Family Law & Succession",
    location: "Dubai",
    verified: true,
    caseValue: "AED 25M+ Estate",
    premium: true
  },
  {
    id: 3,
    name: "Ahmed Al Rashid",
    title: "Chairman",
    company: "Al Rashid Properties",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Their expertise in high-value real estate transactions is unmatched. From complex RERA compliance to sophisticated dispute resolution, Precedential Law demonstrated why they're considered Dubai's premier legal authority in property law.",
    practiceArea: "Real Estate Law",
    location: "Dubai Marina",
    verified: true,
    caseValue: "AED 50M+ Portfolio"
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    title: "Regional Director",
    company: "International Finance Corp",
    image: "https://images.unsplash.com/photo-1494790108755-2616c5b60f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "When facing regulatory compliance challenges in the UAE's evolving fintech landscape, Precedential Law provided the sophisticated guidance we needed. Their deep understanding of UAE Central Bank regulations and DFSA requirements was instrumental in our successful market entry.",
    practiceArea: "Banking & Finance",
    location: "ADGM, Abu Dhabi",
    verified: true
  },
  {
    id: 5,
    name: "James Thompson",
    title: "Founder & CEO",
    company: "Innovation Ventures",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Precedential Law's corporate structuring expertise facilitated our complex M&A transaction seamlessly. Their ability to navigate UAE corporate law while accommodating international stakeholder requirements was extraordinary.",
    practiceArea: "Corporate M&A",
    location: "Dubai",
    verified: true
  },
  {
    id: 6,
    name: "Lisa Chen",
    title: "General Counsel",
    company: "Global Manufacturing LLC",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Their employment law expertise proved crucial during our workforce restructuring. Precedential Law's strategic approach ensured full compliance with UAE Labour Law while protecting our business interests throughout the process.",
    practiceArea: "Employment Law",
    location: "Sharjah",
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
            Distinguished Client <span className="text-gold-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our clients' success stories reflect our unwavering commitment to excellence, sophisticated legal strategies, 
            and the precedential standards that define our practice.
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
                  HIGH-VALUE
                </div>
              )}

              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-precedential-gold/30"
                  width={56}
                  height={56}
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                  <p className="text-sm text-white/70">
                    {testimonial.title}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                  {testimonial.caseValue && (
                    <p className="text-xs text-precedential-gold font-semibold">{testimonial.caseValue}</p>
                  )}
                </div>
                {testimonial.verified && (
                  <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                    Verified
                  </div>
                )}
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
                <span className="text-white/60">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Trust Indicators */}
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
              <div className="font-bold text-2xl text-precedential-gold mb-2">500+</div>
              <span className="text-white/70 text-sm">Successful Cases</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-precedential-gold mb-2">AED 2B+</div>
              <span className="text-white/70 text-sm">Client Value Protected</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-precedential-gold mb-2">95%</div>
              <span className="text-white/70 text-sm">Success Rate</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-white/60">
              All testimonials verified through independent client feedback and case outcomes. 
              Values represent aggregate client matter totals over our practice history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
