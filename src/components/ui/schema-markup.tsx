
import React from 'react';

export const LegalServiceSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "description": "Top-tier Dubai-based legal consultancy providing premium legal services.",
    "url": "https://precedentiallaw.com",
    "logo": "/lovable-uploads/3264ca05-2871-450a-8753-cf69e759e918.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "UAE"
    },
    "telephone": "+971-4-123-4567",
    "email": "info@precedentiallaw.com",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Law Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Litigation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Law"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intellectual Property"
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
