import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import ServiceCard from "../components/ServiceCard";
import Filters from "../components/Filters";

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
    description: "Multi-speciality hospital with emergency services.",
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
    description: "Pharmacy and healthcare products.",
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
    description: "24-hour ATM service.",
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
    description: "Popular restaurant serving Indian cuisine.",
  },
  {
    id: 5,
    name: "Indian Oil Petrol Station",
    category: "Petrol Station",
    address: "Bachupally, Hyderabad",
    rating: 4.1,
    distance: 5.4,
    phone: "1800 2333 555",
    openNow: false,
    description: "Fuel station with basic vehicle services.",
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
    description: "Supermarket for groceries and daily needs.",
  },
];

export default function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [radius, setRadius] = useState("10");
  const [openOnly, setOpenOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        service.category
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        service.address
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        service.category === category;

      const matchesRadius =
        service.distance <= Number(radius);

      const matchesOpen =
        !openOnly || service.openNow;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesRadius &&
        matchesOpen
      );
    });
  }, [search, category, radius, openOnly]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const resetFilters = () => {
    setCategory("All");
    setRadius("10");
    setOpenOnly(false);
    setSearch("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Find Services
        </h1>

        <p className="mt-2 text-slate-500">
          Discover useful services around you.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
        <Search size={20} className="text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="w-full outline-none"
        />

        <SlidersHorizontal
          size={20}
          className="text-slate-400"
        />
      </div>

      <Filters
        category={category}
        radius={radius}
        openOnly={openOnly}
        onCategoryChange={setCategory}
        onRadiusChange={setRadius}
        onOpenOnlyChange={setOpenOnly}
        onReset={resetFilters}
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {filtered.length} services
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            favorite={favorites.includes(service.id)}
            onFavorite={toggleFavorite}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border bg-white p-12 text-center">
          <Search
            size={42}
            className="mx-auto text-slate-300"
          />

          <h2 className="mt-4 font-semibold">
            No services found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}