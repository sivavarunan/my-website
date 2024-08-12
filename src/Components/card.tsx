"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, hoverImageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-xs w-full">
      <div
        className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handleCardClick}
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
          
        </div>
      </div>

      <AnimatePresence>
  {isOpen && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-black rounded-lg shadow-lg max-w-lg w-full relative"
        initial={{ scale: 0.8 }} // Initial scale
        animate={{ scale: 2 }} // Final scale
        exit={{ scale: 0.8 }} // Scale when exiting
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 text-3xl"
          onClick={handleClosePopup}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};
