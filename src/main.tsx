import { createRoot, hydrateRoot } from "react-dom/client";
import { StaticHtmlContext } from "./lib/static-html";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  if (root.hasChildNodes()) {
    hydrateRoot(root, <StaticHtmlContext.Provider value={true}><App /></StaticHtmlContext.Provider>);
  } else {
    createRoot(root).render(<App />);
  }
}
