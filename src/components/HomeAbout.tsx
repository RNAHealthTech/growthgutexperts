import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { motion } from 'framer-motion';
import { Award, GraduationCap, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeAboutSectionProps {
  data: DoctorProfile;
  variant: 'drmoumita' | 'drsushovan';
}

const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({ data, variant }) => {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isPastWorkOpen, setIsPastWorkOpen] = useState(false);

  const colorScheme = {
    drmoumita: {
      bg: 'bg-amber-50',
      accent: 'amber-900',
      light: 'amber-100',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-100',
      shadow: 'shadow-amber-200',
      text: 'text-amber-900',
      button: 'bg-amber-900 hover:bg-amber-800'
    },
    drsushovan: {
      bg: 'bg-blue-50',
      accent: 'blue-900',
      light: 'blue-100',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
      shadow: 'shadow-blue-200',
      text: 'text-blue-900',
      button: 'bg-blue-900 hover:bg-blue-800'
    }
  };

  const colors = colorScheme[variant];

  const getAboutPageLink = () => {
    return variant === 'drmoumita' ? '/about' : '/about';
  };

  return (
    <section className={`${colors.bg} py-16 lg:py-24 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`absolute -top-4 -left-4 w-24 h-24 bg-${colors.accent}/10 rounded-full blur-2xl`} />
            <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-${colors.accent}/10 rounded-full blur-2xl`} />

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={data.personalDetails.imageUrl2}
                alt={data.personalDetails.name}
                className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-700"
              />
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
            {/* About Section with Button */}
            <div className="space-y-6">
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

              {/* About Page Button */}

            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <button
                onClick={() => setIsEducationOpen(!isEducationOpen)}
                className={`w-full flex justify-between items-center p-4 rounded-xl bg-white border ${colors.border} ${colors.hover} transition-colors duration-200`}
              >
                <h3 className={`text-xl font-semibold text-${colors.accent}`}>Education</h3>
                {isEducationOpen ? (
                  <ChevronUp className={`w-6 h-6 text-${colors.accent}`} />
                ) : (
                  <ChevronDown className={`w-6 h-6 text-${colors.accent}`} />
                )}
              </button>

              {isEducationOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {data.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl bg-white border ${colors.border} ${colors.shadow}`}
                    >
                      <div className="flex items-start gap-4">
                        <GraduationCap className={`w-6 h-6 text-${colors.accent}`} />
                        <div>
                          <h4 className={`text-base font-semibold text-${colors.accent}`}>
                            {edu.degree}
                          </h4>
                          <p className="text-gray-600 text-sm">{edu.institute}</p>

                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Current Work Experience */}
            <div className="space-y-4">
              <h3 className={`text-xl font-semibold text-${colors.accent}`}>Current Positions</h3>
              {data.currentworkExperience.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl bg-white border ${colors.border} ${colors.shadow}`}
                >
                  <div className="flex items-start gap-4">
                    <Award className={`w-6 h-6 text-${colors.accent}`} />
                    <div>
                      <h4 className={`text-base font-semibold text-${colors.accent}`}>
                        {work.role}
                      </h4>
                      {work.department && (
                        <p className="text-gray-600 text-sm">{work.department}</p>
                      )}
                      <p className="text-gray-600 text-sm">{work.organization}</p>
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Past Work Experience */}
            <div className="space-y-4">
              <button
                onClick={() => setIsPastWorkOpen(!isPastWorkOpen)}
                className={`w-full flex justify-between items-center p-4 rounded-xl bg-white border ${colors.border} ${colors.hover} transition-colors duration-200`}
              >
                <h3 className={`text-xl font-semibold text-${colors.accent}`}>Past Experience</h3>
                {isPastWorkOpen ? (
                  <ChevronUp className={`w-6 h-6 text-${colors.accent}`} />
                ) : (
                  <ChevronDown className={`w-6 h-6 text-${colors.accent}`} />
                )}
              </button>

              {isPastWorkOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {data.pastworkExperience.map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl bg-white border ${colors.border} ${colors.shadow}`}
                    >
                      <div className="flex items-start gap-4">
                        <Award className={`w-6 h-6 text-${colors.accent}`} />
                        <div>
                          <h4 className={`text-base font-semibold text-${colors.accent}`}>
                            {work.role}
                          </h4>
                          {work.department && (
                            <p className="text-gray-600 text-sm">{work.department}</p>
                          )}
                          <p className="text-gray-600 text-sm">{work.organization}</p>
                         
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <Link to={getAboutPageLink()}>
            <button
              className={`${colors.button} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition-transform hover:translate-x-1 text-sm sm:text-base`}
            >
              Learn More About Dr. {data.personalDetails.name.split(' ')[1]}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;