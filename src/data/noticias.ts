import galMercado from "@/assets/gal-mercado.jpg";
import galCampo from "@/assets/gal-campo.jpg";
import galEmpaque from "@/assets/gal-empaque.jpg";

export type Noticia = {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string; // YYYY-MM-DD
  autor: string;
  imagen: string;
  alt: string;
  contenido: string[];
  galeria?: { src: string; alt: string }[];
};

/** Noticias de ejemplo: edítalas o elimínalas libremente. */
export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    titulo: "El aguaymanto peruano y su presencia en nuevos mercados",
    resumen:
      "El interés comercial por el aguaymanto continúa creciendo y abre oportunidades para los productores peruanos.",
    categoria: "Mercado",
    fecha: "2026-08-14",
    autor: "[AUTOR]",
    imagen: galMercado,
    alt: "Aguaymanto peruano presentado en cajas de mercado",
    contenido: [
      "El aguaymanto es uno de los frutos peruanos que ha ganado visibilidad comercial en los últimos años, tanto en el mercado local como en canales orientados a la exportación.",
      "Para los productores, este interés representa una oportunidad de trabajar con estándares más exigentes de selección, presentación y manejo del producto.",
      "Este contenido es de ejemplo y puede reemplazarse por información real de la empresa.",
    ],
  },
  {
    slug: "cultivo-del-aguaymanto",
    titulo: "Conoce más sobre el cultivo del aguaymanto",
    resumen:
      "Desde la siembra hasta la cosecha, el aguaymanto requiere cuidado constante para conservar su calidad.",
    categoria: "Agricultura",
    fecha: "2026-07-02",
    autor: "[AUTOR]",
    imagen: galCampo,
    alt: "Plantación de aguaymanto en ladera andina",
    contenido: [
      "El cultivo del aguaymanto se desarrolla principalmente en zonas altoandinas, donde las condiciones de clima y suelo favorecen el desarrollo del fruto.",
      "El manejo del cultivo incluye labores de siembra, conducción de plantas, control sanitario y una cosecha realizada de forma cuidadosa.",
      "Este contenido es de ejemplo y puede reemplazarse por información real de la empresa.",
    ],
  },
  {
    slug: "calidad-y-produccion-responsable",
    titulo: "Nuestra apuesta por la calidad y la producción responsable",
    resumen:
      "Trabajamos en procesos ordenados de selección y empaque para que el producto llegue en buenas condiciones.",
    categoria: "Noticias de la empresa",
    fecha: "2026-06-10",
    autor: "[AUTOR]",
    imagen: galEmpaque,
    alt: "Selección y empaque de aguaymanto en cajas",
    contenido: [
      "La calidad es un compromiso que se construye en cada etapa: selección, manejo, empaque y entrega.",
      "Nuestro objetivo es mantener procesos ordenados que permitan responder a las necesidades de clientes particulares y comerciales.",
      "Este contenido es de ejemplo y puede reemplazarse por información real de la empresa.",
    ],
  },
];

export function getNoticia(slug: string) {
  return noticias.find((n) => n.slug === slug);
}

export function formatearFecha(fecha: string) {
  return new Date(`${fecha}T12:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
