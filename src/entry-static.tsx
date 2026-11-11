import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticHtmlContext } from "./lib/static-html";

export function render() {
  return renderToString(
    <StaticHtmlContext.Provider value={true}>
      <App staticLocation="/" />
    </StaticHtmlContext.Provider>,
  );
}