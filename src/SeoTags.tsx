import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DoctorProfile } from '../src/data/doctor';

// Helper function to format date for schema
const formatSchemaDate = (dateString: string) => {
  if (!dateString) return '';
  // Convert to YYYY-MM-DD format if possible
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch (e) {
    return dateString; // Return original if parsing fails
  }
};

// Generate education entries for schema
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

// Generate work experience entries for schema
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

interface SEOComponentProps {
  data: DoctorProfile;
  baseUrl: string;
}

export const DrMoumitaSEO: React.FC<SEOComponentProps> = ({ data, baseUrl }) => {
  const {
    personalDetails,
    education,
    currentworkExperience,
    pastworkExperience,
    skills,
    contactDetails
  } = data;

  const pageUrl = `${baseUrl}/dr-moumita`;
  const imageUrl = `${baseUrl}${personalDetails.imageUrl}`;

  // Schema for Dr. Moumita
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": personalDetails.name,
    "description": personalDetails.description,
    "gender": personalDetails.gender,
    "image": imageUrl,
    "nationality": personalDetails.nationality,
    "birthDate": personalDetails.dateOfBirth,
    "telephone": contactDetails.phone,
    "email": contactDetails.email,
    "url": pageUrl,
    "medicalSpecialty": personalDetails.specialty,
    "workLocation": {
      "@type": "Hospital",
      "name": currentworkExperience[0].organization,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactDetails.address
      }
    },
    "hasCredential": generateEducationSchema(education),
    "knowsLanguage": personalDetails.languagesKnown,
    "memberOf": data.memberships.map(membership => ({
      "@type": "Organization",
      "name": membership
    })),
    "hasOccupation": [
      ...generateWorkExperienceSchema(currentworkExperience),
      ...generateWorkExperienceSchema(pastworkExperience)
    ],
    "hasSkill": skills.slice(0, 10).map(skill => ({
      "@type": "DefinedTerm",
      "name": skill
    }))
  };

  // Keywords for Dr. Moumita
  const keywords = [
    "Pediatric Endocrinologist Delhi",
    "Pediatric Endocrinologist New Delhi",
    "Dr Moumita Saha",
    "Child growth specialist",
    "Child diabetes doctor Delhi",
    "Pediatric thyroid specialist",
    "Children's hormone specialist",
    "Childhood obesity doctor",
    "Growth disorders in children",
    "Pediatric endocrinology Holy Family Hospital",
    "Child PCOS treatment Delhi",
    "Puberty disorders specialist",
    "Type 1 diabetes management children"
  ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{personalDetails.name} - {personalDetails.specialty} in Delhi</title>
      <meta name="title" content={`${personalDetails.name} - ${personalDetails.specialty} in Delhi`} />
      <meta name="description" content={`Dr. Moumita Saha is a specialist Pediatric Endocrinologist in Delhi with expertise in childhood diabetes, growth disorders, thyroid conditions, and obesity management. Book an appointment today.`} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={personalDetails.name} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={`${personalDetails.name} - ${personalDetails.specialty} in Delhi`} />
      <meta property="og:description" content={`Pediatric Endocrinologist specialized in childhood diabetes, growth disorders, thyroid conditions, and obesity management. Trained at CMC Vellore & Lady Hardinge Medical College.`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="profile:first_name" content="Moumita" />
      <meta property="profile:last_name" content="Saha" />
      <meta property="profile:gender" content="female" />
      <meta property="profile:username" content="drmoumitasaha" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={`${personalDetails.name} - Pediatric Endocrinologist in Delhi`} />
      <meta property="twitter:description" content={`Expert care for children with diabetes, growth disorders, thyroid conditions, and obesity. Consultations at Holy Family Hospital, Sitaram Bhartia, and more.`} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="rating" content="General" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="New Delhi" />
      <meta name="geo.position" content="28.666797;77.212034" />
      <meta name="ICBM" content="28.666797, 77.212034" />
      
      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(doctorSchema)}
      </script>
      
      {/* Canonical Link */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

export const DrSushovanSEO: React.FC<SEOComponentProps> = ({ data, baseUrl }) => {
  const {
    personalDetails,
    education,
    currentworkExperience,
    pastworkExperience,
    skills,
    contactDetails
  } = data;

  const pageUrl = `${baseUrl}/dr-sushovan`;
  const imageUrl = `${baseUrl}${personalDetails.imageUrl}`;

  // Schema for Dr. Sushovan
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": personalDetails.name,
    "description": personalDetails.description,
    "gender": personalDetails.gender,
    "image": imageUrl,
    "nationality": personalDetails.nationality,
    "birthDate": personalDetails.dateOfBirth,
    "telephone": contactDetails.phone,
    "email": contactDetails.email,
    "url": pageUrl,
    "medicalSpecialty": personalDetails.specialty,
    "workLocation": {
      "@type": "Hospital",
      "name": "Sanjeevan Hospital",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24, Ansari Road, Darya Ganj, New Delhi, Delhi 110002"
      }
    },
    "hasCredential": generateEducationSchema(education),
    "knowsLanguage": personalDetails.languagesKnown,
    "memberOf": data.memberships.map(membership => ({
      "@type": "Organization",
      "name": membership
    })),
    "hasOccupation": [
      ...generateWorkExperienceSchema(currentworkExperience),
      ...generateWorkExperienceSchema(pastworkExperience)
    ],
    "hasSkill": skills.slice(0, 10).map(skill => ({
      "@type": "DefinedTerm",
      "name": skill
    }))
  };

  // Keywords for Dr. Sushovan
  const keywords = [
    "Gastroenterologist Delhi",
    "Hepatologist Delhi",
    "Dr Sushovan Baidya",
    "Liver specialist Delhi",
    "Sanjeevan Hospital gastroenterologist",
    "Digestive health doctor Delhi",
    "Liver transplant specialist",
    "IBD treatment Delhi",
    "Biliary disease expert",
    "Pancreatic disease doctor",
    "ERCP Delhi",
    "Endoscopy in Delhi",
    "Colonoscopy procedures Delhi",
    "Best liver doctor Delhi"
  ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{personalDetails.name} - {personalDetails.specialty} in Delhi</title>
      <meta name="title" content={`${personalDetails.name} - ${personalDetails.specialty} in Delhi`} />
      <meta name="description" content={`Dr. Sushovan Baidya is a specialist Gastroenterologist & Hepatologist in Delhi with expertise in liver diseases, IBD, pancreatic & biliary conditions. Trained at CMC Vellore. Book now.`} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={personalDetails.name} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={`${personalDetails.name} - ${personalDetails.specialty} in Delhi`} />
      <meta property="og:description" content={`Expert Gastroenterologist & Hepatologist at Sanjeevan Hospital with advanced expertise in liver and digestive health. Specialized in transplant hepatology and complex GI conditions.`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="profile:first_name" content="Sushovan" />
      <meta property="profile:last_name" content="Baidya" />
      <meta property="profile:gender" content="male" />
      <meta property="profile:username" content="drsushovanbaidya" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={`${personalDetails.name} - Gastroenterologist & Hepatologist in Delhi`} />
      <meta property="twitter:description" content={`Comprehensive care for liver diseases, digestive disorders, and transplant hepatology. Trained at CMC Vellore with expertise in endoscopic procedures and complex GI management.`} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="rating" content="General" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="New Delhi" />
      <meta name="geo.position" content="28.666797;77.212034" />
      <meta name="ICBM" content="28.666797, 77.212034" />
      
      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(doctorSchema)}
      </script>
      
      {/* Canonical Link */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

// Component to use in your app
export const DoctorSEO: React.FC<{ doctorData: DoctorProfile; baseUrl: string }> = ({ doctorData, baseUrl }) => {
  const isDrMoumita = doctorData.personalDetails.name.toLowerCase().includes('moumita');
  
  return isDrMoumita ? 
    <DrMoumitaSEO data={doctorData} baseUrl={baseUrl} /> : 
    <DrSushovanSEO data={doctorData} baseUrl={baseUrl} />;
};

// FAQ Schema component for additional SEO benefits
export const DoctorFAQSchema: React.FC<{ doctorData: DoctorProfile; baseUrl: string }> = ({ doctorData, baseUrl }) => {
  const isDrMoumita = doctorData.personalDetails.name.toLowerCase().includes('moumita');
  
  // FAQ data for Dr. Moumita
  const moumitaFAQs = [
    {
      question: "What conditions does Dr. Moumita Saha treat?",
      answer: "Dr. Moumita Saha specializes in pediatric endocrine conditions including childhood diabetes (Type 1 DM, Type 2 DM), thyroid disorders in children, growth disorders, puberty-related issues, adrenal disorders, childhood obesity, and metabolic syndrome."
    },
    {
      question: "Where does Dr. Moumita Saha practice in Delhi?",
      answer: "Dr. Moumita Saha consults at Holy Family Hospital (Okhla), Sitaram Bhartia Institute (Qutub Institutional Area), CK Bilra Hospital (West Punjab Bagh), and Sanjeevan Hospital (Daryaganj) in New Delhi."
    },
    {
      question: "What are Dr. Moumita Saha's qualifications?",
      answer: "Dr. Moumita Saha completed her MBBS and MD Pediatrics from Lady Hardinge Medical College, New Delhi, followed by Post Doctoral Fellowship in Pediatric Endocrinology from Christian Medical College, Vellore."
    },
    {
      question: "How can I book an appointment with Dr. Moumita Saha?",
      answer: "You can book an appointment with Dr. Moumita Saha by calling 8130545130 or emailing drmoumitasaha.16@gmail.com. Online consultations are available from 7 PM to 8 PM, Monday through Saturday."
    },
    {
      question: "Does Dr. Moumita Saha treat children with diabetes?",
      answer: "Yes, Dr. Moumita Saha specializes in childhood diabetes including Type 1 Diabetes, Neonatal Diabetes, Type 2 Diabetes, and MODY (Maturity Onset Diabetes of the Young)."
    }
  ];
  
  // FAQ data for Dr. Sushovan
  const sushovanFAQs = [
    {
      question: "What conditions does Dr. Sushovan Baidya treat?",
      answer: "Dr. Sushovan Baidya specializes in liver diseases, gastrointestinal disorders, pancreatic conditions, and biliary diseases. He has expertise in transplant hepatology, IBD management, and complex digestive system conditions."
    },
    {
      question: "Where does Dr. Sushovan Baidya practice in Delhi?",
      answer: "Dr. Sushovan Baidya practices as a Consultant in the Department of Gastroenterology and Hepatology at Sanjeevan Hospital, Delhi."
    },
    {
      question: "What are Dr. Sushovan Baidya's qualifications?",
      answer: "Dr. Sushovan Baidya completed his MBBS from Medical College, Kolkata, MD in General Medicine from M.K.C.G Medical College, Odisha, and DM in Hepatology from Christian Medical College, Vellore."
    },
    {
      question: "What procedures does Dr. Sushovan Baidya perform?",
      answer: "Dr. Sushovan Baidya performs gastroscopy, colonoscopy, endoscopic procedures for UGI bleed management, foreign body removal, APC, polypectomy, ERCP with CBD stone extraction, and biliary stenting."
    },
    {
      question: "How can I book an appointment with Dr. Sushovan Baidya?",
      answer: "You can book an appointment with Dr. Sushovan Baidya by calling 9474866692 or emailing sushovancmc20@gmail.com. Online consultations are available from 7 PM to 8 PM, Monday through Saturday."
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

// LocalBusiness schema for additional location-based SEO
export const HospitalLocationSchema: React.FC<{ doctorData: DoctorProfile; baseUrl: string }> = ({ doctorData, baseUrl }) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Sanjeevan Hospital",
    "url": "http://sanjeevanhospital.in/",
    "telephone": "+91-11-23267950",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24, Ansari Road, Darya Ganj",
      "addressLocality": "New Delhi",
      "postalCode": "110002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.641167",
      "longitude": "77.240409"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "sameAs": [
    ],
    "department": [
      {
        "@type": "MedicalSpecialty",
        "name": "Department of Gastroenterology and Hepatology",
        "physician": {
          "@type": "Physician",
          "name": doctorData.personalDetails.name,
          "medicalSpecialty": doctorData.personalDetails.specialty
        }
      }
    ]
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(locationSchema)}
      </script>
    </Helmet>
  );
};

// Export a combined SEO component that includes all schemas
export const ComprehensiveDoctorSEO: React.FC<{ doctorData: DoctorProfile; baseUrl: string }> = ({ doctorData, baseUrl }) => {
  return (
    <>
      <DoctorSEO doctorData={doctorData} baseUrl={baseUrl} />
      <DoctorFAQSchema doctorData={doctorData} baseUrl={baseUrl} />
      <HospitalLocationSchema doctorData={doctorData} baseUrl={baseUrl} />
    </>
  );
};
 