import { Filter, RotateCcw } from "lucide-react";

interface FiltersProps {
  category: string;
  radius: string;
  openOnly: boolean;
  onCategoryChange: (value: string) => void;
  onRadiusChange: (value: string) => void;
  onOpenOnlyChange: (value: boolean) => void;
  onReset: () => void;
}

export default function Filters({
  category,
  radius,
  openOnly,
  onCategoryChange,
  onRadiusChange,
  onOpenOnlyChange,
  onReset,
}: FiltersProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-blue-600" />
          <h2 className="font-semibold">Filters</h2>
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-xl border px-3 py-2.5 outline-none focus:border-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Hospital">Hospital</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Restaurant">Restaurant</option>
            <option value="ATM">ATM</option>
            <option value="Petrol Station">Petrol Station</option>
            <option value="Grocery">Grocery</option>
            <option value="Education">Education</option>
            <option value="Government">Government</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Radius
          </label>

          <select
            value={radius}
            onChange={(e) => onRadiusChange(e.target.value)}
            className="w-full rounded-xl border px-3 py-2.5 outline-none focus:border-blue-500"
          >
            <option value="2">Within 2 km</option>
            <option value="5">Within 5 km</option>
            <option value="10">Within 10 km</option>
            <option value="20">Within 20 km</option>
          </select>
        </div>

        <label className="flex items-center gap-3 rounded-xl border p-3">
          <input
            type="checkbox"
            checked={openOnly}
            onChange={(e) => onOpenOnlyChange(e.target.checked)}
            className="h-4 w-4"
          />

          <span className="text-sm font-medium">
            Open now only
          </span>
        </label>
      </div>
    </div>
  );
}