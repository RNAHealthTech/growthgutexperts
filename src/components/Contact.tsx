import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { Card, CardContent, Button } from '../ui/index';
import { MapPin, Phone, Mail, Linkedin, Calendar } from 'lucide-react';

interface ContactProps {
  doctorData: {
    drSushovan: DoctorProfile;
    drMoumita: DoctorProfile;
  };
}

const Contact = ({ doctorData }: ContactProps) => {
  const [selectedDoctor, setSelectedDoctor] = useState<'drSushovan' | 'drMoumita'>('drSushovan');
  const currentDoctor = doctorData[selectedDoctor];

  const mapUrls = {
    drSushovan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448202.3832158162!2d76.64028167724612!3d28.64231383040785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda893eca979%3A0x9d1dd214e1772fde!2sSt%20Stephens%20Hospital%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1738039938285!5m2!1sen!2sin",
    drMoumita: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.739702645385!2d79.13269661154943!3d12.924444287333966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3894c53f4cf7%3A0x4013f2038d8018bb!2sChristian%20Medical%20College%20Vellore!5e0!3m2!1sen!2sin!4v1738040152646!5m2!1sen!2sin"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Contact Our Experts
        </h1>
        

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="glass" className="backdrop-blur-md">
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={`/api/placeholder/150/150`} 
                      alt={currentDoctor.personalDetails.name}
                      className="rounded-full border-4 border-white/50"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {currentDoctor.personalDetails.name}
                    </h2>
                    <p className="text-gray-600">{currentDoctor.workExperience[0].role}</p>
                    <p className="text-gray-600">{currentDoctor.workExperience[0].department}</p>
                  </div>
                </div>

                <div className="space-y-4 divide-y divide-gray-100">
                  <div className="flex items-start gap-3 pt-4">
                    <MapPin className="text-blue-600 mt-1 h-5 w-5" />
                    <p className="text-gray-700">{currentDoctor.contactDetails.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Phone className="text-blue-600 h-5 w-5" />
                    <a href={`tel:${currentDoctor.contactDetails.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {currentDoctor.contactDetails.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Mail className="text-blue-600 h-5 w-5" />
                    <a href={`mailto:${currentDoctor.contactDetails.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {currentDoctor.contactDetails.email}
                    </a>
                  </div>

                  {currentDoctor.contactDetails.linkedIn && (
                    <div className="flex items-center gap-3 pt-4">
                      <Linkedin className="text-blue-600 h-5 w-5" />
                      <a href={currentDoctor.contactDetails.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentDoctor.personalDetails.languagesKnown.map((language) => (
                      <span 
                        key={language} 
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm text-blue-700"
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
            <Card variant="gradient">
              <CardContent>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={mapUrls[selectedDoctor]}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title='Map'
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4 flex items-center gap-2">
                  <Calendar className="text-blue-600" />
                  Book an Appointment
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    To schedule an appointment with {currentDoctor.personalDetails.name}, 
                    please call our reception or send us an email.
                  </p>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    leftIcon={<Calendar className="h-5 w-5" />}
                  >
                    Request Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;