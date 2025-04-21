
import React from 'react';
import { Shield, Scale, Clock, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const StorySection: React.FC = () => {
  const timelineSteps = [
    {
      year: "2015",
      title: "Foundation",
      description: "Established with a vision to redefine legal excellence in Dubai"
    },
    {
      year: "2018",
      title: "Innovation",
      description: "Pioneered client-first approach to legal services"
    },
    {
      year: "2021",
      title: "Growth",
      description: "Expanded practice areas and international reach"
    },
    {
      year: "Today",
      title: "Setting Standards",
      description: "Leading Dubai's legal landscape with precedential protection"
    }
  ];

  return (
    <section id="story" className="py-24 bg-precedential-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-precedential-gold blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-precedential-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Our <span className="text-gold-gradient">Story</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            More than a law firm—we're your shield in Dubai's legal landscape.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="glass-card p-6 transform hover:scale-105 transition-all duration-300">
            <Shield className="text-precedential-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-2">Precedential Protection</h3>
            <p className="text-muted-foreground">Setting the legal standard, not just following it. Your shield against legal uncertainty.</p>
          </Card>

          <Card className="glass-card p-6 transform hover:scale-105 transition-all duration-300">
            <Scale className="text-precedential-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-2">Our Philosophy</h3>
            <p className="text-muted-foreground">Standing between our clients and legal risk with unwavering dedication.</p>
          </Card>

          <Card className="glass-card p-6 transform hover:scale-105 transition-all duration-300">
            <Clock className="text-precedential-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-2">Evolution</h3>
            <p className="text-muted-foreground">Growing stronger through experience while staying true to our founding principles.</p>
          </Card>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {timelineSteps.map((step, index) => (
            <div
              key={step.year}
              className="flex items-start gap-6 mb-12 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-precedential-gold font-bold text-xl w-24 text-right">{step.year}</div>
              <div className="flex-1 glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative p-8">
            <Quote className="absolute text-precedential-gold/20 h-24 w-24 -top-4 -left-4" />
            <blockquote className="relative glass-card p-6 text-lg font-medium">
              "Justice isn't just fought. It's designed."
            </blockquote>
          </div>
          <div className="relative p-8">
            <Quote className="absolute text-precedential-gold/20 h-24 w-24 -top-4 -left-4" />
            <blockquote className="relative glass-card p-6 text-lg font-medium">
              "Not every law firm sets the standard—Precedential does."
            </blockquote>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-3xl">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Your Shield in Dubai's Legal Landscape Starts Here
          </h3>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-precedential-gold hover:bg-precedential-goldDark text-black text-lg px-8 py-6 h-auto"
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
