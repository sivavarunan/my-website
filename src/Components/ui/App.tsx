import React, { ReactNode } from 'react';
import { NavbarC } from '@/Components/ui/Navbar';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className="relative w-full h-auto bg-black z-40">
      <NavbarC />
      <div className=""> 
        {children}
      </div>
    </div>
  );
};

export default App;
