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
    whatsapp: "51958476325",
    whatsappMostrar: "+51 958476325",
    telefono: "+51 958476325",
    telefonoEnlace: "+51958476325",
    correo: "jordan@aguaymantoweb.com",
    direccion: "Comunidad Sauceda S/N, Limatambo - Anta",
    ciudad: "Cusco",
    horario: "Lunes a Sábado, 8:00 a.m. - 6:00 p.m.",
  },

  whatsappMensaje:
    "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",

  // ID del video de YouTube que se muestra en el banner principal (reemplázalo por el video de la empresa)
  videoYoutubeId: "aG-EexHoO10",

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
