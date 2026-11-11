import { describe, it, expect } from "vitest";
import { createServer } from "vite";
import path from "node:path";

describe("homepage initial HTML", () => {
  it("contains the H1, plans, all FAQ answers and JSON-LD before JavaScript", async () => {
    const server = await createServer({
      configFile: false,
      server: { middlewareMode: true },
      appType: "custom",
      resolve: { alias: { "@": path.resolve("src") } },
    });
    try {
      const { render } = await server.ssrLoadModule("/src/entry-static.tsx");
      const html: string = render();
      const doc = new DOMParser().parseFromString(html, "text/html");
      expect(doc.querySelectorAll("h1")).toHaveLength(1);
      expect(doc.querySelector("h1")?.textContent).toContain("Crear tu Radio Online");
      const prices = Array.from(doc.querySelectorAll("#planes .text-5xl"), e => e.textContent);
      expect(prices).toEqual(["5.000", "10.000", "20.000"]);
      const schemas = JSON.parse(doc.querySelector('script[type="application/ld+json"]')?.textContent ?? "null");
      const faq = schemas.find((s: { "@type": string }) => s["@type"] === "FAQPage");
      expect(faq.mainEntity).toHaveLength(13);
      for (const question of faq.mainEntity) {
        const answer = Array.from(doc.querySelectorAll('[data-state="closed"]')).find(e => e.textContent === question.acceptedAnswer.text);
        expect(answer, question.name).toBeDefined();
      }
      expect(doc.querySelector("main")?.innerHTML).not.toContain("opacity:0");
    } finally {
      await server.close();
    }
  }, 30000);
});