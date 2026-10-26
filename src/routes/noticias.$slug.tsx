import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/NewsCard";
import { formatearFecha, getNoticia, noticias } from "@/data/noticias";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = getNoticia(params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Noticia no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const { noticia } = loaderData;
    const t = `${noticia.titulo} | El Dulce Aguaymanto`;
    return {
      meta: [
        { title: t },
        { name: "description", content: noticia.resumen },
        { property: "og:title", content: t },
        { property: "og:description", content: noticia.resumen },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: NoticiaDetalle,
});

function NoticiaNoEncontrada() {
  return (
    <div className="container-site py-24 text-center">
      <h1 className="font-display text-3xl text-primary">Noticia no encontrada</h1>
      <p className="mt-3 text-muted-foreground">Es posible que esta publicación haya sido movida.</p>
      <Button asChild variant="campo" size="lg" className="mt-6">
        <Link to="/noticias">Ver todas las noticias</Link>
      </Button>
    </div>
  );
}

function NoticiaDetalle() {
  const { noticia } = Route.useLoaderData();
  const relacionadas = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-primary py-14 lg:py-20">
          <div className="container-site max-w-3xl">
            <nav aria-label="Ruta de navegación" className="mb-5 text-xs text-primary-foreground/70">
              <Link to="/" className="hover:text-accent-light">
                Inicio
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link to="/noticias" className="hover:text-accent-light">
                Noticias
              </Link>
            </nav>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {noticia.categoria}
            </span>
            <h1 className="text-balance-title mt-5 text-3xl leading-tight text-primary-foreground sm:text-4xl">
              {noticia.titulo}
            </h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
                {formatearFecha(noticia.fecha)}
              </span>
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-accent" aria-hidden="true" />
                {noticia.autor}
              </span>
            </div>
          </div>
        </header>

        <div className="container-site max-w-3xl py-14">
          <img
            src={noticia.imagen}
            alt={noticia.alt}
            width={1200}
            height={900}
            className="w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
            {noticia.contenido.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          {noticia.galeria?.length ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {noticia.galeria.map((foto) => (
                <img
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full rounded-lg object-cover"
                />
              ))}
            </div>
          ) : null}

          <div className="mt-12 rounded-xl border border-border bg-card p-7 text-center">
            <h2 className="text-xl text-primary">¿Te interesa nuestro aguaymanto?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Escríbenos y te enviamos la información comercial que necesitas.
            </p>
            <Button asChild variant="cta" size="xl" className="mt-5">
              <Link to="/contacto" hash="cotizacion">
                Solicitar cotización
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="bg-secondary py-20">
        <div className="container-site">
          <SectionTitle etiqueta="Más contenido" titulo="Noticias relacionadas" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relacionadas.map((n) => (
              <NewsCard key={n.slug} noticia={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
