import {
  Mail,
  Phone,
  Save,
  User,
} from "lucide-react";

import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("Simran");
  const [email, setEmail] =
    useState("simran@example.com");
  const [phone, setPhone] =
    useState("+91 9876543210");

  const saveProfile = () => {
    alert("Profile saved successfully.");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your SmartLocal account.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-7 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <User size={38} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {name}
            </h2>

            <p className="text-sm text-slate-500">
              SmartLocal User
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border px-4">
              <User
                size={18}
                className="text-slate-400"
              />

              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border px-4">
              <Mail
                size={18}
                className="text-slate-400"
              />

              <input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone
            </label>

            <div className="flex items-center gap-3 rounded-xl border px-4">
              <Phone
                size={18}
                className="text-slate-400"
              />

              <input
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="w-full py-3 outline-none"
              />
            </div>
          </div>
        </div>

        <button
          onClick={saveProfile}
          className="mt-7 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white"
        >
          <Save size={17} />
          Save Profile
        </button>
      </div>
    </div>
  );
}