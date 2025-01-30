import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DoctorProfile, drMoumitaData, drSushovanData } from '../data/doctor';
import { MainLayout } from '../layouts/MainLayout';
import Home from '../components/Home';
import ServiceTemplate from '../components/ServiceTemplate';
import Contact from '../components/Contact';
import About from '../components/About';
import { doctorsServices } from '../data/services';
import Services from '../components/Services';

interface DoctorPortfolioProps {
  doctorData: DoctorProfile;
}

const DoctorPortfolio: React.FC<DoctorPortfolioProps> = ({ doctorData }) => {
  // Determine background color class based on doctor
  const getBgColorClass = () => {
    if (doctorData === drSushovanData) {
      return 'blue-600'; // For Dr. Sushovan - Gastroenterology theme
    }
    if (doctorData === drMoumitaData) {
      return 'amber-600'; // For Dr. Moumita - Pediatric Endocrinology theme
    }
    return 'blue-600'; // Default fallback
  };

  const servicesDoctorData = {
    drSushovan: doctorsServices[0],
    drMoumita: doctorsServices[1]
  };

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home doctorData={doctorData} />} />
        <Route path='/services' element={<Services doctorData={doctorData} />} />
        <Route 
          path='/services/:slug' 
          element={<ServiceTemplate doctorData={servicesDoctorData} />} 
        />
        <Route 
          path='/contact' 
          element={
            <Contact 
              doctorData={{
                drSushovan: drSushovanData,
                drMoumita: drMoumitaData
              }} 
            />
          } 
        />
        <Route 
          path='/about' 
          element={
            <About 
              bgColorClass={getBgColorClass()} 
              doctorData={doctorData} 
            />
          } 
        />
      </Routes>
    </MainLayout>
  );
};

export default DoctorPortfolio;