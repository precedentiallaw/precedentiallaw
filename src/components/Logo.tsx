
import React from 'react';

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "gold-on-black" | "gold-on-white" | "white-on-black" | "black-on-white" | "icon-only" | "new-gold-wings";
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "medium", 
  variant = "gold-on-black",
  animate = false
}) => {
  const sizeClass = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto",
  }[size];
  
  const logoSrc = {
    "gold-on-black": "/lovable-uploads/65175c09-4b39-47fe-b83b-2560ac58cf1e.png",  // Full logo with gold on black
    "gold-on-white": "/lovable-uploads/6a337cae-1ef7-4a8d-8d18-e3d235cf7fb8.png",  // Full logo with gold on white
    "white-on-black": "/lovable-uploads/bdf403ae-ed4f-4ce1-b72e-353238357ab8.png", // Simplified white on black
    "black-on-white": "/lovable-uploads/83957298-1678-4fd6-bc3a-fcac500bc0b0.png", // Simplified black on white
    "icon-only": "/lovable-uploads/76577c6e-222b-4930-a948-3fdb15329345.png",      // Icon only
    "new-gold-wings": "/lovable-uploads/528af0d8-ee12-44b7-8329-dee683d3d962.png"  // New gold wings logo
  }[variant];

  const animationClass = animate ? "animate-gleaming" : "";

  return (
    <img 
      src={logoSrc}
      alt="Precedential Law Logo" 
      className={`${sizeClass} ${className} ${animationClass}`}
      width={size === "small" ? 32 : size === "medium" ? 48 : 64}
      height={size === "small" ? 32 : size === "medium" ? 48 : 64}
    />
  );
};

export default Logo;
