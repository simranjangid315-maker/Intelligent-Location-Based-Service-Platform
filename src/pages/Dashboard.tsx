import {
  ArrowRight,
  Compass,
  Heart,
  Map,
  MapPin,
  MessageSquare,
  Search,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../types";

const services: Service[] = [
  {
    id: 1,
    name: "Apollo Hospitals",
    category: "Hospital",
    address: "Jubilee Hills, Hyderabad",
    rating: 4.7,
    distance: 2.4,
    phone: "+91 40 2360 7777",
    openNow: true,
  },
  {
    id: 2,
    name: "MedPlus Pharmacy",
    category: "Pharmacy",
    address: "Kukatpally, Hyderabad",
    rating: 4.4,
    distance: 1.8,
    phone: "+91 40 4000 1234",
    openNow: true,
  },
  {
    id: 3,
    name: "HDFC Bank ATM",
    category: "ATM",
    address: "Miyapur, Hyderabad",
    rating: 4.2,
    distance: 3.1,
    phone: "+91 1800 202 6161",
    openNow: true,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-6 text-white shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-teal-200">
            <Compass size={14} />
            Intelligent Location Platform
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find the right services around you.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Discover nearby hospitals, pharmacies, restaurants, ATMs,
            petrol stations and other essential services based on your
            location.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-400"
            >
              <Search size={17} />
              Explore Services
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/map"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <Map size={17} />
              View Map
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<MapPin size={20} />}
          label="Nearby Services"
          value="24"
          description="Within 5 km"
        />

        <StatCard
          icon={<Heart size={20} />}
          label="Favorites"
          value="8"
          description="Saved places"
        />

        <StatCard
          icon={<MessageSquare size={20} />}
          label="My Reviews"
          value="12"
          description="Reviews posted"
        />

        <StatCard
          icon={<Star size={20} />}
          label="Average Rating"
          value="4.6"
          description="Your rated places"
        />
      </section>

      {/* SERVICES HEADER */}
      <section>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-teal-600">
              NEARBY
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Popular Services
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Services you may find useful near your current area.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* SERVICE GRID */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServicePreview key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* BOTTOM GRID */}
      <section className="grid gap-5 lg:grid-cols-2">
        {/* MAP CARD */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-slate-900">
                Explore Nearby
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                View services on the map.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Map size={19} />
            </div>
          </div>

          <div className="mt-5 flex h-48 items-center justify-center rounded-xl bg-slate-100">
            <div className="text-center">
              <MapPin
                size={34}
                className="mx-auto text-teal-500"
              />

              <p className="mt-2 text-sm font-semibold text-slate-700">
                Interactive Map
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Real map will be connected next.
              </p>
            </div>
          </div>

          <Link
            to="/map"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
          >
            Open Map
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-slate-900">
                Recommendations
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Places selected based on your activity.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Compass size={19} />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <Recommendation
              name="Apollo Hospitals"
              category="Hospital"
              rating="4.7"
            />

            <Recommendation
              name="MedPlus Pharmacy"
              category="Pharmacy"
              rating="4.4"
            />

            <Recommendation
              name="HDFC Bank ATM"
              category="ATM"
              rating="4.2"
            />
          </div>

          <Link
            to="/recommendations"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Recommendations
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          {icon}
        </div>

        <span className="text-xs font-medium text-emerald-600">
          Active
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">
        {label}
      </p>

      <div className="mt-1 flex items-end gap-2">
        <p className="text-3xl font-bold text-slate-900">
          {value}
        </p>

        <p className="pb-1 text-xs text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServicePreview({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {service.category}
          </span>

          <h3 className="mt-3 text-lg font-bold text-slate-900">
            {service.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
          <Star size={13} fill="currentColor" />
          {service.rating}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 text-sm text-slate-500">
        <MapPin
          size={17}
          className="mt-0.5 shrink-0 text-teal-600"
        />

        <span>{service.address}</span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-400">Distance</p>
          <p className="mt-0.5 text-sm font-semibold text-slate-700">
            {service.distance} km
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            service.openNow
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {service.openNow ? "Open now" : "Closed"}
        </span>
      </div>

      <Link
        to={`/service/${service.id}`}
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
      >
        View Details
      </Link>
    </div>
  );
}

function Recommendation({
  name,
  category,
  rating,
}: {
  name: string;
  category: string;
  rating: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-teal-600 shadow-sm">
          <MapPin size={18} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            {name}
          </p>

          <p className="text-xs text-slate-400">
            {category}
          </p>
        </div>
      </div>

      <span className="flex items-center gap-1 text-xs font-semibold text-amber-600">
        <Star size={13} fill="currentColor" />
        {rating}
      </span>
    </div>
  );
}