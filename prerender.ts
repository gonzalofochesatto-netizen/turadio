import { createServer, type Plugin } from "vite";
import path from "node:path";

// Render the existing React tree, not a second handwritten copy of the page.
export function prerenderHome(): Plugin {
  return {
    name: "prerender-home",
    apply: "build",
    enforce: "post",
    async generateBundle(_options, bundle) {
      const html = bundle["index.html"];
      if (!html || html.type !== "asset") throw new Error("Missing homepage HTML");
      const server = await createServer({
        configFile: false,
        server: { middlewareMode: true },
        appType: "custom",
        esbuild: { jsx: "automatic" },
        resolve: { alias: { "@": path.resolve("src") } },
      });
      try {
        const entry = await server.ssrLoadModule("/src/entry-static.tsx");
        let markup: string = entry.render();
        for (const output of Object.values(bundle)) {
          if (output.type !== "asset") continue;
          const sourceName = output.originalFileName ?? output.name;
          if (!sourceName) continue;
          const sourcePath = sourceName.startsWith("src/")
            ? `/${sourceName}`
            : `/src/assets/${path.basename(sourceName)}`;
          markup = markup.split(sourcePath).join(`/${output.fileName}`);
        }
        if (/\/(?:src|@fs)\/[^"\s]+\.(?:png|jpe?g|webp)/.test(markup)) {
          throw new Error("Prerender contains an unresolved source image");
        }
        const source = String(html.source);
        if (!source.includes('<div id="root"></div>')) throw new Error("Missing root placeholder");
        html.source = source.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
      } finally {
        await server.close();
      }
    },
  };
}