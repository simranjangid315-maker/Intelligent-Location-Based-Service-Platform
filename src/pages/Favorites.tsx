import { Heart, MapPin, Star, Navigation, Trash2 } from "lucide-react";
import { useState } from "react";
import type { Service } from "../types";

const initialFavorites: Service[] = [
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

export default function Favorites() {
  const [favorites, setFavorites] = useState<Service[]>(initialFavorites);

  const removeFavorite = (id: number) => {
    setFavorites((current) =>
      current.filter((service) => service.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100">
            <Heart className="h-6 w-6 text-red-500" fill="currentColor" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Favorite Places
            </h1>
            <p className="text-sm text-slate-500">
              Quickly access the services you saved.
            </p>
          </div>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <Heart className="mx-auto mb-4 h-12 w-12 text-slate-300" />

          <h2 className="text-lg font-semibold text-slate-800">
            No favorite places
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Places you save will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {favorites.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                      {service.category}
                    </span>

                    <h2 className="mt-3 text-lg font-bold text-slate-900">
                      {service.name}
                    </h2>
                  </div>

                  <button
                    onClick={() => removeFavorite(service.id)}
                    title="Remove from favorites"
                    className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <MapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />
                    <span>{service.address}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="font-semibold text-slate-700">
                        {service.rating}
                      </span>
                    </div>

                    <span className="text-sm text-slate-500">
                      {service.distance} km away
                    </span>
                  </div>

                  <div>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        service.openNow
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {service.openNow ? "Open now" : "Closed"}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          service.address
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    <Navigation size={16} />
                    Directions
                  </button>

                  <button
                    onClick={() => removeFavorite(service.id)}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-2xl bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <Heart
            className="mt-0.5 shrink-0 text-blue-600"
            size={20}
            fill="currentColor"
          />

          <div>
            <h3 className="font-semibold text-blue-900">
              About Favorites
            </h3>

            <p className="mt-1 text-sm text-blue-700">
              Save frequently used hospitals, pharmacies, restaurants,
              ATMs and other nearby services for faster access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}