import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, Globe, Calendar } from 'lucide-react';

interface HomeAboutSectionProps {
  data: DoctorProfile;
  variant: 'drmoumita' | 'drsushovan';
}

const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({ data, variant }) => {
  const colorScheme = {
    drmoumita: {
      bg: 'bg-amber-50',
      accent: 'amber-900',
      light: 'amber-100',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-100',
      shadow: 'shadow-amber-200',
      text: 'text-amber-900'
    },
    drsushovan: {
      bg: 'bg-blue-50',
      accent: 'blue-900',
      light: 'blue-100',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
      shadow: 'shadow-blue-200',
      text: 'text-blue-900'
    }
  };

  const colors = colorScheme[variant];
  const latestEducation = data.education[data.education.length - 1];
  const currentWork = data.workExperience[0];

  const stats = [
    {
      icon: <Calendar className={`w-6 h-6 text-${colors.accent}`} />,
      value: new Date().getFullYear() - new Date(data.personalDetails.dateOfBirth).getFullYear(),
      label: 'Years of Experience'
    },
    {
      icon: <Award className={`w-6 h-6 text-${colors.accent}`} />,
      value: data.awards.length,
      label: 'Awards Received'
    },
    {
      icon: <Users className={`w-6 h-6 text-${colors.accent}`} />,
      value: data.skills.length,
      label: 'Specialized Skills'
    },
    {
      icon: <Globe className={`w-6 h-6 text-${colors.accent}`} />,
      value: data.personalDetails.languagesKnown.length,
      label: 'Languages Known'
    }
  ];

  return (
    <section className={`${colors.bg} py-16 lg:py-24 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className={`absolute -top-4 -left-4 w-24 h-24 bg-${colors.accent}/10 rounded-full blur-2xl`} />
            <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-${colors.accent}/10 rounded-full blur-2xl`} />
            
            {/* Main Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={data.personalDetails.imageUrl2}
                alt={data.personalDetails.name}
                className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-700"
              />
              
              {/* Stats Grid */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-center p-3 rounded-lg ${colors.hover} transition-colors duration-300`}
                    >
                      <div className="flex justify-center mb-2">{stat.icon}</div>
                      <div className={`text-2xl font-bold text-${colors.accent}`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold text-${colors.accent} mb-6`}
              >
                Meet Dr. {data.personalDetails.name.split(' ')[1]}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {data.about}
              </motion.p>
            </div>

            {/* Education and Work */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl bg-white border ${colors.border} ${colors.shadow}`}
              >
                <div className="flex items-start gap-4">
                  <GraduationCap className={`w-8 h-8 text-${colors.accent}`} />
                  <div>
                    <h3 className={`text-lg font-semibold text-${colors.accent}`}>
                      {latestEducation.degree}
                    </h3>
                    <p className="text-gray-600">{latestEducation.institute}</p>
                    <p className="text-sm text-gray-500">
                      {latestEducation.duration.start} - {latestEducation.duration.end}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`p-6 rounded-xl bg-white border ${colors.border} ${colors.shadow}`}
              >
                <div className="flex items-start gap-4">
                  <Award className={`w-8 h-8 text-${colors.accent}`} />
                  <div>
                    <h3 className={`text-lg font-semibold text-${colors.accent}`}>
                      Current Position
                    </h3>
                    <p className="text-gray-600">{currentWork.role}</p>
                    <p className="text-gray-600">{currentWork.organization}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;