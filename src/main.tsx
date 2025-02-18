import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

import { Router } from "./routes/routes.tsx";

import "./index.css";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-shop-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | Pizza.shop" />
        <Toaster richColors />
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
