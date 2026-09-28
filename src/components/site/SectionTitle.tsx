import { cn } from "@/lib/utils";

type Props = {
  etiqueta?: string;
  titulo: string;
  descripcion?: string;
  align?: "left" | "center";
  tone?: "default" | "invert";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  etiqueta,
  titulo,
  descripcion,
  align = "left",
  tone = "default",
  className,
  as: Heading = "h2",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "invert" && "text-primary-foreground",
        className,
      )}
    >
      {etiqueta ? (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase",
            align === "center" && "justify-center",
            tone === "invert" ? "text-accent-light" : "text-primary-light",
          )}
        >
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {etiqueta}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance-title text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          tone === "invert" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {titulo}
      </Heading>
      {descripcion ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "invert" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {descripcion}
        </p>
      ) : null}
    </div>
  );
}
