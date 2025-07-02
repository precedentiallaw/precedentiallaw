
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Simulate realistic loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 12 + 3; // 3-15% increments
        const newProgress = Math.min(prev + increment, 100);
        
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 120);

    // Enhanced animation sequence matching Maxima
    const animationSequence = [
      { class: 'animprel1', delay: 300 },
      { class: 'animprel2', delay: 600 },
      { class: 'animprel3', delay: 900 },
      { class: 'animprel4', delay: 1200 },
      { class: 'animprelEnd', delay: 1600 }
    ];

    animationSequence.forEach(({ class: className, delay }) => {
      setTimeout(() => {
        setAnimationClass(className);
        if (className === 'animprelEnd') {
          // Final animation before completing
          setTimeout(() => {
            gsap.to('.prel', {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                onComplete();
              }
            });
          }, 400);
        }
      }, delay);
    });

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  return (
    <div className={`prel prelT ${animationClass}`}>
      {/* Progress Bar */}
      <div className="prelPoloska">
        <div 
          className="prelPoloska-inner" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Center Content */}
      <div className="prelCenter">
        <div className="prelCwrap">
          {/* Logo Section */}
          <div className="prelCl">
            <img 
              src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png" 
              alt="Precedential Law Logo"
              width={80}
              height={80}
            />
          </div>
          
          {/* Text Section */}
          <div className="prelCr">
            <div className="prelCr-main">
              <h2 style={{ 
                color: '#D4AF37', 
                fontSize: '2rem', 
                fontWeight: 300,
                fontFamily: 'Aktiv Grotesk, Inter, sans-serif',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem'
              }}>
                Precedential Law
              </h2>
            </div>
            <div className="prelCr-sub">
              <p style={{ 
                color: '#999999', 
                fontSize: '1rem',
                fontWeight: 400,
                letterSpacing: '0.02em'
              }}>
                {progress < 100 ? `Loading... ${Math.round(progress)}%` : 'Ready'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Loading Dots Animation */}
        <div className="prelDots" style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          gap: '0.5rem'
        }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#D4AF37',
                animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
