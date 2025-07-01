
import React from 'react';

// Main Legal Service Schema
export const LegalServiceSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Precedential Law",
    "alternateName": "Precedential Law Legal Consultancy",
    "url": "https://precedentiallaw.com/",
    "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
    "image": "https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png",
    "description": "Premier UAE-based legal consultancy providing expert legal services across business law, family law, real estate, immigration, and civil litigation for expatriates and UAE nationals.",
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
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "City", 
        "name": "Abu Dhabi"
      },
      {
        "@type": "City",
        "name": "Sharjah"
      }
    ],
    "priceRange": "$$",
    "serviceType": [
      "UAE Business Law",
      "UAE Family Law & Divorce",
      "UAE Real Estate Law", 
      "UAE Immigration Law",
      "UAE Civil Litigation",
      "UAE Criminal Defense Advisory",
      "UAE Contract Disputes",
      "UAE Legal Consultation",
      "DIFC Wills",
      "UAE Corporate Formation",
      "UAE Employment Law"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UAE Legal Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "UAE Business & Corporate Law",
          "description": "Expert legal advice for businesses in the UAE, including company formation, commercial contracts, and regulatory compliance.",
          "url": "https://precedentiallaw.com/services/business-law"
        },
        {
          "@type": "Service", 
          "name": "UAE Family Law & Divorce",
          "description": "Comprehensive family law services including divorce, child custody, and marriage contracts for UAE nationals and expatriates.",
          "url": "https://precedentiallaw.com/services/family-law"
        },
        {
          "@type": "Service",
          "name": "UAE Real Estate Law",
          "description": "Legal support for property transactions, leasing matters, and real estate disputes across the UAE.",
          "url": "https://precedentiallaw.com/services/real-estate-law"
        },
        {
          "@type": "Service",
          "name": "UAE Immigration Law", 
          "description": "Visa applications, residency permits, and immigration advisory services for individuals and families.",
          "url": "https://precedentiallaw.com/services/immigration-law"
        }
      ]
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// FAQ Schema for FAQ pages
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

// Article Schema for blog posts
export const ArticleSchema: React.FC<{
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}> = ({ headline, description, datePublished, dateModified, authorName, url }) => {
  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": "https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png",
    "author": {
      "@type": "Organization",
      "name": authorName || "Precedential Law"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Precedential Law",
      "logo": {
        "@type": "ImageObject",
        "url": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
    />
  );
};

// LocalBusiness Schema for enhanced local SEO
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
    "description": "Premier UAE-based legal consultancy offering expert legal services across all practice areas for expatriates and UAE nationals.",
    "telephone": "+971509014120",
    "email": "info@precedentiallaw.com",
    "sameAs": [
      "https://www.linkedin.com/company/precedentiallaw",
      "https://twitter.com/precedential_law"
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
        "geoRadius": "100000"
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
    "keywords": "UAE law firm, legal consultation UAE, business law UAE, family law UAE, divorce lawyers UAE, immigration lawyers UAE, real estate lawyer UAE, expat legal services UAE"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
};

// Organization Schema
export const OrganizationSchema: React.FC = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Precedential Law",
    "url": "https://precedentiallaw.com/",
    "logo": "https://precedentiallaw.com/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971509014120",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Tower 2 - Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person", 
        "name": "Precedential Law Legal Team"
      }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "UAE Legal Community"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
};

export default LegalServiceSchema;
