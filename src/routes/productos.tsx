import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { SeccionCalidad, SeccionMayoristas } from "@/components/site/Secciones";
import { productos } from "@/data/productos";
import hero1 from "@/assets/hero-1.jpg";

const titulo = "Productos | Aguaymanto fresco y presentaciones comerciales";
const descripcion =
  "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y formatos especiales según requerimiento.";

export const Route = createFileRoute("/productos")({
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
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        etiqueta="Nuestros productos"
        titulo="Aguaymanto peruano seleccionado"
        descripcion="Trabajamos distintas presentaciones según el tipo de cliente, el volumen requerido y la disponibilidad del producto."
        imagen={hero1}
        alt="Aguaymanto fresco en caja de madera"
        migas={[{ label: "Productos", to: "/productos" }]}
      />

      <section id="catalogo" className="py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              etiqueta="Catálogo"
              titulo="Presentaciones disponibles"
              descripcion="Los campos marcados como pendientes se completarán con la información oficial de la empresa."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard producto={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SeccionCalidad />
      <SeccionMayoristas />
    </>
  );
}
