export default function StatCard({ label, value, tone = "cyan" }: { label: string; value: string | number; tone?: string }) {
  const toneClasses = {
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
  }[tone];

  return (
    <article className={`rounded-2xl border p-5 shadow-sm ${toneClasses}`}>
      <p className="text-sm font-medium">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </article>
  );
}
