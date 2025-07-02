// src/components/sections/Hero.tsx
import React from 'react';

const metrics = [
  { label: "Years Experience", value: "15+" },
  { label: "Cases Closed", value: "300+" },
  { label: "Satisfied Clients", value: "250+" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-white space-y-8">
        <h1 className="text-4xl md:text-6xl font-light leading-tight animate-fade-in">
          Trusted Legal Consultancy in the UAE
        </h1>
        <p className="text-lg md:text-xl max-w-3xl animate-fade-in delay-200">
          At Precedential Law, we provide reliable and personalized legal guidance for
          individuals, families, and businesses across the UAE.
        </p>
        <div className="flex flex-wrap gap-8 mt-8 animate-fade-in delay-400">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{m.value}</div>
              <div className="text-sm italic">{m.label}</div>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-gold text-black font-medium rounded-md hover:bg-gold-dark transition">
          Request a Confidential Consultation
        </button>
      </div>
    </section>
  );
}
