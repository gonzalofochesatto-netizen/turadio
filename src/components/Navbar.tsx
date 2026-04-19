import { useEffect, useState } from "react";
import { Radio, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Principal">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Radio className="h-5 w-5 text-primary-foreground" />
          </span>
          <span>Tu Radio<span className="text-primary">.</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" asChild>
            <a href="#planes">Empezar ahora</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border/50">
          <ul className="container py-4 flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#planes">Empezar ahora</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
