import {
  MessageSquare,
  FileText,
  ImageIcon,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Chats",
    value: "120",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Medical Reports",
    value: "15",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Images Analyzed",
    value: "28",
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Users",
    value: "01",
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold text-white mt-3">
                  {item.value}
                </h2>
              </div>

              <div
                className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl`}
              >
                <Icon className="text-white" size={30} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}