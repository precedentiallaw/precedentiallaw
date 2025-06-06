
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import BusinessLaw from "./pages/services/BusinessLaw";
import FamilyLaw from "./pages/services/FamilyLaw";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/business-law" element={<BusinessLaw />} />
            <Route path="/services/family-law" element={<FamilyLaw />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
