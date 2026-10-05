import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { cn } from "@/lib/utils";

const slides = [
  {
    imagen: hero1,
    alt: "Caja de aguaymanto fresco recién cosechado frente a los andes peruanos",
    titulo: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    texto:
      "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    acciones: [
      { label: "Conocer nuestros productos", to: "/productos" as const, hash: undefined, variant: "cta" as const },
      { label: "Solicitar cotización", to: "/contacto" as const, hash: "cotizacion", variant: "claro" as const },
    ],
  },
  {
    imagen: hero2,
    alt: "Campos de cultivo de aguaymanto en las montañas del Perú al atardecer",
    titulo: "Del campo peruano a nuevos mercados",
    texto:
      "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    acciones: [
      { label: "Conoce nuestra empresa", to: "/quienes-somos" as const, hash: undefined, variant: "cta" as const },
    ],
  },
  {
    imagen: hero3,
    alt: "Cosecha manual de aguaymanto en una plantación peruana",
    titulo: "Natural, versátil y de excelente calidad",
    texto:
      "Un fruto peruano con gran presencia comercial, cuidado desde la cosecha hasta la entrega.",
    acciones: [{ label: "Ver productos", to: "/productos" as const, hash: undefined, variant: "cta" as const }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const ir = useCallback((n: number) => setIndex(((n % slides.length) + slides.length) % slides.length), []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <section
      aria-label="Presentación principal"
      aria-roledescription="carrusel"
      className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-primary"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.titulo}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.imagen}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={cn(
              "h-full w-full object-cover transition-transform duration-[7000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/70 to-primary/25" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-site">
          <div className="max-w-2xl">
            {slides.map((slide, i) => (
              <div
                key={slide.titulo}
                hidden={i !== index}
                className={cn(i === index && "reveal is-visible")}
              >
                <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-accent-light uppercase">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  Aguaymanto peruano
                </p>
                <h1 className="text-balance-title text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                  {slide.titulo}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                  {slide.texto}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {slide.acciones.map((a) => (
                    <Button key={a.label} asChild variant={a.variant} size="xl">
                      <Link to={a.to} {...(a.hash ? { hash: a.hash } : {})}>
                        {a.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="container-site flex items-center justify-between">
          <div className="flex gap-2.5" role="tablist" aria-label="Seleccionar diapositiva">
            {slides.map((slide, i) => (
              <button
                key={slide.titulo}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => ir(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none",
                  i === index ? "w-10 bg-accent" : "w-4 bg-primary-foreground/45 hover:bg-primary-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Diapositiva anterior"
              onClick={() => ir(index - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Diapositiva siguiente"
              onClick={() => ir(index + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
