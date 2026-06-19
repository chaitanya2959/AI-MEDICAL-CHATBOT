// components/ChatBox.tsx

import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <div>
      <div className="h-80 border rounded-2xl p-4 mb-4 overflow-y-auto bg-slate-50">
        AI responses will appear here...
      </div>

      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask medical question..."
          className="flex-1 border rounded-xl p-3"
        />

        <button
          onClick={sendMessage}
          className="bg-cyan-600 text-white px-5 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}