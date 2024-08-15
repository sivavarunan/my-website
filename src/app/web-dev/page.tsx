'use client'
import React from 'react';
import App from '@/Components/App'
import { Vortex } from '@/Components/vortex';

const webpage: React.FC = () => {
  return (
    <App>
       <Vortex
              backgroundColor="transparent" // Set transparent to show BhAnimation background
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
              baseHue={180}
              baseRadius={0.5}
              baseSpeed={-1}
              rangeY={120}
              particleCount={500}
            >
      <div className='relative w-full h-auto bg-black' >
        <div className='mt-3 overflow-hidden'>
          <h1 className="text-6xl text-center md:text-6xl lg:text-6xl font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 md:p-8 lg:p-10 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out ">
            Web Devolopment
          </h1>
        </div>
        <div>
          <h2>
            Hi My Name is Siva
          </h2>
        </div>
      </div>
      </Vortex>
    </App>
  );
}

export default webpage;
