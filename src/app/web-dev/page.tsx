'use client'
import React from 'react';
import App from '@/Components/App';
import { SparklesCore } from "@/Components/sparkles";
import { TracingBeam } from '@/Components/Tracing-beam';

const Webpage: React.FC = () => {
  return (
    <App>
      <div className='relative w-full min-h-screen bg-transparent overflow-hidden'>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0}
          maxSize={4.0}
          particleDensity={120}
          className="absolute inset-0 -z-10"
          particleColor="#c94242"
          speed={5}
        />
        <TracingBeam className="px-6">
          {/* Hero Section */}
          <div className='mt-20 text-center overflow-hidden'>
            <h1 className="text-6xl font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Web Development
            </h1>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-3xl text-white font-medium"></h2>
          </div>

          {/* HTML, CSS, and JS Section */}
          <div className="flex flex-wrap mt-16 w-full px-6 md:px-12 lg:px-20 items-center justify-between">
            <div className="w-full md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-start items-start space-y-4">
              <h2 className="text-2xl font-bold text-white">HTML, CSS, and JS</h2>
              <p className="text-gray-400">Master the core technologies that power the web, enabling you to build beautiful and functional websites.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0">
              <img src="html.png" alt="HTML, CSS, and JS" className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" />
            </div>
          </div>

          {/* REACT JS Section */}
          <div className="flex flex-wrap mt-16 w-full px-6 md:px-12 lg:px-20 items-center justify-between">
            <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0">
              <img src="typescript.png" alt="REACT JS" className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-start items-start space-y-4">
              <h2 className="text-2xl font-bold text-white">REACT JS</h2>
              <p className="text-gray-400">Learn React JS to build dynamic user interfaces with efficient and reusable components.</p>
            </div>
          </div>

          {/* NEXT JS and TailwindCSS Section */}
          <div className="flex flex-wrap mt-16 w-full px-6 md:px-12 lg:px-20 items-center justify-between mb-10">
            <div className="w-full md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-start items-start space-y-4">
              <h2 className="text-2xl font-bold text-white">NEXT JS and TailwindCSS</h2>
              <p className="text-gray-400">Combine the power of Next.js with the flexibility of Tailwind CSS to build fast, modern, and responsive web applications.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 bg-slate-300 p-4 rounded-2xl opacity-35">
              <img src="next.png" alt="NEXT JS and TailwindCSS" className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" />
            </div>
          </div>
        </TracingBeam>
      </div>
    </App>
  );
};

export default Webpage;
