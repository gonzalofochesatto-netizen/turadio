import { createContext, useContext } from "react";

// The server and the first hydration pass must render the same visible content.
export const StaticHtmlContext = createContext(false);
export const useStaticHtml = () => useContext(StaticHtmlContext);