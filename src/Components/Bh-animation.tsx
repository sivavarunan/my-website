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
        <audio src="/music.mp3" loop></audio>

        <a
          href="https://github.com/sivavarunan"
          className="fixed bottom-10 left-10 w-6 h-6 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 448 512"
          >
            <path
              fill="none"
              d="M0 0h448v512H0z"
            />
            <path
              d="M224 32C100.3 32 0 132.3 0 256c0 100.3 63.7 184.1 151.4 213.9 11.1 2.1 15.2-4.8 15.2-10.7v-37.7c-61.6 13.4-74.6-29.8-74.6-29.8-10.1-25.6-24.6-32.4-24.6-32.4-20.1-13.8 1.5-13.5 1.5-13.5 22.3 1.6 34.1 22.9 34.1 22.9 19.8 33.8 51.7 24.1 64.3 18.5 2.1-14.4 7.7-24.1 14.1-29.6-49.9-5.7-102.6-24.9-102.6-110.4 0-24.4 8.7-44.3 23-59.9-2.3-5.7-10-28.7 2.2-59.8 0 0 18.6-5.9 61.1 22.6 17.8-4.9 36.9-7.4 56.2-7.4 19.3 0 38.4 2.5 56.2 7.4 42.6-28.5 61.1-22.6 61.1-22.6 12.2 31.1 4.5 54.1 2.2 59.8 14.3 15.6 23 35.5 23 59.9 0 85.7-52.7 104.7-102.6 110.4 7.9 6.8 15.1 20.1 15.1 40.5v60.1c0 5.9 4.1 12.8 15.2 10.7C368.3 440.1 432 356.3 432 256 432 132.3 331.7 32 224 32z"
              fill="#ffffff"
            />
          </svg>
        </a>

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
      <div className=" right-0 mt-32 h-fulloverflow-hidden">
        <div className="relative h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BhAnimation;
