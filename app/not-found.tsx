import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-1 flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-4xl font-bold text-primary-700 mt-6">Not Found</h1>
            <p className="text-lg text-primary-700 mt-4">
            The page you are looking for does not exist.
            </p>
            <div className="flex mt-6">
            <Link href="/">
                <p className="text-lg text-white-100 bg-primary-700 p-4 rounded-xl">
                Go Home
                </p>
            </Link>
            </div>
        </div>
        <footer className="p-4 text-primary-700 w-full text-center">
            <p>© 2024 ConvertPlus. All rights reserved.</p>
        </footer>
        </main>
    )
}