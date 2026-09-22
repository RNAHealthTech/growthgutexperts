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
import { Helmet } from 'react-helmet-async';

interface AboutProps {
  doctorData: DoctorProfile;
  bgColorClass: string;
}
 

// Reusing the same helper functions from SeoTags.tsx
const formatSchemaDate = (dateString: string) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch (e) {
    return dateString;
  }
};

const generateEducationSchema = (educations: any[]) => {
  return educations.map(edu => ({
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": edu.degree,
    "educationalLevel": edu.degree,
    "recognizedBy": {
      "@type": "Organization",
      "name": edu.institute
    },
    "dateCreated": formatSchemaDate(edu.duration.start),
    "endDate": formatSchemaDate(edu.duration.end)
  }));
};

const generateWorkExperienceSchema = (experiences: any[]) => {
  return experiences.map(exp => ({
    "@type": "OrganizationRole",
    "roleName": exp.role + (exp.department ? ` - ${exp.department}` : ''),
    "memberOf": {
      "@type": "Organization",
      "name": exp.organization
    },
    "startDate": formatSchemaDate(exp.duration.start),
    "endDate": exp.duration.end === "onwards" ? null : formatSchemaDate(exp.duration.end)
  }));
};

interface AboutSEOProps {
  doctorData: DoctorProfile;
  baseUrl: string;
}

