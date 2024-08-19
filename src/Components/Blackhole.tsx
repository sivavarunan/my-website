// components/BlackHole.tsx
'use client'
import React from 'react';
import { useEffect } from 'react';

const BlackHole: React.FC = () => {
  useEffect(() => {
    const playAudio = () => {
      const audio = document.querySelector('audio') as HTMLAudioElement;
      if (audio) audio.play();
    };

    const audioControl = document.querySelector('.bh-audio');
    if (audioControl) audioControl.addEventListener('click', playAudio);

    return () => {
      if (audioControl) audioControl.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black grid place-items-center animate-[gradient_10s_ease_infinite] bg-gradient-to-r from-black via-indigo-900 to-black">
      <div className="absolute w-[40vw] h-[40vw] rounded-[63%_50%_55%_42%/_67%_47%_65%_47%] bg-gradient-to-r from-purple-600 via-indigo-900 to-indigo-700 opacity-30 animate-[doppler_9s_ease-in-out_0.5s_infinite_backwards]" />
      <div className="absolute w-[35vw] h-[35vw] rounded-full border-[60px] border-double border-indigo-600 shadow-inner-[inset_50px_-10px_0px_4px_black] animate-[photon_8s_ease-in-out_0.5s_infinite_alternate]" />
      <div className="absolute w-[30vw] h-[30vw] rounded-[63%_50%_55%_42%/_67%_47%_65%_47%] bg-purple-600 animate-[accretion_8s_ease-in-out_0.5s_infinite_alternate]" />
      <div className="absolute w-full h-full backdrop-blur-xl z-4" />
      <div className="absolute w-[20vw] h-[20vw] bg-black rounded-full shadow-[2px_3px_10px_1px_white,_-20px_65px_160px_10px_rgba(255,255,255,0.7),_ -2px_-3px_0px_1px_rgba(255,255,255,0.2),_-4px_14px_30px_3px_rgba(255,255,255,0.5)] animate-[shadow_2s_ease-in-out_0.5s_infinite_alternate]" />

      <audio src="" loop></audio>
      <div
        className="bh-audio fixed right-10 bottom-10 z-10 text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      </div>
    </div>
  );
};

export default BlackHole;
