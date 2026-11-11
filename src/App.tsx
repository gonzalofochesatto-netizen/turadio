import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = ({ staticLocation }: { staticLocation?: string }) => {
  const routes = (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {staticLocation === undefined ? <BrowserRouter>{routes}</BrowserRouter> : <StaticRouter location={staticLocation}>{routes}</StaticRouter>}
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
