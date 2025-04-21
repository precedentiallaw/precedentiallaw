
import React from 'react';

export const LegalServiceSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "description": "Top-tier Dubai-based legal consultancy providing premium legal services across family law, immigration, business, real estate, and criminal defense.",
    "url": "https://precedentiallaw.com",
    "logo": "/lovable-uploads/3264ca05-2871-450a-8753-cf69e759e918.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "UAE",
      "streetAddress": "Business Bay, Sheikh Zayed Road"
    },
    "telephone": "+971-4-456-7890",
    "email": "info@precedentiallaw.com",
    "openingHours": "Su-Th 09:00-18:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    },
    "keywords": "most trusted law firm in Dubai, legal advice UAE, Dubai legal consultation, best criminal lawyer in Dubai, family law Dubai, immigration lawyer UAE, business law firm Dubai",
    "sameAs": [
      "https://www.facebook.com/precedentiallaw",
      "https://www.linkedin.com/company/precedentiallaw",
      "https://twitter.com/precedentiallaw",
      "https://www.instagram.com/precedentiallaw"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Law Services",
            "description": "Comprehensive business and corporate legal services for companies in Dubai and UAE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Law",
            "description": "Expert legal services for divorce, child custody, and matrimonial issues in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Law",
            "description": "Legal advice and representation for property transactions in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Criminal Defense",
            "description": "Professional legal defense services for criminal cases in UAE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Immigration Services",
            "description": "Visa and immigration legal services for individuals and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dispute Resolution",
            "description": "Mediation and legal representation for conflict resolution"
          }
        }
      ]
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>
  );
};

export default LegalServiceSchema;
