import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";
import InternalLinks from "../components/InternalLinks";
export const metadata: Metadata = {
  title: "Meet Our Experienced School Faculty in Bihar Sharif | Edugen World School",
  description: "Our teachers are experienced, dedicated, and committed to providing quality education to guide students academically and personally.",
};

export default function Faculty() {
  const facultyStrengths = [
    "Experienced educators",
    "Student-focused teaching",
    "Strong subject knowledge",
    "Individual student attention"
  ];

  const facultyFaqs = [
    {
      question: "What are the qualifications of your teachers?",
      answer: "Our teachers hold professional degrees (B.Ed., M.Ed., MA, M.Sc.) and possess years of valuable teaching experience in top-tier institutions."
    },
    {
      question: "Do teachers receive regular training?",
      answer: "Yes, our faculty undergoes continuous professional development workshops and training sessions to stay updated with modern pedagogical techniques and CBSE guidelines."
    },
    {
      question: "How do teachers support struggling students?",
      answer: "Our teachers provide individual attention, conduct extra doubt-clearing sessions, and adapt their teaching styles to meet the unique learning needs of every student."
    },
    {
      question: "Can parents communicate directly with the faculty?",
      answer: "Absolutely! We encourage parent-teacher interaction through monthly PTMs, the school diary, and scheduled appointments to discuss student progress."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Our Team
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Meet Our Experienced School Faculty in Bihar Sharif
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              Our teachers are experienced, dedicated, and committed to providing quality education. They guide students academically and personally to help them achieve success.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/reception.JPG" 
              alt="Experienced Faculty" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/faculty_card.png" 
              alt="Experienced teacher engaging with students" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-brand-purple mb-4">Faculty Strengths</h2>
              <div className="w-16 h-1 bg-brand-orange rounded-full" />
              <p className="text-slate-600 font-light mt-4">Our educators are the backbone of our school, bringing passion and expertise into every classroom.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Experienced educators</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Our team consists of highly qualified professionals with years of teaching experience.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Student-focused teaching</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">We tailor our teaching methodologies to suit the unique learning style of every student.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Strong subject knowledge</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Subject matter experts who convey complex topics clearly and effectively.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Individual student attention</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Low student-to-teacher ratios ensure every child receives the attention they deserve.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Department Showcases */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-black text-brand-purple">Department Showcases</h2>
             <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
             <p className="text-slate-600 font-light max-w-2xl mx-auto">Our specialized departments work collaboratively to provide a cohesive learning experience across all age groups.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-brand-orange mx-auto flex items-center justify-center">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-purple">Science & Math</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">Expert faculty focused on analytical thinking, complex problem-solving, and competitive exam preparation.</p>
             </div>
             
             <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-brand-purple mx-auto flex items-center justify-center">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-purple">Humanities & Arts</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">Dedicated to fostering creativity, communication skills, language proficiency, and global awareness.</p>
             </div>

             <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-purple">Early Years Educators</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">Specialized in child psychology and Montessori methods to provide a nurturing start for our youngest learners.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl font-black text-white">Continuous Professional Development</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-300 font-light leading-relaxed">
            At Edugen World School, learning never stops—even for our teachers. We conduct regular workshops, CBSE-mandated training sessions, and peer-to-peer observations to ensure our faculty remains updated with the latest global pedagogical trends.
          </p>
        </div>
      </section>

      {/* Internal Links Navigation */}
      <InternalLinks currentPage="/faculty" />

      {/* Global FAQ - Customized for Faculty */}
      <GlobalFAQ customFaqs={facultyFaqs} />
      
    </div>
  );
}
