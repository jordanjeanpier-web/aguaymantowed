import { Link } from "@tanstack/react-router";
import {
  ChefHat,
  Headset,
  Settings2,
  ShoppingBasket,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { Servicio } from "@/data/servicios";

const iconos: Record<Servicio["icono"], LucideIcon> = {
  shopping: ShoppingBasket,
  truck: Truck,
  chef: ChefHat,
  store: Store,
  settings: Settings2,
  headset: Headset,
};

export function ServiceCard({ servicio }: { servicio: Servicio }) {
  const Icon = iconos[servicio.icono];
  return (
    <article
      id={servicio.id}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg text-primary">{servicio.titulo}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {servicio.descripcion}
      </p>
      <Link
        to="/contacto"
        hash="cotizacion"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        Consultar
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
