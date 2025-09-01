import React from 'react';
import { ArrowRight } from 'lucide-react';
import { drMoumitaData, drSushovanData } from './data/doctor';
import LandingHero from './ui/LandingHero';
import ExpertiseSection from './ui/ExpertiseSection';
import ImageCarousel from './ui/ImageCarousel';
import Banner from './ui/instabanner';
import SocialMultiEmbed from './components/InstagramEmbed';
import { SocialPost } from './components/InstagramEmbed';

const LandingPage: React.FC = () => {

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

    const socialPosts: SocialPost[] = [
        // {
        //     url: 'https://www.instagram.com/p/DLFM586pEi2/',
        //     type: 'instagram',
        //     isReel: true,
        //     height: 640
        // },
        // {
        //     url: 'https://www.instagram.com/p/DK4biz2RIdY/',
        //     type: 'instagram',
        //     isReel: true,
        //     height: 640
        // },
        {
            url: 'https://www.instagram.com/p/DJDaeaHyZ6z/',
            type: 'instagram',
            isReel: true,
            height: 640
        },

        // {
        //     url: 'https://www.instagram.com/p/DGyE_5RSgWb/',
        //     type: 'instagram',
        //     isReel: true,
        //     height: 640
        // },
        // {
        //     url: 'https://www.facebook.com/NASH24x7/videos/2635072193363156/',
        //     type: 'facebook',
        //     isReel: false,
        //     height: 640
        // }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Hero Section */}
            <LandingHero />

            {/* Doctors Section with Carousel */}
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
                                        Hepatologist & Gastroenterologist
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
                                    className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg">
                                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* instagram and pdf section */}
                    <div className='max-w-7xl mx-auto mt-28 md:mt-40 mb-18'>
                        <h1 className='font-bold text-center justify-center text-3xl md:text-4xl text-gray-900 mb-8'>Resources - {' '}
                            Awareness for {' '}
                            <span className='text-yellow-600'>Wellness</span>
                        </h1>
                        <SocialMultiEmbed
                            posts={socialPosts}

                        />
                        <h4 className='text-xl mt-8 mx-4 font-bold text-red-500'>Pdf Resources</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                                <a href='/pdfs/ReLiver - Liver Health Magazine .pdf' className="flex items-center gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">ReLiver - Liver Health Magazine</h3>
                                    </div>
                                    <a
                                        href='/pdfs/ReLiver - Liver Health Magazine .pdf'
                                        download
                                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </a>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                                <a href='/pdfs/Diet for Healthy Liver.pdf' className="flex items-center gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Diet for Healthy Liver</h3>
                                    </div>
                                    <a
                                        href='/pdfs/Diet for Healthy Liver.pdf'
                                        download
                                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </a>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                                <a href='/pdfs/Foods to Avoid for Healthy Liver.pdf' className="flex items-center gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Foods to Avoid for Healthy Liver</h3>
                                    </div>
                                    <a
                                        href="/pdfs/Foods to Avoid for Healthy Liver.pdf"
                                        download
                                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </a>
                            </div>


                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                                <a href='/pdfs/Sugar List by GrowthGutExperts.pdf' className="flex items-center gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Sugar List by Growth & Gut Experts</h3>
                                    </div>
                                    <a
                                        href="/pdfs/Sugar List by GrowthGutExperts.pdf"
                                        download
                                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </a>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                                <a href='/pdfs/A GUIDE TO GLUTEN CONTENT IN FOODS.pdf' className="flex items-center gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">A GUIDE TO GLUTEN CONTENT IN FOODS</h3>
                                    </div>
                                    <a
                                        href="/pdfs/A GUIDE TO GLUTEN CONTENT IN FOODS.pdf"
                                        download
                                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </a>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-gray-100">
                                <a href='/pdfs/A GUIDE TO GLUTEN CONTENT IN FOODS(hindi).pdf' className="flex items-center gap-4">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">A GUIDE TO GLUTEN CONTENT IN FOODS (Hindi)</h3>
                                    </div>
                                    <a
                                        href="/pdfs/A GUIDE TO GLUTEN CONTENT IN FOODS(hindi).pdf"
                                        download
                                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </a>
                            </div>




                        </div>

                    </div>

                    {/* Image Carousel ADDED HERE - after doctor cards */}
                    <div className="max-w-7xl mx-auto mt-40 mb-10  ">
                        <h1 className='font-bold text-center justify-center text-3xl md:text-4xl text-gray-900 mb-8'>Gallery</h1>
                        <ImageCarousel />
                    </div>

                </div>
            </section>
            <ExpertiseSection id="expertise-section" />
            <Banner instagramHandle='growthgutexperts' />
        </div>
    );
};

export default LandingPage;