export const AboutSEO: React.FC<AboutSEOProps> = ({ doctorData, baseUrl }) => {
  const {
    personalDetails,
    education,
    currentworkExperience,
    pastworkExperience,
    skills,
    about,
    contactDetails
  } = doctorData;

  const isDrMoumita = personalDetails.name.toLowerCase().includes('moumita');
  const pageUrl = `${baseUrl}/${isDrMoumita ? 'dr-moumita' : 'dr-sushovan'}/about`;
  const imageUrl = `${baseUrl}${personalDetails.imageUrl}`;
  
  // Generate title and description based on doctor
  const title = `About ${personalDetails.name} - ${personalDetails.specialty} in Delhi`;
  
  // Different descriptions based on the doctor
  const description = isDrMoumita 
    ? `Learn about Dr. Moumita Saha's education, experience, and expertise as a Pediatric Endocrinologist in Delhi. Specialist in childhood diabetes, growth disorders, and thyroid conditions.`
    : `Learn about Dr. Sushovan Baidya's education, experience, and expertise as a Gastroenterologist & Hepatologist in Delhi. Specialist in liver disease, digestive disorders, and complex GI conditions.`;

  // Person Schema for the about page with detailed credentials
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalDetails.name,
    "description": about,
    "gender": personalDetails.gender,
    "image": imageUrl,
    "nationality": personalDetails.nationality,
    "birthDate": personalDetails.dateOfBirth,
    "telephone": contactDetails.phone,
    "email": contactDetails.email,
    "url": pageUrl,
    "jobTitle": currentworkExperience[0].role,
    "worksFor": {
      "@type": "Organization",
      "name": currentworkExperience[0].organization
    },
    "hasCredential": generateEducationSchema(education),
    "knowsLanguage": personalDetails.languagesKnown,
    "memberOf": doctorData.memberships.map(membership => ({
      "@type": "Organization",
      "name": membership
    })),
    "hasOccupation": [
      ...generateWorkExperienceSchema(currentworkExperience),
      ...generateWorkExperienceSchema(pastworkExperience)
    ],
    "skill": skills.slice(0, 10).map(skill => ({
      "@type": "DefinedTerm",
      "name": skill
    }))
  };

  // Keywords tailored for about page
  const keywords = isDrMoumita
    ? [
        "Dr Moumita Saha background",
        "Pediatric Endocrinologist qualifications",
        "Dr Moumita education",
        "Child specialist Delhi experience",
        "Diabetes doctor Delhi training",
        "Dr Moumita Saha expertise",
        "Pediatric hormone specialist career",
        "Dr Moumita Saha professional background",
        "Child growth doctor credentials",
        "Pediatric endocrinology specialist Delhi"
      ].join(", ")
    : [
        "Dr Sushovan Baidya background",
        "Gastroenterologist qualifications",
        "Hepatologist Delhi education",
        "Dr Sushovan medical training",
        "Liver specialist credentials",
        "Digestive health expert experience",
        "Dr Sushovan Baidya expertise",
        "Gastroenterology career Delhi",
        "Hepatology specialist background",
        "Dr Sushovan professional journey"
      ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={personalDetails.name} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="profile:first_name" content={personalDetails.name.split(' ')[0]} />
      <meta property="profile:last_name" content={personalDetails.name.split(' ')[1]} />
      <meta property="profile:gender" content={personalDetails.gender.toLowerCase()} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
      <meta name="rating" content="General" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="New Delhi" />
      <meta name="geo.position" content="28.666797;77.212034" />
      <meta name="ICBM" content="28.666797, 77.212034" />
      
      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      
      {/* Canonical Link */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

// FAQ Schema specifically for About page
export const AboutFAQSchema: React.FC<{ doctorData: DoctorProfile; baseUrl: string }> = ({ doctorData, baseUrl }) => {
  const isDrMoumita = doctorData.personalDetails.name.toLowerCase().includes('moumita');
  
  // FAQ data for About page - Dr. Moumita
  const moumitaFAQs = [
    {
      question: "What is Dr. Moumita Saha's educational background?",
      answer: "Dr. Moumita Saha completed her MBBS and MD Pediatrics from Lady Hardinge Medical College, New Delhi, followed by Post Doctoral Fellowship in Pediatric Endocrinology from Christian Medical College, Vellore."
    },
    {
      question: "What professional memberships does Dr. Moumita have?",
      answer: "Dr. Moumita Saha is a member of several professional organizations including the Indian Academy of Pediatrics (IAP), Indian Society for Pediatric and Adolescent Endocrinology (ISPAE), and Pediatric Endocrine Training Centers of India (PETCI)."
    },
    {
      question: "What is Dr. Moumita's area of expertise?",
      answer: "Dr. Moumita specializes in pediatric endocrine conditions including childhood diabetes, thyroid disorders, growth disorders, puberty-related issues, adrenal disorders, childhood obesity, and metabolic syndrome."
    },
    {
      question: "Where did Dr. Moumita receive her specialty training?",
      answer: "Dr. Moumita received her specialty training in Pediatric Endocrinology during her Post Doctoral Fellowship at Christian Medical College, Vellore, one of India's premier medical institutions."
    },
    {
      question: "What languages does Dr. Moumita speak?",
      answer: "Dr. Moumita Saha is fluent in English, Hindi, and Bengali, allowing her to communicate effectively with a diverse patient population."
    }
  ];
  
  // FAQ data for About page - Dr. Sushovan
  const sushovanFAQs = [
    {
      question: "What is Dr. Sushovan Baidya's educational background?",
      answer: "Dr. Sushovan Baidya completed his MBBS from Medical College, Kolkata, MD in General Medicine from M.K.C.G Medical College, Odisha, and DM in Hepatology from Christian Medical College, Vellore."
    },
    {
      question: "What professional memberships does Dr. Sushovan have?",
      answer: "Dr. Sushovan Baidya is a member of several professional organizations including the Indian Society of Gastroenterology (ISG), Association of Physicians of India (API), and Indian Association for the Study of the Liver (INASL)."
    },
    {
      question: "What is Dr. Sushovan's area of expertise?",
      answer: "Dr. Sushovan specializes in liver diseases, gastrointestinal disorders, pancreatic conditions, and biliary diseases with particular expertise in transplant hepatology and complex digestive system conditions."
    },
    {
      question: "Where did Dr. Sushovan receive his specialty training?",
      answer: "Dr. Sushovan received his specialty training in Hepatology during his DM program at Christian Medical College, Vellore, one of India's premier medical institutions for liver disease management."
    },
    {
      question: "What languages does Dr. Sushovan speak?",
      answer: "Dr. Sushovan Baidya is fluent in English, Hindi, and Bengali, allowing him to communicate effectively with a diverse patient population."
    }
  ];
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (isDrMoumita ? moumitaFAQs : sushovanFAQs).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

// Comprehensive About page SEO component
export const ComprehensiveAboutSEO: React.FC<{ doctorData: DoctorProfile; baseUrl: string }> = ({ doctorData, baseUrl }) => {
  return (
    <>
      <AboutSEO doctorData={doctorData} baseUrl={baseUrl} />
      <AboutFAQSchema doctorData={doctorData} baseUrl={baseUrl} />
    </>
  );
};

const About: React.FC<AboutProps> = ({ doctorData, bgColorClass }) => {

  return (
    <>
    <ComprehensiveAboutSEO  doctorData={doctorData} baseUrl='https://growthgutexperts.com' />
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
                {doctorData.currentworkExperience[0].role}
                {doctorData.currentworkExperience[0].department && ` - ${doctorData.currentworkExperience[0].department}`}
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
                {doctorData.pastworkExperience.map((work, i) => (
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
    </>
  );
};

export default About;