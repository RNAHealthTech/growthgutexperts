import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Users } from 'lucide-react';
import { DoctorServices, ServiceContent, SubServiceContent } from '../data/services';
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
  const [loading, setLoading] = useState<boolean>(true);
  const [variant, setVariant] = useState<'drmoumita' | 'drsushovan'>('drmoumita');
  let textColorClass, accentColorClass;


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
        textColorClass = 'blue-900'
        accentColorClass = 'blue-100'
      } else if (subdomain.includes('moumita')) {
        currentDoctor = doctorData.drMoumita;
        setVariant('drmoumita');
        textColorClass = 'amber-700';
        accentColorClass = 'amber-900';
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
  const generateSEOContent = () => {
    if (!selectedService || !selectedDoctor) return null;
    
    const currentUrl = `https://${window.location.hostname}/services/${slug}`;
    const pageTitle = `${selectedService.title} | ${selectedDoctor.name} - ${selectedDoctor.specialty} Specialist`;
    const pageDescription = `Learn about ${selectedService.title} treatments provided by ${selectedDoctor.name}, a leading ${selectedDoctor.specialty} specialist. ${selectedService.description.substring(0, 120)}...`;
    
    // Generate keywords based on service and doctor specialty
    const keywords = `${selectedService.title}, ${selectedDoctor.specialty}, ${selectedDoctor.title}, 
      ${selectedDoctor.name}, medical treatment, healthcare, specialized care, 
      ${selectedService.subServices.map(sub => sub.name).join(', ')}`;
    
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
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={selectedService.imageUrl}
          alt={selectedService.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className={`text-${textColorClass} font-semibold mb-2 block`}>
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
        {/* Sub-services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {selectedService.subServices.map((subService) => (
            <motion.div
              key={subService.name}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedSubService(subService)}
            >
              <div className="aspect-video w-full relative">
                <img
                  src={subService.imageUrl}
                  alt={subService.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{subService.name}</h3>

              </div>
            </motion.div>
          ))}
        </div>
        {renderCTA()}
      </div>
    </div>
    </>
  );
};

export default ServiceTemplate;