
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Download, Search, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  trending: boolean;
  downloadable?: boolean;
  tags: string[];
  views: number;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="relative">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      {post.trending && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Trending
        </div>
      )}
      {post.downloadable && (
        <div className="absolute top-4 right-4 bg-precedential-gold text-precedential-black p-2 rounded-full">
          <Download className="w-4 h-4" />
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded">
          {post.category}
        </span>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 hover:text-precedential-gold transition-colors cursor-pointer">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <User className="w-4 h-4" />
          {post.author}
          <span>•</span>
          <span>{post.views} views</span>
        </div>
        <Button variant="ghost" size="sm" className="text-precedential-gold hover:text-precedential-goldLight">
          Read More <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  </article>
);

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "UAE New Company Law 2024: Complete Compliance Guide for Business Owners",
      excerpt: "Comprehensive analysis of Federal Decree-Law No. 32 of 2021 amendments affecting foreign investment, corporate governance, and business operations. Essential reading for CEOs and business owners.",
      author: "Corporate Law Team",
      date: "2024-06-05",
      readTime: "12 min read",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: true,
      downloadable: true,
      tags: ["UAE Company Law", "Corporate Governance", "Business Compliance", "Foreign Investment", "2024 Updates"],
      views: 15420
    },
    {
      id: "2",
      title: "Dubai Golden Visa 2024: Expert Legal Strategy for High-Net-Worth Individuals",
      excerpt: "Navigate the complex legal landscape of UAE Golden Visa applications. Insider insights on investor categories, real estate requirements, and winning documentation strategies from successful cases.",
      author: "Immigration Law Specialists",
      date: "2024-06-03",
      readTime: "15 min read",
      category: "Immigration Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: true,
      downloadable: true,
      tags: ["Golden Visa", "UAE Residency", "Investment Visa", "High Net Worth", "Immigration Strategy"],
      views: 23180
    },
    {
      id: "3",
      title: "UAE Corporate Tax 2024: Advanced Planning Strategies to Minimize Liability",
      excerpt: "Strategic guide to UAE Corporate Tax compliance following Federal Decree-Law No. 47 of 2022. Proven methods to minimize tax liability while ensuring full regulatory compliance.",
      author: "Tax Law Department",
      date: "2024-06-01",
      readTime: "18 min read",
      category: "Tax Law",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: true,
      downloadable: true,
      tags: ["Corporate Tax UAE", "Tax Planning", "Business Strategy", "Compliance", "Free Zone Tax"],
      views: 18950
    },
    {
      id: "4",
      title: "Expat Divorce in Dubai: Complete Legal Framework Under New Personal Status Law",
      excerpt: "Comprehensive guide to divorce proceedings for expatriates under Federal Decree-Law No. 41 of 2022. Asset protection, child custody strategies, and jurisdictional advantages explained.",
      author: "Family Law Team",
      date: "2024-05-30",
      readTime: "14 min read",
      category: "Family Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: false,
      downloadable: true,
      tags: ["Expat Divorce", "Family Law UAE", "Child Custody", "Asset Protection", "DIFC Courts"],
      views: 12760
    },
    {
      id: "5",
      title: "DIFC Wills vs UAE Mainland Wills: Strategic Estate Planning Analysis 2024",
      excerpt: "Detailed comparison of will registration options for non-Muslims in UAE. DIFC Courts jurisdiction benefits versus mainland probate procedures and tax implications analyzed.",
      author: "Estate Planning Specialists",
      date: "2024-05-28",
      readTime: "11 min read",
      category: "Estate Planning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: false,
      downloadable: true,
      tags: ["DIFC Wills", "Estate Planning", "Probate Law", "Inheritance", "Expat Legal Planning"],
      views: 8340
    },
    {
      id: "6",
      title: "UAE Real Estate Investment Laws: Due Diligence Checklist for 2024",
      excerpt: "Navigate Dubai's property investment landscape with expert legal insights. From off-plan purchases to rental regulations, RERA compliance, and dispute resolution mechanisms.",
      author: "Real Estate Law Team",
      date: "2024-05-25",
      readTime: "13 min read",
      category: "Real Estate Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: false,
      downloadable: true,
      tags: ["Real Estate Dubai", "Property Investment", "Due Diligence", "RERA", "Property Law"],
      views: 9870
    },
    {
      id: "7",
      title: "Employment Law Changes UAE 2024: HR Compliance for Multinational Corporations",
      excerpt: "Latest amendments to UAE Labour Law affecting employment contracts, termination procedures, and employee rights. Critical updates for HR directors and business owners.",
      author: "Employment Law Team",
      date: "2024-05-22",
      readTime: "10 min read",
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: false,
      tags: ["Employment Law", "HR Compliance", "Labour Law UAE", "Termination", "Employee Rights"],
      views: 7650
    },
    {
      id: "8",
      title: "Bounced Cheques UAE 2024: Criminal vs Civil Implications After Law Changes",
      excerpt: "Understanding the decriminalization of bounced cheques under amended Commercial Transactions Law. When criminal liability still applies and civil enforcement strategies.",
      author: "Criminal Law Department",
      date: "2024-05-20",
      readTime: "9 min read",
      category: "Criminal Law",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      trending: false,
      tags: ["Bounced Cheques", "Criminal Law", "Commercial Law", "Debt Recovery", "Legal Changes"],
      views: 11230
    }
  ];

  const categories = ['All', 'Corporate Law', 'Immigration Law', 'Family Law', 'Tax Law', 'Real Estate Law', 'Employment Law', 'Criminal Law', 'Estate Planning'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const trendingPosts = blogPosts.filter(post => post.trending);
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Legal Blog 2024 | Expert Insights & Analysis | Precedential Law Dubai</title>
        <meta name="description" content="Stay updated with latest UAE legal developments, corporate law changes, golden visa updates, and expert analysis from Dubai's premier legal consultancy. Weekly insights for businesses and individuals." />
        <meta name="keywords" content="UAE legal blog, Dubai law updates, corporate tax UAE, golden visa 2024, UAE company law, expat divorce Dubai, DIFC wills, employment law UAE, legal insights, UAE legislation" />
        <link rel="canonical" href="https://precedentiallaw.com/blog" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="UAE Legal Blog 2024 | Expert Analysis | Precedential Law" />
        <meta property="og:description" content="Latest UAE legal insights, corporate law updates, and expert analysis from Dubai's premier legal consultancy." />
        <meta property="og:url" content="https://precedentiallaw.com/blog" />
        <meta property="og:type" content="website" />
        
        {/* Structured data for blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Precedential Law Legal Insights",
            "description": "Expert legal analysis and insights on UAE law developments",
            "url": "https://precedentiallaw.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Precedential Law",
              "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"
            }
          })}
        </script>
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Legal <span className="text-gold-gradient">Insights</span> & Analysis
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Stay ahead with expert analysis of UAE legal developments, regulatory changes, and strategic insights 
              from Dubai's premier legal consultancy. Essential reading for business leaders and legal professionals.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search legal topics... (e.g., 'golden visa', 'corporate tax', 'divorce law')"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-precedential-gold text-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
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

        {/* Featured Post */}
        {!searchTerm && selectedCategory === 'All' && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Featured Analysis</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-80 lg:h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded">
                        {featuredPost.category}
                      </span>
                      <span>{featuredPost.views.toLocaleString()} views</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{featuredPost.author}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      {featuredPost.downloadable && (
                        <div className="flex items-center gap-1 text-precedential-gold text-sm">
                          <Download className="w-4 h-4" />
                          PDF Available
                        </div>
                      )}
                    </div>
                    <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                      Read Full Analysis <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Trending Posts */}
        {!searchTerm && selectedCategory === 'All' && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-red-500" />
                <h2 className="text-3xl font-playfair font-bold">Trending This Week</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trendingPosts.slice(1).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Legal Insights'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black"
                >
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">UAE Legal Updates Weekly</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 5,000+ legal professionals, business leaders, and executives who rely on our expert analysis. 
              Get the latest UAE legal developments delivered every Monday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold text-black"
              />
              <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight whitespace-nowrap">
                Subscribe Free
              </Button>
            </div>
            <p className="text-sm opacity-70">
              ✓ Weekly legal updates ✓ Case study analysis ✓ Regulatory alerts ✓ Unsubscribe anytime
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Blog;
