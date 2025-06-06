
import React, { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

const AnalyticsTracking: React.FC = () => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
    
    // Track page view
    trackPageView();
    
    // Set up scroll tracking
    const handleScroll = () => {
      const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercentage >= 25 && !sessionStorage.getItem('scroll_25')) {
        trackEvent({ action: 'scroll', category: 'engagement', label: '25_percent' });
        sessionStorage.setItem('scroll_25', 'true');
      }
      
      if (scrollPercentage >= 50 && !sessionStorage.getItem('scroll_50')) {
        trackEvent({ action: 'scroll', category: 'engagement', label: '50_percent' });
        sessionStorage.setItem('scroll_50', 'true');
      }
      
      if (scrollPercentage >= 75 && !sessionStorage.getItem('scroll_75')) {
        trackEvent({ action: 'scroll', category: 'engagement', label: '75_percent' });
        sessionStorage.setItem('scroll_75', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trackPageView = () => {
    const pageData = {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    };
    
    console.log('Page view tracked:', pageData);
    
    // In a real implementation, send to Google Analytics
    // gtag('config', 'GA_TRACKING_ID', pageData);
  };

  const trackEvent = (event: AnalyticsEvent) => {
    console.log('Event tracked:', event);
    
    // In a real implementation, send to Google Analytics
    // gtag('event', event.action, {
    //   event_category: event.category,
    //   event_label: event.label,
    //   value: event.value
    // });
  };

  // Track conversion events
  const trackConversion = (conversionType: string) => {
    trackEvent({
      action: 'conversion',
      category: 'lead_generation',
      label: conversionType
    });
  };

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    (window as any).trackEvent = trackEvent;
    (window as any).trackConversion = trackConversion;
  }, []);

  return null; // This component doesn't render anything
};

export default AnalyticsTracking;
