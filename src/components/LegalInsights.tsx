
import React from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen, Scale, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  expertise?: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
    post.featured 
      ? 'bg-gradient-to-br from-precedential-black to-slate-800 text-white border-2 border-precedential-gold' 
      : 'glass-card bg-white border border-gray-100'
  }`}>
    {post.featured && (
      <div className="absolute top-4 left-4 bg-precedential-gold text-precedential-black text-xs px-3 py-1 rounded-full font-bold z-10">
        FEATURED INSIGHT
      </div>
    )}
    
    <div className="relative h-48 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          post.featured 
            ? 'bg-precedential-gold text-precedential-black' 
            : 'bg-precedential-gold/90 text-white'
        }`}>
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm mb-3 opacity-75">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {post.date}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </div>
      </div>
      
      <h3 className={`text-xl font-playfair font-bold mb-3 line-clamp-2 transition-colors ${
        post.featured ? 'text-white group-hover:text-precedential-gold' : 'text-precedential-black group-hover:text-precedential-gold'
      }`}>
        {post.title}
      </h3>
      
      <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
        post.featured ? 'text-white/90' : 'text-gray-600'
      }`}>
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 opacity-70" />
          <span className="font-medium">{post.author}</span>
          {post.expertise && (
            <>
              <span className="text-xs opacity-50">•</span>
              <span className="text-xs opacity-75">{post.expertise}</span>
            </>
          )}
        </div>
        <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          post.featured 
            ? 'text-precedential-gold hover:text-precedential-goldLight' 
            : 'text-precedential-gold hover:text-precedential-goldDark'
        }`}>
          Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </article>
);

const LegalInsights: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "UAE Commercial Court Procedures: Navigating Complex Business Disputes in 2024",
      excerpt: "Recent amendments to UAE Commercial Court procedures introduce significant changes for businesses engaged in commercial litigation. Our analysis covers new filing requirements, accelerated hearing procedures, and enhanced enforcement mechanisms that affect how commercial disputes are resolved across UAE federal courts.",
      author: "Senior Partner",
      expertise: "Commercial Litigation",
      date: "2024-06-15",
      readTime: "8 min read",
      category: "Commercial Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "2",
      title: "DIFC Wills vs. UAE Sharia Law: Strategic Estate Planning for International Families",
      excerpt: "Understanding the intersection between DIFC Wills jurisdiction and UAE Sharia inheritance principles is crucial for sophisticated estate planning. This comprehensive analysis examines recent DIFC Court decisions and their implications for international families with substantial UAE assets.",
      author: "Family Law Partner",
      expertise: "Estate Planning & Succession",
      date: "2024-06-12",
      readTime: "12 min read",
      category: "Family Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "3",
      title: "Central Bank Digital Currency Regulations: Compliance Framework for UAE Financial Institutions",
      excerpt: "The UAE Central Bank's evolving digital currency regulations present both opportunities and compliance challenges for financial institutions. Our detailed analysis provides practical guidance on regulatory requirements, licensing procedures, and risk management frameworks.",
      author: "Banking Law Partner",
      expertise: "Financial Regulation",
      date: "2024-06-10",
      readTime: "10 min read",
      category: "Banking & Finance",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "4",
      title: "Real Estate Investment Trusts (REITs) in UAE: Legal Framework and Investment Opportunities",
      excerpt: "The introduction of REIT regulations in UAE creates new investment vehicles for real estate portfolios. This analysis examines legal structuring requirements, regulatory compliance obligations, and strategic considerations for sponsors and investors.",
      author: "Real Estate Partner",
      expertise: "Real Estate Investment",
      date: "2024-06-08",
      readTime: "9 min read",
      category: "Real Estate Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "5",
      title: "Cross-Border M&A Transactions: UAE as a Regional Hub for International Acquisitions",
      excerpt: "UAE's strategic position as a gateway to emerging markets makes it an attractive jurisdiction for cross-border transactions. Our analysis covers regulatory frameworks, due diligence considerations, and structuring strategies for complex international acquisitions.",
      author: "Corporate Partner",
      expertise: "Mergers & Acquisitions",
      date: "2024-06-05",
      readTime: "11 min read",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "6",
      title: "Employment Law Updates: New UAE Labour Law Provisions and Their Impact on Business Operations",
      excerpt: "Recent amendments to UAE Labour Law introduce significant changes affecting employment relationships, termination procedures, and workplace rights. Our comprehensive guide helps businesses navigate new compliance requirements and implement best practices.",
      author: "Employment Law Partner",
      expertise: "Employment & Labor",
      date: "2024-06-03",
      readTime: "7 min read",
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-precedential-gold blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-precedential-gold/10 border border-precedential-gold/20">
              <BookOpen className="w-8 h-8 text-precedential-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Distinguished Legal <span className="text-gold-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Authoritative analysis and strategic guidance on evolving UAE legal landscape, 
            providing sophisticated insights that inform business decisions and legal strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="glass-card p-8 rounded-2xl text-center">
          <div className="max-w-2xl mx-auto">
            <Scale className="w-12 h-12 text-precedential-gold mx-auto mb-4" />
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Stay Informed with <span className="text-gold-gradient">Legal Intelligence</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our exclusive legal insights newsletter for sophisticated analysis of UAE legal developments, 
              regulatory updates, and strategic guidance that impacts your business and legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-precedential-gold focus:outline-none"
              />
              <button className="bg-precedential-gold hover:bg-precedential-goldLight text-precedential-black px-6 py-3 rounded-xl font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Join 500+ legal professionals and business leaders who rely on our insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalInsights;
