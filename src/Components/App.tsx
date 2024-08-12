import React, { ReactNode } from 'react';
import { NavbarC } from '@/Components/Navbar';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className="relative w-full h-auto">
      <NavbarC />
      <div className="pt-[80px]"> 
        {children}
      </div>
    </div>
  );
};

export default App;
