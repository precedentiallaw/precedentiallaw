
import React from 'react';
import { Star, Quote } from 'lucide-react';

const ModernTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Tech Entrepreneur",
      company: "Dubai",
      content: "Precedential Law made our company setup in Dubai seamless. Their expertise in UAE business law is unmatched, and they guided us through every step with clarity and professionalism.",
      rating: 5,
      image: "/lovable-uploads/3264ca05-2871-450a-8753-cf69e759e918.png"
    },
    {
      name: "Ahmed Al-Mansouri",
      role: "Real Estate Investor",
      company: "UAE National",
      content: "When I faced a complex property dispute, Precedential Law's team provided exceptional representation. They secured a favorable outcome and kept me informed throughout the entire process.",
      rating: 5,
      image: "/lovable-uploads/65175c09-4b39-47fe-b83b-2560ac58cf1e.png"
    },
    {
      name: "Lisa Thompson",
      role: "Expatriate Family",
      company: "British National",
      content: "Going through a divorce as an expat was overwhelming, but Precedential Law's family law team provided sensitive and effective support. They truly acted as our shield during a difficult time.",
      rating: 5,
      image: "/lovable-uploads/6a337cae-1ef7-4a8d-8d18-e3d235cf7fb8.png"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      company: "F&B Industry",
      content: "Their immigration law expertise helped us secure Golden Visas for our family. The process was smooth, transparent, and completed ahead of schedule. Highly recommended!",
      rating: 5,
      image: "/lovable-uploads/76577c6e-222b-4930-a948-3fdb15329345.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Clients
            <span className="text-amber-600 block">Across Dubai & UAE</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our success is measured by the positive outcomes we achieve for our clients. 
            Here's what they have to say about working with Precedential Law.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-amber-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-amber-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Join Hundreds of Satisfied Clients
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the Precedential difference – where legal expertise meets 
                genuine client care, delivering results that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
                <div className="text-gray-700 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Cases Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">24hr</div>
                <div className="text-gray-700 font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
