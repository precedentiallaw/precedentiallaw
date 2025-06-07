
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import EnhancedTestimonials from '@/components/EnhancedTestimonials';
import AdvancedAppointmentBooking from '@/components/AdvancedAppointmentBooking';

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Client Testimonials | Precedential Law Dubai | Real Client Reviews & Success Stories</title>
        <meta name="description" content="Read authentic client testimonials and success stories from Precedential Law. Discover why we're Dubai's most trusted legal consultancy with proven results." />
        <meta name="keywords" content="client testimonials dubai lawyers, legal services reviews, precedential law reviews, dubai law firm testimonials, client success stories" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        {/* Enhanced Testimonials */}
        <ScrollReveal>
          <EnhancedTestimonials />
        </ScrollReveal>
        
        {/* Advanced Appointment Booking */}
        <ScrollReveal>
          <AdvancedAppointmentBooking />
        </ScrollReveal>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="971509014120" />
    </div>
  );
};

export default Testimonials;
