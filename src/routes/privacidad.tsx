import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

const titulo = "Política de privacidad | Aguaymanto Perú";
const descripcion =
  "Política de privacidad sobre el tratamiento de los datos enviados a través del formulario de contacto del sitio.";

export const Route = createFileRoute("/privacidad")({
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
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="container-site max-w-3xl py-20">
      <h1 className="font-display text-4xl text-primary">Política de privacidad</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          En {site.nombre} tratamos los datos personales que nos envías con la finalidad de atender
          tus consultas comerciales y responder a solicitudes de cotización.
        </p>
        <h2 className="pt-4 text-xl text-primary">Datos que recopilamos</h2>
        <p>
          Nombre, empresa, correo electrónico, teléfono, ciudad y la información que incluyas en tu
          mensaje a través del formulario de contacto.
        </p>
        <h2 className="pt-4 text-xl text-primary">Uso de la información</h2>
        <p>
          Utilizamos estos datos únicamente para comunicarnos contigo respecto a tu consulta. No
          vendemos ni compartimos tu información con terceros ajenos a esta finalidad.
        </p>
        <h2 className="pt-4 text-xl text-primary">Contacto</h2>
        <p>
          Para consultas sobre tus datos escríbenos a {site.contacto.correo} o al{" "}
          {site.contacto.telefono}.
        </p>
        <p className="text-sm italic">
          Este texto es una versión inicial editable y debe revisarse según la normativa aplicable.
        </p>
      </div>
    </div>
  );
}
