import { site, whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-3 rounded-full bg-primary-light py-3 pr-5 pl-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
          <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.82 9.82 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2Zm0 17.94h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.26-8.15 8.26Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{"¿Necesitas información?"}</span>
    </a>
  );
}
