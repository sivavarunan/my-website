"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import { HomeIcon, EnvelopeIcon, CodeBracketIcon, CommandLineIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin ,faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export function NavbarC() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-3" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between">
          <HoveredLink href="/">
            <HomeIcon className="mr-2 h-6 w-7  hover:text-red-400 cursor-pointer" />
          </HoveredLink>
        </div>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">
              <div className="flex items-center space-x-2">
                <CodeBracketIcon className="w-6 h-6" />
                <span>Web Development</span>
              </div>
            </HoveredLink>
            <HoveredLink href="/software-dev">
              <div className="flex items-center space-x-2">
                <CommandLineIcon className="w-6 h-6" />
                <span>Software Devolopment</span>
              </div>
            </HoveredLink>
            <HoveredLink href="/seo">
              <div className="flex items-center space-x-2">
                <ComputerDesktopIcon className="w-6 h-6" />
                <span>Video Game Devolopment</span>
              </div>
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Hobbies">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Video Games"
              href="/products/videogame"
              src="/images/videogame.png"
              description="Peaceful Life."
            />
            <ProductItem
              title="Anime"
              href="/products/anime"
              src="/images/anime.jpg"
              description="Peak Fictions."
            />
            <ProductItem
              title="Movies"
              href="/products/movies"
              src="/images/movie.jpg"
              description="The Absolute Masterclass."
            />
            <ProductItem
              title="TV-Series"
              href="/products/tvseries"
              src="/images/tvseries.jpg"
              description="Mind Bending Modern Literature."
            />
            <ProductItem
              title="Books"
              href="/products/books"
              src="/images/book.jpg"
              description="The books I lost myself in."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:tharagan2001@gmail.com">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-6 h-6" />
                <span>Email Me</span>
              </div>
            </HoveredLink>
            <HoveredLink href="https://web.facebook.com/sivavarunan.siva">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faSquareFacebook} className="w-6 h-6" />
                <span>Facebook</span>
              </div>
            </HoveredLink>
            <HoveredLink href="https://www.instagram.com/sivavarunan/">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                <span>Instagram</span>
              </div>
            </HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/thevarasa-sivavarunan-0b587a266">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                <span>Linkedn</span>
              </div>
            </HoveredLink>

          </div>
        </MenuItem>
      </Menu>
    </nav>
  );
}
