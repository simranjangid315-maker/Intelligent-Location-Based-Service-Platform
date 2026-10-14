import {
  Heart,
  MapPin,
  Navigation,
  Phone,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import type { Service } from "../types";

interface ServiceCardProps {
  service: Service;
  favorite?: boolean;
  onFavorite?: (id: number) => void;
}

export default function ServiceCard({
  service,
  favorite = false,
  onFavorite,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            {service.category}
          </span>

          <Link to={`/service/${service.id}`}>
            <h3 className="mt-3 text-lg font-bold text-slate-900 hover:text-blue-600">
              {service.name}
            </h3>
          </Link>
        </div>

        <button
          onClick={() => onFavorite?.(service.id)}
          className={`rounded-full p-2 ${
            favorite
              ? "bg-red-50 text-red-500"
              : "bg-slate-100 text-slate-500"
          }`}
          title="Favorite"
        >
          <Heart
            size={18}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div className="flex gap-2">
          <MapPin size={17} className="shrink-0 text-blue-500" />
          <span>{service.address}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            {service.rating}
          </span>

          <span>{service.distance} km away</span>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs ${
              service.openNow
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {service.openNow ? "Open now" : "Closed"}
          </span>

          <span className="flex items-center gap-1 text-xs">
            <Phone size={14} />
            {service.phone}
          </span>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <Link
          to={`/service/${service.id}`}
          className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700"
        >
          View Details
        </Link>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            service.address
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm"
        >
          <Navigation size={16} />
        </a>
      </div>
    </div>
  );
}