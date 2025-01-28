import React from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { ArrowRight, Award, GraduationCap, Stethoscope, FileText, Heart, Brain } from 'lucide-react';

const DrMoumitaHero: React.FC<{ data: DoctorProfile }> = ({ data }) => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {data.personalDetails.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Pediatric & Adolescent Endocrinologist
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-gray-600">Specialized in Children's Endocrine Care</span>
            </div>
            {data.about && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {data.about}
              </p>
            )}
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors"
              >
                Pediatric Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/api/placeholder/400/400"
              alt={data.personalDetails.name}
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DrSushovanHero: React.FC<{ data: DoctorProfile }> = ({ data }) => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {data.personalDetails.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Gastroenterologist & Hepatologist
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-teal-500" />
              <span className="text-gray-600">Expert in Liver & Digestive Health</span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Specialized in advanced hepatology and gastroenterology procedures with extensive experience in liver transplant management.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/api/placeholder/400/400"
              alt={data.personalDetails.name}
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Component map to match doctors with their custom components
export const DoctorComponentMap = {
  'drmoumita': {
    HeroSection: DrMoumitaHero,
    primaryColor: 'pink-600',
    secondaryColor: 'purple-500'
  },
  'drsushovan': {
    HeroSection: DrSushovanHero,
    primaryColor: 'teal-600',
    secondaryColor: 'blue-500'
  }
};

export const getDoctorComponents = (doctorData: DoctorProfile) => {
  const doctorKey = doctorData.personalDetails.name.toLowerCase().replace(/[^a-z]/g, '');
  return DoctorComponentMap[doctorKey as keyof typeof DoctorComponentMap] || DoctorComponentMap.drsushovan;
};