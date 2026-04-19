import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyPlayer } from "@/components/StickyPlayer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServicesBento />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyPlayer />
      <WhatsAppFab />

      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tu Radio en Internet",
            url: "https://turadioeninternet.com.ar/",
            description:
              "Servicio profesional de streaming de radio, hosting y apps móviles para radios online.",
            sameAs: ["https://www.instagram.com/turadioeninternet/"],
          }),
        }}
      />
    </div>
  );
};

export default Index;
