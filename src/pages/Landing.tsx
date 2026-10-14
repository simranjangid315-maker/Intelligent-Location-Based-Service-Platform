import {
  ArrowRight,
  Compass,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    text: "Find nearby services using natural language and filters.",
  },
  {
    icon: MapPin,
    title: "Location Based",
    text: "Discover useful places around your current location.",
  },
  {
    icon: Compass,
    title: "Smart Recommendations",
    text: "Get recommendations based on your preferences.",
  },
  {
    icon: Heart,
    title: "Favorites",
    text: "Save important services for quick access.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            SmartLocal
          </Link>

          <Link
            to="/auth"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
          >
            Get Started
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              Intelligent Location-Based Service Platform
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Find the right service,
              <span className="text-blue-600"> right where you are.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SmartLocal helps you discover nearby hospitals,
              pharmacies, restaurants, ATMs, petrol stations,
              educational institutions and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/auth"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/map"
                className="flex items-center gap-2 rounded-xl border bg-white px-6 py-3 font-medium"
              >
                <MapPin size={18} />
                View Map
              </Link>
            </div>

            <div className="mt-10 flex gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Reliable
              </span>

              <span className="flex items-center gap-2">
                <Star size={18} />
                User Rated
              </span>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-xl">
            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Search className="text-blue-600" />
                  <span className="text-slate-500">
                    Find a hospital near me...
                  </span>
                </div>
              </div>

              <div className="relative h-80 overflow-hidden rounded-xl bg-blue-50">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="absolute left-1/4 top-1/4 rounded-full bg-blue-600 p-3 text-white shadow-lg">
                  <MapPin size={20} />
                </div>

                <div className="absolute right-1/4 top-1/2 rounded-full bg-red-500 p-3 text-white shadow-lg">
                  <MapPin size={20} />
                </div>

                <div className="absolute bottom-1/4 left-1/2 rounded-full bg-green-600 p-3 text-white shadow-lg">
                  <MapPin size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Everything you need nearby
          </h2>

          <p className="mt-3 text-slate-500">
            One platform for discovering local services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Icon size={23} />
              </div>

              <h3 className="mt-5 font-bold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}