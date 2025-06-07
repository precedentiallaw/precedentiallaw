
import React from 'react';
import { Calendar, Clock, User, TrendingUp, ArrowRight, Download, ExternalLink, Eye, MessageSquare } from 'lucide-react';
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
  views: number;
  comments: number;
  featured?: boolean;
}

const LegalInsightsBlog: React.FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: "1",
      title: "UAE New Company Law 2024: Complete Analysis & Strategic Implications",
      excerpt: "Comprehensive analysis of Federal Decree-Law No. 32 of 2021 amendments and their transformative impact on foreign investment, corporate governance structures, and strategic business operations across the UAE.",
      content: "",
      author: "Senior Legal Research Team",
      date: "2024-12-10",
      readTime: "15 min read",
      category: "Corporate Law",
      tags: ["UAE Company Law", "Corporate Governance", "Business Setup", "Foreign Investment", "Legal Updates"],
      trending: true,
      downloadable: true,
      views: 12840,
      comments: 47,
      featured: true
    },
    {
      id: "2",
      title: "Dubai Golden Visa 2024: Strategic Legal Framework & Optimization Strategies",
      excerpt: "Expert analysis of the expanded Golden Visa categories, strategic application approaches, and legal optimization techniques for investors, entrepreneurs, and professionals seeking long-term UAE residency.",
      content: "",
      author: "Immigration Law Specialists",
      date: "2024-12-08",
      readTime: "12 min read",
      category: "Immigration Law",
      tags: ["Golden Visa", "UAE Residency", "Investment Visa", "Real Estate Investment", "Long-term Visa"],
      trending: true,
      views: 18950,
      comments: 62,
      featured: true
    },
    {
      id: "3",
      title: "UAE Corporate Tax 2024: Advanced Compliance & Strategic Planning Framework",
      excerpt: "Strategic analysis of Corporate Tax implications following Federal Decree-Law No. 47 of 2022, covering advanced compliance strategies, international structuring, and tax optimization within legal boundaries.",
      content: "",
      author: "Tax Law Advisory Board",
      date: "2024-12-05",
      readTime: "18 min read",
      category: "Tax Law",
      tags: ["Corporate Tax", "Tax Compliance", "UAE Tax Law", "International Tax", "Business Strategy"],
      trending: true,
      downloadable: true,
      views: 9340,
      comments: 34,
      featured: true
    },
    {
      id: "4",
      title: "DIFC Courts vs UAE Mainland Courts: Strategic Jurisdiction Analysis 2024",
      excerpt: "Comparative analysis of DIFC Courts and UAE Mainland judicial systems, covering jurisdictional advantages, procedural differences, and strategic considerations for international businesses and complex commercial disputes.",
      content: "",
      author: "Commercial Litigation Team",
      date: "2024-12-03",
      readTime: "14 min read",
      category: "Commercial Litigation",
      tags: ["DIFC Courts", "UAE Courts", "Commercial Litigation", "Jurisdiction", "International Business"],
      trending: false,
      views: 7650,
      comments: 28,
      featured: true
    },
    {
      id: "5",
      title: "Expat Family Law UAE: Advanced Cross-Border Legal Strategies",
      excerpt: "Comprehensive analysis of cross-border family law issues for expatriates, covering jurisdictional complexities, asset protection strategies, and international enforcement of family court decisions.",
      content: "",
      author: "International Family Law Team",
      date: "2024-12-01",
      readTime: "16 min read",
      category: "Family Law",
      tags: ["Expat Divorce", "Cross-border Family Law", "International Jurisdiction", "Asset Protection"],
      trending: false,
      downloadable: true,
      views: 6780,
      comments: 41,
      featured: false
    },
    {
      id: "6",
      title: "UAE Real Estate Legal Framework 2024: Investment Protection Strategies",
      excerpt: "In-depth analysis of UAE real estate regulations, investor protection mechanisms, RERA updates, and strategic approaches to property investment legal compliance and dispute prevention.",
      content: "",
      author: "Real Estate Legal Specialists",
      date: "2024-11-28",
      readTime: "11 min read",
      category: "Real Estate Law",
      tags: ["Real Estate Investment", "RERA Regulations", "Property Law Dubai", "Investment Protection"],
      trending: false,
      views: 5920,
      comments: 19,
      featured: false
    },
    {
      id: "7",
      title: "UAE Employment Law Updates 2024: Strategic HR Compliance Framework",
      excerpt: "Latest developments in UAE Labour Law, strategic HR compliance approaches, termination procedures, and emerging employment law trends affecting multinational corporations.",
      content: "",
      author: "Employment Law Advisory",
      date: "2024-11-25",
      readTime: "13 min read",
      category: "Employment Law",
      tags: ["UAE Labour Law", "HR Compliance", "Employment Contracts", "Termination Procedures"],
      trending: false,
      views: 4830,
      comments: 15,
      featured: false
    },
    {
      id: "8",
      title: "Commercial Arbitration in UAE: Advanced Dispute Resolution Strategies",
      excerpt: "Strategic analysis of arbitration mechanisms in UAE, covering DIAC procedures, international arbitration trends, and enforcement strategies for complex commercial disputes.",
      content: "",
      author: "Arbitration Specialists",
      date: "2024-11-22",
      readTime: "17 min read",
      category: "Alternative Dispute Resolution",
      tags: ["Commercial Arbitration", "DIAC", "Dispute Resolution", "International Arbitration"],
      trending: false,
      views: 3940,
      comments: 22,
      featured: false
    }
  ];

  const categories = ["All", "Corporate Law", "Immigration Law", "Family Law", "Real Estate Law", "Tax Law", "Employment Law", "Commercial Litigation", "Alternative Dispute Resolution"];

  const weeklyUpdates = [
    {
      week: "Week of December 9, 2024",
      updates: [
        "New ADGM regulations on financial services licensing",
        "UAE Central Bank updates on cryptocurrency regulations",
        "Dubai Municipality real estate registration changes",
        "Federal Supreme Court landmark commercial law decision"
      ]
    },
    {
      week: "Week of December 2, 2024",
      updates: [
        "Corporate Tax filing deadline extensions announced",
        "New visa categories for skilled professionals",
        "DIFC Courts procedural rule amendments",
        "Labour Law updates on remote work regulations"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Legal <span className="text-gold-gradient">Insights</span> & Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Authoritative analysis of UAE legal developments, strategic insights, and expert commentary 
            from Dubai's leading legal consultancy. Stay ahead with our comprehensive legal intelligence.
          </p>
        </div>

        {/* Weekly Legal Updates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Weekly Legal Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyUpdates.map((week, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl">
                <h4 className="font-bold mb-4 text-precedential-gold">{week.week}</h4>
                <ul className="space-y-2">
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
              className={`glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                post.featured ? 'border-2 border-precedential-gold/30' : ''
              }`}
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-precedential-gold/10 text-precedential-gold px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {post.featured && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                    {post.trending && (
                      <div className="flex items-center gap-1 text-red-500">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-medium">Trending</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-precedential-gold transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

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
                </div>

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
                    <span className="text-xs">{post.author}</span>
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
        <div className="glass-card p-8 rounded-2xl text-center border-2 border-precedential-gold/20">
          <h3 className="text-3xl font-playfair font-bold mb-4">
            UAE Legal Intelligence Weekly
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 8,500+ legal professionals, business leaders, and investors who rely on our expert analysis 
            of UAE legal developments. Get exclusive insights, case law updates, and strategic guidance delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your professional email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-precedential-gold"
            />
            <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <span>✓ Weekly legal updates</span>
            <span>✓ Exclusive case analysis</span>
            <span>✓ Strategic insights</span>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Join industry leaders from ADNOC, Emirates NBD, Mubadala, and 200+ major corporations
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalInsightsBlog;
