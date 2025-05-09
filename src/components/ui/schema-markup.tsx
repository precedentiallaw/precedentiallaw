
import React from 'react';

const LegalServiceSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "url": "https://precedentiallaw.com/",
    "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
    "image": "https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png",
    "description": "Premier Dubai-based legal consultancy providing expert legal services across corporate, family, real estate, immigration law and more.",
    "telephone": "+971509014120",
    "email": "info@precedentiallaw.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Tower 2 - Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "09:00",
        "closes": "12:30"
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
      "Business Law",
      "Family Law & Divorce",
      "Real Estate Law",
      "Immigration Law",
      "Debt Settlement & Civil Litigation",
      "Criminal Defense Advisory",
      "Contract Disputes",
      "Legal Consultation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Business & Commercial Law",
          "description": "Expert legal advice for businesses in Dubai and the UAE, including company formation, commercial contracts, and regulatory compliance.",
          "url": "https://precedentiallaw.com/services/commercial-law"
        },
        {
          "@type": "Service",
          "name": "Family Law & Divorce",
          "description": "Comprehensive family law services including divorce, child custody, and marriage contracts for UAE nationals and expatriates.",
          "url": "https://precedentiallaw.com/services/family-law"
        },
        {
          "@type": "Service",
          "name": "Real Estate Law",
          "description": "Legal support for property transactions, leasing matters, and real estate disputes in Dubai.",
          "url": "https://precedentiallaw.com/services/real-estate-law"
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Expat Client"
        },
        "datePublished": "2024-02-15",
        "reviewBody": "Exceptional service navigating Dubai's complex legal system. The team provided clear guidance throughout my case."
      }
    ]
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Create a new FAQ Schema component for the FAQ page
export const FAQSchema: React.FC<{ faqs: Array<{ question: string; answer: string }> }> = ({ faqs }) => {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
    />
  );
};

// Create a LocalBusiness schema for better local SEO
export const LocalBusinessSchema: React.FC = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://precedentiallaw.com/#organization",
    "name": "Precedential Law",
    "legalName": "Precedential Law Legal Consultancy",
    "url": "https://precedentiallaw.com/",
    "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
    "image": "https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png",
    "description": "Premier Dubai-based legal consultancy offering expert legal services across all practice areas.",
    "telephone": "+971509014120",
    "email": "info@precedentiallaw.com",
    "founders": [
      {
        "@type": "Person",
        "name": "Precedential Law Founder"
      }
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "City Tower 2 - Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      }
    },
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "25.2048",
          "longitude": "55.2708"
        },
        "geoRadius": "50000"
      }
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://precedentiallaw.com/contact",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Legal Consultation"
      }
    },
    "keywords": "Dubai law firm, legal consultation, business law, family law, divorce lawyers Dubai, immigration lawyers UAE, real estate lawyer Dubai"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
};

export default LegalServiceSchema;
