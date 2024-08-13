"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
  bgUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, hoverImageUrl, bgUrl }) => {
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
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"
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
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
            style={{
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-lg w-full h-full bg-cover bg-center rounded-lg shadow-lg flex flex-col"
              style={{ backgroundImage: `url(${imageUrl})` }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end p-4">
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:text-red-800 text-2xl border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  onClick={handleClosePopup}
                >
                  &times;
                </button>
              </div>
              <div className="relative h-full flex flex-col  p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                <p className="text-lg text-white">{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
