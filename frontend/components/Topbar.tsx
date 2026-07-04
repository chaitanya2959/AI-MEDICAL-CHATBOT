import { Bell, Moon, UserCircle } from "lucide-react";

export default function Topbar() {
  const email =
    typeof window !== "undefined"
      ? localStorage.getItem("email")
      : "";

  return (
    <header className="bg-slate-900 border-b border-slate-800 px-8 py-5 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold text-white">
           AI MEDICAL DASHBOARD
        </h1>

        <p className="text-slate-400 mt-1">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="text-slate-300 hover:text-cyan-400">
          <Bell size={22} />
        </button>

        <button className="text-slate-300 hover:text-cyan-400">
          <Moon size={22} />
        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            className="text-cyan-400"
            size={42}
          />

          <div>
            <h3 className="text-white font-semibold">
              {email || "User"}
            </h3>

            <p className="text-slate-400 text-sm">
              Medical AI User
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}