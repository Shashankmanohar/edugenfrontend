import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";
import InternalLinks from "../components/InternalLinks";
export const metadata: Metadata = {
  title: "Board Results & Student Achievements in Bihar Sharif | Edugen World School",
  description: "Our students consistently perform well in academics, board examinations, sports, and competitions.",
};

export default function Result() {
  const highlights = [
    "Excellent board results",
    "Science stream achievements",
    "Olympiad participation",
    "Student awards and recognitions"
  ];

  const resultFaqs = [
    {
      question: "How do your students perform in CBSE Board Exams?",
      answer: "Our students consistently achieve outstanding results in the Class 10 and 12 CBSE board exams, with many securing top district ranks and scoring above 90%."
    },
    {
      question: "Do you prepare students for competitive exams?",
      answer: "Yes, alongside the regular curriculum, we provide specialized coaching and mock tests for competitive exams like JEE, NEET, and Olympiads."
    },
    {
      question: "Are extracurricular achievements celebrated?",
      answer: "Absolutely! We highly value holistic development and actively recognize students who excel in sports, arts, debate, and inter-school competitions."
    },
    {
      question: "Can we see the detailed past year results?",
      answer: "Yes, detailed year-wise performance metrics and topper lists are available at the school reception. You can also view recent highlights on this page."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Achievements
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Board Results & Student Achievements in Bihar Sharif
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              Our students consistently perform well in academics, board examinations, sports, and competitions. We focus on regular practice, concept clarity, and personal guidance for better results.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/reception.JPG" 
              alt="Student Achievements" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/result_card.png" 
              alt="Proud student holding academic award" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-brand-purple mb-4">Achievement Highlights</h2>
              <div className="w-16 h-1 bg-brand-orange rounded-full" />
              <p className="text-slate-600 font-light mt-4">We take immense pride in the consistently outstanding performances of our students.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Excellent board results</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Our students consistently secure top ranks in the CBSE board examinations.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Science stream achievements</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Exceptional performance in competitive entrance exams like JEE and NEET.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Olympiad participation</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">National and international medalists across Science, Math, and Cyber Olympiads.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Student awards and recognitions</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Numerous accolades in co-curricular activities, debate, arts, and sports events.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Toppers & Achievers */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-black text-white">Recent Toppers & Achievers</h2>
             <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
             <p className="text-slate-300 font-light max-w-2xl mx-auto">We are incredibly proud of our students who have consistently raised the bar of academic excellence in the district.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Placeholder Topper 1 */}
             <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl text-center space-y-4">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-brand-orange relative">
                   <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-xs">Image</div>
                </div>
                <h3 className="text-xl font-bold text-white">Student Name</h3>
                <p className="text-brand-orange font-black text-2xl">98.5%</p>
                <p className="text-xs text-slate-400 font-light uppercase tracking-wider">Class 12th Science Topper</p>
             </div>
             
             {/* Placeholder Topper 2 */}
             <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl text-center space-y-4 scale-105 relative z-10">
                <div className="absolute -top-4 right-6 bg-brand-orange text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">District Rank 1</div>
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-brand-purple relative">
                   <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-xs">Image</div>
                </div>
                <h3 className="text-xl font-bold text-white">Student Name</h3>
                <p className="text-brand-purple font-black text-2xl">99.2%</p>
                <p className="text-xs text-slate-400 font-light uppercase tracking-wider">Class 10th Board Topper</p>
             </div>

             {/* Placeholder Topper 3 */}
             <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl text-center space-y-4">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-brand-orange relative">
                   <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-xs">Image</div>
                </div>
                <h3 className="text-xl font-bold text-white">Student Name</h3>
                <p className="text-brand-orange font-black text-2xl">97.8%</p>
                <p className="text-xs text-slate-400 font-light uppercase tracking-wider">Class 12th Commerce Topper</p>
             </div>
          </div>
        </div>
      </section>

      {/* Track Record & Beyond Academics */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-brand-purple">Track Record of Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                 <span className="text-slate-600 font-medium">Overall Pass Percentage</span>
                 <span className="text-brand-orange font-black">100%</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                 <span className="text-slate-600 font-medium">Students Scoring above 90%</span>
                 <span className="text-brand-purple font-black">45+</span>
              </div>
              <div className="flex items-center justify-between pb-2">
                 <span className="text-slate-600 font-medium">State Level Olympiad Qualifiers</span>
                 <span className="text-brand-orange font-black">12</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-light italic">*Statistics are based on the previous academic year.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-brand-purple">Beyond Academics</h3>
            <p className="text-slate-600 font-light text-sm leading-relaxed">
              We celebrate victories on the playground and the stage just as much as we celebrate report cards.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-brand-orange">🏆</span> Won the Inter-School Regional Debate Championship
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-brand-purple">🏅</span> Gold Medalists in District Level Athletics Meet
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-brand-orange">🎨</span> Top Honors in State Art & Cultural Festival
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Internal Links Navigation */}
      <InternalLinks currentPage="/result" />

      {/* Global FAQ - Customized for Result */}
      <GlobalFAQ customFaqs={resultFaqs} />
      
    </div>
  );
}
