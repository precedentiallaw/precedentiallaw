
import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Star, Eye, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'form' | 'agreement' | 'letter' | 'guide';
  complexity: 'basic' | 'intermediate' | 'advanced';
  downloadCount: number;
  rating: number;
  lastUpdated: string;
  previewAvailable: boolean;
  premium: boolean;
}

const DocumentTemplateLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const templates: DocumentTemplate[] = [
    {
      id: '1',
      title: 'Employment Contract Template (UAE)',
      description: 'Comprehensive employment agreement template compliant with UAE Labour Law 2022',
      category: 'Employment Law',
      type: 'agreement',
      complexity: 'intermediate',
      downloadCount: 1250,
      rating: 4.8,
      lastUpdated: '2024-01-15',
      previewAvailable: true,
      premium: false
    },
    {
      id: '2',
      title: 'Rental Agreement Template (Dubai)',
      description: 'Standard residential rental agreement for Dubai properties with RERA compliance',
      category: 'Real Estate',
      type: 'agreement',
      complexity: 'basic',
      downloadCount: 2100,
      rating: 4.9,
      lastUpdated: '2024-01-10',
      previewAvailable: true,
      premium: false
    },
    {
      id: '3',
      title: 'Business Partnership Agreement',
      description: 'Detailed partnership agreement template for UAE business ventures',
      category: 'Business Law',
      type: 'agreement',
      complexity: 'advanced',
      downloadCount: 890,
      rating: 4.7,
      lastUpdated: '2024-01-08',
      previewAvailable: true,
      premium: true
    },
    {
      id: '4',
      title: 'Power of Attorney Form',
      description: 'General power of attorney form for various legal and business purposes',
      category: 'Legal Documents',
      type: 'form',
      complexity: 'intermediate',
      downloadCount: 1560,
      rating: 4.6,
      lastUpdated: '2024-01-12',
      previewAvailable: true,
      premium: false
    },
    {
      id: '5',
      title: 'Demand Letter Template',
      description: 'Professional demand letter template for debt collection and contract breaches',
      category: 'Litigation',
      type: 'letter',
      complexity: 'basic',
      downloadCount: 980,
      rating: 4.5,
      lastUpdated: '2024-01-05',
      previewAvailable: true,
      premium: false
    },
    {
      id: '6',
      title: 'DIFC Will Template',
      description: 'Comprehensive will template for DIFC jurisdiction with guardianship provisions',
      category: 'Estate Planning',
      type: 'form',
      complexity: 'advanced',
      downloadCount: 650,
      rating: 4.9,
      lastUpdated: '2024-01-14',
      previewAvailable: true,
      premium: true
    }
  ];

  const categories = ['all', 'Employment Law', 'Real Estate', 'Business Law', 'Legal Documents', 'Litigation', 'Estate Planning'];
  const types = ['all', 'form', 'agreement', 'letter', 'guide'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = searchTerm === '' || 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesType = selectedType === 'all' || template.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'basic': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-orange-600 bg-orange-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'form': return '📋';
      case 'agreement': return '📄';
      case 'letter': return '✉️';
      case 'guide': return '📖';
      default: return '📝';
    }
  };

  const handleDownload = (template: DocumentTemplate) => {
    if (template.premium) {
      alert('This is a premium template. Please contact us for access or upgrade your account.');
    } else {
      alert(`Downloading ${template.title}...`);
      // In production, this would trigger the actual download
    }
  };

  const handlePreview = (template: DocumentTemplate) => {
    alert(`Opening preview for ${template.title}...`);
    // In production, this would open a preview modal or new window
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Legal Document <span className="text-gold-gradient">Template Library</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive collection of legal document templates, 
              carefully crafted for UAE law compliance and best practices.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{getTypeIcon(template.type)}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{template.title}</h3>
                      <span className="text-sm text-gray-500">{template.category}</span>
                    </div>
                  </div>
                  {template.premium && (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{template.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${getComplexityColor(template.complexity)}`}>
                    {template.complexity.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Download className="w-4 h-4" />
                    <span>{template.downloadCount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Updated {new Date(template.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {template.previewAvailable && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePreview(template)}
                      className="flex-1 text-xs"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Preview
                    </Button>
                  )}
                  <Button
                    onClick={() => handleDownload(template)}
                    className={`flex-1 text-xs ${
                      template.premium 
                        ? 'bg-yellow-600 hover:bg-yellow-700' 
                        : 'bg-precedential-gold hover:bg-precedential-goldLight text-precedential-black'
                    }`}
                  >
                    <Download className="w-3 h-3 mr-1" />
                    {template.premium ? 'Premium' : 'Download'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No templates found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all categories.</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Custom Template Request */}
          <div className="mt-12 bg-precedential-black text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Template?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Can't find the specific document template you need? Our legal team can create 
              custom templates tailored to your unique requirements and ensure full UAE law compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Request Custom Template
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-precedential-black">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentTemplateLibrary;
