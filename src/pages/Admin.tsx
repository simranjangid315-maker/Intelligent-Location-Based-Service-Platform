import {
  BarChart3,
  Building2,
  CheckCircle,
  Users,
} from "lucide-react";

import type { ReactNode } from "react";

interface StatProps {
  title: string;
  value: string;
  icon: ReactNode;
}

const stats: StatProps[] = [
  {
    title: "Registered Users",
    value: "1,284",
    icon: <Users />,
  },
  {
    title: "Services",
    value: "568",
    icon: <Building2 />,
  },
  {
    title: "Active Services",
    value: "492",
    icon: <CheckCircle />,
  },
  {
    title: "Searches Today",
    value: "3,842",
    icon: <BarChart3 />,
  },
];

export default function Admin() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Monitor SmartLocal platform activity.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              {stat.icon}
            </div>

            <p className="mt-4 text-sm text-slate-500">
              {stat.title}
            </p>

            <p className="mt-1 text-3xl font-bold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-bold">
            Platform Overview
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between text-sm">
                <span>Service verification</span>
                <span>87%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[87%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>User satisfaction</span>
                <span>92%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[92%] rounded-full bg-green-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>Active listings</span>
                <span>76%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[76%] rounded-full bg-indigo-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-bold">
            Recent Activity
          </h2>

          <div className="mt-5 space-y-4">
            {[
              "New service registered",
              "User submitted a review",
              "Service availability updated",
              "New user registered",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
              >
                <CheckCircle
                  size={18}
                  className="text-green-500"
                />

                <div>
                  <p className="text-sm font-medium">
                    {item}
                  </p>

                  <p className="text-xs text-slate-400">
                    {index + 1} hour
                    {index !== 0 ? "s" : ""} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}