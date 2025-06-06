
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Download, FileText, CheckCircle, Clock } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  downloadUrl: string;
  fileSize: string;
  pages: string;
}

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <FileText className="w-8 h-8 text-precedential-gold mr-3" />
        <div>
          <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded text-xs font-medium">
            {resource.category}
          </span>
        </div>
      </div>
      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
        {resource.type}
      </span>
    </div>
    
    <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    
    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
      <span>{resource.pages} pages</span>
      <span>{resource.fileSize}</span>
    </div>
    
    <Button 
      className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight"
      onClick={() => {
        // In a real implementation, this would trigger the download
        console.log(`Downloading: ${resource.title}`);
      }}
    >
      <Download className="w-4 h-4 mr-2" />
      Download Free Guide
    </Button>
  </div>
);

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      id: "1",
      title: "UAE Business Setup Guide 2024",
      description: "Comprehensive guide covering all aspects of setting up a business in Dubai and the UAE, including licensing, registration, and compliance requirements.",
      type: "PDF Guide",
      category: "Business Law",
      downloadUrl: "#",
      fileSize: "2.3 MB",
      pages: "24"
    },
    {
      id: "2",
      title: "Expat Will Writing Checklist",
      description: "Essential checklist for expatriates in the UAE to ensure proper will preparation, asset protection, and guardianship arrangements.",
      type: "Checklist",
      category: "Family Law",
      downloadUrl: "#",
      fileSize: "890 KB",
      pages: "8"
    },
    {
      id: "3",
      title: "Dubai Real Estate Investment Legal Guide",
      description: "Detailed guide covering legal considerations for property investment in Dubai, including purchase procedures, ownership laws, and common pitfalls.",
      type: "PDF Guide",
      category: "Real Estate",
      downloadUrl: "#",
      fileSize: "3.1 MB",
      pages: "32"
    },
    {
      id: "4",
      title: "UAE Employment Law Update 2024",
      description: "Latest changes in UAE employment law, including new provisions for remote work, employee rights, and employer obligations.",
      type: "Legal Update",
      category: "Employment Law",
      downloadUrl: "#",
      fileSize: "1.2 MB",
      pages: "12"
    },
    {
      id: "5",
      title: "Contract Dispute Prevention Guide",
      description: "Practical guidance on drafting contracts and preventing disputes in the UAE legal system, with template clauses and best practices.",
      type: "Template",
      category: "Contract Law",
      downloadUrl: "#",
      fileSize: "1.8 MB",
      pages: "18"
    },
    {
      id: "6",
      title: "Immigration Compliance Handbook",
      description: "Step-by-step guide for individuals and businesses to ensure compliance with UAE immigration laws and visa requirements.",
      type: "Handbook",
      category: "Immigration",
      downloadUrl: "#",
      fileSize: "2.7 MB",
      pages: "28"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Resources & Guides | Free Downloads | Precedential Law Dubai</title>
        <meta name="description" content="Download free legal guides, checklists, and resources for UAE law. Expert insights on business setup, real estate, family law, and more." />
        <meta name="keywords" content="UAE legal guides, Dubai law resources, free legal downloads, business setup guide, legal checklists, law firm resources" />
        <link rel="canonical" href="https://precedentiallaw.com/resources" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Legal <span className="text-gold-gradient">Resources</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Access our comprehensive collection of legal guides, checklists, and resources designed to help you navigate UAE law with confidence.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Why Choose Our Resources?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">Expert Authored</h3>
                  <p className="text-gray-600">Created by our experienced legal team with deep UAE law expertise</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">Up-to-Date</h3>
                  <p className="text-gray-600">Regularly updated to reflect the latest legal developments</p>
                </div>
                <div className="flex flex-col items-center">
                  <FileText className="w-12 h-12 text-precedential-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">Practical</h3>
                  <p className="text-gray-600">Actionable guidance you can implement immediately</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Need Personalized Legal Advice?</h2>
            <p className="text-xl mb-8 opacity-90">
              While our resources provide valuable insights, every legal situation is unique. Get personalized advice from our expert team.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Resources;
