"use client";
import React from 'react';
import { TextGenerateEffect } from "@/Components/text-generate-effect";
import App from '@/Components/App';
import BhAnimation from '@/Components/Bh-animation';
import Link from 'next/link';

const words = `Welcome to My Web Page`;

export function TextGenerate() {
  return (
    <TextGenerateEffect
      duration={2}
      filter={false}
      words={words}
      className="font-karla bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl text-center"
    />
  );
}

const HomePage: React.FC = () => {
  return (
    <App>
      <BhAnimation>
        <main className="relative z-10 p-4 w-full h-full flex items-center justify-center">
          <div className="w-full max-w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden flex flex-col items-center justify-center">
            <TextGenerate />
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl text-center mt-4">
              Feel <span className='bg-clip-text bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30lg rounded-lg'> Free </span> to Explore About Me..
            </p>
            <Link href="/pages/about" passHref>
              <button
                className="inline-flex h-11 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6"
                aria-label="Get started"
              >
                Get started
              </button>
            </Link>
          </div>
        </main>
      </BhAnimation>
    </App>
  );
};

export default HomePage;
