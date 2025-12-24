import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Math Games
        </h1>
        <Button href="/bumper-shuttles" subtitle="Do you think you have momentum?">
          Bumper Shuttles
        </Button>
      </main>
    </div>
  );
}
