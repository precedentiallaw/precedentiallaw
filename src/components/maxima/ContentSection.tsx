
import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alternate';
  id?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  children, 
  className = '', 
  background = 'default',
  id 
}) => {
  const bgClass = background === 'alternate' ? 'bg-gray-50' : '';
  
  return (
    <section 
      className={`content-section ${bgClass} ${className}`} 
      data-scroll-section
      id={id}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
