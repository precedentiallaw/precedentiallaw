
import React from 'react';

const keywords = [
  "Dubai Legal Services",
  "Legal Advice Dubai",
  "Family Law Dubai",
  "Immigration Law UAE",
  "Business Law Firm Dubai",
  "Criminal Defense Dubai",
  "Real Estate Law UAE",
  "Corporate Law Dubai",
  "Dispute Resolution UAE",
  "Personal Injury Lawyer Dubai"
];

const KeywordStrip: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-precedential-black/5 py-4">
      <div className="animate-marquee whitespace-nowrap">
        {keywords.map((keyword, i) => (
          <span
            key={i}
            className="mx-4 inline-block text-precedential-gold font-medium"
          >
            {keyword} <span className="text-precedential-black">•</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {keywords.map((keyword, i) => (
          <span
            key={`dup-${i}`}
            className="mx-4 inline-block text-precedential-gold font-medium"
          >
            {keyword} <span className="text-precedential-black">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordStrip;
