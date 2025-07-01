
import React, { useEffect } from 'react';

// Skip navigation component for better accessibility
export const SkipNavigation: React.FC = () => {
  return (
    <nav className="skip-nav" aria-label="Skip navigation">
      <a 
        href="#main-content" 
        className="skip-link absolute -top-10 left-4 bg-precedential-black text-white px-4 py-2 rounded focus:top-4 z-50 transition-all"
      >
        Skip to main content
      </a>
      <a 
        href="#navigation" 
        className="skip-link absolute -top-10 left-32 bg-precedential-black text-white px-4 py-2 rounded focus:top-4 z-50 transition-all"
      >
        Skip to navigation
      </a>
    </nav>
  );
};

// Focus management for keyboard navigation
export const FocusManager: React.FC = () => {
  useEffect(() => {
    // Manage focus for single-page navigation
    const handleRouteChange = () => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

// Keyboard navigation enhancement
export const KeyboardNavigation: React.FC = () => {
  useEffect(() => {
    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // ESC key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement?.closest('[role="dialog"]') || activeElement?.closest('.dropdown-menu')) {
          const closeButton = document.querySelector('[aria-label="Close"]') as HTMLElement;
          closeButton?.click();
        }
      }

      // Tab trap for modals
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

// Screen reader announcements
export const ScreenReaderAnnouncements: React.FC = () => {
  useEffect(() => {
    // Create live region for dynamic content announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Function to announce messages to screen readers
    (window as any).announceToScreenReader = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    };

    return () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        document.body.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
};

// Color contrast enhancement
export const ContrastEnhancement: React.FC = () => {
  useEffect(() => {
    // Add high contrast mode toggle
    const addContrastToggle = () => {
      const button = document.createElement('button');
      button.innerHTML = '🔆 High Contrast';
      button.className = 'fixed bottom-4 right-20 bg-black text-white px-4 py-2 rounded z-50 text-sm';
      button.setAttribute('aria-label', 'Toggle high contrast mode');
      
      button.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        button.innerHTML = document.body.classList.contains('high-contrast') 
          ? '🔅 Normal Contrast' 
          : '🔆 High Contrast';
      });

      document.body.appendChild(button);
    };

    // Add high contrast CSS
    const addContrastStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        .high-contrast * {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        .high-contrast a {
          text-decoration: underline !important;
        }
      `;
      document.head.appendChild(style);
    };

    addContrastStyles();
    addContrastToggle();

    return () => {
      const contrastButton = document.querySelector('[aria-label="Toggle high contrast mode"]');
      if (contrastButton) {
        document.body.removeChild(contrastButton);
      }
    };
  }, []);

  return null;
};

// Text size adjustment
export const TextSizeAdjustment: React.FC = () => {
  useEffect(() => {
    let currentSize = 1;
    
    const addTextSizeControls = () => {
      const controls = document.createElement('div');
      controls.className = 'fixed bottom-4 right-4 flex gap-2 z-50';
      
      const decreaseBtn = document.createElement('button');
      decreaseBtn.innerHTML = 'A-';
      decreaseBtn.className = 'bg-black text-white px-3 py-2 rounded text-sm';
      decreaseBtn.setAttribute('aria-label', 'Decrease text size');
      
      const increaseBtn = document.createElement('button');
      increaseBtn.innerHTML = 'A+';
      increaseBtn.className = 'bg-black text-white px-3 py-2 rounded text-sm';
      increaseBtn.setAttribute('aria-label', 'Increase text size');
      
      decreaseBtn.addEventListener('click', () => {
        if (currentSize > 0.8) {
          currentSize -= 0.1;
          document.documentElement.style.fontSize = `${currentSize}rem`;
        }
      });
      
      increaseBtn.addEventListener('click', () => {
        if (currentSize < 1.5) {
          currentSize += 0.1;
          document.documentElement.style.fontSize = `${currentSize}rem`;
        }
      });
      
      controls.appendChild(decreaseBtn);
      controls.appendChild(increaseBtn);
      document.body.appendChild(controls);
    };

    addTextSizeControls();
    
    return () => {
      const controls = document.querySelector('.fixed.bottom-4.right-4.flex');
      if (controls) {
        document.body.removeChild(controls);
      }
    };
  }, []);

  return null;
};

// Main accessibility wrapper component
export const AccessibilityWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <SkipNavigation />
      <FocusManager />
      <KeyboardNavigation />
      <ScreenReaderAnnouncements />
      <ContrastEnhancement />
      <TextSizeAdjustment />
      {children}
    </>
  );
};

export default AccessibilityWrapper;
