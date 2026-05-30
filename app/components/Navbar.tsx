"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Academics", 
      dropdown: [
        { name: "Academics Overview", href: "/academics" },
        { name: "Play School", href: "/play-school" },
        { name: "Science Stream", href: "/science-stream" },
        { name: "Faculty", href: "/faculty" },
        { name: "Result", href: "/result" },
      ]
    },
    { 
      name: "Admissions", 
      dropdown: [
        { name: "Admissions Info", href: "/admissions" },
        { name: "FAQ", href: "/faq" },
      ]
    },
    { 
      name: "Campus", 
      dropdown: [
        { name: "Facilities", href: "/facilities" },
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Transport", href: "/transport" },
        { name: "Activity", href: "/activity" },
        { name: "Gallery", href: "/gallery" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full z-50 sticky top-0 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
      
      {/* 1. TOP BAR (DARK VIOLET) */}
      <div className="w-full bg-brand-purple text-white py-2 px-6 flex flex-col sm:flex-row items-center justify-between text-xs font-bold gap-2">
        <div className="flex items-center gap-2 tracking-wider">
          {/* Help Desk Icon */}
          <svg className="w-4 h-4 text-brand-orange animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>HELP DESK :</span>
          <a href="tel:+919570000764" className="hover:text-brand-orange transition-colors">
            +91 9570000764
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="tracking-widest opacity-95">FOLLOW US :</span>
          <div className="flex gap-2">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1BVkWst3zV/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white text-brand-purple hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Facebook">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/edugen.world.school?igsh=MW5sbjRsMTc2cjJneA==" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white text-brand-purple hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Instagram">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="w-6 h-6 rounded-full bg-white text-brand-purple hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200" aria-label="WhatsApp">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 12.01.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.457 3.39 1.32 4.842l-.99 3.612 3.698-.958zm12.38-6.195c-.328-.163-1.936-.944-2.235-1.051-.299-.11-.518-.163-.736.163-.217.327-.84.843-1.03 1.051-.188.209-.379.23-.707.067-.327-.163-1.383-.503-2.634-1.608-.973-.859-1.63-1.921-1.821-2.247-.19-.327-.02-.504.143-.667.148-.147.328-.379.492-.57.164-.189.218-.326.327-.544.11-.218.055-.408-.027-.571-.082-.164-.736-1.748-1.009-2.395-.265-.63-.538-.545-.736-.554-.19-.009-.408-.01-.626-.01-.218 0-.571.08-.87.407-.299.327-1.143 1.103-1.143 2.693 0 1.59 1.17 3.125 1.334 3.342.163.218 2.3 3.473 5.571 4.867.778.332 1.385.53 1.859.678.782.246 1.493.211 2.057.128.629-.093 1.935-.78 2.207-1.497.272-.717.272-1.332.19-1.468-.08-.136-.299-.217-.626-.38z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-6 h-6 rounded-full bg-white text-brand-purple hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200" aria-label="YouTube">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.2 12 3.2 12 3.2s-7.518 0-9.388.853a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11C4.482 20.8 12 20.8 12 20.8s7.518 0 9.388-.853a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border border-slate-100 p-0.5 shadow-md">
            <Image
              src="/edugenlogo.png"
              alt="Edugen World School Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-brand-purple uppercase leading-tight">
              Edugen World School
            </span>
            <span className="text-[9px] font-extrabold tracking-wide text-slate-900 uppercase leading-none">
              CBSE Affiliation No : 330829
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group py-6 -my-6">
                  <button className="text-xs font-black uppercase tracking-wide text-slate-800 hover:text-brand-purple transition-colors duration-200 flex items-center gap-1">
                    {link.name}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-0 hidden group-hover:flex flex-col bg-white border border-slate-100 shadow-xl rounded-xl py-3 min-w-[220px] z-50">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-700 hover:text-brand-orange hover:bg-slate-50 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href!}
                className={`text-xs font-black uppercase tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-brand-orange"
                    : "text-slate-800 hover:text-brand-purple"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Enquiry Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/admissions#enquiry"
            className="px-6 py-2.5 rounded-full text-xs font-black text-white bg-brand-purple hover:bg-brand-purple-hover shadow-[0_0_15px_rgba(242,106,33,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 tracking-wider"
          >
            ENQUIRE NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-purple hover:bg-slate-50 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-30 left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-250">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-1">
              {link.dropdown ? (
                <>
                  <span className="text-sm font-black uppercase text-brand-purple py-1.5 opacity-50">
                    {link.name}
                  </span>
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 mb-2">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-bold uppercase text-slate-700 hover:text-brand-orange py-1"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black uppercase text-slate-800 hover:text-brand-purple py-1.5"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <hr className="border-slate-100 my-2" />
          <Link
            href="/admissions#enquiry"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-full text-sm font-black text-white bg-brand-purple hover:bg-brand-purple-hover shadow-[0_0_15px_rgba(242,106,33,0.4)]"
          >
            ENQUIRE NOW
          </Link>
        </div>
      )}
    </header>
  );
}
