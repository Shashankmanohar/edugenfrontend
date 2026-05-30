import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";
import InternalLinks from "../components/InternalLinks";
export const metadata: Metadata = {
  title: "Best Play School in Bihar Sharif | Edugen World School",
  description: "Edugen World School provides the best Play Group and Nursery section in Bihar Sharif. We focus on early childhood learning through fun, creativity, and interactive activities.",
};

export default function PlaySchool() {
  const features = [
    "Activity-Based Learning",
    "Smart Classrooms",
    "Indoor & Outdoor Games",
    "Trained Teachers",
    "Creative Activities",
    "Safe Campus"
  ];

  const playSchoolFaqs = [
    {
      question: "What is the admission age for Play Group and Nursery?",
      answer: "The ideal age for Play Group is 2.5 to 3 years, and for Nursery, it is 3 to 4 years. We ensure children are developmentally ready for their respective classes."
    },
    {
      question: "How do you ensure the safety of toddlers?",
      answer: "Safety is our top priority. We have 24/7 CCTV surveillance, a secure campus, trained caretakers, and strict pick-up policies to ensure a safe environment."
    },
    {
      question: "Do you focus only on playing or also academics?",
      answer: "We follow an Activity-Based Learning approach. Through fun games, puzzles, and sensory activities, children naturally learn alphabets, numbers, colors, and social skills."
    },
    {
      question: "What is the teacher-student ratio in the Play School section?",
      answer: "We maintain a low teacher-to-student ratio (usually 1:15) so that every child receives individualized attention, care, and guidance."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12 text-center">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
            Nursery & Play Group
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-purple">
            Best Play School in Bihar Sharif
          </h1>
          <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto pt-4">
            Our Play Group and Nursery section focuses on early childhood learning through fun, creativity, and interactive activities. We create a safe and caring environment where children learn with joy and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left pt-12 items-center">
          
          <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/play_school_card.png" 
              alt="Toddlers playing and learning in a safe environment" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-brand-purple mb-6">Play School Highlights</h2>
            
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Activity-Based Learning</h4>
                <p className="text-sm text-slate-500 font-light mt-1">We engage children in hands-on activities that foster curiosity and early cognitive development.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Smart Classrooms</h4>
                <p className="text-sm text-slate-500 font-light mt-1">Interactive screens with colorful educational content to make learning visually stimulating.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Indoor & Outdoor Games</h4>
                <p className="text-sm text-slate-500 font-light mt-1">Dedicated play areas that promote physical health and gross motor skill development.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Trained Teachers</h4>
                <p className="text-sm text-slate-500 font-light mt-1">Compassionate educators specially trained in early childhood care and psychology.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Creative Activities</h4>
                <p className="text-sm text-slate-500 font-light mt-1">Arts, crafts, music, and dance sessions to allow children to express themselves freely.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-sm mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Safe Campus</h4>
                <p className="text-sm text-slate-500 font-light mt-1">CCTV-monitored secure premises ensuring the utmost safety for your little ones.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-lg mt-12">
          <p className="text-lg text-slate-700 font-medium italic">
            "We help children build communication skills, confidence, and strong learning foundations from an early age."
          </p>
        </div>

      </div>

      {/* Curriculum Framework */}
      <section className="py-20 bg-brand-purple text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-black text-white">Our Early Years Curriculum</h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full" />
            <p className="text-slate-200 font-light leading-relaxed">
              Our Play School curriculum is heavily inspired by the Montessori and Play-Way methods. We believe that young children learn best when they are actively engaged, exploring their environment, and having fun.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <span className="text-sm font-medium">Sensory Development Activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <span className="text-sm font-medium">Motor Skills (Fine & Gross) Enhancement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <span className="text-sm font-medium">Early Phonics & Number Recognition</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-white/10 rounded-2xl relative overflow-hidden shadow-md">
               <img src="/dance2.jpeg" alt="Play School Activity" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 bg-brand-orange/20 rounded-2xl relative overflow-hidden mt-8 shadow-md">
               <img src="/activity.jpeg" alt="Play School Art" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* A Day in Play School */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-brand-purple">A Day in Play School</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
            <p className="text-slate-600 font-light">A structured yet flexible routine keeps our little ones happy and engaged.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center font-black text-xl">1</div>
              <h4 className="font-bold text-brand-purple">Circle Time</h4>
              <p className="text-xs text-slate-600">Morning greetings, songs, and settling in.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center font-black text-xl">2</div>
              <h4 className="font-bold text-brand-purple">Creative Play</h4>
              <p className="text-xs text-slate-600">Art, blocks, puzzles, and imagination.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center font-black text-xl">3</div>
              <h4 className="font-bold text-brand-purple">Snack & Rest</h4>
              <p className="text-xs text-slate-600">Healthy eating habits and quiet time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 mx-auto flex items-center justify-center font-black text-xl">4</div>
              <h4 className="font-bold text-brand-purple">Outdoor Fun</h4>
              <p className="text-xs text-slate-600">Swings, slides, and physical games.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
           <h2 className="text-2xl font-black text-brand-purple">Parent-Teacher Partnership</h2>
           <p className="text-slate-600 font-light text-sm max-w-2xl mx-auto leading-relaxed">
             We believe that parents are a child's first teachers. We maintain an open-door policy and regular communication through daily diaries, monthly parent-teacher meetings, and special event invitations to ensure you are always a part of your child's learning journey.
           </p>
        </div>
      </section>

      {/* Internal Links Navigation */}
      <InternalLinks currentPage="/play-school" />

      {/* Global FAQ - Customized for Play School */}
      <GlobalFAQ customFaqs={playSchoolFaqs} />
    </div>
  );
}
