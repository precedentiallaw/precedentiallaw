
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Download, FileText, Calendar, User, ArrowRight } from 'lucide-react';

interface LegalGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadSize: string;
  lastUpdated: string;
  author: string;
  popular: boolean;
}

const LegalGuides: React.FC = () => {
  const guides: LegalGuide[] = [
    {
      id: "1",
      title: "Complete Guide to UAE Company Formation 2024",
      description: "Comprehensive 50-page guide covering mainland vs free zone companies, licensing requirements, Corporate Tax implications, and step-by-step setup procedures.",
      category: "Business Law",
      downloadSize: "2.1 MB",
      lastUpdated: "December 2024",
      author: "Corporate Law Team",
      popular: true
    },
    {
      id: "2",
      title: "Expat Divorce Guide: UAE Legal Framework",
      description: "Essential guide for expatriates navigating divorce proceedings in UAE, covering jurisdiction, asset division, child custody, and recent legal updates.",
      category: "Family Law",
      downloadSize: "1.8 MB",
      lastUpdated: "November 2024",
      author: "Family Law Specialists",
      popular: true
    },
    {
      id: "3",
      title: "Golden Visa Application Manual 2024",
      description: "Detailed manual covering all Golden Visa categories, investment requirements, application procedures, and documentation checklists.",
      category: "Immigration Law",
      downloadSize: "1.5 MB",
      lastUpdated: "December 2024",
      author: "Immigration Law Team",
      popular: true
    },
    {
      id: "4",
      title: "UAE Real Estate Investment Legal Guide",
      description: "Investor's guide to Dubai property law, off-plan purchases, RERA regulations, rental laws, and dispute resolution mechanisms.",
      category: "Real Estate Law",
      downloadSize: "2.3 MB",
      lastUpdated: "October 2024",
      author: "Real Estate Legal Team",
      popular: false
    },
    {
      id: "5",
      title: "UAE Corporate Tax Compliance Handbook",
      description: "Complete handbook on UAE Corporate Tax law, filing obligations, exemptions, transfer pricing, and practical compliance strategies.",
      category: "Tax Law",
      downloadSize: "1.9 MB",
      lastUpdated: "November 2024",
      author: "Tax Law Specialists",
      popular: true
    },
    {
      id: "6",
      title: "DIFC Wills vs Mainland Wills: Comprehensive Comparison",
      description: "Detailed analysis of will options for non-Muslims in UAE, including pros/cons, costs, procedures, and estate planning strategies.",
      category: "Estate Planning",
      downloadSize: "1.2 MB",
      lastUpdated: "September 2024",
      author: "Estate Planning Team",
      popular: false
    }
  ];

  const categories = ["All", "Business Law", "Family Law", "Immigration Law", "Real Estate Law", "Tax Law", "Estate Planning"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Legal Guides & Resources | Free Legal Documents Dubai | Precedential Law</title>
        <meta name="description" content="Download free comprehensive legal guides covering UAE business law, family law, immigration, real estate, and tax compliance. Expert legal resources for Dubai residents." />
        <meta name="keywords" content="UAE legal guides, Dubai legal resources, free legal documents UAE, business law guide Dubai, family law guide UAE, immigration guide Dubai, legal templates" />
        <link rel="canonical" href="https://precedentiallaw.com/legal-guides" />
        
        <meta property="og:title" content="UAE Legal Guides & Resources | Free Legal Documents Dubai" />
        <meta property="og:description" content="Access comprehensive legal guides and resources for UAE law. Free downloads covering business, family, immigration, and real estate law." />
        <meta property="og:url" content="https://precedentiallaw.com/legal-guides" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Legal <span className="text-gold-gradient">Guides</span> & Resources
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Comprehensive legal guides and resources covering all aspects of UAE law. 
              Free downloads from Dubai's premier legal consultancy.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Download All Guides Package
            </Button>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
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
        </section>

        {/* Legal Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded-full text-sm font-medium">
                        {guide.category}
                      </span>
                      {guide.popular && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {guide.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {guide.downloadSize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {guide.lastUpdated}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <User className="w-4 h-4" />
                      {guide.author}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="text-precedential-gold hover:text-precedential-goldLight">
                        Preview <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                      <Button size="sm" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Stay Updated with UAE Legal Changes
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to receive updated legal guides and notifications when new UAE laws and regulations are implemented.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold text-black"
              />
              <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs opacity-70 mt-3">
              Join 5,000+ legal professionals and business leaders
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default LegalGuides;
