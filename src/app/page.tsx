import React from 'react';
import App from '@/Components/App';  
import HomePage from '@/app/pages/HomePage';
import "./globals.css";

const IndexPage: React.FC = () => {
  return (
    <App>
      <HomePage />
    </App>
  );
};

export default IndexPage;
