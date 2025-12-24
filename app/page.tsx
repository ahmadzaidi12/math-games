import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Math Games
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Do you think you have momentum?
        </p>
        <Link
          href="/bumper-shuttles"
          className="mt-4 flex h-12 items-center justify-center rounded-full bg-black px-8 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Bumper Shuttles
        </Link>
      </main>
    </div>
  );
}
