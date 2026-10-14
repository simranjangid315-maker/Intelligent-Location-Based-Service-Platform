import { List, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import MapView from "../components/MapView";

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
    phone: "1800 202 6161",
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
];

export default function MapPage() {
  const [selected, setSelected] =
    useState<Service | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Explore Map
        </h1>

        <p className="mt-2 text-slate-500">
          Find services near your location.
        </p>
      </div>

      <MapView
        services={services}
        onSelect={setSelected}
      />

      {selected && (
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                {selected.category}
              </span>

              <h2 className="mt-3 text-xl font-bold">
                {selected.name}
              </h2>

              <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} />
                {selected.address}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="text-sm text-slate-400"
            >
              Close
            </button>
          </div>

          <Link
            to={`/service/${selected.id}`}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm text-white"
          >
            <List size={17} />
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}