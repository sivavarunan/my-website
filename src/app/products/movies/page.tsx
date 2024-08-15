'use client'
import React from 'react';
import { Card } from '@/Components/card';
import App from '@/Components/App';
import { Vortex } from '@/Components/vortex';

const MoviesPage: React.FC = () => {
  return (
    <App>
      <div className="relative h-screen overflow-hidden">
      <Vortex
          backgroundColor="transparent"
          className="items-center justify-center px-4 md:px-10 py-4 w-full h-full"
          baseHue={180}
          baseRadius={0.5}
          baseSpeed={-1}
          rangeY={400}
          particleCount={500}
        >

        <div className="flex flex-col justify-center items-center p-4 ">
          <div className="max-w-screen-lg w-full">
            <h1 className="text-6xl text-center md:text-6xl lg:text-6xl font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 md:p-8 lg:p-10 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-16">
              MOVIES
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <Card
                title="Hollywood"
                description="This card is for some special elements, like displaying background gifs on hover only."
                imageUrl="https://images.unsplash.com/photo-1697510362388-9df6cd3e9d53?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                hoverImageUrl="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
                bgUrl='https://images7.alphacoders.com/134/thumb-1920-1347611.png'
              />
              <Card
                title="Bollywood"
                description="This card is for some special elements, like displaying background gifs on hover only."
                imageUrl="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                hoverImageUrl="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtnaDRxNXpkemhkcXFqOXF4ajVkbXZkdGFqcnhnM2xlOHEyeWV0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vaRCdgM0fLNrW/giphy.webp"
                bgUrl=''
              />
            </div>
            <div className='p-4'>
              <h1>SECTION 2</h1>
            </div>
          </div>
        </div>
        </Vortex>
      </div>
    </App>
  );
};

export default MoviesPage;
