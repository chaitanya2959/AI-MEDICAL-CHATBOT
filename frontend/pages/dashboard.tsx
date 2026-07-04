// pages/dashboard.tsx

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardStats from "../components/DashboardStats";
import RecentActivity from "../components/RecentActivity";
import AIHealthAssistant from "../components/AIHealthAssistant";

export default function Dashboard() {
  return (
    
    <div className="flex bg-slate-950">
      <Sidebar />

    <main className="flex-1 ml-72">
        <Topbar />

      <div className="pt-6 p-6">
            {/* Dashboard Content */}
      </div>

        <div className="p-6 space-y-6">

          {/* Stats */}
          <DashboardStats />

          <div className="mt-6">
            <AIHealthAssistant />
          </div>
          <div className="mt-6">
            <RecentActivity />
          </div>
          </div>
      </main>
    </div>
  );
}