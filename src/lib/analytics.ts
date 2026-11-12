export function trackWhatsAppClick(section: string) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "click_whatsapp", { section });
  }
}
