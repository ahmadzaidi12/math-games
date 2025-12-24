import Button from "@/components/Button";

export default function BumperShuttles() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Bumper Shuttles
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Do you think you have momentum?
        </p>
        <Button href="/">Back to Home</Button>
      </main>
    </div>
  );
}
