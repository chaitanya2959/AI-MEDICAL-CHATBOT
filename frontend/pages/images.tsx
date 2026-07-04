import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { uploadImage } from "../lib/api";
import {
  Upload,
  ImageIcon,
  Sparkles,
} from "lucide-react";

export default function ImageAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (!file) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await uploadImage(file);
      setMessage(res.data.analysis || "Image analysis completed.");
    } catch (err: any) {
      setMessage(
        err?.response?.data?.message ||
          "Unable to analyze image."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 ml-72">

        <Topbar />

        <div className="pt-24 px-8 pb-10 space-y-8">

          {/* Header */}

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              🖼 Image Analysis
            </h1>

            <p className="text-slate-500 mt-2">
              Upload a medical image and let AI analyze it.
            </p>

          </div>

          {/* Upload Card */}

          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl shadow-xl p-8 text-white">

            <div className="flex items-center gap-4">

              <div className="bg-white/20 p-4 rounded-2xl">

                <Upload size={35} />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Upload Image
                </h2>

                <p className="text-cyan-100">
                  JPG, PNG supported
                </p>

              </div>

            </div>

            <div className="mt-8 flex gap-4 flex-wrap">

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFile(e.target.files?.[0] || null)
                }
                className="bg-white text-black rounded-xl p-3"
              />

              <button
                onClick={upload}
                disabled={loading}
                className="bg-white text-cyan-700 font-semibold px-8 py-3 rounded-xl hover:scale-105 transition"
              >
                {loading
                  ? "Analyzing..."
                  : "Analyze Image"}
              </button>

            </div>

          </div>

          {/* Preview */}

          {file && (

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <ImageIcon
                  className="text-cyan-600"
                  size={28}
                />

                <h2 className="text-2xl font-bold">
                  Uploaded Image
                </h2>

              </div>

              <div className="flex justify-center">

                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="rounded-3xl border shadow-lg max-h-[450px]"
                />

              </div>

            </div>

          )}

          {/* AI Result */}

          {message && (

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-5">

                <div className="flex items-center gap-3">

                  <Sparkles className="text-white" />

                  <h2 className="text-2xl text-white font-bold">
                    AI Analysis
                  </h2>

                </div>

              </div>

              <div className="p-8">

                <div className="bg-slate-50 rounded-2xl p-6 border">

                  <pre className="whitespace-pre-wrap text-slate-700 leading-8 font-sans">
                    {message}
                  </pre>

                </div>

              </div>

            </div>

          )}

        </div>

      </main>

    </div>
  );
}