"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { Bars3Icon, UserIcon } from '@heroicons/react/24/outline';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full h-20 bg-gradient-to-r from-gray-900 to-black sticky top-0 shadow-md">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-6 text-white items-center">
          <li>
            <Link href="/about" className="hover:text-gray-400 transition-colors">About Us</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400 transition-colors">Services</Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:text-gray-400 transition-colors">Contacts</Link>
          </li>
        </ul>

        {/* Button */}
        <Button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={() => alert('Button clicked!')}>
          HI
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white" onClick={toggleMenu}>
          {isOpen ? <UserIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-20 left-0 w-full bg-black text-white transition-transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <ul className="flex flex-col items-center gap-y-4 py-4">
            <li>
              <Link href="/about" className="hover:text-gray-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-gray-400 transition-colors">Contacts</Link>
            </li>
            <li>
              <Button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={() => alert('Button clicked!')}>
                HI
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;