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

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }

    const findServiceForSubdomain = () => {
      // Get the current subdomain
      const hostname = window.location.hostname;
      const subdomain = hostname.split('.')[0];

      // Determine which doctor's data to use based on subdomain
      let currentDoctor: DoctorServices | null = null;
      if (subdomain.includes('sushovan')) {
        currentDoctor = doctorData.drSushovan;
      } else if (subdomain.includes('moumita')) {
        currentDoctor = doctorData.drMoumita;
      }

      if (!currentDoctor) {
        navigate('/');
        return;
      }

      // Find the service for the current doctor
      const service = currentDoctor.services.find(
        s => s.title.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
      );

      if (service) {
        setSelectedDoctor(currentDoctor);
        setSelectedService(service);
        setSelectedSubService(service.subServices[0]);
      } else {
        navigate('/');
      }
      
      setLoading(false);
    };

    findServiceForSubdomain();
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={selectedService.imageUrl}
          alt={selectedService.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="text-teal-400 font-semibold mb-2 block">
              {selectedDoctor.title}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {selectedService.title}
            </h1>
            <p className="text-lg text-gray-200">
              {selectedService.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Doctor Info Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="p-6 flex items-center space-x-6">
            <img
              src={selectedDoctor.imageUrl}
              alt={selectedDoctor.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h2>
              <p className="text-gray-600">{selectedDoctor.title}</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12 p-8">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{selectedService.overview}</p>
        </div>

        {/* Sub-services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {selectedService.subServices.map((subService) => (
            <motion.div
              key={subService.name}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedSubService(subService)}
            >
              <img
                src={subService.imageUrl}
                alt={subService.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{subService.name}</h3>
                <p className="text-gray-600 mb-4">{subService.description}</p>
                <button className="text-teal-600 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Sub-service Details */}
        {selectedSubService && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-8">
            <h2 className="text-2xl font-bold mb-8">{selectedSubService.name}</h2>

            {selectedSubService.procedures && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Our Procedures Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSubService.procedures.map((procedure, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg"
                    >
                      <ChevronDown className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedSubService.whoShouldConsider && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Who Should Consider This</h3>
                <div className="bg-teal-50 rounded-lg p-6">
                  <ul className="space-y-4">
                    {selectedSubService.whoShouldConsider.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedSubService.symptoms && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Common Symptoms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSubService.symptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="bg-red-50 p-4 rounded-lg text-red-700"
                    >
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedSubService.benefits && (
              <div>
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSubService.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-green-50 p-4 rounded-lg text-green-700"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceTemplate;