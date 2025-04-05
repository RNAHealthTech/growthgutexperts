import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { Card, CardContent, Button } from '../ui/index';
import { MapPin, Phone, Mail, Linkedin, Calendar } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';
import CTA from './CTAComponents';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
  doctor: DoctorProfile;
  theme: 'drmoumita' | 'drsushovan';
}

const themeConfig = {
  drmoumita: {
    gradient: 'from-amber-800 via-amber-100/10 to-white',
    primary: 'text-white',
    secondary: 'text-amber-700',
    accent: 'amber-600',
    background: 'bg-amber-50',
    cardBg: 'bg-gradient-to-br from-amber-100/80 to-amber-50/80',
    hover: 'hover:text-amber-800',
    button: 'bg-amber-600 hover:bg-amber-700 text-white',
    tag: 'from-amber-500/10 to-amber-600/10 text-amber-700',
    border: 'border-amber-200',
  },
  drsushovan: {
    gradient: 'from-blue-900  via-blue-100/10 to-white',
    primary: 'text-blue-800',
    secondary: 'text-blue-600',
    accent: 'blue-600',
    background: 'bg-blue-50',
    cardBg: 'bg-gradient-to-br from-blue-100/80 to-blue-50/80',
    hover: 'hover:text-blue-800',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
    tag: 'from-blue-500/10 to-blue-600/10 text-blue-700',
    border: 'border-blue-200',
  }
};

const mapUrls = {
  drmoumita: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.763413932411!2d77.21203957592637!3d28.66680178252283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7458eee0db%3A0xbc22d8e585c02caa!2sSt.%20Stephen%27s%20Hospital!5e0!3m2!1sen!2sin!4v1743771131566!5m2!1sen!2sin",
  drsushovan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.763413932411!2d77.21203957592637!3d28.66680178252283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7458eee0db%3A0xbc22d8e585c02caa!2sSt.%20Stephen%27s%20Hospital!5e0!3m2!1sen!2sin!4v1743771131566!5m2!1sen!2sin"
};

/**
 * <iframe src="" 
 * width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 * 
*/

// Secondary map URL for Dr. Sushovan
const secondaryMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6193721508516!2d77.24040957592568!3d28.64116778368782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcd97cfadb5b%3A0xeec8c89cdfac676d!2sSanjeevan%20Hospital!5e0!3m2!1sen!2sin!4v1743771426683!5m2!1sen!2sin";

