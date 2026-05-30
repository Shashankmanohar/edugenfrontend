"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Map generic contact form to the existing admissions enquiry backend
      const payload = {
        studentName: "Contact Form Inquiry",
        parentName: formData.name,
        className: formData.subject || "General",
        phone: "N/A", // Not collected in contact form
        email: formData.email,
        notes: formData.message
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800">Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Ram Kumar" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800">Email <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="ram@gmail.com" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-800">Subject <span className="text-red-500">*</span></label>
        <select 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all text-sm bg-white"
        >
          <option value="" disabled>Select a topic</option>
          <option value="Admissions">Admissions</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Careers">Careers</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-800">Message <span className="text-red-500">*</span></label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          rows={5} 
          placeholder="How can we help you?" 
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all text-sm resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
      >
        {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
        {status !== "loading" && (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
      </button>

      {status === "success" && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium border border-green-200">
          Your message has been sent successfully. We will get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-200">
          There was an error sending your message. Please try again later.
        </div>
      )}
    </form>
  );
}
