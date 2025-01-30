import React, { useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import AppointmentModal from "../components/BookAppointmentModal";

const AnimatedLetter = ({ letter }: { letter: string }) => (
    <motion.span
        className="inline-block"
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
    >
        {letter}
    </motion.span>
);

export const AnimatedWord = ({ word }: { word: string }) => (
    <motion.span
        className="inline-block"
        variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.05
                }
            }
        }}
    >
        {word.split('').map((letter, index) => (
            <AnimatedLetter key={index} letter={letter} />
        ))}
    </motion.span>
);

const LandingHero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.section
            className="relative min-h-[90vh] bg-gradient-to-br from-blue-900 to-blue-800 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full transform rotate-45" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full transform -rotate-45" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto pt-20 lg:pt-32 pb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Content Section */}
                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-left"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Specialized Medical Care
                        </motion.div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            <motion.span
                                className="block text-yellow-400 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Growth & Gut Experts
                            </motion.span>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="text-white/90"
                            >
                                <AnimatedWord word="Excellence" />
                                {' '}
                                <AnimatedWord word="Precision" />
                                {' & '}
                                <AnimatedWord word="Care" />
                            </motion.div>
                        </h1>

                        <motion.p
                            className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Specialized medical care in Pediatric Endocrinology and Hepatology, 
                            delivering comprehensive solutions for you and your family.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Book Appointment
                            </button>
                            <a href="#learn-more" 
                               className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                                Learn More
                            </a>
                        </motion.div>

                        {/* Rating Section */}
                        <motion.div
                            className="mt-12 flex items-center justify-center lg:justify-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-white font-semibold">5.0 Rating on Google</span>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Parallax translateY={[-20, 20]}>
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <motion.div
                                    className="absolute top-0 left-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 p-1 rounded-2xl">
                                        <img
                                            src="/images/bg.jpg"
                                            alt="Pediatric Care"
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-0 right-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 p-1 rounded-2xl">
                                        <img
                                            src="/images/guts.jpg"
                                            alt="Hepatology Care"
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>

            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.section>
    );
};

export default LandingHero;