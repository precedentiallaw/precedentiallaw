
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

import Index from '@/pages/Index';
import MaximaIndex from '@/pages/MaximaIndex';
import BusinessLaw from '@/pages/services/BusinessLaw';
import FamilyLaw from '@/pages/services/FamilyLaw';
import ImmigrationLaw from '@/pages/services/ImmigrationLaw';
import RealEstateLaw from '@/pages/services/RealEstateLaw';
import CivilLitigation from '@/pages/services/CivilLitigation';
import Contact from '@/pages/Contact';
import EnhancedBusinessLaw from '@/pages/services/EnhancedBusinessLaw';
import CommercialLitigationDubai from '@/pages/services/CommercialLitigationDubai';
import DivorceLawyersDubai from '@/pages/services/DivorceLawyersDubai';
import CorporateLawDubai from '@/pages/services/CorporateLawDubai';
import CriminalDefense from '@/pages/services/CriminalDefense';
import MaximaBusinessLaw from '@/pages/services/MaximaBusinessLaw';
import Testimonials from '@/pages/Testimonials';
import MaximaAbout from '@/pages/MaximaAbout';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/maxima" element={<MaximaIndex />} />
            <Route path="/about" element={<MaximaAbout />} />
            <Route path="/services/business-law" element={<BusinessLaw />} />
            <Route path="/services/family-law" element={<FamilyLaw />} />
            <Route path="/services/immigration-law" element={<ImmigrationLaw />} />
            <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
            <Route path="/services/civil-litigation" element={<CivilLitigation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/enhanced-business-law" element={<EnhancedBusinessLaw />} />
            <Route path="/services/commercial-litigation-dubai" element={<CommercialLitigationDubai />} />
            <Route path="/services/divorce-lawyers-dubai" element={<DivorceLawyersDubai />} />
            <Route path="/services/corporate-law-dubai" element={<CorporateLawDubai />} />
            <Route path="/services/criminal-defense" element={<CriminalDefense />} />
            <Route path="/services/maxima-business-law" element={<MaximaBusinessLaw />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
