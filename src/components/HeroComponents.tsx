import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { ArrowRight, Calendar } from 'lucide-react';
import AppointmentModal from '../components/BookAppointmentModal';

interface DoctorComponentConfig {
  HeroSection: React.FC<{ data: DoctorProfile }>;
  primaryColor: string;
  secondaryColor: string;
}

interface DoctorComponentMapType {
  [key: string]: DoctorComponentConfig;
}

const HeroSection: React.FC<{ data: DoctorProfile }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-cover"
        style={{ 
          backgroundImage: `url(${data.personalDetails.backgroundImage || "/api/placeholder/1920/1080"})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
        role="img"
        aria-label={`${data.personalDetails.name}'s background`}
      />
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm sm:text-base uppercase mb-2 text-teal-300 font-semibold tracking-wider">
            Growth Gut Expert
          </p>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full blur-xl opacity-30" />
              <img
                src={data.personalDetails.imageUrl || "/api/placeholder/200/200"}
                alt={data.personalDetails.name}
                className="relative z-10 rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight max-w-4xl mx-auto">
            {data.personalDetails.name}
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
             
            <span className="text-xl text-white">
              {data.personalDetails.specialty}
            </span>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto">
            {data.personalDetails.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold inline-flex items-center shadow-lg hover:bg-teal-600 transition duration-300 w-full sm:w-auto justify-center"
              onClick={openModal}
            >
              Schedule Consultation
              <Calendar className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.button>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold inline-flex items-center shadow-lg hover:bg-gray-100 transition duration-300 w-full sm:w-auto justify-center"
              >
                View Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const DrMoumitaHero: React.FC<{ data: DoctorProfile }> = ({ data }) => (
  <HeroSection data={data} />
);

const DrSushovanHero: React.FC<{ data: DoctorProfile }> = ({ data }) => (
  <HeroSection data={data} />
);

export const DoctorComponentMap: DoctorComponentMapType = {
  'drmoumita': {
    HeroSection: DrMoumitaHero,
    primaryColor: 'purple-600',
    secondaryColor: 'pink-100'
  },
  'drsushovan': {
    HeroSection: DrSushovanHero,
    primaryColor: 'teal-600',
    secondaryColor: 'blue-100'
  }
};

export const getDoctorComponents = (doctorData: DoctorProfile): DoctorComponentConfig => {
  const nameParts = doctorData.personalDetails.name.toLowerCase().split(' ');
  const doctorKey = `dr${nameParts[1]}`;
  return DoctorComponentMap[doctorKey as keyof typeof DoctorComponentMap] || DoctorComponentMap.drmoumita;
};

export default HeroSection;