import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import { navegacion, site, whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";

const redes = [
  { nombre: "Facebook", href: site.redes.facebook, Icon: Facebook },
  { nombre: "Instagram", href: site.redes.instagram, Icon: Instagram },
  { nombre: "TikTok", href: site.redes.tiktok, Icon: Music2 },
  { nombre: "LinkedIn", href: site.redes.linkedin, Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="invert" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            {site.eslogan}
          </p>
          <div className="mt-6 flex gap-2">
            {redes.map(({ nombre, href, Icon }) => (
              <a
                key={nombre}
                href={href}
                aria-label={nombre}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-bold tracking-[0.18em] text-accent-light uppercase">Enlaces</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navegacion.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors hover:text-accent-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-accent-light uppercase">
            Información
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-colors hover:text-accent-light"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                WhatsApp: {site.contacto.whatsappMostrar}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contacto.telefonoEnlace}`}
                className="inline-flex items-start gap-2 transition-colors hover:text-accent-light"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.contacto.telefono}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contacto.correo}`}
                className="inline-flex items-start gap-2 transition-colors hover:text-accent-light"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.contacto.correo}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {site.contacto.direccion}, {site.contacto.ciudad}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-accent-light uppercase">
            ¿Hablamos?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            Atendemos consultas comerciales de empresas, restaurantes, tiendas y distribuidores.
          </p>
          <Link
            to="/contacto"
            hash="cotizacion"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-light"
          >
            Solicitar cotización
          </Link>
          <p className="mt-5 text-xs text-primary-foreground/60">
            Horario: {site.contacto.horario}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© 2026 {site.nombre}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/privacidad" className="transition-colors hover:text-accent-light">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="transition-colors hover:text-accent-light">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
