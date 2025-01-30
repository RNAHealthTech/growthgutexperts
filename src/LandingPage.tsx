import React from 'react';
import { ArrowRight } from 'lucide-react';
import { drMoumitaData, drSushovanData } from './data/doctor';
import { useNavigate } from 'react-router-dom';
import LandingHero from './ui/LandingHero';
import ExpertiseSection from './ui/ExpertiseSection';

const LandingPage: React.FC = () => {

    const navigate = useNavigate();

    const navigateToSubdomain = (subdomain: string) => {
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;

        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            // For local development
            const port = window.location.port;
            const newUrl = `${protocol}//${subdomain}.localhost${port ? ':' + port : ''}/`;
            window.location.assign(newUrl);
        } else {
            // For production
            const domainParts = hostname.split('.');
            const mainDomain = domainParts.length > 2
                ? domainParts.slice(1).join('.')
                : hostname;

            const newUrl = `${protocol}//${subdomain}.${mainDomain}/`;
            window.location.assign(newUrl);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Hero Section */}
            <LandingHero />
            {/* Doctors Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Meet Our Expert Doctors
                    </h2>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Dr. Moumita's Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                            <div className="p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Dr. Moumita Saha</h3>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium whitespace-nowrap">
                                        Pediatric Endocrinologist
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-4">
                                    {drMoumitaData.about}
                                </p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {drMoumitaData.skills.slice(0, 3).map((skill, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100/80 text-gray-600 rounded-full text-sm backdrop-blur-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigateToSubdomain('drmoumita')}
                                    className="flex items-center justify-center w-full bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Dr. Sushovan's Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                            <div className="p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Dr. Sushovan Baidya</h3>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium whitespace-nowrap">
                                        Hepatologist
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-4">
                                    {drSushovanData.about}
                                </p>
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {drSushovanData.skills.slice(0, 3).map((skill, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100/80 text-gray-600 rounded-full text-sm backdrop-blur-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigateToSubdomain('drsushovan')}
                                    className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* create a section why growth gut experts ? demonstrate skills in visuals of each doctor and link their subdomain with explore more for both respective doctor */}
            <ExpertiseSection />
        </div>
    );
};

export default LandingPage;