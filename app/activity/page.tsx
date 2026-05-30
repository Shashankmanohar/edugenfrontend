import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "Sports, Cultural & Extracurricular Activities for Students | Edugen World School",
  description: "We believe extracurricular activities are important for personality development and confidence building.",
};

export default function Activity() {
  const activities = [
    "Sports competitions",
    "Dance and music programs",
    "Debate and quiz competitions",
    "Science exhibitions",
    "Art and craft activities"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Extracurriculars
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Sports, Cultural & Extracurricular Activities for Students
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              We believe extracurricular activities are important for personality development and confidence building. Students are encouraged to participate actively in school events and programs.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/mainbuilding.JPG" 
              alt="Student Activities" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Activities Include</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col items-center text-center gap-4 hover:border-brand-orange transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global FAQ */}
      <GlobalFAQ />
      
    </div>
  );
}
