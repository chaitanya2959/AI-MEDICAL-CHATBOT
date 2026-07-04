import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import api from "../lib/api";

export default function History() {
  const [history, setHistory] = useState<any[]>([]);
  const [totalChats, setTotalChats] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get("/history");

      setHistory(response.data.history);
      setTotalChats(response.data.total_chats);
    } catch (error) {
      console.error("History Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Loading History...</h1>
      </div>
    );
  }

  return (
  <div className="flex min-h-screen bg-slate-100">

    <Sidebar />

    <main className="flex-1 ml-72">

      <Topbar />

      <div className="pt-24 px-8 pb-10">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Chat History
            </h1>

            <p className="text-slate-500 mt-2">
              View all previous AI conversations.
            </p>

          </div>

          <div className="bg-cyan-600 text-white px-6 py-4 rounded-2xl shadow-lg">

            <p className="text-sm">
              Total Chats
            </p>

            <h2 className="text-3xl font-bold">
              {totalChats}
            </h2>

          </div>

        </div>

        {/* Empty */}

        {history.length === 0 && (

          <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

            <h2 className="text-2xl font-bold text-slate-700">
              No Chat History
            </h2>

            <p className="text-slate-500 mt-3">
              Your conversations will appear here.
            </p>

          </div>

        )}

        {/* History */}

        <div className="space-y-8">

          {history.map((chat) => (

            <div
              key={chat.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition"
            >

              {/* User */}

              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-5">

                <h3 className="text-xl font-bold">
                  👤 User Question
                </h3>

              </div>

              <div className="p-8 border-b">

                <p className="text-slate-700 leading-8">
                  {chat.user_message}
                </p>

              </div>

              {/* AI */}

              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-5">

                <h3 className="text-xl font-bold">
                  🤖 AI Response
                </h3>

              </div>

              <div className="p-8 bg-slate-50">

                <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-700">
                  {chat.ai_response}
                </pre>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  </div>
);
}