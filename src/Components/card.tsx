"use client";
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, hoverImageUrl }) => {
  return (
    <div className="max-w-xs w-full">
      <div
        className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${hoverImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <h1 className="font-bold text-xl md:text-3xl text-red-400">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-500 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
