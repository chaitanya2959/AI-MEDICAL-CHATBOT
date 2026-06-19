import { useState } from "react";
import { uploadImage } from "../lib/api";

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
        err?.response?.data?.message || "Unable to analyze image."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-3xl p-6 shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold mb-2">
        🖼️ Image Analysis
      </h2>

      <p className="text-slate-500 mb-5">
        Upload medical images for AI-supported review.
      </p>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
          className="border rounded-xl p-3"
        />

        <button
          onClick={upload}
          disabled={loading}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Analyzing..." : "Analyze Image"}
        </button>
      </div>

      {file && (
        <div className="mt-5">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="max-h-72 rounded-2xl border"
          />
        </div>
      )}

      {message && (
        <div className="mt-5 bg-slate-50 border rounded-xl p-4">
          {message}
        </div>
      )}
    </section>
  );
}