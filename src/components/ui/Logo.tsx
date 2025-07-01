
import React from 'react';

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "navy-gold" | "white-gold" | "gold-navy";
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "medium", 
  variant = "navy-gold",
  animate = false
}) => {
  const sizeClass = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto",
  }[size];
  
  const logoSrc = {
    "navy-gold": "/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png",
    "white-gold": "/lovable-uploads/6a337cae-1ef7-4a8d-8d18-e3d235cf7fb8.png",
    "gold-navy": "/lovable-uploads/65175c09-4b39-47fe-b83b-2560ac58cf1e.png"
  }[variant];

  const animationClass = animate ? "animate-float" : "";

  return (
    <img 
      src={logoSrc}
      alt="Precedential Law - Premier Legal Consultancy UAE" 
      className={`${sizeClass} ${className} ${animationClass} transition-all duration-300`}
      width={size === "small" ? 32 : size === "medium" ? 48 : 64}
      height={size === "small" ? 32 : size === "medium" ? 48 : 64}
    />
  );
};

export default Logo;
