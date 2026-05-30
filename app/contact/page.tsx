import { Metadata } from "next";
import Image from "next/image";
import GlobalFAQ from "../components/GlobalFAQ";
import ContactForm from "../components/ContactForm";
import InternalLinks from "../components/InternalLinks";

export const metadata: Metadata = {
  title: "Contact the Best English Medium School in Nalanda | Edugen World School",
  description: "Visit our campus in Sohsarai, Bihar Sharif. For admission inquiries in the top CBSE school near Kisan College, feel free to contact us.",
};

export default function Contact() {
  const contactFaqs = [
    {
      question: "What are your school office timings?",
      answer: "Our office is open from Monday to Saturday, between 8:00 AM and 3:00 PM. We are closed on Sundays and public holidays."
    },
    {
      question: "Can I schedule a campus tour?",
      answer: "Yes, we welcome parents to visit our campus. You can schedule a tour by calling our admission office or filling out the contact form."
    },
    {
      question: "How long does it take to get a reply via the contact form?",
      answer: "We typically respond to all online inquiries within 24 working hours."
    },
    {
      question: "Is there a specific contact number for admission queries?",
      answer: "Yes, you can directly call our admission counselors at +91 9570000764 or +91 9570000765."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
              Get In Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple leading-tight">
              Contact the Best School in Bihar Sharif
            </h1>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              We welcome parents and students to visit our campus and learn more about our educational environment. For admission inquiries and other information, feel free to contact us.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/reception.JPG" 
              alt="Edugen World School Reception" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Right Column: Contact Details */}
          <div className="space-y-8 lg:pl-10">
            
            {/* Visit Us */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-brand-purple flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Visit Us</h3>
                <div className="text-slate-600 font-light text-sm leading-relaxed">
                  Edugen World School<br />
                  Back of Kisan College, Salempur, Sohsarai<br />
                  Biharsharif (Nalanda), Bihar - 803118
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Call Us</h3>
                <div className="text-slate-600 font-light text-sm leading-relaxed">
                  +91 9570000764<br />
                  +91 8294152491
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Email Us</h3>
                <div className="text-slate-600 font-light text-sm leading-relaxed">
                  edugenworldschool@gmail.com<br />
                  info@edugen.in
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Office Hours</h3>
                <div className="text-slate-600 font-light text-sm leading-relaxed">
                  Monday – Saturday: 8:00 AM – 4:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="pb-16 pt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-200">
            <iframe
              src="https://maps.google.com/maps?q=Edugen%20World%20School,%20Sohsarai,%20Bihar%20Sharif&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edugen World School Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Internal Links Navigation */}
      <InternalLinks currentPage="/contact" />

      {/* Global FAQ - Customized for Contact */}
      <GlobalFAQ customFaqs={contactFaqs} />
      
    </div>
  );
}
