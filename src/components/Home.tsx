import React from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { ArrowRight, Award, GraduationCap, Stethoscope, FileText } from 'lucide-react';
import { getDoctorComponents } from './HeroComponents';

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


  // Get the latest education and work experience
  const latestEducation = education[education.length - 1];
  const currentWork = workExperience[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection data={doctorData} />
      
    </div>
  );
};

export default Home;