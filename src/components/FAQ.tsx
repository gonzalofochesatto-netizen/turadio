import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "¿Cómo crear una radio online?",
    a: "Para crear una radio online necesitás tres cosas: un servicio de streaming de audio (servidor Icecast o SHOUTcast), un software de transmisión como BUTT, RadioBOSS o Mixxx, y una página web donde tus oyentes puedan escucharte. En Tu Radio en Internet te entregamos todo configurado y listo para salir al aire en pocas horas.",
  },
  {
    q: "¿Cuánto cuesta el streaming de radio en Argentina?",
    a: "Nuestros planes de streaming de radio en Argentina arrancan desde $5.000 mensuales para 100 oyentes en HD, con transferencia ilimitada y servidores Icecast v2 y SHOUTcast v2. Tenemos planes intermedios y avanzados que incluyen también diseño web profesional para tu emisora.",
  },
  {
    q: "¿Qué necesito para transmitir radio por internet?",
    a: "Necesitás una computadora con conexión estable, un micrófono, un software de transmisión (BUTT, RadioBOSS, Mixxx o similar) y un servidor de streaming profesional como el que ofrecemos. Nosotros te asesoramos en la configuración inicial y te damos soporte humano 24/7.",
  },
  {
    q: "¿Qué diferencia hay entre Icecast y SHOUTcast?",
    a: "Ambos son servidores de streaming de audio profesionales. SHOUTcast es muy popular en radios online y compatible con la mayoría de los reproductores; Icecast es open source y permite múltiples formatos como MP3 y AAC+. En todos nuestros planes incluimos ambos para que elijas el que mejor se adapte a tu emisora.",
  },
  {
    q: "¿Hacen también la página web de la radio?",
    a: "Sí. Ofrecemos diseño web profesional para radios: desde una web simple con reproductor integrado y enlaces a redes sociales, hasta portales auto administrables formato Magazine donde podés publicar noticias. Trabajamos con tecnología moderna, mobile-first y optimizada para SEO.",
  },
  {
    q: "¿Atienden a radios de Concordia, Entre Ríos y todo Argentina?",
    a: "Sí. Estamos en Argentina y damos servicio a emisoras de Concordia, Entre Ríos y todo el país. Brindamos atención y soporte técnico humano por WhatsApp en español, sin call centers ni respuestas automáticas.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Todo sobre <span className="text-gradient">streaming de radio</span> y diseño web
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Resolvemos las dudas más comunes sobre cómo crear una radio por internet en Argentina.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card/50 px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-display text-left text-base md:text-lg font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
