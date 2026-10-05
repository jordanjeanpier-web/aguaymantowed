import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galeria } from "@/data/galeria";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [abierto, setAbierto] = useState<number | null>(null);

  useEffect(() => {
    if (abierto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(null);
      if (e.key === "ArrowRight") setAbierto((i) => (i === null ? i : (i + 1) % galeria.length));
      if (e.key === "ArrowLeft")
        setAbierto((i) => (i === null ? i : (i - 1 + galeria.length) % galeria.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galeria.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            onClick={() => setAbierto(i)}
            aria-label={`Ampliar imagen: ${foto.alt}`}
            className={cn(
              "group relative overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              i % 5 === 0 ? "row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-[4/3]",
            )}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/25" />
          </button>
        ))}
      </div>

      {abierto !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la galería"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-4"
          onClick={() => setAbierto(null)}
        >
          <button
            type="button"
            aria-label="Cerrar galería"
            onClick={() => setAbierto(null)}
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={(e) => {
              e.stopPropagation();
              setAbierto((i) => (i === null ? i : (i - 1 + galeria.length) % galeria.length));
            }}
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <img
            src={galeria[abierto]!.src}
            alt={galeria[abierto]!.alt}
            className="max-h-[82vh] w-auto max-w-[92vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={(e) => {
              e.stopPropagation();
              setAbierto((i) => (i === null ? i : (i + 1) % galeria.length));
            }}
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:right-8"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
