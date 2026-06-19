// pages/dashboard.tsx

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ChatBox from "../components/ChatBox";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-6 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-slate-500">Total Chats</h3>
              <p className="text-3xl font-bold">120</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-slate-500">Reports</h3>
              <p className="text-3xl font-bold">15</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <h3 className="text-slate-500">Images Analyzed</h3>
              <p className="text-3xl font-bold">28</p>
            </div>
          </div>

          {/* Chat Section */}
          <div className="bg-white rounded-3xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">
              AI Medical Assistant
            </h2>

            <ChatBox />
          </div>

          {/* Image Analysis */}
          <div
            id="image-analysis"
            className="bg-white rounded-3xl p-6 shadow"
          >
            <h2 className="text-2xl font-bold mb-4">
              Image Analysis
            </h2>

            <input
              type="file"
              accept="image/*"
              className="border rounded-xl p-3"
            />

            <button
              className="ml-3 bg-cyan-600 text-white px-5 py-3 rounded-xl"
            >
              Analyze Image
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}