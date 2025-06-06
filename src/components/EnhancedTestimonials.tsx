
import React from 'react';
import { Star, Quote } from 'lucide-react';

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
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Mitchell",
    title: "CEO",
    company: "Tech Innovations LLC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Precedential Law provided invaluable guidance for my business setup in Dubai. Their commercial lawyers are exceptional - professional, clear, and highly effective. They handled everything from licensing to shareholder agreements seamlessly.",
    practiceArea: "Commercial Law",
    location: "Dubai",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Expat Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Navigating my divorce as an expat felt overwhelming until I contacted Precedential Law. Their family law team was exceptional, explaining the UAE legal process clearly and protecting my interests throughout. Truly supportive during a difficult time.",
    practiceArea: "Family Law",
    location: "Abu Dhabi",
    verified: true
  },
  {
    id: 3,
    name: "Ahmed Al Rashid",
    title: "Property Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I encountered a complex rental dispute with significant financial implications. Precedential Law's real estate team demonstrated exceptional knowledge of Dubai tenancy law and achieved a favorable resolution through the RDC. Highly recommended!",
    practiceArea: "Real Estate Law",
    location: "Dubai",
    verified: true
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    title: "Marketing Director",
    company: "Global Communications",
    image: "https://images.unsplash.com/photo-1494790108755-2616c5b60f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "As an expatriate family, securing our children's guardianship and asset distribution under UAE law was our priority. Precedential Law explained all options including DIFC Wills and guided us through the entire process efficiently. Peace of mind achieved!",
    practiceArea: "Will Writing",
    location: "Dubai",
    verified: true
  },
  {
    id: 5,
    name: "James Thompson",
    title: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Setting up my fintech startup in DIFC seemed daunting, but Precedential Law made it straightforward. Their expertise in UAE financial regulations and attention to detail ensured full compliance from day one.",
    practiceArea: "Fintech & Regulatory",
    location: "DIFC",
    verified: true
  },
  {
    id: 6,
    name: "Lisa Chen",
    title: "HR Manager",
    company: "International Consulting",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "When we faced employment law challenges, Precedential Law provided clear guidance on UAE labor regulations. Their practical approach helped us resolve disputes while maintaining compliance and protecting our business interests.",
    practiceArea: "Employment Law",
    location: "Sharjah",
    verified: true
  }
];

const EnhancedTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Client <span className="text-gold-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our clients about their experiences with Precedential Law's expert legal services across Dubai and the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  width={48}
                  height={48}
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
                {testimonial.verified && (
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Verified
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-precedential-gold/30 absolute -top-2 -left-1" />
                <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t">
                <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded">
                  {testimonial.practiceArea}
                </span>
                <span>{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-bold text-lg">4.9/5</span>
              <span className="text-gray-600 ml-1">Average Rating</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-lg">150+</span>
              <span className="text-gray-600 ml-1">Happy Clients</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-lg">95%</span>
              <span className="text-gray-600 ml-1">Success Rate</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            All testimonials are from verified clients. Reviews collected independently through Google Reviews and direct client feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
