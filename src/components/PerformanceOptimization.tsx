
import React, { lazy, Suspense } from 'react';

// Lazy load heavy components
const TeamProfiles = lazy(() => import('./TeamProfiles'));
const EnhancedTestimonials = lazy(() => import('./EnhancedTestimonials'));

// Loading fallback component
const ComponentLoader: React.FC = () => (
  <div className="flex items-center justify-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-precedential-gold"></div>
  </div>
);

// Image lazy loading component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className} style={{ width, height }}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          width={width}
          height={height}
          loading="lazy"
        />
      )}
      {!isLoaded && isInView && (
        <div className="bg-gray-200 animate-pulse" style={{ width, height }} />
      )}
    </div>
  );
};

// Optimized component exports
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

// Critical CSS inlining for above-the-fold content
export const CriticalCSS = () => (
  <style>{`
    .hero-section {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    .gold-gradient {
      background: linear-gradient(45deg, #D4AF37, #FFD700, #B8860B);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `}</style>
);

export default PerformanceOptimization;
