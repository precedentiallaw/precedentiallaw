
import React from 'react';

const LegalServiceSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "url": "https://precedentiallaw.com/",
    "logo": "https://precedentiallaw.com/lovable-uploads/65175c09-4b39-47fe-b83b-2560ac58cf1e.png",
    "image": "https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png",
    "description": "Premier Dubai-based legal consultancy providing expert legal services across corporate, family, real estate, immigration law and more.",
    "telephone": "+971509014120",
    "email": "info@precedentiallaw.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Tower 2 - Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": ["Dubai", "United Arab Emirates"],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/precedentiallaw",
      "https://www.linkedin.com/company/precedentiallaw",
      "https://twitter.com/precedential_law",
      "https://www.instagram.com/precedentiallaw"
    ],
    "serviceType": [
      "Corporate & Business Law",
      "Family Law & Wills",
      "Real Estate Law",
      "Immigration Law",
      "Debt Settlement & Civil Litigation",
      "Criminal Defense Advisory"
    ]
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default LegalServiceSchema;
