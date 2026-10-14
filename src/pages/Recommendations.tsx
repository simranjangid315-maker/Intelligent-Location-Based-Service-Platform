import {
  Compass,
  MapPin,
  Star,
  TrendingUp,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";

import type { Service } from "../types";

const recommendations: Service[] = [
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
    id: 4,
    name: "Paradise Restaurant",
    category: "Restaurant",
    address: "Secunderabad, Hyderabad",
    rating: 4.5,
    distance: 4.2,
    phone: "+91 40 2784 8484",
    openNow: true,
  },
  {
    id: 6,
    name: "Ratnadeep Supermarket",
    category: "Grocery",
    address: "Madhapur, Hyderabad",
    rating: 4.3,
    distance: 6.2,
    phone: "+91 40 2311 2222",
    openNow: true,
  },
];

export default function Recommendations() {
  return (
    <div className="space-y-7">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
        <div className="flex items-center gap-3">
          <Compass size={30} />

          <div>
            <h1 className="text-3xl font-bold">
              Smart Recommendations
            </h1>

            <p className="mt-2 text-blue-100">
              Services recommended based on location,
              ratings and preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <MapPin className="text-blue-600" />

          <h3 className="mt-4 font-bold">
            Location Match
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Recommendations near your location.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <Star className="text-yellow-500" />

          <h3 className="mt-4 font-bold">
            High Ratings
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Prioritizing highly rated services.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <TrendingUp className="text-green-600" />

          <h3 className="mt-4 font-bold">
            Popular Choices
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Frequently selected by users.
          </p>
        </div>
      </div>

      <section>
        <h2 className="mb-5 text-xl font-bold">
          Recommended For You
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </section>
    </div>
  );
}