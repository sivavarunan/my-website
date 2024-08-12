import React from 'react';
import App from '@/Components/App'

const webpage: React.FC = () => {
  return (
    <App>
    <div className='overflow-hidden' >
      <h1 className="text-6xl text-center md:text-6xl lg:text-6xl font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-100 via-red-300 to-red-500 drop-shadow-2xl shadow-red-500/30 p-6 md:p-8 lg:p-10 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out ">
        Web Development
      </h1>
    </div>
    </App>
  );
}

export default webpage;
