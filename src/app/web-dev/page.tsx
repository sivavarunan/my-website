'use client'
import React from 'react';
import App from '@/Components/ui/App';
import { SparklesCore } from "@/Components/sparkles";
import { TracingBeam } from '@/Components/Tracing-beam';
import Image from 'next/image';

const Webpage: React.FC = () => {
  return (
    <App>
      <div className='relative w-full min-h-screen overflow-hidden'>
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

          <div className="mt-8 text-center">
            <h2 className="text-3xl text-white font-medium"></h2>
          </div>

          {/* HTML, CSS, and JS Section */}
          <div className="flex flex-wrap mt-16 w-full px-6 md:px-12 lg:px-20 items-center justify-between bg-black bg-opacity-80 border-2 border-gray-800 rounded-2xl">
            <div className="w-full md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-start items-start space-y-4">
              <h2 className="text-2xl font-bold text-red-400">HTML, CSS, and JS</h2>
              <p className="text-red-300">HTML, CSS, and JavaScript are the foundational technologies in web development. HTML (HyperText Markup Language) provides the structure and content of a webpage, defining elements like headings, paragraphs, images, and links. CSS (Cascading Style Sheets) is used to control the visual presentation, allowing you to style the layout, colors, fonts, and overall design of the webpage. JavaScript adds interactivity and dynamic behavior, enabling features like form validation, animations, and responsive content updates..</p>
              <p className='text-red-300'>In creating a simple website, I use HTML to outline the content and structure, CSS to enhance the design and layout, and JavaScript to implement interactive elements, ensuring the site is both visually appealing and functional.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0">
              <Image 
                src="/html.png" 
                width={500} 
                height={300} 
                alt="HTML, CSS, and JS" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>
          </div>

          {/* REACT JS Section */}
          <div className="flex flex-wrap mt-16 w-full px-6 md:px-12 lg:px-20 items-center justify-between bg-white bg-opacity-10 border-2 border-gray-700 rounded-2xl">
            <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0">
              <Image 
                src="/typescript.png" 
                width={500} 
                height={300} 
                alt="REACT JS" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-start items-start space-y-4">
              <h2 className="text-2xl font-bold text-blue-200">REACT JS</h2>
              <p className="text-blue-300">React.js and TypeScript are powerful tools for building modern web applications. React.js is a JavaScript library that allows you to create dynamic, component-based user interfaces efficiently. It handles the view layer of your application, enabling you to build reusable UI components that can manage their state and respond to user interactions. TypeScript, a typed superset of JavaScript, adds static typing to your code, reducing errors and improving maintainability by catching issues early in the development process.</p>
              <p className='text-blue-300'>When building a website with React.js and TypeScript, I use React to create modular components that render the UI and manage state, while TypeScript ensures type safety and clearer code structure. This combination allows me to develop robust, scalable, and maintainable applications with confidence. </p>
            </div>
          </div>

          {/* NEXT JS and TailwindCSS Section */}
          <div className="flex flex-wrap mt-16 w-full px-6 md:px-12 lg:px-20 items-center justify-between mb-10 bg-black bg-opacity-80 border-2 border-gray-800 rounded-2xl">
            <div className="w-full md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-start items-start space-y-4">
              <h2 className="text-2xl font-bold text-gray-400">NEXT JS and TailwindCSS</h2>
              <p className="text-gray-400">Node.js is a runtime environment that allows you to run JavaScript on the server side, making it possible to build fast and scalable web applications. Unlike traditional server-side languages, Node.js is event-driven and non-blocking, which means it can handle multiple requests simultaneously without slowing down. This makes it ideal for building real-time applications, APIs, and backend services.</p>
              <p className='text-gray-400'>When I use Node.js to create a website, I typically handle server-side logic, manage databases, and serve content to the client. Node.js allows me to write server code in JavaScript, keeping the same language throughout the entire stack, which streamlines development and makes it easier to maintain and scale the application.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 bg-yellow-100 p-4 rounded-2xl opacity-35">
              <Image 
                src="/next.png" 
                width={500} 
                height={300} 
                alt="NEXT JS and TailwindCSS" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>
          </div>
        </TracingBeam>
      </div>
    </App>
  );
};

export default Webpage;
