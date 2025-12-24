import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  subtitle?: string;
}

export default function Button({ href, children, subtitle }: ButtonProps) {
  return (
    <Link
      href={href}
      className="mt-4 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 px-10 py-4 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:from-pink-500 dark:to-purple-600"
    >
      <span className="text-lg font-bold">{children}</span>
      {subtitle && (
        <span className="mt-1 text-sm text-white/90">{subtitle}</span>
      )}
    </Link>
  );
}
