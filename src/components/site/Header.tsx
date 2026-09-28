import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { navegacion, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="hidden border-b border-border/60 bg-primary text-primary-foreground lg:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <p className="text-primary-foreground/80">{site.eslogan}</p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {site.contacto.telefono}
            </span>
            <span className="text-primary-foreground/80">{site.contacto.horario}</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "container-site flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navegacion.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[status=active]:text-primary"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
            <Link to="/contacto" hash="cotizacion">
              Solicitar cotización
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-primary transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Navegación móvil" className="container-site flex flex-col py-4">
          {navegacion.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-2 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="cta" size="xl" className="mt-3 w-full">
            <Link to="/contacto" hash="cotizacion" onClick={() => setOpen(false)}>
              Solicitar cotización
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
