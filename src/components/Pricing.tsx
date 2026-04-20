import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Inicial",
    price: "5.000",
    tagline: "Ideal para dar tus primeros pasos al aire",
    features: [
      "Streaming de Audio",
      "100 oyentes en HD",
      "Transferencia ilimitada",
      "Servidores Icecast v2 y SHOUTcast v2",
      "Panel de control Sonic Panel",
      "MP3 128 kbps o AAC+",
    ],
    highlight: false,
  },
  {
    name: "Plan Intermedio",
    price: "10.000",
    tagline:
      "Streaming + Web Simple con dominio nombre-de-tu-radio.turadioeninternet.com.ar",
    features: [
      "Streaming de Audio",
      "500 oyentes en HD",
      "Transferencia ilimitada",
      "Servidores Icecast v2 y SHOUTcast v2",
      "Panel de control Sonic Panel",
      "MP3 128 kbps o AAC+",
      "Web con reproductor integrado",
      "Enlaces a redes sociales y botón de WhatsApp",
    ],
    highlight: true,
  },
  {
    name: "Plan Avanzado",
    price: "20.000",
    tagline:
      "Portal auto administrable formato Magazine + Streaming (no incluye dominio)",
    features: [
      "Streaming de Audio",
      "9999 oyentes en HD",
      "Transferencia ilimitada",
      "Servidores Icecast v2 y SHOUTcast v2",
      "Panel de control Sonic Panel",
      "MP3 128 kbps o AAC+",
      "Portal de noticias auto administrable",
      "Diseño formato Magazine",
    ],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="planes" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Planes y precios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Elegí el plan que <span className="text-gradient">potencia tu radio</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Precios en pesos argentinos. Sin contratos forzosos, cambiá de plan cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-gradient-card border-2 border-primary shadow-glow lg:-translate-y-4 lg:scale-[1.03]"
                  : "bg-card border border-border shadow-card hover:border-primary/30 transition-colors"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-muted-foreground text-lg">$</span>
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className="text-muted-foreground text-sm ml-1">/mes</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        p.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={p.highlight ? "hero" : "glow"} size="lg" asChild>
                <a
                  href={`https://wa.me/5493454039523?text=${encodeURIComponent(
                    `Hola! Quiero contratar el plan ${p.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contratar {p.name}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
