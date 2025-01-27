// src/layouts/MainLayout.tsx

import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import { LayoutProps } from '../data/common'; 


export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};