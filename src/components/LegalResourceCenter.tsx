
import React, { useState } from 'react';
import { FileText, Download, Search, Filter, BookOpen, Calculator, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  fileSize: string;
  type: 'guide' | 'template' | 'checklist' | 'calculator';
  featured: boolean;
}

const LegalResourceCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'UAE Business Setup Complete Guide 2024',
      description: 'Comprehensive 50-page guide covering all aspects of company formation in the UAE including mainland vs free zone comparison, licensing requirements, and step-by-step setup process.',
      category: 'business',
      downloadUrl: '#',
      fileSize: '2.3 MB',
      type: 'guide',
      featured: true
    },
    {
      id: '2',
      title: 'Dubai Visa Requirements Checklist',
      description: 'Essential checklist for all visa types including Golden Visa requirements, investor visa, employment visa, and family sponsorship documentation.',
      category: 'immigration',
      downloadUrl: '#',
      fileSize: '1.1 MB',
      type: 'checklist',
      featured: true
    },
    {
      id: '3',
      title: 'Employment Contract Template (UAE)',
      description: 'Legally compliant employment contract template for UAE businesses including probation periods, notice periods, and UAE labor law compliance.',
      category: 'employment',
      downloadUrl: '#',
      fileSize: '156 KB',
      type: 'template',
      featured: false
    },
    {
      id: '4',
      title: 'Divorce Cost Calculator',
      description: 'Interactive tool to estimate divorce proceedings costs in Dubai including court fees, legal fees, and potential settlements.',
      category: 'family',
      downloadUrl: '#',
      fileSize: 'Online Tool',
      type: 'calculator',
      featured: true
    },
    {
      id: '5',
      title: 'Real Estate Purchase Agreement Template',
      description: 'Standard property purchase agreement for Dubai real estate transactions with DLD compliance and Oqood registration requirements.',
      category: 'realestate',
      downloadUrl: '#',
      fileSize: '245 KB',
      type: 'template',
      featured: false
    },
    {
      id: '6',
      title: 'DIFC Wills vs UAE Wills Comparison Guide',
      description: 'Detailed comparison of will options available to expats in the UAE including DIFC Wills, ADGM Wills, and UAE Courts.',
      category: 'estate',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      type: 'guide',
      featured: true
    },
    {
      id: '7',
      title: 'UAE Corporate Tax Guide 2024',
      description: 'Complete guide to UAE Corporate Tax implementation, rates, exemptions, and compliance requirements for businesses.',
      category: 'business',
      downloadUrl: '#',
      fileSize: '3.2 MB',
      type: 'guide',
      featured: true
    },
    {
      id: '8',
      title: 'Rental Dispute Settlement Checklist',
      description: 'Step-by-step checklist for resolving rental disputes through Dubai Rental Dispute Centre (RDC) including required documentation.',
      category: 'realestate',
      downloadUrl: '#',
      fileSize: '890 KB',
      type: 'checklist',
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Resources' },
    { value: 'business', label: 'Business Law' },
    { value: 'immigration', label: 'Immigration' },
    { value: 'family', label: 'Family Law' },
    { value: 'realestate', label: 'Real Estate' },
    { value: 'employment', label: 'Employment' },
    { value: 'estate', label: 'Estate Planning' }
  ];

  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'guide': return <BookOpen className="w-5 h-5" />;
      case 'template': return <FileText className="w-5 h-5" />;
      case 'checklist': return <FileText className="w-5 h-5" />;
      case 'calculator': return <Calculator className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(r => r.featured);

  const handleDownload = (resource: Resource) => {
    // Placeholder for download functionality
    console.log(`Downloading ${resource.title}`);
    // In a real implementation, this would trigger the download
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Legal <span className="text-gold-gradient">Resource Center</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of legal guides, templates, and tools designed 
              to help you navigate UAE legal requirements with confidence.
            </p>
          </div>

          {/* Featured Resources */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.slice(0, 6).map((resource) => (
                <div key={resource.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-precedential-gold">
                      {getIcon(resource.type)}
                    </div>
                    <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{resource.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{resource.fileSize}</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-precedential-gold hover:bg-precedential-goldDark text-precedential-black"
                      onClick={() => handleDownload(resource)}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search legal resources, guides, templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-precedential-gold/50 focus:border-precedential-gold h-12"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* All Resources */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">All Resources ({filteredResources.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="text-precedential-gold flex-shrink-0">
                      {getIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-lg text-gray-900 pr-2">{resource.title}</h4>
                        {resource.featured && (
                          <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded text-xs font-medium flex-shrink-0">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-xs text-gray-500">{resource.fileSize}</span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDownload(resource)}
                          className="hover:bg-precedential-gold hover:text-precedential-black"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Get Resource
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 bg-precedential-gold/5 p-8 rounded-xl border border-precedential-gold/20">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Legal Guidance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              While our resources provide valuable information, every legal situation is unique. 
              Contact our expert team for personalized advice tailored to your specific needs.
            </p>
            <Button className="bg-precedential-gold hover:bg-precedential-goldDark text-precedential-black font-semibold px-8 py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalResourceCenter;
