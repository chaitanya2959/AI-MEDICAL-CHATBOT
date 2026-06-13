"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } h-screen bg-slate-950 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-800">
        {open && (
          <h1 className="text-xl font-bold">
            🏥 Medical AI
          </h1>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="bg-cyan-600 px-3 py-2 rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* New Chat */}
      <div className="p-4">
        <button className="w-full bg-cyan-600 hover:bg-cyan-500 p-3 rounded-xl">
          {open ? "➕ New Chat" : "+"}
        </button>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2 px-3">

        <Link href="/dashboard">
          <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
            🏠 {open && "Dashboard"}
          </div>
        </Link>

        <Link href="/chat">
          <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
            💬 {open && "AI Chat"}
          </div>
        </Link>

        <Link href="/reports">
          <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
            📄 {open && "Reports"}
          </div>
        </Link>

        <Link href="/images">
          <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
            🖼 {open && "Images"}
          </div>
        </Link>

        <Link href="/history">
          <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
            📜 {open && "History"}
          </div>
        </Link>

        <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
          🎤 {open && "Voice Assistant"}
        </div>

        <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
          📊 {open && "Analytics"}
        </div>

        <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
          ❤️ {open && "Health Overview"}
        </div>

        <div className="hover:bg-slate-800 p-3 rounded-xl cursor-pointer">
          ⚙️ {open && "Settings"}
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="mt-auto p-4 border-t border-slate-800">
        <div className="bg-slate-800 p-3 rounded-xl">
          👤 {open && "Chaitanya"}
        </div>
      </div>
    </div>
  );
}