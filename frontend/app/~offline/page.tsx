import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline",
  description: "You are currently offline.",
};

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">You're Offline</h1>

        <p className="mt-4">
          Please check your internet connection.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded bg-orange-600 px-5 py-2 text-white"
        >
          Try Again
        </a>
      </div>
    </main>
  );
}