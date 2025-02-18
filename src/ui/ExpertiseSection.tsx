import React from 'react';
import { ArrowRight, Brain, Heart, Activity, Baby, Dna, Hospital, TestTube, Syringe, Microscope, type LucideIcon } from 'lucide-react';
import { drMoumitaData, drSushovanData } from '../data/doctor';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, color }: ServiceCardProps) => (
  <div className="p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ExpertiseSection = () => {

  const navigateToSubdomain = (subdomain: string) => {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      // For local development
      const port = window.location.port;
      const newUrl = `${protocol}//${subdomain}.localhost${port ? ':' + port : ''}/`;
      window.location.assign(newUrl);
    } else {
      // For production
      const domainParts = hostname.split('.');
      const mainDomain = domainParts.length > 2
        ? domainParts.slice(1).join('.')
        : hostname;

      const newUrl = `${protocol}//${subdomain}.${mainDomain}/`;
      window.location.assign(newUrl);
    }
  };
  return (

    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Growth & Gut Experts?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive care for both pediatric endocrine and digestive health needs under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Dr. Moumita's Services */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={drMoumitaData.personalDetails.imageUrl}
                alt="Dr. Moumita"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Moumita's Expertise</h3>
                <p className="text-yellow-800">Pediatric Endocrinologist</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ServiceCard
                icon={Baby}
                title="Childhood Diabetes"
                description="Expert management of Type 1 DM, Neonatal DM, and MODY"
                color="bg-yellow-500"
              />
              <ServiceCard
                icon={Activity}
                title="Growth Disorders"
                description="Specialized care for short stature and growth-related conditions"
                color="bg-yellow-500"
              />
              <ServiceCard
                icon={Brain}
                title="Thyroid Management"
                description="Treatment of congenital and acquired thyroid disorders"
                color="bg-yellow-500"
              />
              <ServiceCard
                icon={Dna}
                title="Metabolic Care"
                description="Management of metabolic disorders and childhood obesity"
                color="bg-yellow-500"
              />
            </div>
            <button
              onClick={() => navigateToSubdomain('drmoumita')}
              className="mt-6 w-full flex items-center justify-center bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-all duration-300"
            >
              Explore Dr. Moumita's Services <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Dr. Sushovan's Services */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={drSushovanData.personalDetails.imageUrl}
                alt="Dr. Sushovan"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Sushovan's Expertise</h3>
                <p className="text-blue-600">Hepatologist & Gastroenterologist</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ServiceCard
                icon={Hospital}
                title="Liver Care"
                description="Comprehensive management of liver diseases and transplant care"
                color="bg-blue-500"
              />
              <ServiceCard
                icon={Microscope}
                title="Endoscopy"
                description="Advanced endoscopic procedures and diagnostics"
                color="bg-blue-500"
              />
              <ServiceCard
                icon={TestTube}
                title="IBD Management"
                description="Treatment of inflammatory bowel diseases"
                color="bg-blue-500"
              />
              <ServiceCard
                icon={Syringe}
                title="ERCP"
                description="Expert biliary procedures and stone management"
                color="bg-blue-500"
              />
            </div>
            <button
              onClick={() => navigateToSubdomain('drsushovan')}
              className="mt-6 w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300"
            >
              Explore Dr. Sushovan's Services <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )};

  export default ExpertiseSection;