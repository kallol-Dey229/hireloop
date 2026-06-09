export default function StatsCard({icon, title, value}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-violet-500/40">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
        {icon}
      </div>

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}