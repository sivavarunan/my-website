"use client"
import React from 'react';
import { Vortex } from '@/Components/vortex';
import { TextGenerateEffect } from "@/Components/text-generate-effect";
import App from '@/Components/App';

const words = `Welcome to My Web Page`;

export function TextGenerate() {
  return <TextGenerateEffect duration={2} filter={false} words={words} className="font-karla bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl" />;
}

const HomePage: React.FC = () => {
  return (
    <App>
      <main className="min-h-screen flex flex-col items-center justify-center mt-[-5rem]">
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="#000000"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            baseHue={180}
            baseRadius={0.5}
            baseSpeed={-1}
            rangeY={120}
            particleCount={500}
          >
            <TextGenerate />
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl mt-4">
              Feel <span className='bg-clip-text bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30lg rounded-lg'> Free </span> to Explore About Me..
            </p>
            <button className="inline-flex  h-11 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
              get started
            </button>
          </Vortex>
        </div>
      </main>
    </App>
  );
};

export default HomePage;
