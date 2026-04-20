import { motion } from "framer-motion";
import { Radio, Globe, Music2, Headphones, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Streaming de Audio HD",
    desc: "Servidores Icecast v2 y SHOUTcast v2 con MP3 128kbps o AAC+ y transferencia ilimitada.",
    className: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    desc: "Sitios modernos y responsive con player integrado y panel de control.",
    className: "md:col-span-1",
  },
  {
    icon: Music2,
    title: "Calidad MP3 / AAC+",
    desc: "Audio cristalino en 128 kbps con servidores Icecast v2 y SHOUTcast v2.",
    className: "md:col-span-1",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    desc: "Equipo humano disponible siempre que tu radio te necesite.",
    className: "md:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Estadísticas en vivo",
    desc: "Conocé a tu audiencia en tiempo real con métricas detalladas.",
    className: "md:col-span-2",
  },
];

export const ServicesBento = () => {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nuestros servicios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Todo lo que tu radio necesita,{" "}
            <span className="text-gradient">en un solo lugar</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Una suite completa pensada para emisoras que quieren sonar y verse profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 md:p-8 shadow-card hover:border-primary/40 transition-all duration-500 ${s.className}`}
            >
              {s.accent && (
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors" />
              )}
              <div className="relative flex flex-col h-full">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-4 group-hover:shadow-glow transition-shadow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
