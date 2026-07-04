interface Props {
  sender: "user" | "ai";
  text: string;
}

export default function MessageBubble({
  sender,
  text,
}: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white flex items-center justify-center font-bold shadow-lg flex-shrink-0">
          AI
        </div>
      )}

      {/* Bubble */}

      <div
        className={`max-w-[75%] rounded-3xl shadow-lg overflow-hidden ${
          isUser
            ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-md"
            : "bg-white border border-slate-200 rounded-bl-md"
        }`}
      >
        {/* Header */}

        <div
          className={`flex justify-between items-center px-5 py-3 ${
            isUser
              ? "bg-white/10"
              : "bg-slate-100 border-b"
          }`}
        >
          <span className="font-semibold text-sm">
            {isUser ? "You" : "AI Medical"}
          </span>

          <span className="text-xs opacity-70">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* Message */}

        <div className="p-5">

          {isUser ? (
            <p className="leading-8 whitespace-pre-wrap">
              {text}
            </p>
          ) : (
            <div className="space-y-4">

              {text
                .split("\n\n")
                .filter((section) => section.trim() !== "")
                .map((section, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-4"
                  >
                    <p className="leading-8 whitespace-pre-wrap text-slate-700">
                      {section}
                    </p>
                  </div>
                ))}

            </div>
          )}

        </div>

      </div>

      {/* User Avatar */}

      {isUser && (
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold shadow-lg flex-shrink-0">
          C
        </div>
      )}

    </div>
  );
}