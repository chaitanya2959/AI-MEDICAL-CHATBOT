import { useState } from "react";
import { Send, FileText, ImagePlus } from "lucide-react";
import { useRouter } from "next/router";

interface Props {
  sendMessage: (message: string) => void;
}

export default function ChatInput({ sendMessage }: Props) {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="bg-white border-t border-slate-200 px-6 py-5">

      <div className="flex items-center gap-3">

        {/* Upload Report */}

        <button
          onClick={() => router.push("/reports")}
          className="w-12 h-12 rounded-full bg-slate-100 hover:bg-cyan-100 hover:text-cyan-600 transition flex items-center justify-center shadow-sm"
          title="Upload Medical Report"
        >
          <FileText size={20} />
        </button>

        {/* Image Analysis */}

        <button
          onClick={() => router.push("/images")}
          className="w-12 h-12 rounded-full bg-slate-100 hover:bg-cyan-100 hover:text-cyan-600 transition flex items-center justify-center shadow-sm"
          title="Image Analysis"
        >
          <ImagePlus size={20} />
        </button>

        {/* Input */}

        <input
          type="text"
          placeholder="Describe your symptoms..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="
            flex-1
            h-12
            rounded-full
            border
            border-slate-300
            bg-slate-50
            px-6
            outline-none
            focus:border-cyan-500
            focus:ring-4
            focus:ring-cyan-100
            transition
          "
        />

        {/* Send */}

        <button
          onClick={handleSend}
          className="
            w-12
            h-12
            rounded-full
            bg-gradient-to-r
            from-cyan-600
            to-blue-600
            text-white
            flex
            items-center
            justify-center
            shadow-lg
            hover:scale-105
            transition
          "
        >
          <Send size={20} />
        </button>

      </div>

    </div>
  );
}