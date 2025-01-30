import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { doctorsServices } from '../data/services';

const DoctorFooter = () => {
  const [currentDoctor, setCurrentDoctor] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Get subdomain from hostname
    const subdomain = window.location.hostname.split('.')[0];
    const doctor = doctorsServices.find(doc => doc.sub === subdomain);
    setCurrentDoctor(doctor);

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (!currentDoctor) return null;

  // Dynamic background color based on doctor
  const bgColorClass = currentDoctor.sub === 'drmoumita' ? 'bg-amber-800' : 'bg-blue-700';

  return (
    <footer className={`${bgColorClass} text-white py-12 px-6 rounded-t-[40px] shadow-lg`}>
      <div className={`container mx-auto ${isMobile ? 'flex flex-col space-y-8' : 'grid grid-cols-1 md:grid-cols-4 gap-8'}`}>
        {/* Doctor Info */}
        <div className="space-y-4">
          <h3 className="font-fraunces text-2xl font-bold">{currentDoctor.name}</h3>
          <p className="text-sm opacity-90">{currentDoctor.title}</p>
          <p className="text-sm opacity-90">{currentDoctor.specialty}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-fraunces text-xl font-bold">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-white" />
              <p className="text-sm">{currentDoctor.contact}</p>
            </div>
            {currentDoctor.sub === 'drmoumita' && (
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-white" />
                <p className="text-sm">drmoumitasaha.16@gmail.com</p>
              </div>
            )}
            {currentDoctor.sub === 'drsushovan' && (
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-white" />
                <p className="text-sm">sushovancmc20@gmail.com</p>
              </div>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h3 className="font-fraunces text-xl font-bold">Address</h3>
          <div className="flex items-start space-x-2">
            <MapPin size={16} className="text-white mt-1 flex-shrink-0" />
            <p className="text-sm">
              House no 2.2, Administrative Block,<br />
              St Stephen Hospital Campus,<br />
              Tis Hazari, Delhi, 110054
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-fraunces text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-sm hover:text-gray-200 transition-colors">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-sm hover:text-gray-200 transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm hover:text-gray-200 transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/book-appointment" className="text-sm hover:text-gray-200 transition-colors">Book Appointment</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 pt-8 border-t border-white/20">
        <div className="text-center text-sm opacity-80">
          © {new Date().getFullYear()} {currentDoctor.name}. All rights reserved.
        </div>
      </div>
      
      {/* Website Credit */}
      <div className="text-center text-sm mt-4 opacity-70">
        Website by <a href="https://rnahealthtech.com" className="underline hover:no-underline">RNA HealthTech</a>
      </div>
    </footer>
  );
};

export default DoctorFooter;