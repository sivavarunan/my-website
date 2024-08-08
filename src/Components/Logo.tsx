import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="w-24 h-auto">
      <Image 
        src="/bg6.png" 
        alt="Logo" 
        width={96} 
        height={96} 
        className="object-contain"
      />
    </div>
  );
}

export default Logo;
