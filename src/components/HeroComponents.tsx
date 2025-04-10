import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { ArrowRight, Calendar } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';


interface DoctorComponentConfig {
  HeroSection: React.FC<{ data: DoctorProfile }>;
  primaryColor: string;
  secondaryColor?: string;
}

interface DoctorComponentMapType {
  [key: string]: DoctorComponentConfig;
}

const AnimatedLetter = ({ letter }: { letter: string }) => (
  <motion.span
    className="inline-block"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.5 }}
  >
    {letter}
  </motion.span>
);

const AnimatedWord = ({ word }: { word: string }) => (
  <motion.span
    className="inline-block"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.05
        }
      }
    }}
  >
    {word.split(`{'}`).map((letter, index) => (
      <AnimatedLetter key={index} letter={letter} />
    ))}
  </motion.span>
);
 
const HeroSection: React.FC<{ 
  data: DoctorProfile; 
  bgColorClass: string; 
  accentColorClass: string; 
  textColorClass: string; 
  primaryImage: string;
  secondaryImage?: string;
  variant: 'drmoumita' | 'drsushovan'; // Add variant prop
}> = ({ 
  data, 
  bgColorClass, 
  accentColorClass, 
  textColorClass, 
  primaryImage,
  secondaryImage,
  variant
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      className={`relative min-h-[90vh] ${bgColorClass} px-4 sm:px-6 lg:px-8`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ... keep existing decorative elements ... */}

      <div className="relative z-10 max-w-7xl mx-auto pt-20 lg:pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={`inline-block px-4 py-1 bg-${accentColorClass}/10 rounded-full text-${accentColorClass} text-sm font-semibold mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {data.personalDetails.specialty}
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <motion.div
                initial="hidden"
                animate="visible"
                className="text-white/90"
              >
                <AnimatedWord word={data.personalDetails.name} />
              </motion.div>
            </h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {data.personalDetails.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 bg-${accentColorClass} text-${textColorClass} rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center`}
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Consultation
                <Calendar className="ml-2" size={20} />
              </motion.button>
              
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center"
                >
                  View Services
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section - Different for each variant */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {variant === "drmoumita" ? (
              // Single image for Dr. Moumita
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <div className={`w-full h-full bg-gradient-to-br from-${accentColorClass}/20 to-${bgColorClass}/20 p-1 rounded-2xl`}>
                    <img
                      src={primaryImage}
                      alt={`${data.personalDetails.name}`}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Parallax effect with two images for Dr. Sushovan
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute top-0 left-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
                  <div className={`w-full h-full bg-gradient-to-br from-${accentColorClass}/20 to-${bgColorClass}/20 p-1 rounded-2xl`}>
                    <img
                      src={primaryImage}
                      alt={`${data.personalDetails.name} - Primary`}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
                  <div className={`w-full h-full bg-gradient-to-br from-${bgColorClass}/20 to-${accentColorClass}/20 p-1 rounded-2xl`}>
                    <img
                      src={secondaryImage}
                      alt={`${data.personalDetails.name} - Secondary`}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        variant={variant}
      />
    </motion.section>
  );
};

const DrMoumitaHero: React.FC<{ data: DoctorProfile }> = ({ data }) => (
  <HeroSection 
    data={data} 
    bgColorClass="bg-gradient-to-br from-amber-900 to-amber-800" 
    accentColorClass="white"
    textColorClass="amber-900"
    primaryImage='/images/dr2.png'
    secondaryImage='/images/moumita-bg2.jpg'
    variant="drmoumita"
  />
);

const DrSushovanHero: React.FC<{ data: DoctorProfile }> = ({ data }) => (
  <HeroSection 
    data={data} 
    bgColorClass="bg-gradient-to-br from-blue-900 to-blue-800" 
    accentColorClass="white"
    textColorClass="blue-900"
    primaryImage='/images/sushovan-bg.jpg'
    secondaryImage='/images/sushovan-bg2.jpg'
    variant="drsushovan"
  />
);

export const DoctorComponentMap: DoctorComponentMapType = {
  'drmoumita': {
    HeroSection: DrMoumitaHero,
    primaryColor: 'amber-600',
    secondaryColor: 'amber-100'
  },
  'drsushovan': {
    HeroSection: DrSushovanHero,
    primaryColor: 'blue-600',
    secondaryColor: 'blue-100'
  }
};

export const getDoctorComponents = (doctorData: DoctorProfile): DoctorComponentConfig => {
  const nameParts = doctorData.personalDetails.name.toLowerCase().split(' ');
  const doctorKey = `dr${nameParts[1]}`;
  return DoctorComponentMap[doctorKey as keyof typeof DoctorComponentMap] || DoctorComponentMap.drmoumita;
};

export default HeroSection;