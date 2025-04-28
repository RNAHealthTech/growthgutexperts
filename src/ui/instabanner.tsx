import React, { useState } from 'react';

interface BannerProps {
  instagramHandle: string;
}

const Banner: React.FC<BannerProps> = ({ instagramHandle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto my-4 p-4 md:p-6 bg-transparent border border-gray-200 rounded-lg">
        {/* Text content */}
        <div className="text-gray-800 mb-4 md:mb-0 md:mr-4 flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Follow Growth Gut experts on Instagram</h1>
          <a 
            href='https://instagram.com/growthgutexperts'  
            className="inline-block px-4 py-2 rounded-full text-sm md:text-base font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 transition-all"
          >
            @{instagramHandle}
          </a>
        </div>
        
        {/* QR Code placeholder */}
        <div className="flex flex-col items-center">
          <div 
            className="bg-white p-2 rounded-lg w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={openModal}
          >
            <img 
              src="/images/insta-qr.jpeg" 
              alt="Instagram QR Code" 
              className="w-full h-full"
            />
          </div>
          <p className="text-gray-700 text-xs md:text-sm mt-2">Scan to follow us</p>
        </div>
      </div>

      {/* QR Code Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Instagram QR Code</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-4 flex items-center justify-center">
              <img 
                src="/images/insta-qr.jpeg" 
                alt="Instagram QR Code" 
                className="w-64 h-64"
              />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-700 mb-2">Follow @{instagramHandle} on Instagram</p>
              <a 
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 transition-all"
              >
                Open Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;