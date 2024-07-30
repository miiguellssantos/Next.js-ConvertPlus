"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function MenuBar() {
  const path = usePathname();

  const getLinkClass = (linkPath: string) => {
    return classNames(
      "text-lg font-bold p-2 rounded-lg transition-colors duration-200",
      {
        "bg-primary-700 text-primary-100 hover:bg-primary-600":
          path === linkPath,
        "text-primary-700 hover:bg-white-300": path !== linkPath,
      }
    );
  };

  return (
    <div className="flex flex-row p-3 h-fit w-full gap-3 border-b-2 border-primary-200">
      <Link
        href="/"
        className="text-xl text-primary-100 font-extrabold bg-primary-700 p-2 rounded-lg"
      >
        CP
      </Link>
      <Link href="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link href="/currencies" className={getLinkClass("/currencies")}>
        Currencies
      </Link>
      <Link href="/exchange" className={getLinkClass("/exchange")}>
        Exchange
      </Link>
    </div>
  );
}
