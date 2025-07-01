import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AccessibilityWrapper from "@/components/AccessibilityEnhancements";

import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import BusinessLaw from "./pages/services/BusinessLaw";
import FamilyLaw from "./pages/services/FamilyLaw";
import RealEstateLaw from "./pages/services/RealEstateLaw";
import ImmigrationLaw from "./pages/services/ImmigrationLaw";
import CorporateLawDubai from "./pages/services/CorporateLawDubai";
import DivorceLawyersDubai from "./pages/services/DivorceLawyersDubai";
import GoldenVisaLawyers from "./pages/services/GoldenVisaLawyers";
import CivilLitigation from "./pages/services/CivilLitigation";
import CommercialLitigationDubai from "./pages/services/CommercialLitigationDubai";
import CriminalDefense from "./pages/services/CriminalDefense";
import DebtSettlement from "./pages/services/DebtSettlement";
import ContractDisputes from "./pages/services/ContractDisputes";
import EmploymentLawUAE from "./pages/services/EmploymentLawUAE";
import DIFCWills from "./pages/services/DIFCWills";
import UAECompanyFormation from "./pages/UAECompanyFormation";
import DubaiBusinessSetupLawyers from "./pages/DubaiBusinessSetupLawyers";
import ExpatLegalServicesDubai from "./pages/ExpatLegalServicesDubai";
import ExpatLegalServicesDubaiEnhanced from "./pages/ExpatLegalServicesDubaiEnhanced";
import ExpatLegalGuides from "./pages/ExpatLegalGuides";
import UAECorporateTaxLawyers from "./pages/UAECorporateTaxLawyers";
import LegalTools from "./pages/LegalTools";
import FAQ from "./pages/FAQ";
import LegalGuides from "./pages/LegalGuides";
import NotFound from "./pages/NotFound";
import EnhancedBusinessLaw from "./pages/services/EnhancedBusinessLaw";
import LegalToolsEnhanced from "./pages/LegalToolsEnhanced";
import ClientPortalPage from "./pages/ClientPortalPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <AccessibilityWrapper>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              
              {/* Enhanced Service Pages */}
              <Route path="/services/business-law" element={<BusinessLaw />} />
              <Route path="/services/business-law-enhanced" element={<EnhancedBusinessLaw />} />
              <Route path="/services/corporate-law-dubai" element={<CorporateLawDubai />} />
              <Route path="/services/family-law" element={<FamilyLaw />} />
              <Route path="/services/divorce-lawyers-dubai" element={<DivorceLawyersDubai />} />
              <Route path="/services/immigration-law" element={<ImmigrationLaw />} />
              <Route path="/services/golden-visa-lawyers" element={<GoldenVisaLawyers />} />
              <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
              <Route path="/services/civil-litigation" element={<CivilLitigation />} />
              <Route path="/services/commercial-litigation-dubai" element={<CommercialLitigationDubai />} />
              <Route path="/services/criminal-defense" element={<CriminalDefense />} />
              <Route path="/services/debt-settlement" element={<DebtSettlement />} />
              <Route path="/services/contract-disputes" element={<ContractDisputes />} />
              <Route path="/services/employment-law-uae" element={<EmploymentLawUAE />} />
              <Route path="/services/difc-wills" element={<DIFCWills />} />
              
              {/* High-Value Content Pages */}
              <Route path="/uae-company-formation" element={<UAECompanyFormation />} />
              <Route path="/dubai-business-setup-lawyers" element={<DubaiBusinessSetupLawyers />} />
              <Route path="/expat-legal-services-dubai" element={<ExpatLegalServicesDubai />} />
              <Route path="/expat-legal-services-enhanced" element={<ExpatLegalServicesDubaiEnhanced />} />
              <Route path="/expat-legal-guides" element={<ExpatLegalGuides />} />
              <Route path="/uae-corporate-tax-lawyers" element={<UAECorporateTaxLawyers />} />
              
              {/* Enhanced Tools & Features */}
              <Route path="/legal-tools-enhanced" element={<LegalToolsEnhanced />} />
              <Route path="/client-portal" element={<ClientPortalPage />} />
              
              {/* Information Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/legal-tools" element={<LegalTools />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal-guides" element={<LegalGuides />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AccessibilityWrapper>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
