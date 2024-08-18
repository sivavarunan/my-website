import React from 'react';
import App from '@/Components/App';
import { StickyScroll } from '@/Components/Sticky-scroll-reveal';
import Image from 'next/image';

const InterfacePage: React.FC = () => {
  return (
    <App>
      <div>
        <div className="mt-20 text-center overflow-hidden">
          <h1 className="text-6xl font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Software Development
          </h1>
        </div>

        <StickyScroll content={content} />
      </div>
    </App>
  );
};

export default InterfacePage;

const content = [
  {
    title: "JAVA",
    description: "I do software development using Java, leveraging its object-oriented programming (OOP) concepts to create efficient and scalable applications. Java's platform independence allows me to build solutions that run seamlessly across different environments. I use Java for a variety of projects, from web applications to enterprise-level systems, taking advantage of its rich ecosystem of libraries and frameworks. The language's strong community support and robust performance make it a reliable choice for developing high-quality software.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={"/java.jpg"}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "PYTHON",
    description:
      "I do software development using Python, utilizing its simplicity and versatility to build a wide range of applications. Python's dynamic typing and readability make it ideal for rapid development, whether I'm working on web applications, data analysis, or automation scripts. I leverage Python's extensive libraries and frameworks, like Django and Flask for web development or Pandas and NumPy for data science. Its strong community support and cross-platform capabilities ensure that I can create efficient and scalable solutions across different domains.", content: (
        <div className="h-full w-full flex items-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] justify-center text-white">
          <Image
            src={"/python.jpg"}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "JavaScript",
    description:
      "I do software development using JavaScript, focusing on building interactive and dynamic web applications. JavaScript's versatility allows me to work on both the front-end and back-end, using frameworks like React for responsive user interfaces and Node.js for server-side development. I leverage its event-driven nature and rich ecosystem of libraries to create seamless user experiences and real-time functionality. JavaScript's wide browser support and community-driven resources make it a powerful tool for developing modern web applications that are fast, efficient, and scalable.", content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src={"/js.jpg"}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
 
  {
    title: "",
    description: ".",
    content: (
      <div className="h-full w-full bg-transperent flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

