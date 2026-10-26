import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard } from "@/components/site/NewsCard";
import { noticias } from "@/data/noticias";
import galMercado from "@/assets/gal-mercado.jpg";

const titulo = "Noticias y actualidad | El Dulce Aguaymanto";
const descripcion =
  "Novedades de la empresa, información sobre el cultivo del aguaymanto y actualidad del mercado agrícola peruano.";

export const Route = createFileRoute("/noticias/")({
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
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        etiqueta="Noticias"
        titulo="Noticias y actualidad"
        descripcion="Publicaciones sobre nuestra empresa, el aguaymanto y el mercado agrícola."
        imagen={galMercado}
        alt="Aguaymanto peruano presentado para venta"
        migas={[{ label: "Noticias", to: "/noticias" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n, i) => (
            <Reveal key={n.slug} delay={i * 100}>
              <NewsCard noticia={n} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
