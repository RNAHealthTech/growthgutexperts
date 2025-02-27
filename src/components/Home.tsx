import React from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfile, drMoumitaData, drSushovanData } from '../data/doctor';
import { ArrowRight, Award, GraduationCap, Stethoscope, FileText } from 'lucide-react';
import { getDoctorComponents } from './HeroComponents';
import HomeAboutSection from './HomeAbout';
import HomeServicesSection from './HomeService';
import HomeContactSection from './ContactSection';
import { DrMoumitaContact, DrSushovanContact } from '../components/Contact';
import { ComprehensiveDoctorSEO } from '../SeoTags';


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
      {/* <ContactComponent /> */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-4xl space-y-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4403.30417936214!2d77.21203421188692!3d28.666797075544466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7458eee0db%3A0xbc22d8e585c02caa!2sSt.%20Stephen&#39;s%20Hospital!5e1!3m2!1sen!2sin!4v1740071891771!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg mx-auto mb-12 mt-4"
              title="Location"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;