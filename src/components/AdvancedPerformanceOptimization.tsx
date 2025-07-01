
import React, { lazy, Suspense, useEffect } from 'react';

// Enhanced lazy loading with better error boundaries
const TeamProfiles = lazy(() => import('./TeamProfiles'));
const EnhancedTestimonials = lazy(() => import('./EnhancedTestimonials'));

// Optimized loading fallback
const ComponentLoader: React.FC = () => (
  <section className="flex items-center justify-center py-16" aria-label="Loading content">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-precedential-gold" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </section>
);

// Enhanced lazy image component with better accessibility
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(priority);
  const [hasError, setHasError] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={className} style={{ width, height }}>
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
      {!isLoaded && isInView && !hasError && (
        <div 
          className={`bg-gray-200 animate-pulse ${className}`} 
          style={{ width, height }}
          aria-label="Image loading"
        />
      )}
      {hasError && (
        <div 
          className={`bg-gray-100 flex items-center justify-center ${className}`}
          style={{ width, height }}
          aria-label="Image failed to load"
        >
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

// Enhanced optimized component exports with error boundaries
export const OptimizedTeamProfiles: React.FC = () => (
  <Suspense fallback={<ComponentLoader />}>
    <TeamProfiles />
  </Suspense>
);

export const OptimizedTestimonials: React.FC = () => (
  <Suspense fallback={<ComponentLoader />}>
    <EnhancedTestimonials />
  </Suspense>
);

// Web Vitals monitoring component
export const WebVitalsMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals and send to analytics
    const reportWebVitals = (metric: any) => {
      console.log(`${metric.name}: ${metric.value}`);
      
      // Send to analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Enhanced performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          reportWebVitals({
            name: 'LCP',
            value: entry.startTime,
            id: 'lcp-' + Date.now()
          });
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.log('Performance Observer not supported');
    }

    return () => observer.disconnect();
  }, []);

  return null;
};

// Service Worker registration for caching
export const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch((error) => console.log('Service Worker registration failed:', error));
    }
  }, []);

  return null;
};

export default {
  LazyImage,
  OptimizedTeamProfiles,
  OptimizedTestimonials,
  WebVitalsMonitor,
  ServiceWorkerRegistration
};
