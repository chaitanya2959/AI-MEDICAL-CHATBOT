"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Image,
  History,
  User,
  Settings,
  LogOut,
  HeartPulse,
} from "lucide-react";
export default function Sidebar() {
  const router = useRouter();

  const menu = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/chat",
      label: "AI Chat",
      icon: MessageSquare,
    },
    {
      href: "/reports",
      label: "Reports",
      icon: FileText,
    },
    {
      href: "/images",
      label: "Image Analysis",
      icon: Image,
    },
    {
      href: "/history",
      label: "History",
      icon: History,
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/login");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-slate-950 border-r border-slate-800 flex flex-col z-40">

      <div className="p-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="bg-cyan-600 p-3 rounded-xl">
            <HeartPulse className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              Medical AI
            </h1>

            <p className="text-cyan-400 text-sm">
              CHATBOT
            </p>
          </div>

        </div>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 p-4 rounded-2xl transition cursor-pointer
                ${
                  router.pathname === item.href
                    ? "bg-cyan-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon size={22} />

                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl py-3"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}