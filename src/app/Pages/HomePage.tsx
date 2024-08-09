"use client"
import React from 'react';
import { NavbarDemo } from '@/Components/Navbar';
import { Vortex } from '@/Components/vortex';
import { TextGenerateEffect } from "@/Components/text-generate-effect";

const words = `Welcome to My Web Page`
export function TextGenerate() {
  return <TextGenerateEffect duration={2} filter={false} words={words} className='' />;
}

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <NavbarDemo />

      <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden mt-20">
        <Vortex
          backgroundColor="#000000"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          baseHue={180}
          baseRadius={0.5}
          baseSpeed={-1}
          rangeY={120}
          particleCount={500}
      
        >
          <h1 className="text-red text-2xl md:text-6xl font-bold text-center mb-4">
            <TextGenerate/>
          </h1>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Feel Free to Explore About Me..
            </p>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            and Let Me Know..
          </p>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
            Hay
          </button>
        </Vortex>
      </div>
    </main> 
  );
};

export default HomePage;
