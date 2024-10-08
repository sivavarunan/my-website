"use client";
import React from 'react';
import App from '@/Components/ui/App';
import { SparklesCore } from '@/Components/sparkles';
import { ExpandableCard } from '@/Components/ExpandableCard';

const VideoGamePage: React.FC = () => {
  return (
    <App>
      <div className="relative h-auto">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={4.0}
          particleDensity={120}
          className="absolute inset-0"
          particleColor="#383838"
          speed={5}
        />
        <div className="flex flex-col justify-center items-center p-4 mt-10 relative">
          <div className="max-w-screen-lg w-full">
            <div className="flex flex-col items-center justify-center mb-6">
              <h1 className="text-6xl text-center font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-3">
                VIDEO GAMES
              </h1>
              <p>This page will showcase video games I played and fell in love with.</p>
            </div>
            <div className="flex justify-center">
              <ExpandableCard />
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default VideoGamePage;
