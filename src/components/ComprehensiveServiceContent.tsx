
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Users, Award, BookOpen } from 'lucide-react';

interface ServiceContentProps {
  title: string;
  description: string;
  keyPoints: string[];
  process: string[];
  benefits: string[];
  faq: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  caseStudyTitle?: string;
  caseStudyDescription?: string;
}

const ComprehensiveServiceContent: React.FC<ServiceContentProps> = ({
  title,
  description,
  keyPoints,
  process,
  benefits,
  faq,
  relatedServices,
  caseStudyTitle,
  caseStudyDescription
}) => {
  return (
    <div className="space-y-12">
      {/* Overview Section */}
      <section>
        <h2 className="text-3xl font-playfair font-bold mb-6">Comprehensive {title} Services in Dubai</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-precedential-gold mt-1 flex-shrink-0" />
              <span className="text-sm">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h3 className="text-2xl font-playfair font-bold mb-6">Our Proven Process</h3>
        <div className="space-y-4">
          {process.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-xl">
              <div className="w-8 h-8 bg-precedential-gold text-precedential-black rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <p className="text-gray-700">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <h3 className="text-2xl font-playfair font-bold mb-6">Why Choose Our {title} Services?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-precedential-gold mt-1 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      {caseStudyTitle && caseStudyDescription && (
        <section className="bg-precedential-gold/10 p-8 rounded-xl">
          <h3 className="text-2xl font-playfair font-bold mb-4">Success Story: {caseStudyTitle}</h3>
          <p className="text-gray-700 mb-6">{caseStudyDescription}</p>
          <Button variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
            <BookOpen className="w-4 h-4 mr-2" />
            Read Full Case Study
          </Button>
        </section>
      )}

      {/* FAQ Section */}
      <section>
        <h3 className="text-2xl font-playfair font-bold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold mb-2">{item.question}</h4>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section>
        <h3 className="text-2xl font-playfair font-bold mb-6">Related Legal Services</h3>
        <div className="flex flex-wrap gap-2">
          {relatedServices.map((service, index) => (
            <Badge key={index} variant="outline" className="text-precedential-gold border-precedential-gold">
              {service}
            </Badge>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-precedential-black text-white p-8 rounded-xl text-center">
        <h3 className="text-2xl font-playfair font-bold mb-4">Ready to Get Expert Legal Support?</h3>
        <p className="mb-6 opacity-90">Contact our {title.toLowerCase()} specialists for a confidential consultation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
            <Users className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
            <Clock className="w-5 h-5 mr-2" />
            Emergency Legal Support
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServiceContent;
