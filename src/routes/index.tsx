import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Target, Eye } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { NewsCard } from "@/components/site/NewsCard";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { SeccionMayoristas, SeccionPorQue } from "@/components/site/Secciones";
import { Button } from "@/components/ui/button";
import { productos } from "@/data/productos";
import { servicios } from "@/data/servicios";
import { noticias } from "@/data/noticias";
import { mision, vision } from "@/data/empresa";
import galCampo from "@/assets/gal-campo.jpg";

const titulo = "El Dulce Aguaymanto | Producción y venta de aguaymanto peruano - Limatambo";
const descripcion =
  "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor y atención a restaurantes, tiendas y distribuidores. Solicita tu cotización.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre nosotros */}
      <section className="py-20 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={galCampo}
                alt="Plantación de aguaymanto en el campo peruano"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
              <div className="absolute -right-4 -bottom-6 hidden rounded-xl bg-accent px-6 py-5 text-accent-foreground shadow-[var(--shadow-accent)] sm:block">
                <p className="font-display text-2xl leading-none">100%</p>
                <p className="mt-1 text-xs font-semibold tracking-wider uppercase">Origen peruano</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionTitle
              etiqueta="Sobre la empresa"
              titulo="Comprometidos con la calidad del aguaymanto limatambeño"
              descripcion="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-5">
                <Target className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-base text-primary">Nuestra Misión</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {mision.slice(0, 110)}…
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <Eye className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-base text-primary">Nuestra Visión</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {vision.slice(0, 110)}…
                </p>
              </div>
            </div>
            <Button asChild variant="campo" size="xl" className="mt-8">
              <Link to="/quienes-somos">Conoce quiénes somos</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              etiqueta="Nuestros productos bandera"
              titulo="Aguaymanto para cada necesidad de los peruaos"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard producto={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="contorno" size="xl">
              <Link to="/productos">Ver todos los productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              etiqueta="Nuestros servicios"
              titulo="Acompañamos cada necesidad comercial"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <ServiceCard servicio={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="contorno" size="xl">
              <Link to="/servicios">Conocer nuestros servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      <SeccionMayoristas />
      <SeccionPorQue />

      {/* Galería */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              etiqueta="Galería"
              titulo="El campo, el fruto y nuestro trabajo"
              align="center"
            />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              etiqueta="Noticias"
              titulo="Novedades y actualidad"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((n, i) => (
              <Reveal key={n.slug} delay={i * 100}>
                <NewsCard noticia={n} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="contorno" size="xl">
              <Link to="/noticias">Ver todas las noticias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionTitle
              etiqueta="Preguntas frecuentes"
              titulo="Resolvemos tus dudas"
              descripcion="Si tu consulta no aparece aquí, escríbenos y te respondemos."
            />
            <Button asChild variant="cta" size="xl" className="mt-8">
              <Link to="/contacto">Contactarnos</Link>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <FAQAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary-light py-16">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <Leaf className="h-8 w-8 text-accent-light" aria-hidden="true" />
          <h2 className="text-balance-title max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
            Conversemos sobre tu próximo pedido de aguaymanto
          </h2>
          <Button asChild variant="cta" size="xl">
            <Link to="/contacto" hash="cotizacion">
              Solicitar cotización
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
