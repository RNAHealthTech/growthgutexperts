import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { doctorsServices } from '../data/services';
import Banner from '../ui/instabanner';

const DoctorFooter = () => {
  const [currentDoctor, setCurrentDoctor] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  const drMoumitaTimings = [
    {
      hospital: "Fortis C-DOC, Greater Kailash",
      schedule: "Monday, Wednesday, Friday: 10:00 AM - 12:00 PM"
    },
    {
      hospital: "Sitaram Bhartia Institute of Science and Research, Qutub Institutional Area",
      schedule: "Tuesday: 10:00 AM - 12:00 PM, Friday: 4:00 PM - 5:00 PM"
    },
    {
      hospital: "Holy Family Hospital, Okhla, New Delhi",
      schedule: "Monday, Wednesday: 2:00 PM - 3:30 PM, Friday: 1:30 PM - 3:30 PM"
    },
    {
      hospital: "CK Birla, West Punjabi Bagh, Delhi",
      schedule: "Tuesday, Thursday: 2:00 PM - 4:00 PM"
    },
    {
      hospital: "Sanjeevan Hospital 24, Ansari Road, Darya Ganj, New Delhi, Delhi 110002",
      schedule: "Wednesday: 5:00 PM - 6:30 PM"
    }
  ];

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
      <div className={`container mx-auto ${isMobile ? 'flex flex-col space-y-8' : 'grid grid-cols-1 md:grid-cols-3 gap-20'}`}>
        {/* Doctor Info */}
        <div className="space-y-4">
          <h3 className="font-fraunces text-2xl font-bold">{currentDoctor.name}</h3>
          <p className="text-sm opacity-90">{currentDoctor.title}</p>
          <a 
            href='https://instagram.com/growthgutexperts'  
            className="inline-block px-4 py-2 rounded-md text-sm md:text-base font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 transition-all"
          >
            @growthgutexperts
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-fraunces text-xl font-bold">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
               <FaWhatsapp size={16} className="text-white" />
              <p className="text-sm">{currentDoctor.contact}</p>
            </div>
            {currentDoctor.sub === 'drmoumita' && (
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-white" />
                <p className="text-sm">drmoumita.paedendo@gmail.com</p>
              </div>
            )}
            {currentDoctor.sub === 'drsushovan' && (
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-white" />
                <p className="text-sm">drbaidya25@gmail.com</p>
              </div>
            )}
          </div>
        </div>

        {/* Address */}
       
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
          </ul>
        </div>
      </div>

      {/* Consultation Timings for Dr. Moumita Saha */}
      {currentDoctor.sub === 'drmoumita' && (
        <div className="container mx-auto mt-8 pt-8 border-t border-white/20">
          <h3 className="font-fraunces text-xl font-bold mb-4 flex items-center">
            <Clock size={18} className="mr-2" /> Consultation Timings
          </h3>
          <div className={`${isMobile ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}`}>
            {drMoumitaTimings.map((timing, index) => (
              <div key={index} className="bg-white/10 p-3 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">{timing.hospital}</h4>
                <p className="text-xs opacity-90">{timing.schedule}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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