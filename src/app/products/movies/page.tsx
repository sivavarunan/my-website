'use client'
import React from 'react';
import { Card } from '@/Components/card';
import App from '@/Components/ui/App';
import { Vortex } from '@/Components/vortex';

const MoviesPage: React.FC = () => {
  return (
    <App>
      <div className="relative h-screen overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          className="items-center justify-center px-4 md:px-10 py-4 w-full h-full"
          baseHue={180}
          baseRadius={0.5}
          baseSpeed={-1}
          rangeY={400}
          particleCount={500}
        >

          <div className="flex flex-col justify-center items-center p-4 mt-10">
            <div className="max-w-screen-lg w-full">
              <div className="flex flex-col items-center justify-center mb-6">
                <h1 className="text-6xl text-center font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-3">
                  MOVIES
                </h1>
                <p>This page will showcase Movies.</p>
              </div>
            </div>
          </div>

        </Vortex>
      </div>
    </App>
  );
};

export default MoviesPage;
