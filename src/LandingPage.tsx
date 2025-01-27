import React from 'react';
import { ArrowRight } from 'lucide-react';
import { drMoumitaData, drSushovanData } from './data/doctor';
import { useNavigate } from 'react-router-dom';

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
            <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
                    <img
                        src="/images/bg.png"
                        alt="Medical background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl  font-bold text-gray-900 mb-6">
                        <span className="text-slate-600">Growth</span> & <span className="text-purple-600">Gut</span> Experts
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
                        Specialized care in Pediatric Endocrinology and Hepatology for comprehensive health management
                    </p>
                    <button className="bg-white text-red-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 hover:text-white transition-colors">
                        Book Consultation
                    </button>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Meet Our Expert Doctors
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Dr. Moumita's Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Dr. Moumita Saha</h3>
                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
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
                                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button onClick={() => navigateToSubdomain('drmoumita')} className="flex items-center justify-center w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                                Explore More <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Dr. Sushovan's Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Dr. Sushovan Baidya</h3>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                    Hepatologist
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-4">
                                Experienced Hepatologist specializing in liver diseases and transplant care. Trained at prestigious institutions including Christian Medical College, Vellore.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {drSushovanData.skills.slice(0, 3).map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button onClick={() => navigateToSubdomain('drsushovan')} className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Explore More <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;