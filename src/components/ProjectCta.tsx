import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { webDesignWhatsApp } from "@/components/WebDesign";

export const ProjectCta = () => {
  return (
    <section className="relative pb-24 pt-4 md:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14 shadow-card text-center"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-4xl font-bold">
              ¿Tenés un <span className="text-gradient">proyecto en mente</span>?
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-xl mx-auto">
              Contanos tu idea y conversemos sobre cómo llevarla a Internet.
            </p>
            <Button variant="hero" size="lg" className="mt-8 w-full sm:w-auto" asChild>
              <a href={webDesignWhatsApp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" />
                CONSULTAR POR WHATSAPP
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
