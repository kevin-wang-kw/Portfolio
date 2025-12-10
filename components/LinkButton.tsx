import Link, { LinkProps } from "next/link";

export default function LinkButton({
  children,
  ...props
}: LinkProps & { children: React.ReactNode }) {
  return (
    <div className="group relative mb-4 inline-flex transition active:scale-95">
      <div className="absolute -inset-x-3.5 -inset-y-2 z-0 ml-1 scale-95 rounded-lg bg-zinc-50 opacity-0 transition group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100 md:rounded-xl dark:bg-zinc-800/50" />
      <Link
        {...props}
        className="z-10 inline-flex items-center gap-2 text-lg font-semibold transition-colors will-change-transform outline-none select-none group-focus-within:text-teal-500 group-hover:text-teal-500 group-active:text-teal-600"
      >
        <span className="absolute -inset-x-3.5 -inset-y-2 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        {children}
      </Link>
    </div>
  );
}
