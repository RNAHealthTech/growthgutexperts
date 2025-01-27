import React from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfile } from '../data/doctor';
import { ArrowRight, Award, GraduationCap, Stethoscope, FileText } from 'lucide-react';

interface HomeProps {
  doctorData: DoctorProfile;
}

const Home: React.FC<HomeProps> = ({ doctorData }) => {
  const {
    personalDetails,
    about,
    education,
    workExperience,
    awards,
    skills
  } = doctorData;

  // Get the latest education and work experience
  const latestEducation = education[education.length - 1];
  const currentWork = workExperience[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {personalDetails.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                {currentWork.role}
                {currentWork.department && ` - ${currentWork.department}`}
              </h2>
              {about && (
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {about}
                </p>
              )}
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/api/placeholder/400/400"
                alt={personalDetails.name}
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Qualifications & Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Latest Education</h3>
              </div>
              <p className="text-lg font-medium">{latestEducation.degree}</p>
              <p className="text-gray-600">{latestEducation.institute}</p>
              <p className="text-sm text-gray-500">
                {latestEducation.duration.start} - {latestEducation.duration.end}
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Current Position</h3>
              </div>
              <p className="text-lg font-medium">{currentWork.role}</p>
              <p className="text-gray-600">{currentWork.organization}</p>
              <p className="text-sm text-gray-500">
                {currentWork.duration.start} - {currentWork.duration.end}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-start"
              >
                <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
          {skills.length > 6 && (
            <div className="text-center mt-8">
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View all skills <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Awards Section */}
      {awards && awards.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <Award className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-medium mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.year}</p>
                  {award.category && (
                    <p className="text-sm text-gray-500 mt-1">{award.category}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;