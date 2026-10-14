import {
  Bell,
  Compass,
  Heart,
  Home,
  Map,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Shield,
  User,
  X,
} from "lucide-react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useState, type ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  Icon: ComponentType<LucideProps>;
};

const navItems: NavItem[] = [
  {
    to: "/dashboard",
    label: "Dashboard",
    Icon: Home,
  },
  {
    to: "/services",
    label: "Services",
    Icon: Search,
  },
  {
    to: "/map",
    label: "Explore Map",
    Icon: Map,
  },
  {
    to: "/recommendations",
    label: "Recommendations",
    Icon: Compass,
  },
  {
    to: "/favorites",
    label: "Favorites",
    Icon: Heart,
  },
  {
    to: "/reviews",
    label: "Reviews",
    Icon: MessageSquare,
  },
  {
    to: "/profile",
    label: "Profile",
    Icon: User,
  },
  {
    to: "/admin",
    label: "Admin",
    Icon: Shield,
  },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentPage =
    navItems.find((item) =>
      location.pathname.startsWith(item.to)
    )?.label ?? "Dashboard";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-[#0f172a] transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* LOGO */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg shadow-teal-500/20">
              <Map size={21} />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-white">
                SmartLocal
              </p>

              <p className="text-xs text-slate-400">
                Intelligent Services
              </p>
            </div>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Main Menu
          </p>

          <nav className="space-y-1.5">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-teal-500 !text-white shadow-lg shadow-teal-500/20"
                      : "!text-slate-300 hover:bg-slate-900 hover:!text-white"
                  }`
                }
              >
                <Icon size={19} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* PROFILE */}
        <div className="border-t border-slate-800 p-4">
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
              <User size={19} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                My Account
              </p>

              <p className="truncate text-xs text-slate-500">
                Manage profile
              </p>
            </div>

            <Settings
              size={17}
              className="ml-auto text-slate-500"
            />
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="lg:pl-72">
        {/* TOP BAR */}
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                SmartLocal
              </p>

              <h1 className="text-lg font-bold text-slate-900">
                {currentPage}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notification */}
            <button
              className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
              title="Notifications"
            >
              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-teal-500" />
            </button>

            {/* Profile */}
            <Link
              to="/profile"
              className="hidden items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 sm:flex"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                U
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800">
                  User
                </p>

                <p className="text-[11px] text-slate-400">
                  Account
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* PAGE */}
        <main className="min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}