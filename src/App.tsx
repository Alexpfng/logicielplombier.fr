import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import BulbizAvis from "./pages/BulbizAvis";
import LogicielPlombier from "./pages/LogicielPlombier";
import ApplicationPlombier from "./pages/ApplicationPlombier";
import LogicielDevisFacturePlombier from "./pages/LogicielDevisFacturePlombier";
import LogicielGestionInterventionPlombier from "./pages/LogicielGestionInterventionPlombier";
import LogicielPlanningPlombier from "./pages/LogicielPlanningPlombier";
import AssistantAdministratifPlombier from "./pages/AssistantAdministratifPlombier";
import LogicielChauffagiste from "./pages/LogicielChauffagiste";
import LogicielArtisanPlombier from "./pages/LogicielArtisanPlombier";
import FAQ from "./pages/FAQ";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bulbiz-avis" element={<BulbizAvis />} />
            <Route path="/logiciel-plombier" element={<LogicielPlombier />} />
            <Route path="/application-plombier" element={<ApplicationPlombier />} />
            <Route path="/logiciel-devis-facture-plombier" element={<LogicielDevisFacturePlombier />} />
            <Route path="/logiciel-gestion-intervention-plombier" element={<LogicielGestionInterventionPlombier />} />
            <Route path="/logiciel-planning-plombier" element={<LogicielPlanningPlombier />} />
            <Route path="/assistant-administratif-plombier" element={<AssistantAdministratifPlombier />} />
            <Route path="/logiciel-chauffagiste" element={<LogicielChauffagiste />} />
            <Route path="/logiciel-artisan-plombier" element={<LogicielArtisanPlombier />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
