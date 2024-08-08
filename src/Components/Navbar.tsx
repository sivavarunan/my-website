"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-3" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 shadow-lg", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
            <HoveredLink href="/consulting">Consulting</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
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
            <HoveredLink href="/contact/email">Email Us</HoveredLink>
            <HoveredLink href="/contact/support">Support</HoveredLink>
            <HoveredLink href="/contact/sales">Sales</HoveredLink>
            <HoveredLink href="/contact/feedback">Feedback</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </nav>
  );
}
