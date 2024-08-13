
import React from 'react';
import App from '@/Components/App';
import { BackgroundGradientAnimation } from "@/Components/background-gradient-animation";

const About = () => {
  return (
    
      <div className='relative h-screen overflow-hidden'>
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(120, 120, 120)"  // Light red
          gradientBackgroundEnd="rgb(0, 0, 0)"          // Black
          firstColor="211, 211, 211"                   // Light Gray
          secondColor="169, 169, 169"                   // Darker Gray
          thirdColor="128, 128, 128"                   // Medium Gray
          fourthColor="80, 80, 80"                      // Dark Gray
          fifthColor="0, 0, 0"                          // Black
          pointerColor="200, 200, 200"              // White for contrast
          size="20%"
          blendingValue="soft-light"
        >
          <div className="flex flex-col justify-center items-center p-4">
            <div className="max-w-screen-lg w-full">
              <div className="flex flex-col items-center justify-center mb-6">
                <h1 className="text-6xl text-center font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-3">
                  ABOUT
                </h1>
                <p className='text-6xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam aut accusamus facilis, cumque assumenda magni doloribus est nam officia ipsum corrupti neque natus, quaerat iste at autem iure soluta?</p>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
  );
};

export default About;
