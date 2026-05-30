import { Metadata } from "next";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "Class 11 & 12 Science in Bihar Sharif | Edugen World School",
  description: "Edugen World School offers a comprehensive Science stream for Class 11 and 12 students in Bihar Sharif, preparing them for board exams and JEE/NEET.",
};

export default function ScienceStream() {
  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Computer Science",
    "English"
  ];

  const facilities = [
    "Well-Equipped Science Laboratories",
    "Smart Classrooms",
    "Experienced Faculty",
    "Doubt Clearing Sessions",
    "Library with Reference Books"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
            Senior Secondary
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-purple">
            11th & 12th Science School in Bihar Sharif
          </h1>
          <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto pt-4">
            Edugen World School offers a comprehensive Science stream for Class 11 and 12 students. We thoroughly prepare students for board exams as well as highly competitive exams like JEE and NEET.
          </p>
        </div>

        {/* Content Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -z-10" />
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm">1</span>
              Subjects Offered
            </h2>
            <ul className="space-y-4">
              {subjects.map((subject, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-bl-full -z-10" />
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center text-sm">2</span>
              Our Facilities
            </h2>
            <ul className="space-y-4">
              {facilities.map((facility, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  {facility}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
      
      {/* Career Pathways & Advanced Coaching */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-black text-brand-purple">Career Pathways & Mentorship</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
            <p className="text-slate-600 font-light max-w-2xl mx-auto">We guide our science students not just to pass exams, but to crack top-tier competitive entrances and secure promising futures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-purple mb-2">JEE & NEET Coaching</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">Integrated coaching for engineering and medical entrance exams conducted by specialized faculty members within the school premises.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-purple mb-2">Diverse Pathways</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">Beyond traditional routes, we expose students to biotechnology, data science, pure mathematics, and aeronautical research opportunities.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
               <img src="/sciencelab.jpeg" alt="Science Stream Students" className="w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-white font-black text-xl mb-1">100% Focus on Fundamentals</p>
                 <p className="text-white/80 text-xs font-light">Building concepts that last a lifetime.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global FAQ */}
      <GlobalFAQ />
    </div>
  );
}
