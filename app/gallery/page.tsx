import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";

export const metadata: Metadata = {
  title: "School Gallery – Student Activities & Campus Life in Bihar Sharif | Edugen World School",
  description: "Our school gallery showcases academic events, sports activities, annual functions, cultural programs, classroom learning, and student achievements.",
};

export default function Gallery() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Our Campus
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              School Gallery – Student Activities & Campus Life in Bihar Sharif
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              Our school gallery showcases academic events, sports activities, annual functions, cultural programs, classroom learning, and student achievements. We encourage students to participate in extracurricular activities for confidence building and personality development.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/mainbuilding.JPG" 
              alt="School Gallery" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Global FAQ */}
      <GlobalFAQ />
      
    </div>
  );
}
