"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/Components/Tracing-beam";
import { SparklesCore } from "@/Components/sparkles";
import App from '@/Components/ui/App';

const SeoPage: React.FC = () => {
  return (
    <App>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.0}
        maxSize={4.0}
        particleDensity={120}
        className="absolute inset-0 -z-10"
        particleColor="#414222"
        speed={5}
      />
      <TracingBeam className="px-6 mt-20">

        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div>
          <h1 className="text-6xl font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Video Game Devolopment
            </h1>
          </div>
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className=" ">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </App>
  );
}

const dummyContent = [
  {
    title: "GODOT",
    description: (
      <>
    
      </>
    ),
    badge: "",
    image:"/godot.jpg"
  },
  {
    title: "",
    description: (
      <>
    
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    description: (
      <>
   
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

export default SeoPage;
