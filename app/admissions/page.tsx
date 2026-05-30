"use client";

import { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";
import InternalLinks from "../components/InternalLinks";
import GlobalFAQ from "../components/GlobalFAQ";


export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    className: "Primary (Grades I-V)",
    phone: "",
    email: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { num: "01", name: "Submit Enquiry", detail: "Fill out the dynamic inquiry form online or visit the Sohsarai school admissions office." },
    { num: "02", name: "Campus Visit & Interview", detail: "Meet the academic counselors, tour our STEM labs, swimming pools, and theater halls." },
    { num: "03", name: "Cognitive Assessment", detail: "A basic diagnostic evaluation to gauge child numerical confidence and linguistic level." },
    { num: "04", name: "Document Verification", detail: "Submit birth coordinates, previous grade reports, and identification certificates." },
    { num: "05", name: "Enrolment & Welcome", detail: "Deposit fees, procure books/uniform kits, and start the exciting academic journey." }
  ];

  const eligibility = [
    { grade: "Primary Wing (Grades I - V)", age: "5.5 to 10 Years as of March 31st" },
    { grade: "Middle Wing (Grades VI - VIII)", age: "10.5 to 13 Years as of March 31st" },
    { grade: "Senior Wing (Grades IX - XII)", age: "13.5 to 17 Years as of March 31st" }
  ];

  const feeTable = [
    { item: "Admission Processing Fee (One-Time)", primary: "₹ 5,000", middle: "₹ 5,000", senior: "₹ 5,000" },
    { item: "Annual Campus Amenities Charge", primary: "₹ 8,000", middle: "₹ 10,000", senior: "₹ 12,000" },
    { item: "Monthly Tuition Fees", primary: "₹ 2,200", middle: "₹ 2,800", senior: "₹ 3,500" },
    { item: "Digital Lab & STEM Charge (Quarterly)", primary: "₹ 1,500", middle: "₹ 2,000", senior: "₹ 2,500" },
    { item: "Refundable Security Deposit", primary: "₹ 3,000", middle: "₹ 3,000", senior: "₹ 3,000" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.studentName && formData.phone) {
      setIsSubmitting(true);
      
      const newEnquiry = {
        studentName: formData.studentName,
        parentName: formData.parentName,
        className: formData.className,
        phone: formData.phone,
        email: formData.email,
        notes: formData.notes
      };

      // Try sending to Express REST API
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/enquiries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEnquiry),
        });
        
        if (response.ok) {
          console.log("Enquiry successfully uploaded to Express backend API!");
        } else {
          throw new Error("API responded with error");
        }
      } catch (err) {
        console.warn("Express backend API offline. Saving enquiry to LocalStorage database.");
        
        // Backup to LocalStorage so it can still be fetched by the admin dashboard offline!
        const saved = localStorage.getItem("edugen_enquiries");
        let current = [];
        if (saved) {
          current = JSON.parse(saved);
        }
        const localPost = {
          id: Date.now(),
          ...newEnquiry,
          dateSubmitted: new Date().toISOString(),
          status: "New" as const
        };
        current = [localPost, ...current];
        localStorage.setItem("edugen_enquiries", JSON.stringify(current));
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      studentName: "",
      parentName: "",
      className: "Primary (Grades I-V)",
      phone: "",
      email: "",
      notes: ""
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white">
      
      {/* 1. HEADER HERO */}
      <section className="relative bg-slate-50 py-16 md:py-24 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-100 text-[10px] font-black text-brand-orange uppercase tracking-wider shadow-sm">
            Session 2026-2027
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-purple">
            Admissions Open for Play Group to Class 12 Science
          </h1>
          <p className="text-base text-slate-900 font-light max-w-2xl mx-auto leading-relaxed">
            Review our simplified admission roadmap, age eligibility grids, transparent fee matrices, and submit your enquiry instantly.
          </p>
        </div>
      </section>

      {/* 1.2. SEO ADMISSIONS INTRO SECTION */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-center">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            Admissions are now open for the academic session. Parents looking for the best school in Bihar Sharif for quality education can apply for Play Group to Class 12 Science.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-6">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg">
              <h2 className="text-xl font-bold text-brand-purple mb-4">Admission Process</h2>
              <ol className="list-decimal pl-5 space-y-2 text-slate-700 font-light">
                <li>Fill out the admission form</li>
                <li>Submit required documents</li>
                <li>Student interaction or entrance test</li>
                <li>Confirmation of admission</li>
              </ol>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg">
              <h2 className="text-xl font-bold text-brand-orange mb-4">Required Documents</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 font-light">
                <li>Birth Certificate</li>
                <li>Passport Size Photographs</li>
                <li>Aadhaar Card</li>
                <li>Previous School Report Card</li>
                <li>Transfer Certificate (if applicable)</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 font-medium pt-4">
            For admission details, fee structure, and school visit, contact our admission office.
          </p>
        </div>
      </section>

      {/* 1.5. CAMPUS VISUAL STRIP */}
      <section className="py-12 bg-slate-950 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/mainbuilding.JPG"
                alt="Edugen Main Building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <p className="text-[9px] font-black text-brand-orange uppercase tracking-widest drop-shadow-lg">Campus</p>
                <p className="text-xs font-bold text-white drop-shadow-lg">Main Building</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/reception.JPG"
                alt="Edugen Reception"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <p className="text-[9px] font-black text-brand-orange uppercase tracking-widest drop-shadow-lg">Welcome</p>
                <p className="text-xs font-bold text-white drop-shadow-lg">Reception Area</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/class room.jpeg"
                alt="Smart Classroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <p className="text-[9px] font-black text-brand-orange uppercase tracking-widest drop-shadow-lg">Smart Tech</p>
                <p className="text-xs font-bold text-white drop-shadow-lg">Digital Classrooms</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/computerlab.jpeg"
                alt="Computer Lab"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <p className="text-[9px] font-black text-brand-orange uppercase tracking-widest drop-shadow-lg">STEM Lab</p>
                <p className="text-xs font-bold text-white drop-shadow-lg">Computer Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. ADMISSIONS ROADMAP */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-black tracking-widest text-brand-orange uppercase">Simplifying Processes</h2>
          <p className="text-3xl md:text-4xl font-black text-brand-purple">Your Admission Steps</p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((st) => (
            <div key={st.num} className="p-6.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm space-y-4 hover:bg-white hover:shadow-lg transition-all duration-300 relative">
              <div className="text-3xl font-black text-brand-orange/20 leading-none">{st.num}</div>
              <h3 className="text-sm font-extrabold text-brand-purple">{st.name}</h3>
              <p className="text-slate-900 text-[10.5px] leading-relaxed font-light">{st.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ELIGIBILITY & FEES */}
      <section id="fees" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Eligibility Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black text-brand-orange uppercase">Requirements</span>
              <h2 className="text-2xl md:text-3xl font-black text-brand-purple">Age Eligibility</h2>
              <p className="text-slate-900 text-xs font-light leading-relaxed">
                We strictly align age brackets with national co-education policies to maintain peer psychological safety.
              </p>
            </div>
            
            <div className="space-y-4">
              {eligibility.map((el) => (
                <div key={el.grade} className="p-5.5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-1.5">
                  <h4 className="text-xs font-extrabold text-brand-purple">{el.grade}</h4>
                  <p className="text-[11px] text-slate-900 font-light">Target Age: <span className="font-bold text-brand-orange">{el.age}</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Table Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black text-brand-purple uppercase">Transparent Fee Policy</span>
              <h2 className="text-2xl md:text-3xl font-black text-brand-purple">Fee Structure Guide</h2>
              <p className="text-slate-900 text-xs font-light leading-relaxed">
                No hidden costs. Detailed wing breakdown is listed below:
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-150 shadow-md overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-brand-purple text-white uppercase text-[9px] font-black tracking-widest">
                  <tr>
                    <th className="py-4.5 px-6">Description Item</th>
                    <th className="py-4.5 px-6">Primary</th>
                    <th className="py-4.5 px-6">Middle</th>
                    <th className="py-4.5 px-6">Senior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {feeTable.map((f, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-brand-purple">{f.item}</td>
                      <td className="py-4 px-6 font-semibold text-brand-orange">{f.primary}</td>
                      <td className="py-4 px-6 text-slate-900">{f.middle}</td>
                      <td className="py-4 px-6 text-slate-900">{f.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 4. DYNAMIC ENQUIRY FORM CONTAINER */}
      <section id="enquiry" className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 md:p-12 space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple to-brand-orange" />
          
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-brand-purple">Online Admissions Enquiry</h3>
            <p className="text-slate-900 text-xs font-light">Submit details and receive a direct verification response within 24 hours.</p>
          </div>

          {isSubmitted ? (
            /* Submission Success dialog */
            <div className="py-12 px-6 bg-orange-50/50 rounded-2xl border border-orange-100 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto text-3xl font-black shadow-lg">
                ✓
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <h4 className="text-base font-black text-brand-purple">Enquiry Registered Successfully!</h4>
                <p className="text-xs text-slate-655 font-light leading-relaxed">
                  Thank you, **{formData.parentName || "Parent"}**. We have recorded your admission interest for **{formData.studentName}** seeking admission in the **{formData.className}** category.
                </p>
                <p className="text-xs font-bold text-brand-orange">
                  Our Admissions Officer will contact you within 24 hours at phone number: {formData.phone}
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-brand-purple hover:bg-brand-purple-hover active:scale-[0.98] transition-all"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                {/* Student Name */}
                <div className="space-y-1.5">
                  <label htmlFor="studentName" className="font-extrabold text-brand-purple">Student's Full Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    required
                    placeholder="Enter student name..."
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white"
                  />
                </div>
                
                {/* Parent Name */}
                <div className="space-y-1.5">
                  <label htmlFor="parentName" className="font-extrabold text-brand-purple">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    required
                    placeholder="Enter parent name..."
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                {/* Class Seeked */}
                <div className="space-y-1.5">
                  <label htmlFor="className" className="font-extrabold text-brand-purple">Seeking Admission In *</label>
                  <select
                    id="className"
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white font-bold text-slate-700"
                  >
                    <option>Primary (Grades I-V)</option>
                    <option>Middle (Grades VI-VIII)</option>
                    <option>Senior Science Stream</option>
                    <option>Senior Commerce Stream</option>
                  </select>
                </div>

                {/* Mobile Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="font-extrabold text-brand-purple">Contact Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Enter 10-digit number..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-extrabold text-brand-purple">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white"
                  />
                </div>
              </div>

              {/* Remarks Notes */}
              <div className="space-y-1.5 text-xs">
                <label htmlFor="notes" className="font-extrabold text-brand-purple">Additional Notes / Previous School Details</label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Specify any special accomplishments, physical considerations, or queries..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-center py-4 rounded-xl text-sm font-extrabold text-white bg-brand-orange hover:bg-brand-orange-hover disabled:bg-slate-350 shadow-[0_0_15px_rgba(242,106,33,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? "Processing Enquiry..." : "Submit Official Enquiry Form"}
              </button>

            </form>
          )}

        </div>
      </section>

      {/* 5. INTERNAL LINKS */}
      <InternalLinks currentPage="/admissions" />
      
      {/* Global FAQ */}
      <GlobalFAQ />
    </div>
  );
}
