import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Palette,
} from "lucide-react";

const categories = [
  { name: "Engineering", icon: Code2 },
  { name: "Design", icon: Palette },
  { name: "Product", icon: Layers3 },
  { name: "All roles", icon: BriefcaseBusiness, href: "/jobs" },
];

const steps = [
  {
    number: "01",
    title: "Find your direction",
    description: "Search roles by title, team, or the kind of work you want to do.",
  },
  {
    number: "02",
    title: "Meet the right teams",
    description: "Explore companies and openings that fit your next move.",
  },
  {
    number: "03",
    title: "Make it happen",
    description: "Apply directly and keep your career moving forward.",
  },
];

export default function HomeSections() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101111] text-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/20 via-[#101111]/65 to-[#101111]" />

        <div className="mx-auto grid min-h-140 max-w-7xl items-center gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-800" />
              Your next chapter starts here
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-normal sm:text-6xl lg:text-7xl">
              Work worth doing. Teams worth joining.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              Find a role that fits your ambitions, and a team that helps you
              grow into them.
            </p>

            <form
              action="/jobs"
              method="GET"
              className="mt-9 flex max-w-2xl flex-col gap-3 rounded-lg border border-white/15 bg-black/55 p-3 backdrop-blur-sm sm:flex-row"
            >
              <label className="sr-only" htmlFor="home-job-search">
                Job title, company, or keyword
              </label>
              <input
                id="home-job-search"
                name="search"
                placeholder="Job title, company, or keyword"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-800 px-6 text-sm font-semibold text-white transition cursor-pointer hover:bg-blue-900"
              >
                Search jobs <ArrowRight size={17} />
              </button>
            </form>
            <p className="mt-4 text-sm text-zinc-400">
              Popular: Engineering, Design, Product
            </p>
          </div>

          <div className="hidden justify-self-end lg:block">
            <div className="w-64 border-l border-blue-400/60 pl-6">
              <p className="text-5xl font-semibold text-blue-400">Your</p>
              <p className="mt-1 text-5xl font-semibold text-white">work,</p>
              <p className="mt-1 text-5xl font-semibold text-white">in good</p>
              <p className="mt-1 text-5xl font-semibold text-white">company.</p>
              <Link
                href="/companies"
                className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-blue-300"
              >
                Meet the companies <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-zinc-500">
              Start with a field
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Explore open roles</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            {categories.map(({ name, icon: Icon, href }) => (
              <Link
                key={name}
                href={href || `/jobs?jobCategory=${name.toLowerCase()}`}
                className="group inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-blue-300"
              >
                <Icon size={17} className="text-blue-700" />
                {name}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase text-blue-700">
              A clearer way forward
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              From first search to your next great team.
            </h2>
          </div>

          <div className="grid gap-8 border-t border-white/15 pt-7 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
              <article key={step.number}>
                <p className="font-mono text-sm text-blue-700">{step.number}</p>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#11131a] text-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        />
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-blue-700">
              For growing teams
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Meet the people who can move your company forward.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Share your opening with candidates ready to make an impact.
            </p>
          </div>
          <Link
            href="/register"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-md bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800 md:self-center"
          >
            Get started <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}