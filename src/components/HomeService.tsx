import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Sparkles, Activity, Layers, ChevronRight, Star, CheckCircle2, Clock } from 'lucide-react';
import { DoctorProfile } from '../data/doctor';
import { doctorsServices } from '../data/services';
import { useNavigate } from 'react-router-dom';

interface HomeServicesSectionProps {
  data: DoctorProfile;
  variant: 'drmoumita' | 'drsushovan';
}

const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({ data, variant }) => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredSubService, setHoveredSubService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const navigate = useNavigate();

  const doctorServices = doctorsServices.find(doc => 
    variant === 'drmoumita' ? doc.sub === 'drmoumita' : doc.sub === 'drsushovan'
  );

  const colorScheme = {
    drmoumita: {
      bg: 'bg-amber-50',
      accent: 'text-amber-900',
      accentBg: 'bg-amber-900',
      light: 'bg-amber-100',
      lighter: 'bg-amber-50',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-100',
      button: 'bg-amber-900',
      buttonHover: 'hover:bg-amber-800',
      shadowColor: 'shadow-amber-100'
    },
    drsushovan: {
      bg: 'bg-blue-50',
      accent: 'text-blue-900',
      accentBg: 'bg-blue-900',
      light: 'bg-blue-100',
      lighter: 'bg-blue-50',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
      button: 'bg-blue-900',
      buttonHover: 'hover:bg-blue-800',
      shadowColor: 'shadow-blue-100'
    }
  };

  const colors = colorScheme[variant];
  const services = doctorServices?.services || [];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent" />
      <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${colors.lighter} rounded-bl-full opacity-50 blur-3xl`} />
      <div className={`absolute bottom-0 left-0 w-1/2 h-1/2 ${colors.lighter} rounded-tr-full opacity-50 blur-3xl`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className={`inline-block ${colors.light} rounded-full px-4 py-2 mb-4`}>
            <span className={`${colors.accent} font-semibold text-sm`}>
              Comprehensive Healthcare Solutions
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${colors.accent} mb-6`}>
            Our Medical Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our range of specialized medical services tailored to provide excellent care in {doctorServices?.specialty}.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Services List */}
          <div className="lg:col-span-4 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => {
                    setActiveService(index);
                    setExpandedService(null);
                  }}
                  className={`w-full group text-left p-6 rounded-xl transition-all duration-300 
                    ${activeService === index ? 
                      `${colors.light} shadow-lg scale-102` : 
                      'bg-white hover:scale-102'
                    } ${colors.border} border relative overflow-hidden`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeService === index ? colors.accentBg : colors.lighter} 
                      transition-colors duration-300 group-hover:${colors.accentBg}`}>
                      {index === 0 && <Shield className={`w-6 h-6 ${activeService === index ? 'text-white' : colors.accent} group-hover:text-white`} />}
                      {index === 1 && <Activity className={`w-6 h-6 ${activeService === index ? 'text-white' : colors.accent} group-hover:text-white`} />}
                      {index === 2 && <Sparkles className={`w-6 h-6 ${activeService === index ? 'text-white' : colors.accent} group-hover:text-white`} />}
                      {index === 3 && <Layers className={`w-6 h-6 ${activeService === index ? 'text-white' : colors.accent} group-hover:text-white`} />}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${colors.accent} mb-2 group-hover:${colors.accent}`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${colors.accent} transform transition-transform 
                      ${activeService === index ? 'rotate-90' : 'rotate-0'}`} />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8">
            <>
              {services[activeService] && (
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                  {/* Featured Image */}
                  <div className="relative h-72">
                    <img
                      src={services[activeService].imageUrl}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {services[activeService].title}
                      </h3>
                      <p className="text-white/90 text-lg max-w-2xl">
                        {services[activeService].overview}
                      </p>
                    </div>
                  </div>

                  {/* Sub-services Grid */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services[activeService].subServices.map((subService, index) => (
                        <motion.div
                          key={subService.slug}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`relative group cursor-pointer`}
                          onClick={() => setExpandedService(expandedService === index ? null : index)}
                        >
                          <div className={`p-6 rounded-xl border ${colors.border} transition-all duration-300
                            ${expandedService === index ? `${colors.light} shadow-lg` : 'bg-white hover:shadow-md'}
                            ${hoveredSubService === index ? colors.light : ''}`}
                          >
                            <div className="flex items-start gap-4">
                              <div className={`p-2 rounded-lg ${expandedService === index ? colors.accentBg : colors.lighter}
                                group-hover:${colors.accentBg} transition-colors duration-300`}>
                                <Star className={`w-5 h-5 ${expandedService === index ? 'text-white' : colors.accent} 
                                  group-hover:text-white transition-colors duration-300`} />
                              </div>
                              <div className="flex-1">
                                <h4 className={`text-lg font-semibold ${colors.accent} mb-2`}>
                                  {subService.name}
                                </h4>
                                
                                
                                <>
                                  {expandedService === index && subService.procedures && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="space-y-3 mt-4"
                                    >
                                       {subService.procedures.map((procedure, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-600">
                                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                                          <span className="text-sm">{procedure}</span>
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </> 
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className={`${colors.button} ${colors.buttonHover} text-white px-8 py-4 rounded-lg 
            inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg`} 
            onClick={()=>navigate('/services')}
            >
            <span className="font-semibold">Explore All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
