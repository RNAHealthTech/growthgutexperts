import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DoctorProfile, drMoumitaData, drSushovanData } from '../data/doctor';
import { MainLayout } from '../layouts/MainLayout';
import Home from '../components/Home';
import ServiceTemplate from '../components/ServiceTemplate';
import { DrMoumitaContact, DrSushovanContact } from '../components/Contact';
import About from '../components/About';
import { doctorsServices } from '../data/services';
import Services from '../components/Services';
import BlogTemplate from '../components/BlogTemplate';
import Blogs from '../components/Blogs';

interface DoctorPortfolioProps {
  doctorData: DoctorProfile;
}

const DoctorPortfolio: React.FC<DoctorPortfolioProps> = ({ doctorData }) => {
  // Determine background color class based on doctor
  const getBgColorClass = () => {
    if (doctorData === drSushovanData) {
      return 'blue-600';
    }
    if (doctorData === drMoumitaData) {
      return 'amber-600';
    }
    return 'blue-600';
  };

  const servicesDoctorData = {
    drSushovan: doctorsServices[0],
    drMoumita: doctorsServices[1]
  };

  const getSubdomain = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('localhost')) {
      const subdomain = hostname.split('.')[0];
      return subdomain === 'localhost' ? '' : subdomain;

    }
    const parts = hostname.split('.');
    return parts.length > 2 ? parts[0] : '';

  };

  const subdomain = getSubdomain();

  // Determine which Contact component to render based on doctorData
  const ContactComponent = () => {
    if (doctorData === drSushovanData) {
      return <DrSushovanContact data={doctorData} />;
    }
    if (doctorData === drMoumitaData) {
      return <DrMoumitaContact data={doctorData} />;
    }
    return <DrSushovanContact data={doctorData} />; // Default fallback
  };

  const currentDoctorServices = doctorsServices.find(
    doctor => doctor.sub === getSubdomain()
  ) || doctorsServices[0];

  const getVariant = (): 'drmoumita' | 'drsushovan' => {
    if (subdomain === 'moumita' || currentDoctorServices.name.toLowerCase().includes('moumita')) {
      return 'drmoumita'
    }
    else if (subdomain === 'sushovan' || currentDoctorServices.name.toLowerCase().includes('sushovan')) {
      return 'drsushovan';
    }

    return 'drmoumita';
  }

  const variant = getVariant();


  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home doctorData={doctorData} />} />
        <Route path='/services' element={<Services variant={variant} doctorData={doctorData} />} />
        <Route path='/blogs' element={<Blogs doctorData={doctorData} variant={variant}  />} />
        <Route
          path='/blog/:slug'
          element={<BlogTemplate doctorData={servicesDoctorData} />}
        />
        <Route
          path='/services/:slug'
          element={<ServiceTemplate doctorData={servicesDoctorData} />}
        />
        <Route
          path='/contact'
          element={<ContactComponent />}
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