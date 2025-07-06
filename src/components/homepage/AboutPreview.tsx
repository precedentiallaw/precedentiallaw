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
              {/* Left: Firm Description */}
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  The Precedential Advantage
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  Precedential Law was founded with a clear mission — to deliver transparent,
                  reliable, and effective legal support to individuals and businesses across the UAE.
                  Our strength lies in our blend of regional legal insight and global service standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">UAE Legal Expertise</h3>
                      <p className="text-sm text-slate-600">
                        Local regulatory insight combined with international best practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Client-Centered Practice</h3>
                      <p className="text-sm text-slate-600">
                        We align our legal strategies with your personal or business goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Clarity Above All</h3>
                      <p className="text-sm text-slate-600">
                        We prioritize communication and clear solutions over legal jargon.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Firm Stats */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  Why Clients Choose Us
                </h2>

                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">10+</div>
                    <p className="text-sm text-slate-600">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">500+</div>
                    <p className="text-sm text-slate-600">Cases Managed</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">24hr</div>
                    <p className="text-sm text-slate-600">Avg. Response Time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">100%</div>
                    <p className="text-sm text-slate-600">Client Confidentiality</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <div className="flex justify-center items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    Licensed UAE Legal Practice
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