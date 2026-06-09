import StatsCard from "./StatsCard";

export default function DashboardStats({
  stats,
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
}