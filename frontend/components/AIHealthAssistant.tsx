import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  FileText,
  ImageIcon,
} from "lucide-react";

export default function AIHealthAssistant() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 shadow-2xl">

      {/* Background Effect */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="flex items-center gap-4">

          <div className="bg-white/20 p-4 rounded-2xl">
            <Sparkles size={35} className="text-white" />
          </div>

          <div>
            <h2 className="text-white text-3xl font-bold">
              AI Health Assistant
            </h2>

            <p className="text-cyan-100 mt-1">
              Your intelligent healthcare companion
            </p>
          </div>

        </div>

        {/* Description */}

        <p className="text-white mt-8 text-lg leading-8 max-w-4xl">
          Welcome to <span className="font-bold">AI MEDICAL CHATBOT</span>.
          Chat with our AI assistant, upload medical reports,
          analyze medical images, and receive fast AI-powered
          healthcare insights.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-8">

          <Link href="/chat">
            <button className="flex items-center gap-2 bg-white text-cyan-700 font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300">
              Start Consultation
              <ArrowRight size={18} />
            </button>
          </Link>

          <Link href="/reports">
            <button className="border border-white text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-cyan-700 transition">
              Upload Report
            </button>
          </Link>

        </div>

        {/* Features */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">

            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <MessageCircle size={28} className="text-white" />
            </div>

            <h2 className="text-white text-xl font-semibold">
              AI Chat
            </h2>

            <p className="text-cyan-100 mt-2">
              Get instant medical guidance from the AI chatbot.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">

            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <FileText size={28} className="text-white" />
            </div>

            <h2 className="text-white text-xl font-semibold">
              Report Analysis
            </h2>

            <p className="text-cyan-100 mt-2">
              Upload medical reports and receive AI-generated summaries.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">

            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <ImageIcon size={28} className="text-white" />
            </div>

            <h2 className="text-white text-xl font-semibold">
              Image Analysis
            </h2>

            <p className="text-cyan-100 mt-2">
              Analyze X-rays and medical images using AI technology.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}