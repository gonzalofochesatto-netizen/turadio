import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Pricing } from "@/components/Pricing";
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
              "Servicio profesional de streaming de radio y desarrollo web para radios online.",
            sameAs: ["https://www.instagram.com/turadioeninternet/"],
          }),
        }}
      />
    </div>
  );
};

export default Index;
