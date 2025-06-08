
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowRight, AlertTriangle, TrendingUp } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  urgency: 'High' | 'Medium' | 'Critical';
  keywords: string[];
  publishDate: string;
}

const ExpatBlogContent: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "UAE Travel Ban: Complete Guide for Expats - 2024 Updates",
      excerpt: "Everything you need to know about travel bans in UAE, how to check your status, and legal steps to get them lifted.",
      category: "Immigration Crisis",
      readTime: "8 min",
      urgency: "Critical",
      keywords: ["travel ban UAE", "expat travel restrictions", "UAE immigration"],
      publishDate: "2024-01-15"
    },
    {
      title: "Cheque Bounce Cases UAE: New Laws & Defense Strategies",
      excerpt: "Updated guide on UAE's new bounced cheque laws, criminal vs civil liability, and proven defense strategies.",
      category: "Criminal Defense",
      readTime: "12 min", 
      urgency: "High",
      keywords: ["cheque bounce UAE", "bounced cheque law", "criminal defense Dubai"],
      publishDate: "2024-01-10"
    },
    {
      title: "Wrongful Termination in UAE: Know Your Rights as an Expat",
      excerpt: "Complete guide to UAE labor law, wrongful termination claims, and how to recover compensation.",
      category: "Employment Law",
      readTime: "10 min",
      urgency: "High", 
      keywords: ["wrongful termination UAE", "labor law Dubai", "employment rights expats"],
      publishDate: "2024-01-08"
    },
    {
      title: "Dubai Divorce for Expats: Step-by-Step Legal Process",
      excerpt: "Navigate divorce proceedings in Dubai as an expat, including custody, asset division, and visa implications.",
      category: "Family Law",
      readTime: "15 min",
      urgency: "High",
      keywords: ["Dubai divorce expats", "family law UAE", "expat divorce process"],
      publishDate: "2024-01-05"
    },
    {
      title: "UAE Drug Laws: What Every Expat Must Know to Stay Safe",
      excerpt: "Comprehensive guide to UAE's strict drug laws, penalties, and what to do if arrested on drug-related charges.",
      category: "Criminal Law",
      readTime: "9 min",
      urgency: "Critical",
      keywords: ["UAE drug laws", "drug charges Dubai", "expat legal safety"],
      publishDate: "2024-01-03"
    },
    {
      title: "Dubai Rental Disputes: Tenant Rights & RERA Procedures",
      excerpt: "Protect yourself as a tenant in Dubai. Understanding RERA procedures, security deposits, and rental disputes.",
      category: "Real Estate",
      readTime: "11 min",
      urgency: "Medium",
      keywords: ["Dubai rental disputes", "tenant rights UAE", "RERA procedures"],
      publishDate: "2024-01-01"
    },
    {
      title: "UAE Road Accident Claims: Insurance vs Legal Action",
      excerpt: "What to do after a car accident in UAE, dealing with insurance companies, and when to take legal action.",
      category: "Personal Injury",
      readTime: "7 min",
      urgency: "Medium",
      keywords: ["UAE car accident", "road accident claims", "Dubai traffic law"],
      publishDate: "2023-12-28"
    },
    {
      title: "Getting Bail in UAE: Emergency Guide for Families",
      excerpt: "Step-by-step guide for getting bail for detained family members, required documents, and legal procedures.",
      category: "Criminal Defense",
      readTime: "13 min",
      urgency: "Critical",
      keywords: ["UAE bail application", "detention Dubai", "criminal defense emergency"],
      publishDate: "2023-12-25"
    },
    {
      title: "Employment Contract Review: Red Flags Expats Must Avoid",
      excerpt: "Essential checklist for reviewing employment contracts in UAE, common pitfalls, and negotiation tips.",
      category: "Employment Law",
      readTime: "8 min",
      urgency: "Medium",
      keywords: ["UAE employment contract", "expat job contract", "labor law Dubai"],
      publishDate: "2023-12-22"
    },
    {
      title: "DIFC Wills vs UAE Wills: Which is Right for Expats?",
      excerpt: "Comprehensive comparison of DIFC and UAE wills for expatriates, benefits, costs, and procedures.",
      category: "Estate Planning",
      readTime: "10 min",
      urgency: "Medium",
      keywords: ["DIFC wills", "UAE inheritance law", "expat estate planning"],
      publishDate: "2023-12-20"
    },
    {
      title: "UAE Cybercrime Laws: Protecting Yourself from False Accusations",
      excerpt: "Understanding UAE's cybercrime laws, social media risks, and defending against false online allegations.",
      category: "Criminal Law", 
      readTime: "9 min",
      urgency: "High",
      keywords: ["UAE cybercrime", "social media law Dubai", "online defamation"],
      publishDate: "2023-12-18"
    },
    {
      title: "Child Custody Battles in UAE: Expat Parent's Guide",
      excerpt: "Navigate child custody disputes in UAE courts, international custody issues, and parental rights.",
      category: "Family Law",
      readTime: "14 min",
      urgency: "High",
      keywords: ["child custody UAE", "expat parent rights", "international custody"],
      publishDate: "2023-12-15"
    },
    {
      title: "UAE Consumer Protection: Fighting Unfair Business Practices",
      excerpt: "Your rights as a consumer in UAE, filing complaints, and legal remedies for unfair practices.",
      category: "Consumer Law",
      readTime: "6 min",
      urgency: "Medium",
      keywords: ["UAE consumer rights", "consumer protection Dubai", "business disputes"],
      publishDate: "2023-12-12"
    },
    {
      title: "Domestic Violence in UAE: Legal Protection for Expat Victims",
      excerpt: "Legal protections available for domestic violence victims, emergency procedures, and support resources.",
      category: "Family Law",
      readTime: "11 min", 
      urgency: "Critical",
      keywords: ["domestic violence UAE", "victim protection Dubai", "family safety laws"],
      publishDate: "2023-12-10"
    },
    {
      title: "UAE Business Partnership Disputes: Prevention & Resolution",
      excerpt: "Common partnership disputes in UAE, preventive measures, and legal resolution strategies.",
      category: "Business Law",
      readTime: "12 min",
      urgency: "Medium",
      keywords: ["UAE partnership disputes", "business litigation Dubai", "commercial law"],
      publishDate: "2023-12-08"
    },
    {
      title: "Golden Visa UAE: Complete Application Guide for 2024",
      excerpt: "Updated requirements, application process, and benefits of UAE Golden Visa for long-term residency.",
      category: "Immigration",
      readTime: "16 min",
      urgency: "Medium",
      keywords: ["UAE Golden Visa", "long term residence", "UAE immigration"],
      publishDate: "2023-12-05"
    },
    {
      title: "UAE Inheritance Law: Protecting Your Family's Future",
      excerpt: "Understanding Sharia inheritance law in UAE, exemptions for non-Muslims, and estate protection strategies.",
      category: "Estate Planning",
      readTime: "13 min",
      urgency: "Medium",
      keywords: ["UAE inheritance law", "Sharia law inheritance", "estate planning Dubai"],
      publishDate: "2023-12-03"
    },
    {
      title: "Medical Malpractice in UAE: Patient Rights & Legal Remedies",
      excerpt: "Understanding medical malpractice laws in UAE, patient rights, and how to pursue compensation claims.",
      category: "Medical Law",
      readTime: "10 min",
      urgency: "Medium",
      keywords: ["medical malpractice UAE", "patient rights Dubai", "healthcare law"],
      publishDate: "2023-12-01"
    },
    {
      title: "UAE Debt Collection: Protecting Yourself from Aggressive Tactics",
      excerpt: "Your rights when dealing with debt collectors in UAE, illegal practices, and legal protections.",
      category: "Financial Law",
      readTime: "8 min",
      urgency: "High",
      keywords: ["UAE debt collection", "debtor rights", "financial disputes Dubai"],
      publishDate: "2023-11-28"
    },
    {
      title: "School Legal Issues in UAE: Expat Parent's Rights",
      excerpt: "Dealing with school disputes, discrimination, fees issues, and educational rights in UAE.",
      category: "Education Law",
      readTime: "9 min",
      urgency: "Medium",
      keywords: ["UAE school disputes", "education rights expats", "school legal issues"],
      publishDate: "2023-11-25"
    },
    {
      title: "UAE Banking Disputes: Fighting Unfair Charges & Practices",
      excerpt: "Common banking disputes in UAE, consumer protection, and legal remedies against unfair practices.",
      category: "Banking Law",
      readTime: "7 min",
      urgency: "Medium",
      keywords: ["UAE banking disputes", "bank charges", "financial consumer rights"],
      publishDate: "2023-11-22"
    },
    {
      title: "Workplace Harassment in UAE: Legal Protection & Remedies",
      excerpt: "Understanding workplace harassment laws in UAE, reporting procedures, and legal protections for victims.",
      category: "Employment Law",
      readTime: "11 min",
      urgency: "High",
      keywords: ["workplace harassment UAE", "employment protection", "worker rights Dubai"],
      publishDate: "2023-11-20"
    },
    {
      title: "UAE Property Investment Scams: Red Flags & Legal Protection",
      excerpt: "Identifying property investment scams in UAE, legal protections, and recovery options for victims.",
      category: "Real Estate Fraud",
      readTime: "12 min",
      urgency: "High",
      keywords: ["UAE property scams", "real estate fraud", "investment protection"],
      publishDate: "2023-11-18"
    },
    {
      title: "Police Investigation Rights in UAE: What Expats Must Know",
      excerpt: "Your rights during police investigations in UAE, questioning procedures, and when to demand a lawyer.",
      category: "Criminal Rights",
      readTime: "10 min",
      urgency: "Critical",
      keywords: ["UAE police rights", "criminal investigation", "legal rights Dubai"],
      publishDate: "2023-11-15"
    },
    {
      title: "UAE Visa Overstay: Consequences & Legal Solutions",
      excerpt: "Understanding visa overstay penalties in UAE, amnesty programs, and legal ways to regularize status.",
      category: "Immigration",
      readTime: "9 min",
      urgency: "High",
      keywords: ["UAE visa overstay", "immigration violations", "visa amnesty"],
      publishDate: "2023-11-12"
    },
    {
      title: "Cross-Border Child Abduction: UAE Hague Convention Guide",
      excerpt: "Legal procedures for international child abduction cases involving UAE and Hague Convention countries.",
      category: "International Family Law",
      readTime: "15 min",
      urgency: "Critical",
      keywords: ["child abduction UAE", "Hague Convention", "international custody"],
      publishDate: "2023-11-10"
    },
    {
      title: "UAE Defamation Laws: Social Media & Online Speech Risks",
      excerpt: "Understanding defamation laws in UAE, social media risks, and protecting yourself from false accusations.",
      category: "Media Law",
      readTime: "8 min",
      urgency: "High",
      keywords: ["UAE defamation law", "social media legal risks", "online speech"],
      publishDate: "2023-11-08"
    },
    {
      title: "UAE Corporate Tax 2024: Impact on Expat Business Owners",
      excerpt: "New UAE corporate tax implications for expat entrepreneurs, compliance requirements, and planning strategies.",
      category: "Tax Law",
      readTime: "14 min",
      urgency: "High",
      keywords: ["UAE corporate tax", "expat business tax", "tax compliance"],
      publishDate: "2023-11-05"
    },
    {
      title: "Emergency Medical Treatment Rights in UAE Hospitals",
      excerpt: "Your rights to emergency medical care in UAE, insurance disputes, and legal protections for patients.",
      category: "Healthcare Law",
      readTime: "7 min",
      urgency: "Medium",
      keywords: ["UAE medical rights", "emergency treatment", "healthcare law"],
      publishDate: "2023-11-03"
    },
    {
      title: "UAE Arbitration vs Court Litigation: Choosing the Right Path",
      excerpt: "When to choose arbitration over court litigation in UAE, advantages, costs, and procedure differences.",
      category: "Dispute Resolution",
      readTime: "11 min",
      urgency: "Medium",
      keywords: ["UAE arbitration", "commercial litigation", "dispute resolution"],
      publishDate: "2023-11-01"
    },
    {
      title: "Expat Business Closure in UAE: Legal Requirements & Pitfalls",
      excerpt: "Step-by-step guide to legally closing a business in UAE, avoiding penalties, and protecting personal assets.",
      category: "Business Law",
      readTime: "13 min",
      urgency: "Medium",
      keywords: ["UAE business closure", "company liquidation", "business exit strategy"],
      publishDate: "2023-10-30"
    },
    {
      title: "UAE Power of Attorney: Essential Guide for Expats",
      excerpt: "When and how to create valid power of attorney documents in UAE, types, and legal requirements.",
      category: "Legal Documents",
      readTime: "9 min",
      urgency: "Medium",
      keywords: ["UAE power of attorney", "legal documents", "POA requirements"],
      publishDate: "2023-10-28"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <section className="py-16 bg-gray-50" id="expat-blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Essential Legal Guides for <span className="text-gold-gradient">UAE Expats</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed and protected with our comprehensive legal guides covering every aspect of expat life in the UAE.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="outline" className="bg-precedential-gold text-precedential-black border-precedential-gold">
            All Posts
          </Button>
          {categories.slice(0, 6).map((category) => (
            <Button key={category} variant="outline" className="hover:bg-precedential-gold hover:text-precedential-black">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Critical Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Critical Legal Updates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => post.urgency === 'Critical').slice(0, 3).map((post, index) => (
              <div key={post.title} className="bg-white rounded-xl shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyColor(post.urgency)}`}>
                      {post.urgency} Priority
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-precedential-gold font-medium">{post.category}</span>
                    <Button size="sm" variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                      Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(3).map((post, index) => (
            <article key={post.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyColor(post.urgency)}`}>
                    {post.urgency}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-precedential-gold cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 2).map((keyword) => (
                    <span key={keyword} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <User className="w-3 h-3 inline mr-1" />
                    {post.publishDate}
                  </div>
                  <Button size="sm" variant="outline" className="border-precedential-gold text-precedential-gold hover:bg-precedential-gold hover:text-precedential-black">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-precedential-black text-white p-8 rounded-xl text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-precedential-gold" />
          <h3 className="text-2xl font-bold mb-4">Stay Updated on UAE Legal Changes</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Get weekly legal updates, emergency alerts, and exclusive guides delivered to your inbox. 
            Be the first to know about law changes that affect expats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Subscribe Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpatBlogContent;
