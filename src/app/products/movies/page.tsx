import React from 'react';
import { Card } from '@/Components/card';
import { SparklesCore } from '@/Components/sparkles';
import { NavbarC } from '@/Components/Navbar';

const MoviesPage: React.FC = () => {
  return (
    <div className="relative w-full h-auto bg-black">
      <NavbarC /> {/* Move NavbarC outside of the content wrapper */}

      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFFFFF"
      />
      
      <div className="flex justify-center items-center min-h-screen relative z-10 mt-16"> {/* Add margin-top to space out content below the Navbar */}
        <div className="p-6 max-w-screen-lg w-full bg-black bg-opacity-50 rounded-md">
          <h1 className="text-3xl font-bold text-center mb-4 text-white">Movies</h1>
          <p className="text-center mb-6 text-white">This page will showcase Movies.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 lg:gap-2">
            <Card
              title="Hollywood"
              description="This card is for some special elements, like displaying background gifs on hover only."
              imageUrl="https://images.unsplash.com/photo-1697510362388-9df6cd3e9d53?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              hoverImageUrl="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
            />
            <Card
              title="Bollywood"
              description="This card is for some special elements, like displaying background gifs on hover only."
              imageUrl="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              hoverImageUrl="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtnaDRxNXpkemhkcXFqOXF4ajVkbXZkdGFqcnhnM2xlOHEyeWV0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vaRCdgM0fLNrW/giphy.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
