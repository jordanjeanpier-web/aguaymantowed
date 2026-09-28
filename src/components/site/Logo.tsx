import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

export function Logo({ tone = "default" }: { tone?: "default" | "invert" }) {
  return (
    <Link
      to="/"
      aria-label={`${site.nombre} — ir al inicio`}
      className="group inline-flex items-center gap-3"
    >
      <span
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
          tone === "invert" ? "bg-primary-foreground/10" : "bg-primary/8",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <circle cx="20" cy="22" r="9" className="fill-accent" />
          <path
            d="M20 13c-4 0-7-2.5-8.5-6C15 6 18.5 7.5 20 11c1.5-3.5 5-5 8.5-4C27 10.5 24 13 20 13Z"
            className="fill-primary-light"
          />
          <path d="M20 13v-2" className="stroke-primary" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[0.95rem] font-semibold tracking-[0.14em]",
            tone === "invert" ? "text-primary-foreground" : "text-primary",
          )}
        >
          {site.nombre}
        </span>
        <span
          className={cn(
            "block text-[0.62rem] tracking-[0.2em] uppercase",
            tone === "invert" ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Producción y comercialización
        </span>
      </span>
    </Link>
  );
}
