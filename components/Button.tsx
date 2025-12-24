import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ href, onClick, children, subtitle, variant = 'primary' }: ButtonProps) {
  const baseClassName = "mt-4 flex flex-col items-center justify-center rounded-full px-10 py-4 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl";
  
  const variantClassName = variant === 'primary'
    ? "bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-500 dark:to-purple-600"
    : "bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700";
  
  const className = `${baseClassName} ${variantClassName}`;
  
  if (href) {
    return (
      <Link href={href} className={className}>
        <span className="text-lg font-bold">{children}</span>
        {subtitle && (
          <span className="mt-1 text-sm text-white/90">{subtitle}</span>
        )}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={className}>
      <span className="text-lg font-bold">{children}</span>
      {subtitle && (
        <span className="mt-1 text-sm text-white/90">{subtitle}</span>
      )}
    </button>
  );
}
