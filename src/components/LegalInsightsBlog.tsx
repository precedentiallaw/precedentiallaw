
import React from 'react';
import { Calendar, Clock, User, TrendingUp, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  trending: boolean;
  downloadable?: boolean;
}

const LegalInsightsBlog: React.FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: "1",
      title: "UAE New Company Law 2024: Complete Guide for Business Owners",
      excerpt: "Comprehensive analysis of the Federal Decree-Law No. 32 of 2021 amendments and their impact on foreign investment, corporate governance, and business operations in the UAE.",
      content: "",
      author: "Legal Research Team",
      date: "2024-06-05",
      readTime: "12 min read",
      category: "Corporate Law",
      tags: ["UAE Company Law", "Corporate Governance", "Business Setup", "Foreign Investment"],
      trending: true,
      downloadable: true
    },
    {
      id: "2",
      title: "Dubai Golden Visa Legal Requirements: Expert Analysis for 2024",
      excerpt: "Navigate the complex legal landscape of UAE Golden Visa applications. Expert insights on investor categories, real estate requirements, and documentation strategies.",
      content: "",
      author: "Immigration Law Team",
      date: "2024-06-03",
      readTime: "8 min read",
      category: "Immigration Law",
      tags: ["Golden Visa", "UAE Residency", "Investment Visa", "Real Estate Investment"],
      trending: true
    },
    {
      id: "3",
      title: "UAE Corporate Tax Compliance 2024: Strategic Planning Guide",
      excerpt: "Essential strategies for UAE Corporate Tax compliance following Federal Decree-Law No. 47 of 2022. Minimize tax liability while ensuring full regulatory compliance.",
      content: "",
      author: "Tax Law Specialists",
      date: "2024-06-01",
      readTime: "15 min read",
      category: "Tax Law",
      tags: ["Corporate Tax", "Tax Compliance", "UAE Tax Law", "Business Strategy"],
      trending: true,
      downloadable: true
    },
    {
      id: "4",
      title: "Expat Divorce in Dubai: Complete Legal Framework Analysis",
      excerpt: "Comprehensive guide to divorce proceedings for expatriates under Federal Decree-Law No. 41 of 2022. Asset division, child custody, and jurisdictional considerations.",
      content: "",
      author: "Family Law Team",
      date: "2024-05-30",
      readTime: "10 min read",
      category: "Family Law",
      tags: ["Expat Divorce", "Family Law UAE", "Child Custody", "Asset Division"],
      trending: false
    },
    {
      id: "5",
      title: "DIFC Wills vs UAE Mainland Wills: Strategic Comparison 2024",
      excerpt: "Detailed analysis of will registration options for non-Muslims in the UAE. DIFC Courts jurisdiction versus mainland probate procedures and their implications.",
      content: "",
      author: "Estate Planning Team",
      date: "2024-05-28",
      readTime: "7 min read",
      category: "Estate Planning",
      tags: ["DIFC Wills", "Estate Planning", "Probate Law", "Expat Legal Planning"],
      trending: false,
      downloadable: true
    },
    {
      id: "6",
      title: "UAE Real Estate Investment Laws: Legal Due Diligence Guide",
      excerpt: "Navigate Dubai's property investment landscape with expert legal insights. From off-plan purchases to rental regulations and dispute resolution mechanisms.",
      content: "",
      author: "Real Estate Law Team",
      date: "2024-05-25",
      readTime: "9 min read",
      category: "Real Estate Law",
      tags: ["Real Estate Investment", "Property Law Dubai", "Due Diligence", "RERA Regulations"],
      trending: false
    }
  ];

  const categories = ["All", "Corporate Law", "Immigration Law", "Family Law", "Real Estate Law", "Tax Law", "Estate Planning"];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Legal <span className="text-gold-gradient">Insights</span> & Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert analysis of UAE legal developments, regulatory changes, and strategic insights 
            from Dubai's premier legal consultancy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <article 
              key={post.id}
              className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  {post.trending && (
                    <div className="flex items-center gap-1 text-red-500">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-precedential-gold transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Footer */}
              <div className="px-6 py-4 bg-gray-50/50 border-t">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    {post.downloadable && (
                      <Button variant="ghost" size="sm" className="text-precedential-gold hover:text-precedential-goldLight">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="text-precedential-gold hover:text-precedential-goldLight">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="glass-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">
            UAE Legal Updates Weekly
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get expert analysis of the latest UAE legal developments delivered to your inbox. 
            Stay informed about regulatory changes, court decisions, and strategic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold"
            />
            <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Join 5,000+ legal professionals and business leaders
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalInsightsBlog;
