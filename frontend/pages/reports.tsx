import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { uploadReport } from "../lib/api";

export default function ReportsPage() {
const [file, setFile] = useState<File | null>(null);
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleUpload = async () => {
if (!file) {
setMessage("Please select a PDF file.");
return;
}


setLoading(true);
setMessage("");

try {
  const res = await uploadReport(file);

  console.log(res.data);

  setMessage(
    res.data.analysis ||
    "Report analyzed successfully."
  );
} catch (err: any) {
  console.error(err);

  setMessage(
    err?.response?.data?.detail ||
    err?.response?.data?.message ||
    "Failed to upload PDF."
  );
} finally {
  setLoading(false);
}


};

return ( <div className="flex min-h-screen bg-slate-100"> <Sidebar />


  <main className="flex-1">
    <Topbar />

    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Medical Reports
      </h1>

      <div className="bg-white rounded-2xl shadow p-6">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
          className="mb-4 block"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-cyan-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-700"
        >
          {loading ? "Uploading..." : "Upload Report"}
        </button>

        {message && (
          <div className="mt-6 p-4 rounded-lg bg-slate-100 whitespace-pre-wrap">
            {message}
          </div>
        )}
      </div>
    </div>
  </main>
</div>


);
}
