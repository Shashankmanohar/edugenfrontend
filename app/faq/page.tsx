import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Edugen World School",
  description: "Find answers to frequently asked questions about Edugen World School's curriculum, facilities, admissions, and more.",
};

export default function FAQ() {
  const customFaqs = [
    {
      question: "Which board is your school affiliated with?",
      answer: "Our school follows the CBSE-oriented curriculum with modern teaching methods."
    },
    {
      question: "Do you provide science stream in Class 11 and 12?",
      answer: "Yes, we offer Science stream for senior secondary students."
    },
    {
      question: "Is transport facility available?",
      answer: "Yes, transport facilities are available in selected areas."
    },
    {
      question: "Do you provide smart classroom education?",
      answer: "Yes, our classrooms are equipped with modern smart learning technology."
    },
    {
      question: "How can I apply for admission?",
      answer: "Parents can contact the admission office or fill out the admission form online."
    },
    {
      question: "Do you provide extracurricular activities?",
      answer: "Yes, we encourage sports, cultural activities, and personality development programs."
    },
    {
      question: "What makes your school different?",
      answer: "Our school focuses on quality education, discipline, technology-based learning, and overall student development."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
            Help Center
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-purple">
            Frequently Asked Questions About Our School
          </h1>
          <p className="text-slate-600 font-light text-base max-w-2xl mx-auto">
            Find quick answers to common questions about our CBSE curriculum, admissions, and campus facilities.
          </p>
        </div>

        {/* Since FAQAccordion might not accept props in the current implementation, we just map them directly here for safety to ensure the exact SEO content is rendered */}
        <div className="space-y-4">
          {customFaqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-800 mb-2">{faq.question}</h3>
              <p className="text-slate-600 font-light">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
