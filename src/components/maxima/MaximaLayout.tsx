
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeScroll, destroyScroll } from '@/utils/scroll';
import PageLoader from './PageLoader';
import NavHeader from './NavHeader';
import MaximaFooter from './MaximaFooter';

interface MaximaLayoutProps {
  children: React.ReactNode;
  showLoader?: boolean;
}

const MaximaLayout: React.FC<MaximaLayoutProps> = ({ children, showLoader = false }) => {
  const [isLoading, setIsLoading] = useState(showLoader);
  const location = useLocation();

  useEffect(() => {
    // Initialize Locomotive Scroll after loading is complete
    if (!isLoading) {
      const scrollInstance = initializeScroll();
      
      return () => {
        if (scrollInstance) {
          destroyScroll();
        }
      };
    }
  }, [isLoading, location.pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Page Loader */}
      {isLoading && <PageLoader onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      {!isLoading && (
        <div id="main-scroll-wrapper" data-scroll-container>
          <NavHeader />
          <main>
            {children}
          </main>
          <MaximaFooter />
        </div>
      )}
    </>
  );
};

export default MaximaLayout;
