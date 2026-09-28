import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Producto } from "@/data/productos";

export function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-primary">{producto.nombre}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{producto.descripcion}</p>

        <ul className="mt-5 space-y-2 text-sm text-foreground/80">
          {producto.caracteristicas.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
          <div>
            <dt className="font-semibold text-foreground/70">Presentación</dt>
            <dd>{producto.presentacion}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/70">Peso</dt>
            <dd>{producto.peso}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/70">Disponibilidad</dt>
            <dd>{producto.disponibilidad}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/70">Precio</dt>
            <dd>{producto.precio}</dd>
          </div>
        </dl>

        <Button asChild variant="campo" size="lg" className="mt-6 w-full">
          <Link to="/contacto" hash="cotizacion" search={{ producto: producto.slug }}>
            {producto.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
