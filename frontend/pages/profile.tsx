import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function ProfilePage() {
  return <div className="flex min-h-screen bg-slate-100 text-slate-900"><Sidebar /><main className="flex-1"><Topbar /> <div className="p-8 grid md:grid-cols-2 gap-6"><article className="rounded-3xl bg-white p-8 shadow-md border border-slate-200"><h1 className="text-2xl font-bold">Profile</h1><p className="text-slate-500 mt-2">Patient and clinician profile details</p><ul className="mt-6 space-y-3 text-sm"><li><strong>Name:</strong> Guest User</li><li><strong>Email:</strong> guest@example.com</li><li><strong>Plan:</strong> AI Medical Premium</li><li><strong>Access:</strong> Chat, Reports, Image Analysis</li></ul></article><article className="rounded-3xl bg-gradient-to-r from-cyan-700 to-blue-800 p-8 text-white shadow-xl"><h2 className="text-xl font-semibold">AI Assistant status</h2><p className="mt-3 text-cyan-100">Connected to backend endpoints for chat, history, and diagnostics. Personalization and secure profiles can be extended from this point.</p></article></div></main></div>;
}
