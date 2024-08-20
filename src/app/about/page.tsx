import React from 'react';
import { BackgroundGradientAnimation } from "@/Components/background-gradient-animation";
import App from '@/Components/ui/App';

const About = () => {
  return (
    <App>
    <div className="relative h-screen overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(39, 31, 79)" 
        gradientBackgroundEnd="rgb(22, 25, 49)"   
        firstColor="120, 120, 120"               
        secondColor="24, 19, 44"              
        thirdColor="26, 15, 92"                
        fourthColor="78, 57, 196"               
        fifthColor="145, 165, 145"                  
        pointerColor="0, 0, 0"                
        size="80%"
        blendingValue="soft-light"
      >
        <div className="absolute z-40 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl ">
        <div className="absolute inset-x-0 p-8 bg-black bg-opacity-50 text-white text-lg leading-relaxed max-w-3xl mx-auto rounded-t-lg ">
        <h1 className="text-4xl font-bold mb-4 font-sans">ABOUT ME</h1>
        <p className="mb-4 font-mono text-gray-400">
          Welcome to my page! I am passionate about creating visually appealing and highly interactive web experiences.
        </p>
        <p className="mb-4 font-mono text-gray-300">
          My mission is to merge aesthetics with functionality, ensuring that every project I undertake not only looks stunning but also provides an exceptional user experience. From sleek, modern gradients to complex animations, we believe in pushing the boundaries of what is possible on the web.
        </p>
        <p className='font-mono text-gray-400'>
          Thank you for visiting my site. I hope you find inspiration in my work and look forward to collaborating on exciting projects!
        </p>
      </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
    </App>
  );
};

export default About;
