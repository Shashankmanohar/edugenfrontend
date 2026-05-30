"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface GlobalFAQProps {
  customFaqs?: FAQItem[];
}

export default function GlobalFAQ({ customFaqs }: GlobalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFaqs: FAQItem[] = [
    {
      question: "Which classes are available in your school?",
      answer: "We offer education from Play Group to Class 12 Science."
    },
    {
      question: "Does your school provide science stream?",
      answer: "Yes, we provide Science stream for Classes 11 and 12."
    },
    {
      question: "Is transportation facility available?",
      answer: "Yes, transportation facilities are available for nearby areas."
    },
    {
      question: "Do you provide smart classroom learning?",
      answer: "Yes, our school uses modern smart classroom technology for better learning."
    },
    {
      question: "How can parents apply for admission?",
      answer: "Parents can contact the school office or fill out the admission form."
    }
  ];

  const displayFaqs = customFaqs || defaultFaqs;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: displayFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-brand-purple">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-brand-purple shadow-md' : 'border-slate-200 hover:border-brand-orange/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold ${isOpen ? 'text-brand-purple' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 text-slate-600 font-light border-t border-slate-100 mt-2 animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
