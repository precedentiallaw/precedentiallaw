
import React from 'react';
import { Download, FileText, BookOpen, Shield, Users, Building, Heart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LegalGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  downloadSize: string;
  lastUpdated: string;
  pageCount: number;
  downloadCount: number;
  featured: boolean;
  topics: string[];
}

const ComprehensiveLegalGuides: React.FC = () => {
  const guides: LegalGuide[] = [
    {
      id: "complete-business-setup-guide",
      title: "Complete UAE Business Setup Guide 2024",
      description: "Comprehensive 75-page guide covering every aspect of business formation in the UAE, from mainland companies to free zones, licensing, Corporate Tax implications, and step-by-step procedures.",
      category: "Business Law",
      icon: Building,
      downloadSize: "3.2 MB",
      lastUpdated: "December 2024",
      pageCount: 75,
      downloadCount: 2340,
      featured: true,
      topics: ["Company Formation", "Free Zone vs Mainland", "Licensing", "Corporate Tax", "Banking", "Visas"]
    },
    {
      id: "expat-family-law-guide",
      title: "Expat Family Law Complete Guide",
      description: "Essential 60-page guide for expatriates navigating family law in UAE, covering divorce, child custody, inheritance, and cross-border legal issues with detailed case studies.",
      category: "Family Law",
      icon: Heart,
      downloadSize: "2.8 MB",
      lastUpdated: "November 2024",
      pageCount: 60,
      downloadCount: 1890,
      featured: true,
      topics: ["Divorce Procedures", "Child Custody", "Asset Division", "Jurisdiction", "International Law", "DIFC Courts"]
    },
    {
      id: "golden-visa-mastery",
      title: "Golden Visa Application Mastery",
      description: "Definitive 45-page guide covering all Golden Visa categories, investment requirements, application strategies, and success optimization techniques with real case examples.",
      category: "Immigration Law",
      icon: Shield,
      downloadSize: "2.1 MB",
      lastUpdated: "December 2024",
      pageCount: 45,
      downloadCount: 3120,
      featured: true,
      topics: ["10-Year Visa", "Investment Requirements", "Real Estate Route", "Business Route", "Talent Visa", "Student Visa"]
    },
    {
      id: "real-estate-investment-legal",
      title: "UAE Real Estate Investment Legal Framework",
      description: "Comprehensive 55-page investor's guide to Dubai property law, off-plan regulations, RERA compliance, rental laws, and dispute resolution mechanisms.",
      category: "Real Estate Law",
      icon: Building,
      downloadSize: "2.5 MB",
      lastUpdated: "October 2024",
      pageCount: 55,
      downloadCount: 1650,
      featured: false,
      topics: ["Property Purchase", "Off-Plan Regulations", "RERA Laws", "Rental Disputes", "Foreign Ownership", "Investment Strategies"]
    },
    {
      id: "corporate-tax-compliance",
      title: "UAE Corporate Tax Compliance Handbook",
      description: "Complete 65-page handbook on UAE Corporate Tax law, filing obligations, exemptions, transfer pricing, international compliance, and strategic tax planning.",
      category: "Tax Law",
      icon: Briefcase,
      downloadSize: "2.9 MB",
      lastUpdated: "November 2024",
      pageCount: 65,
      downloadCount: 980,
      featured: true,
      topics: ["Corporate Tax Law", "Filing Requirements", "Exemptions", "Transfer Pricing", "International Tax", "Compliance Strategy"]
    },
    {
      id: "employment-law-comprehensive",
      title: "UAE Employment Law Comprehensive Guide",
      description: "Detailed 50-page guide covering UAE Labour Law, employment contracts, termination procedures, dispute resolution, and recent legislative updates.",
      category: "Employment Law",
      icon: Users,
      downloadSize: "2.3 MB",
      lastUpdated: "September 2024",
      pageCount: 50,
      downloadCount: 1420,
      featured: false,
      topics: ["Labour Law", "Employment Contracts", "Termination", "Disputes", "End of Service", "New Regulations"]
    },
    {
      id: "wills-estate-planning",
      title: "Wills & Estate Planning for Expats",
      description: "Essential 40-page guide comparing DIFC Wills vs Mainland Wills, estate planning strategies, guardianship arrangements, and succession planning for non-Muslims.",
      category: "Estate Planning",
      icon: Shield,
      downloadSize: "1.8 MB",
      lastUpdated: "October 2024",
      pageCount: 40,
      downloadCount: 1230,
      featured: false,
      topics: ["DIFC Wills", "Mainland Wills", "Guardianship", "Estate Planning", "Succession", "Non-Muslim Rights"]
    },
    {
      id: "commercial-litigation-guide",
      title: "Commercial Litigation Strategy Guide",
      description: "Advanced 55-page guide covering UAE commercial dispute resolution, court procedures, arbitration, enforcement of judgments, and international aspects.",
      category: "Litigation",
      icon: Briefcase,
      downloadSize: "2.6 MB",
      lastUpdated: "November 2024",
      pageCount: 55,
      downloadCount: 890,
      featured: false,
      topics: ["Court Procedures", "Arbitration", "Dispute Resolution", "Enforcement", "International Litigation", "DIFC Courts"]
    }
  ];

  const categories = ["All", "Business Law", "Family Law", "Immigration Law", "Real Estate Law", "Tax Law", "Employment Law", "Estate Planning", "Litigation"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Comprehensive <span className="text-gold-gradient">Legal Guides</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download our extensive library of professional legal guides, meticulously researched and regularly updated 
            to provide authoritative guidance on UAE law.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? 
                  "bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight" : 
                  "border-precedential-gold/30 text-precedential-gold hover:bg-precedential-gold/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.filter(guide => guide.featured).map((guide) => (
              <Card key={guide.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-precedential-gold">
                <CardHeader className="bg-gradient-to-r from-precedential-gold/10 to-precedential-gold/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-precedential-gold/20 rounded-full flex items-center justify-center">
                      <guide.icon className="w-6 h-6 text-precedential-gold" />
                    </div>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{guide.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{guide.pageCount} pages</span>
                      <span>{guide.downloadSize}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Updated: {guide.lastUpdated}</span>
                      <span>{guide.downloadCount.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Complete Legal Guide Library</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <guide.icon className="w-6 h-6 text-precedential-gold mr-3" />
                        <span className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded-full text-sm font-medium">
                          {guide.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-2 line-clamp-2">{guide.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{guide.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{guide.pageCount} pages • {guide.downloadSize}</span>
                        <span>{guide.downloadCount.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {guide.topics.slice(0, 4).map((topic, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col gap-2">
                      <Button size="sm" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                        <BookOpen className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download All Package */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto border-2 border-precedential-gold/20">
            <FileText className="w-16 h-16 text-precedential-gold mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Complete Legal Guide Package</h3>
            <p className="text-xl text-gray-600 mb-6">
              Download all our legal guides in one comprehensive package. Over 500 pages of expert legal insights, 
              regular updates, and premium support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-precedential-gold">500+</div>
                <div className="text-sm text-gray-600">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-precedential-gold">15MB</div>
                <div className="text-sm text-gray-600">Complete Package</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-precedential-gold">8</div>
                <div className="text-sm text-gray-600">Practice Areas</div>
              </div>
            </div>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              <Download className="w-5 h-5 mr-2" />
              Download Complete Package
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveLegalGuides;
