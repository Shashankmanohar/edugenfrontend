"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Enquiry {
  _id?: string;
  id?: number;
  studentName: string;
  parentName: string;
  className: string;
  phone: string;
  email?: string;
  notes?: string;
  dateSubmitted: string;
  status: "New" | "Contacted" | "Admitted" | "Closed";
}

const mockEnquiries: Enquiry[] = [
  {
    id: 101,
    studentName: "Aditya Shekhar",
    parentName: "Rakesh Kumar",
    className: "Senior Science Stream",
    phone: "+91 9570000764",
    email: "rakesh.kumar@gmail.com",
    notes: "Aditya is highly interested in robotics club and plans to prepare for JEE exams.",
    dateSubmitted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "New"
  },
  {
    id: 102,
    studentName: "Ananya Prasad",
    parentName: "Anjana Prasad",
    className: "Primary (Grades I-V)",
    phone: "+91 8294152491",
    email: "anjana@yahoo.com",
    notes: "Ananya is transfer student from Delhi, loves swimming and dance lessons.",
    dateSubmitted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Contacted"
  },
  {
    id: 103,
    studentName: "Devendra Verma",
    parentName: "Siddharth Verma",
    className: "Middle (Grades VI-VIII)",
    phone: "+91 9570000764",
    email: "siddharth.verma@outlook.com",
    notes: "Excellent scores in previous mathematics olympiads. Seeking fee scholarship terms.",
    dateSubmitted: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Admitted"
  },
  {
    id: 104,
    studentName: "Priyanka Roy",
    parentName: "Arun Roy",
    className: "Senior Commerce Stream",
    phone: "+91 8294152491",
    email: "arun.roy@gmail.com",
    notes: "Needs hosteling guidance and details on smart board class sizes.",
    dateSubmitted: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Closed"
  }
];

