import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Book, 
  Globe2, 
  Heart,
  Star,
  Users,
  Sparkles,
  ChevronRight,
  Clock
} from 'lucide-react';

interface AboutProps {
  doctorData: DoctorProfile;
  bgColorClass: string;
}

const About: React.FC<AboutProps> = ({ doctorData, bgColorClass }) => {

  return (
    <div className={`min-h-screen bg-gradient-to-br from-${bgColorClass} via-${bgColorClass}/5 to-white`}>
      
      {/* Hero Section */}
      <section className={`pt-24 pb-16 bg-gradient-to-br from-${bgColorClass} to-${bgColorClass}/40`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className={`absolute inset-0 bg-${bgColorClass} rounded-full blur-3xl opacity-20`}></div>
              <img
                src={doctorData.personalDetails.imageUrl}
                alt={doctorData.personalDetails.name}
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-4 ring-white"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {doctorData.personalDetails.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {doctorData.workExperience[0].role}
                {doctorData.workExperience[0].department && ` - ${doctorData.workExperience[0].department}`}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Globe2 className="inline-block w-5 h-5 mr-2" />
                  {doctorData.personalDetails.languagesKnown.join(", ")}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Users className="inline-block w-5 h-5 mr-2" />
                  {doctorData.memberships.length} Professional Societies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline View */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* About Section */}
            <div id="about" className="scroll-mt-20">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className={`w-6 h-6 text-${bgColorClass}`} />
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed">{doctorData.about}</p>
              </div>
            </div>

            {/* Education Timeline */}
            <div id="education" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className={`w-6 h-6 text-${bgColorClass}`} />
                Education Journey
              </h2>
              <div className="space-y-6">
                {doctorData.education.map((edu, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className={`absolute left-0 top-0 w-2 h-2 rounded-full bg-${bgColorClass} -translate-x-[3px]`}></div>
                    <div className="pl-8">
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="font-semibold text-lg text-gray-800">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institute}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {edu.duration.start} - {edu.duration.end}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div id="experience" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className={`w-6 h-6 text-${bgColorClass}`} />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {doctorData.workExperience.map((work, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div className={`absolute left-0 top-0 w-2 h-2 rounded-full bg-${bgColorClass} -translate-x-[3px]`}></div>
                    <div className="pl-8">
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="font-semibold text-lg text-gray-800">{work.role}</h3>
                        {work.department && (
                          <p className="text-gray-700">{work.department}</p>
                        )}
                        <p className="text-gray-600">{work.organization}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {work.duration.start} - {work.duration.end}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Section */}
            {doctorData.research && doctorData.research.length > 0 && (
              <div id="research" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Book className={`w-6 h-6 text-${bgColorClass}`} />
                  Research Work
                </h2>
                <div className="grid gap-6">
                  {doctorData.research.map((research, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg text-gray-800 mb-3">{research.title}</h3>
                      {research.comments && (
                        <ul className="space-y-2">
                          {research.comments.map((comment, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <ChevronRight className={`w-4 h-4 text-${bgColorClass} mt-1 flex-shrink-0`} />
                              <span className="text-gray-600">{comment}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Awards Grid */}
            {doctorData.awards && doctorData.awards.length > 0 && (
              <div id="awards" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className={`w-6 h-6 text-${bgColorClass}`} />
                  Awards & Recognition
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {doctorData.awards.map((award, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg text-gray-800">{award.title}</h3>
                      <p className="text-gray-600">{award.year}</p>
                      {award.category && (
                        <p className={`text-sm text-${bgColorClass} mt-2`}>{award.category}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Cloud */}
            <div id="skills" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className={`w-6 h-6 text-${bgColorClass}`} />
                Expertise & Skills
              </h2>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex flex-wrap gap-4">
                  {doctorData.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-${bgColorClass}/5 border border-${bgColorClass}/10
                        hover:bg-${bgColorClass}/10 transition-colors cursor-default`}
                    >
                      <Sparkles className={`w-4 h-4 text-${bgColorClass}`} />
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