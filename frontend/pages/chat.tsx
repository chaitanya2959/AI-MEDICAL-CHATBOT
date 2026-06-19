import { useState } from "react";
import api from "../lib/api";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const email =
        localStorage.getItem("email") ||
        "chaitanya342@gmail.com";

      const res = await api.post("/chat", {
        email,
        message,
      });

      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      setResponse("Error communicating with AI");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI Medical Chatbot
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <textarea
          className="w-full border p-3 rounded-lg"
          rows={4}
          placeholder="Describe your symptoms..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>

      {response && (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
          <h2 className="text-xl font-bold mb-3">
            AI Response
          </h2>

          <p className="whitespace-pre-wrap">
            {response}
          </p>
        </div>
      )}
    </div>
  );
}