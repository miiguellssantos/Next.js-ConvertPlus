import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-4xl font-bold text-primary-700 mt-6">
          Welcome to ConvertPlus
        </h1>
        <p className="text-lg text-primary-700 mt-4">
          ConvertPlus is a simple currency converter that allows you to convert
          between different currencies.
        </p>
        <div className="flex mt-6">
          <Link
            href="/currencies"
            className="text-lg text-white-100 bg-primary-700 hover:bg-primary-600 hover:border-primary-300 hover:border-2 p-3 rounded-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
      <footer className="p-4 text-primary-700 w-full text-center">
        <p>© 2024 ConvertPlus. All rights reserved.</p>
      </footer>
    </main>
  );
}
