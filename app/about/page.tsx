import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import InternalLinks from "../components/InternalLinks";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "About the Best English Medium School in Nalanda | Edugen World School",
  description: "Learn about Edugen World School, the top CBSE school near Kisan College in Bihar Sharif. We provide quality education from Play Group to Class 12 Science with strong moral values.",
};
export default function About() {
  const aboutFaqs = [
    {
      question: "When was Edugen World School established?",
      answer: "Edugen World School was founded with a vision to provide world-class education rooted in strong moral values to the students of Bihar Sharif."
    },
    {
      question: "What is the mission of Edugen World School?",
      answer: "Our mission is to nurture intellectual curiosity, build strong character, and prepare students to become responsible global citizens."
    },
    {
      question: "Is the school co-educational?",
      answer: "Yes, Edugen World School is a fully co-educational institution providing equal opportunities to all students."
    },
    {
      question: "Where is the school located?",
      answer: "The school campus is located at Back of Kisan College, Sohsarai, Bihar Sharif, Nalanda (803118)."
    }
  ];

  const coreValues = [
    {
      title: "Integrity First",
      description: "We commit to honest, ethical behavior, building trust within our student assemblies and society.",
      icon: (
        <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Lifelong Inquiry",
      description: "We spark curiosity and visual-spatial reasoning to transition learners into dynamic independent researchers.",
      icon: (
        <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Team Compassion",
      description: "We promote deep empathy, multicultural active listening, and social-emotional awareness.",
      icon: (
        <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Inclusive Leadership",
      description: "We empower girls and boys of all cognitive background layers to direct teams and achieve milestones.",
      icon: (
        <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const administrators = [
    {
      name: "Dr. Alok Sen, PhD",
      title: "Principal Director",
      bio: "An eminent educationalist with over 22 years of experience managing elite high schools globally.",
      bgInitials: "AS",
      color: "bg-purple-50 text-brand-purple border-purple-100"
    },
    {
      name: "Mrs. Shweta Sinha, M.Ed",
      title: "Vice Principal (Senior Wing)",
      bio: "Pioneered interactive design-thinking curriculums and student mental wellness protocols.",
      bgInitials: "SS",
      color: "bg-orange-50 text-brand-orange border-orange-100"
    },
    {
      name: "Mr. Rajeev Ranjan, MSc",
      title: "Academic Dean & STEM Lead",
      bio: "Over 14 years driving robotics competitions, active maths leagues, and digital learning.",
      bgInitials: "RR",
      color: "bg-purple-50 text-brand-purple border-purple-100"
    }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HEADER HERO */}
      <section className="relative bg-slate-50 py-16 md:py-24 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
            Educating since 2018
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-purple">
            About Edugen World School
          </h2>
          <p className="text-base text-slate-900 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our history, deep-rooted core beliefs, and meet the outstanding executive educators piloting Biharsharif's premier school portal.
          </p>
        </div>
      </section>

      {/* 2. HISTORY & VISION (TWO COLUMNS) */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Visual representation using official logo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-square rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center p-8 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/5 to-brand-orange/5 pointer-events-none rounded-3xl" />
            <div className="text-center space-y-5">
              <div className="relative w-36 h-36 mx-auto bg-white p-3 border border-slate-100 shadow-lg rounded-full flex items-center justify-center">
                <Image 
                  src="/edugenlogo.png" 
                  alt="Edugen World School Circular Insignia" 
                  width={130} 
                  height={130} 
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-black text-base text-brand-purple uppercase">Edugen World School</h3>
                <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mt-1">Sohsarai, Biharsharif</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: History text */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-2xl md:text-3xl font-black text-brand-purple border-b-2 border-brand-orange pb-3 inline-block">
            About Our School in Bihar Sharif
          </h1>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-light">
            <p>
              Our school is one of the leading educational institutions in Bihar Sharif committed to providing quality education with strong moral values. Since our beginning, we have focused on creating a positive learning environment where students can grow academically, socially, and personally.
            </p>
            <p>
              We offer education from Play Group to Senior Secondary Science with modern teaching methods and student-focused learning. Our experienced faculty members guide students to become confident thinkers and future leaders.
            </p>
            <p>
              We aim to provide a balanced education system that combines academics, discipline, technology, and extracurricular activities for overall development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <span className="text-xs font-black text-brand-orange uppercase">Our Vision</span>
              <p className="text-xs text-slate-900 font-light leading-relaxed">
                To become one of the best schools in Bihar Sharif by providing modern and value-based education.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <span className="text-xs font-black text-brand-purple uppercase">Our Mission</span>
              <ul className="text-xs text-slate-900 font-light leading-relaxed list-disc pl-4 space-y-1">
                <li>To develop confident and responsible students</li>
                <li>To encourage creativity and innovation</li>
                <li>To provide strong academic foundations</li>
                <li>To prepare students for future careers</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* 2.5. CAMPUS PHOTO STRIP */}
      <section className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Our Campus</h2>
            <p className="text-2xl md:text-3xl font-black text-white">A Glimpse of Edugen World School</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Building */}
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/mainbuilding.JPG"
                alt="Edugen World School Main Building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-4 left-5 right-5 z-20 space-y-1">
                <span className="text-[9px] font-black tracking-widest text-brand-orange uppercase drop-shadow-lg">Edugen Campus</span>
                <h4 className="text-sm font-black uppercase text-white drop-shadow-lg">Main School Building</h4>
                <p className="text-[10px] text-white font-light drop-shadow-md">Our state-of-the-art campus in Sohsarai, Biharsharif.</p>
              </div>
            </div>

            {/* Reception */}
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/reception.JPG"
                alt="Edugen World School Reception"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-4 left-5 right-5 z-20 space-y-1">
                <span className="text-[9px] font-black tracking-widest text-brand-orange uppercase drop-shadow-lg">Welcoming Space</span>
                <h4 className="text-sm font-black uppercase text-white drop-shadow-lg">School Reception Area</h4>
                <p className="text-[10px] text-white font-light drop-shadow-md">A warm, professional welcome for every student and parent.</p>
              </div>
            </div>

            {/* Classroom */}
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/class room.jpeg"
                alt="Edugen Smart Classroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-4 left-5 right-5 z-20 space-y-1">
                <span className="text-[9px] font-black tracking-widest text-brand-orange uppercase drop-shadow-lg">Smart Learning</span>
                <h4 className="text-sm font-black uppercase text-white drop-shadow-lg">Digital Classrooms</h4>
                <p className="text-[10px] text-white font-light drop-shadow-md">100% smart board-equipped learning environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAL'S MESSAGE */}
      <section id="principal" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Leadership Voice</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">Principal&apos;s Message</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          {/* Card */}
          <div className="relative bg-slate-50 border border-slate-100 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Decorative giant quote mark */}
            <div className="absolute top-6 right-8 text-[120px] leading-none font-black text-brand-purple/8 select-none pointer-events-none">&ldquo;&rdquo;</div>

            {/* Left: Photo + name badge */}
            <div className="md:col-span-4 flex flex-col items-center gap-5">
              <div className="w-56 h-72 rounded-2xl border-4 border-white shadow-2xl relative overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/Principal.JPG"
                  alt="Dr. Swati – Principal, Edugen World School"
                  fill
                  className="object-cover object-top"
                  sizes="224px"
                />
                <div className="absolute inset-0 bg-brand-purple/10 hover:bg-transparent transition-all duration-300 pointer-events-none" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-base font-black text-brand-purple">Dr. Swati</h3>
                <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Principal, Edugen World School</p>
                <div className="w-10 h-0.5 bg-brand-orange mx-auto rounded-full my-2" />
                <div className="space-y-0.5 text-[11px] text-slate-600 font-semibold">
                  <p>M.A, B.Ed, PhD</p>
                  <p className="text-brand-purple font-black">15 years of experience</p>
                </div>
              </div>
            </div>

            {/* Right: Quote + message */}
            <div className="md:col-span-8 space-y-6 relative z-10">
              {/* Big opening quote icon */}
              <svg className="w-10 h-10 text-brand-orange/25 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-sm md:text-base text-brand-purple font-semibold italic leading-relaxed">
                &ldquo;At Edugen World School, we believe in providing holistic education that balances academic excellence with character building. Our focus is to empower students with knowledge, skills, and values so they can confidently face the challenges of tomorrow.&rdquo;
              </p>

              <p className="text-xs text-slate-900 font-light leading-relaxed">
                Our school is a place where every child matters. We strive to create an environment where students feel safe, valued, and inspired to learn. Join us in our journey to excellence.
              </p>

              {/* Highlight stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center space-y-1">
                  <div className="text-xl font-black text-brand-orange">15+</div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-xl font-black text-brand-purple">PhD</div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-wider">Qualification</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-xl font-black text-brand-orange">100%</div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-wider">Child-Centric</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DIRECTOR'S MESSAGE */}
      <section id="director" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Leadership Voice</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">Director&apos;s Message</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          {/* Card — mirrored: text left, photo right */}
          <div className="relative bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

            {/* Decorative giant quote mark */}
            <div className="absolute top-6 left-8 text-[120px] leading-none font-black text-brand-orange/6 select-none pointer-events-none">&ldquo;&rdquo;</div>

            {/* Left: Quote + message */}
            <div className="md:col-span-8 space-y-6 relative z-10 order-2 md:order-1">
              <svg className="w-10 h-10 text-brand-purple/25 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-sm md:text-base text-brand-purple font-semibold italic leading-relaxed">
                &ldquo;Education is not just the transfer of knowledge — it is the transformation of a child&apos;s entire being. At Edugen World School, we are committed to nurturing every student&apos;s potential with the finest infrastructure, inspired teachers, and a curriculum that prepares them for a rapidly evolving world.&rdquo;
              </p>

              <p className="text-xs text-slate-900 font-light leading-relaxed">
                Our vision goes beyond textbooks. We are building future-ready citizens — confident, compassionate, and capable — who will lead society with integrity and innovation. We warmly invite every family to become part of the Edugen journey.
              </p>

              {/* Highlight stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center space-y-1">
                  <div className="text-xl font-black text-brand-purple">2018</div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-wider">Founded</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-xl font-black text-brand-orange">CBSE</div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-wider">Curriculum</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-xl font-black text-brand-purple">K–12</div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-wider">All Grades</div>
                </div>
              </div>
            </div>

            {/* Right: Photo + name badge */}
            <div className="md:col-span-4 flex flex-col items-center gap-5 order-1 md:order-2">
              <div className="w-56 h-72 rounded-2xl border-4 border-white shadow-2xl relative overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/director.jpeg"
                  alt="Director – Edugen World School"
                  fill
                  className="object-cover object-top"
                  sizes="224px"
                />
                <div className="absolute inset-0 bg-brand-orange/10 hover:bg-transparent transition-all duration-300 pointer-events-none" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-base font-black text-brand-purple">Director</h3>
                <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Director, Edugen World School</p>
                <div className="w-10 h-0.5 bg-brand-orange mx-auto rounded-full my-2" />
                <div className="space-y-0.5 text-[11px] text-slate-600 font-semibold">
                  <p>Edugen Group of Institutions</p>
                  <p className="text-brand-purple font-black">Biharsharif, Nalanda</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Our Pillars</h2>
          <p className="text-3xl md:text-4xl font-black text-brand-purple">Values We Hold Dear</p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((val) => (
            <div key={val.title} className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-shadow space-y-4">
              <div className="w-11 h-11 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 shadow-sm">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-brand-purple">{val.title}</h3>
              <p className="text-slate-900 text-[11px] leading-relaxed font-light">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EXECUTIVE TEAM */}
      <section id="leadership" className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Leadership</h2>
            <p className="text-3xl md:text-4xl font-black text-brand-purple">Meet Our Leadership Team</p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {administrators.map((admin) => (
              <div key={admin.name} className="bg-white rounded-2xl border border-slate-100 p-6.5 text-center shadow-sm space-y-4 hover:shadow-md transition-shadow">
                {/* Initials Placeholder */}
                <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center font-black text-xl border ${admin.color}`}>
                  {admin.bgInitials}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-brand-purple">{admin.name}</h3>
                  <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">{admin.title}</p>
                </div>
                <p className="text-slate-900 text-[11px] font-light leading-relaxed">
                  {admin.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INTERNAL LINKS */}
      <InternalLinks currentPage="/about" />

      {/* Global FAQ - Customized for About */}
      <GlobalFAQ customFaqs={aboutFaqs} />
    </div>
  );
}
