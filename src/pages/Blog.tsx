
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span className="bg-precedential-gold/10 text-precedential-gold px-2 py-1 rounded">
          {post.category}
        </span>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {post.date}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 hover:text-precedential-gold transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <User className="w-4 h-4" />
          {post.author}
        </div>
        <Button variant="ghost" size="sm" className="text-precedential-gold hover:text-precedential-goldLight">
          Read More <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  </article>
);

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "New UAE Labour Law Changes: What Employers Need to Know",
      excerpt: "Recent amendments to UAE labour law bring significant changes for employers and employees. Understanding these updates is crucial for compliance.",
      author: "Legal Team",
      date: "2024-06-01",
      readTime: "5 min read",
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "2",
      title: "Dubai Real Estate: Understanding Ejari Registration Requirements",
      excerpt: "A comprehensive guide to Ejari registration in Dubai, including requirements, processes, and common pitfalls to avoid.",
      author: "Property Law Team",
      date: "2024-05-28",
      readTime: "7 min read",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "3",
      title: "Will Writing for Expats in UAE: Essential Considerations",
      excerpt: "Key factors expats should consider when drafting wills in the UAE, including DIFC Wills and guardianship arrangements.",
      author: "Family Law Team",
      date: "2024-05-25",
      readTime: "6 min read",
      category: "Family Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Legal Blog & Insights | Dubai Law Updates | Precedential Law</title>
        <meta name="description" content="Stay updated with the latest legal insights, UAE law changes, and expert analysis from Precedential Law's legal team in Dubai." />
        <meta name="keywords" content="Dubai legal blog, UAE law updates, legal insights, law changes, legal advice blog, Dubai legal news" />
        <link rel="canonical" href="https://precedentiallaw.com/blog" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 bg-precedential-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Legal <span className="text-gold-gradient">Insights</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay informed with the latest legal developments, expert analysis, and practical guidance for navigating UAE law.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest legal insights and updates affecting businesses and individuals in Dubai.
            </p>
            <Button size="lg" className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
              Subscribe to Newsletter
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Blog;
