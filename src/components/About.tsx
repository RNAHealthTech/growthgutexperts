import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { drMoumitaData, drSushovanData } from '../data/doctor';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Book, 
  Globe2, 
  Heart,
  Star,
  Users,
  Sparkles
} from 'lucide-react';

interface AboutProps {
  doctorData: DoctorProfile;
}

const About: React.FC<AboutProps> = ({ doctorData }: AboutProps) => {

    // const [selectedDoctor, setSelectedDoctor] = useState<'drSushovan' | 'drMoumita'>('drSushovan');
    // const doctorData = doctorData[selectedDoctor];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
            Meet Our Specialists
          </h1>
         
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Experienced healthcare professional dedicated to providing comprehensive care in 
            {' '}{doctorData === drMoumitaData ? 'Pediatric Endocrinology' : 'Gastroenterology and Hepatology'}.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
        <section  className='py-12 bg-gray-50'>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Profile Image & Basic Info */}
              <div className="lg:w-1/3">
                <div className="sticky top-8">
                  <div className="text-center mb-6">
                    <img
                      src="/api/placeholder/300/300"
                      alt={doctorData.personalDetails.name}
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-6 object-cover shadow-lg"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {doctorData.personalDetails.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {doctorData.workExperience[0].role}
                      {doctorData.workExperience[0].department && ` - ${doctorData.workExperience[0].department}`}
                    </p>
                  </div>
                  
                  {/* Quick Info */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe2 className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Languages: {doctorData.personalDetails.languagesKnown.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Member of {doctorData.memberships.length} Professional Societies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="lg:w-2/3 space-y-8">
                {/* About */}
                {doctorData.about && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-blue-600" />
                      About
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{doctorData.about}</p>
                  </div>
                )}

                {/* Education */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {doctorData.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-medium text-gray-800">{edu.degree}</h4>
                        <p className="text-gray-600">{edu.institute}</p>
                        <p className="text-sm text-gray-500">
                          {edu.duration.start} - {edu.duration.end}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Work Experience
                  </h3>
                  <div className="space-y-4">
                    {doctorData.workExperience.map((work, i) => (
                      <div key={i} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-medium text-gray-800">{work.role}</h4>
                        {work.department && (
                          <p className="text-gray-700">{work.department}</p>
                        )}
                        <p className="text-gray-600">{work.organization}</p>
                        <p className="text-sm text-gray-500">
                          {work.duration.start} - {work.duration.end}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Research */}
                {doctorData.research && doctorData.research.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Book className="w-5 h-5 text-blue-600" />
                      Research
                    </h3>
                    <div className="space-y-4">
                      {doctorData.research.map((research, i) => (
                        <div key={i} className="border-l-2 border-blue-200 pl-4">
                          <h4 className="font-medium text-gray-800">{research.title}</h4>
                          {research.comments && (
                            <ul className="mt-1 list-disc list-inside">
                              {research.comments.map((comment, j) => (
                                <li key={j} className="text-gray-600 text-sm">{comment}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Awards */}
                {doctorData.awards && doctorData.awards.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      Awards & Recognition
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {doctorData.awards.map((award, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-800">{award.title}</h4>
                          <p className="text-sm text-gray-600">{award.year}</p>
                          {award.category && (
                            <p className="text-sm text-gray-500">{award.category}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-600" />
                    Expertise & Skills
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {doctorData.skills.map((skill, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600 mt-1" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
  );
};

export default About;