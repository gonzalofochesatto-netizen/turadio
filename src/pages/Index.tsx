import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Pricing } from "@/components/Pricing";
import { FAQ, faqs } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyPlayer } from "@/components/StickyPlayer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Tu Radio en Internet",
      url: "https://turadioeninternet.com.ar/",
      description:
        "Servicio profesional de streaming de radio online y diseño web profesional para emisoras en Argentina.",
      areaServed: "AR",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AR",
        addressRegion: "Entre Ríos",
        addressLocality: "Concordia",
      },
      sameAs: ["https://www.instagram.com/turadioeninternet/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["Spanish"],
        telephone: "+54-9-345-403-9523",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Streaming de radio online y diseño web para radios",
      provider: {
        "@type": "Organization",
        name: "Tu Radio en Internet",
        url: "https://turadioeninternet.com.ar/",
      },
      areaServed: { "@type": "Country", name: "Argentina" },
      description:
        "Servidores de streaming Icecast y SHOUTcast en HD, AutoDJ, estadísticas en vivo y desarrollo web profesional para radios online.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Index;
