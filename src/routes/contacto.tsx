import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { site, whatsappUrl } from "@/config/site";
import galFruto from "@/assets/gal-fruto.jpg";

const titulo = "Contacto | Solicita tu cotización de aguaymanto";
const descripcion =
  "Contáctanos por WhatsApp, teléfono, correo o formulario para consultas comerciales y cotizaciones de aguaymanto peruano.";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): { producto?: string } =>
    typeof search["producto"] === "string" ? { producto: search["producto"] } : {},
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
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();

  const datos = [
    {
      Icon: MessageCircle,
      label: "WhatsApp",
      valor: site.contacto.whatsappMostrar,
      href: whatsappUrl(),
      externo: true,
    },
    {
      Icon: Phone,
      label: "Teléfono",
      valor: site.contacto.telefono,
      href: `tel:${site.contacto.telefonoEnlace}`,
    },
    { Icon: Mail, label: "Correo", valor: site.contacto.correo, href: `mailto:${site.contacto.correo}` },
    {
      Icon: MapPin,
      label: "Dirección",
      valor: `${site.contacto.direccion}, ${site.contacto.ciudad}`,
    },
    { Icon: Clock, label: "Horario de atención", valor: site.contacto.horario },
  ];

  return (
    <>
      <PageHero
        etiqueta="Contacto"
        titulo="Estamos aquí para atenderte"
        descripcion="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        imagen={galFruto}
        alt="Fruto de aguaymanto con su cáliz abierto"
        migas={[{ label: "Contacto", to: "/contacto" }]}
      />

      <section id="cotizacion" className="py-20 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionTitle etiqueta="Datos de contacto" titulo="Conversemos" />
            <ul className="mt-8 space-y-5">
              {datos.map(({ Icon, label, valor, href, externo }) => (
                <li key={label} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-base font-medium text-primary transition-colors hover:text-accent"
                      >
                        {valor}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-primary">{valor}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary-light px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
            >
              Consultar por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-6 text-2xl text-primary">Envíanos tu consulta</h2>
            <ContactForm productoInicial={producto} />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site max-w-3xl">
          <SectionTitle
            etiqueta="Preguntas frecuentes"
            titulo="Antes de escribirnos"
            align="center"
          />
          <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
