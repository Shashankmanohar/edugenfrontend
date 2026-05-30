import Link from "next/link";

const allPages = [
  {
    href: "/",
    label: "Home",
    description: "Welcome to Edugen World School",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "group-hover:text-brand-purple",
    iconBg: "bg-purple-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white"
  },
  {
    href: "/about",
    label: "About Us",
    description: "Our history, mission & leadership",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "group-hover:text-brand-orange",
    iconBg: "bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
  },
  {
    href: "/academics",
    label: "Academics",
    description: "Curriculum, CBSE streams & facilities",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "group-hover:text-brand-purple",
    iconBg: "bg-purple-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white"
  },
  {
    href: "/admissions",
    label: "Admissions",
    description: "Fees, eligibility & enquiry form",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "group-hover:text-brand-orange",
    iconBg: "bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
  },
  {
    href: "/blog",
    label: "Blog & News",
    description: "School updates & educational insights",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    color: "group-hover:text-brand-purple",
    iconBg: "bg-purple-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white"
  },
  {
    href: "/contact",
    label: "Contact Us",
    description: "Get in touch with our team",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "group-hover:text-brand-orange",
    iconBg: "bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
  }
];

interface InternalLinksProps {
  /** The href of the current page – that card will be highlighted differently */
  currentPage?: string;
}

export default function InternalLinks({ currentPage = "" }: InternalLinksProps) {
  const otherPages = allPages.filter((p) => p.href !== currentPage);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-[10px] font-black tracking-widest text-brand-orange uppercase">
            Explore More
          </span>
          <p className="text-xl md:text-2xl font-black text-brand-purple">
            Navigate Edugen World School
          </p>
          <div className="w-12 h-0.5 bg-brand-orange mx-auto rounded-full" />
        </div>

        {/* Link Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-purple/20 hover:-translate-y-1 transition-all duration-250"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-250 ${page.iconBg}`}>
                {page.icon}
              </div>
              <div className="space-y-0.5">
                <div className={`text-xs font-black text-slate-800 uppercase tracking-wide transition-colors duration-200 ${page.color}`}>
                  {page.label}
                </div>
                <div className="text-[10px] text-slate-900 font-light leading-tight">
                  {page.description}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Action Strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <Link
            href="/admissions#enquiry"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Enquire for Admission
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-brand-purple border border-brand-purple/30 hover:border-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call: +91 9570000764
          </Link>
        </div>

      </div>
    </section>
  );
}
