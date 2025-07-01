
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ModernNavBar from '@/components/ModernNavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, Filter } from 'lucide-react';
import { comprehensiveBlogPosts, type BlogPost } from '@/components/BlogContentData';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="card-clean overflow-hidden group hover:-translate-y-1">
    <div className="relative">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {post.trending && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </span>
        )}
        {post.featured && (
          <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Category */}
      <div className="absolute bottom-4 left-4">
        <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
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
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          {post.author}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>
      
      {/* Read More */}
      <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto font-medium">
        Read Article <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  </article>
);

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Family Law', 'Business Law', 'Immigration', 'Real Estate', 'UAE Legal Updates'];

  const filteredPosts = comprehensiveBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = comprehensiveBlogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Insights & UAE Law Updates | Precedential Law Blog</title>
        <meta name="description" content="Stay informed with expert legal insights, UAE law updates, and practical advice from Precedential Law's experienced legal team." />
        <meta name="keywords" content="UAE legal blog, legal insights UAE, law updates Dubai, legal advice blog" />
        <link rel="canonical" href="https://precedentiallaw.com/blog" />
      </Helmet>
      
      <ModernNavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                Legal <span className="text-emerald-600">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Stay informed with expert legal insights, UAE law updates, and practical advice from our experienced legal team.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-gray-100">
          <div className="container-custom">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                <Filter className="w-4 h-4 text-gray-500 ml-2" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {selectedCategory === 'All' && featuredPosts.length > 0 && (
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
                <p className="text-gray-600">Our most popular and important legal insights</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="section-padding bg-section">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stay Updated with Legal Insights
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Subscribe to our newsletter for the latest UAE law updates and legal advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <Button className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Blog;
