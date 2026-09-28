import { Link } from "@tanstack/react-router";
import { Award, HandHeart, Leaf, MapPin, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { atributosCalidad, razones } from "@/data/empresa";
import { whatsappUrl } from "@/config/site";

const iconosRazones = [Award, Sparkles, Users, HandHeart, MapPin];

/** Sección para clientes mayoristas y empresas. */
export function SeccionMayoristas() {
  const puntos = [
    "Pedidos por volumen",
    "Atención personalizada",
    "Presentaciones comerciales",
    "Coordinación de entregas",
    "Cotizaciones",
  ];

  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionTitle
            etiqueta="Clientes mayoristas"
            titulo="¿Buscas un proveedor de aguaymanto?"
            descripcion="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
            tone="invert"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl">
              <Link to="/contacto" hash="cotizacion">
                Solicitar cotización
              </Link>
            </Button>
            <Button asChild variant="claro" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {puntos.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-4 text-sm font-medium text-primary-foreground"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** ¿Por qué elegirnos? */
export function SeccionPorQue() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            etiqueta="¿Por qué elegirnos?"
            titulo="Razones para trabajar con nosotros"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {razones.map((r, i) => {
            const Icon = iconosRazones[i % iconosRazones.length];
            return (
              <Reveal key={r.titulo} delay={i * 80}>
                <article className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base text-primary">{r.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.texto}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Calidad que se nota. */
export function SeccionCalidad() {
  return (
    <section id="calidad" className="bg-secondary py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            etiqueta="Calidad"
            titulo="Calidad que se nota"
            descripcion="Cuidamos cada detalle del producto, desde la selección hasta la entrega."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {atributosCalidad.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 70}>
              <article className="h-full rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base text-primary">{a.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
