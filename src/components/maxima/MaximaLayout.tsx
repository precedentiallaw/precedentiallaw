
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeScroll, destroyScroll } from '@/utils/scroll';
import PageLoader from './PageLoader';
import NavHeader from './NavHeader';

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
          
          {/* Footer */}
          <footer className="footer" data-scroll-section>
            <div className="container">
              <div className="footer-content">
                <div className="footer-section">
                  <h4>Precedential Law</h4>
                  <p>Premier legal consultancy in the UAE</p>
                  <p>Licensed legal services across Dubai and the UAE</p>
                </div>
                <div className="footer-section">
                  <h4>Contact Information</h4>
                  <p>City Tower 2 - Sheikh Zayed Road, Dubai</p>
                  <p>Phone: +971 50 901 4120</p>
                  <p>Email: info@precedentiallaw.com</p>
                </div>
              </div>
              <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                <p>&copy; 2024 Precedential Law. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default MaximaLayout;
