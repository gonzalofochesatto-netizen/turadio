import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Pricing, plans } from "@/components/Pricing";
import { FAQ, faqs } from "@/components/FAQ";
import { WebDesign, webFaqs } from "@/components/WebDesign";
import { ProjectCta } from "@/components/ProjectCta";
import { Footer } from "@/components/Footer";
import { StickyPlayer } from "@/components/StickyPlayer";
import { WhatsAppFab } from "@/components/WhatsAppFab";


const SITE = "https://www.turadioeninternet.com.ar/";

const Index = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}#organization`,
    name: "Tu Radio en Internet",
    alternateName: "TuRadioEnInternet",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}logo.png`,
      caption: "Tu Radio en Internet",
    },
    image: `${SITE}logo.png`,
    email: "contacto@turadioeninternet.com.ar",
    telephone: "+54-9-345-403-9523",
    description:
      "Servicio profesional de streaming de radio online, servidores Icecast y SHOUTcast y diseño web profesional para emisoras en Argentina.",
    slogan: "Creá tu radio por internet con streaming de audio HD",
    areaServed: { "@type": "Country", name: "Argentina" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Entre Ríos",
      addressLocality: "Concordia",
    },
    sameAs: ["https://www.instagram.com/turadioeninternet/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["Spanish"],
        telephone: "+54-9-345-403-9523",
        email: "contacto@turadioeninternet.com.ar",
        areaServed: "AR",
      },
    ],
    knowsAbout: [
      "Streaming de radio online",
      "Servidores Icecast",
      "Servidores SHOUTcast",
      "Radio por internet",
      "Diseño web para radios",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}#website`,
    url: SITE,
    name: "Tu Radio en Internet",
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE}#organization` },
  };

  const offers = plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    description: p.tagline,
    price: p.price.replace(/\./g, ""),
    priceCurrency: "ARS",
    availability: "https://schema.org/InStock",
    url: `${SITE}#planes`,
    category: "Contratar streaming para radio online",
    itemOffered: {
      "@type": "Service",
      name: `${p.name} - Streaming de radio online`,
      description: p.features.join(". "),
    },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: p.price.replace(/\./g, ""),
      priceCurrency: "ARS",
      billingIncrement: 1,
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
  }));

  const prices = plans.map((p) => Number(p.price.replace(/\./g, "")));

  const streamingService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}#servicio-streaming`,
    name: "Streaming de radio online en HD",
    serviceType: "Streaming de audio para radios online",
    category: "Streaming de radio",
    provider: { "@id": `${SITE}#organization` },
    areaServed: { "@type": "Country", name: "Argentina" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE}#planes`,
      availableLanguage: "es-AR",
    },
    termsOfService: "Sin contratos forzosos. Podés cambiar de plan cuando quieras.",
    description:
      "Contratá streaming de radio online en Argentina: servidores Icecast v2 y SHOUTcast v2 con transferencia ilimitada, panel Sonic Panel, calidad MP3 128 kbps o AAC+, estadísticas en vivo y soporte humano 24/7. Planes mensuales desde $5.000.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "ARS",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: offers.length,
      availability: "https://schema.org/InStock",
      url: `${SITE}#planes`,
      offers,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de streaming para radios online",
      itemListElement: offers,
    },
  };


  const webService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}#servicio-web`,
    name: "Diseño web profesional para radios online",
    serviceType: "Desarrollo y diseño web para emisoras de radio",
    category: "Diseño web",
    provider: { "@id": `${SITE}#organization` },
    areaServed: { "@type": "Country", name: "Argentina" },
    description:
      "Páginas web para radios con reproductor integrado, enlaces a redes sociales, botón de WhatsApp y portales auto administrables formato Magazine, optimizados para SEO y mobile-first.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}#faq`,
    inLanguage: "es-AR",
    isPartOf: { "@id": `${SITE}#website` },
    mainEntity: [...faqs, ...webFaqs].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const jsonLd = [organization, website, streamingService, webService, faqPage];


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServicesBento />
        <Pricing />
        <WebDesign />
        <FAQ />
        <ProjectCta />
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
