import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DoctorServices, ServiceContent, SubServiceContent, Procedure } from '../data/services';
import CTA from './CTAComponents';
import { Helmet } from 'react-helmet-async';

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
  const [expandedSubServiceId, setExpandedSubServiceId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [variant, setVariant] = useState<'drmoumita' | 'drsushovan'>('drmoumita');
  const [textColorClass, setTextColorClass] = useState('amber-700');
  const [accentColorClass, setAccentColorClass] = useState('amber-50');
  const [primaryColorClass, setPrimaryColorClass] = useState('amber-600');

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
        setVariant('drsushovan');
        setTextColorClass('blue-900');
        setAccentColorClass('blue-50');
        setPrimaryColorClass('blue-600');
      } else if (subdomain.includes('moumita')) {
        currentDoctor = doctorData.drMoumita;
        setVariant('drmoumita');
        setTextColorClass('amber-700');
        setAccentColorClass('amber-50');
        setPrimaryColorClass('amber-600');
      }

      if (!currentDoctor) {
        navigate('/');
        return;
      }

      // Find the service for the current doctor
      const service = currentDoctor.services.find(
        s => s.slug.toLowerCase() === slug.toLowerCase()
      );

      if (service) {
        setSelectedDoctor(currentDoctor);
        setSelectedService(service);
        // Set default selected subservice if available
        if (service.subServices && service.subServices.length > 0) {
          setSelectedSubService(service.subServices[0]);
          setExpandedSubServiceId(service.subServices[0].slug || service.subServices[0].name);
        } else {
          setSelectedSubService(null);
        }
      } else {
        navigate('/');
      }

      setLoading(false);
    };

    findServiceForSubdomain();
  }, [slug, doctorData, navigate]);

  const generateSEOContent = () => {
    if (!selectedService || !selectedDoctor) return null;
    
    const currentUrl = `https://${window.location.hostname}/services/${slug}`;
    const pageTitle = `${selectedService.title} | ${selectedDoctor.name} - ${selectedDoctor.specialty} Specialist`;
    const pageDescription = `Learn about ${selectedService.title} treatments provided by ${selectedDoctor.name}, a leading ${selectedDoctor.specialty} specialist. ${selectedService.description.substring(0, 120)}...`;
    
    // Generate keywords based on service and doctor specialty
    const keywords = `${selectedService.title}, ${selectedDoctor.specialty}, ${selectedDoctor.title}, 
      ${selectedDoctor.name}, medical treatment, healthcare, specialized care, 
      ${selectedService.subServices 
        ? selectedService.subServices.map(sub => sub.name).join(', ')
        : selectedService.procedures 
          ? Array.isArray(selectedService.procedures) 
            ? selectedService.procedures.map(proc => typeof proc === 'string' ? proc : proc.name).join(', ')
            : ''
          : ''}`;
    
    // Generate structured data for the specific medical service
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": selectedService.title,
      "description": selectedService.description,
      "medicineSystem": "Western Medicine",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": selectedDoctor.specialty
      },
      "performer": {
        "@type": "Physician",
        "name": selectedDoctor.name,
        "jobTitle": selectedDoctor.title,
        "image": selectedDoctor.imageUrl
      },
      "subjectOf": {
        "@type": "WebPage",
        "url": currentUrl,
        "name": pageTitle,
        "description": pageDescription
      }
    };
    return {
      pageTitle,
      pageDescription,
      keywords,
      schemaMarkup,
      currentUrl,
      imageUrl: selectedService.imageUrl
    };
  };

  const seoContent = generateSEOContent();

  if (loading || !selectedService || !selectedDoctor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl text-gray-600"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-primary rounded-full animate-spin mb-4"></div>
            <span>Loading...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  const renderCTA = () => {
    return (
      <CTA
        variant={variant}
        title={`Schedule Your ${selectedService.title} Consultation`}
        description={`Take the first step towards better health with ${selectedDoctor.name}. Book your consultation today.`}
        className="my-12"
      />
    );
  };

  // Helper function to render procedures
  const renderProcedures = (procedures: Procedure[] | string[] | undefined) => {
    if (!procedures || procedures.length === 0) return null;
    
    return (
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {procedures.map((proc, index) => {
            if (typeof proc === 'string') {
              return (
                <div key={index} className={`p-5 rounded-lg bg-${accentColorClass} border-l-4 border-${primaryColorClass} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                  <h4 className="font-medium text-gray-800">{proc}</h4>
                </div>
              );
            } else {
              return (
                <div key={index} className={`p-5 rounded-lg bg-${accentColorClass} border-l-4 border-${primaryColorClass} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                  <h4 className={`font-semibold text-lg text-${textColorClass} mb-2`}>{proc.name}</h4>
                  {proc.description && <p className="text-gray-700">{proc.description}</p>}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  // Toggle expanded subservice with smooth animation
  const toggleSubService = (id: string) => {
    if (expandedSubServiceId === id) {
      setExpandedSubServiceId(null);
    } else {
      setExpandedSubServiceId(id);
      // Also set the selected subservice
      const subService = selectedService.subServices?.find(sub => (sub.slug || sub.name) === id);
      if (subService) {
        setSelectedSubService(subService);
      }
    }
  };

  return (
    <>
      {seoContent && (
        <Helmet>
          {/* Basic Meta Tags */}
          <title>{seoContent.pageTitle}</title>
          <meta name="description" content={seoContent.pageDescription} />
          <meta name="keywords" content={seoContent.keywords} />
          
          {/* Canonical Link */}
          <link rel="canonical" href={seoContent.currentUrl} />
          
          {/* Open Graph Tags */}
          <meta property="og:title" content={seoContent.pageTitle} />
          <meta property="og:description" content={seoContent.pageDescription} />
          <meta property="og:image" content={seoContent.imageUrl} />
          <meta property="og:url" content={seoContent.currentUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Growth Gut Experts" />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoContent.pageTitle} />
          <meta name="twitter:description" content={seoContent.pageDescription} />
          <meta name="twitter:image" content={seoContent.imageUrl} />
          
          {/* Structured Data / Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify(seoContent.schemaMarkup)}
          </script>
        </Helmet>
      )}

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with subtle parallax effect */}
        <div className="relative h-[700px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            src={selectedService.imageUrl}
            alt={selectedService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-${primaryColorClass} text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block shadow-sm`}
              >
                {selectedDoctor.title}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                {selectedService.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-white backdrop-blur-sm bg-black/30 p-6 rounded-lg shadow-lg leading-relaxed"
              >
                {selectedService.description}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Doctor Info Card with subtle hover effect */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-white shadow-lg rounded-lg overflow-hidden mb-16 border-t-4 border-${primaryColorClass} hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-8 flex flex-col md:flex-row md:items-center gap-8">
              <div className="relative">
                <div className={`absolute inset-0 rounded-full bg-${primaryColorClass} opacity-10 transform scale-110 blur-md`}></div>
                <img
                  src={selectedDoctor.imageUrl}
                  alt={selectedDoctor.name}
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-md mx-auto md:mx-0"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">{selectedDoctor.name}</h2>
                <p className={`text-${textColorClass} mb-3 text-center md:text-left font-medium`}>{selectedDoctor.title}</p>
                <p className="text-gray-600 text-center md:text-left">{selectedDoctor.specialty} Specialist</p>
                <div className="mt-5">
                  <a 
                    href={`tel:${selectedDoctor.contact}`} 
                    className={`inline-flex items-center px-5 py-2.5 bg-${primaryColorClass} text-white rounded-full hover:bg-opacity-90 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Doctor
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-16"
          >            
            {/* Display procedures if no subServices exist */}
            {!selectedService.subServices && renderProcedures(selectedService.procedures)}
          </motion.div>

          {/* Sub-services Section with improved dropdown */}
          {selectedService.subServices && selectedService.subServices.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className={`text-2xl font-bold mb-8 text-${textColorClass} flex items-center`}>
                <span className={`inline-block w-8 h-1 bg-${primaryColorClass} mr-3 rounded`}></span>
                Treatments 
              </h2>
              
              {/* Enhanced accordion style subservices */}
              <div className="space-y-5">
                {selectedService.subServices.map((subService) => {
                  const subServiceId = subService.slug || subService.name;
                  const isExpanded = expandedSubServiceId === subServiceId;
                  
                  return (
                    <div key={subServiceId} className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'hover:shadow-lg'}`}>
                      {/* Enhanced Accordion Header */}
                      <button
                        onClick={() => toggleSubService(subServiceId)}
                        className={`w-full px-8 py-5 flex justify-between items-center transition-colors duration-300 ${isExpanded ? `bg-${accentColorClass}` : 'bg-white'}`}
                        aria-expanded={isExpanded}
                        aria-controls={`content-${subServiceId}`}
                      >
                        <div className="flex items-center">
                          <h3 className={`text-xl font-semibold text-${isExpanded ? primaryColorClass : 'gray-800'} transition-colors duration-300`}>
                            {subService.name}
                          </h3>
                        </div>
                        <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-${isExpanded ? primaryColorClass : 'gray-100'} text-${isExpanded ? 'white' : 'gray-500'} transition-all duration-300`}>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {/* Accordion Content with smooth animation */}
 
                        {isExpanded && (
                          <motion.div
                            key={`content-${subServiceId}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                            id={`content-${subServiceId}`}
                          >
                            <div className={`p-8 border-t border-gray-100 bg-gradient-to-b from-${accentColorClass} to-white`}>
                            {subService.imageUrl && (
  <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
    <img 
      src={subService.imageUrl} 
      alt={subService.name} 
      className="w-full h-auto max-h-96 object-cover transition-transform duration-700 hover:scale-105" 
    />
  </div>
)}
                              {renderProcedures(subService.procedures)}
                            </div>
                          </motion.div>
                        )}
                       
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : null}

          {renderCTA()}
        </div>
      </div>
    </>
  );
};

export default ServiceTemplate;