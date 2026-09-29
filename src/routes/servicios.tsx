import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SeccionMayoristas, SeccionPorQue } from "@/components/site/Secciones";
import { servicios } from "@/data/servicios";
import galEmpaque from "@/assets/gal-empaque.jpg";

const titulo = "Servicios | Venta y distribución de aguaymanto";
const descripcion =
  "Venta de aguaymanto al por menor y mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.";

export const Route = createFileRoute("/servicios")({
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
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        etiqueta="Nuestros servicios"
        titulo="Soluciones comerciales alrededor del aguaymanto"
        descripcion="Atendemos desde consultas individuales hasta requerimientos de empresas y distribuidores."
        imagen={galEmpaque}
        alt="Trabajo de selección y empaque de aguaymanto"
        migas={[{ label: "Servicios", to: "/servicios" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              etiqueta="Servicios"
              titulo="Qué podemos hacer por tu negocio"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <ServiceCard servicio={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SeccionPorQue />
      <SeccionMayoristas />
    </>
  );
}
