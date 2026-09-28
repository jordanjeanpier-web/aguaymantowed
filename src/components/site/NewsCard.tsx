import { Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { formatearFecha, type Noticia } from "@/data/noticias";

export function NewsCard({ noticia }: { noticia: Noticia }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <Link to="/noticias/$slug" params={{ slug: noticia.slug }} className="block overflow-hidden">
        <img
          src={noticia.imagen}
          alt={noticia.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-primary">
            {noticia.categoria}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatearFecha(noticia.fecha)}
          </span>
        </div>
        <h3 className="mt-4 text-lg leading-snug text-primary">
          <Link to="/noticias/$slug" params={{ slug: noticia.slug }} className="hover:text-primary-light">
            {noticia.titulo}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{noticia.resumen}</p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light transition-colors hover:text-accent"
        >
          Leer más
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
