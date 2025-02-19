import React from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfile,  drMoumitaData, drSushovanData } from '../data/doctor';
import { ArrowRight, Award, GraduationCap, Stethoscope, FileText } from 'lucide-react';
import { getDoctorComponents } from './HeroComponents';
import HomeAboutSection from './HomeAbout';
import HomeServicesSection from './HomeService';
import HomeContactSection from './ContactSection';
import { DrMoumitaContact, DrSushovanContact } from '../components/Contact';


interface HomeProps {
  doctorData: DoctorProfile;
}

const Home: React.FC<HomeProps> = ({ doctorData }) => {
  const {
    personalDetails,
    about,
    education,
    workExperience,
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
  const currentWork = workExperience[0];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={doctorData} />
      <HomeAboutSection data={doctorData} variant={variant} />
      <HomeServicesSection data={doctorData} variant={variant} />
      {/* <HomeContactSection data={doctorData} variant={variant} /> */}
      <ContactComponent />

    </div>
  );
};

export default Home;