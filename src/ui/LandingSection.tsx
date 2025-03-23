import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import AppointmentModal from '../components/AppointmentModal';
import { DoctorVariant } from '../layouts/Header';


interface LandingSectionProps {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  variant: DoctorVariant
}

const LandingSection: React.FC<LandingSectionProps> = ({
  label,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  variant
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-cover md:bg-no-center md:bg-left"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
        role="img"
        aria-label={imageAlt}
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
          {label && (
            <p className="text-sm sm:text-base uppercase mb-2 text-purple-800 font-semibold tracking-wider">
              {label}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center shadow-lg hover:bg-red-600 transition duration-300"
             onClick={openModal}
            >
              {buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Explore More 
              <Calendar className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.button>
            <AppointmentModal variant={variant} isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingSection;
