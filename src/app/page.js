import StatsSection from "@/components/StateSecton";
import HomeSections from "@/components/HomeSections";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <HomeSections />
      <StatsSection />
    </div>
  );
}
