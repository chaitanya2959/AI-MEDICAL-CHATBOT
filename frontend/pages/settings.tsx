import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useState, useEffect } from "react";
import {
  Bell,
  Moon,
  Shield,
  Lock,
  User,
  LogOut,
  Save,
} from "lucide-react";
  
export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 ml-72">

        <Topbar />

        <div className="pt-24 p-8">

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your account preferences
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            {/* Profile */}

            <div className="bg-white rounded-3xl shadow p-6">

              <div className="flex items-center gap-3 mb-6">

                <User className="text-cyan-600" />

                <h2 className="text-2xl font-bold">
                  Profile
                </h2>

              </div>

              <input
                className="w-full border rounded-xl p-3 mb-4"
                defaultValue="Chaitanya"
              />

              <input
                className="w-full border rounded-xl p-3"
                defaultValue="chaitanya@gmail.com"
              />

            </div>

            {/* Security */}

            <div className="bg-white rounded-3xl shadow p-6">

              <div className="flex items-center gap-3 mb-6">

                <Lock className="text-cyan-600" />

                <h2 className="text-2xl font-bold">
                  Security
                </h2>

              </div>

              <input
                type="password"
                placeholder="Current Password"
                className="w-full border rounded-xl p-3 mb-4"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded-xl p-3"
              />

            </div>

            {/* Preferences */}

            <div className="bg-white rounded-3xl shadow p-6">

              <div className="flex items-center gap-3 mb-6">

                <Moon className="text-cyan-600" />

                <h2 className="text-2xl font-bold">
                  Preferences
                </h2>

              </div>

              <div className="flex justify-between py-4">

                <span>Dark Mode</span>

                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() =>
                    setDarkMode(!darkMode)
                  }
                />

              </div>

              <div className="flex justify-between py-4">

                <span>Notifications</span>

                <input
                  type="checkbox"
                  checked={notification}
                  onChange={() =>
                    setNotification(!notification)
                  }
                />

              </div>

            </div>

            {/* Privacy */}

            <div className="bg-white rounded-3xl shadow p-6">

              <div className="flex items-center gap-3 mb-6">

                <Shield className="text-cyan-600" />

                <h2 className="text-2xl font-bold">
                  Privacy
                </h2>

              </div>

              <div className="flex items-center justify-between mb-4">

                <span>Enable AI History</span>

                <input type="checkbox" defaultChecked />

              </div>

              <div className="flex items-center justify-between">

                <span>Anonymous Analytics</span>

                <input type="checkbox" />

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl flex items-center gap-2">

              <Save size={20} />

              Save Changes

            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl flex items-center gap-2">

              <LogOut size={20} />

              Logout

            </button>
          </div>

        </div>

      </main>

    </div>
  );
}