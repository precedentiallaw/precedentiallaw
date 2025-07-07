// src/pages/services/CivilCases.tsx

import React from 'react';

export default function CivilCases() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-primary mb-6">
        Civil Litigation & Legal Disputes in the UAE
      </h1>

      <p className="text-lg text-secondary mb-4">
        Whether you're facing a financial dispute, breach of contract, defamation, or property-related claims, civil litigation in the UAE can be complex and time-sensitive. At Precedential Law, we offer strategic, results-driven legal support for individuals and businesses seeking justice through the civil court system.
      </p>

      <h2 className="text-2xl font-medium mt-10 mb-4">What We Handle</h2>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li>Contract disputes (breach, non-performance, misrepresentation)</li>
        <li>Debt recovery and enforcement actions</li>
        <li>Compensation claims (property damage, emotional distress)</li>
        <li>Property and tenancy disputes</li>
        <li>Defamation, slander, and reputation management</li>
        <li>Insurance-related claims and coverage disputes</li>
      </ul>

      <h2 className="text-2xl font-medium mt-10 mb-4">Why Precedential Law?</h2>
      <ul className="list-disc pl-6 space-y-2 text-secondary">
        <li><strong>Clarity, not complexity:</strong> We explain your legal options in plain language.</li>
        <li><strong>Strategic planning:</strong> We assess the merits of your case and structure it for the best possible outcome.</li>
        <li><strong>Client-first approach:</strong> Our goal is to protect your interests, whether through settlement or court action.</li>
      </ul>

      <h2 className="text-2xl font-medium mt-10 mb-4">Let’s Talk</h2>
      <p className="text-secondary mb-6">
        If you're involved in a civil matter or believe your rights have been violated, we’re here to help you resolve it—calmly, strategically, and effectively.
      </p>

      <a
        href="/contact"
        className="inline-block bg-accent text-white py-3 px-6 rounded hover:bg-accent-dark transition"
      >
        Book a Legal Consultation
      </a>
    </main>
  );
}