"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const param = usePathname();

  return (
    <div className="flex fixed z-10 top-3 left-1/2 -translate-x-1/2">
      <div className="bg-zinc-800 rounded-2xl flex px-2 py-2">
        <div className="flex-none bg-slate-600 rounded-xl px-2  hover:bg-red-400 mr-4">
          emsammz
        </div>
        <div className="flex flex-1 justify-center ">
          <Link
            href={"/"}
            className={`flex-none mr-2  hover:bg-slate-400 hover:text-black rounded-xl px-2 ${
              param === "/"
                ? "bg-slate-400 && text-black && scale-75"
                : "bg-none"
            } `}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            className={`flex-none mr-2  hover:bg-slate-400 hover: hover:text-black rounded-xl px-2 ${
              param === "/projects"
                ? "bg-slate-400 && text-black && scale-75" || "bg-none"
                : "bg-none"
            }`}
          >
            Projects
          </Link>
          <Link
            href={"/portfolio"}
            className={`flex-none mr-2  hover:bg-slate-400 hover:text-black rounded-xl px-2 ${
              param === "/portfolio"
                ? "bg-slate-400 && text-black && scale-75" || "bg-none"
                : "bg-none"
            } `}
          >
            Portfolio
          </Link>
          <Link
            href={"/contact"}
            className={`flex-none hover:bg-slate-400 hover:text-black rounded-xl px-2 ${
              param === "/contact"
                ? "bg-slate-400 && text-black && scale-75" || "bg-none"
                : "bg-none"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
