export function trackWhatsAppClick(section: string) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function"
      && localStorage.getItem("ga_consent") === "accepted") {
    (window as any).gtag("event", "click_whatsapp", { section });
  }
}