export default function AdminDashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [adminUser, setAdminUser] = useState<{ username: string; name: string; role: string } | null>(null);
  
  // Data State
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Notifications
  const [notification, setNotification] = useState("");

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("edugen_admin_token");
    const userStr = localStorage.getItem("edugen_admin_user");

    // Route Guard: Redirect to login if token is missing
    if (!token) {
      router.push("/admin/login");
      return;
    }

    if (userStr) {
      setAdminUser(JSON.parse(userStr));
    }

    // Load Enquiries from Express REST API
    const loadEnquiries = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/enquiries", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.ok) {
          const dbEnquiries = await response.json();
          // Seed localstorage
          setEnquiries(dbEnquiries);
          localStorage.setItem("edugen_enquiries", JSON.stringify(dbEnquiries));
        } else {
          throw new Error("Backend server response failed");
        }
      } catch (err) {
        console.warn("Backend API offline. Fetching from LocalStorage or mock records.");
        const saved = localStorage.getItem("edugen_enquiries");
        if (saved) {
          setEnquiries(JSON.parse(saved));
        } else {
          setEnquiries(mockEnquiries);
          localStorage.setItem("edugen_enquiries", JSON.stringify(mockEnquiries));
        }
      } finally {
        setLoading(false);
      }
    };

    loadEnquiries();
  }, [router]);

  if (!mounted) {
    return <div className="bg-slate-50 min-h-screen text-slate-900" />;
  }

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("edugen_admin_token");
    localStorage.removeItem("edugen_admin_user");
    router.push("/admin/login");
  };

  // Handle Status Update Patch
  const handleStatusChange = async (enquiryId: string | number, newStatus: "New" | "Contacted" | "Admitted" | "Closed") => {
    const token = localStorage.getItem("edugen_admin_token");
    setNotification(`Updating status to ${newStatus}...`);

    // Immediate UI update for smooth interactive feeling
    const updatedEnquiries = enquiries.map((enq) => {
      const idMatch = enq._id === enquiryId || enq.id === enquiryId;
      if (idMatch) {
        return { ...enq, status: newStatus };
      }
      return enq;
    });
    setEnquiries(updatedEnquiries);
    localStorage.setItem("edugen_enquiries", JSON.stringify(updatedEnquiries));

    try {
      const response = await fetch(`http://localhost:5000/api/enquiries/${enquiryId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setNotification("Status successfully synced with database!");
      } else {
        throw new Error("Patch failed");
      }
    } catch (err) {
      console.warn("Express backend offline. Saved status locally in browser.");
      setNotification("Saved status changes locally.");
    }

    setTimeout(() => setNotification(""), 2000);
  };

  // Filter inquiries
  const filteredEnquiries = enquiries.filter((enq) => {
    const matchesSearch = 
      enq.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      enq.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enq.className.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || enq.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Live Analytics Calculations
  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === "New").length;
  const admittedCount = enquiries.filter((e) => e.status === "Admitted").length;
  const conversionRate = totalCount ? Math.round((admittedCount / totalCount) * 100) : 0;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-24 selection:bg-orange-500/20 selection:text-orange-500">
      
      {/* Toast notifications */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 px-6 py-3.5 bg-orange-600 border border-orange-500 text-white rounded-xl shadow-2xl animate-in slide-in-from-top-4 duration-300 font-bold text-xs">
          {notification}
        </div>
      )}

      {/* Admin Dashboard Navigation Bar */}
      <nav className="bg-white border-slate-200 shadow-sm border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-200 bg-white/5 p-0.5">
              <Image
                src="/edugenlogo.png"
                alt="Edugen Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <span className="text-sm font-black text-slate-900 uppercase leading-none tracking-tight block">Edugen Hub</span>
              <span className="text-[9px] font-bold text-brand-orange uppercase tracking-wider block mt-0.5">Admin Management Control</span>
            </div>
          </div>

          {/* User controls */}
          <div className="flex items-center gap-6 text-xs font-bold">
            <div className="text-right hidden sm:block">
              <div className="text-slate-900 text-xs font-extrabold">{adminUser?.name || "Active Administrator"}</div>
              <span className="text-[9px] text-slate-600 font-bold uppercase tracking-wide">{adminUser?.role || "Administrator"}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-brand-purple uppercase text-[10px] tracking-wider transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-6 pt-12 space-y-12">
        
        {/* Header intro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Admissions Enquiry Dashboard</h1>
            <p className="text-xs text-slate-500 font-light">Monitor applicant rosters, review parent notes, and update candidate statuses.</p>
          </div>

          {/* Fast Actions */}
          <div className="flex gap-3">
            <Link
              href="/blog/create"
              className="px-5 py-2.5 rounded-lg text-xs font-black bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              ✍ Write Blog Post
            </Link>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-lg text-xs font-black bg-white border border-slate-200 text-slate-700 hover:text-brand-purple transition-colors flex items-center gap-2 cursor-pointer"
            >
              🌐 View Blog Portal
            </Link>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Enquiries */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 relative overflow-hidden flex flex-col justify-between h-28.5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Applications</span>
            <div className="text-3xl font-black text-slate-900">{totalCount}</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">Submitted inquiries since boot</div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm">📋</div>
          </div>

          {/* Card 2: New Applications */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 relative overflow-hidden flex flex-col justify-between h-28.5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pending Review</span>
            <div className="text-3xl font-black text-brand-orange">{newCount}</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">Active status: New</div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm">⏳</div>
          </div>

          {/* Card 3: Admitted Students */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 relative overflow-hidden flex flex-col justify-between h-28.5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Admitted Students</span>
            <div className="text-3xl font-black text-emerald-500">{admittedCount}</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">Active status: Admitted</div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm">🎓</div>
          </div>

          {/* Card 4: Conversion Rate */}
          <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-2xl p-6.5 relative overflow-hidden flex flex-col justify-between h-28.5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enrollment Conversion</span>
            <div className="text-3xl font-black text-slate-900">{conversionRate}%</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">Ratio of admitted to inquiries</div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-sm">📊</div>
          </div>

        </div>

        {/* Spreadsheet Section (Filtering & Table) */}
        <div className="bg-white border-slate-200 shadow-sm border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
          
          {/* Controls Bar */}
          <div className="p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4.5 bg-white">
            <div className="relative max-w-sm w-full">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 text-xs">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidate name, class, parent..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-xs placeholder-slate-400 text-slate-900"
              />
            </div>

            {/* Category tabs */}
            <div className="flex gap-1.5 overflow-x-auto">
              {["All", "New", "Contacted", "Admitted", "Closed"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider border transition-all ${
                    statusFilter === st
                      ? "bg-slate-50 border-slate-200 text-brand-orange shadow-md"
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Table Data */}
          {loading ? (
            <div className="text-center py-20 text-xs text-slate-500 font-bold">
              ⏳ Querying candidate list from REST server database...
            </div>
          ) : filteredEnquiries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[9px] font-bold tracking-widest">
                    <th className="py-4 px-6">Student Info</th>
                    <th className="py-4 px-6">Parent Info</th>
                    <th className="py-4 px-6">Grade / Stream</th>
                    <th className="py-4 px-6">Submit Date</th>
                    <th className="py-4 px-6">Remarks / Notes</th>
                    <th className="py-4 px-6 text-center">Status Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {filteredEnquiries.map((enq) => {
                    const uniqueKey = enq._id || String(enq.id);
                    return (
                      <tr key={uniqueKey} className="hover:bg-slate-100 transition-colors align-top">
                        
                        {/* Student name */}
                        <td className="py-5 px-6 font-extrabold text-slate-900">
                          <div className="flex flex-col gap-0.5">
                            <span>{enq.studentName}</span>
                            <a href={`tel:${enq.phone}`} className="text-[10px] font-semibold text-brand-orange hover:underline">{enq.phone}</a>
                          </div>
                        </td>

                        {/* Parent name */}
                        <td className="py-5 px-6 font-bold text-slate-700">
                          <div className="flex flex-col gap-0.5">
                            <span>{enq.parentName}</span>
                            <span className="text-[10px] text-slate-500 font-normal truncate max-w-[140px]">{enq.email || "No email listed"}</span>
                          </div>
                        </td>

                        {/* Grade */}
                        <td className="py-5 px-6 font-bold text-brand-orange uppercase text-[10px] tracking-wide">
                          {enq.className}
                        </td>

                        {/* Date submitted */}
                        <td className="py-5 px-6 font-normal text-slate-500">
                          {new Date(enq.dateSubmitted).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </td>

                        {/* Remarks */}
                        <td className="py-5 px-6 text-[10.5px] leading-relaxed text-slate-600 font-light max-w-xs break-words">
                          {enq.notes || "—"}
                        </td>

                        {/* Status selector */}
                        <td className="py-5 px-6 text-center">
                          <select
                            value={enq.status}
                            onChange={(e) => handleStatusChange(enq._id || enq.id!, e.target.value as any)}
                            className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider focus:outline-none cursor-pointer border ${
                              enq.status === "New" 
                                ? "bg-orange-500/10 border-orange-500/35 text-brand-orange"
                                : enq.status === "Contacted"
                                ? "bg-purple-500/10 border-purple-500/35 text-purple-400"
                                : enq.status === "Admitted"
                                ? "bg-emerald-500/10 border-emerald-500/35 text-emerald-400"
                                : "bg-slate-100 border-slate-300 text-slate-600"
                            }`}
                          >
                            <option value="New" className="bg-white text-slate-800">New</option>
                            <option value="Contacted" className="bg-white text-slate-800">Contacted</option>
                            <option value="Admitted" className="bg-white text-slate-800">Admitted</option>
                            <option value="Closed" className="bg-white text-slate-800">Closed</option>
                          </select>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20 text-xs text-slate-500 font-bold space-y-4">
              <div>🚫 No student admissions enquiries found matching search filters.</div>
              <button
                onClick={() => { setSearchQuery(""); setStatusFilter("All"); }}
                className="px-4 py-2 rounded-lg bg-slate-50 hover:bg-white border border-slate-200 text-slate-900 uppercase text-[9px] tracking-wider transition-colors cursor-pointer"
              >
                Clear Search filters
              </button>
            </div>
          )}

        </div>

      </main>

    </div>
  );
}
