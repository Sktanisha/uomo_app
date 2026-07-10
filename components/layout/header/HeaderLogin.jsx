"use client";

import { UserRound } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderLogin = () => {
  return (
    <Sheet>
      <SheetTrigger >
        <button>
          <UserRound size={20} color="white" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-90 px-6 py-6">
        <SheetHeader className="border-b pb-5">
          <SheetTitle className="text-base font-semibold tracking-wide uppercase">
            LOGIN
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">

          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              placeholder="Username or email address *"
              className="w-full h-12 border border-gray-300 px-4 text-sm outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password *"
              className="w-full h-12 border border-gray-300 px-4 text-sm outline-none focus:border-black"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6">

            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="#"
              className="text-sm underline hover:text-black"
            >
              Lost password?
            </Link>

          </div>

          {/* Login Button */}
          <button className="w-full h-12 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            LOG IN
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-8">
            No account yet?{" "}
            <Link
              href="#"
              className="font-medium text-black underline"
            >
              Create Account
            </Link>
          </p>

        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderLogin;