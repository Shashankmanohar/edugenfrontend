"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CreateBlogPost() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Form State
  const [title, setTitle] = useState("Thinking About Remote Legal Transcription Jobs?...");
  const [permalink, setPermalink] = useState("webflora.com/blogs/");
  const [descriptionTab, setDescriptionTab] = useState<"visual" | "source">("visual");
  const [content, setContent] = useState("");
  
  // Right sidebar details
  const [category, setCategory] = useState("General");
  const [authorName, setAuthorName] = useState("");
  const [authorRole, setAuthorRole] = useState("Principal Director");
  const [tags, setTags] = useState("");
  const [datePosted, setDatePosted] = useState("2026-05-28");
  
  // Featured Image
  const [imageUrl, setImageUrl] = useState("");

  // SEO details
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [metaExtra, setMetaExtra] = useState("");

  // State feedback
  const [isPublishing, setIsPublishing] = useState(false);
  const [notification, setNotification] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setNotification("Uploading image to server...");

    const formData = new FormData();
    formData.append("image", file);

    const token = localStorage.getItem("edugen_admin_token") || "";

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/blogs/upload`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.imageUrl);
        setNotification("Image uploaded successfully!");
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      console.warn("Backend uploader offline. Simulating local image attachment.");
      // Create a temporary object URL to show immediate feedback!
      const localUrl = URL.createObjectURL(file);
      setImageUrl(localUrl);
      setNotification("Attached local photo preview.");
    } finally {
      setUploadingImage(false);
      setTimeout(() => setNotification(""), 2000);
    }
  };

  useEffect(() => {
    setMounted(true);
    
    const token = localStorage.getItem("edugen_admin_token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    // Autofill date posted with current local date
    const today = new Date().toISOString().split("T")[0];
    setDatePosted(today);
  }, [router]);

  if (!mounted) {
    return <div className="bg-slate-50 min-h-screen text-slate-900" />;
  }

  // Handle Publishing
  const handlePublish = async (e: React.FormEvent, status: "draft" | "published") => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a post title.");
      return;
    }

    setIsPublishing(true);
    setNotification("Publishing your article...");

    const savedBlogs = localStorage.getItem("edugen_blogs");
    let currentBlogs = [];
    if (savedBlogs) {
      currentBlogs = JSON.parse(savedBlogs);
    }

    const getInitials = (name: string) => {
      if (!name) return "AD";
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };

    const newPost = {
      id: Date.now(),
      title: title,
      excerpt: content ? content.slice(0, 160) + "..." : "No description provided.",
      category: category,
      date: new Date(datePosted).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: "4 min read",
      author: {
        name: authorName || "Admin Coordinator",
        role: authorRole,
        initials: getInitials(authorName),
      },
      gradient: "from-zinc-900 via-zinc-800 to-zinc-950",
      imageUrl: imageUrl || "/smart board.jpeg", // Default fallback to a beautiful real school asset
      tags: tags.split(",").map((t) => t.trim()),
      seoTitle: seoTitle,
      seoDescription: seoDescription,
      seoKeywords: seoKeywords,
      metaExtra: metaExtra,
      status: status,
    };

    // Try publishing to Backend API
    try {
      const token = localStorage.getItem("edugen_admin_token") || "";
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newPost),
      });
      
      if (response.ok) {
        console.log("Uploaded successfully to Express backend API!");
      } else {
        throw new Error("Backend server responded with error");
      }
    } catch (err) {
      console.warn("Express backend API offline. Falling back to browser LocalStorage database.");
    }

    // Always update LocalStorage to guarantee instant frontend sync
    currentBlogs = [newPost, ...currentBlogs];
    localStorage.setItem("edugen_blogs", JSON.stringify(currentBlogs));

    setNotification("Article successfully published! Redirecting...");

    setTimeout(() => {
      setIsPublishing(false);
      router.push("/blog");
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-24 selection:bg-orange-500/20 selection:text-orange-500">
      
      {/* Dynamic Toast Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 px-6 py-3.5 bg-orange-600 border border-orange-500 text-white rounded-xl shadow-2xl animate-in slide-in-from-top-4 duration-300 font-bold text-xs">
          {notification}
        </div>
      )}

      {/* Main Header Area */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-purple hover:border-slate-300 active:scale-95 transition-all"
            aria-label="Go back to Blog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Create New Blog Post</h1>
            <p className="text-xs text-slate-500 font-light">Design and publish your latest thoughts.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={(e) => handlePublish(e, "draft")}
            disabled={isPublishing}
            className="px-6 py-2.5 rounded-lg text-xs font-black bg-transparent hover:bg-white border border-slate-200 text-slate-700 hover:text-brand-purple transition-colors cursor-pointer"
          >
            SAVE TO DRAFT
          </button>
          <button
            onClick={(e) => handlePublish(e, "published")}
            disabled={isPublishing}
            className="px-6 py-2.5 rounded-lg text-xs font-black bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 active:scale-95 transition-all cursor-pointer"
          >
            PUBLISH NOW
          </button>
        </div>
      </header>

      {/* Two Column Grid */}
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side Elements (Title, Description, SEO) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Post Title & Permalink Card */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">POST TITLE</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title here..."
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm text-slate-900 font-bold placeholder-slate-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">PERMALINK</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium">
                  edugen.in/blog/
                </span>
                <input
                  type="text"
                  value={permalink}
                  onChange={(e) => setPermalink(e.target.value)}
                  placeholder="permalink-slug"
                  className="flex-1 min-w-0 w-full px-4 py-3 bg-white border border-slate-200 rounded-r-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-700 placeholder-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Description Block */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg className="w-4.5 h-4.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">DESCRIPTION</span>
              </div>

              {/* Editor Tabs */}
              <div className="flex p-0.5 rounded-lg bg-slate-50 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setDescriptionTab("visual")}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-extrabold uppercase transition-all ${
                    descriptionTab === "visual"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Visual Editor
                </button>
                <button
                  type="button"
                  onClick={() => setDescriptionTab("source")}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-extrabold uppercase transition-all ${
                    descriptionTab === "source"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Source Code
                </button>
              </div>
            </div>

            {/* Description Text Area */}
            <div className="relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                placeholder="Write your blog content here or paste HTML..."
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-800 placeholder-slate-400 resize-none font-mono leading-relaxed"
              />
            </div>
          </div>

          {/* SEO Meta Details Card */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-orange-650/15 border border-orange-600/30 flex items-center justify-center text-xs font-black text-orange-500">
                🌐
              </span>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">SEO Meta Details</h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">SEO TITLE</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Search engine optimized title..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 placeholder-slate-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">SEO DESCRIPTION</label>
                <textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  rows={3}
                  placeholder="A brief summary for search results..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 placeholder-slate-400 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">SEO KEYWORDS</label>
                  <input
                    type="text"
                    value={seoKeywords}
                    onChange={(e) => setSeoKeywords(e.target.value)}
                    placeholder="legal, transcription, ai..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 placeholder-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">META EXTRA HEAD</label>
                  <input
                    type="text"
                    value={metaExtra}
                    onChange={(e) => setMetaExtra(e.target.value)}
                    placeholder="<meta name='robots' ... />"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 placeholder-slate-400 font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side Settings (Category, Author, Image) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Metadata Card */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 space-y-6">
            
            {/* Category selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 font-bold"
              >
                <option>General</option>
                <option>Academic</option>
                <option>STEM & Tech</option>
                <option>Sports & Health</option>
                <option>Campus Events</option>
              </select>
            </div>

            {/* Author Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">AUTHOR NAME</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="e.g., John Doe"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Author Role */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">AUTHOR ROLE</label>
              <select
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 font-bold"
              >
                <option>Principal Director</option>
                <option>Vice Principal</option>
                <option>Academic Dean</option>
                <option>STEM Lead</option>
                <option>Senior Faculty Member</option>
              </select>
            </div>

            {/* Tags Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">TAGS (COMMA SEPARATED)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g., Education, News..."
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">DATE POSTED</label>
              <input
                type="date"
                value={datePosted}
                onChange={(e) => setDatePosted(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 font-bold"
              />
            </div>
          </div>

          {/* Featured Image Card */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 space-y-6">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-black">Featured Image</label>
            
            {/* Interactive File Input & Preview Container */}
            <label htmlFor="image-file-upload" className="block cursor-pointer">
              <input 
                id="image-file-upload" 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                disabled={uploadingImage}
                className="hidden" 
              />
              
              <div className="w-full h-40 rounded-xl border border-dashed border-slate-200 bg-slate-50 hover:bg-white flex flex-col items-center justify-center gap-3 group transition-colors overflow-hidden relative">
                {uploadingImage ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase animate-pulse">
                      Uploading to cloud...
                    </span>
                  </div>
                ) : imageUrl ? (
                  <div className="relative w-full h-full bg-slate-950 group">
                    <Image
                      src={imageUrl}
                      alt="Featured image preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-black text-white bg-orange-600 px-3 py-1.5 rounded-lg shadow-lg tracking-widest uppercase">
                        Change Image
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-brand-purple transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-700 transition-colors uppercase tracking-wider">
                      Upload high-res image
                    </span>
                  </>
                )}
              </div>
            </label>

            <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">— OR —</div>

            {/* Direct Image URL link */}
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">FEATURED IMAGE URL</label>
              <select
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs text-slate-900 font-bold"
              >
                <option value="">Select pre-loaded campus photo...</option>
                <option value="/library.jpeg">Library Room Photo</option>
                <option value="/sports.png">Sports & Athletics Photo</option>
                <option value="/sciencelab.jpeg">Robotics & Science Lab Photo</option>
                <option value="/computerlab.jpeg">Digital Computer Lab Photo</option>
                <option value="/smart board.jpeg">Smart Classroom Board Photo</option>
                <option value="/Dance.jpeg">Theater & Performing Arts Photo</option>
                <option value="/plantation.jpeg">Green Plantation Drive Photo</option>
                <option value="/independence day.jpeg">Independence Day Assembly Photo</option>
              </select>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
