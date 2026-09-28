import productoFresco from "@/assets/producto-fresco.jpg";
import heroCrate from "@/assets/hero-1.jpg";
import heroCosecha from "@/assets/hero-3.jpg";

export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  cta: string;
  presentacion: string;
  peso: string;
  disponibilidad: string;
  precio: string;
  caracteristicas: string[];
};

/** Catálogo editable: agrega nuevos productos a esta lista. */
export const productos: Producto[] = [
  {
    slug: "aguaymanto-fresco",
    nombre: "Aguaymanto fresco",
    descripcion:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    imagen: productoFresco,
    alt: "Aguaymanto fresco seleccionado en envase de presentación",
    cta: "Solicitar información",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Selección manual", "Fruto con cáliz", "Presentación uniforme"],
  },
  {
    slug: "aguaymanto-distribucion",
    nombre: "Aguaymanto para distribución",
    descripcion: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    imagen: heroCrate,
    alt: "Cajas de aguaymanto listas para distribución comercial",
    cta: "Consultar",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Pedidos por volumen", "Embalaje para transporte", "Coordinación de entregas"],
  },
  {
    slug: "presentaciones-especiales",
    nombre: "Presentaciones especiales",
    descripcion: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    imagen: heroCosecha,
    alt: "Cosecha de aguaymanto en campo peruano",
    cta: "Consultar presentación",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Formato a medida", "Evaluación según volumen", "Asesoría comercial"],
  },
];
