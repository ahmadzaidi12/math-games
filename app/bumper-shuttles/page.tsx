'use client';

import Button from "@/components/Button";
import Game from "./game";

export default function BumperShuttles() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-6xl font-bold text-purple-700 drop-shadow-lg dark:text-yellow-300">
          Bumper Shuttles
        </h1>
        <p className="text-xl font-semibold text-pink-600 dark:text-pink-300">
          Do you think you have momentum?
        </p>
        <Button href="/">Back to Home</Button>
        <Game />
      </main>
    </div>
  );
}
