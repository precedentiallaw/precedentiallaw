// src/pages/ComingSoon.tsx

import React from 'react';

export default function ComingSoon() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        This Page Is Coming Soon
      </h1>
      <p className="text-lg text-secondary mb-8">
        We're working on this service page. Meanwhile, feel free to contact us for legal guidance.
      </p>
      <a
        href="/contact"
        className="inline-block bg-accent text-white py-3 px-6 rounded hover:bg-accent-dark transition"
      >
        Contact Precedential Law
      </a>
    </main>
  );
}