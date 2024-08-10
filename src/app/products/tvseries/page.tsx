
import React from 'react';
import { BackgroundGradientAnimation } from "@/Components/background-gradient-animation";

const SeriesPage: React.FC = () => {
  return (
    <div>
      <BackgroundGradientAnimation
       gradientBackgroundStart = "rgb(120, 120, 120)"  // Light red
       gradientBackgroundEnd = "rgb(0, 0, 0)"          // Black
       firstColor = "211, 211, 211"                   // Light Gray
       secondColor = "169, 169, 169"                   // Darker Gray
       thirdColor = "128, 128, 128"                   // Medium Gray
       fourthColor = "80, 80, 80"                      // Dark Gray
       fifthColor = "0, 0, 0"                          // Black
       pointerColor = "200, 200, 200"              // White for contrast
       size = "20%"
       blendingValue = "soft-light"
>
      <div className=" z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          TV Series
        </p>
      </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default SeriesPage;
