import { useEffect, useState } from "react";
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
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-2">
        Chat History
      </h1>

      <p className="mb-8 text-gray-600">
        Total Chats: {totalChats}
      </p>

      <div className="space-y-6">
        {history.map((chat) => (
          <div
            key={chat.id}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="mb-4">
              <h3 className="font-bold text-blue-600">
                User Question
              </h3>

              <p className="mt-2">
                {chat.user_message}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-600">
                AI Response
              </h3>

              <p className="mt-2 whitespace-pre-wrap">
                {chat.ai_response}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}