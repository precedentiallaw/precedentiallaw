
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximaLayout from './MaximaLayout';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  canonical?: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  description,
  children,
  canonical
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
        <meta property="og:site_name" content="Precedential Law" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://precedentiallaw.com/lovable-uploads/febbbdbe-5ee2-4d51-abbe-5f590a3a229f.png" />
      </Helmet>
      
      <MaximaLayout>
        <div className="service-page-content" data-scroll-section>
          {children}
        </div>
      </MaximaLayout>
    </>
  );
};

export default ServicePageLayout;
