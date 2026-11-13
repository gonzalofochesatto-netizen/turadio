// @vitest-environment node
import { describe, it, expect } from "vitest";
import { createServer } from "vite";
import path from "node:path";
import { JSDOM } from "jsdom";
import { prerenderHome } from "../../prerender";
import type { OutputBundle, NormalizedOutputOptions, PluginContext } from "rollup";
import { readFile, writeFile } from "node:fs/promises";

describe("homepage initial HTML", () => {
  it("inserts the HTML into the publication output and resolves bundled images", async () => {
    const html = await readFile("index.html", "utf8");
    const bundle: OutputBundle = {
      "index.html": { type: "asset", fileName: "index.html", name: "index.html", names: ["index.html"], originalFileName: "index.html", originalFileNames: ["index.html"], needsCodeReference: false, source: html },
    };
    const portfolio = Array.from({ length: 8 }, (_, i) => `portfolio/site${i + 1}.jpg`);
    for (const name of ["logo.png", "hero-woman-listening.jpg", ...portfolio]) {
      const base = name.split("/").pop()!;
      bundle[`assets/${base}`] = { type: "asset", fileName: `assets/${base}`, name: base, names: [base], originalFileName: `src/assets/${name}`, originalFileNames: [`src/assets/${name}`], needsCodeReference: false, source: "" };
    }
    const hook = prerenderHome().generateBundle;
    const handler = typeof hook === "function" ? hook : hook?.handler;
    if (!handler) throw new Error("Missing prerender hook");
    await handler.call({} as PluginContext, {} as NormalizedOutputOptions, bundle, false);
    const output = bundle["index.html"];
    if (output.type !== "asset") throw new Error("Missing HTML output");
    const doc: Document = new JSDOM(String(output.source)).window.document;
    expect(doc.querySelector("#root h1")).not.toBeNull();
    expect(doc.querySelector('#root script[type="application/ld+json"]')).not.toBeNull();
    expect(Array.from(doc.querySelectorAll("img"), e => e.getAttribute("src"))).toEqual(["/assets/logo.png", "/assets/hero-woman-listening.jpg", ...portfolio.map(n => `/assets/${n.split("/").pop()}`), "/assets/logo.png"]);
    if (process.env.PRERENDER_CAPTURE_PATH) await writeFile(process.env.PRERENDER_CAPTURE_PATH, String(output.source));
  }, 30000);
  it("contains the H1, plans, all FAQ answers and JSON-LD before JavaScript", async () => {
    const server = await createServer({
      configFile: false,
      server: { middlewareMode: true },
      appType: "custom",
      esbuild: { jsx: "automatic" },
      resolve: { alias: { "@": path.resolve("src") } },
    });
    try {
      const { render } = await server.ssrLoadModule("/src/entry-static.tsx");
      const html: string = render();
      const doc: Document = new JSDOM(html).window.document;
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