import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué incluye el servicio de streaming de radio?",
    a: "Incluimos servidor Icecast v2 y SHOUTcast v2, transferencia ilimitada, panel de control Sonic Panel, codecs MP3 128 kbps o AAC+, y soporte técnico para que tu radio salga al aire en minutos.",
  },
  {
    q: "¿Puedo migrar mi radio actual sin perder oyentes?",
    a: "Sí. Realizamos la migración completa manteniendo la misma URL de transmisión y te acompañamos paso a paso para que el cambio sea transparente para tu audiencia.",
  },
  {
    q: "¿Desarrollan apps móviles para Android y iOS?",
    a: "Sí, diseñamos y publicamos apps personalizadas para tu radio en Google Play y App Store, con tu marca, programación y notificaciones push.",
  },
  {
    q: "¿Qué hosting utilizan para alta disponibilidad?",
    a: "Trabajamos con infraestructura redundante en datacenters de primer nivel, con 99.9% de uptime garantizado y monitoreo 24/7.",
  },
  {
    q: "¿Ofrecen soporte técnico en español?",
    a: "Por supuesto. Nuestro equipo en Argentina te atiende por WhatsApp, email y telefónicamente, todos los días del año.",
  },
  {
    q: "¿Puedo cambiar de plan más adelante?",
    a: "Sí. Podés ampliar o reducir tu plan cuando quieras, sin contratos de permanencia ni penalidades.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Resolvemos tus dudas <span className="text-gradient">al instante</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card rounded-2xl px-6 data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-display text-base md:text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
