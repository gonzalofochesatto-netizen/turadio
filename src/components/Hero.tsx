import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-[120px] pointer-events-none" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Tecnología broadcasting de última generación
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gradient">Streaming de Radio</span> y{" "}
            <span className="text-gradient">Desarrollo Web</span> de nivel profesional
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Llevá tu emisora al siguiente nivel con servidores Icecast y SHOUTcast en alta
            definición, sitios web a medida y soporte humano 24/7. Estabilidad, tecnología e
            innovación en una sola plataforma.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#planes">
                Empezar ahora <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glow" size="xl" asChild>
              <a href="#demo">
                <PlayCircle className="h-5 w-5" /> Escuchar demo
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">+50</div>
              radios activas
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">99.9%</div>
              uptime garantizado
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-2xl font-bold text-foreground">24/7</div>
              soporte técnico
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-glow blur-3xl" />
          <img
            src={heroMockup}
            alt="Aplicación móvil de streaming de radio en modo oscuro con visualizador de audio"
            width={560}
            height={560}
            className="relative w-full max-w-md animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
