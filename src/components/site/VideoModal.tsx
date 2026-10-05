import { useEffect } from "react";
import { X } from "lucide-react";

export function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video sobre aguaymanto"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Cerrar video"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-accent)] focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:outline-none"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title="Video sobre aguaymanto"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
