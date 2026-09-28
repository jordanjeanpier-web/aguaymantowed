export type Servicio = {
  id: string;
  titulo: string;
  descripcion: string;
  icono: "shopping" | "truck" | "chef" | "store" | "settings" | "headset";
};

export const servicios: Servicio[] = [
  {
    id: "venta",
    titulo: "Venta de aguaymanto",
    descripcion: "Venta de producto para clientes particulares y comerciales.",
    icono: "shopping",
  },
  {
    id: "venta-mayorista",
    titulo: "Venta al por mayor",
    descripcion: "Atención de pedidos de mayor volumen.",
    icono: "truck",
  },
  {
    id: "restaurantes",
    titulo: "Atención a restaurantes",
    descripcion:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icono: "chef",
  },
  {
    id: "distribuidores",
    titulo: "Atención a tiendas y distribuidores",
    descripcion: "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icono: "store",
  },
  {
    id: "pedidos-personalizados",
    titulo: "Pedidos personalizados",
    descripcion: "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icono: "settings",
  },
  {
    id: "asesoria",
    titulo: "Asesoría comercial",
    descripcion: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icono: "headset",
  },
];