const ContactSection: React.FC<ContactProps> = ({ doctor, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const styles = themeConfig[theme];

  const domain = 'https://growthgutexperts.com';
  const seoTitle = `Contact ${doctor.personalDetails.name} - ${doctor.personalDetails.specialty} in Delhi`;
  
  // Generate description based on doctor profile
  const seoDescription = `Schedule an appointment with ${doctor.personalDetails.name}, specialist in ${doctor.personalDetails.description.toLowerCase()} Contact via phone, email, or visit at ${doctor.contactDetails.address}.`;

  // Render maps based on doctor theme
  const renderMaps = () => {
    if (theme === 'drsushovan') {
      return (
        <>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={mapUrls.drsushovan}
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Primary Location"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={secondaryMapUrl}
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Secondary Location"
            />
          </div>
        </>
      );
    } else {
      // Only one map for Dr. Moumita
      return (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={mapUrls.drmoumita}
            width="100%" 
            height="300" 
            style={{border:0}} 
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Location" 
          />
        </div>
      );
    }
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${doctor.personalDetails.name}, ${doctor.personalDetails.specialty.toLowerCase()}, appointment booking, Delhi doctor`} />
        <meta name="author" content={doctor.personalDetails.name} />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${domain}/contact`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://${domain}${doctor.personalDetails.imageUrl}`} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://${domain}/contact`} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://${domain}${doctor.personalDetails.imageUrl}`} />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": doctor.personalDetails.name,
            "image": `https://${domain}${doctor.personalDetails.imageUrl}`,
            "url": `https://${domain}`,
            "telephone": doctor.contactDetails.phone,
            "email": doctor.contactDetails.email,
            "description": doctor.personalDetails.description,
            "medicalSpecialty": doctor.personalDetails.specialty,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": doctor.contactDetails.address?.split(',').slice(0, -2).join(','),
              "addressLocality": "New Delhi",
              "postalCode": "110054",
              "addressCountry": "IN"
            },
            "knowsLanguage": doctor.personalDetails.languagesKnown,
            "alumniOf": doctor.education.map(edu => ({
              "@type": "CollegeOrUniversity",
              "name": edu.institute
            })),
            "memberOf": doctor.memberships,
            "workLocation": doctor.currentworkExperience.map(work => ({
              "@type": "Hospital",
              "name": work.organization,
              "department": work.department,
            })),
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": doctor.days.includes("Monday - Saturday") ? 
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] : 
                doctor.days.split(',').map(day => day.trim()),
              "opens": doctor.onlineTiming.split('-')[0].trim(),
              "closes": doctor.onlineTiming.split('-')[1].trim()
            }
          })}
        </script>
      </Helmet>
      <div className={`min-h-screen bg-gradient-to-b ${styles.gradient} p-6`}>
        <div className="max-w-7xl mx-auto mt-28 md:mt-48">
          <h1 className={`text-4xl font-bold text-center mb-8 ${styles.primary}`}>
            Contact Our Expert
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${styles.cardBg}`}>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={doctor.personalDetails.imageUrl}
                        alt={doctor.personalDetails.name}
                        className={`rounded-full border-4 ${styles.border}`}
                      />
                      <div className={`absolute inset-0 rounded-full `} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${styles.secondary}`}>
                        {doctor.personalDetails.name}
                      </h2>
                      <p className={styles.secondary}>{doctor.currentworkExperience[0].role}</p>
                      <p className={styles.secondary}>{doctor.currentworkExperience[0].department}</p>
                    </div>
                  </div>

                  <div className="space-y-4 divide-y divide-gray-100">
                    {/* <div className="flex items-start gap-3 pt-4">
                      <MapPin className={`${styles.secondary} mt-1 h-5 w-5`} />
                      <p className={styles.secondary}>{doctor.contactDetails.address}</p>
                    </div> */}

                    <div className="flex items-center gap-3 pt-4">
                      <Phone className={`${styles.secondary} h-5 w-5`} />
                      <FaWhatsapp className={`${styles.secondary} h-5 w-5`} />
                      <a href={`tel:${doctor.contactDetails.phone}`} className={`${styles.secondary} ${styles.hover}`}>
                        {doctor.contactDetails.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <Mail className={`${styles.secondary} h-5 w-5`} />
                      <a href={`mailto:${doctor.contactDetails.email}`} className={`${styles.secondary} ${styles.hover}`}>
                        {doctor.contactDetails.email}
                      </a>
                    </div>

                    {doctor.contactDetails.linkedIn && (
                      <div className="flex items-center gap-3 pt-4">
                        <Linkedin className={`${styles.secondary} h-5 w-5`} />
                        <a href={doctor.contactDetails.linkedIn} target="_blank" rel="noopener noreferrer" className={`${styles.secondary} ${styles.hover}`}>
                          LinkedIn Profile
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="pt-6">
                    <h3 className={`text-lg font-semibold ${styles.primary} mb-2`}>Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.personalDetails.languagesKnown.map((language) => (
                        <span
                          key={language}
                          className={`px-3 py-1 bg-gradient-to-r ${styles.tag} rounded-full text-sm`}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className={styles.cardBg}>
                <CardContent>
                  {renderMaps()}
                </CardContent>
              </Card>

              <Card className={styles.cardBg}>
                <CardContent>
                  <h3 className={`text-xl font-bold ${styles.secondary} mb-4 flex items-center gap-2`}>
                    <Calendar className={styles.secondary} />
                    Book an Appointment
                  </h3>
                  <div className="space-y-4">
                    <p className={styles.secondary}>
                      To schedule an appointment with {doctor.personalDetails.name},
                      please call our reception or send us an email.
                    </p>
                    <Button
                      className='w-full' variant='secondary'
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Request Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <AppointmentModal variant={theme} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </>
  );
};

export const DrMoumitaContact: React.FC<{ data: DoctorProfile }> = ({ data }) => (
  <ContactSection doctor={data} theme="drmoumita" />
);

export const DrSushovanContact: React.FC<{ data: DoctorProfile }> = ({ data }) => (
  <ContactSection doctor={data} theme="drsushovan" />
);

export default ContactSection;
