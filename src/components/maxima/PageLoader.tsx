
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    // Animation sequence
    const animationSequence = [
      { class: 'animprel1', delay: 500 },
      { class: 'animprel2', delay: 800 },
      { class: 'animprel3', delay: 1100 },
      { class: 'animprel4', delay: 1400 },
      { class: 'animprelEnd', delay: 1800 }
    ];

    animationSequence.forEach(({ class: className, delay }) => {
      setTimeout(() => {
        setAnimationClass(className);
        if (className === 'animprelEnd') {
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      }, delay);
    });

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  return (
    <div className={`prel prelT ${animationClass}`}>
      <div className="prelPoloska">
        <div 
          className="prelPoloska-inner" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="prelCenter">
        <div className="prelCwrap">
          <div className="prelCl">
            <img 
              src="/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png" 
              alt="Precedential Law Logo"
              width={60}
              height={60}
            />
          </div>
          <div className="prelCr">
            <div>
              <h2 style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 600 }}>
                Precedential Law
              </h2>
            </div>
            <div>
              <p style={{ color: '#cccccc', fontSize: '1rem' }}>
                Loading...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
