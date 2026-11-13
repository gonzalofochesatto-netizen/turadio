import { useState } from "react";
import { ExternalLink, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import projects from "./portfolio-data.json";
import s1 from "@/assets/portfolio/site1.jpg";
import s2 from "@/assets/portfolio/site2.jpg";
import s3 from "@/assets/portfolio/site3.jpg";
import s4 from "@/assets/portfolio/site4.jpg";
import s5 from "@/assets/portfolio/site5.jpg";
import s6 from "@/assets/portfolio/site6.jpg";
import s7 from "@/assets/portfolio/site7.jpg";
import s8 from "@/assets/portfolio/site8.jpg";

const photos = [s1, s2, s3, s4, s5, s6, s7, s8];

export const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<number | null>(null);
  const filtered = projects.filter((p) => filter === "Todos" || p.tags.includes(filter));
  const current = selected === null ? null : projects[selected];
  return (
    <section id="trabajos" className="py-10 md:py-12 scroll-mt-20" aria-labelledby="trabajos-title">
      <div className="container">
        <p className="text-primary text-xs font-semibold tracking-[.16em] uppercase">Tu Radio en Internet / Trabajos</p>
        <h2 id="trabajos-title" className="font-display text-3xl md:text-5xl font-bold tracking-tight mt-4">Webs que ya están <span className="text-gradient">al aire.</span></h2>
        <p className="text-muted-foreground mt-5 max-w-2xl leading-relaxed">Radios, noticias y proyectos con identidad propia. Conocé algunos de los sitios en los que trabajamos.</p>
        <div className="flex flex-wrap gap-2 mt-8" role="group" aria-label="Filtrar trabajos">
          {["Todos", "Radios", "Noticias", "Guías"].map((tag) => (
            <Button key={tag} type="button" variant={filter === tag ? "default" : "outline"} className="min-h-11" aria-pressed={filter === tag} onClick={() => setFilter(tag)}>{tag}</Button>
          ))}
        </div>
        <p aria-live="polite" className="text-xs text-muted-foreground mt-4 mb-6">{filtered.length} {filtered.length === 1 ? "proyecto" : "proyectos"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article key={p.number} className="rounded-2xl overflow-hidden border border-border bg-card shadow-card flex flex-col">
              <button type="button" className="relative block w-full overflow-hidden text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" onClick={() => setSelected(p.number - 1)} aria-label={`Ampliar captura de ${p.name}`}>
                <img src={photos[p.number - 1]} alt={`Portada de ${p.name}`} width="1280" height="800" loading="lazy" decoding="async" className="w-full aspect-[16/10] object-cover object-top motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]" />
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-background/95 px-3 py-2 text-xs border border-border"><Expand className="h-3.5 w-3.5" />Ampliar vista</span>
              </button>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <p className="uppercase text-[10px] tracking-[.14em] font-semibold text-primary">{p.tags.join(" / ")}</p>
                <h3 className="font-display text-xl font-semibold mt-2"><span className="text-xs text-muted-foreground font-normal mr-1">{String(p.number).padStart(2, "0")}</span>{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4">{p.description}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-primary inline-flex items-center gap-2 min-h-11 text-sm font-semibold hover:underline self-start">Visitar sitio<ExternalLink className="h-4 w-4" /><span className="sr-only">{p.name} (abre en otra pestaña)</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className="border-t border-border mt-10 pt-8">
          <h3 className="font-display text-2xl font-semibold">Tu proyecto también puede estar acá.</h3>
          <p className="text-muted-foreground mt-3 mb-5">Una web que se vea bien, se entienda y tenga tu identidad.</p>
          <Button asChild variant="hero" className="min-h-11"><a href="#contacto">Hablemos de tu proyecto</a></Button>
        </div>
      </div>
      <Dialog open={selected !== null} onOpenChange={(value) => { if (!value) setSelected(null); }}>
        {current && (
          <DialogContent className="w-[calc(100%-2rem)] max-w-6xl p-4 md:p-6 max-h-[85dvh] overflow-y-auto [&>button]:h-11 [&>button]:w-11 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:right-1 [&>button]:top-1">
            <DialogTitle className="pr-8">{current.name}</DialogTitle>
            <DialogDescription>Vista del sitio. Podés abrir la web para recorrerla completa.</DialogDescription>
            <img src={photos[current.number - 1]} alt={`Portada ampliada de ${current.name}`} className="w-full h-auto rounded-lg" />
            <a href={current.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary min-h-11 text-sm font-semibold hover:underline">Visitar sitio<ExternalLink className="h-4 w-4" /></a>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
