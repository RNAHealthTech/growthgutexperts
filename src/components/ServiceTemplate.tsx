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
          Loading...
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
                <div key={index} className={`p-4 rounded-lg bg-${accentColorClass} border-l-4 border-${primaryColorClass}`}>
                  <h4 className="font-medium text-gray-800">{proc}</h4>
                </div>
              );
            } else {
              return (
                <div key={index} className={`p-5 rounded-lg bg-${accentColorClass} border-l-4 border-${primaryColorClass} hover:shadow-md transition-shadow duration-300`}>
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

  // Helper function to render benefits
  const renderBenefits = (benefits: string[] | undefined) => {
    if (!benefits || benefits.length === 0) return null;
    
    return (
      <div className="mt-6">
        <h3 className={`text-xl font-bold mb-4 text-${textColorClass}`}>Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className={`mr-2 mt-1 text-${primaryColorClass}`}>
                {/* SVG checkmark icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Helper function to render symptoms
  const renderSymptoms = (symptoms: string[] | undefined) => {
    if (!symptoms || symptoms.length === 0) return null;
    
    return (
      <div className="mt-8 p-5 bg-gray-50 rounded-lg">
        <h3 className={`text-xl font-bold mb-4 text-${textColorClass}`}>Common Symptoms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {symptoms.map((symptom, index) => (
            <div key={index} className="flex items-start">
              <div className={`mr-2 mt-1 text-${primaryColorClass}`}>
                {/* Warning icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700">{symptom}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Helper function to render who should consider
  const renderWhoShouldConsider = (whoShouldConsider: string[] | undefined) => {
    if (!whoShouldConsider || whoShouldConsider.length === 0) return null;
    
    return (
      <div className="mt-8 p-6 border border-gray-200 rounded-lg bg-white">
        <h3 className={`text-xl font-bold mb-4 text-${textColorClass}`}>Who Should Consider This</h3>
        <ul className="space-y-3">
          {whoShouldConsider.map((person, index) => (
            <li key={index} className="flex items-start">
              <div className={`mr-2 mt-1 text-${primaryColorClass}`}>
                {/* Person icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">{person}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Toggle expanded subservice
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
        {/* Hero Section */}
        <div className="relative h-[700px] w-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={selectedService.imageUrl}
            alt={selectedService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {selectedDoctor.title}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {selectedService.title}
              </h1>
              <p className="text-xl text-gray-100 backdrop-blur-sm bg-black/20 p-4 rounded-lg">
                {selectedService.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Doctor Info Card */}
          <div className={`bg-white shadow-lg rounded-lg overflow-hidden mb-12 border-t-4 border-${primaryColorClass}`}>
            <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
              <img
                src={selectedDoctor.imageUrl}
                alt={selectedDoctor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mx-auto md:mx-0"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">{selectedDoctor.name}</h2>
                <p className={`text-${textColorClass} mb-2 text-center md:text-left`}>{selectedDoctor.title}</p>
                <p className="text-gray-600 text-center md:text-left">{selectedDoctor.specialty} Specialist</p>
                <div className="mt-4">
                  <a 
                    href={`tel:${selectedDoctor.contact}`} 
                    className={`inline-flex items-center px-4 py-2 bg-${primaryColorClass} text-white rounded-full hover:bg-opacity-90 transition-colors duration-300`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Doctor
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
  
            
            {/* Display procedures if no subServices exist */}
            {!selectedService.subServices && renderProcedures(selectedService.procedures)}
          </div>

          {/* Sub-services Section */}
          {selectedService.subServices && selectedService.subServices.length > 0 ? (
            <div className="mb-12">
              <h2 className={`text-2xl font-bold mb-6 text-${textColorClass}`}>Treatment Options</h2>
              
              {/* Accordion style subservices */}
              <div className="space-y-4">
                {selectedService.subServices.map((subService) => {
                  const subServiceId = subService.slug || subService.name;
                  const isExpanded = expandedSubServiceId === subServiceId;
                  
                  return (
                    <div key={subServiceId} className="bg-white rounded-lg shadow-md overflow-hidden">
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleSubService(subServiceId)}
                        className={`w-full px-6 py-4 flex justify-between items-center ${isExpanded ? `bg-${accentColorClass}` : 'bg-white'}`}
                      >
                        <div className="flex items-center">
                          <h3 className={`text-xl font-semibold text-${isExpanded ? primaryColorClass : 'gray-800'}`}>
                            {subService.name}
                          </h3>
                        </div>
                        <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${primaryColorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {/* Accordion Content */}
                    
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 border-t border-gray-100">
                              {subService.imageUrl && (
                                <img 
                                  src={subService.imageUrl} 
                                  alt={subService.name}
                                  className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                              )}
                              
                              {subService.description && (
                                <div className="mb-6">
                                  <p className="text-gray-700 leading-relaxed">{subService.description}</p>
                                </div>
                              )}
                              
                              {renderBenefits(subService.benefits)}
                              {renderProcedures(subService.procedures)}
                              {renderSymptoms(subService.symptoms)}
                              {renderWhoShouldConsider(subService.whoShouldConsider)}
                            </div>
                          </motion.div>
                        )}
                      
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {renderCTA()}
        </div>
      </div>
    </>
  );
};

export default ServiceTemplate;