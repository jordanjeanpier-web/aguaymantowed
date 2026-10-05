import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, HeartHandshake, Leaf, Target, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { Button } from "@/components/ui/button";
import { compromiso, historia, mision, valores, vision } from "@/data/empresa";
import hero2 from "@/assets/hero-2.jpg";
import galEmpaque from "@/assets/gal-empaque.jpg";

const titulo = "Quiénes somos | Aguaymanto Perú";
const descripcion =
  "Conoce nuestra empresa, historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuienesSomos,
});

const iconosCompromiso = [Leaf, Users, HeartHandshake];

function QuienesSomos() {
  return (
    <>
      <PageHero
        etiqueta="Quiénes somos"
        titulo="Una empresa con raíces en el campo peruano"
        descripcion="Producción y comercialización de aguaymanto, con foco en la calidad del producto y en relaciones comerciales duraderas."
        imagen={hero2}
        alt="Campos de aguaymanto en las montañas del Perú"
        migas={[{ label: "Quiénes Somos", to: "/quienes-somos" }]}
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="py-20 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              etiqueta="Nuestra empresa"
              titulo="Una empresa con raíces en el campo peruano"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción, comercialización y venta de
                aguaymanto. Trabajamos con el fruto desde el campo hasta su entrega, cuidando su
                selección, presentación y manejo.
              </p>
              <p>
                Atendemos a clientes particulares y también a restaurantes, tiendas, distribuidores
                y compradores mayoristas que requieren un abastecimiento confiable.
              </p>
              <p>
                Nos diferencia la atención cercana a cada cliente y el compromiso de mantener una
                calidad consistente en cada pedido que atendemos.
              </p>
            </div>
            <Button asChild variant="campo" size="xl" className="mt-8">
              <Link to="/productos">Ver nuestros productos</Link>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={galEmpaque}
              alt="Selección y empaque de aguaymanto peruano"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="bg-secondary py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle etiqueta="Trayectoria" titulo="Nuestra historia" align="center" />
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {historia.map((h, i) => (
              <Reveal key={h.numero} delay={i * 100}>
                <li className="relative h-full list-none rounded-xl border border-border bg-card p-6 pt-8 shadow-[var(--shadow-soft)]">
                  <span className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {h.numero}
                  </span>
                  <h3 className="text-lg text-primary">{h.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.texto}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-20 lg:py-24">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article id="mision" className="h-full rounded-xl bg-primary p-8 sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl text-primary-foreground">Nuestra Misión</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">{mision}</p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article
              id="vision"
              className="h-full rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl text-primary">Nuestra Visión</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-secondary py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle etiqueta="Cultura" titulo="Nuestros valores" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 70}>
                <article className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <span className="font-display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg text-primary">{v.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle etiqueta="Compromiso" titulo="Nuestro compromiso" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {compromiso.map((c, i) => {
              const Icon = iconosCompromiso[i % iconosCompromiso.length]!;
              return (
                <Reveal key={c.titulo} delay={i * 100}>
                  <article className="h-full rounded-xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]">
                    <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg text-primary">{c.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle etiqueta="Galería" titulo="Nuestro trabajo en imágenes" align="center" />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
