import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";
import InternalLinks from "../components/InternalLinks";
export const metadata: Metadata = {
  title: "Academic Excellence from Nursery to Class 12 in Bihar Sharif",
  description: "Our academic program focuses on strong conceptual learning, discipline, and overall student growth. We use modern teaching methods and regular assessments.",
};

export default function Academics() {
  const highlights = [
    "CBSE-oriented curriculum",
    "Experienced teachers",
    "Smart classroom education",
    "Regular tests and assessments",
    "Competitive exam preparation support"
  ];

  const academicsFaqs = [
    {
      question: "What curriculum does Edugen World School follow?",
      answer: "We strictly follow the CBSE (Central Board of Secondary Education) curriculum for all classes from Play Group to Class 12, ensuring national standards of education."
    },
    {
      question: "Are smart classes available for all grades?",
      answer: "Yes! Every classroom from Primary to Senior Secondary is equipped with interactive digital boards to make learning visual, engaging, and highly effective."
    },
    {
      question: "What streams are offered for Class 11 and 12?",
      answer: "We currently specialize in the Science stream (PCM & PCB) with rigorous preparation support for competitive exams like JEE and NEET."
    },
    {
      question: "How often are tests and assessments conducted?",
      answer: "We conduct weekly tests, monthly reviews, and term-end examinations based on the Continuous and Comprehensive Evaluation (CCE) pattern to ensure steady progress."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Academics
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Academic Excellence from Nursery to Class 12 in Bihar Sharif
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              Our academic program focuses on strong conceptual learning, discipline, and overall student growth. We use modern teaching methods and regular assessments to improve student performance.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/mainbuilding.JPG" 
              alt="Edugen World School Campus" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/academics_card.png" 
              alt="Students in a modern smart classroom" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/20">
              <Image src="/edugenlogo.png" alt="Edugen World School Logo" width={60} height={60} className="object-contain" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-brand-purple mb-4">Academic Highlights</h2>
              <div className="w-16 h-1 bg-brand-orange rounded-full" />
              <p className="text-slate-600 font-light mt-4">Our curriculum is designed to provide a holistic and modern learning environment.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">CBSE-oriented curriculum</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">We follow the latest CBSE syllabus, ensuring students are well-prepared for national standards.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Experienced teachers</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Our faculty consists of highly trained educators dedicated to student success.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Smart classroom education</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Interactive digital boards and multimedia tools make learning engaging and effective.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Regular tests and assessments</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Continuous evaluation helps track progress and address learning gaps promptly.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Competitive exam preparation support</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">We provide specialized coaching for Olympiads, JEE, and NEET alongside regular academics.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="py-20 bg-brand-purple text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-black text-white">Our Teaching Methodology</h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full" />
            <p className="text-slate-200 font-light leading-relaxed">
              We move beyond traditional rote learning. Our pedagogy is rooted in project-based learning, interactive digital mediums, and continuous inquiry.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <span className="text-sm font-medium">Interactive Smart Classrooms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <span className="text-sm font-medium">Project-Based Experiential Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <span className="text-sm font-medium">Personalized Student Attention</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/class room.jpeg" alt="Smart Classroom" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Co-Scholastic & Assessment */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-purple">Co-Scholastic Excellence</h3>
            <p className="text-slate-600 font-light text-sm leading-relaxed">
              True education extends beyond books. We emphasize active participation in debates, quizzes, Olympiads, cultural arts, and competitive sports to ensure holistic personality development and leadership skills.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-purple">Assessment & Grading</h3>
            <p className="text-slate-600 font-light text-sm leading-relaxed">
              We follow a robust Continuous and Comprehensive Evaluation (CCE) pattern in alignment with CBSE guidelines. Our regular feedback loops help students identify strengths and focus on areas of improvement without exam anxiety.
            </p>
          </div>

        </div>
      </section>

      {/* Internal Links Navigation */}
      <InternalLinks currentPage="/academics" />

      {/* Global FAQ - Customized for Academics */}
      <GlobalFAQ customFaqs={academicsFaqs} />
      
    </div>
  );
}
