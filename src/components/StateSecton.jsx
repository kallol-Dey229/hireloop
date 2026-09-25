"use client";

import {
  BriefcaseBusiness,
  Building2,
  Users,
  Star,
} from "lucide-react";

import { motion } from "motion/react";

export default function StatsSection() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={18} />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      icon: <Building2 size={18} />,
      value: "12K",
      label: "Companies",
    },
    {
      icon: <Users size={18} />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      icon: <Star size={18} />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24">
      
      {/* Background Globe */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-50"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      
      <div className="absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-snug text-white md:text-3xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
          <motion.p initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }} className="text-gray-300">
            Welcome to our platform!
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-violet-500/40 hover:bg-white/10"
            >
              
              {/* Icon */}
              <div className="mb-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}