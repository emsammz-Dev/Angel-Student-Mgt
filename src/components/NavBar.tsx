import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex fixed z-10 left-1/3 top-3">
      <div className="bg-zinc-800 rounded-2xl flex px-2 py-2 ">
        <div className="flex-none bg-slate-600 rounded-xl px-2  hover:bg-red-400 mr-4">
          emsammz
        </div>
        <div className="flex flex-1 justify-center ">
          <Link
            href={"/"}
            className={`flex-none mr-2  hover:bg-slate-400 hover:text-black rounded-xl px-2`}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            className={`flex-none mr-2  hover:bg-slate-400 hover:text-black rounded-xl px-2`}
          >
            Projects
          </Link>
          <Link
            href={"/portfolio"}
            className={`flex-none mr-2  hover:bg-slate-400 hover:text-black rounded-xl px-2`}
          >
            Portfolio
          </Link>
          <Link
            href={"/contacts"}
            className={`flex-none mr-2  hover:bg-slate-400 hover:text-black rounded-xl px-2`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
