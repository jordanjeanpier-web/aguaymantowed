import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

const titulo = "Términos y condiciones | El Dulce Aguaymanto";
const descripcion =
  "Términos y condiciones de uso del sitio web y de las consultas comerciales realizadas a través de él.";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <div className="container-site max-w-3xl py-20">
      <h1 className="font-display text-4xl text-primary">Términos y condiciones</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <h2 className="pt-2 text-xl text-primary">Uso del sitio</h2>
        <p>
          El contenido de este sitio tiene fines informativos y comerciales. {site.nombre} puede
          actualizar la información de productos, servicios y disponibilidad en cualquier momento.
        </p>
        <h2 className="pt-4 text-xl text-primary">Consultas y cotizaciones</h2>
        <p>
          Las consultas enviadas a través del formulario no constituyen un contrato de compra. Toda
          operación comercial se confirma por los canales de atención de la empresa.
        </p>
        <h2 className="pt-4 text-xl text-primary">Disponibilidad del producto</h2>
        <p>
          La disponibilidad, presentaciones y condiciones de entrega se confirman al momento de
          atender cada pedido.
        </p>
        <p className="text-sm italic">
          Este texto es una versión inicial editable y debe revisarse según la normativa aplicable.
        </p>
      </div>
    </div>
  );
}
