
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import WhyUs from '@/pages/WhyUs';
import Testimonials from '@/pages/Testimonials';
import Blog from '@/pages/Blog';
import FAQ from '@/pages/FAQ';
import CaseStudies from '@/pages/CaseStudies';
import LegalGuides from '@/pages/LegalGuides';
import Resources from '@/pages/Resources';
import LegalTools from '@/pages/LegalTools';
import NotFound from '@/pages/NotFound';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';

// Service Pages
import BusinessLaw from '@/pages/services/BusinessLaw';
import CorporateLawDubai from '@/pages/services/CorporateLawDubai';
import FamilyLaw from '@/pages/services/FamilyLaw';
import DivorceLawyersDubai from '@/pages/services/DivorceLawyersDubai';
import ImmigrationLaw from '@/pages/services/ImmigrationLaw';
import GoldenVisaLawyers from '@/pages/services/GoldenVisaLawyers';
import RealEstateLaw from '@/pages/services/RealEstateLaw';
import CivilLitigation from '@/pages/services/CivilLitigation';
import CommercialLitigationDubai from '@/pages/services/CommercialLitigationDubai';
import CriminalDefense from '@/pages/services/CriminalDefense';
import DebtSettlement from '@/pages/services/DebtSettlement';
import ContractDisputes from '@/pages/services/ContractDisputes';
import EmploymentLawUAE from '@/pages/services/EmploymentLawUAE';
import DIFCWills from '@/pages/services/DIFCWills';

// SEO Landing Pages
import UAECompanyFormation from '@/pages/UAECompanyFormation';
import DubaiBusinessSetupLawyers from '@/pages/DubaiBusinessSetupLawyers';
import ExpatLegalServicesDubai from '@/pages/ExpatLegalServicesDubai';
import UAECorporateTaxLawyers from '@/pages/UAECorporateTaxLawyers';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/legal-guides" element={<LegalGuides />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/legal-tools" element={<LegalTools />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* Service Pages */}
            <Route path="/services/business-law" element={<BusinessLaw />} />
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
            
            {/* SEO Landing Pages */}
            <Route path="/uae-company-formation" element={<UAECompanyFormation />} />
            <Route path="/dubai-business-setup-lawyers" element={<DubaiBusinessSetupLawyers />} />
            <Route path="/expat-legal-services-dubai" element={<ExpatLegalServicesDubai />} />
            <Route path="/uae-corporate-tax-lawyers" element={<UAECorporateTaxLawyers />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
