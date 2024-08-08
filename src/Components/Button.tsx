"use client";

import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-300 text-white rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
