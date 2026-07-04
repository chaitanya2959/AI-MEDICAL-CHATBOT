import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ChatInput from "../components/ChatInput";
import MessageBubble from "../components/MessageBubble";
import api from "../lib/api";
import { Bot } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text:
        "👋 Hello Chaitanya!\n\nI'm your AI Medical Assistant.\n\nDescribe your symptoms or upload a medical report to begin.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const email =
        localStorage.getItem("email") ||
        "guest@gmail.com";

      const res = await api.post("/chat", {
        email,
        message,
      });

      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: res.data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "ai",
          text: "❌ Unable to connect with AI.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-white to-cyan-50">

      <Sidebar />

      <main className="flex-1 ml-72">

        <Topbar />

        <div className="pt-24 px-8 pb-8">

          <div className="bg-white rounded-[30px] shadow-2xl border border-slate-200 overflow-hidden h-[calc(100vh-120px)] flex flex-col">

            {/* Header */}

            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-8 py-5 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">

                  <Bot
                    className="text-white"
                    size={30}
                  />

                </div>

                <div>

                  <h1 className="text-2xl font-bold text-white">
                    AI Medical Assistant
                  </h1>

                  <p className="text-cyan-100 text-sm mt-1">
                    Online • Ask anything about your health
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

                <span className="text-white text-sm">
                  Online
                </span>

              </div>

            </div>
                        {/* Chat Area */}

            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-100 to-slate-200 p-8 space-y-6">

              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  sender={msg.sender}
                  text={msg.text}
                />
              ))}

              {loading && (
                <div className="flex justify-start">

                  <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-2xl shadow-lg">

                    <div className="flex gap-1">

                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce"></span>

                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:150ms]"></span>

                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:300ms]"></span>

                    </div>

                    <span className="text-slate-600 text-sm">
                      AI is thinking...
                    </span>

                  </div>

                </div>
              )}

              <div ref={bottomRef} />

            </div>

            {/* Bottom Input */}

            <div className="border-t border-slate-200 bg-white">

              <ChatInput sendMessage={sendMessage} />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}