import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white border-t border-slate-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        
        {/* Column 1: School Identity & Address */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-slate-800 bg-white/10 p-0.5 shadow-md">
              <Image
                src="/edugenlogo.png"
                alt="Edugen World School Logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white uppercase leading-tight">
                Edugen
              </span>
              <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase leading-none">
                World School
              </span>
            </div>
          </Link>
          <div className="text-white text-xs leading-relaxed font-light">
            Instilling academic excellence, ethical core values, leadership initiatives, and critical inquiry in every child to shape standard futures.
          </div>
          <div className="space-y-3.5 text-xs text-white">
            <div className="flex items-start gap-2.5">
              <span className="font-extrabold text-white">A:</span>
              <span className="text-white">Back of Kisan College, Salempur, Sohsarai, Biharsharif (Nalanda), Bihar - 803118</span>
            </div>
            <div className="flex gap-2.5">
              <span className="font-extrabold text-white">P:</span>
              <div className="flex flex-col">
                <a href="tel:+919570000764" className="text-white hover:text-brand-orange transition-colors font-medium">+91 9570000764</a>
                <a href="tel:+918294152491" className="hover:text-brand-orange transition-colors text-[10px] text-white mt-0.5">+91 8294152491</a>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="font-extrabold text-white">E:</span>
              <div className="flex flex-col">
                <a href="mailto:info@edugen.in" className="text-white hover:text-brand-orange transition-colors font-medium">info@edugen.in</a>
                <a href="mailto:edugenworldschool@gmail.com" className="hover:text-brand-orange transition-colors text-[10px] text-white mt-0.5">edugenworldschool@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Small Interactive Map Embed */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md border border-slate-800 bg-slate-900/60 relative mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.0185290205327!2d85.5115691!3d25.2251563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f28cafb1ce1ec7%3A0x635931615b8668f!2sEdugen%20World%20School!5e1!3m2!1sen!2sin!4v1779947566526!5m2!1sen!2sin" 
              className="w-full h-full border-0 absolute inset-0 opacity-85 hover:opacity-100 transition-opacity"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Edugen World School Map Preview"
            />
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-brand-orange pl-3">
            Quick Navigation
          </h4>
          <div className="flex flex-col gap-3 text-xs text-white">
            <Link href="/" className="hover:text-white transition-colors">Home Portal</Link>
            <Link href="/about" className="hover:text-white transition-colors">About History & Vision</Link>
            <Link href="/academics" className="hover:text-white transition-colors">Academic Programs</Link>
            <Link href="/admissions" className="hover:text-white transition-colors">Admission Roadmap</Link>
            <Link href="/blog" className="hover:text-white transition-colors">School Blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Information</Link>
          </div>
        </div>

        {/* Column 3: Academic Levels */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-brand-orange pl-3">
            Academics
          </h4>
          <div className="flex flex-col gap-3 text-xs text-white">
            <Link href="/academics" className="hover:text-white transition-colors">Primary Wing (Grades I-V)</Link>
            <Link href="/academics" className="hover:text-white transition-colors">Middle Wing (Grades VI-VIII)</Link>
            <Link href="/academics" className="hover:text-white transition-colors">Senior Wing (Grades IX-XII)</Link>
            <span className="hover:text-white transition-colors cursor-pointer">Science & Commerce Streams</span>
            <span className="hover:text-white transition-colors cursor-pointer">Advanced Co-curricular Clubs</span>
          </div>
        </div>

        {/* Column 4: Affiliations & Accreditations */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase border-l-2 border-brand-orange pl-3">
            Accreditations
          </h4>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-[10px] font-bold text-white">
              CBSE Proposed Curriculum
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-[10px] font-bold text-white">
              ISO 9001:2015 Standards
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-[10px] font-bold text-white">
              Digital STEM Laboratory
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-[10px] font-bold text-white">
              Green Eco Campus
            </span>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex gap-3.5">
            <a href="https://www.facebook.com/share/1BVkWst3zV/" target="_blank" rel="noopener noreferrer" className="w-8.5 h-8.5 rounded-full bg-slate-900 hover:bg-brand-orange border border-slate-850 hover:border-brand-orange text-white hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="#" className="w-8.5 h-8.5 rounded-full bg-slate-900 hover:bg-brand-orange border border-slate-850 hover:border-brand-orange text-white hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/edugen.world.school?igsh=MW5sbjRsMTc2cjJneA==" target="_blank" rel="noopener noreferrer" className="w-8.5 h-8.5 rounded-full bg-slate-900 hover:bg-brand-orange border border-slate-850 hover:border-brand-orange text-white hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 pb-12 sm:pb-4 border-t border-slate-800/80 text-xs text-white flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left space-y-1.5 w-full sm:w-auto">
          <div>© 2026 Edugen World School. All Rights Reserved.</div>
          <div>Developed by <a href="https://www.webfloratechnologies.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors font-semibold">Webflora Technologies</a></div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-4 text-white w-full sm:w-auto">
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">Terms of Service</span>
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">Admissions Guidelines</span>
        </div>
      </div>
    </footer>
  );
}
