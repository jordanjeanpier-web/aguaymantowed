/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: aparecen en todo el sitio.
 */

export const site = {
  nombre: "AGUAYMANTO PERÚ",
  nombreCorto: "Aguaymanto Perú",
  eslogan: "Calidad y compromiso desde el campo peruano.",
  descripcion:
    "Producción, comercialización y venta de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y mayoristas.",

  contacto: {
    // Número en formato internacional, solo dígitos (para el enlace de WhatsApp)
    whatsapp: "51999999999",
    whatsappMostrar: "[WHATSAPP]",
    telefono: "[TELÉFONO]",
    telefonoEnlace: "+51999999999",
    correo: "[CORREO]",
    direccion: "[DIRECCIÓN]",
    ciudad: "[CIUDAD]",
    horario: "[HORARIO DE ATENCIÓN]",
  },

  whatsappMensaje:
    "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",

  redes: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export function whatsappUrl(mensaje: string = site.whatsappMensaje) {
  return `https://wa.me/${site.contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const navegacion = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
