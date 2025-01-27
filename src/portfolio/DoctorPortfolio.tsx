import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { MainLayout } from '../layouts/MainLayout';
import Home from '../components/Home';
// import Services from '../components/Services';
// import Contact from '../components/Contact';

interface DoctorPortfolioProps {
  doctorData: DoctorProfile;
}

const DoctorPortfolio: React.FC<DoctorPortfolioProps> = ({ doctorData }) => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home doctorData={doctorData} />} />
        {/* <Route path="/services" element={<Services doctorData={doctorData} />} />
        <Route path="/contact" element={<Contact doctorData={doctorData} />} /> */}
      </Routes>
    </MainLayout>
  );
};


export default DoctorPortfolio;