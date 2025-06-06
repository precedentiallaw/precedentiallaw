
import React from 'react';
import { Badge } from '@/components/ui/badge';

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
}

const attorneys: AttorneyProfile[] = [
  {
    name: "Sarah Al Mansouri",
    title: "Managing Partner & Senior Attorney",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Commercial Law", "Corporate Governance", "M&A"],
    experience: "15+ years",
    education: ["LLM, Harvard Law School", "LLB, UAE University"],
    barAdmissions: ["UAE Bar Association", "Dubai Courts"],
    languages: ["English", "Arabic", "French"],
    bio: "Sarah leads our commercial law practice with extensive experience in UAE corporate law and international business transactions."
  },
  {
    name: "Ahmed Khalid",
    title: "Senior Litigation Attorney",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Civil Litigation", "Criminal Defense", "Dispute Resolution"],
    experience: "12+ years",
    education: ["LLM, Cambridge University", "LLB, American University of Sharjah"],
    barAdmissions: ["UAE Bar Association", "DIFC Courts"],
    languages: ["English", "Arabic", "Hindi"],
    bio: "Ahmed is a seasoned litigator with a proven track record in complex civil and criminal cases across UAE courts."
  },
  {
    name: "Fatima Rahman",
    title: "Family Law Specialist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Family Law", "Estate Planning", "Personal Status"],
    experience: "10+ years",
    education: ["LLM, LSE", "LLB, Dubai International Academic City"],
    barAdmissions: ["UAE Bar Association", "Personal Status Courts"],
    languages: ["English", "Arabic", "Urdu"],
    bio: "Fatima provides compassionate legal support for family matters, with specialized expertise in cross-cultural family law."
  },
  {
    name: "Mohammed Al Zaabi",
    title: "Real Estate & Immigration Law Expert",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specializations: ["Real Estate Law", "Immigration", "Property Disputes"],
    experience: "8+ years",
    education: ["LLM, NYU School of Law", "LLB, Zayed University"],
    barAdmissions: ["UAE Bar Association", "RDC Mediator"],
    languages: ["English", "Arabic"],
    bio: "Mohammed specializes in Dubai's dynamic real estate market and immigration law, helping clients navigate property transactions and visa processes."
  }
];

const TeamProfiles: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Meet Our <span className="text-gold-gradient">Legal Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced attorneys bring decades of combined expertise in UAE law to protect and serve your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={attorney.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-64 md:h-full object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">{attorney.name}</h3>
                  <p className="text-precedential-gold font-medium mb-3">{attorney.title}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specializations.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm"><strong>Experience:</strong> {attorney.experience}</p>
                    <p className="text-sm"><strong>Languages:</strong> {attorney.languages.join(", ")}</p>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{attorney.bio}</p>

                  <div className="text-xs text-gray-500">
                    <p><strong>Education:</strong> {attorney.education.join(", ")}</p>
                    <p><strong>Bar Admissions:</strong> {attorney.barAdmissions.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to work with our experienced legal team?</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-precedential-gold text-precedential-black font-medium rounded-lg hover:bg-precedential-goldLight transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
