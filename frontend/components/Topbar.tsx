// components/Topbar.tsx

export default function Topbar() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        AI MEDICAL Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <span>Guest User</span>

        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center">
          G
        </div>
      </div>
    </header>
  );
}