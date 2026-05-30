"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import InternalLinks from "../components/InternalLinks";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  gradient: string;
  imageUrl?: string;
}

const initialPosts: BlogPost[] = [];

function getCategoryIcon(category: string) {
  switch (category) {
    case "STEM & Tech":
      return (
        <svg className="w-12 h-12 text-brand-orange animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "Sports & Health":
      return (
        <svg className="w-12 h-12 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    case "Academic":
      return (
        <svg className="w-12 h-12 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4 1.253" />
        </svg>
      );
    case "Campus Events":
      return (
        <svg className="w-12 h-12 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    default:
      return (
        <svg className="w-12 h-12 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4 1.253" />
        </svg>
      );
  }
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (localStorage.getItem("edugen_admin_token")) {
      setIsAdmin(true);
    }
    
    const loadBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (res.ok) {
          const dbBlogs = await res.json();
          if (dbBlogs && dbBlogs.length > 0) {
            setPosts(dbBlogs);
            localStorage.setItem("edugen_blogs", JSON.stringify(dbBlogs));
            return;
          }
        }
      } catch (err) {
        console.warn("Express backend API offline. Fetching from LocalStorage.");
      }

      // LocalStorage Fallback
      const saved = localStorage.getItem("edugen_blogs");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Automatically purge mock template posts (IDs 1-6) while preserving real published blogs (which use timestamps > 10)
        const clean = parsed.filter((p: BlogPost) => p.id > 6);
        setPosts(clean);
        localStorage.setItem("edugen_blogs", JSON.stringify(clean));
      } else {
        setPosts(initialPosts);
        localStorage.setItem("edugen_blogs", JSON.stringify(initialPosts));
      }
    };

    loadBlogs();
  }, []);

  const categories = ["All", "Academic", "STEM & Tech", "Sports & Health", "Campus Events"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail("");
    }
  };

  if (!mounted) {
    return <div className="bg-white min-h-screen" />;
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-slate-50 py-16 md:py-24 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="flex justify-center items-center gap-3.5 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Insights, Stories & Campus News
            </div>
            <Link
              href="/blog/create"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple hover:bg-slate-900 border border-purple-800 text-[10px] font-black text-white uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              🔐 Admin Portal: Write Blog
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
            The Edugen World Blog
          </h1>
          <p className="text-sm md:text-base text-slate-900 font-light max-w-2xl mx-auto leading-relaxed">
            Stay updated with executive insights, student learning milestones, sports victories, pedagogical trends, and standard-setting updates from Biharsharif's premier institution.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-6">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, news or guides..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent text-sm bg-white shadow-sm transition-all placeholder:text-slate-900 text-slate-800"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-900 hover:text-brand-purple"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      {!searchQuery && selectedCategory === "All" && posts.length > 0 && featuredPost && (
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Featured Read</h2>
            <div className="w-12 h-0.5 bg-brand-orange mt-1 rounded-full" />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-xl bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            
            {/* Visual Container */}
            <div className="lg:col-span-6 min-h-[300px] relative bg-slate-900 flex flex-col items-center justify-center p-8 text-white overflow-hidden">
              {featuredPost.imageUrl ? (
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                  sizes="(max-w-768px) 100vw, 580px"
                  priority
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient || "from-brand-purple to-indigo-950"}`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 z-10" />
              
              <div className="relative z-20 flex flex-col items-center space-y-4">
                {!featuredPost.imageUrl && (
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
                    {getCategoryIcon(featuredPost.category)}
                  </div>
                )}
                <div className="px-3 py-1 rounded-full bg-brand-orange text-[9px] font-black tracking-widest uppercase shadow-md">
                  {featuredPost.category}
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-900 font-bold">
                  <span>{featuredPost.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-brand-purple leading-snug group-hover:text-brand-orange transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-900 font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-brand-purple border border-purple-100 flex items-center justify-center font-black text-sm">
                    {featuredPost.author.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 leading-none">{featuredPost.author.name}</h4>
                    <span className="text-[9px] text-slate-900 font-bold uppercase">{featuredPost.author.role}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-black text-brand-purple group-hover:text-brand-orange transition-colors">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3. CATEGORY FILTERS & ARTICLE GRID */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* Header & Categories */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">All Articles</h2>
              <p className="text-2xl md:text-3xl font-black text-brand-purple">Browse by Category</p>
            </div>
            
            {/* Category Badges */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-brand-purple border-brand-purple text-white shadow-md shadow-brand-purple/20 scale-[1.02]"
                      : "bg-white border-slate-100 hover:border-slate-300 text-slate-600 hover:text-brand-purple"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-slate-150 rounded-3xl space-y-4 max-w-xl mx-auto p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center mx-auto text-2xl">
                ✍️
              </div>
              <h3 className="text-lg font-black text-brand-purple uppercase">No Blogs Published Yet</h3>
              <p className="text-xs text-slate-900 font-light leading-relaxed">
                Edugen World School is preparing its first set of academic articles, district athletics coverage, and tech launch reviews. Connect to our admin dashboard to publish a new post!
              </p>
              <div className="pt-2">
                <Link
                  href="/blog/create"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-purple hover:bg-slate-900 border border-purple-800 text-[11px] font-black text-white uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  🔐 Write First Blog Post
                </Link>
              </div>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Stylized Visual Card Header */}
                    <div className="h-48 relative overflow-hidden flex items-center justify-center bg-slate-900 text-white">
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                          sizes="(max-w-768px) 100vw, 360px"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[9px] font-black tracking-widest uppercase text-white border-white/10">
                          {post.category}
                        </span>
                      </div>
                      {!post.imageUrl && (
                        <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg relative z-20 group-hover:scale-110 transition-transform duration-300">
                          {getCategoryIcon(post.category)}
                        </div>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="p-6.5 space-y-4">
                      <div className="flex items-center gap-3 text-[10px] text-slate-900 font-bold">
                        <span>{post.date}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-base font-extrabold text-brand-purple leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-[11px] text-slate-900 font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Article Footer */}
                  <div className="p-6.5 pt-0 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-50 text-brand-purple border border-slate-100 flex items-center justify-center font-extrabold text-xs">
                        {post.author.initials}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-700 leading-none">{post.author.name}</h4>
                        <span className="text-[8px] text-slate-900 font-bold uppercase">{post.author.role}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[11px] font-black text-brand-purple group-hover:text-brand-orange transition-colors">
                      <span>Read</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-150 rounded-3xl space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto text-slate-900">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-black text-brand-purple">No articles found</h3>
              <p className="text-xs text-slate-900 font-light">We couldn't find any articles matching your search query or selected category.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-full text-xs font-black text-white bg-brand-purple hover:bg-brand-purple-hover transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand-purple text-white p-8 md:p-16 text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(242,106,33,0.15),transparent)] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-black tracking-widest text-brand-orange uppercase">Newsletter Subscription</span>
            <h2 className="text-2xl md:text-4xl font-black">Stay in the Loop</h2>
            <p className="text-xs md:text-sm text-slate-250 font-light leading-relaxed">
              Sign up for our email newsletter and stay up to date with core curriculum revisions, scholarship applications, and district competitions.
            </p>

            {isSubscribed ? (
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 inline-flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
                <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-black">Thank you! You have successfully subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-4">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 rounded-full text-xs bg-white text-slate-800 placeholder:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-black bg-brand-orange hover:bg-brand-orange-hover text-white transition-colors uppercase tracking-wider shrink-0 cursor-pointer shadow-lg shadow-brand-orange/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <InternalLinks currentPage="/blog" />

    </div>
  );
}
