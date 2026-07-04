import {
  MessageSquare,
  FileText,
  ImageIcon,
} from "lucide-react";

const activities = [
  {
    title: "AI Chat Completed",
    time: "2 Minutes Ago",
    icon: MessageSquare,
    color: "text-cyan-400",
  },
  {
    title: "Medical Report Uploaded",
    time: "15 Minutes Ago",
    icon: FileText,
    color: "text-green-400",
  },
  {
    title: "Image Analysis Completed",
    time: "1 Hour Ago",
    icon: ImageIcon,
    color: "text-purple-400",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
      <h2 className="text-white text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-800 rounded-2xl p-4 hover:bg-slate-700 transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-3 rounded-xl">
                  <Icon
                    className={item.color}
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.time}
                  </p>
                </div>
              </div>

              <button className="text-cyan-400 hover:text-cyan-300">
                View
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}