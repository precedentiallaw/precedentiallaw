
import React from 'react';

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "medium" }) => {
  const sizeClass = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto",
  }[size];

  return (
    <img 
      src="/lovable-uploads/3264ca05-2871-450a-8753-cf69e759e918.png" 
      alt="Precedential Law Logo" 
      className={`${sizeClass} ${className}`}
    />
  );
};

export default Logo;
