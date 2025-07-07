import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximaLayout from '@/components/maxima/MaximaLayout';
import ContentSection from '@/components/maxima/ContentSection';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Precedential Law | Trusted Legal Consultants in Dubai</title>
        <meta
          name="description"
          content="Learn more about Precedential Law – a professional legal consultancy in Dubai. Discover our expertise, values, and client-first approach."
        />
        <meta
          name="keywords"
          content="about Precedential Law, legal consultants Dubai, UAE legal firm, Dubai law office, legal services UAE"
        />
        <link rel="canonical" href="https://precedentiallaw.com/about" />
      </Helmet>

      <MaximaLayout>
        <div data-scroll-section>
          <ContentSection>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: About the Firm */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                  About Precedential Law
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  Precedential Law is a UAE-based legal consultancy committed to setting a new standard in legal support. 
                  We combine deep knowledge of local legislation with international best practices to deliver clarity, 
                  confidence, and results.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Local Insight + Global Rigor</h3>
                      <p className="text-sm text-slate-600">
                        Licensed UAE practice backed by world-class standards and legal precision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Client-Aligned Approach</h3>
                      <p className="text-sm text-slate-600">
                        Your goals, priorities, and timeframes guide our legal strategies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Clarity Without Compromise</h3>
                      <p className="text-sm text-slate-600">
                        We avoid legal jargon and focus on transparent, actionable advice.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <Link to="/contact">
                    <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Firm Statistics */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  Why Clients Trust Us
                </h2>

                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">10+</div>
                    <p className="text-sm text-slate-600">Years of Experience</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">500+</div>
                    <p className="text-sm text-slate-600">Cases Handled</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">24 hrs</div>
                    <p className="text-sm text-slate-600">Avg. Response Time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">100%</div>
                    <p className="text-sm text-slate-600">Confidentiality Commitment</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <div className="flex justify-center items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    Fully Licensed Legal Consultancy in the UAE
                  </div>
                </div>
              </div>
            </div>
          </ContentSection>
        </div>
      </MaximaLayout>
    </>
  );
};

export default About;
