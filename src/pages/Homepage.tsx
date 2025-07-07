import React from 'react';
import { Helmet } from 'react-helmet-async';

// Layout
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Homepage Sections
import HeroSection from '@/components/homepage/HeroSection';
import ServicesPreview from '@/components/homepage/ServicesPreview';
import AboutPreview from '@/components/homepage/AboutPreview';
import ContactCTA from '@/components/homepage/ContactCTA';

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Precedential Law | Premier Legal Consultancy Dubai | UAE Legal Services</title>
        <meta
          name="description"
          content="Precedential Law - Premier legal consultancy in Dubai providing expert legal services for business law, family law, immigration, real estate, and civil litigation in UAE."
        />
        <meta
          name="keywords"
          content="Dubai lawyer, UAE legal services, legal consultancy Dubai, business law UAE, family law Dubai, immigration lawyer UAE"
        />
        <link rel="canonical" href="https://precedentiallaw.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Precedential Law | Premier Legal Consultancy Dubai" />
        <meta
          property="og:description"
          content="Expert legal services in Dubai and UAE. Comprehensive legal support for individuals and businesses."
        />
        <meta property="og:url" content="https://precedentiallaw.com/" />
        <meta property="og:site_name" content="Precedential Law" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precedential Law | Premier Legal Consultancy Dubai" />
        <meta
          name="twitter:description"
          content="Expert legal services in Dubai and UAE. Comprehensive legal support for individuals and businesses."
        />
      </Helmet>

      <div className="min-h-screen bg-white text-black">
        <Header />

        <main className="px-4 sm:px-6 lg:px-8">
          {/* Debug fallback wrapper around sections */}
          <section className="py-10">
            <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
            <SafeRender component={<HeroSection />} fallback="Hero section failed to load." />
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold mb-4">Services Preview</h2>
            <SafeRender component={<ServicesPreview />} fallback="Services preview failed to load." />
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold mb-4">About Preview</h2>
            <SafeRender component={<AboutPreview />} fallback="About preview failed to load." />
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold mb-4">Contact CTA</h2>
            <SafeRender component={<ContactCTA />} fallback="Contact CTA failed to load." />
          </section>
        </main>

        <Footer />
        <WhatsAppButton phoneNumber="971509014120" />
      </div>
    </>
  );
};

// Error boundary-like fallback wrapper
function SafeRender({ component, fallback }: { component: JSX.Element; fallback: string }) {
  try {
    return component;
  } catch (err) {
    console.error('[Render Error]', err);
    return <p className="text-red-500">{fallback}</p>;
  }
}

export default Homepage;