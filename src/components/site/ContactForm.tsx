import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { productos } from "@/data/productos";

type Errores = Record<string, string>;

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda / minorista",
  "Distribuidor / mayorista",
  "Empresa",
  "Otro",
];

export function ContactForm({ productoInicial }: { productoInicial?: string }) {
  const [errores, setErrores] = useState<Errores>({});
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nuevos: Errores = {};

    const nombre = String(datos.get("nombre") ?? "").trim();
    const correo = String(datos.get("correo") ?? "").trim();
    const telefono = String(datos.get("telefono") ?? "").trim();
    const mensaje = String(datos.get("mensaje") ?? "").trim();

    if (nombre.length < 3) nuevos.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo))
      nuevos.correo = "Ingresa un correo electrónico válido.";
    if (telefono.replace(/\D/g, "").length < 6) nuevos.telefono = "Ingresa un teléfono válido.";
    if (mensaje.length < 10) nuevos.mensaje = "Cuéntanos brevemente tu consulta (mínimo 10 caracteres).";

    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) {
      document.getElementById(`campo-${Object.keys(nuevos)[0]}`)?.focus();
      return;
    }

    // Listo para conectarse luego con un servicio de email, CRM o backend.
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div
        role="status"
        className="rounded-xl border border-primary-light/30 bg-secondary p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary-light" aria-hidden="true" />
        <h3 className="mt-4 text-xl text-primary">Consulta enviada</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="contorno" size="lg" className="mt-6" onClick={() => setEnviado(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const campoClase =
    "h-11 bg-card border-input focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Campo id="nombre" label="Nombre completo" error={errores.nombre} requerido>
          <Input id="campo-nombre" name="nombre" autoComplete="name" className={campoClase} />
        </Campo>

        <Campo id="empresa" label="Empresa">
          <Input id="campo-empresa" name="empresa" autoComplete="organization" className={campoClase} />
        </Campo>

        <Campo id="correo" label="Correo electrónico" error={errores.correo} requerido>
          <Input
            id="campo-correo"
            name="correo"
            type="email"
            autoComplete="email"
            className={campoClase}
          />
        </Campo>

        <Campo id="telefono" label="Teléfono" error={errores.telefono} requerido>
          <Input id="campo-telefono" name="telefono" type="tel" autoComplete="tel" className={campoClase} />
        </Campo>

        <Campo id="ciudad" label="Ciudad">
          <Input id="campo-ciudad" name="ciudad" autoComplete="address-level2" className={campoClase} />
        </Campo>

        <Campo id="tipo" label="Tipo de cliente">
          <select
            id="campo-tipo"
            name="tipo"
            defaultValue=""
            className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Campo>

        <Campo id="producto" label="Producto de interés">
          <select
            id="campo-producto"
            name="producto"
            defaultValue={productoInicial ?? ""}
            className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <option value="">Selecciona una opción</option>
            {productos.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.nombre}
              </option>
            ))}
          </select>
        </Campo>

        <Campo id="cantidad" label="Cantidad aproximada">
          <Input
            id="campo-cantidad"
            name="cantidad"
            placeholder="Ej. 50 kg por semana"
            className={campoClase}
          />
        </Campo>

        <div className="sm:col-span-2">
          <Campo id="asunto" label="Asunto">
            <Input id="campo-asunto" name="asunto" className={campoClase} />
          </Campo>
        </div>

        <div className="sm:col-span-2">
          <Campo id="mensaje" label="Mensaje" error={errores.mensaje} requerido>
            <Textarea
              id="campo-mensaje"
              name="mensaje"
              rows={5}
              className="bg-card focus-visible:ring-2 focus-visible:ring-ring"
            />
          </Campo>
        </div>
      </div>

      <Button type="submit" variant="cta" size="xl" className="mt-7 w-full sm:w-auto">
        Enviar consulta
        <Send className="h-4 w-4" aria-hidden="true" />
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  );
}

function Campo({
  id,
  label,
  error,
  requerido,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  requerido?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={`campo-${id}`} className="mb-2 block text-sm font-medium text-foreground/85">
        {label}
        {requerido ? <span className="text-accent"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
