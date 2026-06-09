'use client';

import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";


import {
  FileText,
  Persons,
  CircleCheck,
  ArrowsExpand,
} from "@gravity-ui/icons";
import DashboardStats from "@/components/dashboard/DashboardStats";

const RecruiterDashboardPage = () => {

  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center gap-4">
        <Spinner />
      </div>
    );
  }

  const user = session?.user;

  const stats = [
    {
      title: "Total Job Posts",
      value: 48,
      icon: <FileText />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <Persons />,
    },
    {
      title: "Active Jobs",
      value: 18,
      icon: <ArrowsExpand />,
    },
    {
      title: "Jobs Closed",
      value: 32,
      icon: <CircleCheck />,
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back, {user?.name}
        </h1>

        <p className="mt-2 text-gray-400">
          Here&apos;s what&#39;s happening with your recruitment activity today.
        </p>
      </div>

      {/* Stats Section */}
      <DashboardStats stats={stats} />

    </div>
  );
};

export default RecruiterDashboardPage;