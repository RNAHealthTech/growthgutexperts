import React from 'react';
import Header from './Header';
import { LayoutProps } from '../data/common'; 
import { doctorsServices } from '../data/services';
import DoctorFooter from './Footer';


export const MainLayout: React.FC<LayoutProps> = ({ children }) => {

  const getSubdomain = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('localhost')) {
      const subdomain = hostname.split('.')[0];
      return subdomain === 'localhost' ? '' : subdomain;

    }
    const parts = hostname.split('.');
    return parts.length > 2 ? parts[0] : '';

  };

  const currentDoctorServices = doctorsServices.find(
    doctor => doctor.sub === getSubdomain()
  ) || doctorsServices[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header doctorServices={currentDoctorServices} />
      <main className="flex-grow">
        {children}
      </main>
      <DoctorFooter />  
    </div>
  );
};