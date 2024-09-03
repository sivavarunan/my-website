import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/Components/Use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
         <div className="fixed inset-0  grid place-items-center z-[100]">
         <motion.button
           key={`button-${active.title}-${id}`}
           layout
           initial={{
             opacity: 0,
           }}
           animate={{
             opacity: 1,
           }}
           exit={{
             opacity: 0,
             transition: {
               duration: 0.05,
             },
           }}
           className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
           onClick={() => setActive(null)}
         >
          </motion.button>           <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-lg h-full md:h-auto bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={450}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 object-cover object-center"
                />
              </motion.div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout
                  className="text-neutral-600 dark:text-neutral-400 text-sm h-48 overflow-auto"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>

             
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={400}
                  height={400}
                  src={card.src}
                  alt={card.title}
                  className="h-24 w-24 rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 mt-1"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    title: "Fortnite",
    description: "Battle Royale",
    src: "/fort.jpg",
    ctaText: "Play",
    ctaLink: "https://www.fortnite.com",
    content: () => {
      return (
        <p>
          Fortnite, developed by Epic Games and released in 2017,
          is a widely popular online video game known for its vibrant graphics,
          fast-paced gameplay, and unique building mechanics. The game offers
          three main modes: Battle Royale, where up to 100 players compete to be the last one
          standing on an ever-shrinking island; Save the World, a cooperative mode where players
          team up to fend off waves of zombie-like creatures while building fortifications; and Creative,
          which gives players the freedom to design their own maps and games. Fortnite has become a cultural phenomenon,
          renowned for its frequent updates, in-game events, and collaborations with various brands and celebrities.
          Its influence extends beyond gaming, making it a significant part of modern pop culture.
        </p>
      );
    },
  },
  {
    title: "Minecraft",
    description: "Survival",
    src: "/mc.jpg",
    ctaText: "Play",
    ctaLink: "https://www.minecraft.net/",
    content: () => {
      return (
        <p>
          Minecraft, developed by Mojang Studios and released in 2011,
          is a sandbox video game that has become one of the best-selling and most influential
          games of all time. Known for its blocky, pixelated graphics, Minecraft offers
          players an open-ended world where they can explore, mine resources, craft tools
          and items, and build structures in a virtually infinite landscape. The game features
          several modes, including Survival, where players must manage resources, health, and hunger
          while defending against creatures like zombies and skeletons; Creative, which grants unlimited
          resources and allows players to focus on building and creativity without the threat of enemies;
          and Adventure, designed for custom maps with specific challenges. Minecraft simplicity and
          limitless possibilities have fostered a massive community, inspiring creativity, education,
          and collaboration. The game enduring popularity is reflected in its expansive modding scene,
          frequent updates, and widespread cultural impact, making it a cornerstone of modern gaming.
        </p>
      );
    },
  },

  {
    title: "CS:GO",
    description: "First Person Shooter",
    src: "/cs.jpg",
    ctaText: "Play",
    ctaLink: "https://www.counter-strike.net",
    content: () => {
      return (
        <p>
          Counter-Strike is a legendary first-person shooter game series that began as
          a mod for Half-Life in 1999 before becoming a standalone game developed by Valve Corporation.
          Known for its intense, tactical gameplay, Counter-Strike pits two teams, Terrorists and Counter-Terrorists,
          against each other in various objective-based modes. The most iconic mode involves the Terrorists attempting
          to plant a bomb at a designated site while the Counter-Terrorists must prevent the bomb from being planted or defuse
          it if it is. Another popular mode focuses on rescuing hostages held by the Terrorists. Counter-Strike :&apos; gameplay emphasizes
          strategy, teamwork, and skillful shooting, with players earning money based on their performance,
          which they can spend on weapons and equipment at the start of each round.
        </p>
      );
    },
  },
  {
    title: "Overwatch 2",
    description: "FPS",
    src: "/overwatch.jpg",
    ctaText: "Play",
    ctaLink: "https://overwatch.blizzard.com",
    content: () => {
      return (
        <p>
          Overwatch, developed by Blizzard Entertainment and released in 2016,
          is a team-based first-person shooter that has gained widespread acclaim
          for its diverse cast of characters, fast-paced gameplay, and vibrant,
          colorful visuals. Set in a near-future Earth, Overwatch features a roster of heroes,
          each with unique abilities and roles, categorized into three main classes: Damage, Tank,
          and Support. Teams of six players must work together to complete various objectives,
          such as capturing control points or escorting a payload across a map.
        </p>
      );
    },
  },
];
