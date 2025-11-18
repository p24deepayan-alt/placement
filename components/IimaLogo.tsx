import React from 'react';

interface IimaLogoProps {
  className?: string;
}

const IimaLogo: React.FC<IimaLogoProps> = ({ className }) => {
  const logoSrc = "logo.png";
  
  return (
    <img 
      src={logoSrc}
      alt="IIMA Logo"
      className={className}
    />
  );
};

export default IimaLogo;