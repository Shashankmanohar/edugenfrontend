import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "Teaching & Career Opportunities at Our School | Edugen World School",
  description: "We welcome skilled and passionate teachers who want to build successful careers in the education sector.",
};

export default function Career() {
  const currentOpenings = [
    "PRT Teachers",
    "TGT Teachers",
    "PGT Science Faculty",
    "Administrative Staff"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Work With Us
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Teaching & Career Opportunities at Our School
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              We welcome skilled and passionate teachers who want to build successful careers in the education sector. Interested candidates can contact us with their resumes and qualification details.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/mainbuilding.JPG" 
              alt="Career Opportunities" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Openings Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentOpenings.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex items-center gap-4 hover:border-brand-purple transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
