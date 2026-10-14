import {
  MapPin,
  Navigation,
  Search,
} from "lucide-react";

import type { Service } from "../types";

interface MapViewProps {
  services: Service[];
  onSelect?: (service: Service) => void;
}

export default function MapView({
  services,
  onSelect,
}: MapViewProps) {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-2xl border bg-slate-100">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute left-5 top-5 z-10 flex w-72 items-center gap-2 rounded-xl bg-white p-3 shadow-md">
        <Search size={18} className="text-slate-400" />

        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder="Search this area..."
        />
      </div>

      <div className="absolute right-5 top-5 z-10">
        <button className="rounded-xl bg-white p-3 shadow-md">
          <Navigation size={20} className="text-blue-600" />
        </button>
      </div>

      <div className="relative z-10 flex min-h-[500px] items-center justify-center">
        <div className="relative h-80 w-80">
          {services.map((service, index) => {
            const positions = [
              "left-8 top-10",
              "right-8 top-16",
              "left-24 bottom-8",
              "right-20 bottom-20",
              "left-40 top-32",
            ];

            return (
              <button
                key={service.id}
                onClick={() => onSelect?.(service)}
                className={`absolute ${positions[index % positions.length]} group`}
                title={service.name}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-lg transition group-hover:scale-125">
                  <MapPin size={19} fill="currentColor" />
                </div>

                <div className="pointer-events-none absolute left-1/2 top-12 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs text-white group-hover:block">
                  {service.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 z-10 rounded-xl bg-white p-4 shadow-md">
        <p className="text-sm font-semibold">
          {services.length} services nearby
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Demo map interface
        </p>
      </div>
    </div>
  );
}