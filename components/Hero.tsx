
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative bg-gray-100"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(230,235,240,0.5) 100%), linear-gradient(135deg, hsla(0,0%,100%,.09) 25%, transparent 25%, transparent 75%, hsla(0,0%,100%,.09) 75%, hsla(0,0%,100%,.09)), linear-gradient(45deg, hsla(0,0%,100%,.09) 25%, transparent 25%, transparent 75%, hsla(0,0%,100%,.09) 75%, hsla(0,0%,100%,.09))'
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-80">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-iima-blue text-center tracking-wide">
            Careers and Placements
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
