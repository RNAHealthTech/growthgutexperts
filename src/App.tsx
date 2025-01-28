import React from 'react';
import './index.css';

//
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import { drSushovanData, drMoumitaData } from './data/doctor';
import DoctorPortfolio from './portfolio/DoctorPortfolio';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

}

const App: React.FC = () => {
  useScrollToTop();


  const getSubdomain = () => {
    const hostname = window.location.hostname;
    
    // Handle localhost testing
    if (hostname.includes('localhost')) {
      const subdomain = hostname.split('.')[0];
      return subdomain === 'localhost' ? '' : subdomain;
    }
    
    // Handle production domains
    const parts = hostname.split('.');
    if (parts.length > 2) {
      return parts[0];
    }
    
    return null;
  };

  const getDoctorData = () => {
    const subdomain = getSubdomain();
    switch (subdomain) {
      case 'drsushovan':
        return drSushovanData;
      case 'drmoumita':
        return drMoumitaData;
      default:
        return null;
    }
  };

  const doctorData = getDoctorData();

  return (
    <Routes>
      {doctorData && (
        <Route path='/*'  element={<DoctorPortfolio doctorData={doctorData} />} />
      )} 
      <Route path='/*' element={<LandingPage />} />
     
    </Routes>
  )
}

export default App;
