import React from 'react';
import { DoctorProfile } from '../data/doctor';


interface MapSectionProps {
  variant: 'drmoumita' | 'drsushovan';
  data: DoctorProfile;
}

const mapUrls = {
  drmoumita: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.755739746838!2d77.24503748885499!3d28.547060699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3db92c5437f%3A0x5776bd8ffe80c26!2sFortis%20C-Doc%20Hospital%20%7C%20Best%20Hospital%20in%20Delhi!5e0!3m2!1sen!2sin!4v1745833346425!5m2!1sen!2sin",
  drsushovan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.502931168128!2d77.32986707538337!3d28.586749975670786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfaf555555555%3A0x5e56e07c330f62e7!2sKailash%20Hospital%20%26%20Heart%20Institute!5e0!3m2!1sen!2sin!4v1725000000000!5m2!1sen!2sin"
};

// Secondary maps
const secondaryMaps = {
  drmoumita: [
    {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.264445738772!2d77.27253637592348!3d28.561820787287438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3929e6d3319%3A0xcd2355b56b80d9cf!2sHoly%20Family%20Hospital!5e0!3m2!1sen!2sin!4v1745833782593!5m2!1sen!2sin",
      name: "Holy Family Hospital"
    },
    {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0622398317932!2d77.18209207592274!3d28.53784888837332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce207d1cc01db%3A0xe87a0c5886bae0d4!2sSitaram%20Bhartia%20Institute%20of%20Science%20and%20Research!5e0!3m2!1sen!2sin!4v1745834896247!5m2!1sen!2sin",
      name: "Sitaram Bhartia Institute"
    },
    {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7417738272898!2d77.12913037592635!3d28.667449582493358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03552412e88d%3A0x41cdf3e3f531217b!2sCK%20Birla%20Hospital%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745835024980!5m2!1sen!2sin",
      name: "CK Birla Hospital"
    }
  ],
  drsushovan: [
    {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.595908298734!2d77.39768657538967!3d28.618698775677737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2c12345678%3A0x1234567890abcdef!2sHeritage+Hospitals+Limited!5e0!3m2!1sen!2sin!4v1725075600000!5m2!1sen!2sin",
      name: "Heritage Hospital"
    }
  ]
};

// Theme config
const themeConfig = {
  drmoumita: {
    gradient: 'from-amber-800 via-amber-100/10 to-white',
    primary: 'text-amber-800',
    secondary: 'text-amber-700',
    background: 'bg-amber-50',
    cardBg: 'bg-gradient-to-br from-amber-100/80 to-amber-50/80',
    border: 'border-amber-200',
  },
  drsushovan: {
    gradient: 'from-blue-900 via-blue-100/10 to-white',
    primary: 'text-blue-800',
    secondary: 'text-blue-600',
    background: 'bg-blue-50',
    cardBg: 'bg-gradient-to-br from-blue-100/80 to-blue-50/80',
    border: 'border-blue-200',
  }
};

const MapSection: React.FC<MapSectionProps> = ({ variant, data }) => {
  const styles = themeConfig[variant];
  const hospitalName = variant === 'drmoumita' ? 'Fortis C-Doc Hospital' : 'Kailash Hospital and Heart Institute';
  
  return (
    <section className={`py-12 md:py-16 ${styles.background}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${styles.primary}`}>
            Our Locations
          </h2>
          <p className={`${styles.secondary} mb-6`}>
            {data.personalDetails.name} provides consultations at the following hospitals in Delhi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Location */}
          <div className={`rounded-lg shadow-md overflow-hidden ${styles.border} border`}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapUrls[variant]}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={hospitalName}
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className={`font-bold text-lg ${styles.primary}`}>{hospitalName}</h3>
              <p className="text-gray-600 text-sm">Main Consultation Center</p>
            </div>
          </div>
          
          {/* Secondary Location */}
          {secondaryMaps[variant][0] && (
            <div className={`rounded-lg shadow-md overflow-hidden ${styles.border} border`}>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={secondaryMaps[variant][0].url}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={secondaryMaps[variant][0].name}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className={`font-bold text-lg ${styles.primary}`}>{secondaryMaps[variant][0].name}</h3>
                <p className="text-gray-600 text-sm">Additional Consultation Center</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Additional Locations - Show maximum 2 more */}
        {secondaryMaps[variant].length > 1 && (
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryMaps[variant].slice(1, 3).map((location, index) => (
                <div key={index} className={`rounded-lg shadow-md overflow-hidden ${styles.border} border`}>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={location.url}
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={location.name}
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className={`font-bold text-lg ${styles.primary}`}>{location.name}</h3>
                    <p className="text-gray-600 text-sm">By Appointment Only</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* View All Locations Button - Only show if there are more than 3 locations */}
        {secondaryMaps[variant].length > 3 && (
          <div className="mt-8 text-center">
            <a 
              href="/contact" 
              className={`inline-block px-6 py-3 rounded-md bg-yellow-800 hover:bg-opacity-90 text-white font-medium transition-all`}
            >
              View All Locations
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;