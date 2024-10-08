
import React from 'react';
import { SparklesCore } from '@/Components/sparkles';
import App from '@/Components/ui/App';

const SeriesPage: React.FC = () => {
  return (
    <App>
    <div>
      <div className="relative h-screen overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={4.0}
          particleDensity={120}
          className="absolute inset-0"
          particleColor="#90a358"
          speed={5}
        />
        <div className="flex flex-col justify-center items-center p-4 mt-10">
         <div className="max-w-screen-lg w-full">
         <div className="flex flex-col items-center justify-center mb-6">
       <h1 className="text-6xl text-center font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-3">
        TV SERIES
      </h1>
        <p>This page will showcase TV SEIRES.</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  </App>
  );
};

export default SeriesPage;
