import React from 'react';
import { DoctorProfile, drMoumitaData, drSushovanData } from '../data/doctor';
import { getDoctorComponents } from './HeroComponents';
import HomeAboutSection from './HomeAbout';
import HomeServicesSection from './HomeService';
import HomeContactSection from './ContactSection';
import { DrMoumitaContact, DrSushovanContact } from '../components/Contact';
import { ComprehensiveDoctorSEO } from '../SeoTags';
import MapSection from './MapSection';


interface HomeProps {
  doctorData: DoctorProfile;
}

const Home: React.FC<HomeProps> = ({ doctorData }) => {
  const {
    personalDetails,
    about,
    education,
    currentworkExperience,
    pastworkExperience,
    awards,
    skills
  } = doctorData;

  // get custom components for the current doctor
  const doctorComponents = getDoctorComponents(doctorData);
  const { HeroSection, primaryColor } = doctorComponents;

  const getVariant = (name: string): 'drmoumita' | 'drsushovan' => {
    const lowercaseName = name.toLowerCase();
    return lowercaseName.includes('moumita') ? 'drmoumita' : 'drsushovan';
  };

  const variant = getVariant(doctorData.personalDetails.name);



  // Get the latest education and work experience
  const latestEducation = education[education.length - 1];
  const currentWork = currentworkExperience[0];

  const ContactComponent = () => {
    if (doctorData === drSushovanData) {
      return <DrSushovanContact data={doctorData} />;
    }
    if (doctorData === drMoumitaData) {
      return <DrMoumitaContact data={doctorData} />;
    }
    return <DrSushovanContact data={doctorData} />; // Default fallback
  };

  return (
    <>
    <ComprehensiveDoctorSEO doctorData={doctorData} baseUrl='https://growthgutexperts.com' />
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={doctorData} />
      <HomeAboutSection data={doctorData} variant={variant} />
      <HomeServicesSection data={doctorData} variant={variant} />
      <HomeContactSection data={doctorData} variant={variant} />
      <MapSection variant={variant} data={doctorData} />
    </div>
    </>
  );
};

export default Home;