import { motion } from "framer-motion";
import { Briefcase, Store, Rocket, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const webFaqs = [
  {
    q: "¿Cuánto cuesta hacer una página web para un negocio?",
    a: "El precio depende del alcance: una web institucional de una página con secciones de servicios, contacto y WhatsApp es más económica que un sitio con catálogo, blog o panel auto administrable. Contanos qué necesitás por WhatsApp y te enviamos un presupuesto cerrado, sin costos ocultos y con los tiempos de entrega por escrito.",
  },
  {
    q: "¿Cuánto tarda el desarrollo de un sitio web?",
    a: "Una web de presentación para un profesional o comercio suele estar publicada en pocos días desde que recibimos textos, logo e imágenes. Los proyectos con catálogo, secciones administrables o integraciones requieren más tiempo, y te lo confirmamos antes de empezar.",
  },
  {
    q: "¿La página web se ve bien en el celular y aparece en Google?",
    a: "Sí. Desarrollamos con enfoque mobile-first, carga rápida y estructura optimizada para SEO: títulos y encabezados semánticos, metadatos, textos orientados a tus servicios y datos estructurados para que Google entienda a qué se dedica tu negocio.",
  },
  {
    q: "¿Qué necesito para empezar mi página web?",
    a: "Con tu logo (si lo tenés), una descripción de tus servicios, fotos y los datos de contacto podemos arrancar. Si todavía no tenés dominio ni textos definidos, te asesoramos para elegirlos y redactamos el contenido comercial junto a vos.",
  },
];

const WA_NUMBER = "5493454039523";
const WA_MESSAGE =
  "Hola, quiero consultar por el desarrollo de una página web para mi negocio.";
export const webDesignWhatsApp = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

const items = [
  {
    icon: Briefcase,
    title: "Profesionales",
    desc: "Sitios web para profesionales independientes, estudios, consultorios y servicios.",
  },
  {
    icon: Store,
    title: "Comercios",
    desc: "Mostrá tus productos, servicios, horarios, ubicación y formas de contacto.",
  },
  {
    icon: Rocket,
    title: "Emprendedores",
    desc: "Transformá tu idea o emprendimiento en una presencia web profesional.",
  },
];

export const WebDesign = () => {
  return (
    <section id="web" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Diseño y desarrollo web
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
            ¿Necesitás una <span className="text-gradient">página web para tu negocio</span>?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            También desarrollamos sitios web profesionales para profesionales, comercios y
            emprendedores que quieren tener una presencia sólida y profesional en Internet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-card hover:border-primary/40 transition-all duration-500"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-5 group-hover:shadow-glow transition-shadow">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 rounded-3xl border border-primary/30 bg-gradient-card p-8 md:p-12 shadow-card text-center max-w-3xl mx-auto"
        >
          <p className="font-display text-2xl md:text-3xl font-bold">
            Tu negocio también merece estar en Internet.
          </p>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Contanos qué hacés y qué necesitás. Analizamos tu proyecto y te ofrecemos una
            propuesta acorde a tus objetivos.
          </p>
          <Button variant="hero" size="lg" className="mt-8 w-full sm:w-auto" asChild>
            <a href={webDesignWhatsApp} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              CONSULTAR POR WHATSAPP
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
