
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Users, Globe } from 'lucide-react';

interface AttorneyProfile {
  name: string;
  title: string;
  image: string;
  specializations: string[];
  experience: string;
  education: string[];
  barAdmissions: string[];
  languages: string[];
  bio: string;
  achievements: string[];
  caseSuccessRate: string;
  clientsServed: string;
}

const attorneys: AttorneyProfile[] = [
  {
    name: "Sarah Al Mansouri",
    title: "Managing Partner & Senior Attorney",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Commercial Law", "Corporate Governance", "M&A", "International Business"],
    experience: "15+ years",
    education: ["LLM Commercial Law, Harvard Law School", "LLB with Honors, UAE University", "Certified Corporate Governance Professional"],
    barAdmissions: ["UAE Bar Association (Senior Member)", "Dubai Courts (Qualified Advocate)", "DIFC Courts (Registered Practitioner)"],
    languages: ["English (Native)", "Arabic (Native)", "French (Fluent)"],
    bio: "Sarah leads our commercial law practice with extensive experience in UAE corporate law and international business transactions. She has successfully guided over 200 companies through complex mergers, acquisitions, and restructuring processes.",
    achievements: ["Top 50 Corporate Lawyers UAE 2023", "Excellence in M&A Award 2022", "Published author on UAE Corporate Law"],
    caseSuccessRate: "98.5%",
    clientsServed: "500+"
  },
  {
    name: "Ahmed Khalid",
    title: "Senior Litigation Attorney & Criminal Defense Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Civil Litigation", "Criminal Defense", "Dispute Resolution", "Commercial Arbitration"],
    experience: "12+ years",
    education: ["LLM International Dispute Resolution, Cambridge University", "LLB, American University of Sharjah", "Certified Arbitrator (DIAC)"],
    barAdmissions: ["UAE Bar Association", "DIFC Courts", "Dubai International Arbitration Centre"],
    languages: ["English (Fluent)", "Arabic (Native)", "Hindi (Conversational)"],
    bio: "Ahmed is a seasoned litigator with a proven track record in complex civil and criminal cases across UAE courts. His strategic approach has secured favorable outcomes in high-stakes commercial disputes and criminal defense matters.",
    achievements: ["Criminal Defense Lawyer of the Year 2023", "Successfully defended 150+ criminal cases", "DIAC Panel Arbitrator"],
    caseSuccessRate: "94.7%",
    clientsServed: "350+"
  },
  {
    name: "Fatima Rahman",
    title: "Family Law Specialist & Immigration Expert",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Family Law", "Immigration Law", "Estate Planning", "Personal Status Matters"],
    experience: "10+ years",
    education: ["LLM Family & Immigration Law, LSE", "LLB, Dubai International Academic City", "Certified Mediator (Family Disputes)"],
    barAdmissions: ["UAE Bar Association", "Personal Status Courts", "Immigration Appeals Board"],
    languages: ["English (Fluent)", "Arabic (Native)", "Urdu (Fluent)", "Hindi (Conversational)"],
    bio: "Fatima provides compassionate legal support for family matters, with specialized expertise in cross-cultural family law. She has successfully handled over 300 family law cases and immigration matters for international clients.",
    achievements: ["Family Lawyer of the Year 2022", "100% success rate in Golden Visa applications", "Published expert on UAE Immigration Law"],
    caseSuccessRate: "96.2%",
    clientsServed: "400+"
  },
  {
    name: "Mohammed Al Zaabi",
    title: "Real Estate & Property Law Expert",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Real Estate Law", "Property Development", "RERA Disputes", "Investment Structuring"],
    experience: "8+ years",
    education: ["LLM Real Estate Law, NYU School of Law", "LLB, Zayed University", "RERA Certified Real Estate Professional"],
    barAdmissions: ["UAE Bar Association", "RDC Qualified Mediator", "Real Estate Regulatory Agency (RERA)"],
    languages: ["English (Fluent)", "Arabic (Native)"],
    bio: "Mohammed specializes in Dubai's dynamic real estate market, helping clients navigate property transactions and development projects. His expertise in RERA regulations and property law has facilitated over AED 2 billion in real estate transactions.",
    achievements: ["Real Estate Lawyer of the Year 2023", "Successfully mediated 200+ property disputes", "Advisor to major property developers"],
    caseSuccessRate: "97.8%",
    clientsServed: "600+"
  }
];

const TeamProfiles: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Meet Our <span className="text-gold-gradient">Expert Legal Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our experienced attorneys bring decades of combined expertise in UAE law to protect and serve your interests with proven success.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">1,800+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Star className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">96.8% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">50+ Years Combined Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Globe className="w-5 h-5 text-precedential-gold" />
              <span className="text-sm font-medium">8 Languages Supported</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {attorneys.map((attorney, index) => (
            <div key={attorney.name} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-64 lg:h-full object-cover"
                    width={400}
                    height={500}
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-playfair font-bold mb-2">{attorney.name}</h3>
                      <p className="text-precedential-gold font-medium text-lg">{attorney.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-precedential-gold">{attorney.caseSuccessRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Experience & Clients:</h4>
                      <p className="text-sm text-gray-600">{attorney.experience} • {attorney.clientsServed} clients served</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Languages:</h4>
                      <p className="text-sm text-gray-600">{attorney.languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specializations.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs border-precedential-gold text-precedential-gold">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{attorney.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {attorney.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center">
                          <Award className="w-3 h-3 text-precedential-gold mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <div>
                      <strong>Education:</strong> {attorney.education.join(" • ")}
                    </div>
                    <div>
                      <strong>Bar Admissions:</strong> {attorney.barAdmissions.join(" • ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to Work with Our Expert Team?</h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation with our experienced attorneys to discuss your legal needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-precedential-gold text-precedential-black font-medium rounded-lg hover:bg-precedential-goldLight transition-colors"
              >
                Schedule Team Consultation
              </a>
              <a 
                href="tel:+971509014120" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-precedential-gold text-precedential-gold font-medium rounded-lg hover:bg-precedential-gold hover:text-precedential-black transition-colors"
              >
                Call Now: +971 50 901 4120
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
