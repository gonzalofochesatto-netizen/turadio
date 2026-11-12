import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "ga_consent";
const GA_ID = "G-XVE0YY78L3";
export const OPEN_CONSENT_EVENT = "open-consent";

let configured = false;
const startMeasuring = () => {
  const w = window as any;
  if (configured || typeof w.gtag !== "function") return;
  configured = true;
  w.gtag("config", GA_ID);
};

export const ConsentBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "accepted") startMeasuring();
    else if (saved !== "rejected") setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    const previous = localStorage.getItem(KEY);
    localStorage.setItem(KEY, value);
    setOpen(false);
    if (value === "accepted") startMeasuring();
    // Revoking an earlier acceptance: reload so the tag stops measuring.
    else if (previous === "accepted") window.location.reload();
  };

  if (!open) return null;
  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-[calc(80px+env(safe-area-inset-bottom))] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:bottom-[100px] z-[60] sm:w-[min(640px,calc(100vw-2rem))] glass border border-border rounded-2xl shadow-elegant p-4 sm:p-5"
    >
      <p className="text-sm text-foreground/90 leading-relaxed">
        Usamos cookies de medición (Google Analytics) para contar las visitas y mejorar el sitio. No vendemos datos. ¿Aceptás?
      </p>
      <div className="mt-4 flex gap-3 justify-end">
        <Button variant="outline" size="sm" onClick={() => choose("rejected")}>Rechazar</Button>
        <Button variant="hero" size="sm" onClick={() => choose("accepted")}>Aceptar</Button>
      </div>
    </div>
  );
};
