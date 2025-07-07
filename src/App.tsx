
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// Main Pages
import Homepage from '@/pages/Homepage';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';

// Service Pages
import BusinessLaw from '@/pages/services/BusinessLaw';
import FamilyLaw from '@/pages/services/FamilyLaw';
import CivilCases from '@/pages/services/CivilCases';
import RealEstateLaw from '@/pages/services/RealEstateLaw';
import ImmigrationLaw from '@/pages/services/ImmigrationLaw';
import DebtSettlement from '@/pages/services/DebtSettlement';
//import BouncedCheque from '@/pages/services/BouncedCheque';
import PersonalInjury from '@/pages/services/PersonalInjury';
import RentalDisputes from '@/pages/services/RentalDisputes';
import CriminalDefense from '@/pages/services/CriminalDefense';
import ContractDisputes from '@/pages/services/ContractDisputes';
import WillWriting from '@/pages/services/WillWriting';
import PowerOfAttorney from '@/pages/services/PowerOfAttorney';
import LegalConsulting from '@/pages/services/LegalConsulting';

// Special Tools Pages
import TrackCase from '@/pages/tools/TrackCase';
import TravelBanCheck from '@/pages/tools/TravelBanCheck';
import ArrestWarrantCheck from '@/pages/tools/ArrestWarrantCheck';
import PoliceStationGuide from '@/pages/tools/PoliceStationGuide';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Pages */}
            <Route path="/services/business-law" element={<BusinessLaw />} />
            <Route path="/services/family-law" element={<FamilyLaw />} />
            <Route path="/services/civil-cases" element={<CivilCases />} />
            <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
            <Route path="/services/immigration-law" element={<ImmigrationLaw />} />
            <Route path="/services/debt-settlement" element={<DebtSettlement />} />
            <Route path="/services/bounced-cheque" element={<BouncedCheque />} />
            <Route path="/services/personal-injury" element={<PersonalInjury />} />
            <Route path="/services/rental-disputes" element={<RentalDisputes />} />
            <Route path="/services/criminal-defense" element={<CriminalDefense />} />
            <Route path="/services/contract-disputes" element={<ContractDisputes />} />
            <Route path="/services/will-writing" element={<WillWriting />} />
            <Route path="/services/power-of-attorney" element={<PowerOfAttorney />} />
            <Route path="/services/legal-consulting" element={<LegalConsulting />} />
            
            {/* Legal Tools */}
            <Route path="/tools/track-case" element={<TrackCase />} />
            <Route path="/tools/travel-ban-check" element={<TravelBanCheck />} />
            <Route path="/tools/arrest-warrant-check" element={<ArrestWarrantCheck />} />
            <Route path="/tools/police-station-guide" element={<PoliceStationGuide />} />
          </Routes>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
