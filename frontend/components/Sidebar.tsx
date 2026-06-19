"use client";

import { useState } from "react";
import Link from "next/link";

const menu = [
  { href: "/dashboard", label: "Dashboard", icon: "🏠" },
  { href: "/chat", label: "AI Chat", icon: "💬" },
  { href: "/reports", label: "Reports", icon: "📄" },
  { href: "/images", label: "Image Analysis", icon: "🖼️" },
  { href: "/history", label: "History", icon: "📜" },
  { href: "/profile", label: "Profile", icon: "👤" },
  { href: "/login", label: "Login", icon: "🔐" },
  { href: "/register", label: "Register", icon: "📝" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`${open ? "w-72" : "w-20"} min-h-screen bg-slate-950 text-white transition-all duration-300 flex flex-col`}> 
      <div className="flex items-center justify-between p-5 border-b border-slate-800">
        {open && <div><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">AI MEDICAL </p><h2 className="text-xl font-bold">CHATBOT</h2></div>}
        <button onClick={() => setOpen(!open)} className="bg-cyan-600 hover:bg-cyan-500 rounded-xl px-3 py-2">☰</button>
      </div>

      <div className="p-4">
        <Link href="/chat">
          <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 p-3 font-semibold shadow-lg">{open ? "➕ Start New Consultation" : "+"}</button>
        </Link>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {menu.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-slate-800 cursor-pointer text-sm">
              <span className="text-lg">{item.icon}</span>
              {open && <span>{item.label}</span>}
            </div>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="rounded-2xl bg-slate-800 p-3 text-sm">
          <p className="text-slate-300">Signed in as</p>
          <p className="font-semibold">Guest User</p>
        </div>
      </div>
    </aside>
  );
}