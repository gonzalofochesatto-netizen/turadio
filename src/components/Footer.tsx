import { Radio, Instagram, Facebook, Mail, MapPin } from "lucide-react";

const cols = [
  {
    title: "Servicios",
    links: [
      { label: "Streaming de audio", href: "#servicios" },
      { label: "Desarrollo web", href: "#servicios" },
      { label: "Estadísticas en vivo", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Planes", href: "#planes" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Centro de ayuda", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="contacto" className="relative border-t border-border bg-card/30 pt-20 pb-10">
      <div className="container grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Radio className="h-5 w-5 text-primary-foreground" />
            </span>
            <span>Tu Radio<span className="text-primary">.</span></span>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Plataforma profesional de streaming, hosting y desarrollo para radios online.
            Estabilidad, tecnología e innovación para tu audiencia.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> contacto@turadioeninternet.com.ar
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Argentina
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.instagram.com/turadioeninternet/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="font-display font-semibold mb-4">{c.title}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Tu Radio en Internet. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Términos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};
