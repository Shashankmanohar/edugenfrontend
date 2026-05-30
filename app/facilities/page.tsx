import { Metadata } from "next";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "Modern School Facilities in Bihar Sharif for Smart Learning | Edugen World School",
  description: "Our school provides modern educational facilities including smart classrooms, science labs, computer lab, library, sports ground, and safe transportation to create a better learning environment.",
};

export default function Facilities() {
  const facilitiesList = [
    "Smart classrooms",
    "Science laboratories",
    "Computer lab",
    "Library",
    "Sports ground",
    "CCTV security",
    "Transportation facility",
    "Clean and safe campus"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12 text-center">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
            Campus Infrastructure
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-purple">
            Modern School Facilities in Bihar Sharif for Smart Learning
          </h1>
          <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto pt-4">
            Our school provides modern educational facilities to create a better learning environment for students.
          </p>
        </div>

        <div className="text-left pt-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
            Facilities Include
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilitiesList.map((facility, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-800 font-bold text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-lg mt-12">
          <p className="text-lg text-slate-700 font-medium italic">
            "We continuously improve our facilities to support quality education and student development."
          </p>
        </div>

      </div>

      {/* Global FAQ */}
      <GlobalFAQ />
      
    </div>
  );
}
