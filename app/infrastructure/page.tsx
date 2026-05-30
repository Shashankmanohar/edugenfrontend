import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "Modern School Infrastructure & Smart Campus in Bihar Sharif | Edugen World School",
  description: "Our campus is designed to provide a safe, modern, and technology-enabled learning environment.",
};

export default function Infrastructure() {
  const infrastructureFeatures = [
    "Spacious smart classrooms",
    "Modern science labs",
    "Computer laboratory",
    "Library facilities",
    "Sports playground",
    "CCTV security system",
    "Hygienic campus environment"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Smart Campus
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Modern School Infrastructure & Smart Campus in Bihar Sharif
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              Our campus is designed to provide a safe, modern, and technology-enabled learning environment. We continuously upgrade our infrastructure to provide the best educational experience for students.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/mainbuilding.JPG" 
              alt="School Infrastructure" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Infrastructure Features Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Infrastructure Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureFeatures.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
