import {
  ArrowLeft,
  Clock,
  Heart,
  MapPin,
  Navigation,
  Phone,
  Star,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

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
    description:
      "Multi-speciality hospital providing emergency, diagnostic and specialist healthcare services.",
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
    description:
      "Pharmacy offering medicines, healthcare products and everyday wellness items.",
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
    description:
      "ATM facility providing cash withdrawal and basic banking services.",
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
    description:
      "Restaurant serving popular Indian and local cuisine.",
  },
];

export default function ServiceDetails() {
  const { id } = useParams();

  const service = services.find(
    (item) => item.id === Number(id)
  );

  if (!service) {
    return (
      <div className="rounded-2xl border bg-white p-12 text-center">
        <h1 className="text-2xl font-bold">
          Service not found
        </h1>

        <Link
          to="/services"
          className="mt-5 inline-block text-blue-600"
        >
          Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <Link
        to="/services"
        className="flex items-center gap-2 text-sm text-slate-500"
      >
        <ArrowLeft size={17} />
        Back to Services
      </Link>

      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100">
          <div className="flex h-full items-center justify-center">
            <MapPin
              size={70}
              className="text-blue-600"
            />
          </div>
        </div>

        <div className="p-7">
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                {service.category}
              </span>

              <h1 className="mt-4 text-3xl font-bold">
                {service.name}
              </h1>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Star
                    size={17}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {service.rating}
                </span>

                <span>
                  {service.distance} km away
                </span>

                <span
                  className={
                    service.openNow
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {service.openNow
                    ? "Open now"
                    : "Closed"}
                </span>
              </div>
            </div>

            <button className="flex h-11 items-center justify-center gap-2 rounded-xl border px-5">
              <Heart size={18} />
              Favorite
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <MapPin className="text-blue-600" />
              <h3 className="mt-3 font-semibold">
                Address
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {service.address}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <Phone className="text-blue-600" />
              <h3 className="mt-3 font-semibold">
                Phone
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {service.phone}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <Clock className="text-blue-600" />
              <h3 className="mt-3 font-semibold">
                Availability
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {service.openNow
                  ? "Currently open"
                  : "Currently closed"}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">
              About this service
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {service.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                service.address
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white"
            >
              <Navigation size={18} />
              Get Directions
            </a>

            <a
              href={`tel:${service.phone}`}
              className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium"
            >
              <Phone size={18} />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}