
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Download, Search, Tag, Eye, MessageSquare, BookOpen } from 'lucide-react';
import { comprehensiveBlogPosts, type BlogPost } from '@/components/BlogContentData';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
    <div className="relative">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {post.trending && (
          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}
        {post.featured && (
          <div className="bg-precedential-gold text-precedential-black px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {post.downloadable && (
        <div className="absolute top-4 right-4 bg-precedential-gold text-precedential-black p-2 rounded-full">
          <Download className="w-4 h-4" />
        </div>
      )}

      {/* Category */}
      <div className="absolute bottom-4 left-4">
        <span className="bg-precedential-gold/90 text-precedential-black px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-6">
      {/* Meta Info */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 hover:text-precedential-gold transition-colors cursor-pointer line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {post.views.toLocaleString()}
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-3 h-3" />
          {post.comments}
        </div>
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          {post.author}
        </div>
      </div>
      
      {/* Author & CTA */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{post.expertise}</span>
        </div>
        <Button variant="ghost" size="sm" className="text-precedential-gold hover:text-precedential-goldLight">
          Read Full Analysis <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  </article>
);

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Corporate Law', 'Immigration Law', 'Family Law', 'Tax Law', 'Real Estate Law', 'Employment Law', 'Estate Planning'];

  const filteredPosts = comprehensiveBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const trendingPosts = comprehensiveBlogPosts.filter(post => post.trending);
  const featuredPost = comprehensiveBlogPosts.find(post => post.featured) || comprehensiveBlogPosts[0];

  // Weekly legal updates
  const weeklyUpdates = [
    {
      week: "Week of December 9, 2024",
      updates: [
        "New ADGM regulations on financial services licensing effective January 2025",
        "UAE Central Bank issues updated cryptocurrency and digital asset guidelines",
        "Dubai Municipality announces enhanced real estate registration procedures",
        "Federal Supreme Court landmark decision on commercial contract disputes"
      ]
    },
    {
      week: "Week of December 2, 2024", 
      updates: [
        "Corporate Tax filing deadline extensions announced for Q4 2024",
        "New visa categories introduced for AI and technology professionals",
        "DIFC Courts implements updated procedural rules for commercial cases",
        "Updated Labour Law regulations on remote work and flexible arrangements"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>UAE Legal Blog 2024 | Expert Legal Analysis & Updates | Precedential Law Dubai</title>
        <meta name="description" content="Comprehensive UAE legal blog featuring expert analysis on corporate law, golden visa updates, tax compliance, family law, and business formation. Weekly insights from Dubai's premier legal consultancy." />
        <meta name="keywords" content="UAE legal blog 2024, Dubai law updates, corporate tax analysis, golden visa guide, UAE company formation, family law Dubai, DIFC wills, employment law updates, legal insights UAE, business law Dubai" />
        <link rel="canonical" href="https://precedentiallaw.com/blog" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="UAE Legal Blog 2024 | Expert Analysis | Precedential Law" />
        <meta property="og:description" content="Comprehensive legal insights, regulatory updates, and expert analysis on UAE law developments from Dubai's leading legal consultancy." />
        <meta property="og:url" content="https://precedentiallaw.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        
        {/* Structured data for blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Precedential Law Legal Insights",
            "description": "Expert legal analysis and insights on UAE law developments, business formation, immigration, and compliance",
            "url": "https://precedentiallaw.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Precedential Law",
              "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"
            },
            "mainEntity": comprehensiveBlogPosts.slice(0, 5).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "url": `https://precedentiallaw.com/blog/${post.slug}`
            }))
          })}
        </script>
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-precedential-black to-precedential-black/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-precedential-gold/10 border border-precedential-gold/20">
                <BookOpen className="w-8 h-8 text-precedential-gold" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              UAE Legal <span className="text-gold-gradient">Intelligence</span> Hub
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Authoritative analysis of UAE legal developments, strategic insights, and expert commentary 
              from Dubai's premier legal consultancy. Essential reading for business leaders, legal professionals, and investors.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search legal topics... (e.g., 'golden visa', 'corporate tax', 'company formation')"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-precedential-gold text-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Legal Updates */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Weekly Legal Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {weeklyUpdates.map((week, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="font-bold mb-4 text-precedential-gold flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {week.week}
                  </h3>
                  <ul className="space-y-3">
                    {week.updates.map((update, updateIdx) => (
                      <li key={updateIdx} className="text-sm text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-precedential-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {update}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
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
        {!searchTerm && selectedCategory === 'All' && featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Featured Legal Analysis</h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-80 lg:h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-precedential-gold text-precedential-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Featured Analysis
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-precedential-gold/90 text-precedential-black px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{featuredPost.views.toLocaleString()} views</span>
                      <span>•</span>
                      <span>{featuredPost.comments} expert comments</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">{featuredPost.author}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      {featuredPost.downloadable && (
                        <div className="flex items-center gap-1 text-precedential-gold text-sm">
                          <Download className="w-4 h-4" />
                          PDF Download
                        </div>
                      )}
                    </div>
                    <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                      Read Complete Analysis <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Trending Posts */}
        {!searchTerm && selectedCategory === 'All' && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-8 justify-center">
                <TrendingUp className="w-6 h-6 text-red-500" />
                <h2 className="text-3xl font-playfair font-bold">Trending Legal Topics</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trendingPosts.filter(post => post.id !== featuredPost?.id).slice(0, 3).map((post) => (
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
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Legal Intelligence'}
              {filteredPosts.length > 0 && (
                <span className="text-lg font-normal text-gray-600 ml-2">({filteredPosts.length} articles)</span>
              )}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="mb-6">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-6">No articles found matching your search criteria.</p>
                </div>
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
            <h2 className="text-3xl font-playfair font-bold mb-6">
              UAE Legal Intelligence <span className="text-gold-gradient">Weekly</span>
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 12,000+ legal professionals, C-suite executives, and investors who rely on our expert analysis. 
              Get exclusive insights on UAE legal developments, regulatory changes, and strategic guidance delivered every Monday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold text-black"
              />
              <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight whitespace-nowrap">
                Subscribe Free
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75 mb-4">
              <span>✓ Weekly regulatory updates</span>
              <span>✓ Exclusive case analysis</span>
              <span>✓ Strategic business insights</span>
              <span>✓ Priority access to webinars</span>
            </div>
            <p className="text-xs opacity-60">
              Trusted by leaders at ADNOC, Emirates NBD, Mubadala, DP World, and 500+ major corporations
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
