import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Users } from 'lucide-react';
import { DoctorServices, ServiceContent, SubServiceContent } from '../data/services';

interface ServiceTemplateProps {
  doctorData: {
    drSushovan: DoctorServices;
    drMoumita: DoctorServices;
  };
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ doctorData }) => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorServices | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceContent | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubServiceContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Find the service and corresponding doctor based on the URL slug
  //   const findServiceAndDoctor = () => {
  //     const doctors = [doctorData.drSushovan, doctorData.drMoumita];
      
  //     for (const doctor of doctors) {
  //       const service = doctor.services.find(
  //         s => s.title.toLowerCase().replace(/\s+/g, '-') === slug
  //       );
  //       if (service) {
  //         setSelectedDoctor(doctor);
  //         setSelectedService(service);
  //         setSelectedSubService(service.subServices[0]);
  //         break;
  //       }
  //     }
  //     setLoading(false);
  //   };

  //   findServiceAndDoctor();
  // }, [slug, doctorData]);

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }

    // Find the service and corresponding doctor based on the URL slug
    const findServiceAndDoctor = () => {
      const doctors = [doctorData.drSushovan, doctorData.drMoumita];
      let foundService: ServiceContent | null = null;
      let foundDoctor: DoctorServices | null = null;

      for (const doctor of doctors) {
        const service = doctor.services.find(
          s => s.title.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
        );
        
        if (service) {
          foundService = service;
          foundDoctor = doctor;
          break;
        }
      }

      if (foundService && foundDoctor) {
        setSelectedDoctor(foundDoctor);
        setSelectedService(foundService);
        setSelectedSubService(foundService.subServices[0]);
      } else {
        // If no matching service is found, redirect to home
        navigate('/');
      }
      
      setLoading(false);
    };

    findServiceAndDoctor();
  }, [slug, doctorData, navigate]);

  if (loading || !selectedService || !selectedDoctor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl text-gray-600"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        {/* Doctor Info Section */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex items-center space-x-4"
        >
          <img
            src={selectedDoctor.imageUrl}
            alt={selectedDoctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{selectedDoctor.name}</h3>
            <p className="text-gray-600">{selectedDoctor.title}</p>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-blue-900/80 z-10" />
          <img
            src={selectedService.imageUrl}
            alt={selectedService.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {selectedService.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {selectedService.description}
            </p>
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            {selectedService.overview}
          </p>
        </motion.div>

        {/* Sub-services Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedService.subServices.map((subService, index) => (
              <motion.div
                key={subService.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedSubService(subService)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={subService.imageUrl}
                    alt={subService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{subService.name}</h3>
                  <p className="text-gray-600 mb-4">{subService.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Sub-service Details */}
        {selectedSubService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-semibold mb-8">
              {selectedSubService.name}
            </h2>

            {selectedSubService.procedures && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Procedures</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSubService.procedures.map((procedure, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <ChevronDown className="w-4 h-4 text-blue-600" />
                      <span>{procedure}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {selectedSubService.whoShouldConsider && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Who Should Consider This
                </h3>
                <div className="bg-blue-50 rounded-xl p-6">
                  <ul className="space-y-4">
                    {selectedSubService.whoShouldConsider.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedSubService.symptoms && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Common Symptoms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSubService.symptoms.map((symptom, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-red-50 rounded-lg p-4 text-red-700"
                    >
                      {symptom}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {selectedSubService.benefits && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSubService.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-green-50 rounded-lg p-4 text-green-700"
                    >
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ServiceTemplate;
