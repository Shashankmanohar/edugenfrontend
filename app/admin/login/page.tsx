"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  // Credentials State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // Feedback state
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setMounted(true);
    // If already logged in, redirect to admin dashboard instantly
    if (localStorage.getItem("edugen_admin_token")) {
      router.push("/admin");
    }
  }, [router]);

  if (!mounted) {
    return <div className="bg-slate-50 min-h-screen text-slate-900" />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg("Please enter both username and password fields.");
      return;
    }

    setIsLoggingIn(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg("Authentication successful! Loading panel...");
        // Save JWT session credentials
        localStorage.setItem("edugen_admin_token", data.token);
        localStorage.setItem("edugen_admin_user", JSON.stringify(data.user));
        
        setTimeout(() => {
          setIsLoggingIn(false);
          router.push("/admin");
        }, 1200);
      } else {
        setErrorMsg(data.error || "Invalid username or password credentials.");
        setIsLoggingIn(false);
      }
    } catch (err) {
      console.warn("Backend API offline. Running local developer mock login bypass...");
      
      // Developer local bypass to ensure they can test the uploader out-of-the-box!
      if (username === "admin" && password === "adminpassword123") {
        setSuccessMsg("Offline developer bypass active! Redirecting...");
        localStorage.setItem("edugen_admin_token", "mock_developer_token_offline");
        localStorage.setItem("edugen_admin_user", JSON.stringify({ username: "admin", name: "Mock Admin Dev", role: "Administrator" }));
        
        setTimeout(() => {
          setIsLoggingIn(false);
          router.push("/admin");
        }, 1200);
      } else {
        setErrorMsg("Failed to connect to authentication server. Default admin credentials: admin / adminpassword123.");
        setIsLoggingIn(false);
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center px-6 relative overflow-hidden selection:bg-orange-500/20 selection:text-orange-500">
      
      {/* Premium backdrop glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card Container */}
      <div className="w-full max-w-[420px] bg-white border-slate-200 shadow-sm border border-slate-200 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden space-y-8 animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange to-brand-purple" />

        {/* Brand Insignia */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Link href="/" className="relative w-16 h-16 overflow-hidden rounded-full border border-slate-200 bg-white/5 p-1 shadow-md block">
            <Image
              src="/edugenlogo.png"
              alt="Edugen School Seal"
              fill
              className="object-cover"
              sizes="64px"
            />
          </Link>
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Admin Gatekeeper</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Edugen Management Portal</p>
          </div>
        </div>

        {/* Feedback Messages */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold text-center animate-in fade-in duration-200">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold text-center animate-in fade-in duration-200">
            {successMsg}
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleLogin} className="space-y-5 text-xs">
          
          <div className="space-y-1.5">
            <label htmlFor="username" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">ADMIN USERNAME</label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username..."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-slate-800 placeholder-slate-400 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">SECURE PASSWORD</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-slate-800 placeholder-slate-400"
            />
          </div>


          {/* Submit */}
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-orange-600 hover:bg-orange-700 disabled:bg-slate-100 transition-all uppercase tracking-wider cursor-pointer shadow-lg shadow-orange-600/20 active:scale-[0.98]"
          >
            {isLoggingIn ? "Authenticating Session..." : "Authorize Login"}
          </button>
        </form>

        {/* Back Link */}
        <div className="text-center">
          <Link href="/" className="text-slate-500 hover:text-slate-700 transition-colors uppercase font-bold text-[9px] tracking-widest">
            ← Return to public website
          </Link>
        </div>

      </div>

    </div>
  );
}
