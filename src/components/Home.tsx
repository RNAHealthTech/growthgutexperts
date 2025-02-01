import React from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { ArrowRight, Award, GraduationCap, Stethoscope, FileText } from 'lucide-react';
import { getDoctorComponents } from './HeroComponents';
import HomeAboutSection from './HomeAbout';
import HomeServicesSection from './HomeService';
import HomeContactSection from './ContactSection';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={doctorData} />
      <HomeAboutSection data={doctorData} variant={variant} />
      <HomeServicesSection data={doctorData} variant={variant} />
      <HomeContactSection data={doctorData} variant={variant} />
    </div>
  );
};

export default Home;