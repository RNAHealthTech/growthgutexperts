import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { Card, CardContent, Button } from '../ui/index';
import { MapPin, Phone, Mail, Linkedin, Calendar, Clock, Instagram } from 'lucide-react';
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
  drmoumita: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.755739746838!2d77.24503748885499!3d28.547060699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3db92c5437f%3A0x5776bd8ffe80c26!2sFortis%20C-Doc%20Hospital%20%7C%20Best%20Hospital%20in%20Delhi!5e0!3m2!1sen!2sin!4v1745833346425!5m2!1sen!2sin",
  drsushovan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.763413932411!2d77.21203957592637!3d28.66680178252283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7458eee0db%3A0xbc22d8e585c02caa!2sSt.%20Stephen%27s%20Hospital!5e0!3m2!1sen!2sin!4v1743771131566!5m2!1sen!2sin"
};

/**
 * <iframe src="" 
 * width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 * 
*/

// Secondary map URL for Dr. Sushovan
const secondaryMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6193721508516!2d77.24040957592568!3d28.64116778368782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcd97cfadb5b%3A0xeec8c89cdfac676d!2sSanjeevan%20Hospital!5e0!3m2!1sen!2sin!4v1743771426683!5m2!1sen!2sin";
const secondaryMapUrl2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.264445738772!2d77.27253637592348!3d28.561820787287438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3929e6d3319%3A0xcd2355b56b80d9cf!2sHoly%20Family%20Hospital!5e0!3m2!1sen!2sin!4v1745833782593!5m2!1sen!2sin";


const mapUrl3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0622398317932!2d77.18209207592274!3d28.53784888837332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce207d1cc01db%3A0xe87a0c5886bae0d4!2sSitaram%20Bhartia%20Institute%20of%20Science%20and%20Research!5e0!3m2!1sen!2sin!4v1745834896247!5m2!1sen!2sin";
const mapUrl4 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7417738272898!2d77.12913037592635!3d28.667449582493358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03552412e88d%3A0x41cdf3e3f531217b!2sCK%20Birla%20Hospital%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745835024980!5m2!1sen!2sin";
const mapUrl5 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.619372150847!2d77.2404095759257!3d28.641167783687717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcd97cfadb5b%3A0xeec8c89cdfac676d!2sSanjeevan%20Hospital!5e0!3m2!1sen!2sin!4v1745835074864!5m2!1sen!2sin"

const ContactSection: React.FC<ContactProps> = ({ doctor, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const styles = themeConfig[theme];

  const domain = 'https://growthgutexperts.com';
  const seoTitle = `Contact ${doctor.personalDetails.name} - ${doctor.personalDetails.specialty} in Delhi`;

  // Generate description based on doctor profile
  const seoDescription = `Schedule an appointment with ${doctor.personalDetails.name}, specialist in ${doctor.personalDetails.description.toLowerCase()} Contact via phone, email, or visit at ${doctor.contactDetails.address}.`;

  const renderMaps = () => {
    if (theme === 'drsushovan') {
      return (
        <div className="space-y-6">
          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>St. Stephen's Hospital</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrls.drsushovan}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="St. Stephen's Hospital"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>Sanjeevan Hospital</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={secondaryMapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Sanjeevan Hospital"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>Fortis C-Doc Hospital</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrls.drmoumita}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Fortis C-Doc Hospital"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>Holy Family Hospital</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={secondaryMapUrl2}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Holy Family Hospital"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>Sitaram Bhartia Institute</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrl3}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Sitaram Bhartia Institute"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>CK Birla Hospital</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrl4}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="CK Birla Hospital"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className={`text-lg font-semibold ${styles.secondary} mb-3`}>Sanjeevan Hospital</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrl5}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Sanjeevan Hospital"
              />
            </div>
          </div>
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
                    {doctor.contactDetails.instagram && (
                      <div className="flex items-center gap-3 pt-4">
                        <Instagram className={`${styles.secondary} h-5 w-5`} />
                        <a href={doctor.contactDetails.instagram} target="_blank" rel="noopener noreferrer" className={`${styles.secondary} ${styles.hover}`}>
                          Instagram Profile
                        </a>
                      </div>
                    )}


                    <div className={`p-8 rounded-2xl backdrop-blur-sm border `}>
                      <h3 className={`text-xl font-semibold mb-6`}>Offline Consultation Locations</h3>
                      <div className="space-y-6">
                        {doctor.offline.map((location, index) => (
                          <div key={index} className={`p-4 rounded-lg transition-all duration-300 border`}>
                            <h4 className={`font-medium mb-3`}>
                              {location.hospital}
                            </h4>
                            <div className="space-y-2">
                              {location.schedules.map((schedule, scheduleIndex) => (
                                <div key={scheduleIndex} className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 mt-1">
                                    <Calendar className={`w-4 h-4 text-zinc-800`} />
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-700">{schedule.day}:</span>
                                    <span className="text-gray-600 ml-2">{schedule.timing}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
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
                </div>
              </CardContent>
            </Card>


            <Card className={`${styles.cardBg} overflow-y-auto max-h-[80vh] md:max-h-none`}>
              <CardContent className="p-4 md:p-6">
                <h2 className={`text-xl font-bold ${styles.secondary} mb-4`}>Clinic Locations</h2>
                <div className="overflow-y-auto pr-1">
                  {renderMaps()}
                </div>
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
      </div >
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
