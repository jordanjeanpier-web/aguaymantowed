import { Link } from "@tanstack/react-router";

type Props = {
  etiqueta: string;
  titulo: string;
  descripcion?: string;
  imagen: string;
  alt: string;
  migas?: { label: string; to: string }[];
};

export function PageHero({ etiqueta, titulo, descripcion, imagen, alt, migas = [] }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img
        src={imagen}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/45" />
      <div className="relative container-site py-20 lg:py-28">
        <nav aria-label="Ruta de navegación" className="mb-5 text-xs text-primary-foreground/70">
          <Link to="/" className="hover:text-accent-light">
            Inicio
          </Link>
          {migas.map((m) => (
            <span key={m.to}>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link to={m.to} className="hover:text-accent-light">
                {m.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-accent-light uppercase">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {etiqueta}
        </p>
        <h1 className="text-balance-title max-w-3xl text-4xl leading-[1.1] text-primary-foreground sm:text-5xl">
          {titulo}
        </h1>
        {descripcion ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            {descripcion}
          </p>
        ) : null}
      </div>
    </section>
  );
}
