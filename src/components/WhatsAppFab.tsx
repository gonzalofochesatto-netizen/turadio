import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => {
  const href = `https://wa.me/5493454039523?text=${encodeURIComponent(
    "Hola Tu Radio en Internet, quiero información sobre sus servicios."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-24 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant animate-pulse-glow group-hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </span>
    </a>
  );
};
