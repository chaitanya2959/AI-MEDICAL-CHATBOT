interface Props {
  analysis: string;
}

export default function AnalysisCard({ analysis }: Props) {
  if (!analysis) return null;

  return (
    <div className="mt-8 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-5">

        <h2 className="text-2xl font-bold text-white">
          🤖 AI Medical Analysis
        </h2>

        <p className="text-cyan-100 mt-1">
          Generated using AI
        </p>

      </div>

      {/* Body */}

      <div className="p-8">

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

          <pre className="whitespace-pre-wrap leading-8 text-slate-700 font-sans">
            {analysis}
          </pre>

        </div>

      </div>

    </div>
  );
}