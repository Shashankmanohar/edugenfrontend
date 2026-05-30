"use client";

import { useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import InternalLinks from "./components/InternalLinks";
import Footer from "./components/Footer";
import GlobalFAQ from "./components/GlobalFAQ";


export default function Home() {
  const [activeTab, setActiveTab] = useState<"primary" | "middle" | "senior">("primary");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const academicPrograms = {
    primary: {
      title: "Primary Wing (Grades I - V)",
      tagline: "Nurturing Curiosity & Foundation",
      description: "Our primary program emphasizes experiential learning, foundational literacy, and numerical confidence. We create a joyful learning environment that promotes self-discovery and critical inquiry.",
      features: [
        "Inquiry-Based Playway Methodology",
        "Introduction to STEM & Coding Concepts",
        "Vibrant Art, Music, and Drama Integration",
        "Focus on Social-Emotional Learning (SEL)"
      ],
      color: "from-amber-500 to-brand-orange",
      bgClass: "bg-orange-50/40 border-orange-100",
      image: "/smart board.jpeg"
    },
    middle: {
      title: "Middle Wing (Grades VI - VIII)",
      tagline: "Fostering Analytical & Collaborative Minds",
      description: "Designed for adolescent development, our middle school curriculum deepens conceptual understanding, introduces project-based learning, and encourages collaborative problem-solving across disciplines.",
      features: [
        "Design Thinking & Advanced STEM Labs",
        "Dual-Language and Global Studies programs",
        "Structured Sports, Swimming & Athletic Leagues",
        "Creative Digital Arts & Media Literacy"
      ],
      color: "from-purple-600 to-brand-purple",
      bgClass: "bg-purple-50/40 border-purple-100",
      image: "/computerlab.jpeg"
    },
    senior: {
      title: "Senior Wing (Grades IX - XII)",
      tagline: "Global Standards & College Readiness",
      description: "Our comprehensive senior high program offers multiple streams (Science, Commerce, Humanities) designed to meet top international university standards. We merge rigorous prep with hands-on leadership development.",
      features: [
        "Advanced Placement & Specialized Streams",
        "One-on-One Dedicated College Career Counseling",
        "Entrepreneurship Incubator & Tech Innovation Hubs",
        "Global Student Exchange & Community Service Projects"
      ],
      color: "from-emerald-600 to-teal-700",
      bgClass: "bg-emerald-50/40 border-emerald-100",
      image: "/sciencelab.jpeg"
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <div className="bg-white text-slate-800 transition-colors duration-300">
      
      {/* 1. CLASSIC ELEGANT HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[500px] flex items-center justify-start overflow-hidden bg-slate-950">
        
        {/* Clean Bright Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero_banner_right.png"
            alt="Edugen World School Campus Life"
            fill
            priority
            className="object-cover object-[center_center]"
            sizes="100vw"
          />
          {/* Elegant Dark Gradient on the left for text readability */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent z-10" />
        </div>

        {/* Left-Aligned Typography Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-10 text-left space-y-5">
          
          <h2 className="text-xl md:text-2xl text-brand-orange italic drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
            Top School In Bihar Sharif
          </h2>
          
          {/* The secondary heading for the hero section */}
          <h2 className="text-4xl md:text-6xl lg:text-[75px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Your Future <br />
            Begins At <br />
            Edugen World
          </h2>
          
          {/* Location Subtitle */}
          <p className="text-lg md:text-xl text-slate-200 font-medium tracking-wide drop-shadow-md pt-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Sohsarai, Biharsharif, Nalanda
          </p>

        </div>
      </section>

      {/* 2. SEO OPTIMIZED WELCOME SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* SEO Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Best English Medium School in Nalanda – Top CBSE School Near Kisan College
              </h1>
              
              <div className="w-20 h-1.5 bg-brand-orange rounded-full"></div>
              
              <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
                <p>
                  Welcome to our school, a trusted name in quality education in Bihar Sharif. Recognized as the <strong>best English medium school in Nalanda</strong> and the <strong>top CBSE school near Kisan College</strong>, we provide education from <strong>Play Group to Class 12 Science</strong> with a strong focus on academic excellence, discipline, creativity, and personality development.
                </p>
                <p>
                  Our mission is to create confident, knowledgeable, and responsible students through modern education methods, experienced teachers, smart classrooms, laboratories, sports, and extracurricular activities.
                </p>
                <p>
                  We believe every child has unique potential, and our goal is to help students achieve success in academics and life.
                </p>
              </div>
            </div>

            {/* Why Choose Us Features */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-bl-full"></div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-sm">✓</span>
                Why Choose Us?
              </h2>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Play Group to 12th Science",
                  "Experienced Teachers",
                  "Smart Classrooms",
                  "Science & Computer Labs",
                  "English Medium Education",
                  "Safe & Disciplined Campus",
                  "Sports & Cultural Activities",
                  "Preparation Support for JEE & NEET"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY STRIP */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-10 border-y border-brand-purple/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-[10px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                Exclusive Technological Advantage
              </span>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                The Only School in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-400">Bihar Sharif</span> Fully Equipped with Modern Classroom Tech
              </h2>
              <p className="text-white text-xs md:text-sm font-normal leading-relaxed">
                We believe in providing the absolute best for our students. Edugen World School leads the region as the sole institution completely outfitted with state-of-the-art interactive smart boards, robust 24/7 CCTV safety surveillance networks, and immersive science/STEM technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 w-full lg:max-w-md">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider leading-none mb-1">Smart Boards</div>
                  <div className="text-[10px] text-white font-medium">Interactive Learning</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider leading-none mb-1">CCTV Cameras</div>
                  <div className="text-[10px] text-white font-medium">24/7 Shielded Safety</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 col-span-2 sm:col-span-1 lg:col-span-2">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider leading-none mb-1">Advanced Tech</div>
                  <div className="text-[10px] text-white font-medium">Robotics & STEM Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Our Foundation</h2>
          <p className="text-3xl md:text-4xl font-black text-brand-purple">Core Pillars of Edugen Education</p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-900 max-w-2xl mx-auto text-sm font-light">
            We structure our pedagogy, physical setup, and cultural values around three core domains to deliver holistic and empowering instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Innovation & STEM */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:scale-[1.02] hover:border-brand-purple/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-purple">Innovation & STEM Labs</h3>
              <p className="text-slate-900 text-xs leading-relaxed font-light">
                Encouraging structural computational logic, IoT, robotic building, and dynamic science experiments within designated student exploration facilities.
              </p>
            </div>
            <Link href="/academics" className="pt-6 mt-6 border-t border-slate-55 text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Our Curriculum
              <span>→</span>
            </Link>
          </div>

          {/* Pillar 2: Arts & Team Athletics */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:scale-[1.02] hover:border-brand-orange/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-purple">Holistic Arts & Sports</h3>
              <p className="text-slate-900 text-xs leading-relaxed font-light">
                Unlocking artistic capabilities, theatrical confidence, vocal ranges, swimming skills, and tactical leadership in sports competitions.
              </p>
            </div>
            <Link href="/academics" className="pt-6 mt-6 border-t border-slate-55 text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:gap-2 transition-all">
              Discover Co-curriculars
              <span>→</span>
            </Link>
          </div>

          {/* Pillar 3: Character & Citizenship */}
          <div className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:scale-[1.02] hover:border-brand-purple/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-purple">Global Citizenship</h3>
              <p className="text-slate-900 text-xs leading-relaxed font-light">
                Instilling ethical frameworks, deep-rooted integrity, high community compassion, and cultural understanding to prepare responsible world leaders.
              </p>
            </div>
            <Link href="/about" className="pt-6 mt-6 border-t border-slate-55 text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:gap-2 transition-all">
              Our Vision & Beliefs
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. ACADEMIC HUB */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Academic Structure</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">Explore Our Wings</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          {/* Dynamic Tab Switchers */}
          <div className="flex justify-center max-w-md mx-auto mb-12 p-1.5 rounded-full bg-white shadow-md border border-slate-100">
            <button
              onClick={() => setActiveTab("primary")}
              className={`flex-1 text-center py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === "primary" ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20" : "text-slate-900 hover:text-brand-purple"}`}
            >
              Primary Wing
            </button>
            <button
              onClick={() => setActiveTab("middle")}
              className={`flex-1 text-center py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === "middle" ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20" : "text-slate-900 hover:text-brand-purple"}`}
            >
              Middle Wing
            </button>
            <button
              onClick={() => setActiveTab("senior")}
              className={`flex-1 text-center py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === "senior" ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20" : "text-slate-900 hover:text-brand-purple"}`}
            >
              Senior Wing
            </button>
          </div>

          {/* Active Panel Details */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 rounded-3xl border bg-white shadow-lg transition-all duration-300 items-center ${academicPrograms[activeTab].bgClass}`}>
            
            <div className="lg:col-span-7 space-y-6">
              <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${academicPrograms[activeTab].color}`}>
                {academicPrograms[activeTab].tagline}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-brand-purple">
                {academicPrograms[activeTab].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {academicPrograms[activeTab].description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicPrograms[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dynamic Wing Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative group bg-slate-100">
                <Image 
                  src={academicPrograms[activeTab].image}
                  alt={academicPrograms[activeTab].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
                
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[9px] font-bold tracking-widest bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full uppercase text-white border border-white/10">
                    Live Campus View
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1.5 text-white">
                  <div className="text-lg font-black tracking-tight">Experiential Learning</div>
                  <p className="text-[10.5px] text-white leading-relaxed font-light">
                    Real classroom environments custom-tailored to build confidence, inquiry, and scientific grit.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CAMPUS SPOTLIGHT (6-FACILITY REAL-PHOTO GRID) */}
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
        
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Campus Infrastructure</h2>
          <p className="text-3xl md:text-4xl font-black text-brand-purple">State of the Art Facilities</p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-900 max-w-2xl mx-auto text-sm font-light">
            Edugen World School hosts highly advanced academic and co-curricular facilities to inspire excellence in both cognitive subjects and physical leagues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Facility 1: Visual Library Hub */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            <Image 
              src="/library.jpeg" 
              alt="Edugen Visual Library Hub" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              sizes="(max-w-768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/45 to-transparent z-10" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 transition-all duration-300">
              <span className="px-2 py-0.5 rounded bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider inline-block">
                Academic Hub
              </span>
              <h3 className="text-sm font-black text-white uppercase tracking-wider leading-tight">Visual Library Hub</h3>
              <div className="text-white/90 text-[10.5px] font-normal leading-relaxed opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-16 group-hover:translate-y-0">
                Extensive collection of reference books, physical libraries, quiet research setups, and digital databases.
              </div>
            </div>
          </div>

          {/* Facility 2: Olympic Sports Court */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            <Image 
              src="/sports.png" 
              alt="Edugen Sports Court" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              sizes="(max-w-768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/45 to-transparent z-10" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 transition-all duration-300">
              <span className="px-2 py-0.5 rounded bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider inline-block">
                Athletics
              </span>
              <h3 className="text-sm font-black text-white uppercase tracking-wider leading-tight">Olympic Sports Court</h3>
              <div className="text-white/90 text-[10.5px] font-normal leading-relaxed opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-16 group-hover:translate-y-0">
                Spacious athletic fields, track leagues, volleyball nets, and specialized sports guidance from expert coaches.
              </div>
            </div>
          </div>

          {/* Facility 3: Robotics & STEM Setup */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            <Image 
              src="/sciencelab.jpeg" 
              alt="Edugen Robotics & STEM Setup" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              sizes="(max-w-768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/45 to-transparent z-10" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 transition-all duration-300">
              <span className="px-2 py-0.5 rounded bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider inline-block">
                Innovation
              </span>
              <h3 className="text-sm font-black text-white uppercase tracking-wider leading-tight">Robotics & STEM Setup</h3>
              <div className="text-white/90 text-[10.5px] font-normal leading-relaxed opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-16 group-hover:translate-y-0">
                Empowered with active 3D printing equipment, physics experimental rigs, chemistry gear, and microcontroller clusters.
              </div>
            </div>
          </div>

          {/* Facility 4: Theater & Music Arena */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            <Image 
              src="/Dance.jpeg" 
              alt="Edugen Theater & Music Arena" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              sizes="(max-w-768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/45 to-transparent z-10" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 transition-all duration-300">
              <span className="px-2 py-0.5 rounded bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider inline-block">
                Creative Arts
              </span>
              <h3 className="text-sm font-black text-white uppercase tracking-wider leading-tight">Theater & Music Arena</h3>
              <div className="text-white/90 text-[10.5px] font-normal leading-relaxed opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-16 group-hover:translate-y-0">
                Dedicated soundproof practice stages, cultural dance classes, vocal training, and instrumental setups.
              </div>
            </div>
          </div>

          {/* Facility 5: Safe Transport Fleet */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            <Image 
              src="/schoolbus.png" 
              alt="Edugen Safe Transport Fleet" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              sizes="(max-w-768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/45 to-transparent z-10" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 transition-all duration-300">
              <span className="px-2 py-0.5 rounded bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider inline-block">
                Logistics
              </span>
              <h3 className="text-sm font-black text-white uppercase tracking-wider leading-tight">Safe Transport Fleet</h3>
              <div className="text-white/90 text-[10.5px] font-normal leading-relaxed opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-16 group-hover:translate-y-0">
                Supervised school buses equipped with GPS tracking networks, high-safety protocols, and dedicated staff.
              </div>
            </div>
          </div>

          {/* Facility 6: Seminar & Conference Hall */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            <Image 
              src="/confrence.jpeg" 
              alt="Edugen Conference & Discussion Hall" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              sizes="(max-w-768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/45 to-transparent z-10" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1.5 transition-all duration-300">
              <span className="px-2 py-0.5 rounded bg-brand-orange text-[9px] font-bold text-white uppercase tracking-wider inline-block">
                Community
              </span>
              <h3 className="text-sm font-black text-white uppercase tracking-wider leading-tight">Seminar & Conference Hall</h3>
              <div className="text-white/90 text-[10.5px] font-normal leading-relaxed opacity-0 max-h-0 translate-y-2 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-16 group-hover:translate-y-0">
                Modern high-seating audio-visual auditorium perfect for national seminars, student debates, and administrative conferences.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4.5. CAMPUS LIFE IN REELS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-3">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Campus Life</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">Edugen Reels & Video Highlights</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
            <p className="text-slate-900 max-w-2xl mx-auto text-sm font-light">
              Get an insider look at our active school events, STEM projects, and athletic victories. Click any card to play the official video reels!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Reel 1 */}
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-black transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <iframe
                src="https://www.instagram.com/reel/DYWqeJVhBuo/embed/"
                className="w-full h-full border-0 absolute inset-0 z-10"
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            {/* Reel 2 */}
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-black transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <iframe
                src="https://www.instagram.com/reel/DXsiPlcgeyI/embed/"
                className="w-full h-full border-0 absolute inset-0 z-10"
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            {/* Reel 3 */}
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-black transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <iframe
                src="https://www.instagram.com/reel/DWoNz2vjqCH/embed/"
                className="w-full h-full border-0 absolute inset-0 z-10"
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 4.7. CO-CURRICULAR GALLERY WALL (REAL LIFE IN PHOTOS) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-3">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">School Highlights</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">Co-Curricular & Campus Highlights</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
            <p className="text-slate-900 max-w-2xl mx-auto text-sm font-light">
              Catch authentic snapshots of our students engaging in green plantation drives, self-defense karate drills, independence day assemblies, athletic matches, and cultural dances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Photo 1: Independence Day */}
            <div className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src="/independence day.jpeg" 
                alt="Independence Day Celebrations" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">National Assembly</span>
                <h4 className="text-sm font-black uppercase">Independence Day Assembly</h4>
                <p className="text-[10px] text-slate-350 font-light">Patriotic speeches, marching displays, and vocal national anthem choirs.</p>
              </div>
            </div>

            {/* Photo 2: Green Campus Plantation */}
            <div className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src="/plantation.jpeg" 
                alt="Green Campus Plantation Drive" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">Eco Awareness</span>
                <h4 className="text-sm font-black uppercase">Tree Plantation Drive</h4>
                <p className="text-[10px] text-slate-350 font-light">Students planting trees, cultivating a green campus ecosystem.</p>
              </div>
            </div>

            {/* Photo 3: Kabaddi Athletics */}
            <div className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src="/kabadi.jpeg" 
                alt="Kabaddi Athletics Championship" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">Physical Grit</span>
                <h4 className="text-sm font-black uppercase">Kabaddi Championship</h4>
                <p className="text-[10px] text-slate-350 font-light">Promoting high physical endurance, tactical grit, and collaborative team play.</p>
              </div>
            </div>

            {/* Photo 4: Karate Self-Defense */}
            <div className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src="/karate.jpeg" 
                alt="Karate Self-Defense Training" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">Self-Defense</span>
                <h4 className="text-sm font-black uppercase">Karate & Self-Defense</h4>
                <p className="text-[10px] text-slate-350 font-light">Building physical security, personal discipline, and tactical confidence.</p>
              </div>
            </div>

            {/* Photo 5: Cultural Dance Activities */}
            <div className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src="/dance1.jpeg" 
                alt="Cultural Dance Performance" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">Performing Arts</span>
                <h4 className="text-sm font-black uppercase">Classical Dance Event</h4>
                <p className="text-[10px] text-slate-350 font-light">Celebrating Indian folk heritages, rhythmic expressions, and creative coordination.</p>
              </div>
            </div>

            {/* Photo 6: Co-Curricular Enrichment */}
            <div className="group relative h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-150 bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src="/activity2.jpeg" 
                alt="Co-Curricular Enrichment Activities" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">Active Learning</span>
                <h4 className="text-sm font-black uppercase">Creative Activities</h4>
                <p className="text-[10px] text-slate-350 font-light">Encouraging sensory stimulation, collaborative sharing, and motor skills.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PARENTS CORNER */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Testimonials</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">What Parents Say About Us</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400 text-sm">★★★★★</div>
                <p className="text-slate-655 text-xs leading-relaxed italic font-light">
                  "Edugen has changed our son's approach to science. The hands-on project based modules and STEM labs enabled him to look past simple grades to understanding why things work."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center font-black text-xs shrink-0">
                  SM
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-brand-purple">Siddharth Mehta</h4>
                  <p className="text-[10px] text-slate-900 font-bold">Parent of Grade VII Learner</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400 text-sm">★★★★★</div>
                <p className="text-slate-655 text-xs leading-relaxed italic font-light">
                  "The co-curricular exposure at Sohsarai is outstanding. My daughter has taken up swimming and public speaking, which has built immensely high self-esteem in her personality."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center font-black text-xs shrink-0">
                  AP
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-brand-purple">Anjana Prasad</h4>
                  <p className="text-[10px] text-slate-900 font-bold">Parent of Grade III Learner</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400 text-sm">★★★★★</div>
                <p className="text-slate-655 text-xs leading-relaxed italic font-light">
                  "What sets Edugen apart is the emphasis on ethical development and global awareness. Our children have grown not just academically but as extremely compassionate and caring persons."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center font-black text-xs shrink-0">
                  RK
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-brand-purple">Rajesh Kumar</h4>
                  <p className="text-[10px] text-slate-900 font-bold">Parent of Grade X Learner</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5.5. CAMPUS PANORAMIC BANNER */}
      <section className="relative w-full h-[380px] md:h-[460px] overflow-hidden">
        <Image
          src="/mainbuilding.JPG"
          alt="Edugen World School Campus — Sohsarai, Biharsharif"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/95 via-brand-purple/60 to-brand-purple/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-6">
          <div className="space-y-5 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Sohsarai, Biharsharif — Nalanda, Bihar
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Our Campus,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-300">
                Your Child&apos;s Second Home
              </span>
            </h2>
            <p className="text-white text-sm font-normal leading-relaxed max-w-md drop-shadow-sm">
              Sprawling green grounds, ultra-modern facilities, and a nurturing environment — all waiting for your child at Edugen World School.
            </p>
            <div className="flex gap-6 pt-2">
              <div className="text-center">
                <div className="text-2xl font-black text-brand-orange">100%</div>
                <div className="text-[9px] text-white/90 font-bold uppercase tracking-wider drop-shadow-sm">Smart Classrooms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-brand-orange">CBSE</div>
                <div className="text-[9px] text-white/90 font-bold uppercase tracking-wider drop-shadow-sm">Curriculum</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-brand-orange">2018</div>
                <div className="text-[9px] text-white/90 font-bold uppercase tracking-wider drop-shadow-sm">Est. Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADMISSIONS CTA ENROLLMENT BOX */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-brand-purple p-8 md:p-16 text-white shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Ready to Begin Your Child's Journey?</h2>
            <p className="text-sm md:text-base text-slate-350 leading-relaxed font-light">
              Connect with our expert Admissions Team today, schedule an in-person campus visit, or download our school guidebook brochures.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions"
                className="px-8 py-4 rounded-full text-sm font-extrabold bg-brand-orange text-white hover:bg-brand-orange-hover hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                Schedule A Campus Tour
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-full text-sm font-extrabold bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                Submit Admissions Enquiry
              </Link>
            </div>

            {/* Newsletter form */}
            <div className="pt-12 border-t border-white/10 max-w-lg mx-auto space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white">Subscribe to our Weekly Edu-Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter parent email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full text-xs text-slate-900 placeholder-slate-400 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-xs font-extrabold text-white bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] transition-all shrink-0"
                >
                  {isSubmitted ? "Subscribed! ✓" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* INTERNAL LINKS */}
      <InternalLinks currentPage="/" />
      
      {/* Global FAQ */}
      <GlobalFAQ />

    </div>
  );
}
