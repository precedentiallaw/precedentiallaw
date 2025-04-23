
import React from 'react';

const LegalServiceSchema: React.FC = () => {
  // Create a JSON-LD schema for LegalService
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Precedential Law',
    'description': 'Precedential Law delivers elite legal protection across Dubai, including family law, immigration, business, real estate, and criminal defense.',
    'url': 'https://precedential.pro/',
    'logo': 'https://precedential.pro/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'City Tower 2 - Sheikh Zayed Rd',
      'addressLocality': 'Dubai',
      'addressRegion': 'Dubai',
      'addressCountry': 'United Arab Emirates',
      'postalCode': ''
    },
    'telephone': '+971509014120',
    'email': 'info@uaeprecedentiallaw.com',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday'
        ],
        'opens': '09:00',
        'closes': '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Friday'
        ],
        'opens': '09:00',
        'closes': '12:30'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/precedentiallaw',
      'https://www.linkedin.com/company/precedentiallaw',
      'https://twitter.com/precedential_law',
      'https://www.instagram.com/precedentiallaw'
    ],
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': '25.2048',
        'longitude': '55.2708'
      },
      'geoRadius': '50000'
    },
    'priceRange': '$$',
    'serviceType': [
      'Commercial & Business Law',
      'Family Law & Wills',
      'Real Estate Law',
      'Debt Settlement & Civil Litigation',
      'Immigration Law',
      'Criminal Defense'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
    />
  );
};

export default LegalServiceSchema;
