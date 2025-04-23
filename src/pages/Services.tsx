
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from '@/components/WhatsAppButton';
import FinalCTA from '@/components/FinalCTA';
import { Helmet } from 'react-helmet';

const ServiceDetails: React.FC<{ title: string; description: React.ReactNode }> = ({ title, description }) => {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-playfair font-bold mb-4">{title}</h3>
      <div className="prose prose-lg max-w-none text-precedential-black/80">
        {description}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Services in Dubai | Precedential Law</title>
        <meta name="description" content="Comprehensive legal services in Dubai, including business law, family law, real estate, debt settlement, immigration, and criminal defense." />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-precedential-black py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              Comprehensive Legal <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Precedential Law offers a comprehensive suite of legal consulting services tailored to the specific needs of individuals and businesses operating within Dubai and the broader UAE. Our expert team possesses in-depth knowledge across various legal domains, ensuring you receive targeted and effective advice.
            </p>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <section className="py-10 bg-precedential-offWhite">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Quick Service Navigation</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
                <thead className="bg-precedential-black text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Service Category</th>
                    <th className="py-3 px-4 text-left">Key Services</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Business & Commercial</td>
                    <td className="py-3 px-4">Commercial Law, Contract Disputes, Business Setup</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 font-medium">Personal & Family</td>
                    <td className="py-3 px-4">Family Law, Divorce, Will Writing, Personal Injury</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Property & Real Estate</td>
                    <td className="py-3 px-4">Real Estate Legal Services, Tenancy Disputes, Property Transactions</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 font-medium">Legal & Civil Matters</td>
                    <td className="py-3 px-4">Debt Settlement, Civil Cases, Power of Attorney, Legal Consulting</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Immigration & Criminal</td>
                    <td className="py-3 px-4">Immigration Law, Criminal Defense Advisory</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Detailed Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-10 text-center">Our Detailed Legal Services</h2>
            
            <Tabs defaultValue="business" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 rounded-xl mb-8">
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="property">Property</TabsTrigger>
                <TabsTrigger value="civil">Civil</TabsTrigger>
                <TabsTrigger value="immigration">Immigration</TabsTrigger>
              </TabsList>
              
              <TabsContent value="business" className="bg-white rounded-xl p-6 shadow-sm">
                <ServiceDetails 
                  title="Commercial Law" 
                  description={
                    <>
                      <p>We deliver comprehensive legal support for businesses operating within Dubai's dynamic commercial landscape. Our services include:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Business formation and structuring guidance</li>
                        <li>Drafting and reviewing commercial contracts</li>
                        <li>Regulatory compliance advisory</li>
                        <li>Corporate governance counsel</li>
                        <li>Commercial dispute resolution</li>
                        <li>Mergers and acquisitions support</li>
                      </ul>
                      <p className="mt-4">Our goal is to provide strategic legal guidance that aligns with your business objectives while minimizing risk in the UAE market.</p>
                    </>
                  } 
                />
                
                <ServiceDetails 
                  title="Contract Disputes" 
                  description={
                    <>
                      <p>Precedential Law assists both businesses and individuals in resolving contract disputes effectively. We understand that contract enforcement and interpretation issues can arise, and our approach includes:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Thorough contract analysis to identify strengths and vulnerabilities</li>
                        <li>Strategic negotiation to achieve favorable settlements</li>
                        <li>Expert representation in mediation and arbitration proceedings</li>
                        <li>Litigation support when necessary, with a focus on efficient resolution</li>
                      </ul>
                      <p className="mt-4">We work to protect your interests while finding practical, cost-effective solutions to contractual conflicts.</p>
                    </>
                  } 
                />
              </TabsContent>
              
              <TabsContent value="family" className="bg-white rounded-xl p-6 shadow-sm">
                <ServiceDetails 
                  title="Family Law" 
                  description={
                    <>
                      <p>We offer compassionate yet firm representation for family legal matters in Dubai, with particular expertise in:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Divorce proceedings under both UAE and Sharia law</li>
                        <li>Child custody and guardianship arrangements</li>
                        <li>Alimony and child support negotiations</li>
                        <li>Marriage contracts and prenuptial agreements</li>
                      </ul>
                      <p className="mt-4">Our approach focuses on protecting your rights and interests while minimizing emotional strain, especially when children are involved.</p>
                    </>
                  } 
                />
                
                <ServiceDetails 
                  title="Will Writing" 
                  description={
                    <>
                      <p>Will writing is critically important for expatriates residing in the UAE. Without a properly executed will, Sharia inheritance laws may apply by default to asset distribution – regardless of your nationality or religion – which may not align with your wishes.</p>
                      <p className="mt-4">Our will writing services include:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>DIFC Wills and Probate Registry services</li>
                        <li>Drafting Sharia-compliant wills for Muslims</li>
                        <li>Non-Muslim expatriate will preparation</li>
                        <li>Guardianship arrangements for minor children</li>
                        <li>Asset protection planning</li>
                      </ul>
                      <p className="mt-4">We ensure your will is legally sound and properly registered, providing peace of mind regarding the protection of your loved ones and assets.</p>
                    </>
                  } 
                />
              </TabsContent>
              
              <TabsContent value="property" className="bg-white rounded-xl p-6 shadow-sm">
                <ServiceDetails 
                  title="Real Estate Legal Services" 
                  description={
                    <>
                      <p>Receive expert legal advice for all aspects of property matters in Dubai's unique real estate environment, including:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Property purchase and sale transaction support</li>
                        <li>SPA (Sale and Purchase Agreement) review and drafting</li>
                        <li>Lease agreement creation and registration</li>
                        <li>Ejari registration assistance</li>
                        <li>Property development contract review</li>
                        <li>Title deed verification</li>
                        <li>Due diligence on property investments</li>
                        <li>Representing clients at the Dubai Land Department</li>
                      </ul>
                      <p className="mt-4">We also provide representation for tenancy disputes through the Rental Dispute Centre (RDC), helping landlords and tenants resolve conflicts efficiently.</p>
                    </>
                  } 
                />
              </TabsContent>
              
              <TabsContent value="civil" className="bg-white rounded-xl p-6 shadow-sm">
                <ServiceDetails 
                  title="Debt Settlement" 
                  description={
                    <>
                      <p>Are you facing financial difficulties or pursuing unpaid debts in the UAE? Precedential Law provides strategic guidance for resolving debt-related matters, including:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Negotiating settlements with creditors</li>
                        <li>Representing clients in debt recovery actions</li>
                        <li>Advising on the implications of bounced cheques</li>
                        <li>Developing practical repayment plans</li>
                        <li>Guidance on bankruptcy options when applicable</li>
                      </ul>
                      <p className="mt-4">We approach debt settlement with a focus on practical solutions that protect your financial future while respecting your obligations.</p>
                    </>
                  } 
                />
                
                <ServiceDetails 
                  title="Power of Attorney (POA)" 
                  description={
                    <>
                      <p>We facilitate the creation, attestation, and registration of Powers of Attorney documents that comply with UAE legal requirements. Our POA services include:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Drafting general and special Powers of Attorney</li>
                        <li>Guidance on appropriate POA scope and limitations</li>
                        <li>Assistance with notarization and authentication</li>
                        <li>Advice on POA execution and enforcement</li>
                      </ul>
                      <p className="mt-4">Whether you need representation for business matters, property transactions, or personal affairs during your absence from the UAE, we ensure your POA provides the right level of authority while protecting your interests.</p>
                    </>
                  } 
                />
                
                <ServiceDetails 
                  title="Civil Cases" 
                  description={
                    <>
                      <p>Our firm provides robust representation across various civil litigation matters in UAE courts, including:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Contract disputes and breaches</li>
                        <li>Insurance claims</li>
                        <li>Professional negligence cases</li>
                        <li>Employment disputes</li>
                        <li>Property and construction conflicts</li>
                      </ul>
                      <p className="mt-4">We approach civil litigation strategically, pursuing negotiated settlements where advantageous while being fully prepared to advocate vigorously in court when necessary.</p>
                    </>
                  } 
                />
              </TabsContent>
              
              <TabsContent value="immigration" className="bg-white rounded-xl p-6 shadow-sm">
                <ServiceDetails 
                  title="Immigration Law" 
                  description={
                    <>
                      <p>Our firm assists individuals and businesses with navigation through the UAE's immigration system, offering services such as:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Residence visa application and renewal guidance</li>
                        <li>Work permit and labor card processing</li>
                        <li>Investor and entrepreneur visa assistance</li>
                        <li>Family sponsorship and reunification</li>
                        <li>Resolution of visa-related issues and complications</li>
                        <li>Guidance on Golden Visa applications</li>
                      </ul>
                      <p className="mt-4">We help ensure compliance with UAE immigration regulations while achieving your residency and employment objectives.</p>
                    </>
                  } 
                />
                
                <ServiceDetails 
                  title="Criminal Defense (Advisory/Guidance)" 
                  description={
                    <>
                      <p>If you are facing potential criminal investigation or charges in the UAE, Precedential Law provides crucial legal advisory services. We offer:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Initial case assessment and strategic guidance</li>
                        <li>Explanation of your rights and legal options</li>
                        <li>Advice during police investigations</li>
                        <li>Coordination with criminal defense lawyers</li>
                        <li>Support for bail applications where applicable</li>
                      </ul>
                      <p className="mt-4">We provide clear guidance through what can be an unfamiliar and stressful legal process, helping you understand the procedures and potential outcomes while connecting you with appropriate resources.</p>
                    </>
                  } 
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Final CTA */}
        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Services;
