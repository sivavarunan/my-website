'use client'
import React, { ReactNode, useEffect } from 'react';

interface BhAnimationProps {
  children: ReactNode;
}

const BhAnimation: React.FC<BhAnimationProps> = ({ children }) => {
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
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="bh-container">
          <div className="bh-doppler"></div>
          <div className="bh-photon-ring"></div>
          <div className="bh-accretion"></div>
          <div className="bh-backdrop"></div>
          <div className="bh-shadow"></div>
        </div>
        <audio src="https://deepspace.vercel.app/audio.mp3" loop></audio>
        <div
          className="bh-audio fixed right-10 bottom-10 z-10 text-white cursor-pointer"
          aria-label="Play audio"
          role="button"
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
      <div className=" right-0 top-0 h-fulloverflow-hidden">
        <div className="relative h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BhAnimation;
